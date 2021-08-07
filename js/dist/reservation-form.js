(function () {
    'use strict';

    class InputController extends EventTarget {
        constructor(element) {
            super();

            this.element = element;
            this.name = element.name;
        }
    }

    /**
     * Manages a <select> input element.
     * For destop, converts the <option> to separate <input type="radio"> and <label>.
     */
    class SelectRadioList extends InputController {
      constructor(element) {
        super(element);

        this.optionElements = Array.from(element.querySelectorAll("option"));
        this.radioInputs = this.generateRadioInputs();

        element.addEventListener(
          "change",
          this.handleSelectChange.bind(this)
        );

        if (this.optionElements.length) {
          const defaultOption = this.optionElements.find(
            (el) => el.dataset.allowDefault !== undefined
          );
          this.value = (defaultOption || this.optionElements[0]).value;
        }
      }

      generateRadioInputs() {
        const radioList = document.createElement("div");
        radioList.className = `select-radio-list ${this.element.className}`;
        this.element.parentElement.insertBefore(
          radioList,
          this.element.nextSibling
        );

        return this.optionElements.map((option, index) => {
          const optionValue = option.getAttribute("value");
          const optionId = `${this.name}-option-${index}`;

          const radioInput = document.createElement("input");
          radioInput.setAttribute("type", "radio");
          radioInput.setAttribute("value", optionValue);
          radioInput.setAttribute("name", `${this.name}-radio`);
          radioInput.setAttribute("id", optionId);
          radioInput.addEventListener("change", this.handleRadioChange.bind(this));
          radioList.appendChild(radioInput);

          const label = document.createElement("label");
          label.innerHTML = option.innerHTML;
          label.setAttribute("for", optionId);
          radioList.appendChild(label);

          if (option.dataset.tag) {
            option.innerText += ` (${option.dataset.tag})`;
            const tagElement = document.createElement("span");
            tagElement.className = "tag";
            tagElement.innerText = option.dataset.tag;
            label.appendChild(tagElement);
          }

          return radioInput;
        });
      }

      get disabled() {
        return this.element.disabled;
      }

      set disabled(isDisabled) {
        this.element.disabled = isDisabled;

        if (isDisabled) {
          for (const radio of this.radioInputs) {
            radio.disabled = radio.value !== this.element.value;
          }
        } else {
          this.radioInputs.forEach((radio) => {
            radio.disabled = false;
          });
        }
      }

      get value() {
        return this.element.value;
      }

      set value(newValue) {
        this.element.value = newValue;
        this.updateRadioButtonChecked();
      }

      get selectedOptionElement() {
        return this.optionElements.find((el) => el.value === this.value);
      }

      updateRadioButtonChecked() {
        for (const radioInput of this.radioInputs) {
          radioInput.checked = radioInput.value === this.value;
        }
      }

      handleRadioChange(e) {
        this.element.value = e.currentTarget.value;
        this.dispatchEvent(new Event("change"));
      }

      handleSelectChange() {
        this.updateRadioButtonChecked();
        this.dispatchEvent(new Event("change"));
      }
    }

    class NumberWithSteppers extends InputController {
      constructor(inputElement) {
        super(inputElement);

        const wrapper = this.element.parentElement;

        this.element.addEventListener("change", () => {
          this.dispatchEvent(new Event("change"));
        });

        this.element.addEventListener("animationend", () => {
          this.element.classList.remove("changed");
        });

        const minButton = document.createElement("button");
        minButton.className = "stepper remove";
        wrapper.appendChild(minButton);
        minButton.addEventListener("click", this.handleMinClick.bind(this));

        const plusButton = document.createElement("button");
        plusButton.className = "stepper add";
        plusButton.addEventListener("click", this.handePlusClick.bind(this));
        wrapper.appendChild(plusButton);
      }

      handleMinClick(e) {
        e.preventDefault();
        this.element.stepDown();
        this.dispatchEvent(new Event("change"));
        this.element.classList.add("changed");
      }

      handePlusClick(e) {
        e.preventDefault();
        this.element.stepUp();
        this.dispatchEvent(new Event("change"));
        this.element.classList.add("changed");
      }

      get value() {
        return this.element.value === undefined
          ? this.element.value
          : parseInt(this.element.value, 10);
      }

      get safeValue() {
        const parsed = this.value;

        if (isNaN(parsed) || parsed === undefined) {
          const fallback = this.element.min
            ? parseInt(this.element.min, 10)
            : 0;

          this.element.value = fallback;
          return fallback;
        }
        return parsed;
      }

      set value(value) {
        this.element.value = value;
      }
    }

    var inputControllers = /*#__PURE__*/Object.freeze({
        __proto__: null,
        SelectRadioList: SelectRadioList,
        NumberWithSteppers: NumberWithSteppers
    });

    const reservationForm = document.querySelector("#reservation-form");

    Object.fromEntries(
      Array.from(reservationForm.elements)
        .filter((element) => element.name)
        .map((element) => [
          element.name,
          element.dataset.inputController
            ? new inputControllers[element.dataset.inputController](element)
            : element,
        ])
    );

    // import SelectRadioList from "../forms/SelectRadioList";
    // import NumberWithSteppers from "../forms/NumberWithSteppers";
    // import { renderFeedbackMessage } from "../forms/FeedbackMessage";

    // const ENDPOINT =
    //   "https://script.google.com/macros/s/AKfycbwqk5ZIQYZ3dT00uiIk7E5x4yJQnfzO1gsIXS4HJ5xJD8EyAWpWEWTKSVbxBHQ4svDM/exec";

    // const MIN_PEOPLE_OWN_TABLE = 5;
    // const SHARED_TABLE_START_TIME = "19:00";

    // const mainContentWrapper = document.querySelector("#wrapper-main-content");
    // const reservationForm = document.querySelector("#form-reservation");

    // const FieldHandlers = { SelectRadioList, NumberWithSteppers };

    // renderFeedbackMessage("table", "start-time-fieldset", false);



    // if (!fields.date.optionElements.length) {
    //   switchPageToTemplate("no-dates");
    // }

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

}());
