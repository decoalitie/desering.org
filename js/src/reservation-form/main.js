import * as inputControllers from '../forms/input-controllers';
import { getTemplateRender, swapFormWithTemplate } from './templates';
import { MIN_PEOPLE_OWN_TABLE, SHARED_TABLE_START_TIME } from './config';

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
  watchFields('reservation-amount', handleReservationAmountChange);
  watchFields('table', handleTableChange);
  watchFields(['vegan-amount', 'vegetarian-amount'], handleDietCountsChange);

  reservationForm.style.display = 'block';
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

  updateDietCounts();
}

function handleDietCountsChange() {
  updateDietCounts();
}

function handleTableChange() {
  const sharedTableSelected = fields.table.value === "shared";
  getTemplateRender('start-time-input').visible = !sharedTableSelected;
  getTemplateRender('shared-table-start-time').visible = sharedTableSelected;

  if (sharedTableSelected) {
    fields["start-time"].value = SHARED_TABLE_START_TIME;
  }
}

function updateDietCounts() {
    const reservationAmount = fields["reservation-amount"].value;
    if (isNaN(reservationAmount)) {
      throw new Error('Cannot read reservation amount');
    }

    const inputFields = ["vegan-amount", "vegetarian-amount"];

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
      const otherInputValues = [...inputValues];
      otherInputValues.splice(index, 1);
      fields[fieldName].max = reservationAmount - otherInputValues.reduce((sum, current) => sum + current);
    });
  
    fields["nopref-amount"].value = remainder;
}

function showMessageOnCatch(fn) {
  try {
    fn();
  } catch (e) {
    const fatalErrorElement = document.getElementById('fatal-form-error');
    fatalErrorElement.style.display = 'block';

    throw e;
  }
}

showMessageOnCatch(main);

// reservationForm.addEventListener("submit", function (e) {
//   e.preventDefault();

//   const data = Object.fromEntries(
//     Object.entries(fields).map(([fieldName, field]) => [fieldName, field.value])
//   );
//   submitReservation({
//     ...data,
//     lang: reservationForm.dataset.formLang,
//   });
// });

// function submitReservation(data) {
//   const submitButton = reservationForm.querySelector('button[type="submit"]');

//   if (submitButton.classList.contains("loading")) {
//     return;
//   }
//   submitButton.classList.add("loading");

//   fetch(ENDPOINT, {
//     method: "post",
//     headers: {
//       "Content-Type": "application/x-www-form-urlencoded",
//     },
//     body: JSON.stringify(data),
//   })
//     .then((resp) => resp.json())
//     .then((data) => {
//       console.log(data);
//     })
//     .finally(() => {
//       submitButton.classList.remove("loading");
//     });
// }
