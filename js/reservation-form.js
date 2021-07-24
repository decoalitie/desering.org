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
  constructor (parent, templateElement) {
    this.messageElement = templateElement.content.firstElementChild.cloneNode(true);
    this.wrapperElement = document.createElement('div');
    this.wrapperElement.classList.add('appear-expand-height');
    
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
    
    this.wrapperElement.addEventListener('transitionend', this.collapseCompleteHandler);
    setTimeout(() => {
      this.clearCollapseCompleteHandler();
      if (!this.visible) {
        this.wrapperElement.style.display = "none";
      }
    }, 600);
  }

  clearCollapseCompleteHandler() {
    if (this.collapseCompleteHandler) {
      this.wrapperElement.removeEventListener('transitionend', this.collapseCompleteHandler);
      this.collapseCompleteHandler = null;
    }
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

  if (!fields.date.optionElements.length) {
    switchPageToTemplate('no-dates');
    return;
  }

  fields.date.addEventListener("change", () => {
    showFeedbackMessage(
      "date",
      "fully-booked",
      fields.date.selectedOptionElement.dataset.fullyBooked !== undefined
    );
  });
}

const showFeedbackMessage = (function() {
  const messages = {};

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

    if (show && !messages[fieldName][messageTemplateId]) {
      messages[fieldName][messageTemplateId] = new FeedbackMessage(feedbackElement, messageTemplate);
    }

    if (show) {
      messages[fieldName][messageTemplateId].show();
    } else if (messages[fieldName][messageTemplateId]) {
      messages[fieldName][messageTemplateId].hide();
    }
  }
})();

function switchPageToTemplate(templateId) {
  const template = document.querySelector(`#template-${templateId}`);
  reservationForm.style.display = 'none';

  mainContentWrapper.appendChild(template.content.firstElementChild.cloneNode(true));
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
