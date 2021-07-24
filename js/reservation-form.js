"use strict";
const ENDPOINT =
  "https://script.google.com/macros/s/AKfycbxmEwTD9e9XPo50RJhBDTMUZQqGVmdsROFmESKCT_fmM911JM6CKnNjoBwTqKhdPKtL/exec";

const REMOVE_SAME_DAY_EVENT_AFTER = "15:00:00";

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

    const defaultOption = this.optionElements.find(
      (el) => el.dataset.allowDefault !== undefined
    );
    this.value = (defaultOption || this.optionElements[0]).value;
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

const FieldHandlers = { SelectRadioList };

/**
 * This is the first function called (bottom of this file) that triggers setup
 */
function setupForm() {
  const fields = Object.fromEntries(
    Array.from(reservationForm.elements).map((element) => [
      element.name,
      element.dataset.fieldHandler
        ? new FieldHandlers[element.dataset.fieldHandler](element)
        : element,
    ])
  );

  fields.date.addEventListener("change", () => {
    showFeedbackMessage(
      "date",
      "fully-booked",
      fields.date.selectedOptionElement.dataset.fullyBooked !== undefined
    );
  });
}

function showFeedbackMessage(fieldName, messageTemplateId, show = true) {
  const feedbackElement = reservationForm.querySelector(
    `[data-field-feedback-for="${fieldName}"]`
  );
  const messageTemplate = feedbackElement.querySelector(
    `template[data-message="${messageTemplateId}"]`
  );

  const currentMessages = Object.fromEntries(
    Array.from(feedbackElement.querySelectorAll("[data-from-template]")).map((element) => [
      element.dataset.fromTemplate,
      element,
    ])
  );

  if (show) {
    if (!currentMessages[messageTemplateId]) {
      const messageElement = messageTemplate.content.firstElementChild.cloneNode(true);
      messageElement.dataset.fromTemplate = messageTemplateId;
      feedbackElement.appendChild(messageElement);
    } else {
      currentMessages[messageTemplateId].style.display = "block";
    }
  } else if (currentMessages[messageTemplateId]) {
    currentMessages[messageTemplateId].style.display = "none";
  }
}

function switchPageToTemplate(templateId) {
  const template = document.querySelector(`#template-${templateId}`);
  while (mainContentWrapper.firstChild) {
    mainContentWrapper.removeChild(mainContentWrapper.firstChild);
  }

  mainContentWrapper.appendChild(template.content.cloneNode(true));
}

// function handleReservationSubmit(e) {
//   e.preventDefault();

//   const data = {
//     foo: "bar",
//   };

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
//     });
// }

setupForm();
