import InputController from "./InputController";

export default class NumberWithSteppers extends InputController {
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
      const fallback = this.element.min || 0;

      this.element.value = fallback;
      return fallback;
    }
    return parsed;
  }

  set value(value) {
    this.element.value = value;
  }

  get max() {
    return this.element.max;
  }

  set max(value) {
    this.element.max = value;
  }

  get min() {
    return this.element.min;
  }

  set min(value) {
    this.element.min = value;
  }
}
