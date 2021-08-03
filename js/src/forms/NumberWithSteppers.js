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

export default NumberWithSteppers;
