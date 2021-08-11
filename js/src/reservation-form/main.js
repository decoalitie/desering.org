import * as inputControllers from '../forms/input-controllers';
import { getTemplateRender, swapFormWithTemplate } from './templates';
import { MIN_PEOPLE_OWN_TABLE, SHARED_TABLE_START_TIME, ENDPOINT } from './config';

const reservationForm = document.querySelector("#reservation-form");
let fields, startTimeInput;

function main() {
  // render the start-time-input template (not visible) to make sure the field is initialized
  startTimeInput = getTemplateRender('start-time-input');

  // initialize all fields
  fields = Object.fromEntries(
    Array.from(reservationForm.elements)
      .filter((element) => element.name)
      .map((element) => [
        element.name,
        element.dataset.inputController
          ? new inputControllers[element.dataset.inputController](element)
          : element,
      ])
  );

  if (!fields.date.optionElements.length) {
    swapFormWithTemplate("no-dates");
    return;
  }

  watchFields('date', handleDateChange);
  watchFields('table', handleTableChange);
  watchFields('reservation-amount', handleReservationAmountChange);
  watchFields(['vegan-amount', 'vegetarian-amount'], handleDietCountsChange, false);
  watchFields('test-amount', handleTestAmountChange, false);


  reservationForm.addEventListener("submit", function (e) {
    e.preventDefault();

    submitReservation({
      ...Object.fromEntries(
        Object.entries(fields).map(([fieldName, field]) => [fieldName, field.value])
      ),
      ['consent-email-contact']: !!fields['consent-email-contact'].checked
    });
  });

  const underConstruction = document.getElementById('under-construction');
  const underConstructionConfirm = document.getElementById('confirm-under-construction');
  underConstructionConfirm.addEventListener('click', () => {
    underConstruction.style.display = 'none';
    reservationForm.style.display = 'block';
  });
  underConstruction.style.display = 'block';
}

function watchFields(fieldNames, onChange, immediate = true) {
  [].concat(fieldNames).forEach(fieldName => {
    fields[fieldName].addEventListener("change", () => showMessageOnCatch(onChange));
  });
  if (immediate) {
    onChange();
  }
}

function handleDateChange() {
  getTemplateRender('fully-booked').visible = fields.date.selectedOptionElement.dataset.fullyBooked !== undefined;
}

function handleReservationAmountChange() {
  const amount = fields["reservation-amount"].safeValue;
  const sufficient = amount >= MIN_PEOPLE_OWN_TABLE;

  if (!sufficient) {
    fields.table.value = "shared";
    handleTableChange();
  }
  fields.table.disabled = !sufficient;

  updateAmountInputs(["vegan-amount", "vegetarian-amount"], "nopref-amount");
  updateAmountInputs(["test-amount"], "notest-amount");
}

function handleDietCountsChange() {
  updateAmountInputs(["vegan-amount", "vegetarian-amount"], "nopref-amount");
}

function handleTestAmountChange() {
  updateAmountInputs(["test-amount"], "notest-amount");
}

function handleTableChange() {
  const sharedTableSelected = fields.table.value === "shared";
  getTemplateRender('start-time-input').visible = !sharedTableSelected;
  getTemplateRender('shared-table-start-time').visible = sharedTableSelected;

  if (sharedTableSelected) {
    fields["start-time"].value = SHARED_TABLE_START_TIME;
  }
}

function updateAmountInputs(inputFields, remainderField) {
  const reservationAmount = fields["reservation-amount"].value;
  if (isNaN(reservationAmount)) {
    throw new Error('Cannot read reservation amount');
  }

  let remainder;
  let inputValues;

  const countValues = () => {
    inputValues = inputFields.map(fieldName => fields[fieldName].safeValue);
    remainder = reservationAmount - inputValues.reduce((sum, current) => sum + current);
  }

  countValues();

  while (remainder < 0) {
    const firstFieldWithValue = inputFields.find((field, index) => inputValues[index] > 0);
    if (!firstFieldWithValue) {
      throw new Error('Expected fields with non-negative values');
    }
    fields[firstFieldWithValue].value = Math.max(0, fields[firstFieldWithValue].value + remainder);
    countValues();
  }

  inputFields.forEach((fieldName, index) => {
    if (inputValues.length > 1) {
      const otherInputValues = [...inputValues];
      otherInputValues.splice(index, 1);
      fields[fieldName].max = reservationAmount - otherInputValues.reduce((sum, current) => sum + current);
    } else {
      fields[fieldName].max = reservationAmount;
    }
  });

  fields[remainderField].value = remainder;
}

function showFatalErrorMessage() {
  const fatalErrorElement = document.getElementById('fatal-form-error');
  fatalErrorElement.style.display = 'block';
  reservationForm.style.display = 'none';
}

function showMessageOnCatch(fn) {
  try {
    fn();
  } catch (e) {
    showFatalErrorMessage();

    throw e;
  }
}

function submitReservation(data) {
  const submitButton = reservationForm.querySelector('button[type="submit"]');

  if (submitButton.classList.contains("loading")) {
    return;
  }
  submitButton.classList.add("loading");

  fetch(ENDPOINT, {
    method: "post",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: JSON.stringify(data),
  })
    .then((resp) => resp.json())
    .then(({ success, error }) => {
      if (success) {
        swapFormWithTemplate('success');
      } else {
        const { description, fields } = error;

        if (fields && fields.length) {
          if (fields.some(field => field.fatal)) {
            showFatalErrorMessage();
          } else {
            const feedbackElements = document.querySelectorAll('[data-field-feedback-for]');

            let scrollToElement = null;
            for (const element of feedbackElements) {
              const targetField = element.dataset?.fieldFeedbackFor;
              const fieldError = fields.find(({ field }) => field === targetField);
              if (fieldError) {
                const errorElement = document.createElement('div');
                errorElement.classList.add('field-error');
                errorElement.innerText = fieldError.error;
                element.appendChild(errorElement);

                if (!scrollToElement) {
                  scrollToElement = element;
                }
              } else {
                while(element.firstChild) {
                  element.removeChild(element.firstChild);
                }
              }
            }

            if (scrollToElement) {
              scrollToElement.scrollIntoView();
            }
          }
        } else {
          showFatalErrorMessage();
        }
      }
    })
    .catch((e) => {
      const fatalErrorElement = document.getElementById('fatal-form-error');
      fatalErrorElement.style.display = 'block';
      reservationForm.style.display = 'none';
    })
    .finally(() => {
      submitButton.classList.remove("loading");
    });
}

showMessageOnCatch(main);
