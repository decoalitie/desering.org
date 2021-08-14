(function () {
  'use strict';

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);

      if (enumerableOnly) {
        symbols = symbols.filter(function (sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
      }

      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _construct(Parent, args, Class) {
    if (_isNativeReflectConstruct()) {
      _construct = Reflect.construct;
    } else {
      _construct = function _construct(Parent, args, Class) {
        var a = [null];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) _setPrototypeOf(instance, Class.prototype);
        return instance;
      };
    }

    return _construct.apply(null, arguments);
  }

  function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
  }

  function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;

    _wrapNativeSuper = function _wrapNativeSuper(Class) {
      if (Class === null || !_isNativeFunction(Class)) return Class;

      if (typeof Class !== "function") {
        throw new TypeError("Super expression must either be null or a function");
      }

      if (typeof _cache !== "undefined") {
        if (_cache.has(Class)) return _cache.get(Class);

        _cache.set(Class, Wrapper);
      }

      function Wrapper() {
        return _construct(Class, arguments, _getPrototypeOf(this).constructor);
      }

      Wrapper.prototype = Object.create(Class.prototype, {
        constructor: {
          value: Wrapper,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      return _setPrototypeOf(Wrapper, Class);
    };

    return _wrapNativeSuper(Class);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
  }

  function _iterableToArrayLimit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;

    var _s, _e;

    try {
      for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];

    if (!it) {
      if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
        if (it) o = it;
        var i = 0;

        var F = function () {};

        return {
          s: F,
          n: function () {
            if (i >= o.length) return {
              done: true
            };
            return {
              done: false,
              value: o[i++]
            };
          },
          e: function (e) {
            throw e;
          },
          f: F
        };
      }

      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }

    var normalCompletion = true,
        didErr = false,
        err;
    return {
      s: function () {
        it = it.call(o);
      },
      n: function () {
        var step = it.next();
        normalCompletion = step.done;
        return step;
      },
      e: function (e) {
        didErr = true;
        err = e;
      },
      f: function () {
        try {
          if (!normalCompletion && it.return != null) it.return();
        } finally {
          if (didErr) throw err;
        }
      }
    };
  }

  function requiredArgs(required, args) {
    if (args.length < required) {
      throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
    }
  }

  /**
   * @name toDate
   * @category Common Helpers
   * @summary Convert the given argument to an instance of Date.
   *
   * @description
   * Convert the given argument to an instance of Date.
   *
   * If the argument is an instance of Date, the function returns its clone.
   *
   * If the argument is a number, it is treated as a timestamp.
   *
   * If the argument is none of the above, the function returns Invalid Date.
   *
   * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
   *
   * @param {Date|Number} argument - the value to convert
   * @returns {Date} the parsed date in the local time zone
   * @throws {TypeError} 1 argument required
   *
   * @example
   * // Clone the date:
   * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
   * //=> Tue Feb 11 2014 11:30:30
   *
   * @example
   * // Convert the timestamp to date:
   * const result = toDate(1392098430000)
   * //=> Tue Feb 11 2014 11:30:30
   */

  function toDate(argument) {
    requiredArgs(1, arguments);
    var argStr = Object.prototype.toString.call(argument); // Clone the date

    if (argument instanceof Date || typeof argument === 'object' && argStr === '[object Date]') {
      // Prevent the date to lose the milliseconds when passed to new Date() in IE10
      return new Date(argument.getTime());
    } else if (typeof argument === 'number' || argStr === '[object Number]') {
      return new Date(argument);
    } else {
      if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
        // eslint-disable-next-line no-console
        console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"); // eslint-disable-next-line no-console

        console.warn(new Error().stack);
      }

      return new Date(NaN);
    }
  }

  /**
   * @name isBefore
   * @category Common Helpers
   * @summary Is the first date before the second one?
   *
   * @description
   * Is the first date before the second one?
   *
   * ### v2.0.0 breaking changes:
   *
   * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
   *
   * @param {Date|Number} date - the date that should be before the other one to return true
   * @param {Date|Number} dateToCompare - the date to compare with
   * @returns {Boolean} the first date is before the second date
   * @throws {TypeError} 2 arguments required
   *
   * @example
   * // Is 10 July 1989 before 11 February 1987?
   * var result = isBefore(new Date(1989, 6, 10), new Date(1987, 1, 11))
   * //=> false
   */

  function isBefore(dirtyDate, dirtyDateToCompare) {
    requiredArgs(2, arguments);
    var date = toDate(dirtyDate);
    var dateToCompare = toDate(dirtyDateToCompare);
    return date.getTime() < dateToCompare.getTime();
  }

  var InputController = /*#__PURE__*/function (_EventTarget) {
    _inherits(InputController, _EventTarget);

    var _super = _createSuper(InputController);

    function InputController(element) {
      var _this;

      _classCallCheck(this, InputController);

      _this = _super.call(this);
      _this.element = element;
      _this.name = element.name;
      return _this;
    }

    return InputController;
  }( /*#__PURE__*/_wrapNativeSuper(EventTarget));

  /**
   * Manages a <select> input element.
   * For destop, converts the <option> to separate <input type="radio"> and <label>.
   */

  var SelectRadioList = /*#__PURE__*/function (_InputController) {
    _inherits(SelectRadioList, _InputController);

    var _super = _createSuper(SelectRadioList);

    function SelectRadioList(element) {
      var _this;

      _classCallCheck(this, SelectRadioList);

      _this = _super.call(this, element);
      _this.optionElements = Array.from(element.querySelectorAll("option"));
      _this.radioInputs = _this.generateRadioInputs();
      element.addEventListener("change", _this.handleSelectChange.bind(_assertThisInitialized(_this)));

      if (_this.optionElements.length) {
        var defaultOption = _this.optionElements.find(function (el) {
          return el.dataset.allowDefault !== undefined;
        });

        _this.value = (defaultOption || _this.optionElements[0]).value;
      }

      return _this;
    }

    _createClass(SelectRadioList, [{
      key: "generateRadioInputs",
      value: function generateRadioInputs() {
        var _this2 = this;

        var radioList = document.createElement("div");
        radioList.className = "select-radio-list ".concat(this.element.className);
        this.element.parentElement.insertBefore(radioList, this.element.nextSibling);
        return this.optionElements.map(function (option, index) {
          var optionValue = option.getAttribute("value");
          var optionId = "".concat(_this2.name, "-option-").concat(index);
          var radioInput = document.createElement("input");
          radioInput.setAttribute("type", "radio");
          radioInput.setAttribute("value", optionValue);
          radioInput.setAttribute("name", "".concat(_this2.name, "-radio"));
          radioInput.setAttribute("id", optionId);
          radioInput.addEventListener("change", _this2.handleRadioChange.bind(_this2));
          radioList.appendChild(radioInput);
          var label = document.createElement("label");
          label.innerHTML = option.innerHTML;
          label.setAttribute("for", optionId);
          radioList.appendChild(label);

          if (option.dataset.tag) {
            option.innerText += " (".concat(option.dataset.tag, ")");
            var tagElement = document.createElement("span");
            tagElement.className = "tag";
            tagElement.innerText = option.dataset.tag;
            label.appendChild(tagElement);
          }

          return radioInput;
        });
      }
    }, {
      key: "disabled",
      get: function get() {
        return this.element.disabled;
      },
      set: function set(isDisabled) {
        this.element.disabled = isDisabled;

        if (isDisabled) {
          var _iterator = _createForOfIteratorHelper(this.radioInputs),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var radio = _step.value;
              radio.disabled = radio.value !== this.element.value;
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        } else {
          this.radioInputs.forEach(function (radio) {
            radio.disabled = false;
          });
        }
      }
    }, {
      key: "value",
      get: function get() {
        return this.element.value;
      },
      set: function set(newValue) {
        this.element.value = newValue;
        this.updateRadioButtonChecked();
      }
    }, {
      key: "selectedOptionElement",
      get: function get() {
        var _this3 = this;

        return this.optionElements.find(function (el) {
          return el.value === _this3.value;
        });
      }
    }, {
      key: "updateRadioButtonChecked",
      value: function updateRadioButtonChecked() {
        var _iterator2 = _createForOfIteratorHelper(this.radioInputs),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var radioInput = _step2.value;
            radioInput.checked = radioInput.value === this.value;
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }
    }, {
      key: "handleRadioChange",
      value: function handleRadioChange(e) {
        this.element.value = e.currentTarget.value;
        this.dispatchEvent(new Event("change"));
      }
    }, {
      key: "handleSelectChange",
      value: function handleSelectChange() {
        this.updateRadioButtonChecked();
        this.dispatchEvent(new Event("change"));
      }
    }]);

    return SelectRadioList;
  }(InputController);

  var NumberWithSteppers = /*#__PURE__*/function (_InputController) {
    _inherits(NumberWithSteppers, _InputController);

    var _super = _createSuper(NumberWithSteppers);

    function NumberWithSteppers(inputElement) {
      var _this;

      _classCallCheck(this, NumberWithSteppers);

      _this = _super.call(this, inputElement);
      var wrapper = _this.element.parentElement;

      _this.element.addEventListener("change", function () {
        _this.dispatchEvent(new Event("change"));
      });

      _this.element.addEventListener("animationend", function () {
        _this.element.classList.remove("changed");
      });

      var minButton = document.createElement("button");
      minButton.className = "stepper remove";
      wrapper.appendChild(minButton);
      minButton.addEventListener("click", _this.handleMinClick.bind(_assertThisInitialized(_this)));
      var plusButton = document.createElement("button");
      plusButton.className = "stepper add";
      plusButton.addEventListener("click", _this.handePlusClick.bind(_assertThisInitialized(_this)));
      wrapper.appendChild(plusButton);
      return _this;
    }

    _createClass(NumberWithSteppers, [{
      key: "handleMinClick",
      value: function handleMinClick(e) {
        e.preventDefault();
        this.element.stepDown();
        this.dispatchEvent(new Event("change"));
        this.element.classList.add("changed");
      }
    }, {
      key: "handePlusClick",
      value: function handePlusClick(e) {
        e.preventDefault();
        this.element.stepUp();
        this.dispatchEvent(new Event("change"));
        this.element.classList.add("changed");
      }
    }, {
      key: "value",
      get: function get() {
        return this.element.value === undefined ? this.element.value : parseInt(this.element.value, 10);
      },
      set: function set(value) {
        this.element.value = value;
      }
    }, {
      key: "safeValue",
      get: function get() {
        var parsed = this.value;

        if (isNaN(parsed) || parsed === undefined) {
          var fallback = this.element.min || 0;
          this.element.value = fallback;
          return fallback;
        }

        return parsed;
      }
    }, {
      key: "max",
      get: function get() {
        return this.element.max;
      },
      set: function set(value) {
        this.element.max = value;
      }
    }, {
      key: "min",
      get: function get() {
        return this.element.min;
      },
      set: function set(value) {
        this.element.min = value;
      }
    }]);

    return NumberWithSteppers;
  }(InputController);

  var inputControllers = /*#__PURE__*/Object.freeze({
    __proto__: null,
    SelectRadioList: SelectRadioList,
    NumberWithSteppers: NumberWithSteppers
  });

  var ENABLE_APPEAR_AFTER = 1000;
  var enabled = false;
  setTimeout(function () {
    enabled = true;
    document.body.classList.add('appear-transitions-enabled');
  }, ENABLE_APPEAR_AFTER);
  function appearTransitionsEnabled() {
    return enabled;
  }

  function nextFrame(fn) {
    requestAnimationFrame(function () {
      return requestAnimationFrame(fn);
    });
  }

  function prefersReducedMotion() {
    var query = window.matchMedia("(prefers-reduced-motion: reduce)");
    return !query || query.matches;
  }

  /**
   * Element that shows/hides with an expand/collapse animation
   */

  var ExpandTransitionElement = /*#__PURE__*/function () {
    function ExpandTransitionElement() {
      _classCallCheck(this, ExpandTransitionElement);

      this.element = document.createElement('div');
      this.element.classList.add('ExpandTransitionElement');
      this._visible = false;
      this.display = 'none';
      this.activeTransitionCount = 0;
      this.element.addEventListener('transitionrun', this.handleTransitionRun.bind(this));
      this.element.addEventListener('transitioncancel', this.handleTransitionCancel.bind(this));
      this.element.addEventListener('transitionend', this.handleTransitionEnd.bind(this));
    }

    _createClass(ExpandTransitionElement, [{
      key: "handleTransitionCancel",
      value: function handleTransitionCancel() {
        this.activeTransitionCount--;
      }
    }, {
      key: "handleTransitionEnd",
      value: function handleTransitionEnd() {
        this.activeTransitionCount--;

        if (!this.activeTransitionCount) {
          this.display = this._visible ? 'block' : 'none';
        }
      }
    }, {
      key: "handleTransitionRun",
      value: function handleTransitionRun() {
        this.activeTransitionCount++;
      }
    }, {
      key: "display",
      get: function get() {
        return this._display;
      },
      set: function set(display) {
        if (display !== this._display) {
          this.element.style.display = display;
          this._display = display;
        }
      }
    }, {
      key: "visible",
      get: function get() {
        return this._visible;
      },
      set: function set(visible) {
        var _this = this;

        if (this._visible === !!visible) {
          return;
        }

        var reducedMotion = prefersReducedMotion();

        if (visible) {
          this.display = 'block';
          nextFrame(function () {
            var scrollHeight = _this.element.scrollHeight;
            _this.element.style.maxHeight = scrollHeight ? "".concat(_this.element.scrollHeight, "px") : 'none';
          });
        } else {
          var transitionEnabled = !reducedMotion && this.display === 'block' && appearTransitionsEnabled();
          this.element.style.maxHeight = 0;

          if (!transitionEnabled && !this.activeTransitionCount) {
            this.display = 'none';
          }
        }

        this._visible = !!visible;
      }
    }]);

    return ExpandTransitionElement;
  }();

  var renderedTemplates = {};
  function getTemplateElement(id) {
    return document.querySelector("[data-template-id=\"".concat(id, "\"]"));
  }
  function getTemplateRender(id) {
    if (renderedTemplates[id]) {
      return renderedTemplates[id];
    }

    var template = getTemplateElement(id);
    var render = new ExpandTransitionElement();
    template.parentElement.insertBefore(render.element, template);
    render.element.appendChild(template.content.firstElementChild.cloneNode(true));
    renderedTemplates[id] = render;
    return render;
  }
  function swapFormWithTemplate(id) {
    var render = getTemplateRender(id);
    document.querySelector("#reservation-form").style.display = 'none';
    render.visible = true;
  }

  var ENDPOINT = "https://script.google.com/macros/s/AKfycbwRaWuTNOYHVY57WfX6NjPka6J73INEYqcIFc0U3xhLSLs1YNDuALJMbKIseRJeZNe1/exec";
  var MIN_PEOPLE_OWN_TABLE = 5;
  var SHARED_TABLE_START_TIME = "19:00";
  var SHOW_DATE_UNTIL = 'T19:00:00';

  var reservationForm = document.querySelector("#reservation-form");
  var fields;

  function main() {
    // render the start-time-input template (not visible) to make sure the field is initialized
    getTemplateRender('start-time-input'); // remove dates in past

    var _iterator = _createForOfIteratorHelper(reservationForm.elements.date.querySelectorAll('option')),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var dateOption = _step.value;
        var optionTime = new Date("".concat(dateOption.value).concat(SHOW_DATE_UNTIL));

        if (isBefore(optionTime, new Date())) {
          reservationForm.elements.date.removeChild(dateOption);
        }
      } // initialize all fields

    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    fields = Object.fromEntries(Array.from(reservationForm.elements).filter(function (element) {
      return element.name;
    }).map(function (element) {
      return [element.name, element.dataset.inputController ? new inputControllers[element.dataset.inputController](element) : element];
    }));

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
      showMessageOnCatch(function () {
        submitReservation(_objectSpread2(_objectSpread2({}, Object.fromEntries(Object.entries(fields).map(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
              fieldName = _ref2[0],
              field = _ref2[1];

          return [fieldName, field.value];
        }))), {}, {
          ['consent-email-contact']: !!fields['consent-email-contact'].checked
        }));
      });
    });
    reservationForm.style.display = 'block';
  }

  function watchFields(fieldNames, onChange) {
    var immediate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
    [].concat(fieldNames).forEach(function (fieldName) {
      fields[fieldName].addEventListener("change", function () {
        return showMessageOnCatch(onChange);
      });
    });

    if (immediate) {
      onChange();
    }
  }

  function handleDateChange() {
    getTemplateRender('fully-booked').visible = fields.date.selectedOptionElement.dataset.fullyBooked !== undefined;
  }

  function handleReservationAmountChange() {
    var amount = fields["reservation-amount"].safeValue;
    var sufficient = amount >= MIN_PEOPLE_OWN_TABLE;

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
    var sharedTableSelected = fields.table.value === "shared";
    getTemplateRender('start-time-input').visible = !sharedTableSelected;
    getTemplateRender('shared-table-start-time').visible = sharedTableSelected;

    if (sharedTableSelected) {
      fields["start-time"].value = SHARED_TABLE_START_TIME;
    }
  }

  function updateAmountInputs(inputFields, remainderField) {
    var reservationAmount = fields["reservation-amount"].value;

    if (isNaN(reservationAmount)) {
      throw new Error('Cannot read reservation amount');
    }

    var remainder;
    var inputValues;

    var countValues = function countValues() {
      inputValues = inputFields.map(function (fieldName) {
        return fields[fieldName].safeValue;
      });
      remainder = reservationAmount - inputValues.reduce(function (sum, current) {
        return sum + current;
      });
    };

    countValues();

    while (remainder < 0) {
      var firstFieldWithValue = inputFields.find(function (field, index) {
        return inputValues[index] > 0;
      });

      if (!firstFieldWithValue) {
        throw new Error('Expected fields with non-negative values');
      }

      fields[firstFieldWithValue].value = Math.max(0, fields[firstFieldWithValue].value + remainder);
      countValues();
    }

    inputFields.forEach(function (fieldName, index) {
      if (inputValues.length > 1) {
        var otherInputValues = _toConsumableArray(inputValues);

        otherInputValues.splice(index, 1);
        fields[fieldName].max = reservationAmount - otherInputValues.reduce(function (sum, current) {
          return sum + current;
        });
      } else {
        fields[fieldName].max = reservationAmount;
      }
    });
    fields[remainderField].value = remainder;
  }

  function showFatalErrorMessage() {
    var fatalErrorElement = document.getElementById('fatal-form-error');
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
    var submitButton = reservationForm.querySelector('button[type="submit"]');

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
    }).then(function (resp) {
      return resp.json();
    }).then(function (_ref3) {
      var success = _ref3.success,
          error = _ref3.error;

      if (success) {
        swapFormWithTemplate('success');
      } else {
        error.description;
            var _fields = error.fields;

        if (_fields && _fields.length) {
          if (_fields.some(function (field) {
            return field.fatal;
          })) {
            showFatalErrorMessage();
          } else {
            var feedbackElements = document.querySelectorAll('[data-field-feedback-for]');
            var scrollToElement = null;

            var _iterator2 = _createForOfIteratorHelper(feedbackElements),
                _step2;

            try {
              var _loop = function _loop() {
                var _element$dataset;

                var element = _step2.value;
                var targetField = (_element$dataset = element.dataset) === null || _element$dataset === void 0 ? void 0 : _element$dataset.fieldFeedbackFor;

                var fieldError = _fields.find(function (_ref4) {
                  var field = _ref4.field;
                  return field === targetField;
                });

                if (fieldError) {
                  var errorElement = document.createElement('div');
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
              };

              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                _loop();
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }

            if (scrollToElement) {
              scrollToElement.scrollIntoView();
            }
          }
        } else {
          showFatalErrorMessage();
        }
      }
    }).catch(function (e) {
      var fatalErrorElement = document.getElementById('fatal-form-error');
      fatalErrorElement.style.display = 'block';
      reservationForm.style.display = 'none';
    }).finally(function () {
      submitButton.classList.remove("loading");
    });
  }

  showMessageOnCatch(main);

}());
