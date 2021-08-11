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
        element.addEventListener("change", this.handleSelectChange.bind(this));

        if (this.optionElements.length) {
          const defaultOption = this.optionElements.find(el => el.dataset.allowDefault !== undefined);
          this.value = (defaultOption || this.optionElements[0]).value;
        }
      }

      generateRadioInputs() {
        const radioList = document.createElement("div");
        radioList.className = `select-radio-list ${this.element.className}`;
        this.element.parentElement.insertBefore(radioList, this.element.nextSibling);
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
          this.radioInputs.forEach(radio => {
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
        return this.optionElements.find(el => el.value === this.value);
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
        return this.element.value === undefined ? this.element.value : parseInt(this.element.value, 10);
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

    var inputControllers = /*#__PURE__*/Object.freeze({
        __proto__: null,
        SelectRadioList: SelectRadioList,
        NumberWithSteppers: NumberWithSteppers
    });

    const ENABLE_APPEAR_AFTER = 1000;
    let enabled = false;
    setTimeout(() => {
      enabled = true;
      document.body.classList.add('appear-transitions-enabled');
    }, ENABLE_APPEAR_AFTER);
    function appearTransitionsEnabled() {
      return enabled;
    }

    function nextFrame(fn) {
      requestAnimationFrame(() => requestAnimationFrame(fn));
    }

    function prefersReducedMotion() {
      const query = window.matchMedia("(prefers-reduced-motion: reduce)");
      return !query || query.matches;
    }

    /**
     * Element that shows/hides with an expand/collapse animation
     */

    class ExpandTransitionElement {
      constructor() {
        this.element = document.createElement('div');
        this.element.classList.add('ExpandTransitionElement');
        this._visible = false;
        this.display = 'none';
        this.activeTransitionCount = 0;
        this.element.addEventListener('transitionrun', this.handleTransitionRun.bind(this));
        this.element.addEventListener('transitioncancel', this.handleTransitionCancel.bind(this));
        this.element.addEventListener('transitionend', this.handleTransitionEnd.bind(this));
      }

      handleTransitionCancel() {
        this.activeTransitionCount--;
      }

      handleTransitionEnd() {
        this.activeTransitionCount--;

        if (!this.activeTransitionCount) {
          this.display = this._visible ? 'block' : 'none';
        }
      }

      handleTransitionRun() {
        this.activeTransitionCount++;
      }

      get display() {
        return this._display;
      }

      set display(display) {
        if (display !== this._display) {
          this.element.style.display = display;
          this._display = display;
        }
      }

      get visible() {
        return this._visible;
      }

      set visible(visible) {
        if (this._visible === !!visible) {
          return;
        }

        const reducedMotion = prefersReducedMotion();

        if (visible) {
          this.display = 'block';
          nextFrame(() => {
            const {
              scrollHeight
            } = this.element;
            this.element.style.maxHeight = scrollHeight ? `${this.element.scrollHeight}px` : 'none';
          });
        } else {
          const transitionEnabled = !reducedMotion && this.display === 'block' && appearTransitionsEnabled();
          this.element.style.maxHeight = 0;

          if (!transitionEnabled && !this.activeTransitionCount) {
            this.display = 'none';
          }
        }

        this._visible = !!visible;
      }

    }

    const renderedTemplates = {};
    function getTemplateElement(id) {
      return document.querySelector(`[data-template-id="${id}"]`);
    }
    function getTemplateRender(id) {
      if (renderedTemplates[id]) {
        return renderedTemplates[id];
      }

      const template = getTemplateElement(id);
      const render = new ExpandTransitionElement();
      template.parentElement.insertBefore(render.element, template);
      render.element.appendChild(template.content.firstElementChild.cloneNode(true));
      renderedTemplates[id] = render;
      return render;
    }
    function swapFormWithTemplate(id) {
      const render = getTemplateRender(id);
      document.querySelector("#reservation-form").style.display = 'none';
      render.visible = true;
    }

    const ENDPOINT = "https://script.google.com/macros/s/AKfycbzqyDxgRy5J1AcDPcPAQHv_4uDGedzSOeHmqOH37Oxq-rzp3DrswfEdSA03YUIX4AZG/exec";
    const MIN_PEOPLE_OWN_TABLE = 5;
    const SHARED_TABLE_START_TIME = "19:00";

    const reservationForm = document.querySelector("#reservation-form");
    let fields;

    function main() {
      // render the start-time-input template (not visible) to make sure the field is initialized
      getTemplateRender('start-time-input'); // initialize all fields

      fields = Object.fromEntries(Array.from(reservationForm.elements).filter(element => element.name).map(element => [element.name, element.dataset.inputController ? new inputControllers[element.dataset.inputController](element) : element]));

      if (!fields.date.optionElements.length) {
        swapFormWithTemplate("no-dates");
        return;
      }

      watchFields('date', handleDateChange);
      watchFields('table', handleTableChange);
      watchFields('reservation-amount', handleReservationAmountChange);
      watchFields(['vegan-amount', 'vegetarian-amount'], handleDietCountsChange, false);
      watchFields('test-amount', handleTestAmountChange, false);
      reservationForm.addEventListener("submit", function (e) {
        e.preventDefault();
        submitReservation({ ...Object.fromEntries(Object.entries(fields).map(([fieldName, field]) => [fieldName, field.value])),
          ['consent-email-contact']: !!fields['consent-email-contact'].checked
        });
      });
      const underConstruction = document.getElementById('under-construction');
      const underConstructionConfirm = document.getElementById('confirm-under-construction');
      underConstructionConfirm.addEventListener('click', () => {
        underConstruction.style.display = 'none';
        reservationForm.style.display = 'block';
      });
      underConstruction.style.display = 'block';
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
      updateAmountInputs(["vegan-amount", "vegetarian-amount"], "nopref-amount");
      updateAmountInputs(["test-amount"], "notest-amount");
    }

    function handleDietCountsChange() {
      updateAmountInputs(["vegan-amount", "vegetarian-amount"], "nopref-amount");
    }

    function handleTestAmountChange() {
      updateAmountInputs(["test-amount"], "notest-amount");
    }

    function handleTableChange() {
      const sharedTableSelected = fields.table.value === "shared";
      getTemplateRender('start-time-input').visible = !sharedTableSelected;
      getTemplateRender('shared-table-start-time').visible = sharedTableSelected;

      if (sharedTableSelected) {
        fields["start-time"].value = SHARED_TABLE_START_TIME;
      }
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
      };

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

    function showFatalErrorMessage() {
      const fatalErrorElement = document.getElementById('fatal-form-error');
      fatalErrorElement.style.display = 'block';
      reservationForm.style.display = 'none';
    }

    function showMessageOnCatch(fn) {
      try {
        fn();
      } catch (e) {
        showFatalErrorMessage();
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
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: JSON.stringify(data)
      }).then(resp => resp.json()).then(({
        success,
        error
      }) => {
        if (success) {
          swapFormWithTemplate('success');
        } else {
          const {
            description,
            fields
          } = error;

          if (fields && fields.length) {
            if (fields.some(field => field.fatal)) {
              showFatalErrorMessage();
            } else {
              const feedbackElements = document.querySelectorAll('[data-field-feedback-for]');
              let scrollToElement = null;

              for (const element of feedbackElements) {
                var _element$dataset;

                const targetField = (_element$dataset = element.dataset) === null || _element$dataset === void 0 ? void 0 : _element$dataset.fieldFeedbackFor;
                const fieldError = fields.find(({
                  field
                }) => field === targetField);

                if (fieldError) {
                  const errorElement = document.createElement('div');
                  errorElement.classList.add('field-error');
                  errorElement.innerText = fieldError.error;
                  element.appendChild(errorElement);

                  if (!scrollToElement) {
                    scrollToElement = element;
                  }
                } else {
                  while (element.firstChild) {
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
      }).catch(e => {
        const fatalErrorElement = document.getElementById('fatal-form-error');
        fatalErrorElement.style.display = 'block';
        reservationForm.style.display = 'none';
      }).finally(() => {
        submitButton.classList.remove("loading");
      });
    }

    showMessageOnCatch(main);

}());
