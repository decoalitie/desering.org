(function () {
  'use strict';

  function ownKeys$2(object, enumerableOnly) {
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
        ownKeys$2(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys$2(Object(source)).forEach(function (key) {
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

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  var $$g = _export;
  var global$o = global$n; // `globalThis` object
  // https://tc39.es/ecma262/#sec-globalthis

  $$g({
    global: true
  }, {
    globalThis: global$o
  });

  var check = function check(it) {
    return it && it.Math == Math && it;
  }; // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028


  var global$n = // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) || check(typeof window == 'object' && window) || // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) || check(typeof commonjsGlobal == 'object' && commonjsGlobal) || // eslint-disable-next-line no-new-func -- fallback
  function () {
    return this;
  }() || Function('return this')();

  var objectGetOwnPropertyDescriptor = {};

  var fails$m = function fails(exec) {
    try {
      return !!exec();
    } catch (error) {
      return true;
    }
  };

  var fails$l = fails$m; // Detect IE8's incomplete defineProperty implementation

  var descriptors = !fails$l(function () {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty({}, 1, {
      get: function get() {
        return 7;
      }
    })[1] != 7;
  });

  var objectPropertyIsEnumerable = {};

  var $propertyIsEnumerable$1 = {}.propertyIsEnumerable; // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe

  var getOwnPropertyDescriptor$2 = Object.getOwnPropertyDescriptor; // Nashorn ~ JDK8 bug

  var NASHORN_BUG = getOwnPropertyDescriptor$2 && !$propertyIsEnumerable$1.call({
    1: 2
  }, 1); // `Object.prototype.propertyIsEnumerable` method implementation
  // https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable

  objectPropertyIsEnumerable.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
    var descriptor = getOwnPropertyDescriptor$2(this, V);
    return !!descriptor && descriptor.enumerable;
  } : $propertyIsEnumerable$1;

  var createPropertyDescriptor$5 = function createPropertyDescriptor(bitmap, value) {
    return {
      enumerable: !(bitmap & 1),
      configurable: !(bitmap & 2),
      writable: !(bitmap & 4),
      value: value
    };
  };

  var isObject$f = function isObject(it) {
    return typeof it === 'object' ? it !== null : typeof it === 'function';
  };

  var global$m = global$n;

  var aFunction$6 = function aFunction(variable) {
    return typeof variable == 'function' ? variable : undefined;
  };

  var getBuiltIn$8 = function getBuiltIn(namespace, method) {
    return arguments.length < 2 ? aFunction$6(global$m[namespace]) : global$m[namespace] && global$m[namespace][method];
  };

  // flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods

  var domIterables = {
    CSSRuleList: 0,
    CSSStyleDeclaration: 0,
    CSSValueList: 0,
    ClientRectList: 0,
    DOMRectList: 0,
    DOMStringList: 0,
    DOMTokenList: 1,
    DataTransferItemList: 0,
    FileList: 0,
    HTMLAllCollection: 0,
    HTMLCollection: 0,
    HTMLFormElement: 0,
    HTMLSelectElement: 0,
    MediaList: 0,
    MimeTypeArray: 0,
    NamedNodeMap: 0,
    NodeList: 1,
    PaintRequestList: 0,
    Plugin: 0,
    PluginArray: 0,
    SVGLengthList: 0,
    SVGNumberList: 0,
    SVGPathSegList: 0,
    SVGPointList: 0,
    SVGStringList: 0,
    SVGTransformList: 0,
    SourceBufferList: 0,
    StyleSheetList: 0,
    TextTrackCueList: 0,
    TextTrackList: 0,
    TouchList: 0
  };

  var aFunction$5 = function aFunction(it) {
    if (typeof it != 'function') {
      throw TypeError(String(it) + ' is not a function');
    }

    return it;
  };

  var aFunction$4 = aFunction$5; // optional / simple context binding

  var functionBindContext = function functionBindContext(fn, that, length) {
    aFunction$4(fn);
    if (that === undefined) return fn;

    switch (length) {
      case 0:
        return function () {
          return fn.call(that);
        };

      case 1:
        return function (a) {
          return fn.call(that, a);
        };

      case 2:
        return function (a, b) {
          return fn.call(that, a, b);
        };

      case 3:
        return function (a, b, c) {
          return fn.call(that, a, b, c);
        };
    }

    return function () {
      return fn.apply(that, arguments);
    };
  };

  // https://tc39.es/ecma262/#sec-requireobjectcoercible

  var requireObjectCoercible$6 = function requireObjectCoercible(it) {
    if (it == undefined) throw TypeError("Can't call method on " + it);
    return it;
  };

  var requireObjectCoercible$5 = requireObjectCoercible$6; // `ToObject` abstract operation
  // https://tc39.es/ecma262/#sec-toobject

  var toObject$9 = function toObject(argument) {
    return Object(requireObjectCoercible$5(argument));
  };

  var ceil = Math.ceil;
  var floor$1 = Math.floor; // `ToInteger` abstract operation
  // https://tc39.es/ecma262/#sec-tointeger

  var toInteger$5 = function toInteger(argument) {
    return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor$1 : ceil)(argument);
  };

  var toInteger$4 = toInteger$5;
  var min$4 = Math.min; // `ToLength` abstract operation
  // https://tc39.es/ecma262/#sec-tolength

  var toLength$b = function toLength(argument) {
    return argument > 0 ? min$4(toInteger$4(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
  };

  var shared$5 = {exports: {}};

  var global$l = global$n;

  var setGlobal$3 = function setGlobal(key, value) {
    try {
      // eslint-disable-next-line es/no-object-defineproperty -- safe
      Object.defineProperty(global$l, key, {
        value: value,
        configurable: true,
        writable: true
      });
    } catch (error) {
      global$l[key] = value;
    }

    return value;
  };

  var global$k = global$n;
  var setGlobal$2 = setGlobal$3;
  var SHARED = '__core-js_shared__';
  var store$3 = global$k[SHARED] || setGlobal$2(SHARED, {});
  var sharedStore = store$3;

  var store$2 = sharedStore;
  (shared$5.exports = function (key, value) {
    return store$2[key] || (store$2[key] = value !== undefined ? value : {});
  })('versions', []).push({
    version: '3.16.0',
    mode: 'global',
    copyright: '© 2021 Denis Pushkarev (zloirock.ru)'
  });

  var toObject$8 = toObject$9;
  var hasOwnProperty = {}.hasOwnProperty;

  var has$d = Object.hasOwn || function hasOwn(it, key) {
    return hasOwnProperty.call(toObject$8(it), key);
  };

  var toInteger$3 = toInteger$5;
  var max$3 = Math.max;
  var min$3 = Math.min; // Helper for a popular repeating case of the spec:
  // Let integer be ? ToInteger(index).
  // If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).

  var toAbsoluteIndex$3 = function toAbsoluteIndex(index, length) {
    var integer = toInteger$3(index);
    return integer < 0 ? max$3(integer + length, 0) : min$3(integer, length);
  };

  var objectDefineProperty = {};

  var global$j = global$n;
  var isObject$e = isObject$f;
  var document$3 = global$j.document; // typeof document.createElement is 'object' in old IE

  var EXISTS = isObject$e(document$3) && isObject$e(document$3.createElement);

  var documentCreateElement$1 = function documentCreateElement(it) {
    return EXISTS ? document$3.createElement(it) : {};
  };

  var DESCRIPTORS$a = descriptors;
  var fails$k = fails$m;
  var createElement$1 = documentCreateElement$1; // Thank's IE8 for his funny defineProperty

  var ie8DomDefine = !DESCRIPTORS$a && !fails$k(function () {
    // eslint-disable-next-line es/no-object-defineproperty -- requied for testing
    return Object.defineProperty(createElement$1('div'), 'a', {
      get: function get() {
        return 7;
      }
    }).a != 7;
  });

  var isObject$d = isObject$f;

  var anObject$g = function anObject(it) {
    if (!isObject$d(it)) {
      throw TypeError(String(it) + ' is not an object');
    }

    return it;
  };

  var DESCRIPTORS$9 = descriptors;
  var IE8_DOM_DEFINE$1 = ie8DomDefine;
  var anObject$f = anObject$g;
  var toPropertyKey$4 = toPropertyKey$1; // eslint-disable-next-line es/no-object-defineproperty -- safe

  var $defineProperty$1 = Object.defineProperty; // `Object.defineProperty` method
  // https://tc39.es/ecma262/#sec-object.defineproperty

  objectDefineProperty.f = DESCRIPTORS$9 ? $defineProperty$1 : function defineProperty(O, P, Attributes) {
    anObject$f(O);
    P = toPropertyKey$4(P);
    anObject$f(Attributes);
    if (IE8_DOM_DEFINE$1) try {
      return $defineProperty$1(O, P, Attributes);
    } catch (error) {
      /* empty */
    }
    if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
    if ('value' in Attributes) O[P] = Attributes.value;
    return O;
  };

  var toPropertyKey$3 = toPropertyKey$1;
  var definePropertyModule$6 = objectDefineProperty;
  var createPropertyDescriptor$4 = createPropertyDescriptor$5;

  var createProperty$5 = function createProperty(object, key, value) {
    var propertyKey = toPropertyKey$3(key);
    if (propertyKey in object) definePropertyModule$6.f(object, propertyKey, createPropertyDescriptor$4(0, value));else object[propertyKey] = value;
  };

  var anObject$e = anObject$g; // `RegExp.prototype.flags` getter implementation
  // https://tc39.es/ecma262/#sec-get-regexp.prototype.flags

  var regexpFlags$1 = function regexpFlags() {
    var that = anObject$e(this);
    var result = '';
    if (that.global) result += 'g';
    if (that.ignoreCase) result += 'i';
    if (that.multiline) result += 'm';
    if (that.dotAll) result += 's';
    if (that.unicode) result += 'u';
    if (that.sticky) result += 'y';
    return result;
  };

  var DESCRIPTORS$8 = descriptors;
  var objectDefinePropertyModule = objectDefineProperty;
  var regExpFlags = regexpFlags$1;
  var fails$j = fails$m;
  var FORCED$2 = DESCRIPTORS$8 && fails$j(function () {
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    return Object.getOwnPropertyDescriptor(RegExp.prototype, 'flags').get.call({
      dotAll: true,
      sticky: true
    }) !== 'sy';
  }); // `RegExp.prototype.flags` getter
  // https://tc39.es/ecma262/#sec-get-regexp.prototype.flags

  if (FORCED$2) objectDefinePropertyModule.f(RegExp.prototype, 'flags', {
    configurable: true,
    get: regExpFlags
  });

  var redefine$a = {exports: {}};

  var DESCRIPTORS$7 = descriptors;
  var definePropertyModule$5 = objectDefineProperty;
  var createPropertyDescriptor$3 = createPropertyDescriptor$5;
  var createNonEnumerableProperty$a = DESCRIPTORS$7 ? function (object, key, value) {
    return definePropertyModule$5.f(object, key, createPropertyDescriptor$3(1, value));
  } : function (object, key, value) {
    object[key] = value;
    return object;
  };

  var store$1 = sharedStore;
  var functionToString = Function.toString; // this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper

  if (typeof store$1.inspectSource != 'function') {
    store$1.inspectSource = function (it) {
      return functionToString.call(it);
    };
  }

  var inspectSource$3 = store$1.inspectSource;

  var global$i = global$n;
  var inspectSource$2 = inspectSource$3;
  var WeakMap$1 = global$i.WeakMap;
  var nativeWeakMap = typeof WeakMap$1 === 'function' && /native code/.test(inspectSource$2(WeakMap$1));

  var shared$4 = shared$5.exports;
  var uid$3 = uid$2;
  var keys$1 = shared$4('keys');

  var sharedKey$4 = function sharedKey(key) {
    return keys$1[key] || (keys$1[key] = uid$3(key));
  };

  var hiddenKeys$5 = {};

  var NATIVE_WEAK_MAP = nativeWeakMap;
  var global$h = global$n;
  var isObject$c = isObject$f;
  var createNonEnumerableProperty$9 = createNonEnumerableProperty$a;
  var objectHas = has$d;
  var shared$3 = sharedStore;
  var sharedKey$3 = sharedKey$4;
  var hiddenKeys$4 = hiddenKeys$5;
  var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
  var WeakMap = global$h.WeakMap;
  var set$1, get, has$c;

  var enforce = function enforce(it) {
    return has$c(it) ? get(it) : set$1(it, {});
  };

  var getterFor = function getterFor(TYPE) {
    return function (it) {
      var state;

      if (!isObject$c(it) || (state = get(it)).type !== TYPE) {
        throw TypeError('Incompatible receiver, ' + TYPE + ' required');
      }

      return state;
    };
  };

  if (NATIVE_WEAK_MAP || shared$3.state) {
    var store = shared$3.state || (shared$3.state = new WeakMap());
    var wmget = store.get;
    var wmhas = store.has;
    var wmset = store.set;

    set$1 = function set(it, metadata) {
      if (wmhas.call(store, it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
      metadata.facade = it;
      wmset.call(store, it, metadata);
      return metadata;
    };

    get = function get(it) {
      return wmget.call(store, it) || {};
    };

    has$c = function has(it) {
      return wmhas.call(store, it);
    };
  } else {
    var STATE = sharedKey$3('state');
    hiddenKeys$4[STATE] = true;

    set$1 = function set(it, metadata) {
      if (objectHas(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
      metadata.facade = it;
      createNonEnumerableProperty$9(it, STATE, metadata);
      return metadata;
    };

    get = function get(it) {
      return objectHas(it, STATE) ? it[STATE] : {};
    };

    has$c = function has(it) {
      return objectHas(it, STATE);
    };
  }

  var internalState = {
    set: set$1,
    get: get,
    has: has$c,
    enforce: enforce,
    getterFor: getterFor
  };

  var global$g = global$n;
  var createNonEnumerableProperty$8 = createNonEnumerableProperty$a;
  var has$b = has$d;
  var setGlobal$1 = setGlobal$3;
  var inspectSource$1 = inspectSource$3;
  var InternalStateModule$3 = internalState;
  var getInternalState$4 = InternalStateModule$3.get;
  var enforceInternalState$1 = InternalStateModule$3.enforce;
  var TEMPLATE = String(String).split('String');
  (redefine$a.exports = function (O, key, value, options) {
    var unsafe = options ? !!options.unsafe : false;
    var simple = options ? !!options.enumerable : false;
    var noTargetGet = options ? !!options.noTargetGet : false;
    var state;

    if (typeof value == 'function') {
      if (typeof key == 'string' && !has$b(value, 'name')) {
        createNonEnumerableProperty$8(value, 'name', key);
      }

      state = enforceInternalState$1(value);

      if (!state.source) {
        state.source = TEMPLATE.join(typeof key == 'string' ? key : '');
      }
    }

    if (O === global$g) {
      if (simple) O[key] = value;else setGlobal$1(key, value);
      return;
    } else if (!unsafe) {
      delete O[key];
    } else if (!noTargetGet && O[key]) {
      simple = true;
    }

    if (simple) O[key] = value;else createNonEnumerableProperty$8(O, key, value); // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
  })(Function.prototype, 'toString', function toString() {
    return typeof this == 'function' && getInternalState$4(this).source || inspectSource$1(this);
  });

  var toIndexedObject$8 = toIndexedObject$2;
  var toLength$a = toLength$b;
  var toAbsoluteIndex$2 = toAbsoluteIndex$3; // `Array.prototype.{ indexOf, includes }` methods implementation

  var createMethod$4 = function createMethod(IS_INCLUDES) {
    return function ($this, el, fromIndex) {
      var O = toIndexedObject$8($this);
      var length = toLength$a(O.length);
      var index = toAbsoluteIndex$2(fromIndex, length);
      var value; // Array#includes uses SameValueZero equality algorithm
      // eslint-disable-next-line no-self-compare -- NaN check

      if (IS_INCLUDES && el != el) while (length > index) {
        value = O[index++]; // eslint-disable-next-line no-self-compare -- NaN check

        if (value != value) return true; // Array#indexOf ignores holes, Array#includes - not
      } else for (; length > index; index++) {
        if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
      }
      return !IS_INCLUDES && -1;
    };
  };

  var arrayIncludes = {
    // `Array.prototype.includes` method
    // https://tc39.es/ecma262/#sec-array.prototype.includes
    includes: createMethod$4(true),
    // `Array.prototype.indexOf` method
    // https://tc39.es/ecma262/#sec-array.prototype.indexof
    indexOf: createMethod$4(false)
  };

  var fails$i = fails$m;

  var arrayMethodIsStrict$3 = function arrayMethodIsStrict(METHOD_NAME, argument) {
    var method = [][METHOD_NAME];
    return !!method && fails$i(function () {
      // eslint-disable-next-line no-useless-call,no-throw-literal -- required for testing
      method.call(null, argument || function () {
        throw 1;
      }, 1);
    });
  };

  /* eslint-disable es/no-array-prototype-indexof -- required for testing */


  var $$f = _export;
  var $indexOf = arrayIncludes.indexOf;
  var arrayMethodIsStrict$2 = arrayMethodIsStrict$3;
  var nativeIndexOf = [].indexOf;
  var NEGATIVE_ZERO = !!nativeIndexOf && 1 / [1].indexOf(1, -0) < 0;
  var STRICT_METHOD$2 = arrayMethodIsStrict$2('indexOf'); // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof

  $$f({
    target: 'Array',
    proto: true,
    forced: NEGATIVE_ZERO || !STRICT_METHOD$2
  }, {
    indexOf: function indexOf(searchElement
    /* , fromIndex = 0 */
    ) {
      return NEGATIVE_ZERO // convert -0 to +0
      ? nativeIndexOf.apply(this, arguments) || 0 : $indexOf(this, searchElement, arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  var $$e = _export;
  var fails$h = fails$m;
  var isArray$4 = isArray$2;
  var isObject$b = isObject$f;
  var toObject$7 = toObject$9;
  var toLength$9 = toLength$b;
  var createProperty$4 = createProperty$5;
  var arraySpeciesCreate$3 = arraySpeciesCreate$2;
  var arrayMethodHasSpeciesSupport$5 = arrayMethodHasSpeciesSupport$4;
  var wellKnownSymbol$o = wellKnownSymbol$f;
  var V8_VERSION$3 = engineV8Version;
  var IS_CONCAT_SPREADABLE = wellKnownSymbol$o('isConcatSpreadable');
  var MAX_SAFE_INTEGER$1 = 0x1FFFFFFFFFFFFF;
  var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded'; // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/679

  var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION$3 >= 51 || !fails$h(function () {
    var array = [];
    array[IS_CONCAT_SPREADABLE] = false;
    return array.concat()[0] !== array;
  });
  var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport$5('concat');

  var isConcatSpreadable = function isConcatSpreadable(O) {
    if (!isObject$b(O)) return false;
    var spreadable = O[IS_CONCAT_SPREADABLE];
    return spreadable !== undefined ? !!spreadable : isArray$4(O);
  };

  var FORCED$1 = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT; // `Array.prototype.concat` method
  // https://tc39.es/ecma262/#sec-array.prototype.concat
  // with adding support of @@isConcatSpreadable and @@species

  $$e({
    target: 'Array',
    proto: true,
    forced: FORCED$1
  }, {
    // eslint-disable-next-line no-unused-vars -- required for `.length`
    concat: function concat(arg) {
      var O = toObject$7(this);
      var A = arraySpeciesCreate$3(O, 0);
      var n = 0;
      var i, k, length, len, E;

      for (i = -1, length = arguments.length; i < length; i++) {
        E = i === -1 ? O : arguments[i];

        if (isConcatSpreadable(E)) {
          len = toLength$9(E.length);
          if (n + len > MAX_SAFE_INTEGER$1) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);

          for (k = 0; k < len; k++, n++) {
            if (k in E) createProperty$4(A, n, E[k]);
          }
        } else {
          if (n >= MAX_SAFE_INTEGER$1) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
          createProperty$4(A, n++, E);
        }
      }

      A.length = n;
      return A;
    }
  });

  var isSymbol$4 = isSymbol$2;

  var toString$9 = function toString(argument) {
    if (isSymbol$4(argument)) throw TypeError('Cannot convert a Symbol value to a string');
    return String(argument);
  };

  var toInteger$2 = toInteger$5;
  var toString$8 = toString$9;
  var requireObjectCoercible$4 = requireObjectCoercible$6; // `String.prototype.codePointAt` methods implementation

  var createMethod$3 = function createMethod(CONVERT_TO_STRING) {
    return function ($this, pos) {
      var S = toString$8(requireObjectCoercible$4($this));
      var position = toInteger$2(pos);
      var size = S.length;
      var first, second;
      if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
      first = S.charCodeAt(position);
      return first < 0xD800 || first > 0xDBFF || position + 1 === size || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF ? CONVERT_TO_STRING ? S.charAt(position) : first : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
    };
  };

  var stringMultibyte = {
    // `String.prototype.codePointAt` method
    // https://tc39.es/ecma262/#sec-string.prototype.codepointat
    codeAt: createMethod$3(false),
    // `String.prototype.at` method
    // https://github.com/mathiasbynens/String.prototype.at
    charAt: createMethod$3(true)
  };

  var charAt = stringMultibyte.charAt; // `AdvanceStringIndex` abstract operation
  // https://tc39.es/ecma262/#sec-advancestringindex

  var advanceStringIndex$3 = function advanceStringIndex(S, index, unicode) {
    return index + (unicode ? charAt(S, index).length : 1);
  };

  var toObject$6 = toObject$9;
  var floor = Math.floor;
  var replace = ''.replace;
  var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d{1,2}|<[^>]*>)/g;
  var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d{1,2})/g; // `GetSubstitution` abstract operation
  // https://tc39.es/ecma262/#sec-getsubstitution

  var getSubstitution$1 = function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
    var tailPos = position + matched.length;
    var m = captures.length;
    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;

    if (namedCaptures !== undefined) {
      namedCaptures = toObject$6(namedCaptures);
      symbols = SUBSTITUTION_SYMBOLS;
    }

    return replace.call(replacement, symbols, function (match, ch) {
      var capture;

      switch (ch.charAt(0)) {
        case '$':
          return '$';

        case '&':
          return matched;

        case '`':
          return str.slice(0, position);

        case "'":
          return str.slice(tailPos);

        case '<':
          capture = namedCaptures[ch.slice(1, -1)];
          break;

        default:
          // \d\d?
          var n = +ch;
          if (n === 0) return match;

          if (n > m) {
            var f = floor(n / 10);
            if (f === 0) return match;
            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
            return match;
          }

          capture = captures[n - 1];
      }

      return capture === undefined ? '' : capture;
    });
  };

  var classof$7 = classofRaw;
  var regexpExec$3 = regexpExec$2; // `RegExpExec` abstract operation
  // https://tc39.es/ecma262/#sec-regexpexec

  var regexpExecAbstract = function regexpExecAbstract(R, S) {
    var exec = R.exec;

    if (typeof exec === 'function') {
      var result = exec.call(R, S);

      if (typeof result !== 'object') {
        throw TypeError('RegExp exec method returned something other than an Object or null');
      }

      return result;
    }

    if (classof$7(R) !== 'RegExp') {
      throw TypeError('RegExp#exec called on incompatible receiver');
    }

    return regexpExec$3.call(R, S);
  };

  var fixRegExpWellKnownSymbolLogic$2 = fixRegexpWellKnownSymbolLogic;
  var fails$g = fails$m;
  var anObject$d = anObject$g;
  var toInteger$1 = toInteger$5;
  var toLength$8 = toLength$b;
  var toString$7 = toString$9;
  var requireObjectCoercible$3 = requireObjectCoercible$6;
  var advanceStringIndex$2 = advanceStringIndex$3;
  var getSubstitution = getSubstitution$1;
  var regExpExec$1 = regexpExecAbstract;
  var wellKnownSymbol$n = wellKnownSymbol$f;
  var REPLACE = wellKnownSymbol$n('replace');
  var max$2 = Math.max;
  var min$2 = Math.min;

  var maybeToString = function maybeToString(it) {
    return it === undefined ? it : String(it);
  }; // IE <= 11 replaces $0 with the whole match, as if it was $&
  // https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0


  var REPLACE_KEEPS_$0 = function () {
    // eslint-disable-next-line regexp/prefer-escape-replacement-dollar-char -- required for testing
    return 'a'.replace(/./, '$0') === '$0';
  }(); // Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string


  var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = function () {
    if (/./[REPLACE]) {
      return /./[REPLACE]('a', '$0') === '';
    }

    return false;
  }();

  var REPLACE_SUPPORTS_NAMED_GROUPS = !fails$g(function () {
    var re = /./;

    re.exec = function () {
      var result = [];
      result.groups = {
        a: '7'
      };
      return result;
    };

    return ''.replace(re, '$<a>') !== '7';
  }); // @@replace logic

  fixRegExpWellKnownSymbolLogic$2('replace', function (_, nativeReplace, maybeCallNative) {
    var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';
    return [// `String.prototype.replace` method
    // https://tc39.es/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = requireObjectCoercible$3(this);
      var replacer = searchValue == undefined ? undefined : searchValue[REPLACE];
      return replacer !== undefined ? replacer.call(searchValue, O, replaceValue) : nativeReplace.call(toString$7(O), searchValue, replaceValue);
    }, // `RegExp.prototype[@@replace]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
    function (string, replaceValue) {
      var rx = anObject$d(this);
      var S = toString$7(string);

      if (typeof replaceValue === 'string' && replaceValue.indexOf(UNSAFE_SUBSTITUTE) === -1 && replaceValue.indexOf('$<') === -1) {
        var res = maybeCallNative(nativeReplace, rx, S, replaceValue);
        if (res.done) return res.value;
      }

      var functionalReplace = typeof replaceValue === 'function';
      if (!functionalReplace) replaceValue = toString$7(replaceValue);
      var global = rx.global;

      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }

      var results = [];

      while (true) {
        var result = regExpExec$1(rx, S);
        if (result === null) break;
        results.push(result);
        if (!global) break;
        var matchStr = toString$7(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex$2(S, toLength$8(rx.lastIndex), fullUnicode);
      }

      var accumulatedResult = '';
      var nextSourcePosition = 0;

      for (var i = 0; i < results.length; i++) {
        result = results[i];
        var matched = toString$7(result[0]);
        var position = max$2(min$2(toInteger$1(result.index), S.length), 0);
        var captures = []; // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.

        for (var j = 1; j < result.length; j++) {
          captures.push(maybeToString(result[j]));
        }

        var namedCaptures = result.groups;

        if (functionalReplace) {
          var replacerArgs = [matched].concat(captures, position, S);
          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
          var replacement = toString$7(replaceValue.apply(undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }

        if (position >= nextSourcePosition) {
          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }

      return accumulatedResult + S.slice(nextSourcePosition);
    }];
  }, !REPLACE_SUPPORTS_NAMED_GROUPS || !REPLACE_KEEPS_$0 || REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE);

  var regexpStickyHelpers = {};

  var fails$f = fails$m; // babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError,

  var RE = function RE(s, f) {
    return RegExp(s, f);
  };

  regexpStickyHelpers.UNSUPPORTED_Y = fails$f(function () {
    var re = RE('a', 'y');
    re.lastIndex = 2;
    return re.exec('abcd') != null;
  });
  regexpStickyHelpers.BROKEN_CARET = fails$f(function () {
    // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
    var re = RE('^r', 'gy');
    re.lastIndex = 2;
    return re.exec('str') != null;
  });

  var has$a = has$d;
  var toIndexedObject$7 = toIndexedObject$2;
  var indexOf = arrayIncludes.indexOf;
  var hiddenKeys$3 = hiddenKeys$5;

  var objectKeysInternal = function objectKeysInternal(object, names) {
    var O = toIndexedObject$7(object);
    var i = 0;
    var result = [];
    var key;

    for (key in O) {
      !has$a(hiddenKeys$3, key) && has$a(O, key) && result.push(key);
    } // Don't enum bug & hidden keys


    while (names.length > i) {
      if (has$a(O, key = names[i++])) {
        ~indexOf(result, key) || result.push(key);
      }
    }

    return result;
  };

  var enumBugKeys$3 = ['constructor', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'toLocaleString', 'toString', 'valueOf'];

  var internalObjectKeys$1 = objectKeysInternal;
  var enumBugKeys$2 = enumBugKeys$3; // `Object.keys` method
  // https://tc39.es/ecma262/#sec-object.keys
  // eslint-disable-next-line es/no-object-keys -- safe

  var objectKeys$3 = Object.keys || function keys(O) {
    return internalObjectKeys$1(O, enumBugKeys$2);
  };

  var DESCRIPTORS$6 = descriptors;
  var definePropertyModule$4 = objectDefineProperty;
  var anObject$c = anObject$g;
  var objectKeys$2 = objectKeys$3; // `Object.defineProperties` method
  // https://tc39.es/ecma262/#sec-object.defineproperties
  // eslint-disable-next-line es/no-object-defineproperties -- safe

  var objectDefineProperties = DESCRIPTORS$6 ? Object.defineProperties : function defineProperties(O, Properties) {
    anObject$c(O);
    var keys = objectKeys$2(Properties);
    var length = keys.length;
    var index = 0;
    var key;

    while (length > index) {
      definePropertyModule$4.f(O, key = keys[index++], Properties[key]);
    }

    return O;
  };

  var getBuiltIn$7 = getBuiltIn$8;
  var html$2 = getBuiltIn$7('document', 'documentElement');

  /* global ActiveXObject -- old IE, WSH */
  var anObject$b = anObject$g;
  var defineProperties = objectDefineProperties;
  var enumBugKeys$1 = enumBugKeys$3;
  var hiddenKeys$2 = hiddenKeys$5;
  var html$1 = html$2;
  var documentCreateElement = documentCreateElement$1;
  var sharedKey$2 = sharedKey$4;
  var GT = '>';
  var LT = '<';
  var PROTOTYPE$1 = 'prototype';
  var SCRIPT = 'script';
  var IE_PROTO$1 = sharedKey$2('IE_PROTO');

  var EmptyConstructor = function EmptyConstructor() {
    /* empty */
  };

  var scriptTag = function scriptTag(content) {
    return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
  }; // Create object with fake `null` prototype: use ActiveX Object with cleared prototype


  var NullProtoObjectViaActiveX = function NullProtoObjectViaActiveX(activeXDocument) {
    activeXDocument.write(scriptTag(''));
    activeXDocument.close();
    var temp = activeXDocument.parentWindow.Object;
    activeXDocument = null; // avoid memory leak

    return temp;
  }; // Create object with fake `null` prototype: use iframe Object with cleared prototype


  var NullProtoObjectViaIFrame = function NullProtoObjectViaIFrame() {
    // Thrash, waste and sodomy: IE GC bug
    var iframe = documentCreateElement('iframe');
    var JS = 'java' + SCRIPT + ':';
    var iframeDocument;

    if (iframe.style) {
      iframe.style.display = 'none';
      html$1.appendChild(iframe); // https://github.com/zloirock/core-js/issues/475

      iframe.src = String(JS);
      iframeDocument = iframe.contentWindow.document;
      iframeDocument.open();
      iframeDocument.write(scriptTag('document.F=Object'));
      iframeDocument.close();
      return iframeDocument.F;
    }
  }; // Check for document.domain and active x support
  // No need to use active x approach when document.domain is not set
  // see https://github.com/es-shims/es5-shim/issues/150
  // variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
  // avoid IE GC bug


  var activeXDocument;

  var _NullProtoObject = function NullProtoObject() {
    try {
      activeXDocument = new ActiveXObject('htmlfile');
    } catch (error) {
      /* ignore */
    }

    _NullProtoObject = document.domain && activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : // old IE
    NullProtoObjectViaIFrame() || NullProtoObjectViaActiveX(activeXDocument); // WSH

    var length = enumBugKeys$1.length;

    while (length--) {
      delete _NullProtoObject[PROTOTYPE$1][enumBugKeys$1[length]];
    }

    return _NullProtoObject();
  };

  hiddenKeys$2[IE_PROTO$1] = true; // `Object.create` method
  // https://tc39.es/ecma262/#sec-object.create

  var objectCreate = Object.create || function create(O, Properties) {
    var result;

    if (O !== null) {
      EmptyConstructor[PROTOTYPE$1] = anObject$b(O);
      result = new EmptyConstructor();
      EmptyConstructor[PROTOTYPE$1] = null; // add "__proto__" for Object.getPrototypeOf polyfill

      result[IE_PROTO$1] = O;
    } else result = _NullProtoObject();

    return Properties === undefined ? result : defineProperties(result, Properties);
  };

  var fails$e = fails$m;
  var regexpUnsupportedDotAll = fails$e(function () {
    // babel-minify transpiles RegExp('.', 's') -> /./s and it causes SyntaxError
    var re = RegExp('.', (typeof '').charAt(0));
    return !(re.dotAll && re.exec('\n') && re.flags === 's');
  });

  var fails$d = fails$m;
  var regexpUnsupportedNcg = fails$d(function () {
    // babel-minify transpiles RegExp('.', 'g') -> /./g and it causes SyntaxError
    var re = RegExp('(?<a>b)', (typeof '').charAt(5));
    return re.exec('b').groups.a !== 'b' || 'b'.replace(re, '$<a>c') !== 'bc';
  });

  /* eslint-disable regexp/no-assertion-capturing-group, regexp/no-empty-group, regexp/no-lazy-ends -- testing */

  /* eslint-disable regexp/no-useless-quantifier -- testing */


  var toString$6 = toString$9;
  var regexpFlags = regexpFlags$1;
  var stickyHelpers$2 = regexpStickyHelpers;
  var shared$2 = shared$5.exports;
  var create$2 = objectCreate;
  var getInternalState$3 = internalState.get;
  var UNSUPPORTED_DOT_ALL$1 = regexpUnsupportedDotAll;
  var UNSUPPORTED_NCG$1 = regexpUnsupportedNcg;
  var nativeExec = RegExp.prototype.exec;
  var nativeReplace = shared$2('native-string-replace', String.prototype.replace);
  var patchedExec = nativeExec;

  var UPDATES_LAST_INDEX_WRONG = function () {
    var re1 = /a/;
    var re2 = /b*/g;
    nativeExec.call(re1, 'a');
    nativeExec.call(re2, 'a');
    return re1.lastIndex !== 0 || re2.lastIndex !== 0;
  }();

  var UNSUPPORTED_Y$2 = stickyHelpers$2.UNSUPPORTED_Y || stickyHelpers$2.BROKEN_CARET; // nonparticipating capturing group, copied from es5-shim's String#split patch.

  var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;
  var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y$2 || UNSUPPORTED_DOT_ALL$1 || UNSUPPORTED_NCG$1;

  if (PATCH) {
    // eslint-disable-next-line max-statements -- TODO
    patchedExec = function exec(string) {
      var re = this;
      var state = getInternalState$3(re);
      var str = toString$6(string);
      var raw = state.raw;
      var result, reCopy, lastIndex, match, i, object, group;

      if (raw) {
        raw.lastIndex = re.lastIndex;
        result = patchedExec.call(raw, str);
        re.lastIndex = raw.lastIndex;
        return result;
      }

      var groups = state.groups;
      var sticky = UNSUPPORTED_Y$2 && re.sticky;
      var flags = regexpFlags.call(re);
      var source = re.source;
      var charsAdded = 0;
      var strCopy = str;

      if (sticky) {
        flags = flags.replace('y', '');

        if (flags.indexOf('g') === -1) {
          flags += 'g';
        }

        strCopy = str.slice(re.lastIndex); // Support anchored sticky behavior.

        if (re.lastIndex > 0 && (!re.multiline || re.multiline && str.charAt(re.lastIndex - 1) !== '\n')) {
          source = '(?: ' + source + ')';
          strCopy = ' ' + strCopy;
          charsAdded++;
        } // ^(? + rx + ) is needed, in combination with some str slicing, to
        // simulate the 'y' flag.


        reCopy = new RegExp('^(?:' + source + ')', flags);
      }

      if (NPCG_INCLUDED) {
        reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
      }

      if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;
      match = nativeExec.call(sticky ? reCopy : re, strCopy);

      if (sticky) {
        if (match) {
          match.input = match.input.slice(charsAdded);
          match[0] = match[0].slice(charsAdded);
          match.index = re.lastIndex;
          re.lastIndex += match[0].length;
        } else re.lastIndex = 0;
      } else if (UPDATES_LAST_INDEX_WRONG && match) {
        re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
      }

      if (NPCG_INCLUDED && match && match.length > 1) {
        // Fix browsers whose `exec` methods don't consistently return `undefined`
        // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
        nativeReplace.call(match[0], reCopy, function () {
          for (i = 1; i < arguments.length - 2; i++) {
            if (arguments[i] === undefined) match[i] = undefined;
          }
        });
      }

      if (match && groups) {
        match.groups = object = create$2(null);

        for (i = 0; i < groups.length; i++) {
          group = groups[i];
          object[group[0]] = match[group[1]];
        }
      }

      return match;
    };
  }

  var regexpExec$2 = patchedExec;

  var redefine$9 = redefine$a.exports;
  var regexpExec$1 = regexpExec$2;
  var fails$c = fails$m;
  var wellKnownSymbol$m = wellKnownSymbol$f;
  var createNonEnumerableProperty$7 = createNonEnumerableProperty$a;
  var SPECIES$6 = wellKnownSymbol$m('species');
  var RegExpPrototype$2 = RegExp.prototype;

  var fixRegexpWellKnownSymbolLogic = function fixRegexpWellKnownSymbolLogic(KEY, exec, FORCED, SHAM) {
    var SYMBOL = wellKnownSymbol$m(KEY);
    var DELEGATES_TO_SYMBOL = !fails$c(function () {
      // String methods call symbol-named RegEp methods
      var O = {};

      O[SYMBOL] = function () {
        return 7;
      };

      return ''[KEY](O) != 7;
    });
    var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails$c(function () {
      // Symbol-named RegExp methods call .exec
      var execCalled = false;
      var re = /a/;

      if (KEY === 'split') {
        // We can't use real regex here since it causes deoptimization
        // and serious performance degradation in V8
        // https://github.com/zloirock/core-js/issues/306
        re = {}; // RegExp[@@split] doesn't call the regex's exec method, but first creates
        // a new one. We need to return the patched regex when creating the new one.

        re.constructor = {};

        re.constructor[SPECIES$6] = function () {
          return re;
        };

        re.flags = '';
        re[SYMBOL] = /./[SYMBOL];
      }

      re.exec = function () {
        execCalled = true;
        return null;
      };

      re[SYMBOL]('');
      return !execCalled;
    });

    if (!DELEGATES_TO_SYMBOL || !DELEGATES_TO_EXEC || FORCED) {
      var nativeRegExpMethod = /./[SYMBOL];
      var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
        var $exec = regexp.exec;

        if ($exec === regexpExec$1 || $exec === RegExpPrototype$2.exec) {
          if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
            // The native String method already delegates to @@method (this
            // polyfilled function), leasing to infinite recursion.
            // We avoid it by directly calling the native @@method method.
            return {
              done: true,
              value: nativeRegExpMethod.call(regexp, str, arg2)
            };
          }

          return {
            done: true,
            value: nativeMethod.call(str, regexp, arg2)
          };
        }

        return {
          done: false
        };
      });
      redefine$9(String.prototype, KEY, methods[0]);
      redefine$9(RegExpPrototype$2, SYMBOL, methods[1]);
    }

    if (SHAM) createNonEnumerableProperty$7(RegExpPrototype$2[SYMBOL], 'sham', true);
  };

  var isObject$a = isObject$f;
  var classof$6 = classofRaw;
  var wellKnownSymbol$l = wellKnownSymbol$f;
  var MATCH$1 = wellKnownSymbol$l('match'); // `IsRegExp` abstract operation
  // https://tc39.es/ecma262/#sec-isregexp

  var isRegexp = function isRegexp(it) {
    var isRegExp;
    return isObject$a(it) && ((isRegExp = it[MATCH$1]) !== undefined ? !!isRegExp : classof$6(it) == 'RegExp');
  };

  var anObject$a = anObject$g;
  var aFunction$3 = aFunction$5;
  var wellKnownSymbol$k = wellKnownSymbol$f;
  var SPECIES$5 = wellKnownSymbol$k('species'); // `SpeciesConstructor` abstract operation
  // https://tc39.es/ecma262/#sec-speciesconstructor

  var speciesConstructor$3 = function speciesConstructor(O, defaultConstructor) {
    var C = anObject$a(O).constructor;
    var S;
    return C === undefined || (S = anObject$a(C)[SPECIES$5]) == undefined ? defaultConstructor : aFunction$3(S);
  };

  var fixRegExpWellKnownSymbolLogic$1 = fixRegexpWellKnownSymbolLogic;
  var isRegExp$1 = isRegexp;
  var anObject$9 = anObject$g;
  var requireObjectCoercible$2 = requireObjectCoercible$6;
  var speciesConstructor$2 = speciesConstructor$3;
  var advanceStringIndex$1 = advanceStringIndex$3;
  var toLength$7 = toLength$b;
  var toString$5 = toString$9;
  var callRegExpExec = regexpExecAbstract;
  var regexpExec = regexpExec$2;
  var stickyHelpers$1 = regexpStickyHelpers;
  var fails$b = fails$m;
  var UNSUPPORTED_Y$1 = stickyHelpers$1.UNSUPPORTED_Y;
  var arrayPush = [].push;
  var min$1 = Math.min;
  var MAX_UINT32 = 0xFFFFFFFF; // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
  // Weex JS has frozen built-in prototypes, so use try / catch wrapper

  var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails$b(function () {
    // eslint-disable-next-line regexp/no-empty-group -- required for testing
    var re = /(?:)/;
    var originalExec = re.exec;

    re.exec = function () {
      return originalExec.apply(this, arguments);
    };

    var result = 'ab'.split(re);
    return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
  }); // @@split logic

  fixRegExpWellKnownSymbolLogic$1('split', function (SPLIT, nativeSplit, maybeCallNative) {
    var internalSplit;

    if ('abbc'.split(/(b)*/)[1] == 'c' || // eslint-disable-next-line regexp/no-empty-group -- required for testing
    'test'.split(/(?:)/, -1).length != 4 || 'ab'.split(/(?:ab)*/).length != 2 || '.'.split(/(.?)(.?)/).length != 4 || // eslint-disable-next-line regexp/no-assertion-capturing-group, regexp/no-empty-group -- required for testing
    '.'.split(/()()/).length > 1 || ''.split(/.?/).length) {
      // based on es5-shim implementation, need to rework it
      internalSplit = function internalSplit(separator, limit) {
        var string = toString$5(requireObjectCoercible$2(this));
        var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
        if (lim === 0) return [];
        if (separator === undefined) return [string]; // If `separator` is not a regex, use native split

        if (!isRegExp$1(separator)) {
          return nativeSplit.call(string, separator, lim);
        }

        var output = [];
        var flags = (separator.ignoreCase ? 'i' : '') + (separator.multiline ? 'm' : '') + (separator.unicode ? 'u' : '') + (separator.sticky ? 'y' : '');
        var lastLastIndex = 0; // Make `global` and avoid `lastIndex` issues by working with a copy

        var separatorCopy = new RegExp(separator.source, flags + 'g');
        var match, lastIndex, lastLength;

        while (match = regexpExec.call(separatorCopy, string)) {
          lastIndex = separatorCopy.lastIndex;

          if (lastIndex > lastLastIndex) {
            output.push(string.slice(lastLastIndex, match.index));
            if (match.length > 1 && match.index < string.length) arrayPush.apply(output, match.slice(1));
            lastLength = match[0].length;
            lastLastIndex = lastIndex;
            if (output.length >= lim) break;
          }

          if (separatorCopy.lastIndex === match.index) separatorCopy.lastIndex++; // Avoid an infinite loop
        }

        if (lastLastIndex === string.length) {
          if (lastLength || !separatorCopy.test('')) output.push('');
        } else output.push(string.slice(lastLastIndex));

        return output.length > lim ? output.slice(0, lim) : output;
      }; // Chakra, V8

    } else if ('0'.split(undefined, 0).length) {
      internalSplit = function internalSplit(separator, limit) {
        return separator === undefined && limit === 0 ? [] : nativeSplit.call(this, separator, limit);
      };
    } else internalSplit = nativeSplit;

    return [// `String.prototype.split` method
    // https://tc39.es/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = requireObjectCoercible$2(this);
      var splitter = separator == undefined ? undefined : separator[SPLIT];
      return splitter !== undefined ? splitter.call(separator, O, limit) : internalSplit.call(toString$5(O), separator, limit);
    }, // `RegExp.prototype[@@split]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (string, limit) {
      var rx = anObject$9(this);
      var S = toString$5(string);
      var res = maybeCallNative(internalSplit, rx, S, limit, internalSplit !== nativeSplit);
      if (res.done) return res.value;
      var C = speciesConstructor$2(rx, RegExp);
      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') + (rx.multiline ? 'm' : '') + (rx.unicode ? 'u' : '') + (UNSUPPORTED_Y$1 ? 'g' : 'y'); // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.

      var splitter = new C(UNSUPPORTED_Y$1 ? '^(?:' + rx.source + ')' : rx, flags);
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];

      while (q < S.length) {
        splitter.lastIndex = UNSUPPORTED_Y$1 ? 0 : q;
        var z = callRegExpExec(splitter, UNSUPPORTED_Y$1 ? S.slice(q) : S);
        var e;

        if (z === null || (e = min$1(toLength$7(splitter.lastIndex + (UNSUPPORTED_Y$1 ? q : 0)), S.length)) === p) {
          q = advanceStringIndex$1(S, q, unicodeMatching);
        } else {
          A.push(S.slice(p, q));
          if (A.length === lim) return A;

          for (var i = 1; i <= z.length - 1; i++) {
            A.push(z[i]);
            if (A.length === lim) return A;
          }

          q = p = e;
        }
      }

      A.push(S.slice(p));
      return A;
    }];
  }, !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC, UNSUPPORTED_Y$1);

  var fixRegExpWellKnownSymbolLogic = fixRegexpWellKnownSymbolLogic;
  var anObject$8 = anObject$g;
  var toLength$6 = toLength$b;
  var toString$4 = toString$9;
  var requireObjectCoercible$1 = requireObjectCoercible$6;
  var advanceStringIndex = advanceStringIndex$3;
  var regExpExec = regexpExecAbstract; // @@match logic

  fixRegExpWellKnownSymbolLogic('match', function (MATCH, nativeMatch, maybeCallNative) {
    return [// `String.prototype.match` method
    // https://tc39.es/ecma262/#sec-string.prototype.match
    function match(regexp) {
      var O = requireObjectCoercible$1(this);
      var matcher = regexp == undefined ? undefined : regexp[MATCH];
      return matcher !== undefined ? matcher.call(regexp, O) : new RegExp(regexp)[MATCH](toString$4(O));
    }, // `RegExp.prototype[@@match]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@match
    function (string) {
      var rx = anObject$8(this);
      var S = toString$4(string);
      var res = maybeCallNative(nativeMatch, rx, S);
      if (res.done) return res.value;
      if (!rx.global) return regExpExec(rx, S);
      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
      var A = [];
      var n = 0;
      var result;

      while ((result = regExpExec(rx, S)) !== null) {
        var matchStr = toString$4(result[0]);
        A[n] = matchStr;
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength$6(rx.lastIndex), fullUnicode);
        n++;
      }

      return n === 0 ? null : A;
    }];
  });

  var getBuiltIn$6 = getBuiltIn$8;
  var engineUserAgent = getBuiltIn$6('navigator', 'userAgent') || '';

  var global$f = global$n;
  var userAgent$2 = engineUserAgent;
  var process$3 = global$f.process;
  var Deno = global$f.Deno;
  var versions = process$3 && process$3.versions || Deno && Deno.version;
  var v8 = versions && versions.v8;
  var match, version;

  if (v8) {
    match = v8.split('.');
    version = match[0] < 4 ? 1 : match[0] + match[1];
  } else if (userAgent$2) {
    match = userAgent$2.match(/Edge\/(\d+)/);

    if (!match || match[1] >= 74) {
      match = userAgent$2.match(/Chrome\/(\d+)/);
      if (match) version = match[1];
    }
  }

  var engineV8Version = version && +version;

  var fails$a = fails$m;
  var wellKnownSymbol$j = wellKnownSymbol$f;
  var V8_VERSION$2 = engineV8Version;
  var SPECIES$4 = wellKnownSymbol$j('species');

  var arrayMethodHasSpeciesSupport$4 = function arrayMethodHasSpeciesSupport(METHOD_NAME) {
    // We can't use this feature detection in V8 since it causes
    // deoptimization and serious performance degradation
    // https://github.com/zloirock/core-js/issues/677
    return V8_VERSION$2 >= 51 || !fails$a(function () {
      var array = [];
      var constructor = array.constructor = {};

      constructor[SPECIES$4] = function () {
        return {
          foo: 1
        };
      };

      return array[METHOD_NAME](Boolean).foo !== 1;
    });
  };

  var $$d = _export;
  var isObject$9 = isObject$f;
  var isArray$3 = isArray$2;
  var toAbsoluteIndex$1 = toAbsoluteIndex$3;
  var toLength$5 = toLength$b;
  var toIndexedObject$6 = toIndexedObject$2;
  var createProperty$3 = createProperty$5;
  var wellKnownSymbol$i = wellKnownSymbol$f;
  var arrayMethodHasSpeciesSupport$3 = arrayMethodHasSpeciesSupport$4;
  var HAS_SPECIES_SUPPORT$3 = arrayMethodHasSpeciesSupport$3('slice');
  var SPECIES$3 = wellKnownSymbol$i('species');
  var nativeSlice = [].slice;
  var max$1 = Math.max; // `Array.prototype.slice` method
  // https://tc39.es/ecma262/#sec-array.prototype.slice
  // fallback for not array-like ES3 strings and DOM objects

  $$d({
    target: 'Array',
    proto: true,
    forced: !HAS_SPECIES_SUPPORT$3
  }, {
    slice: function slice(start, end) {
      var O = toIndexedObject$6(this);
      var length = toLength$5(O.length);
      var k = toAbsoluteIndex$1(start, length);
      var fin = toAbsoluteIndex$1(end === undefined ? length : end, length); // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible

      var Constructor, result, n;

      if (isArray$3(O)) {
        Constructor = O.constructor; // cross-realm fallback

        if (typeof Constructor == 'function' && (Constructor === Array || isArray$3(Constructor.prototype))) {
          Constructor = undefined;
        } else if (isObject$9(Constructor)) {
          Constructor = Constructor[SPECIES$3];
          if (Constructor === null) Constructor = undefined;
        }

        if (Constructor === Array || Constructor === undefined) {
          return nativeSlice.call(O, k, fin);
        }
      }

      result = new (Constructor === undefined ? Array : Constructor)(max$1(fin - k, 0));

      for (n = 0; k < fin; k++, n++) {
        if (k in O) createProperty$3(result, n, O[k]);
      }

      result.length = n;
      return result;
    }
  });

  var fails$9 = fails$m;
  var replacement = /#|\.prototype\./;

  var isForced$3 = function isForced(feature, detection) {
    var value = data[normalize(feature)];
    return value == POLYFILL ? true : value == NATIVE ? false : typeof detection == 'function' ? fails$9(detection) : !!detection;
  };

  var normalize = isForced$3.normalize = function (string) {
    return String(string).replace(replacement, '.').toLowerCase();
  };

  var data = isForced$3.data = {};
  var NATIVE = isForced$3.NATIVE = 'N';
  var POLYFILL = isForced$3.POLYFILL = 'P';
  var isForced_1 = isForced$3;

  var isObject$8 = isObject$f;

  var aPossiblePrototype$1 = function aPossiblePrototype(it) {
    if (!isObject$8(it) && it !== null) {
      throw TypeError("Can't set " + String(it) + ' as a prototype');
    }

    return it;
  };

  /* eslint-disable no-proto -- safe */
  var anObject$7 = anObject$g;
  var aPossiblePrototype = aPossiblePrototype$1; // `Object.setPrototypeOf` method
  // https://tc39.es/ecma262/#sec-object.setprototypeof
  // Works with __proto__ only. Old v8 can't work with null proto objects.
  // eslint-disable-next-line es/no-object-setprototypeof -- safe

  var objectSetPrototypeOf = Object.setPrototypeOf || ('__proto__' in {} ? function () {
    var CORRECT_SETTER = false;
    var test = {};
    var setter;

    try {
      // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
      setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
      setter.call(test, []);
      CORRECT_SETTER = test instanceof Array;
    } catch (error) {
      /* empty */
    }

    return function setPrototypeOf(O, proto) {
      anObject$7(O);
      aPossiblePrototype(proto);
      if (CORRECT_SETTER) setter.call(O, proto);else O.__proto__ = proto;
      return O;
    };
  }() : undefined);

  var isObject$7 = isObject$f;
  var setPrototypeOf$2 = objectSetPrototypeOf; // makes subclassing work correct for wrapped built-ins

  var inheritIfRequired$1 = function inheritIfRequired($this, dummy, Wrapper) {
    var NewTarget, NewTargetPrototype;
    if ( // it can work only with native `setPrototypeOf`
    setPrototypeOf$2 && // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    typeof (NewTarget = dummy.constructor) == 'function' && NewTarget !== Wrapper && isObject$7(NewTargetPrototype = NewTarget.prototype) && NewTargetPrototype !== Wrapper.prototype) setPrototypeOf$2($this, NewTargetPrototype);
    return $this;
  };

  var objectGetOwnPropertyNames = {};

  var internalObjectKeys = objectKeysInternal;
  var enumBugKeys = enumBugKeys$3;
  var hiddenKeys$1 = enumBugKeys.concat('length', 'prototype'); // `Object.getOwnPropertyNames` method
  // https://tc39.es/ecma262/#sec-object.getownpropertynames
  // eslint-disable-next-line es/no-object-getownpropertynames -- safe

  objectGetOwnPropertyNames.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
    return internalObjectKeys(O, hiddenKeys$1);
  };

  var getBuiltIn$5 = getBuiltIn$8;
  var definePropertyModule$3 = objectDefineProperty;
  var wellKnownSymbol$h = wellKnownSymbol$f;
  var DESCRIPTORS$5 = descriptors;
  var SPECIES$2 = wellKnownSymbol$h('species');

  var setSpecies$2 = function setSpecies(CONSTRUCTOR_NAME) {
    var Constructor = getBuiltIn$5(CONSTRUCTOR_NAME);
    var defineProperty = definePropertyModule$3.f;

    if (DESCRIPTORS$5 && Constructor && !Constructor[SPECIES$2]) {
      defineProperty(Constructor, SPECIES$2, {
        configurable: true,
        get: function get() {
          return this;
        }
      });
    }
  };

  var DESCRIPTORS$4 = descriptors;
  var global$e = global$n;
  var isForced$2 = isForced_1;
  var inheritIfRequired = inheritIfRequired$1;
  var createNonEnumerableProperty$6 = createNonEnumerableProperty$a;
  var defineProperty$3 = objectDefineProperty.f;
  var getOwnPropertyNames = objectGetOwnPropertyNames.f;
  var isRegExp = isRegexp;
  var toString$3 = toString$9;
  var getFlags = regexpFlags$1;
  var stickyHelpers = regexpStickyHelpers;
  var redefine$8 = redefine$a.exports;
  var fails$8 = fails$m;
  var has$9 = has$d;
  var enforceInternalState = internalState.enforce;
  var setSpecies$1 = setSpecies$2;
  var wellKnownSymbol$g = wellKnownSymbol$f;
  var UNSUPPORTED_DOT_ALL = regexpUnsupportedDotAll;
  var UNSUPPORTED_NCG = regexpUnsupportedNcg;
  var MATCH = wellKnownSymbol$g('match');
  var NativeRegExp = global$e.RegExp;
  var RegExpPrototype$1 = NativeRegExp.prototype; // TODO: Use only propper RegExpIdentifierName

  var IS_NCG = /^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/;
  var re1 = /a/g;
  var re2 = /a/g; // "new" should create a new object, old webkit bug

  var CORRECT_NEW = new NativeRegExp(re1) !== re1;
  var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y;
  var BASE_FORCED = DESCRIPTORS$4 && (!CORRECT_NEW || UNSUPPORTED_Y || UNSUPPORTED_DOT_ALL || UNSUPPORTED_NCG || fails$8(function () {
    re2[MATCH] = false; // RegExp constructor can alter flags and IsRegExp works correct with @@match

    return NativeRegExp(re1) != re1 || NativeRegExp(re2) == re2 || NativeRegExp(re1, 'i') != '/a/i';
  }));

  var handleDotAll = function handleDotAll(string) {
    var length = string.length;
    var index = 0;
    var result = '';
    var brackets = false;
    var chr;

    for (; index <= length; index++) {
      chr = string.charAt(index);

      if (chr === '\\') {
        result += chr + string.charAt(++index);
        continue;
      }

      if (!brackets && chr === '.') {
        result += '[\\s\\S]';
      } else {
        if (chr === '[') {
          brackets = true;
        } else if (chr === ']') {
          brackets = false;
        }

        result += chr;
      }
    }

    return result;
  };

  var handleNCG = function handleNCG(string) {
    var length = string.length;
    var index = 0;
    var result = '';
    var named = [];
    var names = {};
    var brackets = false;
    var ncg = false;
    var groupid = 0;
    var groupname = '';
    var chr;

    for (; index <= length; index++) {
      chr = string.charAt(index);

      if (chr === '\\') {
        chr = chr + string.charAt(++index);
      } else if (chr === ']') {
        brackets = false;
      } else if (!brackets) switch (true) {
        case chr === '[':
          brackets = true;
          break;

        case chr === '(':
          if (IS_NCG.test(string.slice(index + 1))) {
            index += 2;
            ncg = true;
          }

          result += chr;
          groupid++;
          continue;

        case chr === '>' && ncg:
          if (groupname === '' || has$9(names, groupname)) {
            throw new SyntaxError('Invalid capture group name');
          }

          names[groupname] = true;
          named.push([groupname, groupid]);
          ncg = false;
          groupname = '';
          continue;
      }

      if (ncg) groupname += chr;else result += chr;
    }

    return [result, named];
  }; // `RegExp` constructor
  // https://tc39.es/ecma262/#sec-regexp-constructor


  if (isForced$2('RegExp', BASE_FORCED)) {
    var RegExpWrapper = function RegExp(pattern, flags) {
      var thisIsRegExp = this instanceof RegExpWrapper;
      var patternIsRegExp = isRegExp(pattern);
      var flagsAreUndefined = flags === undefined;
      var groups = [];
      var rawPattern = pattern;
      var rawFlags, dotAll, sticky, handled, result, state;

      if (!thisIsRegExp && patternIsRegExp && flagsAreUndefined && pattern.constructor === RegExpWrapper) {
        return pattern;
      }

      if (patternIsRegExp || pattern instanceof RegExpWrapper) {
        pattern = pattern.source;
        if (flagsAreUndefined) flags = 'flags' in rawPattern ? rawPattern.flags : getFlags.call(rawPattern);
      }

      pattern = pattern === undefined ? '' : toString$3(pattern);
      flags = flags === undefined ? '' : toString$3(flags);
      rawPattern = pattern;

      if (UNSUPPORTED_DOT_ALL && 'dotAll' in re1) {
        dotAll = !!flags && flags.indexOf('s') > -1;
        if (dotAll) flags = flags.replace(/s/g, '');
      }

      rawFlags = flags;

      if (UNSUPPORTED_Y && 'sticky' in re1) {
        sticky = !!flags && flags.indexOf('y') > -1;
        if (sticky) flags = flags.replace(/y/g, '');
      }

      if (UNSUPPORTED_NCG) {
        handled = handleNCG(pattern);
        pattern = handled[0];
        groups = handled[1];
      }

      result = inheritIfRequired(NativeRegExp(pattern, flags), thisIsRegExp ? this : RegExpPrototype$1, RegExpWrapper);

      if (dotAll || sticky || groups.length) {
        state = enforceInternalState(result);

        if (dotAll) {
          state.dotAll = true;
          state.raw = RegExpWrapper(handleDotAll(pattern), rawFlags);
        }

        if (sticky) state.sticky = true;
        if (groups.length) state.groups = groups;
      }

      if (pattern !== rawPattern) try {
        // fails in old engines, but we have no alternatives for unsupported regex syntax
        createNonEnumerableProperty$6(result, 'source', rawPattern === '' ? '(?:)' : rawPattern);
      } catch (error) {
        /* empty */
      }
      return result;
    };

    var proxy = function proxy(key) {
      key in RegExpWrapper || defineProperty$3(RegExpWrapper, key, {
        configurable: true,
        get: function get() {
          return NativeRegExp[key];
        },
        set: function set(it) {
          NativeRegExp[key] = it;
        }
      });
    };

    for (var keys = getOwnPropertyNames(NativeRegExp), index = 0; keys.length > index;) {
      proxy(keys[index++]);
    }

    RegExpPrototype$1.constructor = RegExpWrapper;
    RegExpWrapper.prototype = RegExpPrototype$1;
    redefine$8(global$e, 'RegExp', RegExpWrapper);
  } // https://tc39.es/ecma262/#sec-get-regexp-@@species


  setSpecies$1('RegExp');

  var redefine$7 = redefine$a.exports;
  var anObject$6 = anObject$g;
  var $toString$1 = toString$9;
  var fails$7 = fails$m;
  var flags = regexpFlags$1;
  var TO_STRING = 'toString';
  var RegExpPrototype = RegExp.prototype;
  var nativeToString = RegExpPrototype[TO_STRING];
  var NOT_GENERIC = fails$7(function () {
    return nativeToString.call({
      source: 'a',
      flags: 'b'
    }) != '/a/b';
  }); // FF44- RegExp#toString has a wrong name

  var INCORRECT_NAME = nativeToString.name != TO_STRING; // `RegExp.prototype.toString` method
  // https://tc39.es/ecma262/#sec-regexp.prototype.tostring

  if (NOT_GENERIC || INCORRECT_NAME) {
    redefine$7(RegExp.prototype, TO_STRING, function toString() {
      var R = anObject$6(this);
      var p = $toString$1(R.source);
      var rf = R.flags;
      var f = $toString$1(rf === undefined && R instanceof RegExp && !('flags' in RegExpPrototype) ? flags.call(R) : rf);
      return '/' + p + '/' + f;
    }, {
      unsafe: true
    });
  }

  var id = 0;
  var postfix = Math.random();

  var uid$2 = function uid(key) {
    return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
  };

  var objectGetOwnPropertySymbols = {};

  objectGetOwnPropertySymbols.f = Object.getOwnPropertySymbols;

  var getBuiltIn$4 = getBuiltIn$8;
  var getOwnPropertyNamesModule$1 = objectGetOwnPropertyNames;
  var getOwnPropertySymbolsModule$1 = objectGetOwnPropertySymbols;
  var anObject$5 = anObject$g; // all object keys, includes non-enumerable and symbols

  var ownKeys$1 = getBuiltIn$4('Reflect', 'ownKeys') || function ownKeys(it) {
    var keys = getOwnPropertyNamesModule$1.f(anObject$5(it));
    var getOwnPropertySymbols = getOwnPropertySymbolsModule$1.f;
    return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
  };

  var has$8 = has$d;
  var ownKeys = ownKeys$1;
  var getOwnPropertyDescriptorModule$1 = objectGetOwnPropertyDescriptor;
  var definePropertyModule$2 = objectDefineProperty;

  var copyConstructorProperties$2 = function copyConstructorProperties(target, source) {
    var keys = ownKeys(source);
    var defineProperty = definePropertyModule$2.f;
    var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule$1.f;

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      if (!has$8(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  };

  var $$c = _export;
  var DESCRIPTORS$3 = descriptors;
  var global$d = global$n;
  var has$7 = has$d;
  var isObject$6 = isObject$f;
  var defineProperty$2 = objectDefineProperty.f;
  var copyConstructorProperties$1 = copyConstructorProperties$2;
  var NativeSymbol = global$d.Symbol;

  if (DESCRIPTORS$3 && typeof NativeSymbol == 'function' && (!('description' in NativeSymbol.prototype) || // Safari 12 bug
  NativeSymbol().description !== undefined)) {
    var EmptyStringDescriptionStore = {}; // wrap Symbol constructor for correct work with undefined description

    var SymbolWrapper = function Symbol() {
      var description = arguments.length < 1 || arguments[0] === undefined ? undefined : String(arguments[0]);
      var result = this instanceof SymbolWrapper ? new NativeSymbol(description) // in Edge 13, String(Symbol(undefined)) === 'Symbol(undefined)'
      : description === undefined ? NativeSymbol() : NativeSymbol(description);
      if (description === '') EmptyStringDescriptionStore[result] = true;
      return result;
    };

    copyConstructorProperties$1(SymbolWrapper, NativeSymbol);
    var symbolPrototype = SymbolWrapper.prototype = NativeSymbol.prototype;
    symbolPrototype.constructor = SymbolWrapper;
    var symbolToString = symbolPrototype.toString;
    var native = String(NativeSymbol('test')) == 'Symbol(test)';
    var regexp = /^Symbol\((.*)\)[^)]+$/;
    defineProperty$2(symbolPrototype, 'description', {
      configurable: true,
      get: function description() {
        var symbol = isObject$6(this) ? this.valueOf() : this;
        var string = symbolToString.call(symbol);
        if (has$7(EmptyStringDescriptionStore, symbol)) return '';
        var desc = native ? string.slice(7, -1) : string.replace(regexp, '$1');
        return desc === '' ? undefined : desc;
      }
    });
    $$c({
      global: true,
      forced: true
    }, {
      Symbol: SymbolWrapper
    });
  }

  var V8_VERSION$1 = engineV8Version;
  var fails$6 = fails$m; // eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing

  var nativeSymbol = !!Object.getOwnPropertySymbols && !fails$6(function () {
    var symbol = Symbol(); // Chrome 38 Symbol has incorrect toString conversion
    // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances

    return !String(symbol) || !(Object(symbol) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION$1 && V8_VERSION$1 < 41;
  });

  var global$c = global$n;
  var shared$1 = shared$5.exports;
  var has$6 = has$d;
  var uid$1 = uid$2;
  var NATIVE_SYMBOL$2 = nativeSymbol;
  var USE_SYMBOL_AS_UID$1 = useSymbolAsUid;
  var WellKnownSymbolsStore$1 = shared$1('wks');
  var Symbol$1 = global$c.Symbol;
  var createWellKnownSymbol = USE_SYMBOL_AS_UID$1 ? Symbol$1 : Symbol$1 && Symbol$1.withoutSetter || uid$1;

  var wellKnownSymbol$f = function wellKnownSymbol(name) {
    if (!has$6(WellKnownSymbolsStore$1, name) || !(NATIVE_SYMBOL$2 || typeof WellKnownSymbolsStore$1[name] == 'string')) {
      if (NATIVE_SYMBOL$2 && has$6(Symbol$1, name)) {
        WellKnownSymbolsStore$1[name] = Symbol$1[name];
      } else {
        WellKnownSymbolsStore$1[name] = createWellKnownSymbol('Symbol.' + name);
      }
    }

    return WellKnownSymbolsStore$1[name];
  };

  var wellKnownSymbol$e = wellKnownSymbol$f;
  var TO_STRING_TAG$3 = wellKnownSymbol$e('toStringTag');
  var test = {};
  test[TO_STRING_TAG$3] = 'z';
  var toStringTagSupport = String(test) === '[object z]';

  var TO_STRING_TAG_SUPPORT$2 = toStringTagSupport;
  var classofRaw$1 = classofRaw;
  var wellKnownSymbol$d = wellKnownSymbol$f;
  var TO_STRING_TAG$2 = wellKnownSymbol$d('toStringTag'); // ES3 wrong here

  var CORRECT_ARGUMENTS = classofRaw$1(function () {
    return arguments;
  }()) == 'Arguments'; // fallback for IE11 Script Access Denied error

  var tryGet = function tryGet(it, key) {
    try {
      return it[key];
    } catch (error) {
      /* empty */
    }
  }; // getting tag from ES6+ `Object.prototype.toString`


  var classof$5 = TO_STRING_TAG_SUPPORT$2 ? classofRaw$1 : function (it) {
    var O, tag, result;
    return it === undefined ? 'Undefined' : it === null ? 'Null' // @@toStringTag case
    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG$2)) == 'string' ? tag // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw$1(O) // ES3 arguments fallback
    : (result = classofRaw$1(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
  };

  var TO_STRING_TAG_SUPPORT$1 = toStringTagSupport;
  var classof$4 = classof$5; // `Object.prototype.toString` method implementation
  // https://tc39.es/ecma262/#sec-object.prototype.tostring

  var objectToString = TO_STRING_TAG_SUPPORT$1 ? {}.toString : function toString() {
    return '[object ' + classof$4(this) + ']';
  };

  var TO_STRING_TAG_SUPPORT = toStringTagSupport;
  var redefine$6 = redefine$a.exports;
  var toString$2 = objectToString; // `Object.prototype.toString` method
  // https://tc39.es/ecma262/#sec-object.prototype.tostring

  if (!TO_STRING_TAG_SUPPORT) {
    redefine$6(Object.prototype, 'toString', toString$2, {
      unsafe: true
    });
  }

  var toString$1 = {}.toString;

  var classofRaw = function classofRaw(it) {
    return toString$1.call(it).slice(8, -1);
  };

  var classof$3 = classofRaw; // `IsArray` abstract operation
  // https://tc39.es/ecma262/#sec-isarray
  // eslint-disable-next-line es/no-array-isarray -- safe

  var isArray$2 = Array.isArray || function isArray(arg) {
    return classof$3(arg) == 'Array';
  };

  var isObject$5 = isObject$f;
  var isArray$1 = isArray$2;
  var wellKnownSymbol$c = wellKnownSymbol$f;
  var SPECIES$1 = wellKnownSymbol$c('species'); // a part of `ArraySpeciesCreate` abstract operation
  // https://tc39.es/ecma262/#sec-arrayspeciescreate

  var arraySpeciesConstructor$1 = function arraySpeciesConstructor(originalArray) {
    var C;

    if (isArray$1(originalArray)) {
      C = originalArray.constructor; // cross-realm fallback

      if (typeof C == 'function' && (C === Array || isArray$1(C.prototype))) C = undefined;else if (isObject$5(C)) {
        C = C[SPECIES$1];
        if (C === null) C = undefined;
      }
    }

    return C === undefined ? Array : C;
  };

  var arraySpeciesConstructor = arraySpeciesConstructor$1; // `ArraySpeciesCreate` abstract operation
  // https://tc39.es/ecma262/#sec-arrayspeciescreate

  var arraySpeciesCreate$2 = function arraySpeciesCreate(originalArray, length) {
    return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
  };

  var bind$4 = functionBindContext;
  var IndexedObject$2 = indexedObject;
  var toObject$5 = toObject$9;
  var toLength$4 = toLength$b;
  var arraySpeciesCreate$1 = arraySpeciesCreate$2;
  var push = [].push; // `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterReject }` methods implementation

  var createMethod$2 = function createMethod(TYPE) {
    var IS_MAP = TYPE == 1;
    var IS_FILTER = TYPE == 2;
    var IS_SOME = TYPE == 3;
    var IS_EVERY = TYPE == 4;
    var IS_FIND_INDEX = TYPE == 6;
    var IS_FILTER_REJECT = TYPE == 7;
    var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
    return function ($this, callbackfn, that, specificCreate) {
      var O = toObject$5($this);
      var self = IndexedObject$2(O);
      var boundFunction = bind$4(callbackfn, that, 3);
      var length = toLength$4(self.length);
      var index = 0;
      var create = specificCreate || arraySpeciesCreate$1;
      var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_REJECT ? create($this, 0) : undefined;
      var value, result;

      for (; length > index; index++) {
        if (NO_HOLES || index in self) {
          value = self[index];
          result = boundFunction(value, index, O);

          if (TYPE) {
            if (IS_MAP) target[index] = result; // map
            else if (result) switch (TYPE) {
              case 3:
                return true;
              // some

              case 5:
                return value;
              // find

              case 6:
                return index;
              // findIndex

              case 2:
                push.call(target, value);
              // filter
            } else switch (TYPE) {
              case 4:
                return false;
              // every

              case 7:
                push.call(target, value);
              // filterReject
            }
          }
        }
      }

      return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
    };
  };

  var arrayIteration = {
    // `Array.prototype.forEach` method
    // https://tc39.es/ecma262/#sec-array.prototype.foreach
    forEach: createMethod$2(0),
    // `Array.prototype.map` method
    // https://tc39.es/ecma262/#sec-array.prototype.map
    map: createMethod$2(1),
    // `Array.prototype.filter` method
    // https://tc39.es/ecma262/#sec-array.prototype.filter
    filter: createMethod$2(2),
    // `Array.prototype.some` method
    // https://tc39.es/ecma262/#sec-array.prototype.some
    some: createMethod$2(3),
    // `Array.prototype.every` method
    // https://tc39.es/ecma262/#sec-array.prototype.every
    every: createMethod$2(4),
    // `Array.prototype.find` method
    // https://tc39.es/ecma262/#sec-array.prototype.find
    find: createMethod$2(5),
    // `Array.prototype.findIndex` method
    // https://tc39.es/ecma262/#sec-array.prototype.findIndex
    findIndex: createMethod$2(6),
    // `Array.prototype.filterReject` method
    // https://github.com/tc39/proposal-array-filtering
    filterReject: createMethod$2(7)
  };

  var $forEach$1 = arrayIteration.forEach;
  var arrayMethodIsStrict$1 = arrayMethodIsStrict$3;
  var STRICT_METHOD$1 = arrayMethodIsStrict$1('forEach'); // `Array.prototype.forEach` method implementation
  // https://tc39.es/ecma262/#sec-array.prototype.foreach

  var arrayForEach = !STRICT_METHOD$1 ? function forEach(callbackfn
  /* , thisArg */
  ) {
    return $forEach$1(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined); // eslint-disable-next-line es/no-array-prototype-foreach -- safe
  } : [].forEach;

  var global$b = global$n;
  var DOMIterables$1 = domIterables;
  var forEach = arrayForEach;
  var createNonEnumerableProperty$5 = createNonEnumerableProperty$a;

  for (var COLLECTION_NAME$1 in DOMIterables$1) {
    var Collection$1 = global$b[COLLECTION_NAME$1];
    var CollectionPrototype$1 = Collection$1 && Collection$1.prototype; // some Chrome versions have non-configurable methods on DOMTokenList

    if (CollectionPrototype$1 && CollectionPrototype$1.forEach !== forEach) try {
      createNonEnumerableProperty$5(CollectionPrototype$1, 'forEach', forEach);
    } catch (error) {
      CollectionPrototype$1.forEach = forEach;
    }
  }

  var objectGetOwnPropertyNamesExternal = {};

  var toIndexedObject$5 = toIndexedObject$2;
  var $getOwnPropertyNames$1 = objectGetOwnPropertyNames.f;
  var toString = {}.toString;
  var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];

  var getWindowNames = function getWindowNames(it) {
    try {
      return $getOwnPropertyNames$1(it);
    } catch (error) {
      return windowNames.slice();
    }
  }; // fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window


  objectGetOwnPropertyNamesExternal.f = function getOwnPropertyNames(it) {
    return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : $getOwnPropertyNames$1(toIndexedObject$5(it));
  };

  var wellKnownSymbolWrapped = {};

  var wellKnownSymbol$b = wellKnownSymbol$f;
  wellKnownSymbolWrapped.f = wellKnownSymbol$b;

  var global$a = global$n;
  var path$1 = global$a;

  var path = path$1;
  var has$5 = has$d;
  var wrappedWellKnownSymbolModule$1 = wellKnownSymbolWrapped;
  var defineProperty$1 = objectDefineProperty.f;

  var defineWellKnownSymbol$1 = function defineWellKnownSymbol(NAME) {
    var Symbol = path.Symbol || (path.Symbol = {});
    if (!has$5(Symbol, NAME)) defineProperty$1(Symbol, NAME, {
      value: wrappedWellKnownSymbolModule$1.f(NAME)
    });
  };

  var defineProperty = objectDefineProperty.f;
  var has$4 = has$d;
  var wellKnownSymbol$a = wellKnownSymbol$f;
  var TO_STRING_TAG$1 = wellKnownSymbol$a('toStringTag');

  var setToStringTag$4 = function setToStringTag(it, TAG, STATIC) {
    if (it && !has$4(it = STATIC ? it : it.prototype, TO_STRING_TAG$1)) {
      defineProperty(it, TO_STRING_TAG$1, {
        configurable: true,
        value: TAG
      });
    }
  };

  var $$b = _export;
  var global$9 = global$n;
  var getBuiltIn$3 = getBuiltIn$8;
  var DESCRIPTORS$2 = descriptors;
  var NATIVE_SYMBOL$1 = nativeSymbol;
  var fails$5 = fails$m;
  var has$3 = has$d;
  var isArray = isArray$2;
  var isObject$4 = isObject$f;
  var isSymbol$3 = isSymbol$2;
  var anObject$4 = anObject$g;
  var toObject$4 = toObject$9;
  var toIndexedObject$4 = toIndexedObject$2;
  var toPropertyKey$2 = toPropertyKey$1;
  var $toString = toString$9;
  var createPropertyDescriptor$2 = createPropertyDescriptor$5;
  var nativeObjectCreate = objectCreate;
  var objectKeys$1 = objectKeys$3;
  var getOwnPropertyNamesModule = objectGetOwnPropertyNames;
  var getOwnPropertyNamesExternal = objectGetOwnPropertyNamesExternal;
  var getOwnPropertySymbolsModule = objectGetOwnPropertySymbols;
  var getOwnPropertyDescriptorModule = objectGetOwnPropertyDescriptor;
  var definePropertyModule$1 = objectDefineProperty;
  var propertyIsEnumerableModule$1 = objectPropertyIsEnumerable;
  var createNonEnumerableProperty$4 = createNonEnumerableProperty$a;
  var redefine$5 = redefine$a.exports;
  var shared = shared$5.exports;
  var sharedKey$1 = sharedKey$4;
  var hiddenKeys = hiddenKeys$5;
  var uid = uid$2;
  var wellKnownSymbol$9 = wellKnownSymbol$f;
  var wrappedWellKnownSymbolModule = wellKnownSymbolWrapped;
  var defineWellKnownSymbol = defineWellKnownSymbol$1;
  var setToStringTag$3 = setToStringTag$4;
  var InternalStateModule$2 = internalState;
  var $forEach = arrayIteration.forEach;
  var HIDDEN = sharedKey$1('hidden');
  var SYMBOL = 'Symbol';
  var PROTOTYPE = 'prototype';
  var TO_PRIMITIVE$1 = wellKnownSymbol$9('toPrimitive');
  var setInternalState$2 = InternalStateModule$2.set;
  var getInternalState$2 = InternalStateModule$2.getterFor(SYMBOL);
  var ObjectPrototype$1 = Object[PROTOTYPE];
  var $Symbol = global$9.Symbol;
  var $stringify = getBuiltIn$3('JSON', 'stringify');
  var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  var nativeDefineProperty = definePropertyModule$1.f;
  var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;
  var nativePropertyIsEnumerable = propertyIsEnumerableModule$1.f;
  var AllSymbols = shared('symbols');
  var ObjectPrototypeSymbols = shared('op-symbols');
  var StringToSymbolRegistry = shared('string-to-symbol-registry');
  var SymbolToStringRegistry = shared('symbol-to-string-registry');
  var WellKnownSymbolsStore = shared('wks');
  var QObject = global$9.QObject; // Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173

  var USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild; // fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687

  var setSymbolDescriptor = DESCRIPTORS$2 && fails$5(function () {
    return nativeObjectCreate(nativeDefineProperty({}, 'a', {
      get: function get() {
        return nativeDefineProperty(this, 'a', {
          value: 7
        }).a;
      }
    })).a != 7;
  }) ? function (O, P, Attributes) {
    var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor(ObjectPrototype$1, P);
    if (ObjectPrototypeDescriptor) delete ObjectPrototype$1[P];
    nativeDefineProperty(O, P, Attributes);

    if (ObjectPrototypeDescriptor && O !== ObjectPrototype$1) {
      nativeDefineProperty(ObjectPrototype$1, P, ObjectPrototypeDescriptor);
    }
  } : nativeDefineProperty;

  var wrap = function wrap(tag, description) {
    var symbol = AllSymbols[tag] = nativeObjectCreate($Symbol[PROTOTYPE]);
    setInternalState$2(symbol, {
      type: SYMBOL,
      tag: tag,
      description: description
    });
    if (!DESCRIPTORS$2) symbol.description = description;
    return symbol;
  };

  var $defineProperty = function defineProperty(O, P, Attributes) {
    if (O === ObjectPrototype$1) $defineProperty(ObjectPrototypeSymbols, P, Attributes);
    anObject$4(O);
    var key = toPropertyKey$2(P);
    anObject$4(Attributes);

    if (has$3(AllSymbols, key)) {
      if (!Attributes.enumerable) {
        if (!has$3(O, HIDDEN)) nativeDefineProperty(O, HIDDEN, createPropertyDescriptor$2(1, {}));
        O[HIDDEN][key] = true;
      } else {
        if (has$3(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
        Attributes = nativeObjectCreate(Attributes, {
          enumerable: createPropertyDescriptor$2(0, false)
        });
      }

      return setSymbolDescriptor(O, key, Attributes);
    }

    return nativeDefineProperty(O, key, Attributes);
  };

  var $defineProperties = function defineProperties(O, Properties) {
    anObject$4(O);
    var properties = toIndexedObject$4(Properties);
    var keys = objectKeys$1(properties).concat($getOwnPropertySymbols(properties));
    $forEach(keys, function (key) {
      if (!DESCRIPTORS$2 || $propertyIsEnumerable.call(properties, key)) $defineProperty(O, key, properties[key]);
    });
    return O;
  };

  var $create = function create(O, Properties) {
    return Properties === undefined ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties);
  };

  var $propertyIsEnumerable = function propertyIsEnumerable(V) {
    var P = toPropertyKey$2(V);
    var enumerable = nativePropertyIsEnumerable.call(this, P);
    if (this === ObjectPrototype$1 && has$3(AllSymbols, P) && !has$3(ObjectPrototypeSymbols, P)) return false;
    return enumerable || !has$3(this, P) || !has$3(AllSymbols, P) || has$3(this, HIDDEN) && this[HIDDEN][P] ? enumerable : true;
  };

  var $getOwnPropertyDescriptor$1 = function getOwnPropertyDescriptor(O, P) {
    var it = toIndexedObject$4(O);
    var key = toPropertyKey$2(P);
    if (it === ObjectPrototype$1 && has$3(AllSymbols, key) && !has$3(ObjectPrototypeSymbols, key)) return;
    var descriptor = nativeGetOwnPropertyDescriptor(it, key);

    if (descriptor && has$3(AllSymbols, key) && !(has$3(it, HIDDEN) && it[HIDDEN][key])) {
      descriptor.enumerable = true;
    }

    return descriptor;
  };

  var $getOwnPropertyNames = function getOwnPropertyNames(O) {
    var names = nativeGetOwnPropertyNames(toIndexedObject$4(O));
    var result = [];
    $forEach(names, function (key) {
      if (!has$3(AllSymbols, key) && !has$3(hiddenKeys, key)) result.push(key);
    });
    return result;
  };

  var $getOwnPropertySymbols = function getOwnPropertySymbols(O) {
    var IS_OBJECT_PROTOTYPE = O === ObjectPrototype$1;
    var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject$4(O));
    var result = [];
    $forEach(names, function (key) {
      if (has$3(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || has$3(ObjectPrototype$1, key))) {
        result.push(AllSymbols[key]);
      }
    });
    return result;
  }; // `Symbol` constructor
  // https://tc39.es/ecma262/#sec-symbol-constructor


  if (!NATIVE_SYMBOL$1) {
    $Symbol = function Symbol() {
      if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor');
      var description = !arguments.length || arguments[0] === undefined ? undefined : $toString(arguments[0]);
      var tag = uid(description);

      var setter = function setter(value) {
        if (this === ObjectPrototype$1) setter.call(ObjectPrototypeSymbols, value);
        if (has$3(this, HIDDEN) && has$3(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
        setSymbolDescriptor(this, tag, createPropertyDescriptor$2(1, value));
      };

      if (DESCRIPTORS$2 && USE_SETTER) setSymbolDescriptor(ObjectPrototype$1, tag, {
        configurable: true,
        set: setter
      });
      return wrap(tag, description);
    };

    redefine$5($Symbol[PROTOTYPE], 'toString', function toString() {
      return getInternalState$2(this).tag;
    });
    redefine$5($Symbol, 'withoutSetter', function (description) {
      return wrap(uid(description), description);
    });
    propertyIsEnumerableModule$1.f = $propertyIsEnumerable;
    definePropertyModule$1.f = $defineProperty;
    getOwnPropertyDescriptorModule.f = $getOwnPropertyDescriptor$1;
    getOwnPropertyNamesModule.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;
    getOwnPropertySymbolsModule.f = $getOwnPropertySymbols;

    wrappedWellKnownSymbolModule.f = function (name) {
      return wrap(wellKnownSymbol$9(name), name);
    };

    if (DESCRIPTORS$2) {
      // https://github.com/tc39/proposal-Symbol-description
      nativeDefineProperty($Symbol[PROTOTYPE], 'description', {
        configurable: true,
        get: function description() {
          return getInternalState$2(this).description;
        }
      });

      {
        redefine$5(ObjectPrototype$1, 'propertyIsEnumerable', $propertyIsEnumerable, {
          unsafe: true
        });
      }
    }
  }

  $$b({
    global: true,
    wrap: true,
    forced: !NATIVE_SYMBOL$1,
    sham: !NATIVE_SYMBOL$1
  }, {
    Symbol: $Symbol
  });
  $forEach(objectKeys$1(WellKnownSymbolsStore), function (name) {
    defineWellKnownSymbol(name);
  });
  $$b({
    target: SYMBOL,
    stat: true,
    forced: !NATIVE_SYMBOL$1
  }, {
    // `Symbol.for` method
    // https://tc39.es/ecma262/#sec-symbol.for
    'for': function _for(key) {
      var string = $toString(key);
      if (has$3(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
      var symbol = $Symbol(string);
      StringToSymbolRegistry[string] = symbol;
      SymbolToStringRegistry[symbol] = string;
      return symbol;
    },
    // `Symbol.keyFor` method
    // https://tc39.es/ecma262/#sec-symbol.keyfor
    keyFor: function keyFor(sym) {
      if (!isSymbol$3(sym)) throw TypeError(sym + ' is not a symbol');
      if (has$3(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
    },
    useSetter: function useSetter() {
      USE_SETTER = true;
    },
    useSimple: function useSimple() {
      USE_SETTER = false;
    }
  });
  $$b({
    target: 'Object',
    stat: true,
    forced: !NATIVE_SYMBOL$1,
    sham: !DESCRIPTORS$2
  }, {
    // `Object.create` method
    // https://tc39.es/ecma262/#sec-object.create
    create: $create,
    // `Object.defineProperty` method
    // https://tc39.es/ecma262/#sec-object.defineproperty
    defineProperty: $defineProperty,
    // `Object.defineProperties` method
    // https://tc39.es/ecma262/#sec-object.defineproperties
    defineProperties: $defineProperties,
    // `Object.getOwnPropertyDescriptor` method
    // https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
    getOwnPropertyDescriptor: $getOwnPropertyDescriptor$1
  });
  $$b({
    target: 'Object',
    stat: true,
    forced: !NATIVE_SYMBOL$1
  }, {
    // `Object.getOwnPropertyNames` method
    // https://tc39.es/ecma262/#sec-object.getownpropertynames
    getOwnPropertyNames: $getOwnPropertyNames,
    // `Object.getOwnPropertySymbols` method
    // https://tc39.es/ecma262/#sec-object.getownpropertysymbols
    getOwnPropertySymbols: $getOwnPropertySymbols
  }); // Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
  // https://bugs.chromium.org/p/v8/issues/detail?id=3443

  $$b({
    target: 'Object',
    stat: true,
    forced: fails$5(function () {
      getOwnPropertySymbolsModule.f(1);
    })
  }, {
    getOwnPropertySymbols: function getOwnPropertySymbols(it) {
      return getOwnPropertySymbolsModule.f(toObject$4(it));
    }
  }); // `JSON.stringify` method behavior with symbols
  // https://tc39.es/ecma262/#sec-json.stringify

  if ($stringify) {
    var FORCED_JSON_STRINGIFY = !NATIVE_SYMBOL$1 || fails$5(function () {
      var symbol = $Symbol(); // MS Edge converts symbol values to JSON as {}

      return $stringify([symbol]) != '[null]' // WebKit converts symbol values to JSON as null
      || $stringify({
        a: symbol
      }) != '{}' // V8 throws on boxed symbols
      || $stringify(Object(symbol)) != '{}';
    });
    $$b({
      target: 'JSON',
      stat: true,
      forced: FORCED_JSON_STRINGIFY
    }, {
      // eslint-disable-next-line no-unused-vars -- required for `.length`
      stringify: function stringify(it, replacer, space) {
        var args = [it];
        var index = 1;
        var $replacer;

        while (arguments.length > index) {
          args.push(arguments[index++]);
        }

        $replacer = replacer;
        if (!isObject$4(replacer) && it === undefined || isSymbol$3(it)) return; // IE8 returns string on undefined

        if (!isArray(replacer)) replacer = function replacer(key, value) {
          if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
          if (!isSymbol$3(value)) return value;
        };
        args[1] = replacer;
        return $stringify.apply(null, args);
      }
    });
  } // `Symbol.prototype[@@toPrimitive]` method
  // https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive


  if (!$Symbol[PROTOTYPE][TO_PRIMITIVE$1]) {
    createNonEnumerableProperty$4($Symbol[PROTOTYPE], TO_PRIMITIVE$1, $Symbol[PROTOTYPE].valueOf);
  } // `Symbol.prototype[@@toStringTag]` property
  // https://tc39.es/ecma262/#sec-symbol.prototype-@@tostringtag


  setToStringTag$3($Symbol, SYMBOL);
  hiddenKeys[HIDDEN] = true;

  var global$8 = global$n;
  var DOMIterables = domIterables;
  var ArrayIteratorMethods = es_array_iterator;
  var createNonEnumerableProperty$3 = createNonEnumerableProperty$a;
  var wellKnownSymbol$8 = wellKnownSymbol$f;
  var ITERATOR$5 = wellKnownSymbol$8('iterator');
  var TO_STRING_TAG = wellKnownSymbol$8('toStringTag');
  var ArrayValues = ArrayIteratorMethods.values;

  for (var COLLECTION_NAME in DOMIterables) {
    var Collection = global$8[COLLECTION_NAME];
    var CollectionPrototype = Collection && Collection.prototype;

    if (CollectionPrototype) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype[ITERATOR$5] !== ArrayValues) try {
        createNonEnumerableProperty$3(CollectionPrototype, ITERATOR$5, ArrayValues);
      } catch (error) {
        CollectionPrototype[ITERATOR$5] = ArrayValues;
      }

      if (!CollectionPrototype[TO_STRING_TAG]) {
        createNonEnumerableProperty$3(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
      }

      if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {
        // some Chrome versions have non-configurable methods on DOMTokenList
        if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
          createNonEnumerableProperty$3(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
        } catch (error) {
          CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
        }
      }
    }
  }

  var NATIVE_SYMBOL = nativeSymbol;
  var useSymbolAsUid = NATIVE_SYMBOL && !Symbol.sham && typeof Symbol.iterator == 'symbol';

  var getBuiltIn$2 = getBuiltIn$8;
  var USE_SYMBOL_AS_UID = useSymbolAsUid;
  var isSymbol$2 = USE_SYMBOL_AS_UID ? function (it) {
    return typeof it == 'symbol';
  } : function (it) {
    var $Symbol = getBuiltIn$2('Symbol');
    return typeof $Symbol == 'function' && Object(it) instanceof $Symbol;
  };

  var isObject$3 = isObject$f; // `OrdinaryToPrimitive` abstract operation
  // https://tc39.es/ecma262/#sec-ordinarytoprimitive

  var ordinaryToPrimitive$1 = function ordinaryToPrimitive(input, pref) {
    var fn, val;
    if (pref === 'string' && typeof (fn = input.toString) == 'function' && !isObject$3(val = fn.call(input))) return val;
    if (typeof (fn = input.valueOf) == 'function' && !isObject$3(val = fn.call(input))) return val;
    if (pref !== 'string' && typeof (fn = input.toString) == 'function' && !isObject$3(val = fn.call(input))) return val;
    throw TypeError("Can't convert object to primitive value");
  };

  var isObject$2 = isObject$f;
  var isSymbol$1 = isSymbol$2;
  var ordinaryToPrimitive = ordinaryToPrimitive$1;
  var wellKnownSymbol$7 = wellKnownSymbol$f;
  var TO_PRIMITIVE = wellKnownSymbol$7('toPrimitive'); // `ToPrimitive` abstract operation
  // https://tc39.es/ecma262/#sec-toprimitive

  var toPrimitive$1 = function toPrimitive(input, pref) {
    if (!isObject$2(input) || isSymbol$1(input)) return input;
    var exoticToPrim = input[TO_PRIMITIVE];
    var result;

    if (exoticToPrim !== undefined) {
      if (pref === undefined) pref = 'default';
      result = exoticToPrim.call(input, pref);
      if (!isObject$2(result) || isSymbol$1(result)) return result;
      throw TypeError("Can't convert object to primitive value");
    }

    if (pref === undefined) pref = 'number';
    return ordinaryToPrimitive(input, pref);
  };

  var toPrimitive = toPrimitive$1;
  var isSymbol = isSymbol$2; // `ToPropertyKey` abstract operation
  // https://tc39.es/ecma262/#sec-topropertykey

  var toPropertyKey$1 = function toPropertyKey(argument) {
    var key = toPrimitive(argument, 'string');
    return isSymbol(key) ? key : String(key);
  };

  var DESCRIPTORS$1 = descriptors;
  var propertyIsEnumerableModule = objectPropertyIsEnumerable;
  var createPropertyDescriptor$1 = createPropertyDescriptor$5;
  var toIndexedObject$3 = toIndexedObject$2;
  var toPropertyKey = toPropertyKey$1;
  var has$2 = has$d;
  var IE8_DOM_DEFINE = ie8DomDefine; // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe

  var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor; // `Object.getOwnPropertyDescriptor` method
  // https://tc39.es/ecma262/#sec-object.getownpropertydescriptor

  objectGetOwnPropertyDescriptor.f = DESCRIPTORS$1 ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
    O = toIndexedObject$3(O);
    P = toPropertyKey(P);
    if (IE8_DOM_DEFINE) try {
      return $getOwnPropertyDescriptor(O, P);
    } catch (error) {
      /* empty */
    }
    if (has$2(O, P)) return createPropertyDescriptor$1(!propertyIsEnumerableModule.f.call(O, P), O[P]);
  };

  var global$7 = global$n;
  var getOwnPropertyDescriptor$1 = objectGetOwnPropertyDescriptor.f;
  var createNonEnumerableProperty$2 = createNonEnumerableProperty$a;
  var redefine$4 = redefine$a.exports;
  var setGlobal = setGlobal$3;
  var copyConstructorProperties = copyConstructorProperties$2;
  var isForced$1 = isForced_1;
  /*
    options.target      - name of the target object
    options.global      - target is the global object
    options.stat        - export as static methods of target
    options.proto       - export as prototype methods of target
    options.real        - real prototype method for the `pure` version
    options.forced      - export even if the native feature is available
    options.bind        - bind methods to the target, required for the `pure` version
    options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
    options.unsafe      - use the simple assignment of property instead of delete + defineProperty
    options.sham        - add a flag to not completely full polyfills
    options.enumerable  - export as enumerable property
    options.noTargetGet - prevent calling a getter on target
  */

  var _export = function _export(options, source) {
    var TARGET = options.target;
    var GLOBAL = options.global;
    var STATIC = options.stat;
    var FORCED, target, key, targetProperty, sourceProperty, descriptor;

    if (GLOBAL) {
      target = global$7;
    } else if (STATIC) {
      target = global$7[TARGET] || setGlobal(TARGET, {});
    } else {
      target = (global$7[TARGET] || {}).prototype;
    }

    if (target) for (key in source) {
      sourceProperty = source[key];

      if (options.noTargetGet) {
        descriptor = getOwnPropertyDescriptor$1(target, key);
        targetProperty = descriptor && descriptor.value;
      } else targetProperty = target[key];

      FORCED = isForced$1(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced); // contained in target

      if (!FORCED && targetProperty !== undefined) {
        if (typeof sourceProperty === typeof targetProperty) continue;
        copyConstructorProperties(sourceProperty, targetProperty);
      } // add a flag to not completely full polyfills


      if (options.sham || targetProperty && targetProperty.sham) {
        createNonEnumerableProperty$2(sourceProperty, 'sham', true);
      } // extend global


      redefine$4(target, key, sourceProperty, options);
    }
  };

  var $$a = _export;
  var exec = regexpExec$2; // `RegExp.prototype.exec` method
  // https://tc39.es/ecma262/#sec-regexp.prototype.exec

  $$a({
    target: 'RegExp',
    proto: true,
    forced: /./.exec !== exec
  }, {
    exec: exec
  });

  var fails$4 = fails$m;
  var classof$2 = classofRaw;
  var split = ''.split; // fallback for non-array-like ES3 and non-enumerable old V8 strings

  var indexedObject = fails$4(function () {
    // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
    // eslint-disable-next-line no-prototype-builtins -- safe
    return !Object('z').propertyIsEnumerable(0);
  }) ? function (it) {
    return classof$2(it) == 'String' ? split.call(it, '') : Object(it);
  } : Object;

  var IndexedObject$1 = indexedObject;
  var requireObjectCoercible = requireObjectCoercible$6;

  var toIndexedObject$2 = function toIndexedObject(it) {
    return IndexedObject$1(requireObjectCoercible(it));
  };

  var wellKnownSymbol$6 = wellKnownSymbol$f;
  var create$1 = objectCreate;
  var definePropertyModule = objectDefineProperty;
  var UNSCOPABLES = wellKnownSymbol$6('unscopables');
  var ArrayPrototype$1 = Array.prototype; // Array.prototype[@@unscopables]
  // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables

  if (ArrayPrototype$1[UNSCOPABLES] == undefined) {
    definePropertyModule.f(ArrayPrototype$1, UNSCOPABLES, {
      configurable: true,
      value: create$1(null)
    });
  } // add a key to Array.prototype[@@unscopables]


  var addToUnscopables$1 = function addToUnscopables(key) {
    ArrayPrototype$1[UNSCOPABLES][key] = true;
  };

  var iterators = {};

  var fails$3 = fails$m;
  var correctPrototypeGetter = !fails$3(function () {
    function F() {
      /* empty */
    }

    F.prototype.constructor = null; // eslint-disable-next-line es/no-object-getprototypeof -- required for testing

    return Object.getPrototypeOf(new F()) !== F.prototype;
  });

  var has$1 = has$d;
  var toObject$3 = toObject$9;
  var sharedKey = sharedKey$4;
  var CORRECT_PROTOTYPE_GETTER = correctPrototypeGetter;
  var IE_PROTO = sharedKey('IE_PROTO');
  var ObjectPrototype = Object.prototype; // `Object.getPrototypeOf` method
  // https://tc39.es/ecma262/#sec-object.getprototypeof
  // eslint-disable-next-line es/no-object-getprototypeof -- safe

  var objectGetPrototypeOf = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {
    O = toObject$3(O);
    if (has$1(O, IE_PROTO)) return O[IE_PROTO];

    if (typeof O.constructor == 'function' && O instanceof O.constructor) {
      return O.constructor.prototype;
    }

    return O instanceof Object ? ObjectPrototype : null;
  };

  var fails$2 = fails$m;
  var getPrototypeOf$1 = objectGetPrototypeOf;
  var createNonEnumerableProperty$1 = createNonEnumerableProperty$a;
  var has = has$d;
  var wellKnownSymbol$5 = wellKnownSymbol$f;
  var ITERATOR$4 = wellKnownSymbol$5('iterator');
  var BUGGY_SAFARI_ITERATORS$1 = false;

  var returnThis$2 = function returnThis() {
    return this;
  }; // `%IteratorPrototype%` object
  // https://tc39.es/ecma262/#sec-%iteratorprototype%-object


  var IteratorPrototype$2, PrototypeOfArrayIteratorPrototype, arrayIterator;
  /* eslint-disable es/no-array-prototype-keys -- safe */

  if ([].keys) {
    arrayIterator = [].keys(); // Safari 8 has buggy iterators w/o `next`

    if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS$1 = true;else {
      PrototypeOfArrayIteratorPrototype = getPrototypeOf$1(getPrototypeOf$1(arrayIterator));
      if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype$2 = PrototypeOfArrayIteratorPrototype;
    }
  }

  var NEW_ITERATOR_PROTOTYPE = IteratorPrototype$2 == undefined || fails$2(function () {
    var test = {}; // FF44- legacy iterators case

    return IteratorPrototype$2[ITERATOR$4].call(test) !== test;
  });
  if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype$2 = {}; // `%IteratorPrototype%[@@iterator]()` method
  // https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator

  if (!has(IteratorPrototype$2, ITERATOR$4)) {
    createNonEnumerableProperty$1(IteratorPrototype$2, ITERATOR$4, returnThis$2);
  }

  var iteratorsCore = {
    IteratorPrototype: IteratorPrototype$2,
    BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS$1
  };

  var IteratorPrototype$1 = iteratorsCore.IteratorPrototype;
  var create = objectCreate;
  var createPropertyDescriptor = createPropertyDescriptor$5;
  var setToStringTag$2 = setToStringTag$4;
  var Iterators$4 = iterators;

  var returnThis$1 = function returnThis() {
    return this;
  };

  var createIteratorConstructor$1 = function createIteratorConstructor(IteratorConstructor, NAME, next) {
    var TO_STRING_TAG = NAME + ' Iterator';
    IteratorConstructor.prototype = create(IteratorPrototype$1, {
      next: createPropertyDescriptor(1, next)
    });
    setToStringTag$2(IteratorConstructor, TO_STRING_TAG, false);
    Iterators$4[TO_STRING_TAG] = returnThis$1;
    return IteratorConstructor;
  };

  var $$9 = _export;
  var createIteratorConstructor = createIteratorConstructor$1;
  var getPrototypeOf = objectGetPrototypeOf;
  var setPrototypeOf$1 = objectSetPrototypeOf;
  var setToStringTag$1 = setToStringTag$4;
  var createNonEnumerableProperty = createNonEnumerableProperty$a;
  var redefine$3 = redefine$a.exports;
  var wellKnownSymbol$4 = wellKnownSymbol$f;
  var Iterators$3 = iterators;
  var IteratorsCore = iteratorsCore;
  var IteratorPrototype = IteratorsCore.IteratorPrototype;
  var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
  var ITERATOR$3 = wellKnownSymbol$4('iterator');
  var KEYS = 'keys';
  var VALUES = 'values';
  var ENTRIES = 'entries';

  var returnThis = function returnThis() {
    return this;
  };

  var defineIterator$1 = function defineIterator(Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
    createIteratorConstructor(IteratorConstructor, NAME, next);

    var getIterationMethod = function getIterationMethod(KIND) {
      if (KIND === DEFAULT && defaultIterator) return defaultIterator;
      if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];

      switch (KIND) {
        case KEYS:
          return function keys() {
            return new IteratorConstructor(this, KIND);
          };

        case VALUES:
          return function values() {
            return new IteratorConstructor(this, KIND);
          };

        case ENTRIES:
          return function entries() {
            return new IteratorConstructor(this, KIND);
          };
      }

      return function () {
        return new IteratorConstructor(this);
      };
    };

    var TO_STRING_TAG = NAME + ' Iterator';
    var INCORRECT_VALUES_NAME = false;
    var IterablePrototype = Iterable.prototype;
    var nativeIterator = IterablePrototype[ITERATOR$3] || IterablePrototype['@@iterator'] || DEFAULT && IterablePrototype[DEFAULT];
    var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
    var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
    var CurrentIteratorPrototype, methods, KEY; // fix native

    if (anyNativeIterator) {
      CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));

      if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
        if (getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
          if (setPrototypeOf$1) {
            setPrototypeOf$1(CurrentIteratorPrototype, IteratorPrototype);
          } else if (typeof CurrentIteratorPrototype[ITERATOR$3] != 'function') {
            createNonEnumerableProperty(CurrentIteratorPrototype, ITERATOR$3, returnThis);
          }
        } // Set @@toStringTag to native iterators


        setToStringTag$1(CurrentIteratorPrototype, TO_STRING_TAG, true);
      }
    } // fix Array.prototype.{ values, @@iterator }.name in V8 / FF


    if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
      INCORRECT_VALUES_NAME = true;

      defaultIterator = function values() {
        return nativeIterator.call(this);
      };
    } // define iterator


    if (IterablePrototype[ITERATOR$3] !== defaultIterator) {
      createNonEnumerableProperty(IterablePrototype, ITERATOR$3, defaultIterator);
    }

    Iterators$3[NAME] = defaultIterator; // export additional methods

    if (DEFAULT) {
      methods = {
        values: getIterationMethod(VALUES),
        keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
        entries: getIterationMethod(ENTRIES)
      };
      if (FORCED) for (KEY in methods) {
        if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
          redefine$3(IterablePrototype, KEY, methods[KEY]);
        }
      } else $$9({
        target: NAME,
        proto: true,
        forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME
      }, methods);
    }

    return methods;
  };

  var toIndexedObject$1 = toIndexedObject$2;
  var addToUnscopables = addToUnscopables$1;
  var Iterators$2 = iterators;
  var InternalStateModule$1 = internalState;
  var defineIterator = defineIterator$1;
  var ARRAY_ITERATOR = 'Array Iterator';
  var setInternalState$1 = InternalStateModule$1.set;
  var getInternalState$1 = InternalStateModule$1.getterFor(ARRAY_ITERATOR); // `Array.prototype.entries` method
  // https://tc39.es/ecma262/#sec-array.prototype.entries
  // `Array.prototype.keys` method
  // https://tc39.es/ecma262/#sec-array.prototype.keys
  // `Array.prototype.values` method
  // https://tc39.es/ecma262/#sec-array.prototype.values
  // `Array.prototype[@@iterator]` method
  // https://tc39.es/ecma262/#sec-array.prototype-@@iterator
  // `CreateArrayIterator` internal method
  // https://tc39.es/ecma262/#sec-createarrayiterator

  var es_array_iterator = defineIterator(Array, 'Array', function (iterated, kind) {
    setInternalState$1(this, {
      type: ARRAY_ITERATOR,
      target: toIndexedObject$1(iterated),
      // target
      index: 0,
      // next index
      kind: kind // kind

    }); // `%ArrayIteratorPrototype%.next` method
    // https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
  }, function () {
    var state = getInternalState$1(this);
    var target = state.target;
    var kind = state.kind;
    var index = state.index++;

    if (!target || index >= target.length) {
      state.target = undefined;
      return {
        value: undefined,
        done: true
      };
    }

    if (kind == 'keys') return {
      value: index,
      done: false
    };
    if (kind == 'values') return {
      value: target[index],
      done: false
    };
    return {
      value: [index, target[index]],
      done: false
    };
  }, 'values'); // argumentsList[@@iterator] is %ArrayProto_values%
  // https://tc39.es/ecma262/#sec-createunmappedargumentsobject
  // https://tc39.es/ecma262/#sec-createmappedargumentsobject

  Iterators$2.Arguments = Iterators$2.Array; // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables

  addToUnscopables('keys');
  addToUnscopables('values');
  addToUnscopables('entries');

  var wellKnownSymbol$3 = wellKnownSymbol$f;
  var Iterators$1 = iterators;
  var ITERATOR$2 = wellKnownSymbol$3('iterator');
  var ArrayPrototype = Array.prototype; // check on default Array iterator

  var isArrayIteratorMethod$2 = function isArrayIteratorMethod(it) {
    return it !== undefined && (Iterators$1.Array === it || ArrayPrototype[ITERATOR$2] === it);
  };

  var classof$1 = classof$5;
  var Iterators = iterators;
  var wellKnownSymbol$2 = wellKnownSymbol$f;
  var ITERATOR$1 = wellKnownSymbol$2('iterator');

  var getIteratorMethod$2 = function getIteratorMethod(it) {
    if (it != undefined) return it[ITERATOR$1] || it['@@iterator'] || Iterators[classof$1(it)];
  };

  var anObject$3 = anObject$g;

  var iteratorClose$2 = function iteratorClose(iterator) {
    var returnMethod = iterator['return'];

    if (returnMethod !== undefined) {
      return anObject$3(returnMethod.call(iterator)).value;
    }
  };

  var anObject$2 = anObject$g;
  var isArrayIteratorMethod$1 = isArrayIteratorMethod$2;
  var toLength$3 = toLength$b;
  var bind$3 = functionBindContext;
  var getIteratorMethod$1 = getIteratorMethod$2;
  var iteratorClose$1 = iteratorClose$2;

  var Result = function Result(stopped, result) {
    this.stopped = stopped;
    this.result = result;
  };

  var iterate$2 = function iterate(iterable, unboundFunction, options) {
    var that = options && options.that;
    var AS_ENTRIES = !!(options && options.AS_ENTRIES);
    var IS_ITERATOR = !!(options && options.IS_ITERATOR);
    var INTERRUPTED = !!(options && options.INTERRUPTED);
    var fn = bind$3(unboundFunction, that, 1 + AS_ENTRIES + INTERRUPTED);
    var iterator, iterFn, index, length, result, next, step;

    var stop = function stop(condition) {
      if (iterator) iteratorClose$1(iterator);
      return new Result(true, condition);
    };

    var callFn = function callFn(value) {
      if (AS_ENTRIES) {
        anObject$2(value);
        return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
      }

      return INTERRUPTED ? fn(value, stop) : fn(value);
    };

    if (IS_ITERATOR) {
      iterator = iterable;
    } else {
      iterFn = getIteratorMethod$1(iterable);
      if (typeof iterFn != 'function') throw TypeError('Target is not iterable'); // optimisation for array iterators

      if (isArrayIteratorMethod$1(iterFn)) {
        for (index = 0, length = toLength$3(iterable.length); length > index; index++) {
          result = callFn(iterable[index]);
          if (result && result instanceof Result) return result;
        }

        return new Result(false);
      }

      iterator = iterFn.call(iterable);
    }

    next = iterator.next;

    while (!(step = next.call(iterator)).done) {
      try {
        result = callFn(step.value);
      } catch (error) {
        iteratorClose$1(iterator);
        throw error;
      }

      if (typeof result == 'object' && result && result instanceof Result) return result;
    }

    return new Result(false);
  };

  var $$8 = _export;
  var iterate$1 = iterate$2;
  var createProperty$2 = createProperty$5; // `Object.fromEntries` method
  // https://github.com/tc39/proposal-object-from-entries

  $$8({
    target: 'Object',
    stat: true
  }, {
    fromEntries: function fromEntries(iterable) {
      var obj = {};
      iterate$1(iterable, function (k, v) {
        createProperty$2(obj, k, v);
      }, {
        AS_ENTRIES: true
      });
      return obj;
    }
  });

  var $$7 = _export;
  var $map = arrayIteration.map;
  var arrayMethodHasSpeciesSupport$2 = arrayMethodHasSpeciesSupport$4;
  var HAS_SPECIES_SUPPORT$2 = arrayMethodHasSpeciesSupport$2('map'); // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  // with adding support of @@species

  $$7({
    target: 'Array',
    proto: true,
    forced: !HAS_SPECIES_SUPPORT$2
  }, {
    map: function map(callbackfn
    /* , thisArg */
    ) {
      return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  var $$6 = _export;
  var $filter = arrayIteration.filter;
  var arrayMethodHasSpeciesSupport$1 = arrayMethodHasSpeciesSupport$4;
  var HAS_SPECIES_SUPPORT$1 = arrayMethodHasSpeciesSupport$1('filter'); // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  // with adding support of @@species

  $$6({
    target: 'Array',
    proto: true,
    forced: !HAS_SPECIES_SUPPORT$1
  }, {
    filter: function filter(callbackfn
    /* , thisArg */
    ) {
      return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  var anObject$1 = anObject$g;
  var iteratorClose = iteratorClose$2; // call something on iterator step with safe closing on error

  var callWithSafeIterationClosing$1 = function callWithSafeIterationClosing(iterator, fn, value, ENTRIES) {
    try {
      return ENTRIES ? fn(anObject$1(value)[0], value[1]) : fn(value);
    } catch (error) {
      iteratorClose(iterator);
      throw error;
    }
  };

  var bind$2 = functionBindContext;
  var toObject$2 = toObject$9;
  var callWithSafeIterationClosing = callWithSafeIterationClosing$1;
  var isArrayIteratorMethod = isArrayIteratorMethod$2;
  var toLength$2 = toLength$b;
  var createProperty$1 = createProperty$5;
  var getIteratorMethod = getIteratorMethod$2; // `Array.from` method implementation
  // https://tc39.es/ecma262/#sec-array.from

  var arrayFrom = function from(arrayLike
  /* , mapfn = undefined, thisArg = undefined */
  ) {
    var O = toObject$2(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var argumentsLength = arguments.length;
    var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var iteratorMethod = getIteratorMethod(O);
    var index = 0;
    var length, result, step, iterator, next, value;
    if (mapping) mapfn = bind$2(mapfn, argumentsLength > 2 ? arguments[2] : undefined, 2); // if the target is not iterable or it's an array with the default iterator - use a simple case

    if (iteratorMethod != undefined && !(C == Array && isArrayIteratorMethod(iteratorMethod))) {
      iterator = iteratorMethod.call(O);
      next = iterator.next;
      result = new C();

      for (; !(step = next.call(iterator)).done; index++) {
        value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value;
        createProperty$1(result, index, value);
      }
    } else {
      length = toLength$2(O.length);
      result = new C(length);

      for (; length > index; index++) {
        value = mapping ? mapfn(O[index], index) : O[index];
        createProperty$1(result, index, value);
      }
    }

    result.length = index;
    return result;
  };

  var wellKnownSymbol$1 = wellKnownSymbol$f;
  var ITERATOR = wellKnownSymbol$1('iterator');
  var SAFE_CLOSING = false;

  try {
    var called = 0;
    var iteratorWithReturn = {
      next: function next() {
        return {
          done: !!called++
        };
      },
      'return': function _return() {
        SAFE_CLOSING = true;
      }
    };

    iteratorWithReturn[ITERATOR] = function () {
      return this;
    }; // eslint-disable-next-line es/no-array-from, no-throw-literal -- required for testing


    Array.from(iteratorWithReturn, function () {
      throw 2;
    });
  } catch (error) {
    /* empty */
  }

  var checkCorrectnessOfIteration$2 = function checkCorrectnessOfIteration(exec, SKIP_CLOSING) {
    if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
    var ITERATION_SUPPORT = false;

    try {
      var object = {};

      object[ITERATOR] = function () {
        return {
          next: function next() {
            return {
              done: ITERATION_SUPPORT = true
            };
          }
        };
      };

      exec(object);
    } catch (error) {
      /* empty */
    }

    return ITERATION_SUPPORT;
  };

  var $$5 = _export;
  var from = arrayFrom;
  var checkCorrectnessOfIteration$1 = checkCorrectnessOfIteration$2;
  var INCORRECT_ITERATION$1 = !checkCorrectnessOfIteration$1(function (iterable) {
    // eslint-disable-next-line es/no-array-from -- required for testing
    Array.from(iterable);
  }); // `Array.from` method
  // https://tc39.es/ecma262/#sec-array.from

  $$5({
    target: 'Array',
    stat: true,
    forced: INCORRECT_ITERATION$1
  }, {
    from: from
  });

  var DESCRIPTORS = descriptors;
  var objectKeys = objectKeys$3;
  var toIndexedObject = toIndexedObject$2;
  var propertyIsEnumerable = objectPropertyIsEnumerable.f; // `Object.{ entries, values }` methods implementation

  var createMethod$1 = function createMethod(TO_ENTRIES) {
    return function (it) {
      var O = toIndexedObject(it);
      var keys = objectKeys(O);
      var length = keys.length;
      var i = 0;
      var result = [];
      var key;

      while (length > i) {
        key = keys[i++];

        if (!DESCRIPTORS || propertyIsEnumerable.call(O, key)) {
          result.push(TO_ENTRIES ? [key, O[key]] : O[key]);
        }
      }

      return result;
    };
  };

  var objectToArray = {
    // `Object.entries` method
    // https://tc39.es/ecma262/#sec-object.entries
    entries: createMethod$1(true),
    // `Object.values` method
    // https://tc39.es/ecma262/#sec-object.values
    values: createMethod$1(false)
  };

  var $$4 = _export;
  var $entries = objectToArray.entries; // `Object.entries` method
  // https://tc39.es/ecma262/#sec-object.entries

  $$4({
    target: 'Object',
    stat: true
  }, {
    entries: function entries(O) {
      return $entries(O);
    }
  });

  var aFunction$2 = aFunction$5;
  var toObject$1 = toObject$9;
  var IndexedObject = indexedObject;
  var toLength$1 = toLength$b; // `Array.prototype.{ reduce, reduceRight }` methods implementation

  var createMethod = function createMethod(IS_RIGHT) {
    return function (that, callbackfn, argumentsLength, memo) {
      aFunction$2(callbackfn);
      var O = toObject$1(that);
      var self = IndexedObject(O);
      var length = toLength$1(O.length);
      var index = IS_RIGHT ? length - 1 : 0;
      var i = IS_RIGHT ? -1 : 1;
      if (argumentsLength < 2) while (true) {
        if (index in self) {
          memo = self[index];
          index += i;
          break;
        }

        index += i;

        if (IS_RIGHT ? index < 0 : length <= index) {
          throw TypeError('Reduce of empty array with no initial value');
        }
      }

      for (; IS_RIGHT ? index >= 0 : length > index; index += i) {
        if (index in self) {
          memo = callbackfn(memo, self[index], index, O);
        }
      }

      return memo;
    };
  };

  var arrayReduce = {
    // `Array.prototype.reduce` method
    // https://tc39.es/ecma262/#sec-array.prototype.reduce
    left: createMethod(false),
    // `Array.prototype.reduceRight` method
    // https://tc39.es/ecma262/#sec-array.prototype.reduceright
    right: createMethod(true)
  };

  var classof = classofRaw;
  var global$6 = global$n;
  var engineIsNode = classof(global$6.process) == 'process';

  var $$3 = _export;
  var $reduce = arrayReduce.left;
  var arrayMethodIsStrict = arrayMethodIsStrict$3;
  var CHROME_VERSION = engineV8Version;
  var IS_NODE$3 = engineIsNode;
  var STRICT_METHOD = arrayMethodIsStrict('reduce'); // Chrome 80-82 has a critical bug
  // https://bugs.chromium.org/p/chromium/issues/detail?id=1049982

  var CHROME_BUG = !IS_NODE$3 && CHROME_VERSION > 79 && CHROME_VERSION < 83; // `Array.prototype.reduce` method
  // https://tc39.es/ecma262/#sec-array.prototype.reduce

  $$3({
    target: 'Array',
    proto: true,
    forced: !STRICT_METHOD || CHROME_BUG
  }, {
    reduce: function reduce(callbackfn
    /* , initialValue */
    ) {
      return $reduce(this, callbackfn, arguments.length, arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  var $$2 = _export;
  var toAbsoluteIndex = toAbsoluteIndex$3;
  var toInteger = toInteger$5;
  var toLength = toLength$b;
  var toObject = toObject$9;
  var arraySpeciesCreate = arraySpeciesCreate$2;
  var createProperty = createProperty$5;
  var arrayMethodHasSpeciesSupport = arrayMethodHasSpeciesSupport$4;
  var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('splice');
  var max = Math.max;
  var min = Math.min;
  var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
  var MAXIMUM_ALLOWED_LENGTH_EXCEEDED = 'Maximum allowed length exceeded'; // `Array.prototype.splice` method
  // https://tc39.es/ecma262/#sec-array.prototype.splice
  // with adding support of @@species

  $$2({
    target: 'Array',
    proto: true,
    forced: !HAS_SPECIES_SUPPORT
  }, {
    splice: function splice(start, deleteCount
    /* , ...items */
    ) {
      var O = toObject(this);
      var len = toLength(O.length);
      var actualStart = toAbsoluteIndex(start, len);
      var argumentsLength = arguments.length;
      var insertCount, actualDeleteCount, A, k, from, to;

      if (argumentsLength === 0) {
        insertCount = actualDeleteCount = 0;
      } else if (argumentsLength === 1) {
        insertCount = 0;
        actualDeleteCount = len - actualStart;
      } else {
        insertCount = argumentsLength - 2;
        actualDeleteCount = min(max(toInteger(deleteCount), 0), len - actualStart);
      }

      if (len + insertCount - actualDeleteCount > MAX_SAFE_INTEGER) {
        throw TypeError(MAXIMUM_ALLOWED_LENGTH_EXCEEDED);
      }

      A = arraySpeciesCreate(O, actualDeleteCount);

      for (k = 0; k < actualDeleteCount; k++) {
        from = actualStart + k;
        if (from in O) createProperty(A, k, O[from]);
      }

      A.length = actualDeleteCount;

      if (insertCount < actualDeleteCount) {
        for (k = actualStart; k < len - actualDeleteCount; k++) {
          from = k + actualDeleteCount;
          to = k + insertCount;
          if (from in O) O[to] = O[from];else delete O[to];
        }

        for (k = len; k > len - actualDeleteCount + insertCount; k--) {
          delete O[k - 1];
        }
      } else if (insertCount > actualDeleteCount) {
        for (k = len - actualDeleteCount; k > actualStart; k--) {
          from = k + actualDeleteCount - 1;
          to = k + insertCount - 1;
          if (from in O) O[to] = O[from];else delete O[to];
        }
      }

      for (k = 0; k < insertCount; k++) {
        O[k + actualStart] = arguments[k + 2];
      }

      O.length = len - actualDeleteCount + insertCount;
      return A;
    }
  });

  var global$5 = global$n;
  var nativePromiseConstructor = global$5.Promise;

  var newPromiseCapability$2 = {};

  var aFunction$1 = aFunction$5;

  var PromiseCapability = function PromiseCapability(C) {
    var resolve, reject;
    this.promise = new C(function ($$resolve, $$reject) {
      if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
      resolve = $$resolve;
      reject = $$reject;
    });
    this.resolve = aFunction$1(resolve);
    this.reject = aFunction$1(reject);
  }; // `NewPromiseCapability` abstract operation
  // https://tc39.es/ecma262/#sec-newpromisecapability


  newPromiseCapability$2.f = function (C) {
    return new PromiseCapability(C);
  };

  var anObject = anObject$g;
  var isObject$1 = isObject$f;
  var newPromiseCapability$1 = newPromiseCapability$2;

  var promiseResolve$2 = function promiseResolve(C, x) {
    anObject(C);
    if (isObject$1(x) && x.constructor === C) return x;
    var promiseCapability = newPromiseCapability$1.f(C);
    var resolve = promiseCapability.resolve;
    resolve(x);
    return promiseCapability.promise;
  };

  var $$1 = _export;
  var NativePromise$1 = nativePromiseConstructor;
  var fails$1 = fails$m;
  var getBuiltIn$1 = getBuiltIn$8;
  var speciesConstructor$1 = speciesConstructor$3;
  var promiseResolve$1 = promiseResolve$2;
  var redefine$2 = redefine$a.exports; // Safari bug https://bugs.webkit.org/show_bug.cgi?id=200829

  var NON_GENERIC = !!NativePromise$1 && fails$1(function () {
    NativePromise$1.prototype['finally'].call({
      then: function then() {
        /* empty */
      }
    }, function () {
      /* empty */
    });
  }); // `Promise.prototype.finally` method
  // https://tc39.es/ecma262/#sec-promise.prototype.finally

  $$1({
    target: 'Promise',
    proto: true,
    real: true,
    forced: NON_GENERIC
  }, {
    'finally': function _finally(onFinally) {
      var C = speciesConstructor$1(this, getBuiltIn$1('Promise'));
      var isFunction = typeof onFinally == 'function';
      return this.then(isFunction ? function (x) {
        return promiseResolve$1(C, onFinally()).then(function () {
          return x;
        });
      } : onFinally, isFunction ? function (e) {
        return promiseResolve$1(C, onFinally()).then(function () {
          throw e;
        });
      } : onFinally);
    }
  }); // makes sure that native promise-based APIs `Promise#finally` properly works with patched `Promise#then`

  if (typeof NativePromise$1 == 'function') {
    var method = getBuiltIn$1('Promise').prototype['finally'];

    if (NativePromise$1.prototype['finally'] !== method) {
      redefine$2(NativePromise$1.prototype, 'finally', method, {
        unsafe: true
      });
    }
  }

  var redefine$1 = redefine$a.exports;

  var redefineAll$1 = function redefineAll(target, src, options) {
    for (var key in src) {
      redefine$1(target, key, src[key], options);
    }

    return target;
  };

  var anInstance$1 = function anInstance(it, Constructor, name) {
    if (!(it instanceof Constructor)) {
      throw TypeError('Incorrect ' + (name ? name + ' ' : '') + 'invocation');
    }

    return it;
  };

  var userAgent$1 = engineUserAgent;
  var engineIsIos = /(?:iphone|ipod|ipad).*applewebkit/i.test(userAgent$1);

  var global$4 = global$n;
  var fails = fails$m;
  var bind$1 = functionBindContext;
  var html = html$2;
  var createElement = documentCreateElement$1;
  var IS_IOS$1 = engineIsIos;
  var IS_NODE$2 = engineIsNode;
  var set = global$4.setImmediate;
  var clear = global$4.clearImmediate;
  var process$2 = global$4.process;
  var MessageChannel = global$4.MessageChannel;
  var Dispatch = global$4.Dispatch;
  var counter = 0;
  var queue = {};
  var ONREADYSTATECHANGE = 'onreadystatechange';
  var location, defer, channel, port;

  try {
    // Deno throws a ReferenceError on `location` access without `--location` flag
    location = global$4.location;
  } catch (error) {
    /* empty */
  }

  var run = function run(id) {
    // eslint-disable-next-line no-prototype-builtins -- safe
    if (queue.hasOwnProperty(id)) {
      var fn = queue[id];
      delete queue[id];
      fn();
    }
  };

  var runner = function runner(id) {
    return function () {
      run(id);
    };
  };

  var listener = function listener(event) {
    run(event.data);
  };

  var post = function post(id) {
    // old engines have not location.origin
    global$4.postMessage(String(id), location.protocol + '//' + location.host);
  }; // Node.js 0.9+ & IE10+ has setImmediate, otherwise:


  if (!set || !clear) {
    set = function setImmediate(fn) {
      var args = [];
      var argumentsLength = arguments.length;
      var i = 1;

      while (argumentsLength > i) {
        args.push(arguments[i++]);
      }

      queue[++counter] = function () {
        // eslint-disable-next-line no-new-func -- spec requirement
        (typeof fn == 'function' ? fn : Function(fn)).apply(undefined, args);
      };

      defer(counter);
      return counter;
    };

    clear = function clearImmediate(id) {
      delete queue[id];
    }; // Node.js 0.8-


    if (IS_NODE$2) {
      defer = function defer(id) {
        process$2.nextTick(runner(id));
      }; // Sphere (JS game engine) Dispatch API

    } else if (Dispatch && Dispatch.now) {
      defer = function defer(id) {
        Dispatch.now(runner(id));
      }; // Browsers with MessageChannel, includes WebWorkers
      // except iOS - https://github.com/zloirock/core-js/issues/624

    } else if (MessageChannel && !IS_IOS$1) {
      channel = new MessageChannel();
      port = channel.port2;
      channel.port1.onmessage = listener;
      defer = bind$1(port.postMessage, port, 1); // Browsers with postMessage, skip WebWorkers
      // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
    } else if (global$4.addEventListener && typeof postMessage == 'function' && !global$4.importScripts && location && location.protocol !== 'file:' && !fails(post)) {
      defer = post;
      global$4.addEventListener('message', listener, false); // IE8-
    } else if (ONREADYSTATECHANGE in createElement('script')) {
      defer = function defer(id) {
        html.appendChild(createElement('script'))[ONREADYSTATECHANGE] = function () {
          html.removeChild(this);
          run(id);
        };
      }; // Rest old browsers

    } else {
      defer = function defer(id) {
        setTimeout(runner(id), 0);
      };
    }
  }

  var task$1 = {
    set: set,
    clear: clear
  };

  var userAgent = engineUserAgent;
  var engineIsWebosWebkit = /web0s(?!.*chrome)/i.test(userAgent);

  var global$3 = global$n;
  var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
  var macrotask = task$1.set;
  var IS_IOS = engineIsIos;
  var IS_WEBOS_WEBKIT = engineIsWebosWebkit;
  var IS_NODE$1 = engineIsNode;
  var MutationObserver = global$3.MutationObserver || global$3.WebKitMutationObserver;
  var document$2 = global$3.document;
  var process$1 = global$3.process;
  var Promise$1 = global$3.Promise; // Node.js 11 shows ExperimentalWarning on getting `queueMicrotask`

  var queueMicrotaskDescriptor = getOwnPropertyDescriptor(global$3, 'queueMicrotask');
  var queueMicrotask = queueMicrotaskDescriptor && queueMicrotaskDescriptor.value;
  var flush, head, last, notify$1, toggle, node, promise, then; // modern engines have queueMicrotask method

  if (!queueMicrotask) {
    flush = function flush() {
      var parent, fn;
      if (IS_NODE$1 && (parent = process$1.domain)) parent.exit();

      while (head) {
        fn = head.fn;
        head = head.next;

        try {
          fn();
        } catch (error) {
          if (head) notify$1();else last = undefined;
          throw error;
        }
      }

      last = undefined;
      if (parent) parent.enter();
    }; // browsers with MutationObserver, except iOS - https://github.com/zloirock/core-js/issues/339
    // also except WebOS Webkit https://github.com/zloirock/core-js/issues/898


    if (!IS_IOS && !IS_NODE$1 && !IS_WEBOS_WEBKIT && MutationObserver && document$2) {
      toggle = true;
      node = document$2.createTextNode('');
      new MutationObserver(flush).observe(node, {
        characterData: true
      });

      notify$1 = function notify() {
        node.data = toggle = !toggle;
      }; // environments with maybe non-completely correct, but existent Promise

    } else if (Promise$1 && Promise$1.resolve) {
      // Promise.resolve without an argument throws an error in LG WebOS 2
      promise = Promise$1.resolve(undefined); // workaround of WebKit ~ iOS Safari 10.1 bug

      promise.constructor = Promise$1;
      then = promise.then;

      notify$1 = function notify() {
        then.call(promise, flush);
      }; // Node.js without promises

    } else if (IS_NODE$1) {
      notify$1 = function notify() {
        process$1.nextTick(flush);
      }; // for other environments - macrotask based on:
      // - setImmediate
      // - MessageChannel
      // - window.postMessag
      // - onreadystatechange
      // - setTimeout

    } else {
      notify$1 = function notify() {
        // strange IE + webpack dev server bug - use .call(global)
        macrotask.call(global$3, flush);
      };
    }
  }

  var microtask$1 = queueMicrotask || function (fn) {
    var task = {
      fn: fn,
      next: undefined
    };
    if (last) last.next = task;

    if (!head) {
      head = task;
      notify$1();
    }

    last = task;
  };

  var global$2 = global$n;

  var hostReportErrors$1 = function hostReportErrors(a, b) {
    var console = global$2.console;

    if (console && console.error) {
      arguments.length === 1 ? console.error(a) : console.error(a, b);
    }
  };

  var perform$1 = function perform(exec) {
    try {
      return {
        error: false,
        value: exec()
      };
    } catch (error) {
      return {
        error: true,
        value: error
      };
    }
  };

  var engineIsBrowser = typeof window == 'object';

  var $ = _export;
  var global$1 = global$n;
  var getBuiltIn = getBuiltIn$8;
  var NativePromise = nativePromiseConstructor;
  var redefine = redefine$a.exports;
  var redefineAll = redefineAll$1;
  var setPrototypeOf = objectSetPrototypeOf;
  var setToStringTag = setToStringTag$4;
  var setSpecies = setSpecies$2;
  var isObject = isObject$f;
  var aFunction = aFunction$5;
  var anInstance = anInstance$1;
  var inspectSource = inspectSource$3;
  var iterate = iterate$2;
  var checkCorrectnessOfIteration = checkCorrectnessOfIteration$2;
  var speciesConstructor = speciesConstructor$3;
  var task = task$1.set;
  var microtask = microtask$1;
  var promiseResolve = promiseResolve$2;
  var hostReportErrors = hostReportErrors$1;
  var newPromiseCapabilityModule = newPromiseCapability$2;
  var perform = perform$1;
  var InternalStateModule = internalState;
  var isForced = isForced_1;
  var wellKnownSymbol = wellKnownSymbol$f;
  var IS_BROWSER = engineIsBrowser;
  var IS_NODE = engineIsNode;
  var V8_VERSION = engineV8Version;
  var SPECIES = wellKnownSymbol('species');
  var PROMISE = 'Promise';
  var getInternalState = InternalStateModule.get;
  var setInternalState = InternalStateModule.set;
  var getInternalPromiseState = InternalStateModule.getterFor(PROMISE);
  var NativePromisePrototype = NativePromise && NativePromise.prototype;
  var PromiseConstructor = NativePromise;
  var PromiseConstructorPrototype = NativePromisePrototype;
  var TypeError$1 = global$1.TypeError;
  var document$1 = global$1.document;
  var process = global$1.process;
  var newPromiseCapability = newPromiseCapabilityModule.f;
  var newGenericPromiseCapability = newPromiseCapability;
  var DISPATCH_EVENT = !!(document$1 && document$1.createEvent && global$1.dispatchEvent);
  var NATIVE_REJECTION_EVENT = typeof PromiseRejectionEvent == 'function';
  var UNHANDLED_REJECTION = 'unhandledrejection';
  var REJECTION_HANDLED = 'rejectionhandled';
  var PENDING = 0;
  var FULFILLED = 1;
  var REJECTED = 2;
  var HANDLED = 1;
  var UNHANDLED = 2;
  var SUBCLASSING = false;
  var Internal, OwnPromiseCapability, PromiseWrapper, nativeThen;
  var FORCED = isForced(PROMISE, function () {
    var PROMISE_CONSTRUCTOR_SOURCE = inspectSource(PromiseConstructor);
    var GLOBAL_CORE_JS_PROMISE = PROMISE_CONSTRUCTOR_SOURCE !== String(PromiseConstructor); // V8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
    // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
    // We can't detect it synchronously, so just check versions

    if (!GLOBAL_CORE_JS_PROMISE && V8_VERSION === 66) return true; // We need Promise#finally in the pure version for preventing prototype pollution
    // deoptimization and performance degradation
    // https://github.com/zloirock/core-js/issues/679

    if (V8_VERSION >= 51 && /native code/.test(PROMISE_CONSTRUCTOR_SOURCE)) return false; // Detect correctness of subclassing with @@species support

    var promise = new PromiseConstructor(function (resolve) {
      resolve(1);
    });

    var FakePromise = function FakePromise(exec) {
      exec(function () {
        /* empty */
      }, function () {
        /* empty */
      });
    };

    var constructor = promise.constructor = {};
    constructor[SPECIES] = FakePromise;
    SUBCLASSING = promise.then(function () {
      /* empty */
    }) instanceof FakePromise;
    if (!SUBCLASSING) return true; // Unhandled rejections tracking support, NodeJS Promise without it fails @@species test

    return !GLOBAL_CORE_JS_PROMISE && IS_BROWSER && !NATIVE_REJECTION_EVENT;
  });
  var INCORRECT_ITERATION = FORCED || !checkCorrectnessOfIteration(function (iterable) {
    PromiseConstructor.all(iterable)['catch'](function () {
      /* empty */
    });
  }); // helpers

  var isThenable = function isThenable(it) {
    var then;
    return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
  };

  var notify = function notify(state, isReject) {
    if (state.notified) return;
    state.notified = true;
    var chain = state.reactions;
    microtask(function () {
      var value = state.value;
      var ok = state.state == FULFILLED;
      var index = 0; // variable length - can't use forEach

      while (chain.length > index) {
        var reaction = chain[index++];
        var handler = ok ? reaction.ok : reaction.fail;
        var resolve = reaction.resolve;
        var reject = reaction.reject;
        var domain = reaction.domain;
        var result, then, exited;

        try {
          if (handler) {
            if (!ok) {
              if (state.rejection === UNHANDLED) onHandleUnhandled(state);
              state.rejection = HANDLED;
            }

            if (handler === true) result = value;else {
              if (domain) domain.enter();
              result = handler(value); // can throw

              if (domain) {
                domain.exit();
                exited = true;
              }
            }

            if (result === reaction.promise) {
              reject(TypeError$1('Promise-chain cycle'));
            } else if (then = isThenable(result)) {
              then.call(result, resolve, reject);
            } else resolve(result);
          } else reject(value);
        } catch (error) {
          if (domain && !exited) domain.exit();
          reject(error);
        }
      }

      state.reactions = [];
      state.notified = false;
      if (isReject && !state.rejection) onUnhandled(state);
    });
  };

  var dispatchEvent = function dispatchEvent(name, promise, reason) {
    var event, handler;

    if (DISPATCH_EVENT) {
      event = document$1.createEvent('Event');
      event.promise = promise;
      event.reason = reason;
      event.initEvent(name, false, true);
      global$1.dispatchEvent(event);
    } else event = {
      promise: promise,
      reason: reason
    };

    if (!NATIVE_REJECTION_EVENT && (handler = global$1['on' + name])) handler(event);else if (name === UNHANDLED_REJECTION) hostReportErrors('Unhandled promise rejection', reason);
  };

  var onUnhandled = function onUnhandled(state) {
    task.call(global$1, function () {
      var promise = state.facade;
      var value = state.value;
      var IS_UNHANDLED = isUnhandled(state);
      var result;

      if (IS_UNHANDLED) {
        result = perform(function () {
          if (IS_NODE) {
            process.emit('unhandledRejection', value, promise);
          } else dispatchEvent(UNHANDLED_REJECTION, promise, value);
        }); // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should

        state.rejection = IS_NODE || isUnhandled(state) ? UNHANDLED : HANDLED;
        if (result.error) throw result.value;
      }
    });
  };

  var isUnhandled = function isUnhandled(state) {
    return state.rejection !== HANDLED && !state.parent;
  };

  var onHandleUnhandled = function onHandleUnhandled(state) {
    task.call(global$1, function () {
      var promise = state.facade;

      if (IS_NODE) {
        process.emit('rejectionHandled', promise);
      } else dispatchEvent(REJECTION_HANDLED, promise, state.value);
    });
  };

  var bind = function bind(fn, state, unwrap) {
    return function (value) {
      fn(state, value, unwrap);
    };
  };

  var internalReject = function internalReject(state, value, unwrap) {
    if (state.done) return;
    state.done = true;
    if (unwrap) state = unwrap;
    state.value = value;
    state.state = REJECTED;
    notify(state, true);
  };

  var internalResolve = function internalResolve(state, value, unwrap) {
    if (state.done) return;
    state.done = true;
    if (unwrap) state = unwrap;

    try {
      if (state.facade === value) throw TypeError$1("Promise can't be resolved itself");
      var then = isThenable(value);

      if (then) {
        microtask(function () {
          var wrapper = {
            done: false
          };

          try {
            then.call(value, bind(internalResolve, wrapper, state), bind(internalReject, wrapper, state));
          } catch (error) {
            internalReject(wrapper, error, state);
          }
        });
      } else {
        state.value = value;
        state.state = FULFILLED;
        notify(state, false);
      }
    } catch (error) {
      internalReject({
        done: false
      }, error, state);
    }
  }; // constructor polyfill


  if (FORCED) {
    // 25.4.3.1 Promise(executor)
    PromiseConstructor = function Promise(executor) {
      anInstance(this, PromiseConstructor, PROMISE);
      aFunction(executor);
      Internal.call(this);
      var state = getInternalState(this);

      try {
        executor(bind(internalResolve, state), bind(internalReject, state));
      } catch (error) {
        internalReject(state, error);
      }
    };

    PromiseConstructorPrototype = PromiseConstructor.prototype; // eslint-disable-next-line no-unused-vars -- required for `.length`

    Internal = function Promise(executor) {
      setInternalState(this, {
        type: PROMISE,
        done: false,
        notified: false,
        parent: false,
        reactions: [],
        rejection: false,
        state: PENDING,
        value: undefined
      });
    };

    Internal.prototype = redefineAll(PromiseConstructorPrototype, {
      // `Promise.prototype.then` method
      // https://tc39.es/ecma262/#sec-promise.prototype.then
      then: function then(onFulfilled, onRejected) {
        var state = getInternalPromiseState(this);
        var reaction = newPromiseCapability(speciesConstructor(this, PromiseConstructor));
        reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
        reaction.fail = typeof onRejected == 'function' && onRejected;
        reaction.domain = IS_NODE ? process.domain : undefined;
        state.parent = true;
        state.reactions.push(reaction);
        if (state.state != PENDING) notify(state, false);
        return reaction.promise;
      },
      // `Promise.prototype.catch` method
      // https://tc39.es/ecma262/#sec-promise.prototype.catch
      'catch': function _catch(onRejected) {
        return this.then(undefined, onRejected);
      }
    });

    OwnPromiseCapability = function OwnPromiseCapability() {
      var promise = new Internal();
      var state = getInternalState(promise);
      this.promise = promise;
      this.resolve = bind(internalResolve, state);
      this.reject = bind(internalReject, state);
    };

    newPromiseCapabilityModule.f = newPromiseCapability = function newPromiseCapability(C) {
      return C === PromiseConstructor || C === PromiseWrapper ? new OwnPromiseCapability(C) : newGenericPromiseCapability(C);
    };

    if (typeof NativePromise == 'function' && NativePromisePrototype !== Object.prototype) {
      nativeThen = NativePromisePrototype.then;

      if (!SUBCLASSING) {
        // make `Promise#then` return a polyfilled `Promise` for native promise-based APIs
        redefine(NativePromisePrototype, 'then', function then(onFulfilled, onRejected) {
          var that = this;
          return new PromiseConstructor(function (resolve, reject) {
            nativeThen.call(that, resolve, reject);
          }).then(onFulfilled, onRejected); // https://github.com/zloirock/core-js/issues/640
        }, {
          unsafe: true
        }); // makes sure that native promise-based APIs `Promise#catch` properly works with patched `Promise#then`

        redefine(NativePromisePrototype, 'catch', PromiseConstructorPrototype['catch'], {
          unsafe: true
        });
      } // make `.constructor === Promise` work for native promise-based APIs


      try {
        delete NativePromisePrototype.constructor;
      } catch (error) {
        /* empty */
      } // make `instanceof Promise` work for native promise-based APIs


      if (setPrototypeOf) {
        setPrototypeOf(NativePromisePrototype, PromiseConstructorPrototype);
      }
    }
  }

  $({
    global: true,
    wrap: true,
    forced: FORCED
  }, {
    Promise: PromiseConstructor
  });
  setToStringTag(PromiseConstructor, PROMISE, false);
  setSpecies(PROMISE);
  PromiseWrapper = getBuiltIn(PROMISE); // statics

  $({
    target: PROMISE,
    stat: true,
    forced: FORCED
  }, {
    // `Promise.reject` method
    // https://tc39.es/ecma262/#sec-promise.reject
    reject: function reject(r) {
      var capability = newPromiseCapability(this);
      capability.reject.call(undefined, r);
      return capability.promise;
    }
  });
  $({
    target: PROMISE,
    stat: true,
    forced: FORCED
  }, {
    // `Promise.resolve` method
    // https://tc39.es/ecma262/#sec-promise.resolve
    resolve: function resolve(x) {
      return promiseResolve(this, x);
    }
  });
  $({
    target: PROMISE,
    stat: true,
    forced: INCORRECT_ITERATION
  }, {
    // `Promise.all` method
    // https://tc39.es/ecma262/#sec-promise.all
    all: function all(iterable) {
      var C = this;
      var capability = newPromiseCapability(C);
      var resolve = capability.resolve;
      var reject = capability.reject;
      var result = perform(function () {
        var $promiseResolve = aFunction(C.resolve);
        var values = [];
        var counter = 0;
        var remaining = 1;
        iterate(iterable, function (promise) {
          var index = counter++;
          var alreadyCalled = false;
          values.push(undefined);
          remaining++;
          $promiseResolve.call(C, promise).then(function (value) {
            if (alreadyCalled) return;
            alreadyCalled = true;
            values[index] = value;
            --remaining || resolve(values);
          }, reject);
        });
        --remaining || resolve(values);
      });
      if (result.error) reject(result.value);
      return capability.promise;
    },
    // `Promise.race` method
    // https://tc39.es/ecma262/#sec-promise.race
    race: function race(iterable) {
      var C = this;
      var capability = newPromiseCapability(C);
      var reject = capability.reject;
      var result = perform(function () {
        var $promiseResolve = aFunction(C.resolve);
        iterate(iterable, function (promise) {
          $promiseResolve.call(C, promise).then(capability.resolve, reject);
        });
      });
      if (result.error) reject(result.value);
      return capability.promise;
    }
  });

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

  var reservationForm = document.querySelector("#reservation-form");
  var fields;

  function main() {
    // render the start-time-input template (not visible) to make sure the field is initialized
    getTemplateRender('start-time-input'); // initialize all fields

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

            var _iterator = _createForOfIteratorHelper(feedbackElements),
                _step;

            try {
              var _loop = function _loop() {
                var _element$dataset;

                var element = _step.value;
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

              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                _loop();
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
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
