"use strict";
const ENDPOINT =
  "https://script.google.com/macros/s/AKfycbwqk5ZIQYZ3dT00uiIk7E5x4yJQnfzO1gsIXS4HJ5xJD8EyAWpWEWTKSVbxBHQ4svDM/exec";

const MIN_PEOPLE_OWN_TABLE = 5;
const SHARED_TABLE_START_TIME = '19:00';

const mainContentWrapper = document.querySelector("#wrapper-main-content");
const reservationForm = document.querySelector("#form-reservation");

/**
 * Manages a <select> input element.
 * For destop, converts the <option> to separate <input type="radio"> and <label>.
 */
class SelectRadioList extends EventTarget {
  // todo: event-target-shim
  constructor(selectElement) {
    super();
    this.selectElement = selectElement;
    this.name = selectElement.getAttribute("name");

    this.optionElements = Array.from(selectElement.querySelectorAll("option"));
    this.radioInputs = this.generateRadioInputs();

    selectElement.addEventListener(
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
    radioList.className = "select-radio-list";
    this.selectElement.parentElement.insertBefore(
      radioList,
      this.selectElement.nextSibling
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
    return this.selectElement.disabled;
  }

  set disabled(isDisabled) {
    this.selectElement.disabled = isDisabled;

    if (isDisabled) {
      for (const radio of this.radioInputs) {
        radio.disabled = radio.value !== this.selectElement.value;
      }
    } else {
      this.radioInputs.forEach((radio) => {
        radio.disabled = false;
      });
    }
  }

  get value() {
    return this.selectElement.value;
  }

  set value(newValue) {
    this.selectElement.value = newValue;
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
    this.selectElement.value = e.currentTarget.value;
    this.dispatchEvent(new Event("change"));
  }

  handleSelectChange() {
    this.updateRadioButtonChecked();
    this.dispatchEvent(new Event("change"));
  }
}

class FeedbackMessage {
  constructor(parent, templateElement) {
    this.messageElement =
      templateElement.content.firstElementChild.cloneNode(true);
    this.wrapperElement = document.createElement("div");
    this.wrapperElement.classList.add("appear-expand-height");

    this.wrapperElement.appendChild(this.messageElement);
    parent.appendChild(this.wrapperElement);

    this.visible = false;
    this.reducedMotion = (() => {
      const query = window.matchMedia("(prefers-reduced-motion: reduce)");
      return !query || query.matches;
    })();
  }

  show() {
    if (this.visible) {
      return;
    }
    this.visible = true;

    this.clearCollapseCompleteHandler();
    this.wrapperElement.style.display = "block";
    this.wrapperElement.style.maxHeight = `${this.wrapperElement.scrollHeight}px`;
  }

  hide() {
    if (!this.visible) {
      return;
    }
    this.visible = false;

    if (this.reducedMotion) {
      this.wrapperElement.style.display = "none";
      return;
    }

    this.wrapperElement.style.maxHeight = 0;

    this.collapseCompleteHandler = () => {
      this.wrapperElement.style.display = "none";
      this.clearCollapseCompleteHandler();
    };

    this.wrapperElement.addEventListener(
      "transitionend",
      this.collapseCompleteHandler
    );
    setTimeout(() => {
      this.clearCollapseCompleteHandler();
      if (!this.visible) {
        this.wrapperElement.style.display = "none";
      }
    }, 600);
  }

  clearCollapseCompleteHandler() {
    if (this.collapseCompleteHandler) {
      this.wrapperElement.removeEventListener(
        "transitionend",
        this.collapseCompleteHandler
      );
      this.collapseCompleteHandler = null;
    }
  }
}

class NumberWithSteppers extends EventTarget {
  constructor(inputElement) {
    super();
    this.inputElement = inputElement;

    this.inputElement.addEventListener("change", () => {
      this.dispatchEvent(new Event("change"));
    });

    this.inputElement.addEventListener("animationend", () => {
      this.inputElement.classList.remove("changed");
    });

    const wrapper = this.inputElement.parentElement;

    const minButton = document.createElement("button");
    minButton.className = "number-step number-step-remove";
    wrapper.appendChild(minButton);
    minButton.addEventListener("click", this.handleMinClick.bind(this));

    const plusButton = document.createElement("button");
    plusButton.className = "number-step number-step-add";
    plusButton.addEventListener("click", this.handePlusClick.bind(this));
    wrapper.appendChild(plusButton);
  }

  handleMinClick(e) {
    e.preventDefault();
    this.inputElement.stepDown();
    this.dispatchEvent(new Event("change"));
    this.inputElement.classList.add("changed");
  }

  handePlusClick(e) {
    e.preventDefault();
    this.inputElement.stepUp();
    this.dispatchEvent(new Event("change"));
    this.inputElement.classList.add("changed");
  }

  get value() {
    return this.inputElement.value === undefined
      ? this.inputElement.value
      : parseInt(this.inputElement.value, 10);
  }

  get safeValue() {
    const parsed = this.value;

    if (isNaN(parsed) || parsed === undefined) {
      const fallback = this.inputElement.min
        ? parseInt(this.inputElement.min, 10)
        : 0;

      this.inputElement.value = fallback;
      return fallback;
    }
    return parsed;
  }

  set value(value) {
    this.inputElement.value = value;
  }
}

const FieldHandlers = { SelectRadioList, NumberWithSteppers };

/**
 * This is the first function called (bottom of this file) that triggers setup
 */
function setupForm() {
  renderFeedbackMessage("table", "start-time-fieldset", false);

  const fields = Object.fromEntries(
    Array.from(reservationForm.elements)
      .filter((element) => element.name)
      .map((element) => [
        element.name,
        element.dataset.fieldHandler
          ? new FieldHandlers[element.dataset.fieldHandler](element)
          : element,
      ])
  );

  if (!fields.date.optionElements.length) {
    switchPageToTemplate("no-dates");
    return;
  }

  function handleDateChange() {
    renderFeedbackMessage(
      "date",
      "fully-booked",
      fields.date.selectedOptionElement.dataset.fullyBooked !== undefined
    );
  }
  fields.date.addEventListener("change", handleDateChange);
  handleDateChange();

  function handleReservationAmountChange() {
    const amount = fields["reservation-amount"].value;
    const sufficient = amount >= MIN_PEOPLE_OWN_TABLE;

    if (!sufficient) {
      fields.table.value = "shared";
      handleTableChange();
    }
    fields.table.disabled = !sufficient;

    updateDietCounts();
  }
  fields["reservation-amount"].addEventListener(
    "change",
    handleReservationAmountChange
  );
  handleReservationAmountChange();

  renderFeedbackMessage(
    "table",
    "shared-table-start-time",
    fields.table.value === "shared"
  );
  function handleTableChange() {
    renderFeedbackMessage(
      "table",
      "start-time-fieldset",
      fields.table.value !== "shared"
    );
    renderFeedbackMessage(
      "table",
      "shared-table-start-time",
      fields.table.value === "shared"
    );

    if (fields.table.value === 'shared') {
      fields['start-time'].value = SHARED_TABLE_START_TIME;
    }
  }
  fields.table.addEventListener("change", handleTableChange);

  function updateDietCounts() {
    const reservationAmount = fields["reservation-amount"].value;
    if (isNaN(reservationAmount)) {
      return;
    }

    let vegan = fields["vegan-amount"].safeValue;
    let vegetarian = fields["vegetarian-amount"].safeValue;
    let remainder = reservationAmount - vegan - vegetarian;

    if (remainder < 0) {
      vegan = 0;
      vegetarian = 0;
      fields["vegan-amount"].value = 0;
      fields["vegetarian-amount"].value = 0;
      remainder = reservationAmount;
    }

    fields["vegan-amount"].inputElement.max = vegan + remainder;
    fields["vegetarian-amount"].inputElement.max = vegetarian + remainder;

    fields["nopref-amount"].value =
      reservationAmount -
      fields["vegan-amount"].value -
      fields["vegetarian-amount"].value;
  }
  fields["vegan-amount"].addEventListener("change", updateDietCounts);
  fields["vegetarian-amount"].addEventListener("change", updateDietCounts);
  updateDietCounts();

  reservationForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const data = Object.fromEntries(
      Object.entries(fields).map(([fieldName, field]) => [
        fieldName,
        field.value,
      ])
    );
    submitReservation({
      ...data,
      lang: reservationForm.dataset.formLang,
    });
  });

  setTimeout(() => {
    document.body.classList.add("enable-appear-transitions");
  }, 300);
}

const renderFeedbackMessage = (function () {
  const messages = {};

  const defaultMessages = document.querySelectorAll(
    "[data-field-feedback-for] > div[data-message]"
  );
  for (const messageElement of defaultMessages) {
    const fieldName = messageElement.parentElement.dataset.fieldFeedbackFor;
    if (!messages[fieldName]) {
      messages[fieldName] = {};
    }
    messageElement.classList.add("appear-expand-height");
    messages[fieldName][messageElement.dataset.message] = new FeedbackMessage(
      messageElement
    );
  }

  return function (fieldName, messageTemplateId, show = true) {
    const feedbackElement = reservationForm.querySelector(
      `[data-field-feedback-for="${fieldName}"]`
    );
    const messageTemplate = feedbackElement.querySelector(
      `template[data-message="${messageTemplateId}"]`
    );

    if (!messages[fieldName]) {
      messages[fieldName] = {};
    }

    if (!messages[fieldName][messageTemplateId]) {
      messages[fieldName][messageTemplateId] = new FeedbackMessage(
        feedbackElement,
        messageTemplate
      );
    }

    if (show) {
      messages[fieldName][messageTemplateId].show();
    } else if (messages[fieldName][messageTemplateId]) {
      messages[fieldName][messageTemplateId].hide();
    }
  };
})();

function switchPageToTemplate(templateId) {
  const template = document.querySelector(`#template-${templateId}`);
  reservationForm.style.display = "none";

  mainContentWrapper.appendChild(
    template.content.firstElementChild.cloneNode(true)
  );
}

function submitReservation(data) {
  const submitButton = reservationForm.querySelector('button[type="submit"]');

  if (submitButton.classList.contains('loading')) {
    return;
  }
  submitButton.classList.add('loading');


  fetch(ENDPOINT, {
    method: "post",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: JSON.stringify(data),
  })
    .then((resp) => resp.json())
    .then((data) => {
      console.log(data);
    })
    .finally(() => {
      submitButton.classList.remove('loading');
    })
}

setupForm();
