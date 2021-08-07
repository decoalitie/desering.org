import * as inputControllers from '../forms/input-controllers';
import { getTemplateRender, swapFormWithTemplate } from './templates';

const reservationForm = document.querySelector("#reservation-form");

const startTimeInput = getTemplateRender('start-time-input');

const fields = Object.fromEntries(
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
}

// import SelectRadioList from "../forms/SelectRadioList";
// import NumberWithSteppers from "../forms/NumberWithSteppers";
// import { renderFeedbackMessage } from "../forms/FeedbackMessage";


// const mainContentWrapper = document.querySelector("#wrapper-main-content");
// const reservationForm = document.querySelector("#form-reservation");

// const FieldHandlers = { SelectRadioList, NumberWithSteppers };

// renderFeedbackMessage("table", "start-time-fieldset", false);





// function handleDateChange() {
//   renderFeedbackMessage(
//     "date",
//     "fully-booked",
//     fields.date.selectedOptionElement.dataset.fullyBooked !== undefined
//   );
// }
// fields.date.addEventListener("change", handleDateChange);
// handleDateChange();

// function handleReservationAmountChange() {
//   const amount = fields["reservation-amount"].value;
//   const sufficient = amount >= MIN_PEOPLE_OWN_TABLE;

//   if (!sufficient) {
//     fields.table.value = "shared";
//     handleTableChange();
//   }
//   fields.table.disabled = !sufficient;

//   updateDietCounts();
// }
// fields["reservation-amount"].addEventListener(
//   "change",
//   handleReservationAmountChange
// );
// handleReservationAmountChange();

// renderFeedbackMessage(
//   "table",
//   "shared-table-start-time",
//   fields.table.value === "shared"
// );
// function handleTableChange() {
//   renderFeedbackMessage(
//     "table",
//     "start-time-fieldset",
//     fields.table.value !== "shared"
//   );
//   renderFeedbackMessage(
//     "table",
//     "shared-table-start-time",
//     fields.table.value === "shared"
//   );

//   if (fields.table.value === "shared") {
//     fields["start-time"].value = SHARED_TABLE_START_TIME;
//   }
// }
// fields.table.addEventListener("change", handleTableChange);

// function updateDietCounts() {
//   const reservationAmount = fields["reservation-amount"].value;
//   if (isNaN(reservationAmount)) {
//     return;
//   }

//   let vegan = fields["vegan-amount"].safeValue;
//   let vegetarian = fields["vegetarian-amount"].safeValue;
//   let remainder = reservationAmount - vegan - vegetarian;

//   if (remainder < 0) {
//     vegan = 0;
//     vegetarian = 0;
//     fields["vegan-amount"].value = 0;
//     fields["vegetarian-amount"].value = 0;
//     remainder = reservationAmount;
//   }

//   fields["vegan-amount"].inputElement.max = vegan + remainder;
//   fields["vegetarian-amount"].inputElement.max = vegetarian + remainder;

//   fields["nopref-amount"].value =
//     reservationAmount -
//     fields["vegan-amount"].value -
//     fields["vegetarian-amount"].value;
// }
// fields["vegan-amount"].addEventListener("change", updateDietCounts);
// fields["vegetarian-amount"].addEventListener("change", updateDietCounts);
// updateDietCounts();

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

// setTimeout(() => {
//   document.body.classList.add("enable-appear-transitions");
// }, 300);

// function switchPageToTemplate(templateId) {
//   const template = document.querySelector(`#template-${templateId}`);
//   reservationForm.style.display = "none";

//   mainContentWrapper.appendChild(
//     template.content.firstElementChild.cloneNode(true)
//   );
// }

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
