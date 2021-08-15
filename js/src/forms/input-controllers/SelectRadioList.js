import { Event } from "event-target-shim";
import InputController from "./InputController";

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

export default SelectRadioList;
