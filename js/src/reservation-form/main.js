import { isBefore } from 'date-fns';
import * as inputControllers from '../forms/input-controllers';
import { getTemplateRender, swapFormWithTemplate } from './templates';
import { MIN_PEOPLE_OWN_TABLE, SHARED_TABLE_START_TIME, ENDPOINT, SHOW_DATE_UNTIL } from './config';
import { getReservationsForDate, removeOldReservations, storeReservation } from "./reservations";

const reservationForm = document.querySelector("#reservation-form");
let fields, startTimeInput, ignoreAlreadyReservedForDate = null;

function main() {
  // disabled because start time is fixed to 19:00
  // render the start-time-input template (not visible) to make sure the field is initialized
  // startTimeInput = getTemplateRender('start-time-input');

  // remove dates in past
  for (const dateOption of reservationForm.elements.date.querySelectorAll('option')) {
    const optionTime = new Date(`${dateOption.value}${SHOW_DATE_UNTIL}`);

    if (isBefore(optionTime, new Date())) {
      reservationForm.elements.date.removeChild(dateOption);
    }
  }

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

  if (fields.date.optionElements.some(el => el.textContent.trim().length > 36)) {
    for (const dateOption of fields.date.optionElements) {
      dateOption.textContent = dateOption.textContent.trim().replace(/^\S+/, match => match.substring(0, 2).toUpperCase());
    }
  }

  watchFields('date', handleDateChange);
  watchFields('table', handleTableChange); 
  watchFields('reservation-amount', handleReservationAmountChange);
  watchFields(['vegan-amount', 'vegetarian-amount'], handleDietCountsChange, false);
  watchFields('verify-corona-check', handleCoronaCheckChange); 
  // watchFields('test-amount', handleTestAmountChange, false);

  reservationForm.addEventListener("submit", function (e) {
    e.preventDefault();

    showMessageOnCatch(() => {
      submitReservation({
        ...Object.fromEntries(
          Object.entries(fields).map(([fieldName, field]) => [fieldName, field.value])
        ),
        ['consent-email-contact']: !!fields['consent-email-contact'].checked,
        ['notest-amount']: fields['reservation-amount'].value,
        ['test-amount']: 0,
      });
    });
  });

  reservationForm.style.display = 'block';

  removeOldReservations(fields.date.optionElements.map(option => option.value));
}

function watchFields(fieldNames, onChange, immediate = true) {
  [].concat(fieldNames).forEach(fieldName => {
    fields[fieldName].addEventListener("change", () => showMessageOnCatch(onChange));
  });
  if (immediate) {
    onChange();
  }
}

function handleCoronaCheckChange() {
  const submitButton = reservationForm.querySelector('button[type="submit"]');
  submitButton.disabled = !fields['verify-corona-check'].checked;
}

function handleDateChange() {
  const { fullyBooked, special, specialDescription } = fields.date.selectedOptionElement.dataset;
  const specialElement = getTemplateRender('special-description');
  if (specialDescription !== undefined) {
    specialElement.element.querySelector('h4').innerText = special;
    specialElement.element.querySelector('p').innerText = specialDescription;
    if (specialElement.visible) {
      specialElement.refreshHeight();
    }
  }
  specialElement.visible = specialDescription !== undefined;
  getTemplateRender('fully-booked').visible = fullyBooked !== undefined;

  if (ignoreAlreadyReservedForDate && ignoreAlreadyReservedForDate !== fields.date.value) {
    ignoreAlreadyReservedForDate = null;
  }

  const previousReservations = getReservationsForDate(fields.date.value);
  if (previousReservations.length && !ignoreAlreadyReservedForDate) {
    getTemplateRender('already-reserved').visible = true;
    reservationForm.classList.add('already-reserved');
    document.querySelector('.confirm-already-reserved-button').addEventListener('click', handleConfirmAlreadyReservedClick)
  } else {
    const confirmButton = document.querySelector('.confirm-already-reserved-button');

    if (confirmButton) {
      confirmButton.removeEventListener('click', handleConfirmAlreadyReservedClick);
    }
    getTemplateRender('already-reserved').visible = false;
    reservationForm.classList.remove('already-reserved');
  }
}

function handleConfirmAlreadyReservedClick(e) {
  e.preventDefault();
  ignoreAlreadyReservedForDate = fields.date.value;
  handleDateChange();
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
  // updateAmountInputs(["test-amount"], "notest-amount");
}

function handleDietCountsChange() {
  updateAmountInputs(["vegan-amount", "vegetarian-amount"], "nopref-amount");
}

// function handleTestAmountChange() {
//   updateAmountInputs(["test-amount"], "notest-amount");
// }


function handleTableChange() {
  // start time fixed to 19:00 -- no longer necessary
  /* 
  const sharedTableSelected = fields.table.value === "shared";
  getTemplateRender('start-time-input').visible = !sharedTableSelected;
  getTemplateRender('shared-table-start-time').visible = sharedTableSelected;

  if (sharedTableSelected) {
    fields["start-time"].value = SHARED_TABLE_START_TIME;
  }
  */
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

function showFatalErrorMessage(e) {
  const fatalErrorElement = document.getElementById('fatal-form-error');
  fatalErrorElement.style.display = 'block';
  reservationForm.style.display = 'none';

  if (e.message) {
    const errorElement = fatalErrorElement.querySelector('pre');
    errorElement.innerHTML = e.message;
  }
}

function showMessageOnCatch(fn) {
  try {
    fn();
  } catch (e) {
    showFatalErrorMessage(e);

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
    .then(({ success, error, values }) => {
      if (success) {
        swapFormWithTemplate('success');
        storeReservation(values);
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
