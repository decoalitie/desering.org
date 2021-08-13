(function () {
  'use strict';

  function ownKeys$4(object, enumerableOnly) {
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
        ownKeys$4(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys$4(Object(source)).forEach(function (key) {
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

  var check = function check(it) {
    return it && it.Math == Math && it;
  }; // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028


  var global$K = // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) || check(typeof window == 'object' && window) || // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) || check(typeof commonjsGlobal == 'object' && commonjsGlobal) || // eslint-disable-next-line no-new-func -- fallback
  function () {
    return this;
  }() || Function('return this')();

  var objectGetOwnPropertyDescriptor = {};

  var fails$K = function fails(exec) {
    try {
      return !!exec();
    } catch (error) {
      return true;
    }
  };

  var fails$J = fails$K; // Detect IE8's incomplete defineProperty implementation

  var descriptors = !fails$J(function () {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty({}, 1, {
      get: function get() {
        return 7;
      }
    })[1] != 7;
  });

  var objectPropertyIsEnumerable = {};

  var $propertyIsEnumerable$1 = {}.propertyIsEnumerable; // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe

  var getOwnPropertyDescriptor$7 = Object.getOwnPropertyDescriptor; // Nashorn ~ JDK8 bug

  var NASHORN_BUG = getOwnPropertyDescriptor$7 && !$propertyIsEnumerable$1.call({
    1: 2
  }, 1); // `Object.prototype.propertyIsEnumerable` method implementation
  // https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable

  objectPropertyIsEnumerable.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
    var descriptor = getOwnPropertyDescriptor$7(this, V);
    return !!descriptor && descriptor.enumerable;
  } : $propertyIsEnumerable$1;

  var createPropertyDescriptor$9 = function createPropertyDescriptor(bitmap, value) {
    return {
      enumerable: !(bitmap & 1),
      configurable: !(bitmap & 2),
      writable: !(bitmap & 4),
      value: value
    };
  };

  var toString$o = {}.toString;

  var classofRaw$1 = function classofRaw(it) {
    return toString$o.call(it).slice(8, -1);
  };

  var fails$I = fails$K;
  var classof$c = classofRaw$1;
  var split = ''.split; // fallback for non-array-like ES3 and non-enumerable old V8 strings

  var indexedObject = fails$I(function () {
    // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
    // eslint-disable-next-line no-prototype-builtins -- safe
    return !Object('z').propertyIsEnumerable(0);
  }) ? function (it) {
    return classof$c(it) == 'String' ? split.call(it, '') : Object(it);
  } : Object;

  // https://tc39.es/ecma262/#sec-requireobjectcoercible

  var requireObjectCoercible$g = function requireObjectCoercible(it) {
    if (it == undefined) throw TypeError("Can't call method on " + it);
    return it;
  };

  var IndexedObject$5 = indexedObject;
  var requireObjectCoercible$f = requireObjectCoercible$g;

  var toIndexedObject$a = function toIndexedObject(it) {
    return IndexedObject$5(requireObjectCoercible$f(it));
  };

  var isObject$w = function isObject(it) {
    return typeof it === 'object' ? it !== null : typeof it === 'function';
  };

  var global$J = global$K;

  var aFunction$T = function aFunction(variable) {
    return typeof variable == 'function' ? variable : undefined;
  };

  var getBuiltIn$u = function getBuiltIn(namespace, method) {
    return arguments.length < 2 ? aFunction$T(global$J[namespace]) : global$J[namespace] && global$J[namespace][method];
  };

  var getBuiltIn$t = getBuiltIn$u;
  var engineUserAgent = getBuiltIn$t('navigator', 'userAgent') || '';

  var global$I = global$K;
  var userAgent$5 = engineUserAgent;
  var process$4 = global$I.process;
  var Deno = global$I.Deno;
  var versions = process$4 && process$4.versions || Deno && Deno.version;
  var v8 = versions && versions.v8;
  var match, version;

  if (v8) {
    match = v8.split('.');
    version = match[0] < 4 ? 1 : match[0] + match[1];
  } else if (userAgent$5) {
    match = userAgent$5.match(/Edge\/(\d+)/);

    if (!match || match[1] >= 74) {
      match = userAgent$5.match(/Chrome\/(\d+)/);
      if (match) version = match[1];
    }
  }

  var engineV8Version = version && +version;

  /* eslint-disable es/no-symbol -- required for testing */
  var V8_VERSION$3 = engineV8Version;
  var fails$H = fails$K; // eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing

  var nativeSymbol = !!Object.getOwnPropertySymbols && !fails$H(function () {
    var symbol = Symbol(); // Chrome 38 Symbol has incorrect toString conversion
    // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances

    return !String(symbol) || !(Object(symbol) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION$3 && V8_VERSION$3 < 41;
  });

  /* eslint-disable es/no-symbol -- required for testing */
  var NATIVE_SYMBOL$2 = nativeSymbol;
  var useSymbolAsUid = NATIVE_SYMBOL$2 && !Symbol.sham && typeof Symbol.iterator == 'symbol';

  var getBuiltIn$s = getBuiltIn$u;
  var USE_SYMBOL_AS_UID$1 = useSymbolAsUid;
  var isSymbol$5 = USE_SYMBOL_AS_UID$1 ? function (it) {
    return typeof it == 'symbol';
  } : function (it) {
    var $Symbol = getBuiltIn$s('Symbol');
    return typeof $Symbol == 'function' && Object(it) instanceof $Symbol;
  };

  var isObject$v = isObject$w; // `OrdinaryToPrimitive` abstract operation
  // https://tc39.es/ecma262/#sec-ordinarytoprimitive

  var ordinaryToPrimitive$2 = function ordinaryToPrimitive(input, pref) {
    var fn, val;
    if (pref === 'string' && typeof (fn = input.toString) == 'function' && !isObject$v(val = fn.call(input))) return val;
    if (typeof (fn = input.valueOf) == 'function' && !isObject$v(val = fn.call(input))) return val;
    if (pref !== 'string' && typeof (fn = input.toString) == 'function' && !isObject$v(val = fn.call(input))) return val;
    throw TypeError("Can't convert object to primitive value");
  };

  var shared$7 = {exports: {}};

  var isPure = false;

  var global$H = global$K;

  var setGlobal$3 = function setGlobal(key, value) {
    try {
      // eslint-disable-next-line es/no-object-defineproperty -- safe
      Object.defineProperty(global$H, key, {
        value: value,
        configurable: true,
        writable: true
      });
    } catch (error) {
      global$H[key] = value;
    }

    return value;
  };

  var global$G = global$K;
  var setGlobal$2 = setGlobal$3;
  var SHARED = '__core-js_shared__';
  var store$5 = global$G[SHARED] || setGlobal$2(SHARED, {});
  var sharedStore = store$5;

  var store$4 = sharedStore;
  (shared$7.exports = function (key, value) {
    return store$4[key] || (store$4[key] = value !== undefined ? value : {});
  })('versions', []).push({
    version: '3.16.0',
    mode: 'global',
    copyright: '© 2021 Denis Pushkarev (zloirock.ru)'
  });

  var requireObjectCoercible$e = requireObjectCoercible$g; // `ToObject` abstract operation
  // https://tc39.es/ecma262/#sec-toobject

  var toObject$u = function toObject(argument) {
    return Object(requireObjectCoercible$e(argument));
  };

  var toObject$t = toObject$u;
  var hasOwnProperty = {}.hasOwnProperty;

  var has$n = Object.hasOwn || function hasOwn(it, key) {
    return hasOwnProperty.call(toObject$t(it), key);
  };

  var id$2 = 0;
  var postfix = Math.random();

  var uid$5 = function uid(key) {
    return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id$2 + postfix).toString(36);
  };

  var global$F = global$K;
  var shared$6 = shared$7.exports;
  var has$m = has$n;
  var uid$4 = uid$5;
  var NATIVE_SYMBOL$1 = nativeSymbol;
  var USE_SYMBOL_AS_UID = useSymbolAsUid;
  var WellKnownSymbolsStore$1 = shared$6('wks');
  var Symbol$1 = global$F.Symbol;
  var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol$1 : Symbol$1 && Symbol$1.withoutSetter || uid$4;

  var wellKnownSymbol$E = function wellKnownSymbol(name) {
    if (!has$m(WellKnownSymbolsStore$1, name) || !(NATIVE_SYMBOL$1 || typeof WellKnownSymbolsStore$1[name] == 'string')) {
      if (NATIVE_SYMBOL$1 && has$m(Symbol$1, name)) {
        WellKnownSymbolsStore$1[name] = Symbol$1[name];
      } else {
        WellKnownSymbolsStore$1[name] = createWellKnownSymbol('Symbol.' + name);
      }
    }

    return WellKnownSymbolsStore$1[name];
  };

  var isObject$u = isObject$w;
  var isSymbol$4 = isSymbol$5;
  var ordinaryToPrimitive$1 = ordinaryToPrimitive$2;
  var wellKnownSymbol$D = wellKnownSymbol$E;
  var TO_PRIMITIVE$2 = wellKnownSymbol$D('toPrimitive'); // `ToPrimitive` abstract operation
  // https://tc39.es/ecma262/#sec-toprimitive

  var toPrimitive$2 = function toPrimitive(input, pref) {
    if (!isObject$u(input) || isSymbol$4(input)) return input;
    var exoticToPrim = input[TO_PRIMITIVE$2];
    var result;

    if (exoticToPrim !== undefined) {
      if (pref === undefined) pref = 'default';
      result = exoticToPrim.call(input, pref);
      if (!isObject$u(result) || isSymbol$4(result)) return result;
      throw TypeError("Can't convert object to primitive value");
    }

    if (pref === undefined) pref = 'number';
    return ordinaryToPrimitive$1(input, pref);
  };

  var toPrimitive$1 = toPrimitive$2;
  var isSymbol$3 = isSymbol$5; // `ToPropertyKey` abstract operation
  // https://tc39.es/ecma262/#sec-topropertykey

  var toPropertyKey$9 = function toPropertyKey(argument) {
    var key = toPrimitive$1(argument, 'string');
    return isSymbol$3(key) ? key : String(key);
  };

  var global$E = global$K;
  var isObject$t = isObject$w;
  var document$3 = global$E.document; // typeof document.createElement is 'object' in old IE

  var EXISTS = isObject$t(document$3) && isObject$t(document$3.createElement);

  var documentCreateElement$1 = function documentCreateElement(it) {
    return EXISTS ? document$3.createElement(it) : {};
  };

  var DESCRIPTORS$t = descriptors;
  var fails$G = fails$K;
  var createElement$1 = documentCreateElement$1; // Thank's IE8 for his funny defineProperty

  var ie8DomDefine = !DESCRIPTORS$t && !fails$G(function () {
    // eslint-disable-next-line es/no-object-defineproperty -- requied for testing
    return Object.defineProperty(createElement$1('div'), 'a', {
      get: function get() {
        return 7;
      }
    }).a != 7;
  });

  var DESCRIPTORS$s = descriptors;
  var propertyIsEnumerableModule$2 = objectPropertyIsEnumerable;
  var createPropertyDescriptor$8 = createPropertyDescriptor$9;
  var toIndexedObject$9 = toIndexedObject$a;
  var toPropertyKey$8 = toPropertyKey$9;
  var has$l = has$n;
  var IE8_DOM_DEFINE$1 = ie8DomDefine; // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe

  var $getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor; // `Object.getOwnPropertyDescriptor` method
  // https://tc39.es/ecma262/#sec-object.getownpropertydescriptor

  objectGetOwnPropertyDescriptor.f = DESCRIPTORS$s ? $getOwnPropertyDescriptor$1 : function getOwnPropertyDescriptor(O, P) {
    O = toIndexedObject$9(O);
    P = toPropertyKey$8(P);
    if (IE8_DOM_DEFINE$1) try {
      return $getOwnPropertyDescriptor$1(O, P);
    } catch (error) {
      /* empty */
    }
    if (has$l(O, P)) return createPropertyDescriptor$8(!propertyIsEnumerableModule$2.f.call(O, P), O[P]);
  };

  var objectDefineProperty = {};

  var isObject$s = isObject$w;

  var anObject$1z = function anObject(it) {
    if (!isObject$s(it)) {
      throw TypeError(String(it) + ' is not an object');
    }

    return it;
  };

  var DESCRIPTORS$r = descriptors;
  var IE8_DOM_DEFINE = ie8DomDefine;
  var anObject$1y = anObject$1z;
  var toPropertyKey$7 = toPropertyKey$9; // eslint-disable-next-line es/no-object-defineproperty -- safe

  var $defineProperty$1 = Object.defineProperty; // `Object.defineProperty` method
  // https://tc39.es/ecma262/#sec-object.defineproperty

  objectDefineProperty.f = DESCRIPTORS$r ? $defineProperty$1 : function defineProperty(O, P, Attributes) {
    anObject$1y(O);
    P = toPropertyKey$7(P);
    anObject$1y(Attributes);
    if (IE8_DOM_DEFINE) try {
      return $defineProperty$1(O, P, Attributes);
    } catch (error) {
      /* empty */
    }
    if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
    if ('value' in Attributes) O[P] = Attributes.value;
    return O;
  };

  var DESCRIPTORS$q = descriptors;
  var definePropertyModule$c = objectDefineProperty;
  var createPropertyDescriptor$7 = createPropertyDescriptor$9;
  var createNonEnumerableProperty$m = DESCRIPTORS$q ? function (object, key, value) {
    return definePropertyModule$c.f(object, key, createPropertyDescriptor$7(1, value));
  } : function (object, key, value) {
    object[key] = value;
    return object;
  };

  var redefine$e = {exports: {}};

  var store$3 = sharedStore;
  var functionToString = Function.toString; // this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper

  if (typeof store$3.inspectSource != 'function') {
    store$3.inspectSource = function (it) {
      return functionToString.call(it);
    };
  }

  var inspectSource$3 = store$3.inspectSource;

  var global$D = global$K;
  var inspectSource$2 = inspectSource$3;
  var WeakMap$3 = global$D.WeakMap;
  var nativeWeakMap = typeof WeakMap$3 === 'function' && /native code/.test(inspectSource$2(WeakMap$3));

  var shared$5 = shared$7.exports;
  var uid$3 = uid$5;
  var keys$2 = shared$5('keys');

  var sharedKey$4 = function sharedKey(key) {
    return keys$2[key] || (keys$2[key] = uid$3(key));
  };

  var hiddenKeys$6 = {};

  var NATIVE_WEAK_MAP$1 = nativeWeakMap;
  var global$C = global$K;
  var isObject$r = isObject$w;
  var createNonEnumerableProperty$l = createNonEnumerableProperty$m;
  var objectHas = has$n;
  var shared$4 = sharedStore;
  var sharedKey$3 = sharedKey$4;
  var hiddenKeys$5 = hiddenKeys$6;
  var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
  var WeakMap$2 = global$C.WeakMap;
  var set$3, get$2, has$k;

  var enforce = function enforce(it) {
    return has$k(it) ? get$2(it) : set$3(it, {});
  };

  var getterFor = function getterFor(TYPE) {
    return function (it) {
      var state;

      if (!isObject$r(it) || (state = get$2(it)).type !== TYPE) {
        throw TypeError('Incompatible receiver, ' + TYPE + ' required');
      }

      return state;
    };
  };

  if (NATIVE_WEAK_MAP$1 || shared$4.state) {
    var store$2 = shared$4.state || (shared$4.state = new WeakMap$2());
    var wmget = store$2.get;
    var wmhas = store$2.has;
    var wmset = store$2.set;

    set$3 = function set(it, metadata) {
      if (wmhas.call(store$2, it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
      metadata.facade = it;
      wmset.call(store$2, it, metadata);
      return metadata;
    };

    get$2 = function get(it) {
      return wmget.call(store$2, it) || {};
    };

    has$k = function has(it) {
      return wmhas.call(store$2, it);
    };
  } else {
    var STATE = sharedKey$3('state');
    hiddenKeys$5[STATE] = true;

    set$3 = function set(it, metadata) {
      if (objectHas(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
      metadata.facade = it;
      createNonEnumerableProperty$l(it, STATE, metadata);
      return metadata;
    };

    get$2 = function get(it) {
      return objectHas(it, STATE) ? it[STATE] : {};
    };

    has$k = function has(it) {
      return objectHas(it, STATE);
    };
  }

  var internalState = {
    set: set$3,
    get: get$2,
    has: has$k,
    enforce: enforce,
    getterFor: getterFor
  };

  var global$B = global$K;
  var createNonEnumerableProperty$k = createNonEnumerableProperty$m;
  var has$j = has$n;
  var setGlobal$1 = setGlobal$3;
  var inspectSource$1 = inspectSource$3;
  var InternalStateModule$i = internalState;
  var getInternalState$h = InternalStateModule$i.get;
  var enforceInternalState$1 = InternalStateModule$i.enforce;
  var TEMPLATE = String(String).split('String');
  (redefine$e.exports = function (O, key, value, options) {
    var unsafe = options ? !!options.unsafe : false;
    var simple = options ? !!options.enumerable : false;
    var noTargetGet = options ? !!options.noTargetGet : false;
    var state;

    if (typeof value == 'function') {
      if (typeof key == 'string' && !has$j(value, 'name')) {
        createNonEnumerableProperty$k(value, 'name', key);
      }

      state = enforceInternalState$1(value);

      if (!state.source) {
        state.source = TEMPLATE.join(typeof key == 'string' ? key : '');
      }
    }

    if (O === global$B) {
      if (simple) O[key] = value;else setGlobal$1(key, value);
      return;
    } else if (!unsafe) {
      delete O[key];
    } else if (!noTargetGet && O[key]) {
      simple = true;
    }

    if (simple) O[key] = value;else createNonEnumerableProperty$k(O, key, value); // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
  })(Function.prototype, 'toString', function toString() {
    return typeof this == 'function' && getInternalState$h(this).source || inspectSource$1(this);
  });

  var objectGetOwnPropertyNames = {};

  var ceil$1 = Math.ceil;
  var floor$8 = Math.floor; // `ToInteger` abstract operation
  // https://tc39.es/ecma262/#sec-tointeger

  var toInteger$f = function toInteger(argument) {
    return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor$8 : ceil$1)(argument);
  };

  var toInteger$e = toInteger$f;
  var min$9 = Math.min; // `ToLength` abstract operation
  // https://tc39.es/ecma262/#sec-tolength

  var toLength$z = function toLength(argument) {
    return argument > 0 ? min$9(toInteger$e(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
  };

  var toInteger$d = toInteger$f;
  var max$5 = Math.max;
  var min$8 = Math.min; // Helper for a popular repeating case of the spec:
  // Let integer be ? ToInteger(index).
  // If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).

  var toAbsoluteIndex$6 = function toAbsoluteIndex(index, length) {
    var integer = toInteger$d(index);
    return integer < 0 ? max$5(integer + length, 0) : min$8(integer, length);
  };

  var toIndexedObject$8 = toIndexedObject$a;
  var toLength$y = toLength$z;
  var toAbsoluteIndex$5 = toAbsoluteIndex$6; // `Array.prototype.{ indexOf, includes }` methods implementation

  var createMethod$8 = function createMethod(IS_INCLUDES) {
    return function ($this, el, fromIndex) {
      var O = toIndexedObject$8($this);
      var length = toLength$y(O.length);
      var index = toAbsoluteIndex$5(fromIndex, length);
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
    includes: createMethod$8(true),
    // `Array.prototype.indexOf` method
    // https://tc39.es/ecma262/#sec-array.prototype.indexof
    indexOf: createMethod$8(false)
  };

  var has$i = has$n;
  var toIndexedObject$7 = toIndexedObject$a;
  var indexOf = arrayIncludes.indexOf;
  var hiddenKeys$4 = hiddenKeys$6;

  var objectKeysInternal = function objectKeysInternal(object, names) {
    var O = toIndexedObject$7(object);
    var i = 0;
    var result = [];
    var key;

    for (key in O) {
      !has$i(hiddenKeys$4, key) && has$i(O, key) && result.push(key);
    } // Don't enum bug & hidden keys


    while (names.length > i) {
      if (has$i(O, key = names[i++])) {
        ~indexOf(result, key) || result.push(key);
      }
    }

    return result;
  };

  var enumBugKeys$3 = ['constructor', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'toLocaleString', 'toString', 'valueOf'];

  var internalObjectKeys$1 = objectKeysInternal;
  var enumBugKeys$2 = enumBugKeys$3;
  var hiddenKeys$3 = enumBugKeys$2.concat('length', 'prototype'); // `Object.getOwnPropertyNames` method
  // https://tc39.es/ecma262/#sec-object.getownpropertynames
  // eslint-disable-next-line es/no-object-getownpropertynames -- safe

  objectGetOwnPropertyNames.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
    return internalObjectKeys$1(O, hiddenKeys$3);
  };

  var objectGetOwnPropertySymbols = {};

  objectGetOwnPropertySymbols.f = Object.getOwnPropertySymbols;

  var getBuiltIn$r = getBuiltIn$u;
  var getOwnPropertyNamesModule$2 = objectGetOwnPropertyNames;
  var getOwnPropertySymbolsModule$2 = objectGetOwnPropertySymbols;
  var anObject$1x = anObject$1z; // all object keys, includes non-enumerable and symbols

  var ownKeys$3 = getBuiltIn$r('Reflect', 'ownKeys') || function ownKeys(it) {
    var keys = getOwnPropertyNamesModule$2.f(anObject$1x(it));
    var getOwnPropertySymbols = getOwnPropertySymbolsModule$2.f;
    return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
  };

  var has$h = has$n;
  var ownKeys$2 = ownKeys$3;
  var getOwnPropertyDescriptorModule$6 = objectGetOwnPropertyDescriptor;
  var definePropertyModule$b = objectDefineProperty;

  var copyConstructorProperties$2 = function copyConstructorProperties(target, source) {
    var keys = ownKeys$2(source);
    var defineProperty = definePropertyModule$b.f;
    var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule$6.f;

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      if (!has$h(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  };

  var fails$F = fails$K;
  var replacement = /#|\.prototype\./;

  var isForced$4 = function isForced(feature, detection) {
    var value = data[normalize(feature)];
    return value == POLYFILL ? true : value == NATIVE ? false : typeof detection == 'function' ? fails$F(detection) : !!detection;
  };

  var normalize = isForced$4.normalize = function (string) {
    return String(string).replace(replacement, '.').toLowerCase();
  };

  var data = isForced$4.data = {};
  var NATIVE = isForced$4.NATIVE = 'N';
  var POLYFILL = isForced$4.POLYFILL = 'P';
  var isForced_1 = isForced$4;

  var global$A = global$K;
  var getOwnPropertyDescriptor$6 = objectGetOwnPropertyDescriptor.f;
  var createNonEnumerableProperty$j = createNonEnumerableProperty$m;
  var redefine$d = redefine$e.exports;
  var setGlobal = setGlobal$3;
  var copyConstructorProperties$1 = copyConstructorProperties$2;
  var isForced$3 = isForced_1;
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
      target = global$A;
    } else if (STATIC) {
      target = global$A[TARGET] || setGlobal(TARGET, {});
    } else {
      target = (global$A[TARGET] || {}).prototype;
    }

    if (target) for (key in source) {
      sourceProperty = source[key];

      if (options.noTargetGet) {
        descriptor = getOwnPropertyDescriptor$6(target, key);
        targetProperty = descriptor && descriptor.value;
      } else targetProperty = target[key];

      FORCED = isForced$3(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced); // contained in target

      if (!FORCED && targetProperty !== undefined) {
        if (typeof sourceProperty === typeof targetProperty) continue;
        copyConstructorProperties$1(sourceProperty, targetProperty);
      } // add a flag to not completely full polyfills


      if (options.sham || targetProperty && targetProperty.sham) {
        createNonEnumerableProperty$j(sourceProperty, 'sham', true);
      } // extend global


      redefine$d(target, key, sourceProperty, options);
    }
  };

  var classof$b = classofRaw$1; // `IsArray` abstract operation
  // https://tc39.es/ecma262/#sec-isarray
  // eslint-disable-next-line es/no-array-isarray -- safe

  var isArray$7 = Array.isArray || function isArray(arg) {
    return classof$b(arg) == 'Array';
  };

  var isSymbol$2 = isSymbol$5;

  var toString$n = function toString(argument) {
    if (isSymbol$2(argument)) throw TypeError('Cannot convert a Symbol value to a string');
    return String(argument);
  };

  var internalObjectKeys = objectKeysInternal;
  var enumBugKeys$1 = enumBugKeys$3; // `Object.keys` method
  // https://tc39.es/ecma262/#sec-object.keys
  // eslint-disable-next-line es/no-object-keys -- safe

  var objectKeys$5 = Object.keys || function keys(O) {
    return internalObjectKeys(O, enumBugKeys$1);
  };

  var DESCRIPTORS$p = descriptors;
  var definePropertyModule$a = objectDefineProperty;
  var anObject$1w = anObject$1z;
  var objectKeys$4 = objectKeys$5; // `Object.defineProperties` method
  // https://tc39.es/ecma262/#sec-object.defineproperties
  // eslint-disable-next-line es/no-object-defineproperties -- safe

  var objectDefineProperties = DESCRIPTORS$p ? Object.defineProperties : function defineProperties(O, Properties) {
    anObject$1w(O);
    var keys = objectKeys$4(Properties);
    var length = keys.length;
    var index = 0;
    var key;

    while (length > index) {
      definePropertyModule$a.f(O, key = keys[index++], Properties[key]);
    }

    return O;
  };

  var getBuiltIn$q = getBuiltIn$u;
  var html$2 = getBuiltIn$q('document', 'documentElement');

  /* global ActiveXObject -- old IE, WSH */
  var anObject$1v = anObject$1z;
  var defineProperties$2 = objectDefineProperties;
  var enumBugKeys = enumBugKeys$3;
  var hiddenKeys$2 = hiddenKeys$6;
  var html$1 = html$2;
  var documentCreateElement = documentCreateElement$1;
  var sharedKey$2 = sharedKey$4;
  var GT = '>';
  var LT = '<';
  var PROTOTYPE$2 = 'prototype';
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

    var length = enumBugKeys.length;

    while (length--) {
      delete _NullProtoObject[PROTOTYPE$2][enumBugKeys[length]];
    }

    return _NullProtoObject();
  };

  hiddenKeys$2[IE_PROTO$1] = true; // `Object.create` method
  // https://tc39.es/ecma262/#sec-object.create

  var objectCreate$1 = Object.create || function create(O, Properties) {
    var result;

    if (O !== null) {
      EmptyConstructor[PROTOTYPE$2] = anObject$1v(O);
      result = new EmptyConstructor();
      EmptyConstructor[PROTOTYPE$2] = null; // add "__proto__" for Object.getPrototypeOf polyfill

      result[IE_PROTO$1] = O;
    } else result = _NullProtoObject();

    return Properties === undefined ? result : defineProperties$2(result, Properties);
  };

  var objectGetOwnPropertyNamesExternal = {};

  /* eslint-disable es/no-object-getownpropertynames -- safe */
  var toIndexedObject$6 = toIndexedObject$a;
  var $getOwnPropertyNames$1 = objectGetOwnPropertyNames.f;
  var toString$m = {}.toString;
  var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];

  var getWindowNames = function getWindowNames(it) {
    try {
      return $getOwnPropertyNames$1(it);
    } catch (error) {
      return windowNames.slice();
    }
  }; // fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window


  objectGetOwnPropertyNamesExternal.f = function getOwnPropertyNames(it) {
    return windowNames && toString$m.call(it) == '[object Window]' ? getWindowNames(it) : $getOwnPropertyNames$1(toIndexedObject$6(it));
  };

  var wellKnownSymbolWrapped = {};

  var wellKnownSymbol$C = wellKnownSymbol$E;
  wellKnownSymbolWrapped.f = wellKnownSymbol$C;

  var global$z = global$K;
  var path$5 = global$z;

  var path$4 = path$5;
  var has$g = has$n;
  var wrappedWellKnownSymbolModule$1 = wellKnownSymbolWrapped;
  var defineProperty$d = objectDefineProperty.f;

  var defineWellKnownSymbol$j = function defineWellKnownSymbol(NAME) {
    var Symbol = path$4.Symbol || (path$4.Symbol = {});
    if (!has$g(Symbol, NAME)) defineProperty$d(Symbol, NAME, {
      value: wrappedWellKnownSymbolModule$1.f(NAME)
    });
  };

  var defineProperty$c = objectDefineProperty.f;
  var has$f = has$n;
  var wellKnownSymbol$B = wellKnownSymbol$E;
  var TO_STRING_TAG$8 = wellKnownSymbol$B('toStringTag');

  var setToStringTag$b = function setToStringTag(it, TAG, STATIC) {
    if (it && !has$f(it = STATIC ? it : it.prototype, TO_STRING_TAG$8)) {
      defineProperty$c(it, TO_STRING_TAG$8, {
        configurable: true,
        value: TAG
      });
    }
  };

  var aFunction$S = function aFunction(it) {
    if (typeof it != 'function') {
      throw TypeError(String(it) + ' is not a function');
    }

    return it;
  };

  var aFunction$R = aFunction$S; // optional / simple context binding

  var functionBindContext = function functionBindContext(fn, that, length) {
    aFunction$R(fn);
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

  var isObject$q = isObject$w;
  var isArray$6 = isArray$7;
  var wellKnownSymbol$A = wellKnownSymbol$E;
  var SPECIES$6 = wellKnownSymbol$A('species'); // a part of `ArraySpeciesCreate` abstract operation
  // https://tc39.es/ecma262/#sec-arrayspeciescreate

  var arraySpeciesConstructor$2 = function arraySpeciesConstructor(originalArray) {
    var C;

    if (isArray$6(originalArray)) {
      C = originalArray.constructor; // cross-realm fallback

      if (typeof C == 'function' && (C === Array || isArray$6(C.prototype))) C = undefined;else if (isObject$q(C)) {
        C = C[SPECIES$6];
        if (C === null) C = undefined;
      }
    }

    return C === undefined ? Array : C;
  };

  var arraySpeciesConstructor$1 = arraySpeciesConstructor$2; // `ArraySpeciesCreate` abstract operation
  // https://tc39.es/ecma262/#sec-arrayspeciescreate

  var arraySpeciesCreate$6 = function arraySpeciesCreate(originalArray, length) {
    return new (arraySpeciesConstructor$1(originalArray))(length === 0 ? 0 : length);
  };

  var bind$o = functionBindContext;
  var IndexedObject$4 = indexedObject;
  var toObject$s = toObject$u;
  var toLength$x = toLength$z;
  var arraySpeciesCreate$5 = arraySpeciesCreate$6;
  var push$4 = [].push; // `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterReject }` methods implementation

  var createMethod$7 = function createMethod(TYPE) {
    var IS_MAP = TYPE == 1;
    var IS_FILTER = TYPE == 2;
    var IS_SOME = TYPE == 3;
    var IS_EVERY = TYPE == 4;
    var IS_FIND_INDEX = TYPE == 6;
    var IS_FILTER_REJECT = TYPE == 7;
    var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
    return function ($this, callbackfn, that, specificCreate) {
      var O = toObject$s($this);
      var self = IndexedObject$4(O);
      var boundFunction = bind$o(callbackfn, that, 3);
      var length = toLength$x(self.length);
      var index = 0;
      var create = specificCreate || arraySpeciesCreate$5;
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
                push$4.call(target, value);
              // filter
            } else switch (TYPE) {
              case 4:
                return false;
              // every

              case 7:
                push$4.call(target, value);
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
    forEach: createMethod$7(0),
    // `Array.prototype.map` method
    // https://tc39.es/ecma262/#sec-array.prototype.map
    map: createMethod$7(1),
    // `Array.prototype.filter` method
    // https://tc39.es/ecma262/#sec-array.prototype.filter
    filter: createMethod$7(2),
    // `Array.prototype.some` method
    // https://tc39.es/ecma262/#sec-array.prototype.some
    some: createMethod$7(3),
    // `Array.prototype.every` method
    // https://tc39.es/ecma262/#sec-array.prototype.every
    every: createMethod$7(4),
    // `Array.prototype.find` method
    // https://tc39.es/ecma262/#sec-array.prototype.find
    find: createMethod$7(5),
    // `Array.prototype.findIndex` method
    // https://tc39.es/ecma262/#sec-array.prototype.findIndex
    findIndex: createMethod$7(6),
    // `Array.prototype.filterReject` method
    // https://github.com/tc39/proposal-array-filtering
    filterReject: createMethod$7(7)
  };

  var $$30 = _export;
  var global$y = global$K;
  var getBuiltIn$p = getBuiltIn$u;
  var DESCRIPTORS$o = descriptors;
  var NATIVE_SYMBOL = nativeSymbol;
  var fails$E = fails$K;
  var has$e = has$n;
  var isArray$5 = isArray$7;
  var isObject$p = isObject$w;
  var isSymbol$1 = isSymbol$5;
  var anObject$1u = anObject$1z;
  var toObject$r = toObject$u;
  var toIndexedObject$5 = toIndexedObject$a;
  var toPropertyKey$6 = toPropertyKey$9;
  var $toString$3 = toString$n;
  var createPropertyDescriptor$6 = createPropertyDescriptor$9;
  var nativeObjectCreate = objectCreate$1;
  var objectKeys$3 = objectKeys$5;
  var getOwnPropertyNamesModule$1 = objectGetOwnPropertyNames;
  var getOwnPropertyNamesExternal = objectGetOwnPropertyNamesExternal;
  var getOwnPropertySymbolsModule$1 = objectGetOwnPropertySymbols;
  var getOwnPropertyDescriptorModule$5 = objectGetOwnPropertyDescriptor;
  var definePropertyModule$9 = objectDefineProperty;
  var propertyIsEnumerableModule$1 = objectPropertyIsEnumerable;
  var createNonEnumerableProperty$i = createNonEnumerableProperty$m;
  var redefine$c = redefine$e.exports;
  var shared$3 = shared$7.exports;
  var sharedKey$1 = sharedKey$4;
  var hiddenKeys$1 = hiddenKeys$6;
  var uid$2 = uid$5;
  var wellKnownSymbol$z = wellKnownSymbol$E;
  var wrappedWellKnownSymbolModule = wellKnownSymbolWrapped;
  var defineWellKnownSymbol$i = defineWellKnownSymbol$j;
  var setToStringTag$a = setToStringTag$b;
  var InternalStateModule$h = internalState;
  var $forEach$3 = arrayIteration.forEach;
  var HIDDEN = sharedKey$1('hidden');
  var SYMBOL = 'Symbol';
  var PROTOTYPE$1 = 'prototype';
  var TO_PRIMITIVE$1 = wellKnownSymbol$z('toPrimitive');
  var setInternalState$h = InternalStateModule$h.set;
  var getInternalState$g = InternalStateModule$h.getterFor(SYMBOL);
  var ObjectPrototype$3 = Object[PROTOTYPE$1];
  var $Symbol = global$y.Symbol;
  var $stringify$1 = getBuiltIn$p('JSON', 'stringify');
  var nativeGetOwnPropertyDescriptor$1 = getOwnPropertyDescriptorModule$5.f;
  var nativeDefineProperty$1 = definePropertyModule$9.f;
  var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;
  var nativePropertyIsEnumerable = propertyIsEnumerableModule$1.f;
  var AllSymbols = shared$3('symbols');
  var ObjectPrototypeSymbols = shared$3('op-symbols');
  var StringToSymbolRegistry = shared$3('string-to-symbol-registry');
  var SymbolToStringRegistry = shared$3('symbol-to-string-registry');
  var WellKnownSymbolsStore = shared$3('wks');
  var QObject = global$y.QObject; // Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173

  var USE_SETTER = !QObject || !QObject[PROTOTYPE$1] || !QObject[PROTOTYPE$1].findChild; // fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687

  var setSymbolDescriptor = DESCRIPTORS$o && fails$E(function () {
    return nativeObjectCreate(nativeDefineProperty$1({}, 'a', {
      get: function get() {
        return nativeDefineProperty$1(this, 'a', {
          value: 7
        }).a;
      }
    })).a != 7;
  }) ? function (O, P, Attributes) {
    var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor$1(ObjectPrototype$3, P);
    if (ObjectPrototypeDescriptor) delete ObjectPrototype$3[P];
    nativeDefineProperty$1(O, P, Attributes);

    if (ObjectPrototypeDescriptor && O !== ObjectPrototype$3) {
      nativeDefineProperty$1(ObjectPrototype$3, P, ObjectPrototypeDescriptor);
    }
  } : nativeDefineProperty$1;

  var wrap = function wrap(tag, description) {
    var symbol = AllSymbols[tag] = nativeObjectCreate($Symbol[PROTOTYPE$1]);
    setInternalState$h(symbol, {
      type: SYMBOL,
      tag: tag,
      description: description
    });
    if (!DESCRIPTORS$o) symbol.description = description;
    return symbol;
  };

  var $defineProperty = function defineProperty(O, P, Attributes) {
    if (O === ObjectPrototype$3) $defineProperty(ObjectPrototypeSymbols, P, Attributes);
    anObject$1u(O);
    var key = toPropertyKey$6(P);
    anObject$1u(Attributes);

    if (has$e(AllSymbols, key)) {
      if (!Attributes.enumerable) {
        if (!has$e(O, HIDDEN)) nativeDefineProperty$1(O, HIDDEN, createPropertyDescriptor$6(1, {}));
        O[HIDDEN][key] = true;
      } else {
        if (has$e(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
        Attributes = nativeObjectCreate(Attributes, {
          enumerable: createPropertyDescriptor$6(0, false)
        });
      }

      return setSymbolDescriptor(O, key, Attributes);
    }

    return nativeDefineProperty$1(O, key, Attributes);
  };

  var $defineProperties = function defineProperties(O, Properties) {
    anObject$1u(O);
    var properties = toIndexedObject$5(Properties);
    var keys = objectKeys$3(properties).concat($getOwnPropertySymbols(properties));
    $forEach$3(keys, function (key) {
      if (!DESCRIPTORS$o || $propertyIsEnumerable.call(properties, key)) $defineProperty(O, key, properties[key]);
    });
    return O;
  };

  var $create = function create(O, Properties) {
    return Properties === undefined ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties);
  };

  var $propertyIsEnumerable = function propertyIsEnumerable(V) {
    var P = toPropertyKey$6(V);
    var enumerable = nativePropertyIsEnumerable.call(this, P);
    if (this === ObjectPrototype$3 && has$e(AllSymbols, P) && !has$e(ObjectPrototypeSymbols, P)) return false;
    return enumerable || !has$e(this, P) || !has$e(AllSymbols, P) || has$e(this, HIDDEN) && this[HIDDEN][P] ? enumerable : true;
  };

  var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
    var it = toIndexedObject$5(O);
    var key = toPropertyKey$6(P);
    if (it === ObjectPrototype$3 && has$e(AllSymbols, key) && !has$e(ObjectPrototypeSymbols, key)) return;
    var descriptor = nativeGetOwnPropertyDescriptor$1(it, key);

    if (descriptor && has$e(AllSymbols, key) && !(has$e(it, HIDDEN) && it[HIDDEN][key])) {
      descriptor.enumerable = true;
    }

    return descriptor;
  };

  var $getOwnPropertyNames = function getOwnPropertyNames(O) {
    var names = nativeGetOwnPropertyNames(toIndexedObject$5(O));
    var result = [];
    $forEach$3(names, function (key) {
      if (!has$e(AllSymbols, key) && !has$e(hiddenKeys$1, key)) result.push(key);
    });
    return result;
  };

  var $getOwnPropertySymbols = function getOwnPropertySymbols(O) {
    var IS_OBJECT_PROTOTYPE = O === ObjectPrototype$3;
    var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject$5(O));
    var result = [];
    $forEach$3(names, function (key) {
      if (has$e(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || has$e(ObjectPrototype$3, key))) {
        result.push(AllSymbols[key]);
      }
    });
    return result;
  }; // `Symbol` constructor
  // https://tc39.es/ecma262/#sec-symbol-constructor


  if (!NATIVE_SYMBOL) {
    $Symbol = function Symbol() {
      if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor');
      var description = !arguments.length || arguments[0] === undefined ? undefined : $toString$3(arguments[0]);
      var tag = uid$2(description);

      var setter = function setter(value) {
        if (this === ObjectPrototype$3) setter.call(ObjectPrototypeSymbols, value);
        if (has$e(this, HIDDEN) && has$e(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
        setSymbolDescriptor(this, tag, createPropertyDescriptor$6(1, value));
      };

      if (DESCRIPTORS$o && USE_SETTER) setSymbolDescriptor(ObjectPrototype$3, tag, {
        configurable: true,
        set: setter
      });
      return wrap(tag, description);
    };

    redefine$c($Symbol[PROTOTYPE$1], 'toString', function toString() {
      return getInternalState$g(this).tag;
    });
    redefine$c($Symbol, 'withoutSetter', function (description) {
      return wrap(uid$2(description), description);
    });
    propertyIsEnumerableModule$1.f = $propertyIsEnumerable;
    definePropertyModule$9.f = $defineProperty;
    getOwnPropertyDescriptorModule$5.f = $getOwnPropertyDescriptor;
    getOwnPropertyNamesModule$1.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;
    getOwnPropertySymbolsModule$1.f = $getOwnPropertySymbols;

    wrappedWellKnownSymbolModule.f = function (name) {
      return wrap(wellKnownSymbol$z(name), name);
    };

    if (DESCRIPTORS$o) {
      // https://github.com/tc39/proposal-Symbol-description
      nativeDefineProperty$1($Symbol[PROTOTYPE$1], 'description', {
        configurable: true,
        get: function description() {
          return getInternalState$g(this).description;
        }
      });

      {
        redefine$c(ObjectPrototype$3, 'propertyIsEnumerable', $propertyIsEnumerable, {
          unsafe: true
        });
      }
    }
  }

  $$30({
    global: true,
    wrap: true,
    forced: !NATIVE_SYMBOL,
    sham: !NATIVE_SYMBOL
  }, {
    Symbol: $Symbol
  });
  $forEach$3(objectKeys$3(WellKnownSymbolsStore), function (name) {
    defineWellKnownSymbol$i(name);
  });
  $$30({
    target: SYMBOL,
    stat: true,
    forced: !NATIVE_SYMBOL
  }, {
    // `Symbol.for` method
    // https://tc39.es/ecma262/#sec-symbol.for
    'for': function _for(key) {
      var string = $toString$3(key);
      if (has$e(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
      var symbol = $Symbol(string);
      StringToSymbolRegistry[string] = symbol;
      SymbolToStringRegistry[symbol] = string;
      return symbol;
    },
    // `Symbol.keyFor` method
    // https://tc39.es/ecma262/#sec-symbol.keyfor
    keyFor: function keyFor(sym) {
      if (!isSymbol$1(sym)) throw TypeError(sym + ' is not a symbol');
      if (has$e(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
    },
    useSetter: function useSetter() {
      USE_SETTER = true;
    },
    useSimple: function useSimple() {
      USE_SETTER = false;
    }
  });
  $$30({
    target: 'Object',
    stat: true,
    forced: !NATIVE_SYMBOL,
    sham: !DESCRIPTORS$o
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
    getOwnPropertyDescriptor: $getOwnPropertyDescriptor
  });
  $$30({
    target: 'Object',
    stat: true,
    forced: !NATIVE_SYMBOL
  }, {
    // `Object.getOwnPropertyNames` method
    // https://tc39.es/ecma262/#sec-object.getownpropertynames
    getOwnPropertyNames: $getOwnPropertyNames,
    // `Object.getOwnPropertySymbols` method
    // https://tc39.es/ecma262/#sec-object.getownpropertysymbols
    getOwnPropertySymbols: $getOwnPropertySymbols
  }); // Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
  // https://bugs.chromium.org/p/v8/issues/detail?id=3443

  $$30({
    target: 'Object',
    stat: true,
    forced: fails$E(function () {
      getOwnPropertySymbolsModule$1.f(1);
    })
  }, {
    getOwnPropertySymbols: function getOwnPropertySymbols(it) {
      return getOwnPropertySymbolsModule$1.f(toObject$r(it));
    }
  }); // `JSON.stringify` method behavior with symbols
  // https://tc39.es/ecma262/#sec-json.stringify

  if ($stringify$1) {
    var FORCED_JSON_STRINGIFY = !NATIVE_SYMBOL || fails$E(function () {
      var symbol = $Symbol(); // MS Edge converts symbol values to JSON as {}

      return $stringify$1([symbol]) != '[null]' // WebKit converts symbol values to JSON as null
      || $stringify$1({
        a: symbol
      }) != '{}' // V8 throws on boxed symbols
      || $stringify$1(Object(symbol)) != '{}';
    });
    $$30({
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
        if (!isObject$p(replacer) && it === undefined || isSymbol$1(it)) return; // IE8 returns string on undefined

        if (!isArray$5(replacer)) replacer = function replacer(key, value) {
          if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
          if (!isSymbol$1(value)) return value;
        };
        args[1] = replacer;
        return $stringify$1.apply(null, args);
      }
    });
  } // `Symbol.prototype[@@toPrimitive]` method
  // https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive


  if (!$Symbol[PROTOTYPE$1][TO_PRIMITIVE$1]) {
    createNonEnumerableProperty$i($Symbol[PROTOTYPE$1], TO_PRIMITIVE$1, $Symbol[PROTOTYPE$1].valueOf);
  } // `Symbol.prototype[@@toStringTag]` property
  // https://tc39.es/ecma262/#sec-symbol.prototype-@@tostringtag


  setToStringTag$a($Symbol, SYMBOL);
  hiddenKeys$1[HIDDEN] = true;

  var $$2$ = _export;
  var DESCRIPTORS$n = descriptors;
  var global$x = global$K;
  var has$d = has$n;
  var isObject$o = isObject$w;
  var defineProperty$b = objectDefineProperty.f;
  var copyConstructorProperties = copyConstructorProperties$2;
  var NativeSymbol = global$x.Symbol;

  if (DESCRIPTORS$n && typeof NativeSymbol == 'function' && (!('description' in NativeSymbol.prototype) || // Safari 12 bug
  NativeSymbol().description !== undefined)) {
    var EmptyStringDescriptionStore = {}; // wrap Symbol constructor for correct work with undefined description

    var SymbolWrapper = function Symbol() {
      var description = arguments.length < 1 || arguments[0] === undefined ? undefined : String(arguments[0]);
      var result = this instanceof SymbolWrapper ? new NativeSymbol(description) // in Edge 13, String(Symbol(undefined)) === 'Symbol(undefined)'
      : description === undefined ? NativeSymbol() : NativeSymbol(description);
      if (description === '') EmptyStringDescriptionStore[result] = true;
      return result;
    };

    copyConstructorProperties(SymbolWrapper, NativeSymbol);
    var symbolPrototype = SymbolWrapper.prototype = NativeSymbol.prototype;
    symbolPrototype.constructor = SymbolWrapper;
    var symbolToString = symbolPrototype.toString;
    var native = String(NativeSymbol('test')) == 'Symbol(test)';
    var regexp = /^Symbol\((.*)\)[^)]+$/;
    defineProperty$b(symbolPrototype, 'description', {
      configurable: true,
      get: function description() {
        var symbol = isObject$o(this) ? this.valueOf() : this;
        var string = symbolToString.call(symbol);
        if (has$d(EmptyStringDescriptionStore, symbol)) return '';
        var desc = native ? string.slice(7, -1) : string.replace(regexp, '$1');
        return desc === '' ? undefined : desc;
      }
    });
    $$2$({
      global: true,
      forced: true
    }, {
      Symbol: SymbolWrapper
    });
  }

  var defineWellKnownSymbol$h = defineWellKnownSymbol$j; // `Symbol.asyncIterator` well-known symbol
  // https://tc39.es/ecma262/#sec-symbol.asynciterator

  defineWellKnownSymbol$h('asyncIterator');

  var defineWellKnownSymbol$g = defineWellKnownSymbol$j; // `Symbol.hasInstance` well-known symbol
  // https://tc39.es/ecma262/#sec-symbol.hasinstance

  defineWellKnownSymbol$g('hasInstance');

  var defineWellKnownSymbol$f = defineWellKnownSymbol$j; // `Symbol.isConcatSpreadable` well-known symbol
  // https://tc39.es/ecma262/#sec-symbol.isconcatspreadable

  defineWellKnownSymbol$f('isConcatSpreadable');

  var defineWellKnownSymbol$e = defineWellKnownSymbol$j; // `Symbol.match` well-known symbol
  // https://tc39.es/ecma262/#sec-symbol.match

  defineWellKnownSymbol$e('match');

  var defineWellKnownSymbol$d = defineWellKnownSymbol$j; // `Symbol.matchAll` well-known symbol
  // https://tc39.es/ecma262/#sec-symbol.matchall

  defineWellKnownSymbol$d('matchAll');

  var defineWellKnownSymbol$c = defineWellKnownSymbol$j; // `Symbol.replace` well-known symbol
  // https://tc39.es/ecma262/#sec-symbol.replace

  defineWellKnownSymbol$c('replace');

  var defineWellKnownSymbol$b = defineWellKnownSymbol$j; // `Symbol.search` well-known symbol
  // https://tc39.es/ecma262/#sec-symbol.search

  defineWellKnownSymbol$b('search');

  var defineWellKnownSymbol$a = defineWellKnownSymbol$j; // `Symbol.species` well-known symbol
  // https://tc39.es/ecma262/#sec-symbol.species

  defineWellKnownSymbol$a('species');

  var defineWellKnownSymbol$9 = defineWellKnownSymbol$j; // `Symbol.split` well-known symbol
  // https://tc39.es/ecma262/#sec-symbol.split

  defineWellKnownSymbol$9('split');

  var defineWellKnownSymbol$8 = defineWellKnownSymbol$j; // `Symbol.toPrimitive` well-known symbol
  // https://tc39.es/ecma262/#sec-symbol.toprimitive

  defineWellKnownSymbol$8('toPrimitive');

  var defineWellKnownSymbol$7 = defineWellKnownSymbol$j; // `Symbol.toStringTag` well-known symbol
  // https://tc39.es/ecma262/#sec-symbol.tostringtag

  defineWellKnownSymbol$7('toStringTag');

  var fails$D = fails$K;
  var correctPrototypeGetter = !fails$D(function () {
    function F() {
      /* empty */
    }

    F.prototype.constructor = null; // eslint-disable-next-line es/no-object-getprototypeof -- required for testing

    return Object.getPrototypeOf(new F()) !== F.prototype;
  });

  var has$c = has$n;
  var toObject$q = toObject$u;
  var sharedKey = sharedKey$4;
  var CORRECT_PROTOTYPE_GETTER$1 = correctPrototypeGetter;
  var IE_PROTO = sharedKey('IE_PROTO');
  var ObjectPrototype$2 = Object.prototype; // `Object.getPrototypeOf` method
  // https://tc39.es/ecma262/#sec-object.getprototypeof
  // eslint-disable-next-line es/no-object-getprototypeof -- safe

  var objectGetPrototypeOf$1 = CORRECT_PROTOTYPE_GETTER$1 ? Object.getPrototypeOf : function (O) {
    O = toObject$q(O);
    if (has$c(O, IE_PROTO)) return O[IE_PROTO];

    if (typeof O.constructor == 'function' && O instanceof O.constructor) {
      return O.constructor.prototype;
    }

    return O instanceof Object ? ObjectPrototype$2 : null;
  };

  var isObject$n = isObject$w;

  var aPossiblePrototype$2 = function aPossiblePrototype(it) {
    if (!isObject$n(it) && it !== null) {
      throw TypeError("Can't set " + String(it) + ' as a prototype');
    }

    return it;
  };

  /* eslint-disable no-proto -- safe */
  var anObject$1t = anObject$1z;
  var aPossiblePrototype$1 = aPossiblePrototype$2; // `Object.setPrototypeOf` method
  // https://tc39.es/ecma262/#sec-object.setprototypeof
  // Works with __proto__ only. Old v8 can't work with null proto objects.
  // eslint-disable-next-line es/no-object-setprototypeof -- safe

  var objectSetPrototypeOf$1 = Object.setPrototypeOf || ('__proto__' in {} ? function () {
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
      anObject$1t(O);
      aPossiblePrototype$1(proto);
      if (CORRECT_SETTER) setter.call(O, proto);else O.__proto__ = proto;
      return O;
    };
  }() : undefined);

  var iterators = {};

  var wellKnownSymbol$y = wellKnownSymbol$E;
  var Iterators$4 = iterators;
  var ITERATOR$8 = wellKnownSymbol$y('iterator');
  var ArrayPrototype$1 = Array.prototype; // check on default Array iterator

  var isArrayIteratorMethod$3 = function isArrayIteratorMethod(it) {
    return it !== undefined && (Iterators$4.Array === it || ArrayPrototype$1[ITERATOR$8] === it);
  };

  var wellKnownSymbol$x = wellKnownSymbol$E;
  var TO_STRING_TAG$7 = wellKnownSymbol$x('toStringTag');
  var test$2 = {};
  test$2[TO_STRING_TAG$7] = 'z';
  var toStringTagSupport = String(test$2) === '[object z]';

  var TO_STRING_TAG_SUPPORT$2 = toStringTagSupport;
  var classofRaw = classofRaw$1;
  var wellKnownSymbol$w = wellKnownSymbol$E;
  var TO_STRING_TAG$6 = wellKnownSymbol$w('toStringTag'); // ES3 wrong here

  var CORRECT_ARGUMENTS = classofRaw(function () {
    return arguments;
  }()) == 'Arguments'; // fallback for IE11 Script Access Denied error

  var tryGet = function tryGet(it, key) {
    try {
      return it[key];
    } catch (error) {
      /* empty */
    }
  }; // getting tag from ES6+ `Object.prototype.toString`


  var classof$a = TO_STRING_TAG_SUPPORT$2 ? classofRaw : function (it) {
    var O, tag, result;
    return it === undefined ? 'Undefined' : it === null ? 'Null' // @@toStringTag case
    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG$6)) == 'string' ? tag // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O) // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
  };

  var classof$9 = classof$a;
  var Iterators$3 = iterators;
  var wellKnownSymbol$v = wellKnownSymbol$E;
  var ITERATOR$7 = wellKnownSymbol$v('iterator');

  var getIteratorMethod$8 = function getIteratorMethod(it) {
    if (it != undefined) return it[ITERATOR$7] || it['@@iterator'] || Iterators$3[classof$9(it)];
  };

  var anObject$1s = anObject$1z;

  var iteratorClose$4 = function iteratorClose(iterator) {
    var returnMethod = iterator['return'];

    if (returnMethod !== undefined) {
      return anObject$1s(returnMethod.call(iterator)).value;
    }
  };

  var anObject$1r = anObject$1z;
  var isArrayIteratorMethod$2 = isArrayIteratorMethod$3;
  var toLength$w = toLength$z;
  var bind$n = functionBindContext;
  var getIteratorMethod$7 = getIteratorMethod$8;
  var iteratorClose$3 = iteratorClose$4;

  var Result = function Result(stopped, result) {
    this.stopped = stopped;
    this.result = result;
  };

  var iterate$I = function iterate(iterable, unboundFunction, options) {
    var that = options && options.that;
    var AS_ENTRIES = !!(options && options.AS_ENTRIES);
    var IS_ITERATOR = !!(options && options.IS_ITERATOR);
    var INTERRUPTED = !!(options && options.INTERRUPTED);
    var fn = bind$n(unboundFunction, that, 1 + AS_ENTRIES + INTERRUPTED);
    var iterator, iterFn, index, length, result, next, step;

    var stop = function stop(condition) {
      if (iterator) iteratorClose$3(iterator);
      return new Result(true, condition);
    };

    var callFn = function callFn(value) {
      if (AS_ENTRIES) {
        anObject$1r(value);
        return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
      }

      return INTERRUPTED ? fn(value, stop) : fn(value);
    };

    if (IS_ITERATOR) {
      iterator = iterable;
    } else {
      iterFn = getIteratorMethod$7(iterable);
      if (typeof iterFn != 'function') throw TypeError('Target is not iterable'); // optimisation for array iterators

      if (isArrayIteratorMethod$2(iterFn)) {
        for (index = 0, length = toLength$w(iterable.length); length > index; index++) {
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
        iteratorClose$3(iterator);
        throw error;
      }

      if (typeof result == 'object' && result && result instanceof Result) return result;
    }

    return new Result(false);
  };

  var $$2_ = _export;
  var getPrototypeOf$d = objectGetPrototypeOf$1;
  var setPrototypeOf$6 = objectSetPrototypeOf$1;
  var create$b = objectCreate$1;
  var createNonEnumerableProperty$h = createNonEnumerableProperty$m;
  var createPropertyDescriptor$5 = createPropertyDescriptor$9;
  var iterate$H = iterate$I;
  var toString$l = toString$n;

  var $AggregateError = function AggregateError(errors, message) {
    var that = this;
    if (!(that instanceof $AggregateError)) return new $AggregateError(errors, message);

    if (setPrototypeOf$6) {
      // eslint-disable-next-line unicorn/error-message -- expected
      that = setPrototypeOf$6(new Error(undefined), getPrototypeOf$d(that));
    }

    if (message !== undefined) createNonEnumerableProperty$h(that, 'message', toString$l(message));
    var errorsArray = [];
    iterate$H(errors, errorsArray.push, {
      that: errorsArray
    });
    createNonEnumerableProperty$h(that, 'errors', errorsArray);
    return that;
  };

  $AggregateError.prototype = create$b(Error.prototype, {
    constructor: createPropertyDescriptor$5(5, $AggregateError),
    message: createPropertyDescriptor$5(5, ''),
    name: createPropertyDescriptor$5(5, 'AggregateError')
  }); // `AggregateError` constructor
  // https://tc39.es/ecma262/#sec-aggregate-error-constructor

  $$2_({
    global: true
  }, {
    AggregateError: $AggregateError
  });

  var toPropertyKey$5 = toPropertyKey$9;
  var definePropertyModule$8 = objectDefineProperty;
  var createPropertyDescriptor$4 = createPropertyDescriptor$9;

  var createProperty$6 = function createProperty(object, key, value) {
    var propertyKey = toPropertyKey$5(key);
    if (propertyKey in object) definePropertyModule$8.f(object, propertyKey, createPropertyDescriptor$4(0, value));else object[propertyKey] = value;
  };

  var fails$C = fails$K;
  var wellKnownSymbol$u = wellKnownSymbol$E;
  var V8_VERSION$2 = engineV8Version;
  var SPECIES$5 = wellKnownSymbol$u('species');

  var arrayMethodHasSpeciesSupport$5 = function arrayMethodHasSpeciesSupport(METHOD_NAME) {
    // We can't use this feature detection in V8 since it causes
    // deoptimization and serious performance degradation
    // https://github.com/zloirock/core-js/issues/677
    return V8_VERSION$2 >= 51 || !fails$C(function () {
      var array = [];
      var constructor = array.constructor = {};

      constructor[SPECIES$5] = function () {
        return {
          foo: 1
        };
      };

      return array[METHOD_NAME](Boolean).foo !== 1;
    });
  };

  var $$2Z = _export;
  var fails$B = fails$K;
  var isArray$4 = isArray$7;
  var isObject$m = isObject$w;
  var toObject$p = toObject$u;
  var toLength$v = toLength$z;
  var createProperty$5 = createProperty$6;
  var arraySpeciesCreate$4 = arraySpeciesCreate$6;
  var arrayMethodHasSpeciesSupport$4 = arrayMethodHasSpeciesSupport$5;
  var wellKnownSymbol$t = wellKnownSymbol$E;
  var V8_VERSION$1 = engineV8Version;
  var IS_CONCAT_SPREADABLE = wellKnownSymbol$t('isConcatSpreadable');
  var MAX_SAFE_INTEGER$1 = 0x1FFFFFFFFFFFFF;
  var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded'; // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/679

  var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION$1 >= 51 || !fails$B(function () {
    var array = [];
    array[IS_CONCAT_SPREADABLE] = false;
    return array.concat()[0] !== array;
  });
  var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport$4('concat');

  var isConcatSpreadable = function isConcatSpreadable(O) {
    if (!isObject$m(O)) return false;
    var spreadable = O[IS_CONCAT_SPREADABLE];
    return spreadable !== undefined ? !!spreadable : isArray$4(O);
  };

  var FORCED$m = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT; // `Array.prototype.concat` method
  // https://tc39.es/ecma262/#sec-array.prototype.concat
  // with adding support of @@isConcatSpreadable and @@species

  $$2Z({
    target: 'Array',
    proto: true,
    forced: FORCED$m
  }, {
    // eslint-disable-next-line no-unused-vars -- required for `.length`
    concat: function concat(arg) {
      var O = toObject$p(this);
      var A = arraySpeciesCreate$4(O, 0);
      var n = 0;
      var i, k, length, len, E;

      for (i = -1, length = arguments.length; i < length; i++) {
        E = i === -1 ? O : arguments[i];

        if (isConcatSpreadable(E)) {
          len = toLength$v(E.length);
          if (n + len > MAX_SAFE_INTEGER$1) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);

          for (k = 0; k < len; k++, n++) {
            if (k in E) createProperty$5(A, n, E[k]);
          }
        } else {
          if (n >= MAX_SAFE_INTEGER$1) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
          createProperty$5(A, n++, E);
        }
      }

      A.length = n;
      return A;
    }
  });

  var $$2Y = _export;
  var $filter$1 = arrayIteration.filter;
  var arrayMethodHasSpeciesSupport$3 = arrayMethodHasSpeciesSupport$5;
  var HAS_SPECIES_SUPPORT$3 = arrayMethodHasSpeciesSupport$3('filter'); // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  // with adding support of @@species

  $$2Y({
    target: 'Array',
    proto: true,
    forced: !HAS_SPECIES_SUPPORT$3
  }, {
    filter: function filter(callbackfn
    /* , thisArg */
    ) {
      return $filter$1(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  var isArray$3 = isArray$7;
  var toLength$u = toLength$z;
  var bind$m = functionBindContext; // `FlattenIntoArray` abstract operation
  // https://tc39.github.io/proposal-flatMap/#sec-FlattenIntoArray

  var flattenIntoArray$2 = function flattenIntoArray(target, original, source, sourceLen, start, depth, mapper, thisArg) {
    var targetIndex = start;
    var sourceIndex = 0;
    var mapFn = mapper ? bind$m(mapper, thisArg, 3) : false;
    var element;

    while (sourceIndex < sourceLen) {
      if (sourceIndex in source) {
        element = mapFn ? mapFn(source[sourceIndex], sourceIndex, original) : source[sourceIndex];

        if (depth > 0 && isArray$3(element)) {
          targetIndex = flattenIntoArray(target, original, element, toLength$u(element.length), targetIndex, depth - 1) - 1;
        } else {
          if (targetIndex >= 0x1FFFFFFFFFFFFF) throw TypeError('Exceed the acceptable array length');
          target[targetIndex] = element;
        }

        targetIndex++;
      }

      sourceIndex++;
    }

    return targetIndex;
  };

  var flattenIntoArray_1 = flattenIntoArray$2;

  var $$2X = _export;
  var flattenIntoArray$1 = flattenIntoArray_1;
  var toObject$o = toObject$u;
  var toLength$t = toLength$z;
  var toInteger$c = toInteger$f;
  var arraySpeciesCreate$3 = arraySpeciesCreate$6; // `Array.prototype.flat` method
  // https://tc39.es/ecma262/#sec-array.prototype.flat

  $$2X({
    target: 'Array',
    proto: true
  }, {
    flat: function flat() {
      var depthArg = arguments.length ? arguments[0] : undefined;
      var O = toObject$o(this);
      var sourceLen = toLength$t(O.length);
      var A = arraySpeciesCreate$3(O, 0);
      A.length = flattenIntoArray$1(A, O, O, sourceLen, 0, depthArg === undefined ? 1 : toInteger$c(depthArg));
      return A;
    }
  });

  var $$2W = _export;
  var flattenIntoArray = flattenIntoArray_1;
  var toObject$n = toObject$u;
  var toLength$s = toLength$z;
  var aFunction$Q = aFunction$S;
  var arraySpeciesCreate$2 = arraySpeciesCreate$6; // `Array.prototype.flatMap` method
  // https://tc39.es/ecma262/#sec-array.prototype.flatmap

  $$2W({
    target: 'Array',
    proto: true
  }, {
    flatMap: function flatMap(callbackfn
    /* , thisArg */
    ) {
      var O = toObject$n(this);
      var sourceLen = toLength$s(O.length);
      var A;
      aFunction$Q(callbackfn);
      A = arraySpeciesCreate$2(O, 0);
      A.length = flattenIntoArray(A, O, O, sourceLen, 0, 1, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
      return A;
    }
  });

  var anObject$1q = anObject$1z;
  var iteratorClose$2 = iteratorClose$4; // call something on iterator step with safe closing on error

  var callWithSafeIterationClosing$3 = function callWithSafeIterationClosing(iterator, fn, value, ENTRIES) {
    try {
      return ENTRIES ? fn(anObject$1q(value)[0], value[1]) : fn(value);
    } catch (error) {
      iteratorClose$2(iterator);
      throw error;
    }
  };

  var bind$l = functionBindContext;
  var toObject$m = toObject$u;
  var callWithSafeIterationClosing$2 = callWithSafeIterationClosing$3;
  var isArrayIteratorMethod$1 = isArrayIteratorMethod$3;
  var toLength$r = toLength$z;
  var createProperty$4 = createProperty$6;
  var getIteratorMethod$6 = getIteratorMethod$8; // `Array.from` method implementation
  // https://tc39.es/ecma262/#sec-array.from

  var arrayFrom$1 = function from(arrayLike
  /* , mapfn = undefined, thisArg = undefined */
  ) {
    var O = toObject$m(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var argumentsLength = arguments.length;
    var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var iteratorMethod = getIteratorMethod$6(O);
    var index = 0;
    var length, result, step, iterator, next, value;
    if (mapping) mapfn = bind$l(mapfn, argumentsLength > 2 ? arguments[2] : undefined, 2); // if the target is not iterable or it's an array with the default iterator - use a simple case

    if (iteratorMethod != undefined && !(C == Array && isArrayIteratorMethod$1(iteratorMethod))) {
      iterator = iteratorMethod.call(O);
      next = iterator.next;
      result = new C();

      for (; !(step = next.call(iterator)).done; index++) {
        value = mapping ? callWithSafeIterationClosing$2(iterator, mapfn, [step.value, index], true) : step.value;
        createProperty$4(result, index, value);
      }
    } else {
      length = toLength$r(O.length);
      result = new C(length);

      for (; length > index; index++) {
        value = mapping ? mapfn(O[index], index) : O[index];
        createProperty$4(result, index, value);
      }
    }

    result.length = index;
    return result;
  };

  var wellKnownSymbol$s = wellKnownSymbol$E;
  var ITERATOR$6 = wellKnownSymbol$s('iterator');
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

    iteratorWithReturn[ITERATOR$6] = function () {
      return this;
    }; // eslint-disable-next-line es/no-array-from, no-throw-literal -- required for testing


    Array.from(iteratorWithReturn, function () {
      throw 2;
    });
  } catch (error) {
    /* empty */
  }

  var checkCorrectnessOfIteration$4 = function checkCorrectnessOfIteration(exec, SKIP_CLOSING) {
    if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
    var ITERATION_SUPPORT = false;

    try {
      var object = {};

      object[ITERATOR$6] = function () {
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

  var $$2V = _export;
  var from$5 = arrayFrom$1;
  var checkCorrectnessOfIteration$3 = checkCorrectnessOfIteration$4;
  var INCORRECT_ITERATION$1 = !checkCorrectnessOfIteration$3(function (iterable) {
    // eslint-disable-next-line es/no-array-from -- required for testing
    Array.from(iterable);
  }); // `Array.from` method
  // https://tc39.es/ecma262/#sec-array.from

  $$2V({
    target: 'Array',
    stat: true,
    forced: INCORRECT_ITERATION$1
  }, {
    from: from$5
  });

  var wellKnownSymbol$r = wellKnownSymbol$E;
  var create$a = objectCreate$1;
  var definePropertyModule$7 = objectDefineProperty;
  var UNSCOPABLES = wellKnownSymbol$r('unscopables');
  var ArrayPrototype = Array.prototype; // Array.prototype[@@unscopables]
  // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables

  if (ArrayPrototype[UNSCOPABLES] == undefined) {
    definePropertyModule$7.f(ArrayPrototype, UNSCOPABLES, {
      configurable: true,
      value: create$a(null)
    });
  } // add a key to Array.prototype[@@unscopables]


  var addToUnscopables$d = function addToUnscopables(key) {
    ArrayPrototype[UNSCOPABLES][key] = true;
  };

  var $$2U = _export;
  var $includes$1 = arrayIncludes.includes;
  var addToUnscopables$c = addToUnscopables$d; // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes

  $$2U({
    target: 'Array',
    proto: true
  }, {
    includes: function includes(el
    /* , fromIndex = 0 */
    ) {
      return $includes$1(this, el, arguments.length > 1 ? arguments[1] : undefined);
    }
  }); // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables

  addToUnscopables$c('includes');

  var fails$A = fails$K;

  var arrayMethodIsStrict$6 = function arrayMethodIsStrict(METHOD_NAME, argument) {
    var method = [][METHOD_NAME];
    return !!method && fails$A(function () {
      // eslint-disable-next-line no-useless-call,no-throw-literal -- required for testing
      method.call(null, argument || function () {
        throw 1;
      }, 1);
    });
  };

  /* eslint-disable es/no-array-prototype-indexof -- required for testing */


  var $$2T = _export;
  var $indexOf$1 = arrayIncludes.indexOf;
  var arrayMethodIsStrict$5 = arrayMethodIsStrict$6;
  var nativeIndexOf = [].indexOf;
  var NEGATIVE_ZERO$1 = !!nativeIndexOf && 1 / [1].indexOf(1, -0) < 0;
  var STRICT_METHOD$5 = arrayMethodIsStrict$5('indexOf'); // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof

  $$2T({
    target: 'Array',
    proto: true,
    forced: NEGATIVE_ZERO$1 || !STRICT_METHOD$5
  }, {
    indexOf: function indexOf(searchElement
    /* , fromIndex = 0 */
    ) {
      return NEGATIVE_ZERO$1 // convert -0 to +0
      ? nativeIndexOf.apply(this, arguments) || 0 : $indexOf$1(this, searchElement, arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  var fails$z = fails$K;
  var getPrototypeOf$c = objectGetPrototypeOf$1;
  var createNonEnumerableProperty$g = createNonEnumerableProperty$m;
  var has$b = has$n;
  var wellKnownSymbol$q = wellKnownSymbol$E;
  var ITERATOR$5 = wellKnownSymbol$q('iterator');
  var BUGGY_SAFARI_ITERATORS$1 = false;

  var returnThis$2 = function returnThis() {
    return this;
  }; // `%IteratorPrototype%` object
  // https://tc39.es/ecma262/#sec-%iteratorprototype%-object


  var IteratorPrototype$3, PrototypeOfArrayIteratorPrototype, arrayIterator;
  /* eslint-disable es/no-array-prototype-keys -- safe */

  if ([].keys) {
    arrayIterator = [].keys(); // Safari 8 has buggy iterators w/o `next`

    if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS$1 = true;else {
      PrototypeOfArrayIteratorPrototype = getPrototypeOf$c(getPrototypeOf$c(arrayIterator));
      if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype$3 = PrototypeOfArrayIteratorPrototype;
    }
  }

  var NEW_ITERATOR_PROTOTYPE = IteratorPrototype$3 == undefined || fails$z(function () {
    var test = {}; // FF44- legacy iterators case

    return IteratorPrototype$3[ITERATOR$5].call(test) !== test;
  });
  if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype$3 = {}; // `%IteratorPrototype%[@@iterator]()` method
  // https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator

  if (!has$b(IteratorPrototype$3, ITERATOR$5)) {
    createNonEnumerableProperty$g(IteratorPrototype$3, ITERATOR$5, returnThis$2);
  }

  var iteratorsCore = {
    IteratorPrototype: IteratorPrototype$3,
    BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS$1
  };

  var IteratorPrototype$2 = iteratorsCore.IteratorPrototype;
  var create$9 = objectCreate$1;
  var createPropertyDescriptor$3 = createPropertyDescriptor$9;
  var setToStringTag$9 = setToStringTag$b;
  var Iterators$2 = iterators;

  var returnThis$1 = function returnThis() {
    return this;
  };

  var createIteratorConstructor$7 = function createIteratorConstructor(IteratorConstructor, NAME, next) {
    var TO_STRING_TAG = NAME + ' Iterator';
    IteratorConstructor.prototype = create$9(IteratorPrototype$2, {
      next: createPropertyDescriptor$3(1, next)
    });
    setToStringTag$9(IteratorConstructor, TO_STRING_TAG, false);
    Iterators$2[TO_STRING_TAG] = returnThis$1;
    return IteratorConstructor;
  };

  var $$2S = _export;
  var createIteratorConstructor$6 = createIteratorConstructor$7;
  var getPrototypeOf$b = objectGetPrototypeOf$1;
  var setPrototypeOf$5 = objectSetPrototypeOf$1;
  var setToStringTag$8 = setToStringTag$b;
  var createNonEnumerableProperty$f = createNonEnumerableProperty$m;
  var redefine$b = redefine$e.exports;
  var wellKnownSymbol$p = wellKnownSymbol$E;
  var Iterators$1 = iterators;
  var IteratorsCore = iteratorsCore;
  var IteratorPrototype$1 = IteratorsCore.IteratorPrototype;
  var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
  var ITERATOR$4 = wellKnownSymbol$p('iterator');
  var KEYS = 'keys';
  var VALUES = 'values';
  var ENTRIES = 'entries';

  var returnThis = function returnThis() {
    return this;
  };

  var defineIterator$3 = function defineIterator(Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
    createIteratorConstructor$6(IteratorConstructor, NAME, next);

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
    var nativeIterator = IterablePrototype[ITERATOR$4] || IterablePrototype['@@iterator'] || DEFAULT && IterablePrototype[DEFAULT];
    var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
    var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
    var CurrentIteratorPrototype, methods, KEY; // fix native

    if (anyNativeIterator) {
      CurrentIteratorPrototype = getPrototypeOf$b(anyNativeIterator.call(new Iterable()));

      if (IteratorPrototype$1 !== Object.prototype && CurrentIteratorPrototype.next) {
        if (getPrototypeOf$b(CurrentIteratorPrototype) !== IteratorPrototype$1) {
          if (setPrototypeOf$5) {
            setPrototypeOf$5(CurrentIteratorPrototype, IteratorPrototype$1);
          } else if (typeof CurrentIteratorPrototype[ITERATOR$4] != 'function') {
            createNonEnumerableProperty$f(CurrentIteratorPrototype, ITERATOR$4, returnThis);
          }
        } // Set @@toStringTag to native iterators


        setToStringTag$8(CurrentIteratorPrototype, TO_STRING_TAG, true);
      }
    } // fix Array.prototype.{ values, @@iterator }.name in V8 / FF


    if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
      INCORRECT_VALUES_NAME = true;

      defaultIterator = function values() {
        return nativeIterator.call(this);
      };
    } // define iterator


    if (IterablePrototype[ITERATOR$4] !== defaultIterator) {
      createNonEnumerableProperty$f(IterablePrototype, ITERATOR$4, defaultIterator);
    }

    Iterators$1[NAME] = defaultIterator; // export additional methods

    if (DEFAULT) {
      methods = {
        values: getIterationMethod(VALUES),
        keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
        entries: getIterationMethod(ENTRIES)
      };
      if (FORCED) for (KEY in methods) {
        if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
          redefine$b(IterablePrototype, KEY, methods[KEY]);
        }
      } else $$2S({
        target: NAME,
        proto: true,
        forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME
      }, methods);
    }

    return methods;
  };

  var toIndexedObject$4 = toIndexedObject$a;
  var addToUnscopables$b = addToUnscopables$d;
  var Iterators = iterators;
  var InternalStateModule$g = internalState;
  var defineIterator$2 = defineIterator$3;
  var ARRAY_ITERATOR = 'Array Iterator';
  var setInternalState$g = InternalStateModule$g.set;
  var getInternalState$f = InternalStateModule$g.getterFor(ARRAY_ITERATOR); // `Array.prototype.entries` method
  // https://tc39.es/ecma262/#sec-array.prototype.entries
  // `Array.prototype.keys` method
  // https://tc39.es/ecma262/#sec-array.prototype.keys
  // `Array.prototype.values` method
  // https://tc39.es/ecma262/#sec-array.prototype.values
  // `Array.prototype[@@iterator]` method
  // https://tc39.es/ecma262/#sec-array.prototype-@@iterator
  // `CreateArrayIterator` internal method
  // https://tc39.es/ecma262/#sec-createarrayiterator

  var es_array_iterator = defineIterator$2(Array, 'Array', function (iterated, kind) {
    setInternalState$g(this, {
      type: ARRAY_ITERATOR,
      target: toIndexedObject$4(iterated),
      // target
      index: 0,
      // next index
      kind: kind // kind

    }); // `%ArrayIteratorPrototype%.next` method
    // https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
  }, function () {
    var state = getInternalState$f(this);
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

  Iterators.Arguments = Iterators.Array; // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables

  addToUnscopables$b('keys');
  addToUnscopables$b('values');
  addToUnscopables$b('entries');

  /* eslint-disable es/no-array-prototype-lastindexof -- safe */


  var toIndexedObject$3 = toIndexedObject$a;
  var toInteger$b = toInteger$f;
  var toLength$q = toLength$z;
  var arrayMethodIsStrict$4 = arrayMethodIsStrict$6;
  var min$7 = Math.min;
  var $lastIndexOf$1 = [].lastIndexOf;
  var NEGATIVE_ZERO = !!$lastIndexOf$1 && 1 / [1].lastIndexOf(1, -0) < 0;
  var STRICT_METHOD$4 = arrayMethodIsStrict$4('lastIndexOf');
  var FORCED$l = NEGATIVE_ZERO || !STRICT_METHOD$4; // `Array.prototype.lastIndexOf` method implementation
  // https://tc39.es/ecma262/#sec-array.prototype.lastindexof

  var arrayLastIndexOf = FORCED$l ? function lastIndexOf(searchElement
  /* , fromIndex = @[*-1] */
  ) {
    // convert -0 to +0
    if (NEGATIVE_ZERO) return $lastIndexOf$1.apply(this, arguments) || 0;
    var O = toIndexedObject$3(this);
    var length = toLength$q(O.length);
    var index = length - 1;
    if (arguments.length > 1) index = min$7(index, toInteger$b(arguments[1]));
    if (index < 0) index = length + index;

    for (; index >= 0; index--) {
      if (index in O && O[index] === searchElement) return index || 0;
    }

    return -1;
  } : $lastIndexOf$1;

  var $$2R = _export;
  var lastIndexOf = arrayLastIndexOf; // `Array.prototype.lastIndexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.lastindexof
  // eslint-disable-next-line es/no-array-prototype-lastindexof -- required for testing

  $$2R({
    target: 'Array',
    proto: true,
    forced: lastIndexOf !== [].lastIndexOf
  }, {
    lastIndexOf: lastIndexOf
  });

  var $$2Q = _export;
  var $map$1 = arrayIteration.map;
  var arrayMethodHasSpeciesSupport$2 = arrayMethodHasSpeciesSupport$5;
  var HAS_SPECIES_SUPPORT$2 = arrayMethodHasSpeciesSupport$2('map'); // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  // with adding support of @@species

  $$2Q({
    target: 'Array',
    proto: true,
    forced: !HAS_SPECIES_SUPPORT$2
  }, {
    map: function map(callbackfn
    /* , thisArg */
    ) {
      return $map$1(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  var aFunction$P = aFunction$S;
  var toObject$l = toObject$u;
  var IndexedObject$3 = indexedObject;
  var toLength$p = toLength$z; // `Array.prototype.{ reduce, reduceRight }` methods implementation

  var createMethod$6 = function createMethod(IS_RIGHT) {
    return function (that, callbackfn, argumentsLength, memo) {
      aFunction$P(callbackfn);
      var O = toObject$l(that);
      var self = IndexedObject$3(O);
      var length = toLength$p(O.length);
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
    left: createMethod$6(false),
    // `Array.prototype.reduceRight` method
    // https://tc39.es/ecma262/#sec-array.prototype.reduceright
    right: createMethod$6(true)
  };

  var classof$8 = classofRaw$1;
  var global$w = global$K;
  var engineIsNode = classof$8(global$w.process) == 'process';

  var $$2P = _export;
  var $reduce$1 = arrayReduce.left;
  var arrayMethodIsStrict$3 = arrayMethodIsStrict$6;
  var CHROME_VERSION$1 = engineV8Version;
  var IS_NODE$5 = engineIsNode;
  var STRICT_METHOD$3 = arrayMethodIsStrict$3('reduce'); // Chrome 80-82 has a critical bug
  // https://bugs.chromium.org/p/chromium/issues/detail?id=1049982

  var CHROME_BUG$1 = !IS_NODE$5 && CHROME_VERSION$1 > 79 && CHROME_VERSION$1 < 83; // `Array.prototype.reduce` method
  // https://tc39.es/ecma262/#sec-array.prototype.reduce

  $$2P({
    target: 'Array',
    proto: true,
    forced: !STRICT_METHOD$3 || CHROME_BUG$1
  }, {
    reduce: function reduce(callbackfn
    /* , initialValue */
    ) {
      return $reduce$1(this, callbackfn, arguments.length, arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  var $$2O = _export;
  var $reduceRight$1 = arrayReduce.right;
  var arrayMethodIsStrict$2 = arrayMethodIsStrict$6;
  var CHROME_VERSION = engineV8Version;
  var IS_NODE$4 = engineIsNode;
  var STRICT_METHOD$2 = arrayMethodIsStrict$2('reduceRight'); // Chrome 80-82 has a critical bug
  // https://bugs.chromium.org/p/chromium/issues/detail?id=1049982

  var CHROME_BUG = !IS_NODE$4 && CHROME_VERSION > 79 && CHROME_VERSION < 83; // `Array.prototype.reduceRight` method
  // https://tc39.es/ecma262/#sec-array.prototype.reduceright

  $$2O({
    target: 'Array',
    proto: true,
    forced: !STRICT_METHOD$2 || CHROME_BUG
  }, {
    reduceRight: function reduceRight(callbackfn
    /* , initialValue */
    ) {
      return $reduceRight$1(this, callbackfn, arguments.length, arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  var $$2N = _export;
  var isArray$2 = isArray$7;
  var nativeReverse = [].reverse;
  var test$1 = [1, 2]; // `Array.prototype.reverse` method
  // https://tc39.es/ecma262/#sec-array.prototype.reverse
  // fix for Safari 12.0 bug
  // https://bugs.webkit.org/show_bug.cgi?id=188794

  $$2N({
    target: 'Array',
    proto: true,
    forced: String(test$1) === String(test$1.reverse())
  }, {
    reverse: function reverse() {
      // eslint-disable-next-line no-self-assign -- dirty hack
      if (isArray$2(this)) this.length = this.length;
      return nativeReverse.call(this);
    }
  });

  var $$2M = _export;
  var isObject$l = isObject$w;
  var isArray$1 = isArray$7;
  var toAbsoluteIndex$4 = toAbsoluteIndex$6;
  var toLength$o = toLength$z;
  var toIndexedObject$2 = toIndexedObject$a;
  var createProperty$3 = createProperty$6;
  var wellKnownSymbol$o = wellKnownSymbol$E;
  var arrayMethodHasSpeciesSupport$1 = arrayMethodHasSpeciesSupport$5;
  var HAS_SPECIES_SUPPORT$1 = arrayMethodHasSpeciesSupport$1('slice');
  var SPECIES$4 = wellKnownSymbol$o('species');
  var nativeSlice = [].slice;
  var max$4 = Math.max; // `Array.prototype.slice` method
  // https://tc39.es/ecma262/#sec-array.prototype.slice
  // fallback for not array-like ES3 strings and DOM objects

  $$2M({
    target: 'Array',
    proto: true,
    forced: !HAS_SPECIES_SUPPORT$1
  }, {
    slice: function slice(start, end) {
      var O = toIndexedObject$2(this);
      var length = toLength$o(O.length);
      var k = toAbsoluteIndex$4(start, length);
      var fin = toAbsoluteIndex$4(end === undefined ? length : end, length); // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible

      var Constructor, result, n;

      if (isArray$1(O)) {
        Constructor = O.constructor; // cross-realm fallback

        if (typeof Constructor == 'function' && (Constructor === Array || isArray$1(Constructor.prototype))) {
          Constructor = undefined;
        } else if (isObject$l(Constructor)) {
          Constructor = Constructor[SPECIES$4];
          if (Constructor === null) Constructor = undefined;
        }

        if (Constructor === Array || Constructor === undefined) {
          return nativeSlice.call(O, k, fin);
        }
      }

      result = new (Constructor === undefined ? Array : Constructor)(max$4(fin - k, 0));

      for (n = 0; k < fin; k++, n++) {
        if (k in O) createProperty$3(result, n, O[k]);
      }

      result.length = n;
      return result;
    }
  });

  var floor$7 = Math.floor;

  var mergeSort = function mergeSort(array, comparefn) {
    var length = array.length;
    var middle = floor$7(length / 2);
    return length < 8 ? insertionSort(array, comparefn) : merge(mergeSort(array.slice(0, middle), comparefn), mergeSort(array.slice(middle), comparefn), comparefn);
  };

  var insertionSort = function insertionSort(array, comparefn) {
    var length = array.length;
    var i = 1;
    var element, j;

    while (i < length) {
      j = i;
      element = array[i];

      while (j && comparefn(array[j - 1], element) > 0) {
        array[j] = array[--j];
      }

      if (j !== i++) array[j] = element;
    }

    return array;
  };

  var merge = function merge(left, right, comparefn) {
    var llength = left.length;
    var rlength = right.length;
    var lindex = 0;
    var rindex = 0;
    var result = [];

    while (lindex < llength || rindex < rlength) {
      if (lindex < llength && rindex < rlength) {
        result.push(comparefn(left[lindex], right[rindex]) <= 0 ? left[lindex++] : right[rindex++]);
      } else {
        result.push(lindex < llength ? left[lindex++] : right[rindex++]);
      }
    }

    return result;
  };

  var arraySort = mergeSort;

  var userAgent$4 = engineUserAgent;
  var firefox = userAgent$4.match(/firefox\/(\d+)/i);
  var engineFfVersion = !!firefox && +firefox[1];

  var UA = engineUserAgent;
  var engineIsIeOrEdge = /MSIE|Trident/.test(UA);

  var userAgent$3 = engineUserAgent;
  var webkit = userAgent$3.match(/AppleWebKit\/(\d+)\./);
  var engineWebkitVersion = !!webkit && +webkit[1];

  var $$2L = _export;
  var aFunction$O = aFunction$S;
  var toObject$k = toObject$u;
  var toLength$n = toLength$z;
  var toString$k = toString$n;
  var fails$y = fails$K;
  var internalSort$1 = arraySort;
  var arrayMethodIsStrict$1 = arrayMethodIsStrict$6;
  var FF$1 = engineFfVersion;
  var IE_OR_EDGE$1 = engineIsIeOrEdge;
  var V8$1 = engineV8Version;
  var WEBKIT$2 = engineWebkitVersion;
  var test = [];
  var nativeSort$1 = test.sort; // IE8-

  var FAILS_ON_UNDEFINED = fails$y(function () {
    test.sort(undefined);
  }); // V8 bug

  var FAILS_ON_NULL = fails$y(function () {
    test.sort(null);
  }); // Old WebKit

  var STRICT_METHOD$1 = arrayMethodIsStrict$1('sort');
  var STABLE_SORT$1 = !fails$y(function () {
    // feature detection can be too slow, so check engines versions
    if (V8$1) return V8$1 < 70;
    if (FF$1 && FF$1 > 3) return;
    if (IE_OR_EDGE$1) return true;
    if (WEBKIT$2) return WEBKIT$2 < 603;
    var result = '';
    var code, chr, value, index; // generate an array with more 512 elements (Chakra and old V8 fails only in this case)

    for (code = 65; code < 76; code++) {
      chr = String.fromCharCode(code);

      switch (code) {
        case 66:
        case 69:
        case 70:
        case 72:
          value = 3;
          break;

        case 68:
        case 71:
          value = 4;
          break;

        default:
          value = 2;
      }

      for (index = 0; index < 47; index++) {
        test.push({
          k: chr + index,
          v: value
        });
      }
    }

    test.sort(function (a, b) {
      return b.v - a.v;
    });

    for (index = 0; index < test.length; index++) {
      chr = test[index].k.charAt(0);
      if (result.charAt(result.length - 1) !== chr) result += chr;
    }

    return result !== 'DGBEFHACIJK';
  });
  var FORCED$k = FAILS_ON_UNDEFINED || !FAILS_ON_NULL || !STRICT_METHOD$1 || !STABLE_SORT$1;

  var getSortCompare$1 = function getSortCompare(comparefn) {
    return function (x, y) {
      if (y === undefined) return -1;
      if (x === undefined) return 1;
      if (comparefn !== undefined) return +comparefn(x, y) || 0;
      return toString$k(x) > toString$k(y) ? 1 : -1;
    };
  }; // `Array.prototype.sort` method
  // https://tc39.es/ecma262/#sec-array.prototype.sort


  $$2L({
    target: 'Array',
    proto: true,
    forced: FORCED$k
  }, {
    sort: function sort(comparefn) {
      if (comparefn !== undefined) aFunction$O(comparefn);
      var array = toObject$k(this);
      if (STABLE_SORT$1) return comparefn === undefined ? nativeSort$1.call(array) : nativeSort$1.call(array, comparefn);
      var items = [];
      var arrayLength = toLength$n(array.length);
      var itemsLength, index;

      for (index = 0; index < arrayLength; index++) {
        if (index in array) items.push(array[index]);
      }

      items = internalSort$1(items, getSortCompare$1(comparefn));
      itemsLength = items.length;
      index = 0;

      while (index < itemsLength) {
        array[index] = items[index++];
      }

      while (index < arrayLength) {
        delete array[index++];
      }

      return array;
    }
  });

  var getBuiltIn$o = getBuiltIn$u;
  var definePropertyModule$6 = objectDefineProperty;
  var wellKnownSymbol$n = wellKnownSymbol$E;
  var DESCRIPTORS$m = descriptors;
  var SPECIES$3 = wellKnownSymbol$n('species');

  var setSpecies$7 = function setSpecies(CONSTRUCTOR_NAME) {
    var Constructor = getBuiltIn$o(CONSTRUCTOR_NAME);
    var defineProperty = definePropertyModule$6.f;

    if (DESCRIPTORS$m && Constructor && !Constructor[SPECIES$3]) {
      defineProperty(Constructor, SPECIES$3, {
        configurable: true,
        get: function get() {
          return this;
        }
      });
    }
  };

  var setSpecies$6 = setSpecies$7; // `Array[@@species]` getter
  // https://tc39.es/ecma262/#sec-get-array-@@species

  setSpecies$6('Array');

  var $$2K = _export;
  var toAbsoluteIndex$3 = toAbsoluteIndex$6;
  var toInteger$a = toInteger$f;
  var toLength$m = toLength$z;
  var toObject$j = toObject$u;
  var arraySpeciesCreate$1 = arraySpeciesCreate$6;
  var createProperty$2 = createProperty$6;
  var arrayMethodHasSpeciesSupport = arrayMethodHasSpeciesSupport$5;
  var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('splice');
  var max$3 = Math.max;
  var min$6 = Math.min;
  var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
  var MAXIMUM_ALLOWED_LENGTH_EXCEEDED = 'Maximum allowed length exceeded'; // `Array.prototype.splice` method
  // https://tc39.es/ecma262/#sec-array.prototype.splice
  // with adding support of @@species

  $$2K({
    target: 'Array',
    proto: true,
    forced: !HAS_SPECIES_SUPPORT
  }, {
    splice: function splice(start, deleteCount
    /* , ...items */
    ) {
      var O = toObject$j(this);
      var len = toLength$m(O.length);
      var actualStart = toAbsoluteIndex$3(start, len);
      var argumentsLength = arguments.length;
      var insertCount, actualDeleteCount, A, k, from, to;

      if (argumentsLength === 0) {
        insertCount = actualDeleteCount = 0;
      } else if (argumentsLength === 1) {
        insertCount = 0;
        actualDeleteCount = len - actualStart;
      } else {
        insertCount = argumentsLength - 2;
        actualDeleteCount = min$6(max$3(toInteger$a(deleteCount), 0), len - actualStart);
      }

      if (len + insertCount - actualDeleteCount > MAX_SAFE_INTEGER) {
        throw TypeError(MAXIMUM_ALLOWED_LENGTH_EXCEEDED);
      }

      A = arraySpeciesCreate$1(O, actualDeleteCount);

      for (k = 0; k < actualDeleteCount; k++) {
        from = actualStart + k;
        if (from in O) createProperty$2(A, k, O[from]);
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

  // in popular engines, so it's moved to a separate module

  var addToUnscopables$a = addToUnscopables$d; // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables

  addToUnscopables$a('flat');

  // in popular engines, so it's moved to a separate module

  var addToUnscopables$9 = addToUnscopables$d; // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables

  addToUnscopables$9('flatMap');

  var arrayBufferNative = typeof ArrayBuffer !== 'undefined' && typeof DataView !== 'undefined';

  var redefine$a = redefine$e.exports;

  var redefineAll$9 = function redefineAll(target, src, options) {
    for (var key in src) {
      redefine$a(target, key, src[key], options);
    }

    return target;
  };

  var anInstance$b = function anInstance(it, Constructor, name) {
    if (!(it instanceof Constructor)) {
      throw TypeError('Incorrect ' + (name ? name + ' ' : '') + 'invocation');
    }

    return it;
  };

  var toInteger$9 = toInteger$f;
  var toLength$l = toLength$z; // `ToIndex` abstract operation
  // https://tc39.es/ecma262/#sec-toindex

  var toIndex$2 = function toIndex(it) {
    if (it === undefined) return 0;
    var number = toInteger$9(it);
    var length = toLength$l(number);
    if (number !== length) throw RangeError('Wrong length or index');
    return length;
  };

  var abs$2 = Math.abs;
  var pow$3 = Math.pow;
  var floor$6 = Math.floor;
  var log$3 = Math.log;
  var LN2$1 = Math.LN2;

  var pack = function pack(number, mantissaLength, bytes) {
    var buffer = new Array(bytes);
    var exponentLength = bytes * 8 - mantissaLength - 1;
    var eMax = (1 << exponentLength) - 1;
    var eBias = eMax >> 1;
    var rt = mantissaLength === 23 ? pow$3(2, -24) - pow$3(2, -77) : 0;
    var sign = number < 0 || number === 0 && 1 / number < 0 ? 1 : 0;
    var index = 0;
    var exponent, mantissa, c;
    number = abs$2(number); // eslint-disable-next-line no-self-compare -- NaN check

    if (number != number || number === Infinity) {
      // eslint-disable-next-line no-self-compare -- NaN check
      mantissa = number != number ? 1 : 0;
      exponent = eMax;
    } else {
      exponent = floor$6(log$3(number) / LN2$1);

      if (number * (c = pow$3(2, -exponent)) < 1) {
        exponent--;
        c *= 2;
      }

      if (exponent + eBias >= 1) {
        number += rt / c;
      } else {
        number += rt * pow$3(2, 1 - eBias);
      }

      if (number * c >= 2) {
        exponent++;
        c /= 2;
      }

      if (exponent + eBias >= eMax) {
        mantissa = 0;
        exponent = eMax;
      } else if (exponent + eBias >= 1) {
        mantissa = (number * c - 1) * pow$3(2, mantissaLength);
        exponent = exponent + eBias;
      } else {
        mantissa = number * pow$3(2, eBias - 1) * pow$3(2, mantissaLength);
        exponent = 0;
      }
    }

    for (; mantissaLength >= 8; buffer[index++] = mantissa & 255, mantissa /= 256, mantissaLength -= 8) {
    }

    exponent = exponent << mantissaLength | mantissa;
    exponentLength += mantissaLength;

    for (; exponentLength > 0; buffer[index++] = exponent & 255, exponent /= 256, exponentLength -= 8) {
    }

    buffer[--index] |= sign * 128;
    return buffer;
  };

  var unpack = function unpack(buffer, mantissaLength) {
    var bytes = buffer.length;
    var exponentLength = bytes * 8 - mantissaLength - 1;
    var eMax = (1 << exponentLength) - 1;
    var eBias = eMax >> 1;
    var nBits = exponentLength - 7;
    var index = bytes - 1;
    var sign = buffer[index--];
    var exponent = sign & 127;
    var mantissa;
    sign >>= 7;

    for (; nBits > 0; exponent = exponent * 256 + buffer[index], index--, nBits -= 8) {
    }

    mantissa = exponent & (1 << -nBits) - 1;
    exponent >>= -nBits;
    nBits += mantissaLength;

    for (; nBits > 0; mantissa = mantissa * 256 + buffer[index], index--, nBits -= 8) {
    }

    if (exponent === 0) {
      exponent = 1 - eBias;
    } else if (exponent === eMax) {
      return mantissa ? NaN : sign ? -Infinity : Infinity;
    } else {
      mantissa = mantissa + pow$3(2, mantissaLength);
      exponent = exponent - eBias;
    }

    return (sign ? -1 : 1) * mantissa * pow$3(2, exponent - mantissaLength);
  };

  var ieee754 = {
    pack: pack,
    unpack: unpack
  };

  var toObject$i = toObject$u;
  var toAbsoluteIndex$2 = toAbsoluteIndex$6;
  var toLength$k = toLength$z; // `Array.prototype.fill` method implementation
  // https://tc39.es/ecma262/#sec-array.prototype.fill

  var arrayFill$1 = function fill(value
  /* , start = 0, end = @length */
  ) {
    var O = toObject$i(this);
    var length = toLength$k(O.length);
    var argumentsLength = arguments.length;
    var index = toAbsoluteIndex$2(argumentsLength > 1 ? arguments[1] : undefined, length);
    var end = argumentsLength > 2 ? arguments[2] : undefined;
    var endPos = end === undefined ? length : toAbsoluteIndex$2(end, length);

    while (endPos > index) {
      O[index++] = value;
    }

    return O;
  };

  var global$v = global$K;
  var DESCRIPTORS$l = descriptors;
  var NATIVE_ARRAY_BUFFER$1 = arrayBufferNative;
  var createNonEnumerableProperty$e = createNonEnumerableProperty$m;
  var redefineAll$8 = redefineAll$9;
  var fails$x = fails$K;
  var anInstance$a = anInstance$b;
  var toInteger$8 = toInteger$f;
  var toLength$j = toLength$z;
  var toIndex$1 = toIndex$2;
  var IEEE754 = ieee754;
  var getPrototypeOf$a = objectGetPrototypeOf$1;
  var setPrototypeOf$4 = objectSetPrototypeOf$1;
  var getOwnPropertyNames$2 = objectGetOwnPropertyNames.f;
  var defineProperty$a = objectDefineProperty.f;
  var arrayFill = arrayFill$1;
  var setToStringTag$7 = setToStringTag$b;
  var InternalStateModule$f = internalState;
  var getInternalState$e = InternalStateModule$f.get;
  var setInternalState$f = InternalStateModule$f.set;
  var ARRAY_BUFFER$1 = 'ArrayBuffer';
  var DATA_VIEW = 'DataView';
  var PROTOTYPE = 'prototype';
  var WRONG_LENGTH$1 = 'Wrong length';
  var WRONG_INDEX = 'Wrong index';
  var NativeArrayBuffer$1 = global$v[ARRAY_BUFFER$1];
  var $ArrayBuffer = NativeArrayBuffer$1;
  var $DataView = global$v[DATA_VIEW];
  var $DataViewPrototype = $DataView && $DataView[PROTOTYPE];
  var ObjectPrototype$1 = Object.prototype;
  var RangeError$2 = global$v.RangeError;
  var packIEEE754 = IEEE754.pack;
  var unpackIEEE754 = IEEE754.unpack;

  var packInt8 = function packInt8(number) {
    return [number & 0xFF];
  };

  var packInt16 = function packInt16(number) {
    return [number & 0xFF, number >> 8 & 0xFF];
  };

  var packInt32 = function packInt32(number) {
    return [number & 0xFF, number >> 8 & 0xFF, number >> 16 & 0xFF, number >> 24 & 0xFF];
  };

  var unpackInt32 = function unpackInt32(buffer) {
    return buffer[3] << 24 | buffer[2] << 16 | buffer[1] << 8 | buffer[0];
  };

  var packFloat32 = function packFloat32(number) {
    return packIEEE754(number, 23, 4);
  };

  var packFloat64 = function packFloat64(number) {
    return packIEEE754(number, 52, 8);
  };

  var addGetter$1 = function addGetter(Constructor, key) {
    defineProperty$a(Constructor[PROTOTYPE], key, {
      get: function get() {
        return getInternalState$e(this)[key];
      }
    });
  };

  var get$1 = function get(view, count, index, isLittleEndian) {
    var intIndex = toIndex$1(index);
    var store = getInternalState$e(view);
    if (intIndex + count > store.byteLength) throw RangeError$2(WRONG_INDEX);
    var bytes = getInternalState$e(store.buffer).bytes;
    var start = intIndex + store.byteOffset;
    var pack = bytes.slice(start, start + count);
    return isLittleEndian ? pack : pack.reverse();
  };

  var set$2 = function set(view, count, index, conversion, value, isLittleEndian) {
    var intIndex = toIndex$1(index);
    var store = getInternalState$e(view);
    if (intIndex + count > store.byteLength) throw RangeError$2(WRONG_INDEX);
    var bytes = getInternalState$e(store.buffer).bytes;
    var start = intIndex + store.byteOffset;
    var pack = conversion(+value);

    for (var i = 0; i < count; i++) {
      bytes[start + i] = pack[isLittleEndian ? i : count - i - 1];
    }
  };

  if (!NATIVE_ARRAY_BUFFER$1) {
    $ArrayBuffer = function ArrayBuffer(length) {
      anInstance$a(this, $ArrayBuffer, ARRAY_BUFFER$1);
      var byteLength = toIndex$1(length);
      setInternalState$f(this, {
        bytes: arrayFill.call(new Array(byteLength), 0),
        byteLength: byteLength
      });
      if (!DESCRIPTORS$l) this.byteLength = byteLength;
    };

    $DataView = function DataView(buffer, byteOffset, byteLength) {
      anInstance$a(this, $DataView, DATA_VIEW);
      anInstance$a(buffer, $ArrayBuffer, DATA_VIEW);
      var bufferLength = getInternalState$e(buffer).byteLength;
      var offset = toInteger$8(byteOffset);
      if (offset < 0 || offset > bufferLength) throw RangeError$2('Wrong offset');
      byteLength = byteLength === undefined ? bufferLength - offset : toLength$j(byteLength);
      if (offset + byteLength > bufferLength) throw RangeError$2(WRONG_LENGTH$1);
      setInternalState$f(this, {
        buffer: buffer,
        byteLength: byteLength,
        byteOffset: offset
      });

      if (!DESCRIPTORS$l) {
        this.buffer = buffer;
        this.byteLength = byteLength;
        this.byteOffset = offset;
      }
    };

    if (DESCRIPTORS$l) {
      addGetter$1($ArrayBuffer, 'byteLength');
      addGetter$1($DataView, 'buffer');
      addGetter$1($DataView, 'byteLength');
      addGetter$1($DataView, 'byteOffset');
    }

    redefineAll$8($DataView[PROTOTYPE], {
      getInt8: function getInt8(byteOffset) {
        return get$1(this, 1, byteOffset)[0] << 24 >> 24;
      },
      getUint8: function getUint8(byteOffset) {
        return get$1(this, 1, byteOffset)[0];
      },
      getInt16: function getInt16(byteOffset
      /* , littleEndian */
      ) {
        var bytes = get$1(this, 2, byteOffset, arguments.length > 1 ? arguments[1] : undefined);
        return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
      },
      getUint16: function getUint16(byteOffset
      /* , littleEndian */
      ) {
        var bytes = get$1(this, 2, byteOffset, arguments.length > 1 ? arguments[1] : undefined);
        return bytes[1] << 8 | bytes[0];
      },
      getInt32: function getInt32(byteOffset
      /* , littleEndian */
      ) {
        return unpackInt32(get$1(this, 4, byteOffset, arguments.length > 1 ? arguments[1] : undefined));
      },
      getUint32: function getUint32(byteOffset
      /* , littleEndian */
      ) {
        return unpackInt32(get$1(this, 4, byteOffset, arguments.length > 1 ? arguments[1] : undefined)) >>> 0;
      },
      getFloat32: function getFloat32(byteOffset
      /* , littleEndian */
      ) {
        return unpackIEEE754(get$1(this, 4, byteOffset, arguments.length > 1 ? arguments[1] : undefined), 23);
      },
      getFloat64: function getFloat64(byteOffset
      /* , littleEndian */
      ) {
        return unpackIEEE754(get$1(this, 8, byteOffset, arguments.length > 1 ? arguments[1] : undefined), 52);
      },
      setInt8: function setInt8(byteOffset, value) {
        set$2(this, 1, byteOffset, packInt8, value);
      },
      setUint8: function setUint8(byteOffset, value) {
        set$2(this, 1, byteOffset, packInt8, value);
      },
      setInt16: function setInt16(byteOffset, value
      /* , littleEndian */
      ) {
        set$2(this, 2, byteOffset, packInt16, value, arguments.length > 2 ? arguments[2] : undefined);
      },
      setUint16: function setUint16(byteOffset, value
      /* , littleEndian */
      ) {
        set$2(this, 2, byteOffset, packInt16, value, arguments.length > 2 ? arguments[2] : undefined);
      },
      setInt32: function setInt32(byteOffset, value
      /* , littleEndian */
      ) {
        set$2(this, 4, byteOffset, packInt32, value, arguments.length > 2 ? arguments[2] : undefined);
      },
      setUint32: function setUint32(byteOffset, value
      /* , littleEndian */
      ) {
        set$2(this, 4, byteOffset, packInt32, value, arguments.length > 2 ? arguments[2] : undefined);
      },
      setFloat32: function setFloat32(byteOffset, value
      /* , littleEndian */
      ) {
        set$2(this, 4, byteOffset, packFloat32, value, arguments.length > 2 ? arguments[2] : undefined);
      },
      setFloat64: function setFloat64(byteOffset, value
      /* , littleEndian */
      ) {
        set$2(this, 8, byteOffset, packFloat64, value, arguments.length > 2 ? arguments[2] : undefined);
      }
    });
  } else {
    /* eslint-disable no-new -- required for testing */
    if (!fails$x(function () {
      NativeArrayBuffer$1(1);
    }) || !fails$x(function () {
      new NativeArrayBuffer$1(-1);
    }) || fails$x(function () {
      new NativeArrayBuffer$1();
      new NativeArrayBuffer$1(1.5);
      new NativeArrayBuffer$1(NaN);
      return NativeArrayBuffer$1.name != ARRAY_BUFFER$1;
    })) {
      /* eslint-enable no-new -- required for testing */
      $ArrayBuffer = function ArrayBuffer(length) {
        anInstance$a(this, $ArrayBuffer);
        return new NativeArrayBuffer$1(toIndex$1(length));
      };

      var ArrayBufferPrototype = $ArrayBuffer[PROTOTYPE] = NativeArrayBuffer$1[PROTOTYPE];

      for (var keys$1 = getOwnPropertyNames$2(NativeArrayBuffer$1), j = 0, key; keys$1.length > j;) {
        if (!((key = keys$1[j++]) in $ArrayBuffer)) {
          createNonEnumerableProperty$e($ArrayBuffer, key, NativeArrayBuffer$1[key]);
        }
      }

      ArrayBufferPrototype.constructor = $ArrayBuffer;
    } // WebKit bug - the same parent prototype for typed arrays and data view


    if (setPrototypeOf$4 && getPrototypeOf$a($DataViewPrototype) !== ObjectPrototype$1) {
      setPrototypeOf$4($DataViewPrototype, ObjectPrototype$1);
    } // iOS Safari 7.x bug


    var testView = new $DataView(new $ArrayBuffer(2));
    var $setInt8 = $DataViewPrototype.setInt8;
    testView.setInt8(0, 2147483648);
    testView.setInt8(1, 2147483649);
    if (testView.getInt8(0) || !testView.getInt8(1)) redefineAll$8($DataViewPrototype, {
      setInt8: function setInt8(byteOffset, value) {
        $setInt8.call(this, byteOffset, value << 24 >> 24);
      },
      setUint8: function setUint8(byteOffset, value) {
        $setInt8.call(this, byteOffset, value << 24 >> 24);
      }
    }, {
      unsafe: true
    });
  }

  setToStringTag$7($ArrayBuffer, ARRAY_BUFFER$1);
  setToStringTag$7($DataView, DATA_VIEW);
  var arrayBuffer = {
    ArrayBuffer: $ArrayBuffer,
    DataView: $DataView
  };

  var $$2J = _export;
  var global$u = global$K;
  var arrayBufferModule = arrayBuffer;
  var setSpecies$5 = setSpecies$7;
  var ARRAY_BUFFER = 'ArrayBuffer';
  var ArrayBuffer$4 = arrayBufferModule[ARRAY_BUFFER];
  var NativeArrayBuffer = global$u[ARRAY_BUFFER]; // `ArrayBuffer` constructor
  // https://tc39.es/ecma262/#sec-arraybuffer-constructor

  $$2J({
    global: true,
    forced: NativeArrayBuffer !== ArrayBuffer$4
  }, {
    ArrayBuffer: ArrayBuffer$4
  });
  setSpecies$5(ARRAY_BUFFER);

  var anObject$1p = anObject$1z;
  var aFunction$N = aFunction$S;
  var wellKnownSymbol$m = wellKnownSymbol$E;
  var SPECIES$2 = wellKnownSymbol$m('species'); // `SpeciesConstructor` abstract operation
  // https://tc39.es/ecma262/#sec-speciesconstructor

  var speciesConstructor$f = function speciesConstructor(O, defaultConstructor) {
    var C = anObject$1p(O).constructor;
    var S;
    return C === undefined || (S = anObject$1p(C)[SPECIES$2]) == undefined ? defaultConstructor : aFunction$N(S);
  };

  var $$2I = _export;
  var fails$w = fails$K;
  var ArrayBufferModule$1 = arrayBuffer;
  var anObject$1o = anObject$1z;
  var toAbsoluteIndex$1 = toAbsoluteIndex$6;
  var toLength$i = toLength$z;
  var speciesConstructor$e = speciesConstructor$f;
  var ArrayBuffer$3 = ArrayBufferModule$1.ArrayBuffer;
  var DataView$2 = ArrayBufferModule$1.DataView;
  var nativeArrayBufferSlice = ArrayBuffer$3.prototype.slice;
  var INCORRECT_SLICE = fails$w(function () {
    return !new ArrayBuffer$3(2).slice(1, undefined).byteLength;
  }); // `ArrayBuffer.prototype.slice` method
  // https://tc39.es/ecma262/#sec-arraybuffer.prototype.slice

  $$2I({
    target: 'ArrayBuffer',
    proto: true,
    unsafe: true,
    forced: INCORRECT_SLICE
  }, {
    slice: function slice(start, end) {
      if (nativeArrayBufferSlice !== undefined && end === undefined) {
        return nativeArrayBufferSlice.call(anObject$1o(this), start); // FF fix
      }

      var length = anObject$1o(this).byteLength;
      var first = toAbsoluteIndex$1(start, length);
      var fin = toAbsoluteIndex$1(end === undefined ? length : end, length);
      var result = new (speciesConstructor$e(this, ArrayBuffer$3))(toLength$i(fin - first));
      var viewSource = new DataView$2(this);
      var viewTarget = new DataView$2(result);
      var index = 0;

      while (first < fin) {
        viewTarget.setUint8(index++, viewSource.getUint8(first++));
      }

      return result;
    }
  });

  var $$2H = _export;
  var fails$v = fails$K;
  var toObject$h = toObject$u;
  var toPrimitive = toPrimitive$2;
  var FORCED$j = fails$v(function () {
    return new Date(NaN).toJSON() !== null || Date.prototype.toJSON.call({
      toISOString: function toISOString() {
        return 1;
      }
    }) !== 1;
  }); // `Date.prototype.toJSON` method
  // https://tc39.es/ecma262/#sec-date.prototype.tojson

  $$2H({
    target: 'Date',
    proto: true,
    forced: FORCED$j
  }, {
    // eslint-disable-next-line no-unused-vars -- required for `.length`
    toJSON: function toJSON(key) {
      var O = toObject$h(this);
      var pv = toPrimitive(O, 'number');
      return typeof pv == 'number' && !isFinite(pv) ? null : O.toISOString();
    }
  });

  var anObject$1n = anObject$1z;
  var ordinaryToPrimitive = ordinaryToPrimitive$2; // `Date.prototype[@@toPrimitive](hint)` method implementation
  // https://tc39.es/ecma262/#sec-date.prototype-@@toprimitive

  var dateToPrimitive$1 = function dateToPrimitive(hint) {
    anObject$1n(this);
    if (hint === 'string' || hint === 'default') hint = 'string';else if (hint !== 'number') throw TypeError('Incorrect hint');
    return ordinaryToPrimitive(this, hint);
  };

  var createNonEnumerableProperty$d = createNonEnumerableProperty$m;
  var dateToPrimitive = dateToPrimitive$1;
  var wellKnownSymbol$l = wellKnownSymbol$E;
  var TO_PRIMITIVE = wellKnownSymbol$l('toPrimitive');
  var DatePrototype = Date.prototype; // `Date.prototype[@@toPrimitive]` method
  // https://tc39.es/ecma262/#sec-date.prototype-@@toprimitive

  if (!(TO_PRIMITIVE in DatePrototype)) {
    createNonEnumerableProperty$d(DatePrototype, TO_PRIMITIVE, dateToPrimitive);
  }

  var isObject$k = isObject$w;
  var definePropertyModule$5 = objectDefineProperty;
  var getPrototypeOf$9 = objectGetPrototypeOf$1;
  var wellKnownSymbol$k = wellKnownSymbol$E;
  var HAS_INSTANCE = wellKnownSymbol$k('hasInstance');
  var FunctionPrototype = Function.prototype; // `Function.prototype[@@hasInstance]` method
  // https://tc39.es/ecma262/#sec-function.prototype-@@hasinstance

  if (!(HAS_INSTANCE in FunctionPrototype)) {
    definePropertyModule$5.f(FunctionPrototype, HAS_INSTANCE, {
      value: function value(O) {
        if (typeof this != 'function' || !isObject$k(O)) return false;
        if (!isObject$k(this.prototype)) return O instanceof this; // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:

        while (O = getPrototypeOf$9(O)) {
          if (this.prototype === O) return true;
        }

        return false;
      }
    });
  }

  var $$2G = _export;
  var global$t = global$K; // `globalThis` object
  // https://tc39.es/ecma262/#sec-globalthis

  $$2G({
    global: true
  }, {
    globalThis: global$t
  });

  var $$2F = _export;
  var getBuiltIn$n = getBuiltIn$u;
  var fails$u = fails$K;
  var $stringify = getBuiltIn$n('JSON', 'stringify');
  var re = /[\uD800-\uDFFF]/g;
  var low = /^[\uD800-\uDBFF]$/;
  var hi = /^[\uDC00-\uDFFF]$/;

  var fix = function fix(match, offset, string) {
    var prev = string.charAt(offset - 1);
    var next = string.charAt(offset + 1);

    if (low.test(match) && !hi.test(next) || hi.test(match) && !low.test(prev)) {
      return '\\u' + match.charCodeAt(0).toString(16);
    }

    return match;
  };

  var FORCED$i = fails$u(function () {
    return $stringify('\uDF06\uD834') !== '"\\udf06\\ud834"' || $stringify('\uDEAD') !== '"\\udead"';
  });

  if ($stringify) {
    // `JSON.stringify` method
    // https://tc39.es/ecma262/#sec-json.stringify
    // https://github.com/tc39/proposal-well-formed-stringify
    $$2F({
      target: 'JSON',
      stat: true,
      forced: FORCED$i
    }, {
      // eslint-disable-next-line no-unused-vars -- required for `.length`
      stringify: function stringify(it, replacer, space) {
        var result = $stringify.apply(null, arguments);
        return typeof result == 'string' ? result.replace(re, fix) : result;
      }
    });
  }

  var global$s = global$K;
  var setToStringTag$6 = setToStringTag$b; // JSON[@@toStringTag] property
  // https://tc39.es/ecma262/#sec-json-@@tostringtag

  setToStringTag$6(global$s.JSON, 'JSON', true);

  var internalMetadata = {exports: {}};

  var fails$t = fails$K;
  var freezing = !fails$t(function () {
    // eslint-disable-next-line es/no-object-isextensible, es/no-object-preventextensions -- required for testing
    return Object.isExtensible(Object.preventExtensions({}));
  });

  var $$2E = _export;
  var hiddenKeys = hiddenKeys$6;
  var isObject$j = isObject$w;
  var has$a = has$n;
  var defineProperty$9 = objectDefineProperty.f;
  var getOwnPropertyNamesModule = objectGetOwnPropertyNames;
  var getOwnPropertyNamesExternalModule = objectGetOwnPropertyNamesExternal;
  var uid$1 = uid$5;
  var FREEZING$1 = freezing;
  var REQUIRED = false;
  var METADATA = uid$1('meta');
  var id$1 = 0; // eslint-disable-next-line es/no-object-isextensible -- safe

  var isExtensible$1 = Object.isExtensible || function () {
    return true;
  };

  var setMetadata = function setMetadata(it) {
    defineProperty$9(it, METADATA, {
      value: {
        objectID: 'O' + id$1++,
        // object ID
        weakData: {} // weak collections IDs

      }
    });
  };

  var fastKey$1 = function fastKey(it, create) {
    // return a primitive with prefix
    if (!isObject$j(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;

    if (!has$a(it, METADATA)) {
      // can't set metadata to uncaught frozen object
      if (!isExtensible$1(it)) return 'F'; // not necessary to add metadata

      if (!create) return 'E'; // add missing metadata

      setMetadata(it); // return object ID
    }

    return it[METADATA].objectID;
  };

  var getWeakData$1 = function getWeakData(it, create) {
    if (!has$a(it, METADATA)) {
      // can't set metadata to uncaught frozen object
      if (!isExtensible$1(it)) return true; // not necessary to add metadata

      if (!create) return false; // add missing metadata

      setMetadata(it); // return the store of weak collections IDs
    }

    return it[METADATA].weakData;
  }; // add metadata on freeze-family methods calling


  var onFreeze = function onFreeze(it) {
    if (FREEZING$1 && REQUIRED && isExtensible$1(it) && !has$a(it, METADATA)) setMetadata(it);
    return it;
  };

  var enable = function enable() {
    meta.enable = function () {
      /* empty */
    };

    REQUIRED = true;
    var getOwnPropertyNames = getOwnPropertyNamesModule.f;
    var splice = [].splice;
    var test = {};
    test[METADATA] = 1; // prevent exposing of metadata key

    if (getOwnPropertyNames(test).length) {
      getOwnPropertyNamesModule.f = function (it) {
        var result = getOwnPropertyNames(it);

        for (var i = 0, length = result.length; i < length; i++) {
          if (result[i] === METADATA) {
            splice.call(result, i, 1);
            break;
          }
        }

        return result;
      };

      $$2E({
        target: 'Object',
        stat: true,
        forced: true
      }, {
        getOwnPropertyNames: getOwnPropertyNamesExternalModule.f
      });
    }
  };

  var meta = internalMetadata.exports = {
    enable: enable,
    fastKey: fastKey$1,
    getWeakData: getWeakData$1,
    onFreeze: onFreeze
  };
  hiddenKeys[METADATA] = true;

  var isObject$i = isObject$w;
  var setPrototypeOf$3 = objectSetPrototypeOf$1; // makes subclassing work correct for wrapped built-ins

  var inheritIfRequired$3 = function inheritIfRequired($this, dummy, Wrapper) {
    var NewTarget, NewTargetPrototype;
    if ( // it can work only with native `setPrototypeOf`
    setPrototypeOf$3 && // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    typeof (NewTarget = dummy.constructor) == 'function' && NewTarget !== Wrapper && isObject$i(NewTargetPrototype = NewTarget.prototype) && NewTargetPrototype !== Wrapper.prototype) setPrototypeOf$3($this, NewTargetPrototype);
    return $this;
  };

  var $$2D = _export;
  var global$r = global$K;
  var isForced$2 = isForced_1;
  var redefine$9 = redefine$e.exports;
  var InternalMetadataModule$1 = internalMetadata.exports;
  var iterate$G = iterate$I;
  var anInstance$9 = anInstance$b;
  var isObject$h = isObject$w;
  var fails$s = fails$K;
  var checkCorrectnessOfIteration$2 = checkCorrectnessOfIteration$4;
  var setToStringTag$5 = setToStringTag$b;
  var inheritIfRequired$2 = inheritIfRequired$3;

  var collection$4 = function collection(CONSTRUCTOR_NAME, wrapper, common) {
    var IS_MAP = CONSTRUCTOR_NAME.indexOf('Map') !== -1;
    var IS_WEAK = CONSTRUCTOR_NAME.indexOf('Weak') !== -1;
    var ADDER = IS_MAP ? 'set' : 'add';
    var NativeConstructor = global$r[CONSTRUCTOR_NAME];
    var NativePrototype = NativeConstructor && NativeConstructor.prototype;
    var Constructor = NativeConstructor;
    var exported = {};

    var fixMethod = function fixMethod(KEY) {
      var nativeMethod = NativePrototype[KEY];
      redefine$9(NativePrototype, KEY, KEY == 'add' ? function add(value) {
        nativeMethod.call(this, value === 0 ? 0 : value);
        return this;
      } : KEY == 'delete' ? function (key) {
        return IS_WEAK && !isObject$h(key) ? false : nativeMethod.call(this, key === 0 ? 0 : key);
      } : KEY == 'get' ? function get(key) {
        return IS_WEAK && !isObject$h(key) ? undefined : nativeMethod.call(this, key === 0 ? 0 : key);
      } : KEY == 'has' ? function has(key) {
        return IS_WEAK && !isObject$h(key) ? false : nativeMethod.call(this, key === 0 ? 0 : key);
      } : function set(key, value) {
        nativeMethod.call(this, key === 0 ? 0 : key, value);
        return this;
      });
    };

    var REPLACE = isForced$2(CONSTRUCTOR_NAME, typeof NativeConstructor != 'function' || !(IS_WEAK || NativePrototype.forEach && !fails$s(function () {
      new NativeConstructor().entries().next();
    })));

    if (REPLACE) {
      // create collection constructor
      Constructor = common.getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER);
      InternalMetadataModule$1.enable();
    } else if (isForced$2(CONSTRUCTOR_NAME, true)) {
      var instance = new Constructor(); // early implementations not supports chaining

      var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance; // V8 ~ Chromium 40- weak-collections throws on primitives, but should return false

      var THROWS_ON_PRIMITIVES = fails$s(function () {
        instance.has(1);
      }); // most early implementations doesn't supports iterables, most modern - not close it correctly
      // eslint-disable-next-line no-new -- required for testing

      var ACCEPT_ITERABLES = checkCorrectnessOfIteration$2(function (iterable) {
        new NativeConstructor(iterable);
      }); // for early implementations -0 and +0 not the same

      var BUGGY_ZERO = !IS_WEAK && fails$s(function () {
        // V8 ~ Chromium 42- fails only with 5+ elements
        var $instance = new NativeConstructor();
        var index = 5;

        while (index--) {
          $instance[ADDER](index, index);
        }

        return !$instance.has(-0);
      });

      if (!ACCEPT_ITERABLES) {
        Constructor = wrapper(function (dummy, iterable) {
          anInstance$9(dummy, Constructor, CONSTRUCTOR_NAME);
          var that = inheritIfRequired$2(new NativeConstructor(), dummy, Constructor);
          if (iterable != undefined) iterate$G(iterable, that[ADDER], {
            that: that,
            AS_ENTRIES: IS_MAP
          });
          return that;
        });
        Constructor.prototype = NativePrototype;
        NativePrototype.constructor = Constructor;
      }

      if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
        fixMethod('delete');
        fixMethod('has');
        IS_MAP && fixMethod('get');
      }

      if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER); // weak collections should not contains .clear method

      if (IS_WEAK && NativePrototype.clear) delete NativePrototype.clear;
    }

    exported[CONSTRUCTOR_NAME] = Constructor;
    $$2D({
      global: true,
      forced: Constructor != NativeConstructor
    }, exported);
    setToStringTag$5(Constructor, CONSTRUCTOR_NAME);
    if (!IS_WEAK) common.setStrong(Constructor, CONSTRUCTOR_NAME, IS_MAP);
    return Constructor;
  };

  var defineProperty$8 = objectDefineProperty.f;
  var create$8 = objectCreate$1;
  var redefineAll$7 = redefineAll$9;
  var bind$k = functionBindContext;
  var anInstance$8 = anInstance$b;
  var iterate$F = iterate$I;
  var defineIterator$1 = defineIterator$3;
  var setSpecies$4 = setSpecies$7;
  var DESCRIPTORS$k = descriptors;
  var fastKey = internalMetadata.exports.fastKey;
  var InternalStateModule$e = internalState;
  var setInternalState$e = InternalStateModule$e.set;
  var internalStateGetterFor$1 = InternalStateModule$e.getterFor;
  var collectionStrong$2 = {
    getConstructor: function getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
      var C = wrapper(function (that, iterable) {
        anInstance$8(that, C, CONSTRUCTOR_NAME);
        setInternalState$e(that, {
          type: CONSTRUCTOR_NAME,
          index: create$8(null),
          first: undefined,
          last: undefined,
          size: 0
        });
        if (!DESCRIPTORS$k) that.size = 0;
        if (iterable != undefined) iterate$F(iterable, that[ADDER], {
          that: that,
          AS_ENTRIES: IS_MAP
        });
      });
      var getInternalState = internalStateGetterFor$1(CONSTRUCTOR_NAME);

      var define = function define(that, key, value) {
        var state = getInternalState(that);
        var entry = getEntry(that, key);
        var previous, index; // change existing entry

        if (entry) {
          entry.value = value; // create new entry
        } else {
          state.last = entry = {
            index: index = fastKey(key, true),
            key: key,
            value: value,
            previous: previous = state.last,
            next: undefined,
            removed: false
          };
          if (!state.first) state.first = entry;
          if (previous) previous.next = entry;
          if (DESCRIPTORS$k) state.size++;else that.size++; // add to index

          if (index !== 'F') state.index[index] = entry;
        }

        return that;
      };

      var getEntry = function getEntry(that, key) {
        var state = getInternalState(that); // fast case

        var index = fastKey(key);
        var entry;
        if (index !== 'F') return state.index[index]; // frozen object case

        for (entry = state.first; entry; entry = entry.next) {
          if (entry.key == key) return entry;
        }
      };

      redefineAll$7(C.prototype, {
        // `{ Map, Set }.prototype.clear()` methods
        // https://tc39.es/ecma262/#sec-map.prototype.clear
        // https://tc39.es/ecma262/#sec-set.prototype.clear
        clear: function clear() {
          var that = this;
          var state = getInternalState(that);
          var data = state.index;
          var entry = state.first;

          while (entry) {
            entry.removed = true;
            if (entry.previous) entry.previous = entry.previous.next = undefined;
            delete data[entry.index];
            entry = entry.next;
          }

          state.first = state.last = undefined;
          if (DESCRIPTORS$k) state.size = 0;else that.size = 0;
        },
        // `{ Map, Set }.prototype.delete(key)` methods
        // https://tc39.es/ecma262/#sec-map.prototype.delete
        // https://tc39.es/ecma262/#sec-set.prototype.delete
        'delete': function _delete(key) {
          var that = this;
          var state = getInternalState(that);
          var entry = getEntry(that, key);

          if (entry) {
            var next = entry.next;
            var prev = entry.previous;
            delete state.index[entry.index];
            entry.removed = true;
            if (prev) prev.next = next;
            if (next) next.previous = prev;
            if (state.first == entry) state.first = next;
            if (state.last == entry) state.last = prev;
            if (DESCRIPTORS$k) state.size--;else that.size--;
          }

          return !!entry;
        },
        // `{ Map, Set }.prototype.forEach(callbackfn, thisArg = undefined)` methods
        // https://tc39.es/ecma262/#sec-map.prototype.foreach
        // https://tc39.es/ecma262/#sec-set.prototype.foreach
        forEach: function forEach(callbackfn
        /* , that = undefined */
        ) {
          var state = getInternalState(this);
          var boundFunction = bind$k(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
          var entry;

          while (entry = entry ? entry.next : state.first) {
            boundFunction(entry.value, entry.key, this); // revert to the last existing entry

            while (entry && entry.removed) {
              entry = entry.previous;
            }
          }
        },
        // `{ Map, Set}.prototype.has(key)` methods
        // https://tc39.es/ecma262/#sec-map.prototype.has
        // https://tc39.es/ecma262/#sec-set.prototype.has
        has: function has(key) {
          return !!getEntry(this, key);
        }
      });
      redefineAll$7(C.prototype, IS_MAP ? {
        // `Map.prototype.get(key)` method
        // https://tc39.es/ecma262/#sec-map.prototype.get
        get: function get(key) {
          var entry = getEntry(this, key);
          return entry && entry.value;
        },
        // `Map.prototype.set(key, value)` method
        // https://tc39.es/ecma262/#sec-map.prototype.set
        set: function set(key, value) {
          return define(this, key === 0 ? 0 : key, value);
        }
      } : {
        // `Set.prototype.add(value)` method
        // https://tc39.es/ecma262/#sec-set.prototype.add
        add: function add(value) {
          return define(this, value = value === 0 ? 0 : value, value);
        }
      });
      if (DESCRIPTORS$k) defineProperty$8(C.prototype, 'size', {
        get: function get() {
          return getInternalState(this).size;
        }
      });
      return C;
    },
    setStrong: function setStrong(C, CONSTRUCTOR_NAME, IS_MAP) {
      var ITERATOR_NAME = CONSTRUCTOR_NAME + ' Iterator';
      var getInternalCollectionState = internalStateGetterFor$1(CONSTRUCTOR_NAME);
      var getInternalIteratorState = internalStateGetterFor$1(ITERATOR_NAME); // `{ Map, Set }.prototype.{ keys, values, entries, @@iterator }()` methods
      // https://tc39.es/ecma262/#sec-map.prototype.entries
      // https://tc39.es/ecma262/#sec-map.prototype.keys
      // https://tc39.es/ecma262/#sec-map.prototype.values
      // https://tc39.es/ecma262/#sec-map.prototype-@@iterator
      // https://tc39.es/ecma262/#sec-set.prototype.entries
      // https://tc39.es/ecma262/#sec-set.prototype.keys
      // https://tc39.es/ecma262/#sec-set.prototype.values
      // https://tc39.es/ecma262/#sec-set.prototype-@@iterator

      defineIterator$1(C, CONSTRUCTOR_NAME, function (iterated, kind) {
        setInternalState$e(this, {
          type: ITERATOR_NAME,
          target: iterated,
          state: getInternalCollectionState(iterated),
          kind: kind,
          last: undefined
        });
      }, function () {
        var state = getInternalIteratorState(this);
        var kind = state.kind;
        var entry = state.last; // revert to the last existing entry

        while (entry && entry.removed) {
          entry = entry.previous;
        } // get next entry


        if (!state.target || !(state.last = entry = entry ? entry.next : state.state.first)) {
          // or finish the iteration
          state.target = undefined;
          return {
            value: undefined,
            done: true
          };
        } // return step by kind


        if (kind == 'keys') return {
          value: entry.key,
          done: false
        };
        if (kind == 'values') return {
          value: entry.value,
          done: false
        };
        return {
          value: [entry.key, entry.value],
          done: false
        };
      }, IS_MAP ? 'entries' : 'values', !IS_MAP, true); // `{ Map, Set }.prototype[@@species]` accessors
      // https://tc39.es/ecma262/#sec-get-map-@@species
      // https://tc39.es/ecma262/#sec-get-set-@@species

      setSpecies$4(CONSTRUCTOR_NAME);
    }
  };

  var collection$3 = collection$4;
  var collectionStrong$1 = collectionStrong$2; // `Map` constructor
  // https://tc39.es/ecma262/#sec-map-objects

  var es_map = collection$3('Map', function (init) {
    return function Map() {
      return init(this, arguments.length ? arguments[0] : undefined);
    };
  }, collectionStrong$1);

  var log$2 = Math.log; // `Math.log1p` method implementation
  // https://tc39.es/ecma262/#sec-math.log1p
  // eslint-disable-next-line es/no-math-log1p -- safe

  var mathLog1p = Math.log1p || function log1p(x) {
    return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : log$2(1 + x);
  };

  var $$2C = _export;
  var log1p = mathLog1p; // eslint-disable-next-line es/no-math-acosh -- required for testing

  var $acosh = Math.acosh;
  var log$1 = Math.log;
  var sqrt$1 = Math.sqrt;
  var LN2 = Math.LN2;
  var FORCED$h = !$acosh // V8 bug: https://code.google.com/p/v8/issues/detail?id=3509
  || Math.floor($acosh(Number.MAX_VALUE)) != 710 // Tor Browser bug: Math.acosh(Infinity) -> NaN
  || $acosh(Infinity) != Infinity; // `Math.acosh` method
  // https://tc39.es/ecma262/#sec-math.acosh

  $$2C({
    target: 'Math',
    stat: true,
    forced: FORCED$h
  }, {
    acosh: function acosh(x) {
      return (x = +x) < 1 ? NaN : x > 94906265.62425156 ? log$1(x) + LN2 : log1p(x - 1 + sqrt$1(x - 1) * sqrt$1(x + 1));
    }
  });

  var $$2B = _export; // eslint-disable-next-line es/no-math-hypot -- required for testing

  var $hypot = Math.hypot;
  var abs$1 = Math.abs;
  var sqrt = Math.sqrt; // Chrome 77 bug
  // https://bugs.chromium.org/p/v8/issues/detail?id=9546

  var BUGGY = !!$hypot && $hypot(Infinity, NaN) !== Infinity; // `Math.hypot` method
  // https://tc39.es/ecma262/#sec-math.hypot

  $$2B({
    target: 'Math',
    stat: true,
    forced: BUGGY
  }, {
    // eslint-disable-next-line no-unused-vars -- required for `.length`
    hypot: function hypot(value1, value2) {
      var sum = 0;
      var i = 0;
      var aLen = arguments.length;
      var larg = 0;
      var arg, div;

      while (i < aLen) {
        arg = abs$1(arguments[i++]);

        if (larg < arg) {
          div = larg / arg;
          sum = sum * div * div + 1;
          larg = arg;
        } else if (arg > 0) {
          div = arg / larg;
          sum += div * div;
        } else sum += arg;
      }

      return larg === Infinity ? Infinity : larg * sqrt(sum);
    }
  });

  var setToStringTag$4 = setToStringTag$b; // Math[@@toStringTag] property
  // https://tc39.es/ecma262/#sec-math-@@tostringtag

  setToStringTag$4(Math, 'Math', true);

  var whitespaces$4 = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002' + '\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

  var requireObjectCoercible$d = requireObjectCoercible$g;
  var toString$j = toString$n;
  var whitespaces$3 = whitespaces$4;
  var whitespace = '[' + whitespaces$3 + ']';
  var ltrim = RegExp('^' + whitespace + whitespace + '*');
  var rtrim = RegExp(whitespace + whitespace + '*$'); // `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation

  var createMethod$5 = function createMethod(TYPE) {
    return function ($this) {
      var string = toString$j(requireObjectCoercible$d($this));
      if (TYPE & 1) string = string.replace(ltrim, '');
      if (TYPE & 2) string = string.replace(rtrim, '');
      return string;
    };
  };

  var stringTrim = {
    // `String.prototype.{ trimLeft, trimStart }` methods
    // https://tc39.es/ecma262/#sec-string.prototype.trimstart
    start: createMethod$5(1),
    // `String.prototype.{ trimRight, trimEnd }` methods
    // https://tc39.es/ecma262/#sec-string.prototype.trimend
    end: createMethod$5(2),
    // `String.prototype.trim` method
    // https://tc39.es/ecma262/#sec-string.prototype.trim
    trim: createMethod$5(3)
  };

  var global$q = global$K;
  var toString$i = toString$n;
  var trim$1 = stringTrim.trim;
  var whitespaces$2 = whitespaces$4;
  var $parseFloat = global$q.parseFloat;
  var FORCED$g = 1 / $parseFloat(whitespaces$2 + '-0') !== -Infinity; // `parseFloat` method
  // https://tc39.es/ecma262/#sec-parsefloat-string

  var numberParseFloat = FORCED$g ? function parseFloat(string) {
    var trimmedString = trim$1(toString$i(string));
    var result = $parseFloat(trimmedString);
    return result === 0 && trimmedString.charAt(0) == '-' ? -0 : result;
  } : $parseFloat;

  var $$2A = _export;
  var parseFloat = numberParseFloat; // `Number.parseFloat` method
  // https://tc39.es/ecma262/#sec-number.parseFloat
  // eslint-disable-next-line es/no-number-parsefloat -- required for testing

  $$2A({
    target: 'Number',
    stat: true,
    forced: Number.parseFloat != parseFloat
  }, {
    parseFloat: parseFloat
  });

  var classof$7 = classofRaw$1; // `thisNumberValue` abstract operation
  // https://tc39.es/ecma262/#sec-thisnumbervalue

  var thisNumberValue$1 = function thisNumberValue(value) {
    if (typeof value != 'number' && classof$7(value) != 'Number') {
      throw TypeError('Incorrect invocation');
    }

    return +value;
  };

  var toInteger$7 = toInteger$f;
  var toString$h = toString$n;
  var requireObjectCoercible$c = requireObjectCoercible$g; // `String.prototype.repeat` method implementation
  // https://tc39.es/ecma262/#sec-string.prototype.repeat

  var stringRepeat = function repeat(count) {
    var str = toString$h(requireObjectCoercible$c(this));
    var result = '';
    var n = toInteger$7(count);
    if (n < 0 || n == Infinity) throw RangeError('Wrong number of repetitions');

    for (; n > 0; (n >>>= 1) && (str += str)) {
      if (n & 1) result += str;
    }

    return result;
  };

  var $$2z = _export;
  var toInteger$6 = toInteger$f;
  var thisNumberValue = thisNumberValue$1;
  var repeat$1 = stringRepeat;
  var fails$r = fails$K;
  var nativeToFixed = 1.0.toFixed;
  var floor$5 = Math.floor;

  var pow$2 = function pow(x, n, acc) {
    return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
  };

  var log = function log(x) {
    var n = 0;
    var x2 = x;

    while (x2 >= 4096) {
      n += 12;
      x2 /= 4096;
    }

    while (x2 >= 2) {
      n += 1;
      x2 /= 2;
    }

    return n;
  };

  var multiply = function multiply(data, n, c) {
    var index = -1;
    var c2 = c;

    while (++index < 6) {
      c2 += n * data[index];
      data[index] = c2 % 1e7;
      c2 = floor$5(c2 / 1e7);
    }
  };

  var divide = function divide(data, n) {
    var index = 6;
    var c = 0;

    while (--index >= 0) {
      c += data[index];
      data[index] = floor$5(c / n);
      c = c % n * 1e7;
    }
  };

  var dataToString = function dataToString(data) {
    var index = 6;
    var s = '';

    while (--index >= 0) {
      if (s !== '' || index === 0 || data[index] !== 0) {
        var t = String(data[index]);
        s = s === '' ? t : s + repeat$1.call('0', 7 - t.length) + t;
      }
    }

    return s;
  };

  var FORCED$f = nativeToFixed && (0.00008.toFixed(3) !== '0.000' || 0.9.toFixed(0) !== '1' || 1.255.toFixed(2) !== '1.25' || 1000000000000000128.0.toFixed(0) !== '1000000000000000128') || !fails$r(function () {
    // V8 ~ Android 4.3-
    nativeToFixed.call({});
  }); // `Number.prototype.toFixed` method
  // https://tc39.es/ecma262/#sec-number.prototype.tofixed

  $$2z({
    target: 'Number',
    proto: true,
    forced: FORCED$f
  }, {
    toFixed: function toFixed(fractionDigits) {
      var number = thisNumberValue(this);
      var fractDigits = toInteger$6(fractionDigits);
      var data = [0, 0, 0, 0, 0, 0];
      var sign = '';
      var result = '0';
      var e, z, j, k;
      if (fractDigits < 0 || fractDigits > 20) throw RangeError('Incorrect fraction digits'); // eslint-disable-next-line no-self-compare -- NaN check

      if (number != number) return 'NaN';
      if (number <= -1e21 || number >= 1e21) return String(number);

      if (number < 0) {
        sign = '-';
        number = -number;
      }

      if (number > 1e-21) {
        e = log(number * pow$2(2, 69, 1)) - 69;
        z = e < 0 ? number * pow$2(2, -e, 1) : number / pow$2(2, e, 1);
        z *= 0x10000000000000;
        e = 52 - e;

        if (e > 0) {
          multiply(data, 0, z);
          j = fractDigits;

          while (j >= 7) {
            multiply(data, 1e7, 0);
            j -= 7;
          }

          multiply(data, pow$2(10, j, 1), 0);
          j = e - 1;

          while (j >= 23) {
            divide(data, 1 << 23);
            j -= 23;
          }

          divide(data, 1 << j);
          multiply(data, 1, 1);
          divide(data, 2);
          result = dataToString(data);
        } else {
          multiply(data, 0, z);
          multiply(data, 1 << -e, 0);
          result = dataToString(data) + repeat$1.call('0', fractDigits);
        }
      }

      if (fractDigits > 0) {
        k = result.length;
        result = sign + (k <= fractDigits ? '0.' + repeat$1.call('0', fractDigits - k) + result : result.slice(0, k - fractDigits) + '.' + result.slice(k - fractDigits));
      } else {
        result = sign + result;
      }

      return result;
    }
  });

  var DESCRIPTORS$j = descriptors;
  var fails$q = fails$K;
  var objectKeys$2 = objectKeys$5;
  var getOwnPropertySymbolsModule = objectGetOwnPropertySymbols;
  var propertyIsEnumerableModule = objectPropertyIsEnumerable;
  var toObject$g = toObject$u;
  var IndexedObject$2 = indexedObject; // eslint-disable-next-line es/no-object-assign -- safe

  var $assign = Object.assign; // eslint-disable-next-line es/no-object-defineproperty -- required for testing

  var defineProperty$7 = Object.defineProperty; // `Object.assign` method
  // https://tc39.es/ecma262/#sec-object.assign

  var objectAssign = !$assign || fails$q(function () {
    // should have correct order of operations (Edge bug)
    if (DESCRIPTORS$j && $assign({
      b: 1
    }, $assign(defineProperty$7({}, 'a', {
      enumerable: true,
      get: function get() {
        defineProperty$7(this, 'b', {
          value: 3,
          enumerable: false
        });
      }
    }), {
      b: 2
    })).b !== 1) return true; // should work with symbols and should have deterministic property order (V8 bug)

    var A = {};
    var B = {}; // eslint-disable-next-line es/no-symbol -- safe

    var symbol = Symbol();
    var alphabet = 'abcdefghijklmnopqrst';
    A[symbol] = 7;
    alphabet.split('').forEach(function (chr) {
      B[chr] = chr;
    });
    return $assign({}, A)[symbol] != 7 || objectKeys$2($assign({}, B)).join('') != alphabet;
  }) ? function assign(target, source) {
    // eslint-disable-line no-unused-vars -- required for `.length`
    var T = toObject$g(target);
    var argumentsLength = arguments.length;
    var index = 1;
    var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
    var propertyIsEnumerable = propertyIsEnumerableModule.f;

    while (argumentsLength > index) {
      var S = IndexedObject$2(arguments[index++]);
      var keys = getOwnPropertySymbols ? objectKeys$2(S).concat(getOwnPropertySymbols(S)) : objectKeys$2(S);
      var length = keys.length;
      var j = 0;
      var key;

      while (length > j) {
        key = keys[j++];
        if (!DESCRIPTORS$j || propertyIsEnumerable.call(S, key)) T[key] = S[key];
      }
    }

    return T;
  } : $assign;

  var $$2y = _export;
  var assign$1 = objectAssign; // `Object.assign` method
  // https://tc39.es/ecma262/#sec-object.assign
  // eslint-disable-next-line es/no-object-assign -- required for testing

  $$2y({
    target: 'Object',
    stat: true,
    forced: Object.assign !== assign$1
  }, {
    assign: assign$1
  });

  var global$p = global$K;
  var fails$p = fails$K;
  var WEBKIT$1 = engineWebkitVersion; // Forced replacement object prototype accessors methods

  var objectPrototypeAccessorsForced = !fails$p(function () {
    // This feature detection crashes old WebKit
    // https://github.com/zloirock/core-js/issues/232
    if (WEBKIT$1 && WEBKIT$1 < 535) return;
    var key = Math.random(); // In FF throws only define methods
    // eslint-disable-next-line no-undef, no-useless-call -- required for testing

    __defineSetter__.call(null, key, function () {
      /* empty */
    });

    delete global$p[key];
  });

  var $$2x = _export;
  var DESCRIPTORS$i = descriptors;
  var FORCED$e = objectPrototypeAccessorsForced;
  var toObject$f = toObject$u;
  var aFunction$M = aFunction$S;
  var definePropertyModule$4 = objectDefineProperty; // `Object.prototype.__defineGetter__` method
  // https://tc39.es/ecma262/#sec-object.prototype.__defineGetter__

  if (DESCRIPTORS$i) {
    $$2x({
      target: 'Object',
      proto: true,
      forced: FORCED$e
    }, {
      __defineGetter__: function __defineGetter__(P, getter) {
        definePropertyModule$4.f(toObject$f(this), P, {
          get: aFunction$M(getter),
          enumerable: true,
          configurable: true
        });
      }
    });
  }

  var $$2w = _export;
  var DESCRIPTORS$h = descriptors;
  var FORCED$d = objectPrototypeAccessorsForced;
  var toObject$e = toObject$u;
  var aFunction$L = aFunction$S;
  var definePropertyModule$3 = objectDefineProperty; // `Object.prototype.__defineSetter__` method
  // https://tc39.es/ecma262/#sec-object.prototype.__defineSetter__

  if (DESCRIPTORS$h) {
    $$2w({
      target: 'Object',
      proto: true,
      forced: FORCED$d
    }, {
      __defineSetter__: function __defineSetter__(P, setter) {
        definePropertyModule$3.f(toObject$e(this), P, {
          set: aFunction$L(setter),
          enumerable: true,
          configurable: true
        });
      }
    });
  }

  var DESCRIPTORS$g = descriptors;
  var objectKeys$1 = objectKeys$5;
  var toIndexedObject$1 = toIndexedObject$a;
  var propertyIsEnumerable = objectPropertyIsEnumerable.f; // `Object.{ entries, values }` methods implementation

  var createMethod$4 = function createMethod(TO_ENTRIES) {
    return function (it) {
      var O = toIndexedObject$1(it);
      var keys = objectKeys$1(O);
      var length = keys.length;
      var i = 0;
      var result = [];
      var key;

      while (length > i) {
        key = keys[i++];

        if (!DESCRIPTORS$g || propertyIsEnumerable.call(O, key)) {
          result.push(TO_ENTRIES ? [key, O[key]] : O[key]);
        }
      }

      return result;
    };
  };

  var objectToArray = {
    // `Object.entries` method
    // https://tc39.es/ecma262/#sec-object.entries
    entries: createMethod$4(true),
    // `Object.values` method
    // https://tc39.es/ecma262/#sec-object.values
    values: createMethod$4(false)
  };

  var $$2v = _export;
  var $entries = objectToArray.entries; // `Object.entries` method
  // https://tc39.es/ecma262/#sec-object.entries

  $$2v({
    target: 'Object',
    stat: true
  }, {
    entries: function entries(O) {
      return $entries(O);
    }
  });

  var $$2u = _export;
  var iterate$E = iterate$I;
  var createProperty$1 = createProperty$6; // `Object.fromEntries` method
  // https://github.com/tc39/proposal-object-from-entries

  $$2u({
    target: 'Object',
    stat: true
  }, {
    fromEntries: function fromEntries(iterable) {
      var obj = {};
      iterate$E(iterable, function (k, v) {
        createProperty$1(obj, k, v);
      }, {
        AS_ENTRIES: true
      });
      return obj;
    }
  });

  var $$2t = _export;
  var DESCRIPTORS$f = descriptors;
  var ownKeys$1 = ownKeys$3;
  var toIndexedObject = toIndexedObject$a;
  var getOwnPropertyDescriptorModule$4 = objectGetOwnPropertyDescriptor;
  var createProperty = createProperty$6; // `Object.getOwnPropertyDescriptors` method
  // https://tc39.es/ecma262/#sec-object.getownpropertydescriptors

  $$2t({
    target: 'Object',
    stat: true,
    sham: !DESCRIPTORS$f
  }, {
    getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
      var O = toIndexedObject(object);
      var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule$4.f;
      var keys = ownKeys$1(O);
      var result = {};
      var index = 0;
      var key, descriptor;

      while (keys.length > index) {
        descriptor = getOwnPropertyDescriptor(O, key = keys[index++]);
        if (descriptor !== undefined) createProperty(result, key, descriptor);
      }

      return result;
    }
  });

  var $$2s = _export;
  var DESCRIPTORS$e = descriptors;
  var FORCED$c = objectPrototypeAccessorsForced;
  var toObject$d = toObject$u;
  var toPropertyKey$4 = toPropertyKey$9;
  var getPrototypeOf$8 = objectGetPrototypeOf$1;
  var getOwnPropertyDescriptor$5 = objectGetOwnPropertyDescriptor.f; // `Object.prototype.__lookupGetter__` method
  // https://tc39.es/ecma262/#sec-object.prototype.__lookupGetter__

  if (DESCRIPTORS$e) {
    $$2s({
      target: 'Object',
      proto: true,
      forced: FORCED$c
    }, {
      __lookupGetter__: function __lookupGetter__(P) {
        var O = toObject$d(this);
        var key = toPropertyKey$4(P);
        var desc;

        do {
          if (desc = getOwnPropertyDescriptor$5(O, key)) return desc.get;
        } while (O = getPrototypeOf$8(O));
      }
    });
  }

  var $$2r = _export;
  var DESCRIPTORS$d = descriptors;
  var FORCED$b = objectPrototypeAccessorsForced;
  var toObject$c = toObject$u;
  var toPropertyKey$3 = toPropertyKey$9;
  var getPrototypeOf$7 = objectGetPrototypeOf$1;
  var getOwnPropertyDescriptor$4 = objectGetOwnPropertyDescriptor.f; // `Object.prototype.__lookupSetter__` method
  // https://tc39.es/ecma262/#sec-object.prototype.__lookupSetter__

  if (DESCRIPTORS$d) {
    $$2r({
      target: 'Object',
      proto: true,
      forced: FORCED$b
    }, {
      __lookupSetter__: function __lookupSetter__(P) {
        var O = toObject$c(this);
        var key = toPropertyKey$3(P);
        var desc;

        do {
          if (desc = getOwnPropertyDescriptor$4(O, key)) return desc.set;
        } while (O = getPrototypeOf$7(O));
      }
    });
  }

  var TO_STRING_TAG_SUPPORT$1 = toStringTagSupport;
  var classof$6 = classof$a; // `Object.prototype.toString` method implementation
  // https://tc39.es/ecma262/#sec-object.prototype.tostring

  var objectToString = TO_STRING_TAG_SUPPORT$1 ? {}.toString : function toString() {
    return '[object ' + classof$6(this) + ']';
  };

  var TO_STRING_TAG_SUPPORT = toStringTagSupport;
  var redefine$8 = redefine$e.exports;
  var toString$g = objectToString; // `Object.prototype.toString` method
  // https://tc39.es/ecma262/#sec-object.prototype.tostring

  if (!TO_STRING_TAG_SUPPORT) {
    redefine$8(Object.prototype, 'toString', toString$g, {
      unsafe: true
    });
  }

  var $$2q = _export;
  var $values = objectToArray.values; // `Object.values` method
  // https://tc39.es/ecma262/#sec-object.values

  $$2q({
    target: 'Object',
    stat: true
  }, {
    values: function values(O) {
      return $values(O);
    }
  });

  var global$o = global$K;
  var nativePromiseConstructor = global$o.Promise;

  var userAgent$2 = engineUserAgent;
  var engineIsIos = /(?:iphone|ipod|ipad).*applewebkit/i.test(userAgent$2);

  var global$n = global$K;
  var fails$o = fails$K;
  var bind$j = functionBindContext;
  var html = html$2;
  var createElement = documentCreateElement$1;
  var IS_IOS$1 = engineIsIos;
  var IS_NODE$3 = engineIsNode;
  var set$1 = global$n.setImmediate;
  var clear = global$n.clearImmediate;
  var process$3 = global$n.process;
  var MessageChannel = global$n.MessageChannel;
  var Dispatch = global$n.Dispatch;
  var counter = 0;
  var queue = {};
  var ONREADYSTATECHANGE = 'onreadystatechange';
  var location, defer, channel, port;

  try {
    // Deno throws a ReferenceError on `location` access without `--location` flag
    location = global$n.location;
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
    global$n.postMessage(String(id), location.protocol + '//' + location.host);
  }; // Node.js 0.9+ & IE10+ has setImmediate, otherwise:


  if (!set$1 || !clear) {
    set$1 = function setImmediate(fn) {
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


    if (IS_NODE$3) {
      defer = function defer(id) {
        process$3.nextTick(runner(id));
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
      defer = bind$j(port.postMessage, port, 1); // Browsers with postMessage, skip WebWorkers
      // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
    } else if (global$n.addEventListener && typeof postMessage == 'function' && !global$n.importScripts && location && location.protocol !== 'file:' && !fails$o(post)) {
      defer = post;
      global$n.addEventListener('message', listener, false); // IE8-
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

  var task$2 = {
    set: set$1,
    clear: clear
  };

  var userAgent$1 = engineUserAgent;
  var engineIsWebosWebkit = /web0s(?!.*chrome)/i.test(userAgent$1);

  var global$m = global$K;
  var getOwnPropertyDescriptor$3 = objectGetOwnPropertyDescriptor.f;
  var macrotask = task$2.set;
  var IS_IOS = engineIsIos;
  var IS_WEBOS_WEBKIT = engineIsWebosWebkit;
  var IS_NODE$2 = engineIsNode;
  var MutationObserver = global$m.MutationObserver || global$m.WebKitMutationObserver;
  var document$2 = global$m.document;
  var process$2 = global$m.process;
  var Promise$4 = global$m.Promise; // Node.js 11 shows ExperimentalWarning on getting `queueMicrotask`

  var queueMicrotaskDescriptor = getOwnPropertyDescriptor$3(global$m, 'queueMicrotask');
  var queueMicrotask = queueMicrotaskDescriptor && queueMicrotaskDescriptor.value;
  var flush, head, last, notify$1, toggle, node, promise, then; // modern engines have queueMicrotask method

  if (!queueMicrotask) {
    flush = function flush() {
      var parent, fn;
      if (IS_NODE$2 && (parent = process$2.domain)) parent.exit();

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


    if (!IS_IOS && !IS_NODE$2 && !IS_WEBOS_WEBKIT && MutationObserver && document$2) {
      toggle = true;
      node = document$2.createTextNode('');
      new MutationObserver(flush).observe(node, {
        characterData: true
      });

      notify$1 = function notify() {
        node.data = toggle = !toggle;
      }; // environments with maybe non-completely correct, but existent Promise

    } else if (Promise$4 && Promise$4.resolve) {
      // Promise.resolve without an argument throws an error in LG WebOS 2
      promise = Promise$4.resolve(undefined); // workaround of WebKit ~ iOS Safari 10.1 bug

      promise.constructor = Promise$4;
      then = promise.then;

      notify$1 = function notify() {
        then.call(promise, flush);
      }; // Node.js without promises

    } else if (IS_NODE$2) {
      notify$1 = function notify() {
        process$2.nextTick(flush);
      }; // for other environments - macrotask based on:
      // - setImmediate
      // - MessageChannel
      // - window.postMessag
      // - onreadystatechange
      // - setTimeout

    } else {
      notify$1 = function notify() {
        // strange IE + webpack dev server bug - use .call(global)
        macrotask.call(global$m, flush);
      };
    }
  }

  var microtask$2 = queueMicrotask || function (fn) {
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

  var newPromiseCapability$2 = {};

  var aFunction$K = aFunction$S;

  var PromiseCapability = function PromiseCapability(C) {
    var resolve, reject;
    this.promise = new C(function ($$resolve, $$reject) {
      if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
      resolve = $$resolve;
      reject = $$reject;
    });
    this.resolve = aFunction$K(resolve);
    this.reject = aFunction$K(reject);
  }; // `NewPromiseCapability` abstract operation
  // https://tc39.es/ecma262/#sec-newpromisecapability


  newPromiseCapability$2.f = function (C) {
    return new PromiseCapability(C);
  };

  var anObject$1m = anObject$1z;
  var isObject$g = isObject$w;
  var newPromiseCapability$1 = newPromiseCapability$2;

  var promiseResolve$2 = function promiseResolve(C, x) {
    anObject$1m(C);
    if (isObject$g(x) && x.constructor === C) return x;
    var promiseCapability = newPromiseCapability$1.f(C);
    var resolve = promiseCapability.resolve;
    resolve(x);
    return promiseCapability.promise;
  };

  var global$l = global$K;

  var hostReportErrors$2 = function hostReportErrors(a, b) {
    var console = global$l.console;

    if (console && console.error) {
      arguments.length === 1 ? console.error(a) : console.error(a, b);
    }
  };

  var perform$4 = function perform(exec) {
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

  var $$2p = _export;
  var global$k = global$K;
  var getBuiltIn$m = getBuiltIn$u;
  var NativePromise$1 = nativePromiseConstructor;
  var redefine$7 = redefine$e.exports;
  var redefineAll$6 = redefineAll$9;
  var setPrototypeOf$2 = objectSetPrototypeOf$1;
  var setToStringTag$3 = setToStringTag$b;
  var setSpecies$3 = setSpecies$7;
  var isObject$f = isObject$w;
  var aFunction$J = aFunction$S;
  var anInstance$7 = anInstance$b;
  var inspectSource = inspectSource$3;
  var iterate$D = iterate$I;
  var checkCorrectnessOfIteration$1 = checkCorrectnessOfIteration$4;
  var speciesConstructor$d = speciesConstructor$f;
  var task$1 = task$2.set;
  var microtask$1 = microtask$2;
  var promiseResolve$1 = promiseResolve$2;
  var hostReportErrors$1 = hostReportErrors$2;
  var newPromiseCapabilityModule$3 = newPromiseCapability$2;
  var perform$3 = perform$4;
  var InternalStateModule$d = internalState;
  var isForced$1 = isForced_1;
  var wellKnownSymbol$j = wellKnownSymbol$E;
  var IS_BROWSER = engineIsBrowser;
  var IS_NODE$1 = engineIsNode;
  var V8_VERSION = engineV8Version;
  var SPECIES$1 = wellKnownSymbol$j('species');
  var PROMISE = 'Promise';
  var getInternalState$d = InternalStateModule$d.get;
  var setInternalState$d = InternalStateModule$d.set;
  var getInternalPromiseState = InternalStateModule$d.getterFor(PROMISE);
  var NativePromisePrototype = NativePromise$1 && NativePromise$1.prototype;
  var PromiseConstructor = NativePromise$1;
  var PromiseConstructorPrototype = NativePromisePrototype;
  var TypeError$1 = global$k.TypeError;
  var document$1 = global$k.document;
  var process$1 = global$k.process;
  var newPromiseCapability = newPromiseCapabilityModule$3.f;
  var newGenericPromiseCapability = newPromiseCapability;
  var DISPATCH_EVENT = !!(document$1 && document$1.createEvent && global$k.dispatchEvent);
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
  var FORCED$a = isForced$1(PROMISE, function () {
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
    constructor[SPECIES$1] = FakePromise;
    SUBCLASSING = promise.then(function () {
      /* empty */
    }) instanceof FakePromise;
    if (!SUBCLASSING) return true; // Unhandled rejections tracking support, NodeJS Promise without it fails @@species test

    return !GLOBAL_CORE_JS_PROMISE && IS_BROWSER && !NATIVE_REJECTION_EVENT;
  });
  var INCORRECT_ITERATION = FORCED$a || !checkCorrectnessOfIteration$1(function (iterable) {
    PromiseConstructor.all(iterable)['catch'](function () {
      /* empty */
    });
  }); // helpers

  var isThenable = function isThenable(it) {
    var then;
    return isObject$f(it) && typeof (then = it.then) == 'function' ? then : false;
  };

  var notify = function notify(state, isReject) {
    if (state.notified) return;
    state.notified = true;
    var chain = state.reactions;
    microtask$1(function () {
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
      global$k.dispatchEvent(event);
    } else event = {
      promise: promise,
      reason: reason
    };

    if (!NATIVE_REJECTION_EVENT && (handler = global$k['on' + name])) handler(event);else if (name === UNHANDLED_REJECTION) hostReportErrors$1('Unhandled promise rejection', reason);
  };

  var onUnhandled = function onUnhandled(state) {
    task$1.call(global$k, function () {
      var promise = state.facade;
      var value = state.value;
      var IS_UNHANDLED = isUnhandled(state);
      var result;

      if (IS_UNHANDLED) {
        result = perform$3(function () {
          if (IS_NODE$1) {
            process$1.emit('unhandledRejection', value, promise);
          } else dispatchEvent(UNHANDLED_REJECTION, promise, value);
        }); // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should

        state.rejection = IS_NODE$1 || isUnhandled(state) ? UNHANDLED : HANDLED;
        if (result.error) throw result.value;
      }
    });
  };

  var isUnhandled = function isUnhandled(state) {
    return state.rejection !== HANDLED && !state.parent;
  };

  var onHandleUnhandled = function onHandleUnhandled(state) {
    task$1.call(global$k, function () {
      var promise = state.facade;

      if (IS_NODE$1) {
        process$1.emit('rejectionHandled', promise);
      } else dispatchEvent(REJECTION_HANDLED, promise, state.value);
    });
  };

  var bind$i = function bind(fn, state, unwrap) {
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
        microtask$1(function () {
          var wrapper = {
            done: false
          };

          try {
            then.call(value, bind$i(internalResolve, wrapper, state), bind$i(internalReject, wrapper, state));
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


  if (FORCED$a) {
    // 25.4.3.1 Promise(executor)
    PromiseConstructor = function Promise(executor) {
      anInstance$7(this, PromiseConstructor, PROMISE);
      aFunction$J(executor);
      Internal.call(this);
      var state = getInternalState$d(this);

      try {
        executor(bind$i(internalResolve, state), bind$i(internalReject, state));
      } catch (error) {
        internalReject(state, error);
      }
    };

    PromiseConstructorPrototype = PromiseConstructor.prototype; // eslint-disable-next-line no-unused-vars -- required for `.length`

    Internal = function Promise(executor) {
      setInternalState$d(this, {
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

    Internal.prototype = redefineAll$6(PromiseConstructorPrototype, {
      // `Promise.prototype.then` method
      // https://tc39.es/ecma262/#sec-promise.prototype.then
      then: function then(onFulfilled, onRejected) {
        var state = getInternalPromiseState(this);
        var reaction = newPromiseCapability(speciesConstructor$d(this, PromiseConstructor));
        reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
        reaction.fail = typeof onRejected == 'function' && onRejected;
        reaction.domain = IS_NODE$1 ? process$1.domain : undefined;
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
      var state = getInternalState$d(promise);
      this.promise = promise;
      this.resolve = bind$i(internalResolve, state);
      this.reject = bind$i(internalReject, state);
    };

    newPromiseCapabilityModule$3.f = newPromiseCapability = function newPromiseCapability(C) {
      return C === PromiseConstructor || C === PromiseWrapper ? new OwnPromiseCapability(C) : newGenericPromiseCapability(C);
    };

    if (typeof NativePromise$1 == 'function' && NativePromisePrototype !== Object.prototype) {
      nativeThen = NativePromisePrototype.then;

      if (!SUBCLASSING) {
        // make `Promise#then` return a polyfilled `Promise` for native promise-based APIs
        redefine$7(NativePromisePrototype, 'then', function then(onFulfilled, onRejected) {
          var that = this;
          return new PromiseConstructor(function (resolve, reject) {
            nativeThen.call(that, resolve, reject);
          }).then(onFulfilled, onRejected); // https://github.com/zloirock/core-js/issues/640
        }, {
          unsafe: true
        }); // makes sure that native promise-based APIs `Promise#catch` properly works with patched `Promise#then`

        redefine$7(NativePromisePrototype, 'catch', PromiseConstructorPrototype['catch'], {
          unsafe: true
        });
      } // make `.constructor === Promise` work for native promise-based APIs


      try {
        delete NativePromisePrototype.constructor;
      } catch (error) {
        /* empty */
      } // make `instanceof Promise` work for native promise-based APIs


      if (setPrototypeOf$2) {
        setPrototypeOf$2(NativePromisePrototype, PromiseConstructorPrototype);
      }
    }
  }

  $$2p({
    global: true,
    wrap: true,
    forced: FORCED$a
  }, {
    Promise: PromiseConstructor
  });
  setToStringTag$3(PromiseConstructor, PROMISE, false);
  setSpecies$3(PROMISE);
  PromiseWrapper = getBuiltIn$m(PROMISE); // statics

  $$2p({
    target: PROMISE,
    stat: true,
    forced: FORCED$a
  }, {
    // `Promise.reject` method
    // https://tc39.es/ecma262/#sec-promise.reject
    reject: function reject(r) {
      var capability = newPromiseCapability(this);
      capability.reject.call(undefined, r);
      return capability.promise;
    }
  });
  $$2p({
    target: PROMISE,
    stat: true,
    forced: FORCED$a
  }, {
    // `Promise.resolve` method
    // https://tc39.es/ecma262/#sec-promise.resolve
    resolve: function resolve(x) {
      return promiseResolve$1(this, x);
    }
  });
  $$2p({
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
      var result = perform$3(function () {
        var $promiseResolve = aFunction$J(C.resolve);
        var values = [];
        var counter = 0;
        var remaining = 1;
        iterate$D(iterable, function (promise) {
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
      var result = perform$3(function () {
        var $promiseResolve = aFunction$J(C.resolve);
        iterate$D(iterable, function (promise) {
          $promiseResolve.call(C, promise).then(capability.resolve, reject);
        });
      });
      if (result.error) reject(result.value);
      return capability.promise;
    }
  });

  var $$2o = _export;
  var aFunction$I = aFunction$S;
  var newPromiseCapabilityModule$2 = newPromiseCapability$2;
  var perform$2 = perform$4;
  var iterate$C = iterate$I; // `Promise.allSettled` method
  // https://tc39.es/ecma262/#sec-promise.allsettled

  $$2o({
    target: 'Promise',
    stat: true
  }, {
    allSettled: function allSettled(iterable) {
      var C = this;
      var capability = newPromiseCapabilityModule$2.f(C);
      var resolve = capability.resolve;
      var reject = capability.reject;
      var result = perform$2(function () {
        var promiseResolve = aFunction$I(C.resolve);
        var values = [];
        var counter = 0;
        var remaining = 1;
        iterate$C(iterable, function (promise) {
          var index = counter++;
          var alreadyCalled = false;
          values.push(undefined);
          remaining++;
          promiseResolve.call(C, promise).then(function (value) {
            if (alreadyCalled) return;
            alreadyCalled = true;
            values[index] = {
              status: 'fulfilled',
              value: value
            };
            --remaining || resolve(values);
          }, function (error) {
            if (alreadyCalled) return;
            alreadyCalled = true;
            values[index] = {
              status: 'rejected',
              reason: error
            };
            --remaining || resolve(values);
          });
        });
        --remaining || resolve(values);
      });
      if (result.error) reject(result.value);
      return capability.promise;
    }
  });

  var $$2n = _export;
  var aFunction$H = aFunction$S;
  var getBuiltIn$l = getBuiltIn$u;
  var newPromiseCapabilityModule$1 = newPromiseCapability$2;
  var perform$1 = perform$4;
  var iterate$B = iterate$I;
  var PROMISE_ANY_ERROR = 'No one promise resolved'; // `Promise.any` method
  // https://tc39.es/ecma262/#sec-promise.any

  $$2n({
    target: 'Promise',
    stat: true
  }, {
    any: function any(iterable) {
      var C = this;
      var capability = newPromiseCapabilityModule$1.f(C);
      var resolve = capability.resolve;
      var reject = capability.reject;
      var result = perform$1(function () {
        var promiseResolve = aFunction$H(C.resolve);
        var errors = [];
        var counter = 0;
        var remaining = 1;
        var alreadyResolved = false;
        iterate$B(iterable, function (promise) {
          var index = counter++;
          var alreadyRejected = false;
          errors.push(undefined);
          remaining++;
          promiseResolve.call(C, promise).then(function (value) {
            if (alreadyRejected || alreadyResolved) return;
            alreadyResolved = true;
            resolve(value);
          }, function (error) {
            if (alreadyRejected || alreadyResolved) return;
            alreadyRejected = true;
            errors[index] = error;
            --remaining || reject(new (getBuiltIn$l('AggregateError'))(errors, PROMISE_ANY_ERROR));
          });
        });
        --remaining || reject(new (getBuiltIn$l('AggregateError'))(errors, PROMISE_ANY_ERROR));
      });
      if (result.error) reject(result.value);
      return capability.promise;
    }
  });

  var $$2m = _export;
  var NativePromise = nativePromiseConstructor;
  var fails$n = fails$K;
  var getBuiltIn$k = getBuiltIn$u;
  var speciesConstructor$c = speciesConstructor$f;
  var promiseResolve = promiseResolve$2;
  var redefine$6 = redefine$e.exports; // Safari bug https://bugs.webkit.org/show_bug.cgi?id=200829

  var NON_GENERIC = !!NativePromise && fails$n(function () {
    NativePromise.prototype['finally'].call({
      then: function then() {
        /* empty */
      }
    }, function () {
      /* empty */
    });
  }); // `Promise.prototype.finally` method
  // https://tc39.es/ecma262/#sec-promise.prototype.finally

  $$2m({
    target: 'Promise',
    proto: true,
    real: true,
    forced: NON_GENERIC
  }, {
    'finally': function _finally(onFinally) {
      var C = speciesConstructor$c(this, getBuiltIn$k('Promise'));
      var isFunction = typeof onFinally == 'function';
      return this.then(isFunction ? function (x) {
        return promiseResolve(C, onFinally()).then(function () {
          return x;
        });
      } : onFinally, isFunction ? function (e) {
        return promiseResolve(C, onFinally()).then(function () {
          throw e;
        });
      } : onFinally);
    }
  }); // makes sure that native promise-based APIs `Promise#finally` properly works with patched `Promise#then`

  if (typeof NativePromise == 'function') {
    var method = getBuiltIn$k('Promise').prototype['finally'];

    if (NativePromise.prototype['finally'] !== method) {
      redefine$6(NativePromise.prototype, 'finally', method, {
        unsafe: true
      });
    }
  }

  var $$2l = _export;
  var getBuiltIn$j = getBuiltIn$u;
  var aFunction$G = aFunction$S;
  var anObject$1l = anObject$1z;
  var fails$m = fails$K;
  var nativeApply = getBuiltIn$j('Reflect', 'apply');
  var functionApply = Function.apply; // MS Edge argumentsList argument is optional

  var OPTIONAL_ARGUMENTS_LIST = !fails$m(function () {
    nativeApply(function () {
      /* empty */
    });
  }); // `Reflect.apply` method
  // https://tc39.es/ecma262/#sec-reflect.apply

  $$2l({
    target: 'Reflect',
    stat: true,
    forced: OPTIONAL_ARGUMENTS_LIST
  }, {
    apply: function apply(target, thisArgument, argumentsList) {
      aFunction$G(target);
      anObject$1l(argumentsList);
      return nativeApply ? nativeApply(target, thisArgument, argumentsList) : functionApply.call(target, thisArgument, argumentsList);
    }
  });

  var aFunction$F = aFunction$S;
  var isObject$e = isObject$w;
  var slice = [].slice;
  var factories = {};

  var construct = function construct(C, argsLength, args) {
    if (!(argsLength in factories)) {
      for (var list = [], i = 0; i < argsLength; i++) {
        list[i] = 'a[' + i + ']';
      } // eslint-disable-next-line no-new-func -- we have no proper alternatives, IE8- only


      factories[argsLength] = Function('C,a', 'return new C(' + list.join(',') + ')');
    }

    return factories[argsLength](C, args);
  }; // `Function.prototype.bind` method implementation
  // https://tc39.es/ecma262/#sec-function.prototype.bind


  var functionBind = Function.bind || function bind(that
  /* , ...args */
  ) {
    var fn = aFunction$F(this);
    var partArgs = slice.call(arguments, 1);

    var boundFunction = function bound() {
      var args = partArgs.concat(slice.call(arguments));
      return this instanceof boundFunction ? construct(fn, args.length, args) : fn.apply(that, args);
    };

    if (isObject$e(fn.prototype)) boundFunction.prototype = fn.prototype;
    return boundFunction;
  };

  var $$2k = _export;
  var getBuiltIn$i = getBuiltIn$u;
  var aFunction$E = aFunction$S;
  var anObject$1k = anObject$1z;
  var isObject$d = isObject$w;
  var create$7 = objectCreate$1;
  var bind$h = functionBind;
  var fails$l = fails$K;
  var nativeConstruct = getBuiltIn$i('Reflect', 'construct'); // `Reflect.construct` method
  // https://tc39.es/ecma262/#sec-reflect.construct
  // MS Edge supports only 2 arguments and argumentsList argument is optional
  // FF Nightly sets third argument as `new.target`, but does not create `this` from it

  var NEW_TARGET_BUG = fails$l(function () {
    function F() {
      /* empty */
    }

    return !(nativeConstruct(function () {
      /* empty */
    }, [], F) instanceof F);
  });
  var ARGS_BUG = !fails$l(function () {
    nativeConstruct(function () {
      /* empty */
    });
  });
  var FORCED$9 = NEW_TARGET_BUG || ARGS_BUG;
  $$2k({
    target: 'Reflect',
    stat: true,
    forced: FORCED$9,
    sham: FORCED$9
  }, {
    construct: function construct(Target, args
    /* , newTarget */
    ) {
      aFunction$E(Target);
      anObject$1k(args);
      var newTarget = arguments.length < 3 ? Target : aFunction$E(arguments[2]);
      if (ARGS_BUG && !NEW_TARGET_BUG) return nativeConstruct(Target, args, newTarget);

      if (Target == newTarget) {
        // w/o altered newTarget, optimization for 0-4 arguments
        switch (args.length) {
          case 0:
            return new Target();

          case 1:
            return new Target(args[0]);

          case 2:
            return new Target(args[0], args[1]);

          case 3:
            return new Target(args[0], args[1], args[2]);

          case 4:
            return new Target(args[0], args[1], args[2], args[3]);
        } // w/o altered newTarget, lot of arguments case


        var $args = [null];
        $args.push.apply($args, args);
        return new (bind$h.apply(Target, $args))();
      } // with altered newTarget, not support built-in constructors


      var proto = newTarget.prototype;
      var instance = create$7(isObject$d(proto) ? proto : Object.prototype);
      var result = Function.apply.call(Target, instance, args);
      return isObject$d(result) ? result : instance;
    }
  });

  var $$2j = _export;
  var DESCRIPTORS$c = descriptors;
  var anObject$1j = anObject$1z;
  var toPropertyKey$2 = toPropertyKey$9;
  var definePropertyModule$2 = objectDefineProperty;
  var fails$k = fails$K; // MS Edge has broken Reflect.defineProperty - throwing instead of returning false

  var ERROR_INSTEAD_OF_FALSE = fails$k(function () {
    // eslint-disable-next-line es/no-reflect -- required for testing
    Reflect.defineProperty(definePropertyModule$2.f({}, 1, {
      value: 1
    }), 1, {
      value: 2
    });
  }); // `Reflect.defineProperty` method
  // https://tc39.es/ecma262/#sec-reflect.defineproperty

  $$2j({
    target: 'Reflect',
    stat: true,
    forced: ERROR_INSTEAD_OF_FALSE,
    sham: !DESCRIPTORS$c
  }, {
    defineProperty: function defineProperty(target, propertyKey, attributes) {
      anObject$1j(target);
      var key = toPropertyKey$2(propertyKey);
      anObject$1j(attributes);

      try {
        definePropertyModule$2.f(target, key, attributes);
        return true;
      } catch (error) {
        return false;
      }
    }
  });

  var $$2i = _export;
  var anObject$1i = anObject$1z;
  var getOwnPropertyDescriptor$2 = objectGetOwnPropertyDescriptor.f; // `Reflect.deleteProperty` method
  // https://tc39.es/ecma262/#sec-reflect.deleteproperty

  $$2i({
    target: 'Reflect',
    stat: true
  }, {
    deleteProperty: function deleteProperty(target, propertyKey) {
      var descriptor = getOwnPropertyDescriptor$2(anObject$1i(target), propertyKey);
      return descriptor && !descriptor.configurable ? false : delete target[propertyKey];
    }
  });

  var $$2h = _export;
  var isObject$c = isObject$w;
  var anObject$1h = anObject$1z;
  var has$9 = has$n;
  var getOwnPropertyDescriptorModule$3 = objectGetOwnPropertyDescriptor;
  var getPrototypeOf$6 = objectGetPrototypeOf$1; // `Reflect.get` method
  // https://tc39.es/ecma262/#sec-reflect.get

  function get(target, propertyKey
  /* , receiver */
  ) {
    var receiver = arguments.length < 3 ? target : arguments[2];
    var descriptor, prototype;
    if (anObject$1h(target) === receiver) return target[propertyKey];
    if (descriptor = getOwnPropertyDescriptorModule$3.f(target, propertyKey)) return has$9(descriptor, 'value') ? descriptor.value : descriptor.get === undefined ? undefined : descriptor.get.call(receiver);
    if (isObject$c(prototype = getPrototypeOf$6(target))) return get(prototype, propertyKey, receiver);
  }

  $$2h({
    target: 'Reflect',
    stat: true
  }, {
    get: get
  });

  var $$2g = _export;
  var DESCRIPTORS$b = descriptors;
  var anObject$1g = anObject$1z;
  var getOwnPropertyDescriptorModule$2 = objectGetOwnPropertyDescriptor; // `Reflect.getOwnPropertyDescriptor` method
  // https://tc39.es/ecma262/#sec-reflect.getownpropertydescriptor

  $$2g({
    target: 'Reflect',
    stat: true,
    sham: !DESCRIPTORS$b
  }, {
    getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey) {
      return getOwnPropertyDescriptorModule$2.f(anObject$1g(target), propertyKey);
    }
  });

  var $$2f = _export;
  var anObject$1f = anObject$1z;
  var objectGetPrototypeOf = objectGetPrototypeOf$1;
  var CORRECT_PROTOTYPE_GETTER = correctPrototypeGetter; // `Reflect.getPrototypeOf` method
  // https://tc39.es/ecma262/#sec-reflect.getprototypeof

  $$2f({
    target: 'Reflect',
    stat: true,
    sham: !CORRECT_PROTOTYPE_GETTER
  }, {
    getPrototypeOf: function getPrototypeOf(target) {
      return objectGetPrototypeOf(anObject$1f(target));
    }
  });

  var $$2e = _export; // `Reflect.has` method
  // https://tc39.es/ecma262/#sec-reflect.has

  $$2e({
    target: 'Reflect',
    stat: true
  }, {
    has: function has(target, propertyKey) {
      return propertyKey in target;
    }
  });

  var $$2d = _export;
  var anObject$1e = anObject$1z; // eslint-disable-next-line es/no-object-isextensible -- safe

  var objectIsExtensible = Object.isExtensible; // `Reflect.isExtensible` method
  // https://tc39.es/ecma262/#sec-reflect.isextensible

  $$2d({
    target: 'Reflect',
    stat: true
  }, {
    isExtensible: function isExtensible(target) {
      anObject$1e(target);
      return objectIsExtensible ? objectIsExtensible(target) : true;
    }
  });

  var $$2c = _export;
  var ownKeys = ownKeys$3; // `Reflect.ownKeys` method
  // https://tc39.es/ecma262/#sec-reflect.ownkeys

  $$2c({
    target: 'Reflect',
    stat: true
  }, {
    ownKeys: ownKeys
  });

  var $$2b = _export;
  var getBuiltIn$h = getBuiltIn$u;
  var anObject$1d = anObject$1z;
  var FREEZING = freezing; // `Reflect.preventExtensions` method
  // https://tc39.es/ecma262/#sec-reflect.preventextensions

  $$2b({
    target: 'Reflect',
    stat: true,
    sham: !FREEZING
  }, {
    preventExtensions: function preventExtensions(target) {
      anObject$1d(target);

      try {
        var objectPreventExtensions = getBuiltIn$h('Object', 'preventExtensions');
        if (objectPreventExtensions) objectPreventExtensions(target);
        return true;
      } catch (error) {
        return false;
      }
    }
  });

  var $$2a = _export;
  var anObject$1c = anObject$1z;
  var isObject$b = isObject$w;
  var has$8 = has$n;
  var fails$j = fails$K;
  var definePropertyModule$1 = objectDefineProperty;
  var getOwnPropertyDescriptorModule$1 = objectGetOwnPropertyDescriptor;
  var getPrototypeOf$5 = objectGetPrototypeOf$1;
  var createPropertyDescriptor$2 = createPropertyDescriptor$9; // `Reflect.set` method
  // https://tc39.es/ecma262/#sec-reflect.set

  function set(target, propertyKey, V
  /* , receiver */
  ) {
    var receiver = arguments.length < 4 ? target : arguments[3];
    var ownDescriptor = getOwnPropertyDescriptorModule$1.f(anObject$1c(target), propertyKey);
    var existingDescriptor, prototype;

    if (!ownDescriptor) {
      if (isObject$b(prototype = getPrototypeOf$5(target))) {
        return set(prototype, propertyKey, V, receiver);
      }

      ownDescriptor = createPropertyDescriptor$2(0);
    }

    if (has$8(ownDescriptor, 'value')) {
      if (ownDescriptor.writable === false || !isObject$b(receiver)) return false;

      if (existingDescriptor = getOwnPropertyDescriptorModule$1.f(receiver, propertyKey)) {
        if (existingDescriptor.get || existingDescriptor.set || existingDescriptor.writable === false) return false;
        existingDescriptor.value = V;
        definePropertyModule$1.f(receiver, propertyKey, existingDescriptor);
      } else definePropertyModule$1.f(receiver, propertyKey, createPropertyDescriptor$2(0, V));

      return true;
    }

    return ownDescriptor.set === undefined ? false : (ownDescriptor.set.call(receiver, V), true);
  } // MS Edge 17-18 Reflect.set allows setting the property to object
  // with non-writable property on the prototype


  var MS_EDGE_BUG = fails$j(function () {
    var Constructor = function Constructor() {
      /* empty */
    };

    var object = definePropertyModule$1.f(new Constructor(), 'a', {
      configurable: true
    }); // eslint-disable-next-line es/no-reflect -- required for testing

    return Reflect.set(Constructor.prototype, 'a', 1, object) !== false;
  });
  $$2a({
    target: 'Reflect',
    stat: true,
    forced: MS_EDGE_BUG
  }, {
    set: set
  });

  var $$29 = _export;
  var anObject$1b = anObject$1z;
  var aPossiblePrototype = aPossiblePrototype$2;
  var objectSetPrototypeOf = objectSetPrototypeOf$1; // `Reflect.setPrototypeOf` method
  // https://tc39.es/ecma262/#sec-reflect.setprototypeof

  if (objectSetPrototypeOf) $$29({
    target: 'Reflect',
    stat: true
  }, {
    setPrototypeOf: function setPrototypeOf(target, proto) {
      anObject$1b(target);
      aPossiblePrototype(proto);

      try {
        objectSetPrototypeOf(target, proto);
        return true;
      } catch (error) {
        return false;
      }
    }
  });

  var $$28 = _export;
  var global$j = global$K;
  var setToStringTag$2 = setToStringTag$b;
  $$28({
    global: true
  }, {
    Reflect: {}
  }); // Reflect[@@toStringTag] property
  // https://tc39.es/ecma262/#sec-reflect-@@tostringtag

  setToStringTag$2(global$j.Reflect, 'Reflect', true);

  var isObject$a = isObject$w;
  var classof$5 = classofRaw$1;
  var wellKnownSymbol$i = wellKnownSymbol$E;
  var MATCH$2 = wellKnownSymbol$i('match'); // `IsRegExp` abstract operation
  // https://tc39.es/ecma262/#sec-isregexp

  var isRegexp = function isRegexp(it) {
    var isRegExp;
    return isObject$a(it) && ((isRegExp = it[MATCH$2]) !== undefined ? !!isRegExp : classof$5(it) == 'RegExp');
  };

  var anObject$1a = anObject$1z; // `RegExp.prototype.flags` getter implementation
  // https://tc39.es/ecma262/#sec-get-regexp.prototype.flags

  var regexpFlags$1 = function regexpFlags() {
    var that = anObject$1a(this);
    var result = '';
    if (that.global) result += 'g';
    if (that.ignoreCase) result += 'i';
    if (that.multiline) result += 'm';
    if (that.dotAll) result += 's';
    if (that.unicode) result += 'u';
    if (that.sticky) result += 'y';
    return result;
  };

  var regexpStickyHelpers = {};

  var fails$i = fails$K; // babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError,

  var RE = function RE(s, f) {
    return RegExp(s, f);
  };

  regexpStickyHelpers.UNSUPPORTED_Y = fails$i(function () {
    var re = RE('a', 'y');
    re.lastIndex = 2;
    return re.exec('abcd') != null;
  });
  regexpStickyHelpers.BROKEN_CARET = fails$i(function () {
    // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
    var re = RE('^r', 'gy');
    re.lastIndex = 2;
    return re.exec('str') != null;
  });

  var fails$h = fails$K;
  var regexpUnsupportedDotAll = fails$h(function () {
    // babel-minify transpiles RegExp('.', 's') -> /./s and it causes SyntaxError
    var re = RegExp('.', (typeof '').charAt(0));
    return !(re.dotAll && re.exec('\n') && re.flags === 's');
  });

  var fails$g = fails$K;
  var regexpUnsupportedNcg = fails$g(function () {
    // babel-minify transpiles RegExp('.', 'g') -> /./g and it causes SyntaxError
    var re = RegExp('(?<a>b)', (typeof '').charAt(5));
    return re.exec('b').groups.a !== 'b' || 'b'.replace(re, '$<a>c') !== 'bc';
  });

  var DESCRIPTORS$a = descriptors;
  var global$i = global$K;
  var isForced = isForced_1;
  var inheritIfRequired$1 = inheritIfRequired$3;
  var createNonEnumerableProperty$c = createNonEnumerableProperty$m;
  var defineProperty$6 = objectDefineProperty.f;
  var getOwnPropertyNames$1 = objectGetOwnPropertyNames.f;
  var isRegExp$4 = isRegexp;
  var toString$f = toString$n;
  var getFlags = regexpFlags$1;
  var stickyHelpers$2 = regexpStickyHelpers;
  var redefine$5 = redefine$e.exports;
  var fails$f = fails$K;
  var has$7 = has$n;
  var enforceInternalState = internalState.enforce;
  var setSpecies$2 = setSpecies$7;
  var wellKnownSymbol$h = wellKnownSymbol$E;
  var UNSUPPORTED_DOT_ALL$2 = regexpUnsupportedDotAll;
  var UNSUPPORTED_NCG$1 = regexpUnsupportedNcg;
  var MATCH$1 = wellKnownSymbol$h('match');
  var NativeRegExp = global$i.RegExp;
  var RegExpPrototype$6 = NativeRegExp.prototype; // TODO: Use only propper RegExpIdentifierName

  var IS_NCG = /^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/;
  var re1 = /a/g;
  var re2 = /a/g; // "new" should create a new object, old webkit bug

  var CORRECT_NEW = new NativeRegExp(re1) !== re1;
  var UNSUPPORTED_Y$3 = stickyHelpers$2.UNSUPPORTED_Y;
  var BASE_FORCED = DESCRIPTORS$a && (!CORRECT_NEW || UNSUPPORTED_Y$3 || UNSUPPORTED_DOT_ALL$2 || UNSUPPORTED_NCG$1 || fails$f(function () {
    re2[MATCH$1] = false; // RegExp constructor can alter flags and IsRegExp works correct with @@match

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
          if (groupname === '' || has$7(names, groupname)) {
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


  if (isForced('RegExp', BASE_FORCED)) {
    var RegExpWrapper = function RegExp(pattern, flags) {
      var thisIsRegExp = this instanceof RegExpWrapper;
      var patternIsRegExp = isRegExp$4(pattern);
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

      pattern = pattern === undefined ? '' : toString$f(pattern);
      flags = flags === undefined ? '' : toString$f(flags);
      rawPattern = pattern;

      if (UNSUPPORTED_DOT_ALL$2 && 'dotAll' in re1) {
        dotAll = !!flags && flags.indexOf('s') > -1;
        if (dotAll) flags = flags.replace(/s/g, '');
      }

      rawFlags = flags;

      if (UNSUPPORTED_Y$3 && 'sticky' in re1) {
        sticky = !!flags && flags.indexOf('y') > -1;
        if (sticky) flags = flags.replace(/y/g, '');
      }

      if (UNSUPPORTED_NCG$1) {
        handled = handleNCG(pattern);
        pattern = handled[0];
        groups = handled[1];
      }

      result = inheritIfRequired$1(NativeRegExp(pattern, flags), thisIsRegExp ? this : RegExpPrototype$6, RegExpWrapper);

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
        createNonEnumerableProperty$c(result, 'source', rawPattern === '' ? '(?:)' : rawPattern);
      } catch (error) {
        /* empty */
      }
      return result;
    };

    var proxy = function proxy(key) {
      key in RegExpWrapper || defineProperty$6(RegExpWrapper, key, {
        configurable: true,
        get: function get() {
          return NativeRegExp[key];
        },
        set: function set(it) {
          NativeRegExp[key] = it;
        }
      });
    };

    for (var keys = getOwnPropertyNames$1(NativeRegExp), index = 0; keys.length > index;) {
      proxy(keys[index++]);
    }

    RegExpPrototype$6.constructor = RegExpWrapper;
    RegExpWrapper.prototype = RegExpPrototype$6;
    redefine$5(global$i, 'RegExp', RegExpWrapper);
  } // https://tc39.es/ecma262/#sec-get-regexp-@@species


  setSpecies$2('RegExp');

  var DESCRIPTORS$9 = descriptors;
  var UNSUPPORTED_DOT_ALL$1 = regexpUnsupportedDotAll;
  var defineProperty$5 = objectDefineProperty.f;
  var getInternalState$c = internalState.get;
  var RegExpPrototype$5 = RegExp.prototype; // `RegExp.prototype.dotAll` getter
  // https://tc39.es/ecma262/#sec-get-regexp.prototype.dotall

  if (DESCRIPTORS$9 && UNSUPPORTED_DOT_ALL$1) {
    defineProperty$5(RegExpPrototype$5, 'dotAll', {
      configurable: true,
      get: function get() {
        if (this === RegExpPrototype$5) return undefined; // We can't use InternalStateModule.getterFor because
        // we don't add metadata for regexps created by a literal.

        if (this instanceof RegExp) {
          return !!getInternalState$c(this).dotAll;
        }

        throw TypeError('Incompatible receiver, RegExp required');
      }
    });
  }

  /* eslint-disable regexp/no-assertion-capturing-group, regexp/no-empty-group, regexp/no-lazy-ends -- testing */

  /* eslint-disable regexp/no-useless-quantifier -- testing */


  var toString$e = toString$n;
  var regexpFlags = regexpFlags$1;
  var stickyHelpers$1 = regexpStickyHelpers;
  var shared$2 = shared$7.exports;
  var create$6 = objectCreate$1;
  var getInternalState$b = internalState.get;
  var UNSUPPORTED_DOT_ALL = regexpUnsupportedDotAll;
  var UNSUPPORTED_NCG = regexpUnsupportedNcg;
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

  var UNSUPPORTED_Y$2 = stickyHelpers$1.UNSUPPORTED_Y || stickyHelpers$1.BROKEN_CARET; // nonparticipating capturing group, copied from es5-shim's String#split patch.

  var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;
  var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y$2 || UNSUPPORTED_DOT_ALL || UNSUPPORTED_NCG;

  if (PATCH) {
    // eslint-disable-next-line max-statements -- TODO
    patchedExec = function exec(string) {
      var re = this;
      var state = getInternalState$b(re);
      var str = toString$e(string);
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
        match.groups = object = create$6(null);

        for (i = 0; i < groups.length; i++) {
          group = groups[i];
          object[group[0]] = match[group[1]];
        }
      }

      return match;
    };
  }

  var regexpExec$3 = patchedExec;

  var $$27 = _export;
  var exec = regexpExec$3; // `RegExp.prototype.exec` method
  // https://tc39.es/ecma262/#sec-regexp.prototype.exec

  $$27({
    target: 'RegExp',
    proto: true,
    forced: /./.exec !== exec
  }, {
    exec: exec
  });

  var DESCRIPTORS$8 = descriptors;
  var objectDefinePropertyModule = objectDefineProperty;
  var regExpFlags = regexpFlags$1;
  var fails$e = fails$K;
  var FORCED$8 = DESCRIPTORS$8 && fails$e(function () {
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    return Object.getOwnPropertyDescriptor(RegExp.prototype, 'flags').get.call({
      dotAll: true,
      sticky: true
    }) !== 'sy';
  }); // `RegExp.prototype.flags` getter
  // https://tc39.es/ecma262/#sec-get-regexp.prototype.flags

  if (FORCED$8) objectDefinePropertyModule.f(RegExp.prototype, 'flags', {
    configurable: true,
    get: regExpFlags
  });

  var DESCRIPTORS$7 = descriptors;
  var UNSUPPORTED_Y$1 = regexpStickyHelpers.UNSUPPORTED_Y;
  var defineProperty$4 = objectDefineProperty.f;
  var getInternalState$a = internalState.get;
  var RegExpPrototype$4 = RegExp.prototype; // `RegExp.prototype.sticky` getter
  // https://tc39.es/ecma262/#sec-get-regexp.prototype.sticky

  if (DESCRIPTORS$7 && UNSUPPORTED_Y$1) {
    defineProperty$4(RegExpPrototype$4, 'sticky', {
      configurable: true,
      get: function get() {
        if (this === RegExpPrototype$4) return undefined; // We can't use InternalStateModule.getterFor because
        // we don't add metadata for regexps created by a literal.

        if (this instanceof RegExp) {
          return !!getInternalState$a(this).sticky;
        }

        throw TypeError('Incompatible receiver, RegExp required');
      }
    });
  }

  var $$26 = _export;
  var isObject$9 = isObject$w;

  var DELEGATES_TO_EXEC = function () {
    var execCalled = false;
    var re = /[ac]/;

    re.exec = function () {
      execCalled = true;
      return /./.exec.apply(this, arguments);
    };

    return re.test('abc') === true && execCalled;
  }();

  var nativeTest = /./.test; // `RegExp.prototype.test` method
  // https://tc39.es/ecma262/#sec-regexp.prototype.test

  $$26({
    target: 'RegExp',
    proto: true,
    forced: !DELEGATES_TO_EXEC
  }, {
    test: function test(str) {
      if (typeof this.exec !== 'function') {
        return nativeTest.call(this, str);
      }

      var result = this.exec(str);

      if (result !== null && !isObject$9(result)) {
        throw new Error('RegExp exec method returned something other than an Object or null');
      }

      return !!result;
    }
  });

  var redefine$4 = redefine$e.exports;
  var anObject$19 = anObject$1z;
  var $toString$2 = toString$n;
  var fails$d = fails$K;
  var flags = regexpFlags$1;
  var TO_STRING = 'toString';
  var RegExpPrototype$3 = RegExp.prototype;
  var nativeToString = RegExpPrototype$3[TO_STRING];
  var NOT_GENERIC = fails$d(function () {
    return nativeToString.call({
      source: 'a',
      flags: 'b'
    }) != '/a/b';
  }); // FF44- RegExp#toString has a wrong name

  var INCORRECT_NAME = nativeToString.name != TO_STRING; // `RegExp.prototype.toString` method
  // https://tc39.es/ecma262/#sec-regexp.prototype.tostring

  if (NOT_GENERIC || INCORRECT_NAME) {
    redefine$4(RegExp.prototype, TO_STRING, function toString() {
      var R = anObject$19(this);
      var p = $toString$2(R.source);
      var rf = R.flags;
      var f = $toString$2(rf === undefined && R instanceof RegExp && !('flags' in RegExpPrototype$3) ? flags.call(R) : rf);
      return '/' + p + '/' + f;
    }, {
      unsafe: true
    });
  }

  var collection$2 = collection$4;
  var collectionStrong = collectionStrong$2; // `Set` constructor
  // https://tc39.es/ecma262/#sec-set-objects

  var es_set = collection$2('Set', function (init) {
    return function Set() {
      return init(this, arguments.length ? arguments[0] : undefined);
    };
  }, collectionStrong);

  var isRegExp$3 = isRegexp;

  var notARegexp = function notARegexp(it) {
    if (isRegExp$3(it)) {
      throw TypeError("The method doesn't accept regular expressions");
    }

    return it;
  };

  var wellKnownSymbol$g = wellKnownSymbol$E;
  var MATCH = wellKnownSymbol$g('match');

  var correctIsRegexpLogic = function correctIsRegexpLogic(METHOD_NAME) {
    var regexp = /./;

    try {
      '/./'[METHOD_NAME](regexp);
    } catch (error1) {
      try {
        regexp[MATCH] = false;
        return '/./'[METHOD_NAME](regexp);
      } catch (error2) {
        /* empty */
      }
    }

    return false;
  };

  var $$25 = _export;
  var getOwnPropertyDescriptor$1 = objectGetOwnPropertyDescriptor.f;
  var toLength$h = toLength$z;
  var toString$d = toString$n;
  var notARegExp$2 = notARegexp;
  var requireObjectCoercible$b = requireObjectCoercible$g;
  var correctIsRegExpLogic$2 = correctIsRegexpLogic;

  var $endsWith = ''.endsWith;
  var min$5 = Math.min;
  var CORRECT_IS_REGEXP_LOGIC$1 = correctIsRegExpLogic$2('endsWith'); // https://github.com/zloirock/core-js/pull/702

  var MDN_POLYFILL_BUG$1 = !CORRECT_IS_REGEXP_LOGIC$1 && !!function () {
    var descriptor = getOwnPropertyDescriptor$1(String.prototype, 'endsWith');
    return descriptor && !descriptor.writable;
  }(); // `String.prototype.endsWith` method
  // https://tc39.es/ecma262/#sec-string.prototype.endswith

  $$25({
    target: 'String',
    proto: true,
    forced: !MDN_POLYFILL_BUG$1 && !CORRECT_IS_REGEXP_LOGIC$1
  }, {
    endsWith: function endsWith(searchString
    /* , endPosition = @length */
    ) {
      var that = toString$d(requireObjectCoercible$b(this));
      notARegExp$2(searchString);
      var endPosition = arguments.length > 1 ? arguments[1] : undefined;
      var len = toLength$h(that.length);
      var end = endPosition === undefined ? len : min$5(toLength$h(endPosition), len);
      var search = toString$d(searchString);
      return $endsWith ? $endsWith.call(that, search, end) : that.slice(end - search.length, end) === search;
    }
  });

  var $$24 = _export;
  var notARegExp$1 = notARegexp;
  var requireObjectCoercible$a = requireObjectCoercible$g;
  var toString$c = toString$n;
  var correctIsRegExpLogic$1 = correctIsRegexpLogic; // `String.prototype.includes` method
  // https://tc39.es/ecma262/#sec-string.prototype.includes

  $$24({
    target: 'String',
    proto: true,
    forced: !correctIsRegExpLogic$1('includes')
  }, {
    includes: function includes(searchString
    /* , position = 0 */
    ) {
      return !!~toString$c(requireObjectCoercible$a(this)).indexOf(toString$c(notARegExp$1(searchString)), arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  var redefine$3 = redefine$e.exports;
  var regexpExec$2 = regexpExec$3;
  var fails$c = fails$K;
  var wellKnownSymbol$f = wellKnownSymbol$E;
  var createNonEnumerableProperty$b = createNonEnumerableProperty$m;
  var SPECIES = wellKnownSymbol$f('species');
  var RegExpPrototype$2 = RegExp.prototype;

  var fixRegexpWellKnownSymbolLogic = function fixRegexpWellKnownSymbolLogic(KEY, exec, FORCED, SHAM) {
    var SYMBOL = wellKnownSymbol$f(KEY);
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

        re.constructor[SPECIES] = function () {
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

        if ($exec === regexpExec$2 || $exec === RegExpPrototype$2.exec) {
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
      redefine$3(String.prototype, KEY, methods[0]);
      redefine$3(RegExpPrototype$2, SYMBOL, methods[1]);
    }

    if (SHAM) createNonEnumerableProperty$b(RegExpPrototype$2[SYMBOL], 'sham', true);
  };

  var toInteger$5 = toInteger$f;
  var toString$b = toString$n;
  var requireObjectCoercible$9 = requireObjectCoercible$g; // `String.prototype.codePointAt` methods implementation

  var createMethod$3 = function createMethod(CONVERT_TO_STRING) {
    return function ($this, pos) {
      var S = toString$b(requireObjectCoercible$9($this));
      var position = toInteger$5(pos);
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

  var charAt$3 = stringMultibyte.charAt; // `AdvanceStringIndex` abstract operation
  // https://tc39.es/ecma262/#sec-advancestringindex

  var advanceStringIndex$4 = function advanceStringIndex(S, index, unicode) {
    return index + (unicode ? charAt$3(S, index).length : 1);
  };

  var classof$4 = classofRaw$1;
  var regexpExec$1 = regexpExec$3; // `RegExpExec` abstract operation
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

    if (classof$4(R) !== 'RegExp') {
      throw TypeError('RegExp#exec called on incompatible receiver');
    }

    return regexpExec$1.call(R, S);
  };

  var fixRegExpWellKnownSymbolLogic$3 = fixRegexpWellKnownSymbolLogic;
  var anObject$18 = anObject$1z;
  var toLength$g = toLength$z;
  var toString$a = toString$n;
  var requireObjectCoercible$8 = requireObjectCoercible$g;
  var advanceStringIndex$3 = advanceStringIndex$4;
  var regExpExec$3 = regexpExecAbstract; // @@match logic

  fixRegExpWellKnownSymbolLogic$3('match', function (MATCH, nativeMatch, maybeCallNative) {
    return [// `String.prototype.match` method
    // https://tc39.es/ecma262/#sec-string.prototype.match
    function match(regexp) {
      var O = requireObjectCoercible$8(this);
      var matcher = regexp == undefined ? undefined : regexp[MATCH];
      return matcher !== undefined ? matcher.call(regexp, O) : new RegExp(regexp)[MATCH](toString$a(O));
    }, // `RegExp.prototype[@@match]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@match
    function (string) {
      var rx = anObject$18(this);
      var S = toString$a(string);
      var res = maybeCallNative(nativeMatch, rx, S);
      if (res.done) return res.value;
      if (!rx.global) return regExpExec$3(rx, S);
      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
      var A = [];
      var n = 0;
      var result;

      while ((result = regExpExec$3(rx, S)) !== null) {
        var matchStr = toString$a(result[0]);
        A[n] = matchStr;
        if (matchStr === '') rx.lastIndex = advanceStringIndex$3(S, toLength$g(rx.lastIndex), fullUnicode);
        n++;
      }

      return n === 0 ? null : A;
    }];
  });

  /* eslint-disable es/no-string-prototype-matchall -- safe */


  var $$23 = _export;
  var createIteratorConstructor$5 = createIteratorConstructor$7;
  var requireObjectCoercible$7 = requireObjectCoercible$g;
  var toLength$f = toLength$z;
  var toString$9 = toString$n;
  var aFunction$D = aFunction$S;
  var anObject$17 = anObject$1z;
  var classof$3 = classofRaw$1;
  var isRegExp$2 = isRegexp;
  var getRegExpFlags$1 = regexpFlags$1;
  var createNonEnumerableProperty$a = createNonEnumerableProperty$m;
  var fails$b = fails$K;
  var wellKnownSymbol$e = wellKnownSymbol$E;
  var speciesConstructor$b = speciesConstructor$f;
  var advanceStringIndex$2 = advanceStringIndex$4;
  var InternalStateModule$c = internalState;
  var IS_PURE$D = isPure;
  var MATCH_ALL = wellKnownSymbol$e('matchAll');
  var REGEXP_STRING = 'RegExp String';
  var REGEXP_STRING_ITERATOR = REGEXP_STRING + ' Iterator';
  var setInternalState$c = InternalStateModule$c.set;
  var getInternalState$9 = InternalStateModule$c.getterFor(REGEXP_STRING_ITERATOR);
  var RegExpPrototype$1 = RegExp.prototype;
  var regExpBuiltinExec = RegExpPrototype$1.exec;
  var nativeMatchAll = ''.matchAll;
  var WORKS_WITH_NON_GLOBAL_REGEX = !!nativeMatchAll && !fails$b(function () {
    'a'.matchAll(/./);
  });

  var regExpExec$2 = function regExpExec(R, S) {
    var exec = R.exec;
    var result;

    if (typeof exec == 'function') {
      result = exec.call(R, S);
      if (typeof result != 'object') throw TypeError('Incorrect exec result');
      return result;
    }

    return regExpBuiltinExec.call(R, S);
  }; // eslint-disable-next-line max-len -- ignore


  var $RegExpStringIterator = createIteratorConstructor$5(function RegExpStringIterator(regexp, string, global, fullUnicode) {
    setInternalState$c(this, {
      type: REGEXP_STRING_ITERATOR,
      regexp: regexp,
      string: string,
      global: global,
      unicode: fullUnicode,
      done: false
    });
  }, REGEXP_STRING, function next() {
    var state = getInternalState$9(this);
    if (state.done) return {
      value: undefined,
      done: true
    };
    var R = state.regexp;
    var S = state.string;
    var match = regExpExec$2(R, S);
    if (match === null) return {
      value: undefined,
      done: state.done = true
    };

    if (state.global) {
      if (toString$9(match[0]) === '') R.lastIndex = advanceStringIndex$2(S, toLength$f(R.lastIndex), state.unicode);
      return {
        value: match,
        done: false
      };
    }

    state.done = true;
    return {
      value: match,
      done: false
    };
  });

  var $matchAll = function $matchAll(string) {
    var R = anObject$17(this);
    var S = toString$9(string);
    var C, flagsValue, flags, matcher, global, fullUnicode;
    C = speciesConstructor$b(R, RegExp);
    flagsValue = R.flags;

    if (flagsValue === undefined && R instanceof RegExp && !('flags' in RegExpPrototype$1)) {
      flagsValue = getRegExpFlags$1.call(R);
    }

    flags = flagsValue === undefined ? '' : toString$9(flagsValue);
    matcher = new C(C === RegExp ? R.source : R, flags);
    global = !!~flags.indexOf('g');
    fullUnicode = !!~flags.indexOf('u');
    matcher.lastIndex = toLength$f(R.lastIndex);
    return new $RegExpStringIterator(matcher, S, global, fullUnicode);
  }; // `String.prototype.matchAll` method
  // https://tc39.es/ecma262/#sec-string.prototype.matchall


  $$23({
    target: 'String',
    proto: true,
    forced: WORKS_WITH_NON_GLOBAL_REGEX
  }, {
    matchAll: function matchAll(regexp) {
      var O = requireObjectCoercible$7(this);
      var flags, S, matcher, rx;

      if (regexp != null) {
        if (isRegExp$2(regexp)) {
          flags = toString$9(requireObjectCoercible$7('flags' in RegExpPrototype$1 ? regexp.flags : getRegExpFlags$1.call(regexp)));
          if (!~flags.indexOf('g')) throw TypeError('`.matchAll` does not allow non-global regexes');
        }

        if (WORKS_WITH_NON_GLOBAL_REGEX) return nativeMatchAll.apply(O, arguments);
        matcher = regexp[MATCH_ALL];
        if (matcher === undefined && IS_PURE$D && classof$3(regexp) == 'RegExp') matcher = $matchAll;
        if (matcher != null) return aFunction$D(matcher).call(regexp, O);
      } else if (WORKS_WITH_NON_GLOBAL_REGEX) return nativeMatchAll.apply(O, arguments);

      S = toString$9(O);
      rx = new RegExp(regexp, 'g');
      return rx[MATCH_ALL](S);
    }
  });
  MATCH_ALL in RegExpPrototype$1 || createNonEnumerableProperty$a(RegExpPrototype$1, MATCH_ALL, $matchAll);

  var toLength$e = toLength$z;
  var toString$8 = toString$n;
  var repeat = stringRepeat;
  var requireObjectCoercible$6 = requireObjectCoercible$g;
  var ceil = Math.ceil; // `String.prototype.{ padStart, padEnd }` methods implementation

  var createMethod$2 = function createMethod(IS_END) {
    return function ($this, maxLength, fillString) {
      var S = toString$8(requireObjectCoercible$6($this));
      var stringLength = S.length;
      var fillStr = fillString === undefined ? ' ' : toString$8(fillString);
      var intMaxLength = toLength$e(maxLength);
      var fillLen, stringFiller;
      if (intMaxLength <= stringLength || fillStr == '') return S;
      fillLen = intMaxLength - stringLength;
      stringFiller = repeat.call(fillStr, ceil(fillLen / fillStr.length));
      if (stringFiller.length > fillLen) stringFiller = stringFiller.slice(0, fillLen);
      return IS_END ? S + stringFiller : stringFiller + S;
    };
  };

  var stringPad = {
    // `String.prototype.padStart` method
    // https://tc39.es/ecma262/#sec-string.prototype.padstart
    start: createMethod$2(false),
    // `String.prototype.padEnd` method
    // https://tc39.es/ecma262/#sec-string.prototype.padend
    end: createMethod$2(true)
  };

  var userAgent = engineUserAgent; // eslint-disable-next-line unicorn/no-unsafe-regex -- safe

  var stringPadWebkitBug = /Version\/10(?:\.\d+){1,2}(?: [\w./]+)?(?: Mobile\/\w+)? Safari\//.test(userAgent);

  var $$22 = _export;
  var $padEnd = stringPad.end;
  var WEBKIT_BUG$1 = stringPadWebkitBug; // `String.prototype.padEnd` method
  // https://tc39.es/ecma262/#sec-string.prototype.padend

  $$22({
    target: 'String',
    proto: true,
    forced: WEBKIT_BUG$1
  }, {
    padEnd: function padEnd(maxLength
    /* , fillString = ' ' */
    ) {
      return $padEnd(this, maxLength, arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  var $$21 = _export;
  var $padStart = stringPad.start;
  var WEBKIT_BUG = stringPadWebkitBug; // `String.prototype.padStart` method
  // https://tc39.es/ecma262/#sec-string.prototype.padstart

  $$21({
    target: 'String',
    proto: true,
    forced: WEBKIT_BUG
  }, {
    padStart: function padStart(maxLength
    /* , fillString = ' ' */
    ) {
      return $padStart(this, maxLength, arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  var toObject$b = toObject$u;
  var floor$4 = Math.floor;
  var replace$1 = ''.replace;
  var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d{1,2}|<[^>]*>)/g;
  var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d{1,2})/g; // `GetSubstitution` abstract operation
  // https://tc39.es/ecma262/#sec-getsubstitution

  var getSubstitution$2 = function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
    var tailPos = position + matched.length;
    var m = captures.length;
    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;

    if (namedCaptures !== undefined) {
      namedCaptures = toObject$b(namedCaptures);
      symbols = SUBSTITUTION_SYMBOLS;
    }

    return replace$1.call(replacement, symbols, function (match, ch) {
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
            var f = floor$4(n / 10);
            if (f === 0) return match;
            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
            return match;
          }

          capture = captures[n - 1];
      }

      return capture === undefined ? '' : capture;
    });
  };

  var fixRegExpWellKnownSymbolLogic$2 = fixRegexpWellKnownSymbolLogic;
  var fails$a = fails$K;
  var anObject$16 = anObject$1z;
  var toInteger$4 = toInteger$f;
  var toLength$d = toLength$z;
  var toString$7 = toString$n;
  var requireObjectCoercible$5 = requireObjectCoercible$g;
  var advanceStringIndex$1 = advanceStringIndex$4;
  var getSubstitution$1 = getSubstitution$2;
  var regExpExec$1 = regexpExecAbstract;
  var wellKnownSymbol$d = wellKnownSymbol$E;
  var REPLACE$1 = wellKnownSymbol$d('replace');
  var max$2 = Math.max;
  var min$4 = Math.min;

  var maybeToString = function maybeToString(it) {
    return it === undefined ? it : String(it);
  }; // IE <= 11 replaces $0 with the whole match, as if it was $&
  // https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0


  var REPLACE_KEEPS_$0 = function () {
    // eslint-disable-next-line regexp/prefer-escape-replacement-dollar-char -- required for testing
    return 'a'.replace(/./, '$0') === '$0';
  }(); // Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string


  var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = function () {
    if (/./[REPLACE$1]) {
      return /./[REPLACE$1]('a', '$0') === '';
    }

    return false;
  }();

  var REPLACE_SUPPORTS_NAMED_GROUPS = !fails$a(function () {
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
      var O = requireObjectCoercible$5(this);
      var replacer = searchValue == undefined ? undefined : searchValue[REPLACE$1];
      return replacer !== undefined ? replacer.call(searchValue, O, replaceValue) : nativeReplace.call(toString$7(O), searchValue, replaceValue);
    }, // `RegExp.prototype[@@replace]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
    function (string, replaceValue) {
      var rx = anObject$16(this);
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
        if (matchStr === '') rx.lastIndex = advanceStringIndex$1(S, toLength$d(rx.lastIndex), fullUnicode);
      }

      var accumulatedResult = '';
      var nextSourcePosition = 0;

      for (var i = 0; i < results.length; i++) {
        result = results[i];
        var matched = toString$7(result[0]);
        var position = max$2(min$4(toInteger$4(result.index), S.length), 0);
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
          replacement = getSubstitution$1(matched, S, position, captures, namedCaptures, replaceValue);
        }

        if (position >= nextSourcePosition) {
          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }

      return accumulatedResult + S.slice(nextSourcePosition);
    }];
  }, !REPLACE_SUPPORTS_NAMED_GROUPS || !REPLACE_KEEPS_$0 || REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE);

  var $$20 = _export;
  var requireObjectCoercible$4 = requireObjectCoercible$g;
  var isRegExp$1 = isRegexp;
  var toString$6 = toString$n;
  var getRegExpFlags = regexpFlags$1;
  var getSubstitution = getSubstitution$2;
  var wellKnownSymbol$c = wellKnownSymbol$E;
  var REPLACE = wellKnownSymbol$c('replace');
  var RegExpPrototype = RegExp.prototype;
  var max$1 = Math.max;

  var stringIndexOf = function stringIndexOf(string, searchValue, fromIndex) {
    if (fromIndex > string.length) return -1;
    if (searchValue === '') return fromIndex;
    return string.indexOf(searchValue, fromIndex);
  }; // `String.prototype.replaceAll` method
  // https://tc39.es/ecma262/#sec-string.prototype.replaceall


  $$20({
    target: 'String',
    proto: true
  }, {
    replaceAll: function replaceAll(searchValue, replaceValue) {
      var O = requireObjectCoercible$4(this);
      var IS_REG_EXP, flags, replacer, string, searchString, functionalReplace, searchLength, advanceBy, replacement;
      var position = 0;
      var endOfLastMatch = 0;
      var result = '';

      if (searchValue != null) {
        IS_REG_EXP = isRegExp$1(searchValue);

        if (IS_REG_EXP) {
          flags = toString$6(requireObjectCoercible$4('flags' in RegExpPrototype ? searchValue.flags : getRegExpFlags.call(searchValue)));
          if (!~flags.indexOf('g')) throw TypeError('`.replaceAll` does not allow non-global regexes');
        }

        replacer = searchValue[REPLACE];

        if (replacer !== undefined) {
          return replacer.call(searchValue, O, replaceValue);
        }
      }

      string = toString$6(O);
      searchString = toString$6(searchValue);
      functionalReplace = typeof replaceValue === 'function';
      if (!functionalReplace) replaceValue = toString$6(replaceValue);
      searchLength = searchString.length;
      advanceBy = max$1(1, searchLength);
      position = stringIndexOf(string, searchString, 0);

      while (position !== -1) {
        if (functionalReplace) {
          replacement = toString$6(replaceValue(searchString, position, string));
        } else {
          replacement = getSubstitution(searchString, string, position, [], undefined, replaceValue);
        }

        result += string.slice(endOfLastMatch, position) + replacement;
        endOfLastMatch = position + searchLength;
        position = stringIndexOf(string, searchString, position + advanceBy);
      }

      if (endOfLastMatch < string.length) {
        result += string.slice(endOfLastMatch);
      }

      return result;
    }
  });

  // https://tc39.es/ecma262/#sec-samevalue
  // eslint-disable-next-line es/no-object-is -- safe

  var sameValue$1 = Object.is || function is(x, y) {
    // eslint-disable-next-line no-self-compare -- NaN check
    return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
  };

  var fixRegExpWellKnownSymbolLogic$1 = fixRegexpWellKnownSymbolLogic;
  var anObject$15 = anObject$1z;
  var requireObjectCoercible$3 = requireObjectCoercible$g;
  var sameValue = sameValue$1;
  var toString$5 = toString$n;
  var regExpExec = regexpExecAbstract; // @@search logic

  fixRegExpWellKnownSymbolLogic$1('search', function (SEARCH, nativeSearch, maybeCallNative) {
    return [// `String.prototype.search` method
    // https://tc39.es/ecma262/#sec-string.prototype.search
    function search(regexp) {
      var O = requireObjectCoercible$3(this);
      var searcher = regexp == undefined ? undefined : regexp[SEARCH];
      return searcher !== undefined ? searcher.call(regexp, O) : new RegExp(regexp)[SEARCH](toString$5(O));
    }, // `RegExp.prototype[@@search]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@search
    function (string) {
      var rx = anObject$15(this);
      var S = toString$5(string);
      var res = maybeCallNative(nativeSearch, rx, S);
      if (res.done) return res.value;
      var previousLastIndex = rx.lastIndex;
      if (!sameValue(previousLastIndex, 0)) rx.lastIndex = 0;
      var result = regExpExec(rx, S);
      if (!sameValue(rx.lastIndex, previousLastIndex)) rx.lastIndex = previousLastIndex;
      return result === null ? -1 : result.index;
    }];
  });

  var fixRegExpWellKnownSymbolLogic = fixRegexpWellKnownSymbolLogic;
  var isRegExp = isRegexp;
  var anObject$14 = anObject$1z;
  var requireObjectCoercible$2 = requireObjectCoercible$g;
  var speciesConstructor$a = speciesConstructor$f;
  var advanceStringIndex = advanceStringIndex$4;
  var toLength$c = toLength$z;
  var toString$4 = toString$n;
  var callRegExpExec = regexpExecAbstract;
  var regexpExec = regexpExec$3;
  var stickyHelpers = regexpStickyHelpers;
  var fails$9 = fails$K;
  var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y;
  var arrayPush = [].push;
  var min$3 = Math.min;
  var MAX_UINT32 = 0xFFFFFFFF; // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
  // Weex JS has frozen built-in prototypes, so use try / catch wrapper

  var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails$9(function () {
    // eslint-disable-next-line regexp/no-empty-group -- required for testing
    var re = /(?:)/;
    var originalExec = re.exec;

    re.exec = function () {
      return originalExec.apply(this, arguments);
    };

    var result = 'ab'.split(re);
    return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
  }); // @@split logic

  fixRegExpWellKnownSymbolLogic('split', function (SPLIT, nativeSplit, maybeCallNative) {
    var internalSplit;

    if ('abbc'.split(/(b)*/)[1] == 'c' || // eslint-disable-next-line regexp/no-empty-group -- required for testing
    'test'.split(/(?:)/, -1).length != 4 || 'ab'.split(/(?:ab)*/).length != 2 || '.'.split(/(.?)(.?)/).length != 4 || // eslint-disable-next-line regexp/no-assertion-capturing-group, regexp/no-empty-group -- required for testing
    '.'.split(/()()/).length > 1 || ''.split(/.?/).length) {
      // based on es5-shim implementation, need to rework it
      internalSplit = function internalSplit(separator, limit) {
        var string = toString$4(requireObjectCoercible$2(this));
        var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
        if (lim === 0) return [];
        if (separator === undefined) return [string]; // If `separator` is not a regex, use native split

        if (!isRegExp(separator)) {
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
      return splitter !== undefined ? splitter.call(separator, O, limit) : internalSplit.call(toString$4(O), separator, limit);
    }, // `RegExp.prototype[@@split]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (string, limit) {
      var rx = anObject$14(this);
      var S = toString$4(string);
      var res = maybeCallNative(internalSplit, rx, S, limit, internalSplit !== nativeSplit);
      if (res.done) return res.value;
      var C = speciesConstructor$a(rx, RegExp);
      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') + (rx.multiline ? 'm' : '') + (rx.unicode ? 'u' : '') + (UNSUPPORTED_Y ? 'g' : 'y'); // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.

      var splitter = new C(UNSUPPORTED_Y ? '^(?:' + rx.source + ')' : rx, flags);
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];

      while (q < S.length) {
        splitter.lastIndex = UNSUPPORTED_Y ? 0 : q;
        var z = callRegExpExec(splitter, UNSUPPORTED_Y ? S.slice(q) : S);
        var e;

        if (z === null || (e = min$3(toLength$c(splitter.lastIndex + (UNSUPPORTED_Y ? q : 0)), S.length)) === p) {
          q = advanceStringIndex(S, q, unicodeMatching);
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
  }, !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC, UNSUPPORTED_Y);

  var $$1$ = _export;
  var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
  var toLength$b = toLength$z;
  var toString$3 = toString$n;
  var notARegExp = notARegexp;
  var requireObjectCoercible$1 = requireObjectCoercible$g;
  var correctIsRegExpLogic = correctIsRegexpLogic;

  var $startsWith = ''.startsWith;
  var min$2 = Math.min;
  var CORRECT_IS_REGEXP_LOGIC = correctIsRegExpLogic('startsWith'); // https://github.com/zloirock/core-js/pull/702

  var MDN_POLYFILL_BUG = !CORRECT_IS_REGEXP_LOGIC && !!function () {
    var descriptor = getOwnPropertyDescriptor(String.prototype, 'startsWith');
    return descriptor && !descriptor.writable;
  }(); // `String.prototype.startsWith` method
  // https://tc39.es/ecma262/#sec-string.prototype.startswith

  $$1$({
    target: 'String',
    proto: true,
    forced: !MDN_POLYFILL_BUG && !CORRECT_IS_REGEXP_LOGIC
  }, {
    startsWith: function startsWith(searchString
    /* , position = 0 */
    ) {
      var that = toString$3(requireObjectCoercible$1(this));
      notARegExp(searchString);
      var index = toLength$b(min$2(arguments.length > 1 ? arguments[1] : undefined, that.length));
      var search = toString$3(searchString);
      return $startsWith ? $startsWith.call(that, search, index) : that.slice(index, index + search.length) === search;
    }
  });

  var fails$8 = fails$K;
  var whitespaces$1 = whitespaces$4;
  var non = '\u200B\u0085\u180E'; // check that a method works with the correct list
  // of whitespaces and has a correct name

  var stringTrimForced = function stringTrimForced(METHOD_NAME) {
    return fails$8(function () {
      return !!whitespaces$1[METHOD_NAME]() || non[METHOD_NAME]() != non || whitespaces$1[METHOD_NAME].name !== METHOD_NAME;
    });
  };

  var $$1_ = _export;
  var $trim = stringTrim.trim;
  var forcedStringTrimMethod$2 = stringTrimForced; // `String.prototype.trim` method
  // https://tc39.es/ecma262/#sec-string.prototype.trim

  $$1_({
    target: 'String',
    proto: true,
    forced: forcedStringTrimMethod$2('trim')
  }, {
    trim: function trim() {
      return $trim(this);
    }
  });

  var $$1Z = _export;
  var $trimEnd = stringTrim.end;
  var forcedStringTrimMethod$1 = stringTrimForced;
  var FORCED$7 = forcedStringTrimMethod$1('trimEnd');
  var trimEnd = FORCED$7 ? function trimEnd() {
    return $trimEnd(this); // eslint-disable-next-line es/no-string-prototype-trimstart-trimend -- safe
  } : ''.trimEnd; // `String.prototype.{ trimEnd, trimRight }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimend
  // https://tc39.es/ecma262/#String.prototype.trimright

  $$1Z({
    target: 'String',
    proto: true,
    forced: FORCED$7
  }, {
    trimEnd: trimEnd,
    trimRight: trimEnd
  });

  var $$1Y = _export;
  var $trimStart = stringTrim.start;
  var forcedStringTrimMethod = stringTrimForced;
  var FORCED$6 = forcedStringTrimMethod('trimStart');
  var trimStart = FORCED$6 ? function trimStart() {
    return $trimStart(this); // eslint-disable-next-line es/no-string-prototype-trimstart-trimend -- safe
  } : ''.trimStart; // `String.prototype.{ trimStart, trimLeft }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimstart
  // https://tc39.es/ecma262/#String.prototype.trimleft

  $$1Y({
    target: 'String',
    proto: true,
    forced: FORCED$6
  }, {
    trimStart: trimStart,
    trimLeft: trimStart
  });

  var typedArrayConstructor = {exports: {}};

  var NATIVE_ARRAY_BUFFER = arrayBufferNative;
  var DESCRIPTORS$6 = descriptors;
  var global$h = global$K;
  var isObject$8 = isObject$w;
  var has$6 = has$n;
  var classof$2 = classof$a;
  var createNonEnumerableProperty$9 = createNonEnumerableProperty$m;
  var redefine$2 = redefine$e.exports;
  var defineProperty$3 = objectDefineProperty.f;
  var getPrototypeOf$4 = objectGetPrototypeOf$1;
  var setPrototypeOf$1 = objectSetPrototypeOf$1;
  var wellKnownSymbol$b = wellKnownSymbol$E;
  var uid = uid$5;
  var Int8Array$3 = global$h.Int8Array;
  var Int8ArrayPrototype = Int8Array$3 && Int8Array$3.prototype;
  var Uint8ClampedArray = global$h.Uint8ClampedArray;
  var Uint8ClampedArrayPrototype = Uint8ClampedArray && Uint8ClampedArray.prototype;
  var TypedArray$1 = Int8Array$3 && getPrototypeOf$4(Int8Array$3);
  var TypedArrayPrototype$1 = Int8ArrayPrototype && getPrototypeOf$4(Int8ArrayPrototype);
  var ObjectPrototype = Object.prototype;
  var isPrototypeOf = ObjectPrototype.isPrototypeOf;
  var TO_STRING_TAG$5 = wellKnownSymbol$b('toStringTag');
  var TYPED_ARRAY_TAG$1 = uid('TYPED_ARRAY_TAG');
  var TYPED_ARRAY_CONSTRUCTOR$2 = uid('TYPED_ARRAY_CONSTRUCTOR'); // Fixing native typed arrays in Opera Presto crashes the browser, see #595

  var NATIVE_ARRAY_BUFFER_VIEWS$2 = NATIVE_ARRAY_BUFFER && !!setPrototypeOf$1 && classof$2(global$h.opera) !== 'Opera';
  var TYPED_ARRAY_TAG_REQIRED = false;
  var NAME, Constructor, Prototype;
  var TypedArrayConstructorsList = {
    Int8Array: 1,
    Uint8Array: 1,
    Uint8ClampedArray: 1,
    Int16Array: 2,
    Uint16Array: 2,
    Int32Array: 4,
    Uint32Array: 4,
    Float32Array: 4,
    Float64Array: 8
  };
  var BigIntArrayConstructorsList = {
    BigInt64Array: 8,
    BigUint64Array: 8
  };

  var isView = function isView(it) {
    if (!isObject$8(it)) return false;
    var klass = classof$2(it);
    return klass === 'DataView' || has$6(TypedArrayConstructorsList, klass) || has$6(BigIntArrayConstructorsList, klass);
  };

  var isTypedArray$1 = function isTypedArray(it) {
    if (!isObject$8(it)) return false;
    var klass = classof$2(it);
    return has$6(TypedArrayConstructorsList, klass) || has$6(BigIntArrayConstructorsList, klass);
  };

  var aTypedArray$r = function aTypedArray(it) {
    if (isTypedArray$1(it)) return it;
    throw TypeError('Target is not a typed array');
  };

  var aTypedArrayConstructor$4 = function aTypedArrayConstructor(C) {
    if (setPrototypeOf$1 && !isPrototypeOf.call(TypedArray$1, C)) {
      throw TypeError('Target is not a typed array constructor');
    }

    return C;
  };

  var exportTypedArrayMethod$s = function exportTypedArrayMethod(KEY, property, forced) {
    if (!DESCRIPTORS$6) return;
    if (forced) for (var ARRAY in TypedArrayConstructorsList) {
      var TypedArrayConstructor = global$h[ARRAY];
      if (TypedArrayConstructor && has$6(TypedArrayConstructor.prototype, KEY)) try {
        delete TypedArrayConstructor.prototype[KEY];
      } catch (error) {
        /* empty */
      }
    }

    if (!TypedArrayPrototype$1[KEY] || forced) {
      redefine$2(TypedArrayPrototype$1, KEY, forced ? property : NATIVE_ARRAY_BUFFER_VIEWS$2 && Int8ArrayPrototype[KEY] || property);
    }
  };

  var exportTypedArrayStaticMethod$2 = function exportTypedArrayStaticMethod(KEY, property, forced) {
    var ARRAY, TypedArrayConstructor;
    if (!DESCRIPTORS$6) return;

    if (setPrototypeOf$1) {
      if (forced) for (ARRAY in TypedArrayConstructorsList) {
        TypedArrayConstructor = global$h[ARRAY];
        if (TypedArrayConstructor && has$6(TypedArrayConstructor, KEY)) try {
          delete TypedArrayConstructor[KEY];
        } catch (error) {
          /* empty */
        }
      }

      if (!TypedArray$1[KEY] || forced) {
        // V8 ~ Chrome 49-50 `%TypedArray%` methods are non-writable non-configurable
        try {
          return redefine$2(TypedArray$1, KEY, forced ? property : NATIVE_ARRAY_BUFFER_VIEWS$2 && TypedArray$1[KEY] || property);
        } catch (error) {
          /* empty */
        }
      } else return;
    }

    for (ARRAY in TypedArrayConstructorsList) {
      TypedArrayConstructor = global$h[ARRAY];

      if (TypedArrayConstructor && (!TypedArrayConstructor[KEY] || forced)) {
        redefine$2(TypedArrayConstructor, KEY, property);
      }
    }
  };

  for (NAME in TypedArrayConstructorsList) {
    Constructor = global$h[NAME];
    Prototype = Constructor && Constructor.prototype;
    if (Prototype) createNonEnumerableProperty$9(Prototype, TYPED_ARRAY_CONSTRUCTOR$2, Constructor);else NATIVE_ARRAY_BUFFER_VIEWS$2 = false;
  }

  for (NAME in BigIntArrayConstructorsList) {
    Constructor = global$h[NAME];
    Prototype = Constructor && Constructor.prototype;
    if (Prototype) createNonEnumerableProperty$9(Prototype, TYPED_ARRAY_CONSTRUCTOR$2, Constructor);
  } // WebKit bug - typed arrays constructors prototype is Object.prototype


  if (!NATIVE_ARRAY_BUFFER_VIEWS$2 || typeof TypedArray$1 != 'function' || TypedArray$1 === Function.prototype) {
    // eslint-disable-next-line no-shadow -- safe
    TypedArray$1 = function TypedArray() {
      throw TypeError('Incorrect invocation');
    };

    if (NATIVE_ARRAY_BUFFER_VIEWS$2) for (NAME in TypedArrayConstructorsList) {
      if (global$h[NAME]) setPrototypeOf$1(global$h[NAME], TypedArray$1);
    }
  }

  if (!NATIVE_ARRAY_BUFFER_VIEWS$2 || !TypedArrayPrototype$1 || TypedArrayPrototype$1 === ObjectPrototype) {
    TypedArrayPrototype$1 = TypedArray$1.prototype;
    if (NATIVE_ARRAY_BUFFER_VIEWS$2) for (NAME in TypedArrayConstructorsList) {
      if (global$h[NAME]) setPrototypeOf$1(global$h[NAME].prototype, TypedArrayPrototype$1);
    }
  } // WebKit bug - one more object in Uint8ClampedArray prototype chain


  if (NATIVE_ARRAY_BUFFER_VIEWS$2 && getPrototypeOf$4(Uint8ClampedArrayPrototype) !== TypedArrayPrototype$1) {
    setPrototypeOf$1(Uint8ClampedArrayPrototype, TypedArrayPrototype$1);
  }

  if (DESCRIPTORS$6 && !has$6(TypedArrayPrototype$1, TO_STRING_TAG$5)) {
    TYPED_ARRAY_TAG_REQIRED = true;
    defineProperty$3(TypedArrayPrototype$1, TO_STRING_TAG$5, {
      get: function get() {
        return isObject$8(this) ? this[TYPED_ARRAY_TAG$1] : undefined;
      }
    });

    for (NAME in TypedArrayConstructorsList) {
      if (global$h[NAME]) {
        createNonEnumerableProperty$9(global$h[NAME], TYPED_ARRAY_TAG$1, NAME);
      }
    }
  }

  var arrayBufferViewCore = {
    NATIVE_ARRAY_BUFFER_VIEWS: NATIVE_ARRAY_BUFFER_VIEWS$2,
    TYPED_ARRAY_CONSTRUCTOR: TYPED_ARRAY_CONSTRUCTOR$2,
    TYPED_ARRAY_TAG: TYPED_ARRAY_TAG_REQIRED && TYPED_ARRAY_TAG$1,
    aTypedArray: aTypedArray$r,
    aTypedArrayConstructor: aTypedArrayConstructor$4,
    exportTypedArrayMethod: exportTypedArrayMethod$s,
    exportTypedArrayStaticMethod: exportTypedArrayStaticMethod$2,
    isView: isView,
    isTypedArray: isTypedArray$1,
    TypedArray: TypedArray$1,
    TypedArrayPrototype: TypedArrayPrototype$1
  };

  /* eslint-disable no-new -- required for testing */
  var global$g = global$K;
  var fails$7 = fails$K;
  var checkCorrectnessOfIteration = checkCorrectnessOfIteration$4;
  var NATIVE_ARRAY_BUFFER_VIEWS$1 = arrayBufferViewCore.NATIVE_ARRAY_BUFFER_VIEWS;
  var ArrayBuffer$2 = global$g.ArrayBuffer;
  var Int8Array$2 = global$g.Int8Array;
  var typedArrayConstructorsRequireWrappers = !NATIVE_ARRAY_BUFFER_VIEWS$1 || !fails$7(function () {
    Int8Array$2(1);
  }) || !fails$7(function () {
    new Int8Array$2(-1);
  }) || !checkCorrectnessOfIteration(function (iterable) {
    new Int8Array$2();
    new Int8Array$2(null);
    new Int8Array$2(1.5);
    new Int8Array$2(iterable);
  }, true) || fails$7(function () {
    // Safari (11+) bug - a reason why even Safari 13 should load a typed array polyfill
    return new Int8Array$2(new ArrayBuffer$2(2), 1, undefined).length !== 1;
  });

  var isObject$7 = isObject$w;
  var floor$3 = Math.floor; // `Number.isInteger` method implementation
  // https://tc39.es/ecma262/#sec-number.isinteger

  var isInteger$1 = function isInteger(it) {
    return !isObject$7(it) && isFinite(it) && floor$3(it) === it;
  };

  var toInteger$3 = toInteger$f;

  var toPositiveInteger$5 = function toPositiveInteger(it) {
    var result = toInteger$3(it);
    if (result < 0) throw RangeError("The argument can't be less than 0");
    return result;
  };

  var toPositiveInteger$4 = toPositiveInteger$5;

  var toOffset$1 = function toOffset(it, BYTES) {
    var offset = toPositiveInteger$4(it);
    if (offset % BYTES) throw RangeError('Wrong offset');
    return offset;
  };

  var toObject$a = toObject$u;
  var toLength$a = toLength$z;
  var getIteratorMethod$5 = getIteratorMethod$8;
  var isArrayIteratorMethod = isArrayIteratorMethod$3;
  var bind$g = functionBindContext;
  var aTypedArrayConstructor$3 = arrayBufferViewCore.aTypedArrayConstructor;

  var typedArrayFrom$2 = function from(source
  /* , mapfn, thisArg */
  ) {
    var O = toObject$a(source);
    var argumentsLength = arguments.length;
    var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var iteratorMethod = getIteratorMethod$5(O);
    var i, length, result, step, iterator, next;

    if (iteratorMethod != undefined && !isArrayIteratorMethod(iteratorMethod)) {
      iterator = iteratorMethod.call(O);
      next = iterator.next;
      O = [];

      while (!(step = next.call(iterator)).done) {
        O.push(step.value);
      }
    }

    if (mapping && argumentsLength > 2) {
      mapfn = bind$g(mapfn, arguments[2], 2);
    }

    length = toLength$a(O.length);
    result = new (aTypedArrayConstructor$3(this))(length);

    for (i = 0; length > i; i++) {
      result[i] = mapping ? mapfn(O[i], i) : O[i];
    }

    return result;
  };

  var $$1X = _export;
  var global$f = global$K;
  var DESCRIPTORS$5 = descriptors;
  var TYPED_ARRAYS_CONSTRUCTORS_REQUIRES_WRAPPERS$2 = typedArrayConstructorsRequireWrappers;
  var ArrayBufferViewCore$t = arrayBufferViewCore;
  var ArrayBufferModule = arrayBuffer;
  var anInstance$6 = anInstance$b;
  var createPropertyDescriptor$1 = createPropertyDescriptor$9;
  var createNonEnumerableProperty$8 = createNonEnumerableProperty$m;
  var isInteger = isInteger$1;
  var toLength$9 = toLength$z;
  var toIndex = toIndex$2;
  var toOffset = toOffset$1;
  var toPropertyKey$1 = toPropertyKey$9;
  var has$5 = has$n;
  var classof$1 = classof$a;
  var isObject$6 = isObject$w;
  var isSymbol = isSymbol$5;
  var create$5 = objectCreate$1;
  var setPrototypeOf = objectSetPrototypeOf$1;
  var getOwnPropertyNames = objectGetOwnPropertyNames.f;
  var typedArrayFrom$1 = typedArrayFrom$2;
  var forEach$1 = arrayIteration.forEach;
  var setSpecies$1 = setSpecies$7;
  var definePropertyModule = objectDefineProperty;
  var getOwnPropertyDescriptorModule = objectGetOwnPropertyDescriptor;
  var InternalStateModule$b = internalState;
  var inheritIfRequired = inheritIfRequired$3;
  var getInternalState$8 = InternalStateModule$b.get;
  var setInternalState$b = InternalStateModule$b.set;
  var nativeDefineProperty = definePropertyModule.f;
  var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  var round = Math.round;
  var RangeError$1 = global$f.RangeError;
  var ArrayBuffer$1 = ArrayBufferModule.ArrayBuffer;
  var DataView$1 = ArrayBufferModule.DataView;
  var NATIVE_ARRAY_BUFFER_VIEWS = ArrayBufferViewCore$t.NATIVE_ARRAY_BUFFER_VIEWS;
  var TYPED_ARRAY_CONSTRUCTOR$1 = ArrayBufferViewCore$t.TYPED_ARRAY_CONSTRUCTOR;
  var TYPED_ARRAY_TAG = ArrayBufferViewCore$t.TYPED_ARRAY_TAG;
  var TypedArray = ArrayBufferViewCore$t.TypedArray;
  var TypedArrayPrototype = ArrayBufferViewCore$t.TypedArrayPrototype;
  var aTypedArrayConstructor$2 = ArrayBufferViewCore$t.aTypedArrayConstructor;
  var isTypedArray = ArrayBufferViewCore$t.isTypedArray;
  var BYTES_PER_ELEMENT = 'BYTES_PER_ELEMENT';
  var WRONG_LENGTH = 'Wrong length';

  var fromList = function fromList(C, list) {
    var index = 0;
    var length = list.length;
    var result = new (aTypedArrayConstructor$2(C))(length);

    while (length > index) {
      result[index] = list[index++];
    }

    return result;
  };

  var addGetter = function addGetter(it, key) {
    nativeDefineProperty(it, key, {
      get: function get() {
        return getInternalState$8(this)[key];
      }
    });
  };

  var isArrayBuffer = function isArrayBuffer(it) {
    var klass;
    return it instanceof ArrayBuffer$1 || (klass = classof$1(it)) == 'ArrayBuffer' || klass == 'SharedArrayBuffer';
  };

  var isTypedArrayIndex = function isTypedArrayIndex(target, key) {
    return isTypedArray(target) && !isSymbol(key) && key in target && isInteger(+key) && key >= 0;
  };

  var wrappedGetOwnPropertyDescriptor = function getOwnPropertyDescriptor(target, key) {
    key = toPropertyKey$1(key);
    return isTypedArrayIndex(target, key) ? createPropertyDescriptor$1(2, target[key]) : nativeGetOwnPropertyDescriptor(target, key);
  };

  var wrappedDefineProperty = function defineProperty(target, key, descriptor) {
    key = toPropertyKey$1(key);

    if (isTypedArrayIndex(target, key) && isObject$6(descriptor) && has$5(descriptor, 'value') && !has$5(descriptor, 'get') && !has$5(descriptor, 'set') // TODO: add validation descriptor w/o calling accessors
    && !descriptor.configurable && (!has$5(descriptor, 'writable') || descriptor.writable) && (!has$5(descriptor, 'enumerable') || descriptor.enumerable)) {
      target[key] = descriptor.value;
      return target;
    }

    return nativeDefineProperty(target, key, descriptor);
  };

  if (DESCRIPTORS$5) {
    if (!NATIVE_ARRAY_BUFFER_VIEWS) {
      getOwnPropertyDescriptorModule.f = wrappedGetOwnPropertyDescriptor;
      definePropertyModule.f = wrappedDefineProperty;
      addGetter(TypedArrayPrototype, 'buffer');
      addGetter(TypedArrayPrototype, 'byteOffset');
      addGetter(TypedArrayPrototype, 'byteLength');
      addGetter(TypedArrayPrototype, 'length');
    }

    $$1X({
      target: 'Object',
      stat: true,
      forced: !NATIVE_ARRAY_BUFFER_VIEWS
    }, {
      getOwnPropertyDescriptor: wrappedGetOwnPropertyDescriptor,
      defineProperty: wrappedDefineProperty
    });

    typedArrayConstructor.exports = function (TYPE, wrapper, CLAMPED) {
      var BYTES = TYPE.match(/\d+$/)[0] / 8;
      var CONSTRUCTOR_NAME = TYPE + (CLAMPED ? 'Clamped' : '') + 'Array';
      var GETTER = 'get' + TYPE;
      var SETTER = 'set' + TYPE;
      var NativeTypedArrayConstructor = global$f[CONSTRUCTOR_NAME];
      var TypedArrayConstructor = NativeTypedArrayConstructor;
      var TypedArrayConstructorPrototype = TypedArrayConstructor && TypedArrayConstructor.prototype;
      var exported = {};

      var getter = function getter(that, index) {
        var data = getInternalState$8(that);
        return data.view[GETTER](index * BYTES + data.byteOffset, true);
      };

      var setter = function setter(that, index, value) {
        var data = getInternalState$8(that);
        if (CLAMPED) value = (value = round(value)) < 0 ? 0 : value > 0xFF ? 0xFF : value & 0xFF;
        data.view[SETTER](index * BYTES + data.byteOffset, value, true);
      };

      var addElement = function addElement(that, index) {
        nativeDefineProperty(that, index, {
          get: function get() {
            return getter(this, index);
          },
          set: function set(value) {
            return setter(this, index, value);
          },
          enumerable: true
        });
      };

      if (!NATIVE_ARRAY_BUFFER_VIEWS) {
        TypedArrayConstructor = wrapper(function (that, data, offset, $length) {
          anInstance$6(that, TypedArrayConstructor, CONSTRUCTOR_NAME);
          var index = 0;
          var byteOffset = 0;
          var buffer, byteLength, length;

          if (!isObject$6(data)) {
            length = toIndex(data);
            byteLength = length * BYTES;
            buffer = new ArrayBuffer$1(byteLength);
          } else if (isArrayBuffer(data)) {
            buffer = data;
            byteOffset = toOffset(offset, BYTES);
            var $len = data.byteLength;

            if ($length === undefined) {
              if ($len % BYTES) throw RangeError$1(WRONG_LENGTH);
              byteLength = $len - byteOffset;
              if (byteLength < 0) throw RangeError$1(WRONG_LENGTH);
            } else {
              byteLength = toLength$9($length) * BYTES;
              if (byteLength + byteOffset > $len) throw RangeError$1(WRONG_LENGTH);
            }

            length = byteLength / BYTES;
          } else if (isTypedArray(data)) {
            return fromList(TypedArrayConstructor, data);
          } else {
            return typedArrayFrom$1.call(TypedArrayConstructor, data);
          }

          setInternalState$b(that, {
            buffer: buffer,
            byteOffset: byteOffset,
            byteLength: byteLength,
            length: length,
            view: new DataView$1(buffer)
          });

          while (index < length) {
            addElement(that, index++);
          }
        });
        if (setPrototypeOf) setPrototypeOf(TypedArrayConstructor, TypedArray);
        TypedArrayConstructorPrototype = TypedArrayConstructor.prototype = create$5(TypedArrayPrototype);
      } else if (TYPED_ARRAYS_CONSTRUCTORS_REQUIRES_WRAPPERS$2) {
        TypedArrayConstructor = wrapper(function (dummy, data, typedArrayOffset, $length) {
          anInstance$6(dummy, TypedArrayConstructor, CONSTRUCTOR_NAME);
          return inheritIfRequired(function () {
            if (!isObject$6(data)) return new NativeTypedArrayConstructor(toIndex(data));
            if (isArrayBuffer(data)) return $length !== undefined ? new NativeTypedArrayConstructor(data, toOffset(typedArrayOffset, BYTES), $length) : typedArrayOffset !== undefined ? new NativeTypedArrayConstructor(data, toOffset(typedArrayOffset, BYTES)) : new NativeTypedArrayConstructor(data);
            if (isTypedArray(data)) return fromList(TypedArrayConstructor, data);
            return typedArrayFrom$1.call(TypedArrayConstructor, data);
          }(), dummy, TypedArrayConstructor);
        });
        if (setPrototypeOf) setPrototypeOf(TypedArrayConstructor, TypedArray);
        forEach$1(getOwnPropertyNames(NativeTypedArrayConstructor), function (key) {
          if (!(key in TypedArrayConstructor)) {
            createNonEnumerableProperty$8(TypedArrayConstructor, key, NativeTypedArrayConstructor[key]);
          }
        });
        TypedArrayConstructor.prototype = TypedArrayConstructorPrototype;
      }

      if (TypedArrayConstructorPrototype.constructor !== TypedArrayConstructor) {
        createNonEnumerableProperty$8(TypedArrayConstructorPrototype, 'constructor', TypedArrayConstructor);
      }

      createNonEnumerableProperty$8(TypedArrayConstructorPrototype, TYPED_ARRAY_CONSTRUCTOR$1, TypedArrayConstructor);

      if (TYPED_ARRAY_TAG) {
        createNonEnumerableProperty$8(TypedArrayConstructorPrototype, TYPED_ARRAY_TAG, CONSTRUCTOR_NAME);
      }

      exported[CONSTRUCTOR_NAME] = TypedArrayConstructor;
      $$1X({
        global: true,
        forced: TypedArrayConstructor != NativeTypedArrayConstructor,
        sham: !NATIVE_ARRAY_BUFFER_VIEWS
      }, exported);

      if (!(BYTES_PER_ELEMENT in TypedArrayConstructor)) {
        createNonEnumerableProperty$8(TypedArrayConstructor, BYTES_PER_ELEMENT, BYTES);
      }

      if (!(BYTES_PER_ELEMENT in TypedArrayConstructorPrototype)) {
        createNonEnumerableProperty$8(TypedArrayConstructorPrototype, BYTES_PER_ELEMENT, BYTES);
      }

      setSpecies$1(CONSTRUCTOR_NAME);
    };
  } else typedArrayConstructor.exports = function () {
    /* empty */
  };

  var createTypedArrayConstructor$8 = typedArrayConstructor.exports; // `Float32Array` constructor
  // https://tc39.es/ecma262/#sec-typedarray-objects

  createTypedArrayConstructor$8('Float32', function (init) {
    return function Float32Array(data, byteOffset, length) {
      return init(this, data, byteOffset, length);
    };
  });

  var createTypedArrayConstructor$7 = typedArrayConstructor.exports; // `Float64Array` constructor
  // https://tc39.es/ecma262/#sec-typedarray-objects

  createTypedArrayConstructor$7('Float64', function (init) {
    return function Float64Array(data, byteOffset, length) {
      return init(this, data, byteOffset, length);
    };
  });

  var createTypedArrayConstructor$6 = typedArrayConstructor.exports; // `Int8Array` constructor
  // https://tc39.es/ecma262/#sec-typedarray-objects

  createTypedArrayConstructor$6('Int8', function (init) {
    return function Int8Array(data, byteOffset, length) {
      return init(this, data, byteOffset, length);
    };
  });

  var createTypedArrayConstructor$5 = typedArrayConstructor.exports; // `Int16Array` constructor
  // https://tc39.es/ecma262/#sec-typedarray-objects

  createTypedArrayConstructor$5('Int16', function (init) {
    return function Int16Array(data, byteOffset, length) {
      return init(this, data, byteOffset, length);
    };
  });

  var createTypedArrayConstructor$4 = typedArrayConstructor.exports; // `Int32Array` constructor
  // https://tc39.es/ecma262/#sec-typedarray-objects

  createTypedArrayConstructor$4('Int32', function (init) {
    return function Int32Array(data, byteOffset, length) {
      return init(this, data, byteOffset, length);
    };
  });

  var createTypedArrayConstructor$3 = typedArrayConstructor.exports; // `Uint8Array` constructor
  // https://tc39.es/ecma262/#sec-typedarray-objects

  createTypedArrayConstructor$3('Uint8', function (init) {
    return function Uint8Array(data, byteOffset, length) {
      return init(this, data, byteOffset, length);
    };
  });

  var createTypedArrayConstructor$2 = typedArrayConstructor.exports; // `Uint8ClampedArray` constructor
  // https://tc39.es/ecma262/#sec-typedarray-objects

  createTypedArrayConstructor$2('Uint8', function (init) {
    return function Uint8ClampedArray(data, byteOffset, length) {
      return init(this, data, byteOffset, length);
    };
  }, true);

  var createTypedArrayConstructor$1 = typedArrayConstructor.exports; // `Uint16Array` constructor
  // https://tc39.es/ecma262/#sec-typedarray-objects

  createTypedArrayConstructor$1('Uint16', function (init) {
    return function Uint16Array(data, byteOffset, length) {
      return init(this, data, byteOffset, length);
    };
  });

  var createTypedArrayConstructor = typedArrayConstructor.exports; // `Uint32Array` constructor
  // https://tc39.es/ecma262/#sec-typedarray-objects

  createTypedArrayConstructor('Uint32', function (init) {
    return function Uint32Array(data, byteOffset, length) {
      return init(this, data, byteOffset, length);
    };
  });

  var toObject$9 = toObject$u;
  var toAbsoluteIndex = toAbsoluteIndex$6;
  var toLength$8 = toLength$z;
  var min$1 = Math.min; // `Array.prototype.copyWithin` method implementation
  // https://tc39.es/ecma262/#sec-array.prototype.copywithin
  // eslint-disable-next-line es/no-array-prototype-copywithin -- safe

  var arrayCopyWithin = [].copyWithin || function copyWithin(target
  /* = 0 */
  , start
  /* = 0, end = @length */
  ) {
    var O = toObject$9(this);
    var len = toLength$8(O.length);
    var to = toAbsoluteIndex(target, len);
    var from = toAbsoluteIndex(start, len);
    var end = arguments.length > 2 ? arguments[2] : undefined;
    var count = min$1((end === undefined ? len : toAbsoluteIndex(end, len)) - from, len - to);
    var inc = 1;

    if (from < to && to < from + count) {
      inc = -1;
      from += count - 1;
      to += count - 1;
    }

    while (count-- > 0) {
      if (from in O) O[to] = O[from];else delete O[to];
      to += inc;
      from += inc;
    }

    return O;
  };

  var ArrayBufferViewCore$s = arrayBufferViewCore;
  var $copyWithin = arrayCopyWithin;
  var aTypedArray$q = ArrayBufferViewCore$s.aTypedArray;
  var exportTypedArrayMethod$r = ArrayBufferViewCore$s.exportTypedArrayMethod; // `%TypedArray%.prototype.copyWithin` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.copywithin

  exportTypedArrayMethod$r('copyWithin', function copyWithin(target, start
  /* , end */
  ) {
    return $copyWithin.call(aTypedArray$q(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
  });

  var ArrayBufferViewCore$r = arrayBufferViewCore;
  var $every$1 = arrayIteration.every;
  var aTypedArray$p = ArrayBufferViewCore$r.aTypedArray;
  var exportTypedArrayMethod$q = ArrayBufferViewCore$r.exportTypedArrayMethod; // `%TypedArray%.prototype.every` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.every

  exportTypedArrayMethod$q('every', function every(callbackfn
  /* , thisArg */
  ) {
    return $every$1(aTypedArray$p(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  });

  var ArrayBufferViewCore$q = arrayBufferViewCore;
  var $fill = arrayFill$1;
  var aTypedArray$o = ArrayBufferViewCore$q.aTypedArray;
  var exportTypedArrayMethod$p = ArrayBufferViewCore$q.exportTypedArrayMethod; // `%TypedArray%.prototype.fill` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.fill
  // eslint-disable-next-line no-unused-vars -- required for `.length`

  exportTypedArrayMethod$p('fill', function fill(value
  /* , start, end */
  ) {
    return $fill.apply(aTypedArray$o(this), arguments);
  });

  var arrayFromConstructorAndList$2 = function arrayFromConstructorAndList(Constructor, list) {
    var index = 0;
    var length = list.length;
    var result = new Constructor(length);

    while (length > index) {
      result[index] = list[index++];
    }

    return result;
  };

  var ArrayBufferViewCore$p = arrayBufferViewCore;
  var speciesConstructor$9 = speciesConstructor$f;
  var TYPED_ARRAY_CONSTRUCTOR = ArrayBufferViewCore$p.TYPED_ARRAY_CONSTRUCTOR;
  var aTypedArrayConstructor$1 = ArrayBufferViewCore$p.aTypedArrayConstructor; // a part of `TypedArraySpeciesCreate` abstract operation
  // https://tc39.es/ecma262/#typedarray-species-create

  var typedArraySpeciesConstructor$4 = function typedArraySpeciesConstructor(originalArray) {
    return aTypedArrayConstructor$1(speciesConstructor$9(originalArray, originalArray[TYPED_ARRAY_CONSTRUCTOR]));
  };

  var arrayFromConstructorAndList$1 = arrayFromConstructorAndList$2;
  var typedArraySpeciesConstructor$3 = typedArraySpeciesConstructor$4;

  var typedArrayFromSpeciesAndList = function typedArrayFromSpeciesAndList(instance, list) {
    return arrayFromConstructorAndList$1(typedArraySpeciesConstructor$3(instance), list);
  };

  var ArrayBufferViewCore$o = arrayBufferViewCore;
  var $filter = arrayIteration.filter;
  var fromSpeciesAndList$3 = typedArrayFromSpeciesAndList;
  var aTypedArray$n = ArrayBufferViewCore$o.aTypedArray;
  var exportTypedArrayMethod$o = ArrayBufferViewCore$o.exportTypedArrayMethod; // `%TypedArray%.prototype.filter` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.filter

  exportTypedArrayMethod$o('filter', function filter(callbackfn
  /* , thisArg */
  ) {
    var list = $filter(aTypedArray$n(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    return fromSpeciesAndList$3(this, list);
  });

  var ArrayBufferViewCore$n = arrayBufferViewCore;
  var $find$1 = arrayIteration.find;
  var aTypedArray$m = ArrayBufferViewCore$n.aTypedArray;
  var exportTypedArrayMethod$n = ArrayBufferViewCore$n.exportTypedArrayMethod; // `%TypedArray%.prototype.find` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.find

  exportTypedArrayMethod$n('find', function find(predicate
  /* , thisArg */
  ) {
    return $find$1(aTypedArray$m(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
  });

  var ArrayBufferViewCore$m = arrayBufferViewCore;
  var $findIndex = arrayIteration.findIndex;
  var aTypedArray$l = ArrayBufferViewCore$m.aTypedArray;
  var exportTypedArrayMethod$m = ArrayBufferViewCore$m.exportTypedArrayMethod; // `%TypedArray%.prototype.findIndex` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.findindex

  exportTypedArrayMethod$m('findIndex', function findIndex(predicate
  /* , thisArg */
  ) {
    return $findIndex(aTypedArray$l(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
  });

  var ArrayBufferViewCore$l = arrayBufferViewCore;
  var $forEach$2 = arrayIteration.forEach;
  var aTypedArray$k = ArrayBufferViewCore$l.aTypedArray;
  var exportTypedArrayMethod$l = ArrayBufferViewCore$l.exportTypedArrayMethod; // `%TypedArray%.prototype.forEach` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.foreach

  exportTypedArrayMethod$l('forEach', function forEach(callbackfn
  /* , thisArg */
  ) {
    $forEach$2(aTypedArray$k(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  });

  var TYPED_ARRAYS_CONSTRUCTORS_REQUIRES_WRAPPERS$1 = typedArrayConstructorsRequireWrappers;
  var exportTypedArrayStaticMethod$1 = arrayBufferViewCore.exportTypedArrayStaticMethod;
  var typedArrayFrom = typedArrayFrom$2; // `%TypedArray%.from` method
  // https://tc39.es/ecma262/#sec-%typedarray%.from

  exportTypedArrayStaticMethod$1('from', typedArrayFrom, TYPED_ARRAYS_CONSTRUCTORS_REQUIRES_WRAPPERS$1);

  var ArrayBufferViewCore$k = arrayBufferViewCore;
  var $includes = arrayIncludes.includes;
  var aTypedArray$j = ArrayBufferViewCore$k.aTypedArray;
  var exportTypedArrayMethod$k = ArrayBufferViewCore$k.exportTypedArrayMethod; // `%TypedArray%.prototype.includes` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.includes

  exportTypedArrayMethod$k('includes', function includes(searchElement
  /* , fromIndex */
  ) {
    return $includes(aTypedArray$j(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
  });

  var ArrayBufferViewCore$j = arrayBufferViewCore;
  var $indexOf = arrayIncludes.indexOf;
  var aTypedArray$i = ArrayBufferViewCore$j.aTypedArray;
  var exportTypedArrayMethod$j = ArrayBufferViewCore$j.exportTypedArrayMethod; // `%TypedArray%.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.indexof

  exportTypedArrayMethod$j('indexOf', function indexOf(searchElement
  /* , fromIndex */
  ) {
    return $indexOf(aTypedArray$i(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
  });

  var global$e = global$K;
  var ArrayBufferViewCore$i = arrayBufferViewCore;
  var ArrayIterators = es_array_iterator;
  var wellKnownSymbol$a = wellKnownSymbol$E;
  var ITERATOR$3 = wellKnownSymbol$a('iterator');
  var Uint8Array$1 = global$e.Uint8Array;
  var arrayValues = ArrayIterators.values;
  var arrayKeys = ArrayIterators.keys;
  var arrayEntries = ArrayIterators.entries;
  var aTypedArray$h = ArrayBufferViewCore$i.aTypedArray;
  var exportTypedArrayMethod$i = ArrayBufferViewCore$i.exportTypedArrayMethod;
  var nativeTypedArrayIterator = Uint8Array$1 && Uint8Array$1.prototype[ITERATOR$3];
  var CORRECT_ITER_NAME = !!nativeTypedArrayIterator && (nativeTypedArrayIterator.name == 'values' || nativeTypedArrayIterator.name == undefined);

  var typedArrayValues = function values() {
    return arrayValues.call(aTypedArray$h(this));
  }; // `%TypedArray%.prototype.entries` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.entries


  exportTypedArrayMethod$i('entries', function entries() {
    return arrayEntries.call(aTypedArray$h(this));
  }); // `%TypedArray%.prototype.keys` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.keys

  exportTypedArrayMethod$i('keys', function keys() {
    return arrayKeys.call(aTypedArray$h(this));
  }); // `%TypedArray%.prototype.values` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.values

  exportTypedArrayMethod$i('values', typedArrayValues, !CORRECT_ITER_NAME); // `%TypedArray%.prototype[@@iterator]` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype-@@iterator

  exportTypedArrayMethod$i(ITERATOR$3, typedArrayValues, !CORRECT_ITER_NAME);

  var ArrayBufferViewCore$h = arrayBufferViewCore;
  var aTypedArray$g = ArrayBufferViewCore$h.aTypedArray;
  var exportTypedArrayMethod$h = ArrayBufferViewCore$h.exportTypedArrayMethod;
  var $join = [].join; // `%TypedArray%.prototype.join` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.join
  // eslint-disable-next-line no-unused-vars -- required for `.length`

  exportTypedArrayMethod$h('join', function join(separator) {
    return $join.apply(aTypedArray$g(this), arguments);
  });

  var ArrayBufferViewCore$g = arrayBufferViewCore;
  var $lastIndexOf = arrayLastIndexOf;
  var aTypedArray$f = ArrayBufferViewCore$g.aTypedArray;
  var exportTypedArrayMethod$g = ArrayBufferViewCore$g.exportTypedArrayMethod; // `%TypedArray%.prototype.lastIndexOf` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.lastindexof
  // eslint-disable-next-line no-unused-vars -- required for `.length`

  exportTypedArrayMethod$g('lastIndexOf', function lastIndexOf(searchElement
  /* , fromIndex */
  ) {
    return $lastIndexOf.apply(aTypedArray$f(this), arguments);
  });

  var ArrayBufferViewCore$f = arrayBufferViewCore;
  var $map = arrayIteration.map;
  var typedArraySpeciesConstructor$2 = typedArraySpeciesConstructor$4;
  var aTypedArray$e = ArrayBufferViewCore$f.aTypedArray;
  var exportTypedArrayMethod$f = ArrayBufferViewCore$f.exportTypedArrayMethod; // `%TypedArray%.prototype.map` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.map

  exportTypedArrayMethod$f('map', function map(mapfn
  /* , thisArg */
  ) {
    return $map(aTypedArray$e(this), mapfn, arguments.length > 1 ? arguments[1] : undefined, function (O, length) {
      return new (typedArraySpeciesConstructor$2(O))(length);
    });
  });

  var ArrayBufferViewCore$e = arrayBufferViewCore;
  var TYPED_ARRAYS_CONSTRUCTORS_REQUIRES_WRAPPERS = typedArrayConstructorsRequireWrappers;
  var aTypedArrayConstructor = ArrayBufferViewCore$e.aTypedArrayConstructor;
  var exportTypedArrayStaticMethod = ArrayBufferViewCore$e.exportTypedArrayStaticMethod; // `%TypedArray%.of` method
  // https://tc39.es/ecma262/#sec-%typedarray%.of

  exportTypedArrayStaticMethod('of', function of() {
    var index = 0;
    var length = arguments.length;
    var result = new (aTypedArrayConstructor(this))(length);

    while (length > index) {
      result[index] = arguments[index++];
    }

    return result;
  }, TYPED_ARRAYS_CONSTRUCTORS_REQUIRES_WRAPPERS);

  var ArrayBufferViewCore$d = arrayBufferViewCore;
  var $reduce = arrayReduce.left;
  var aTypedArray$d = ArrayBufferViewCore$d.aTypedArray;
  var exportTypedArrayMethod$e = ArrayBufferViewCore$d.exportTypedArrayMethod; // `%TypedArray%.prototype.reduce` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.reduce

  exportTypedArrayMethod$e('reduce', function reduce(callbackfn
  /* , initialValue */
  ) {
    return $reduce(aTypedArray$d(this), callbackfn, arguments.length, arguments.length > 1 ? arguments[1] : undefined);
  });

  var ArrayBufferViewCore$c = arrayBufferViewCore;
  var $reduceRight = arrayReduce.right;
  var aTypedArray$c = ArrayBufferViewCore$c.aTypedArray;
  var exportTypedArrayMethod$d = ArrayBufferViewCore$c.exportTypedArrayMethod; // `%TypedArray%.prototype.reduceRicht` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.reduceright

  exportTypedArrayMethod$d('reduceRight', function reduceRight(callbackfn
  /* , initialValue */
  ) {
    return $reduceRight(aTypedArray$c(this), callbackfn, arguments.length, arguments.length > 1 ? arguments[1] : undefined);
  });

  var ArrayBufferViewCore$b = arrayBufferViewCore;
  var aTypedArray$b = ArrayBufferViewCore$b.aTypedArray;
  var exportTypedArrayMethod$c = ArrayBufferViewCore$b.exportTypedArrayMethod;
  var floor$2 = Math.floor; // `%TypedArray%.prototype.reverse` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.reverse

  exportTypedArrayMethod$c('reverse', function reverse() {
    var that = this;
    var length = aTypedArray$b(that).length;
    var middle = floor$2(length / 2);
    var index = 0;
    var value;

    while (index < middle) {
      value = that[index];
      that[index++] = that[--length];
      that[length] = value;
    }

    return that;
  });

  var ArrayBufferViewCore$a = arrayBufferViewCore;
  var typedArraySpeciesConstructor$1 = typedArraySpeciesConstructor$4;
  var fails$6 = fails$K;
  var aTypedArray$a = ArrayBufferViewCore$a.aTypedArray;
  var exportTypedArrayMethod$b = ArrayBufferViewCore$a.exportTypedArrayMethod;
  var $slice$1 = [].slice;
  var FORCED$5 = fails$6(function () {
    // eslint-disable-next-line es/no-typed-arrays -- required for testing
    new Int8Array(1).slice();
  }); // `%TypedArray%.prototype.slice` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.slice

  exportTypedArrayMethod$b('slice', function slice(start, end) {
    var list = $slice$1.call(aTypedArray$a(this), start, end);
    var C = typedArraySpeciesConstructor$1(this);
    var index = 0;
    var length = list.length;
    var result = new C(length);

    while (length > index) {
      result[index] = list[index++];
    }

    return result;
  }, FORCED$5);

  var ArrayBufferViewCore$9 = arrayBufferViewCore;
  var $some$1 = arrayIteration.some;
  var aTypedArray$9 = ArrayBufferViewCore$9.aTypedArray;
  var exportTypedArrayMethod$a = ArrayBufferViewCore$9.exportTypedArrayMethod; // `%TypedArray%.prototype.some` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.some

  exportTypedArrayMethod$a('some', function some(callbackfn
  /* , thisArg */
  ) {
    return $some$1(aTypedArray$9(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  });

  var ArrayBufferViewCore$8 = arrayBufferViewCore;
  var global$d = global$K;
  var fails$5 = fails$K;
  var aFunction$C = aFunction$S;
  var toLength$7 = toLength$z;
  var internalSort = arraySort;
  var FF = engineFfVersion;
  var IE_OR_EDGE = engineIsIeOrEdge;
  var V8 = engineV8Version;
  var WEBKIT = engineWebkitVersion;
  var aTypedArray$8 = ArrayBufferViewCore$8.aTypedArray;
  var exportTypedArrayMethod$9 = ArrayBufferViewCore$8.exportTypedArrayMethod;
  var Uint16Array = global$d.Uint16Array;
  var nativeSort = Uint16Array && Uint16Array.prototype.sort; // WebKit

  var ACCEPT_INCORRECT_ARGUMENTS = !!nativeSort && !fails$5(function () {
    var array = new Uint16Array(2);
    array.sort(null);
    array.sort({});
  });
  var STABLE_SORT = !!nativeSort && !fails$5(function () {
    // feature detection can be too slow, so check engines versions
    if (V8) return V8 < 74;
    if (FF) return FF < 67;
    if (IE_OR_EDGE) return true;
    if (WEBKIT) return WEBKIT < 602;
    var array = new Uint16Array(516);
    var expected = Array(516);
    var index, mod;

    for (index = 0; index < 516; index++) {
      mod = index % 4;
      array[index] = 515 - index;
      expected[index] = index - 2 * mod + 3;
    }

    array.sort(function (a, b) {
      return (a / 4 | 0) - (b / 4 | 0);
    });

    for (index = 0; index < 516; index++) {
      if (array[index] !== expected[index]) return true;
    }
  });

  var getSortCompare = function getSortCompare(comparefn) {
    return function (x, y) {
      if (comparefn !== undefined) return +comparefn(x, y) || 0; // eslint-disable-next-line no-self-compare -- NaN check

      if (y !== y) return -1; // eslint-disable-next-line no-self-compare -- NaN check

      if (x !== x) return 1;
      if (x === 0 && y === 0) return 1 / x > 0 && 1 / y < 0 ? 1 : -1;
      return x > y;
    };
  }; // `%TypedArray%.prototype.sort` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.sort


  exportTypedArrayMethod$9('sort', function sort(comparefn) {
    var array = this;
    if (comparefn !== undefined) aFunction$C(comparefn);
    if (STABLE_SORT) return nativeSort.call(array, comparefn);
    aTypedArray$8(array);
    var arrayLength = toLength$7(array.length);
    var items = Array(arrayLength);
    var index;

    for (index = 0; index < arrayLength; index++) {
      items[index] = array[index];
    }

    items = internalSort(array, getSortCompare(comparefn));

    for (index = 0; index < arrayLength; index++) {
      array[index] = items[index];
    }

    return array;
  }, !STABLE_SORT || ACCEPT_INCORRECT_ARGUMENTS);

  var global$c = global$K;
  var ArrayBufferViewCore$7 = arrayBufferViewCore;
  var fails$4 = fails$K;
  var Int8Array$1 = global$c.Int8Array;
  var aTypedArray$7 = ArrayBufferViewCore$7.aTypedArray;
  var exportTypedArrayMethod$8 = ArrayBufferViewCore$7.exportTypedArrayMethod;
  var $toLocaleString = [].toLocaleString;
  var $slice = [].slice; // iOS Safari 6.x fails here

  var TO_LOCALE_STRING_BUG = !!Int8Array$1 && fails$4(function () {
    $toLocaleString.call(new Int8Array$1(1));
  });
  var FORCED$4 = fails$4(function () {
    return [1, 2].toLocaleString() != new Int8Array$1([1, 2]).toLocaleString();
  }) || !fails$4(function () {
    Int8Array$1.prototype.toLocaleString.call([1, 2]);
  }); // `%TypedArray%.prototype.toLocaleString` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.tolocalestring

  exportTypedArrayMethod$8('toLocaleString', function toLocaleString() {
    return $toLocaleString.apply(TO_LOCALE_STRING_BUG ? $slice.call(aTypedArray$7(this)) : aTypedArray$7(this), arguments);
  }, FORCED$4);

  var exportTypedArrayMethod$7 = arrayBufferViewCore.exportTypedArrayMethod;
  var fails$3 = fails$K;
  var global$b = global$K;
  var Uint8Array = global$b.Uint8Array;
  var Uint8ArrayPrototype = Uint8Array && Uint8Array.prototype || {};
  var arrayToString = [].toString;
  var arrayJoin = [].join;

  if (fails$3(function () {
    arrayToString.call({});
  })) {
    arrayToString = function toString() {
      return arrayJoin.call(this);
    };
  }

  var IS_NOT_ARRAY_METHOD = Uint8ArrayPrototype.toString != arrayToString; // `%TypedArray%.prototype.toString` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.tostring

  exportTypedArrayMethod$7('toString', arrayToString, IS_NOT_ARRAY_METHOD);

  var es_weakMap = {exports: {}};

  var redefineAll$5 = redefineAll$9;
  var getWeakData = internalMetadata.exports.getWeakData;
  var anObject$13 = anObject$1z;
  var isObject$5 = isObject$w;
  var anInstance$5 = anInstance$b;
  var iterate$A = iterate$I;
  var ArrayIterationModule = arrayIteration;
  var $has = has$n;
  var InternalStateModule$a = internalState;
  var setInternalState$a = InternalStateModule$a.set;
  var internalStateGetterFor = InternalStateModule$a.getterFor;
  var find$1 = ArrayIterationModule.find;
  var findIndex = ArrayIterationModule.findIndex;
  var id = 0; // fallback for uncaught frozen keys

  var uncaughtFrozenStore = function uncaughtFrozenStore(store) {
    return store.frozen || (store.frozen = new UncaughtFrozenStore());
  };

  var UncaughtFrozenStore = function UncaughtFrozenStore() {
    this.entries = [];
  };

  var findUncaughtFrozen = function findUncaughtFrozen(store, key) {
    return find$1(store.entries, function (it) {
      return it[0] === key;
    });
  };

  UncaughtFrozenStore.prototype = {
    get: function get(key) {
      var entry = findUncaughtFrozen(this, key);
      if (entry) return entry[1];
    },
    has: function has(key) {
      return !!findUncaughtFrozen(this, key);
    },
    set: function set(key, value) {
      var entry = findUncaughtFrozen(this, key);
      if (entry) entry[1] = value;else this.entries.push([key, value]);
    },
    'delete': function _delete(key) {
      var index = findIndex(this.entries, function (it) {
        return it[0] === key;
      });
      if (~index) this.entries.splice(index, 1);
      return !!~index;
    }
  };
  var collectionWeak$2 = {
    getConstructor: function getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
      var C = wrapper(function (that, iterable) {
        anInstance$5(that, C, CONSTRUCTOR_NAME);
        setInternalState$a(that, {
          type: CONSTRUCTOR_NAME,
          id: id++,
          frozen: undefined
        });
        if (iterable != undefined) iterate$A(iterable, that[ADDER], {
          that: that,
          AS_ENTRIES: IS_MAP
        });
      });
      var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);

      var define = function define(that, key, value) {
        var state = getInternalState(that);
        var data = getWeakData(anObject$13(key), true);
        if (data === true) uncaughtFrozenStore(state).set(key, value);else data[state.id] = value;
        return that;
      };

      redefineAll$5(C.prototype, {
        // `{ WeakMap, WeakSet }.prototype.delete(key)` methods
        // https://tc39.es/ecma262/#sec-weakmap.prototype.delete
        // https://tc39.es/ecma262/#sec-weakset.prototype.delete
        'delete': function _delete(key) {
          var state = getInternalState(this);
          if (!isObject$5(key)) return false;
          var data = getWeakData(key);
          if (data === true) return uncaughtFrozenStore(state)['delete'](key);
          return data && $has(data, state.id) && delete data[state.id];
        },
        // `{ WeakMap, WeakSet }.prototype.has(key)` methods
        // https://tc39.es/ecma262/#sec-weakmap.prototype.has
        // https://tc39.es/ecma262/#sec-weakset.prototype.has
        has: function has(key) {
          var state = getInternalState(this);
          if (!isObject$5(key)) return false;
          var data = getWeakData(key);
          if (data === true) return uncaughtFrozenStore(state).has(key);
          return data && $has(data, state.id);
        }
      });
      redefineAll$5(C.prototype, IS_MAP ? {
        // `WeakMap.prototype.get(key)` method
        // https://tc39.es/ecma262/#sec-weakmap.prototype.get
        get: function get(key) {
          var state = getInternalState(this);

          if (isObject$5(key)) {
            var data = getWeakData(key);
            if (data === true) return uncaughtFrozenStore(state).get(key);
            return data ? data[state.id] : undefined;
          }
        },
        // `WeakMap.prototype.set(key, value)` method
        // https://tc39.es/ecma262/#sec-weakmap.prototype.set
        set: function set(key, value) {
          return define(this, key, value);
        }
      } : {
        // `WeakSet.prototype.add(value)` method
        // https://tc39.es/ecma262/#sec-weakset.prototype.add
        add: function add(value) {
          return define(this, value, true);
        }
      });
      return C;
    }
  };

  var global$a = global$K;
  var redefineAll$4 = redefineAll$9;
  var InternalMetadataModule = internalMetadata.exports;
  var collection$1 = collection$4;
  var collectionWeak$1 = collectionWeak$2;
  var isObject$4 = isObject$w;
  var enforceIternalState = internalState.enforce;
  var NATIVE_WEAK_MAP = nativeWeakMap;
  var IS_IE11 = !global$a.ActiveXObject && 'ActiveXObject' in global$a; // eslint-disable-next-line es/no-object-isextensible -- safe

  var isExtensible = Object.isExtensible;
  var InternalWeakMap;

  var wrapper = function wrapper(init) {
    return function WeakMap() {
      return init(this, arguments.length ? arguments[0] : undefined);
    };
  }; // `WeakMap` constructor
  // https://tc39.es/ecma262/#sec-weakmap-constructor


  var $WeakMap = es_weakMap.exports = collection$1('WeakMap', wrapper, collectionWeak$1); // IE11 WeakMap frozen keys fix
  // We can't use feature detection because it crash some old IE builds
  // https://github.com/zloirock/core-js/issues/485

  if (NATIVE_WEAK_MAP && IS_IE11) {
    InternalWeakMap = collectionWeak$1.getConstructor(wrapper, 'WeakMap', true);
    InternalMetadataModule.enable();
    var WeakMapPrototype = $WeakMap.prototype;
    var nativeDelete = WeakMapPrototype['delete'];
    var nativeHas = WeakMapPrototype.has;
    var nativeGet = WeakMapPrototype.get;
    var nativeSet = WeakMapPrototype.set;
    redefineAll$4(WeakMapPrototype, {
      'delete': function _delete(key) {
        if (isObject$4(key) && !isExtensible(key)) {
          var state = enforceIternalState(this);
          if (!state.frozen) state.frozen = new InternalWeakMap();
          return nativeDelete.call(this, key) || state.frozen['delete'](key);
        }

        return nativeDelete.call(this, key);
      },
      has: function has(key) {
        if (isObject$4(key) && !isExtensible(key)) {
          var state = enforceIternalState(this);
          if (!state.frozen) state.frozen = new InternalWeakMap();
          return nativeHas.call(this, key) || state.frozen.has(key);
        }

        return nativeHas.call(this, key);
      },
      get: function get(key) {
        if (isObject$4(key) && !isExtensible(key)) {
          var state = enforceIternalState(this);
          if (!state.frozen) state.frozen = new InternalWeakMap();
          return nativeHas.call(this, key) ? nativeGet.call(this, key) : state.frozen.get(key);
        }

        return nativeGet.call(this, key);
      },
      set: function set(key, value) {
        if (isObject$4(key) && !isExtensible(key)) {
          var state = enforceIternalState(this);
          if (!state.frozen) state.frozen = new InternalWeakMap();
          nativeHas.call(this, key) ? nativeSet.call(this, key, value) : state.frozen.set(key, value);
        } else nativeSet.call(this, key, value);

        return this;
      }
    });
  }

  var collection = collection$4;
  var collectionWeak = collectionWeak$2; // `WeakSet` constructor
  // https://tc39.es/ecma262/#sec-weakset-constructor

  collection('WeakSet', function (init) {
    return function WeakSet() {
      return init(this, arguments.length ? arguments[0] : undefined);
    };
  }, collectionWeak);

  var $$1W = _export;
  var toObject$8 = toObject$u;
  var toLength$6 = toLength$z;
  var toInteger$2 = toInteger$f;
  var addToUnscopables$8 = addToUnscopables$d; // `Array.prototype.at` method
  // https://github.com/tc39/proposal-relative-indexing-method

  $$1W({
    target: 'Array',
    proto: true
  }, {
    at: function at(index) {
      var O = toObject$8(this);
      var len = toLength$6(O.length);
      var relativeIndex = toInteger$2(index);
      var k = relativeIndex >= 0 ? relativeIndex : len + relativeIndex;
      return k < 0 || k >= len ? undefined : O[k];
    }
  });
  addToUnscopables$8('at');

  var $$1V = _export;
  var $filterReject$3 = arrayIteration.filterReject;
  var addToUnscopables$7 = addToUnscopables$d; // `Array.prototype.filterOut` method
  // https://github.com/tc39/proposal-array-filtering

  $$1V({
    target: 'Array',
    proto: true
  }, {
    filterOut: function filterOut(callbackfn
    /* , thisArg */
    ) {
      return $filterReject$3(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
  });
  addToUnscopables$7('filterOut');

  var $$1U = _export;
  var $filterReject$2 = arrayIteration.filterReject;
  var addToUnscopables$6 = addToUnscopables$d; // `Array.prototype.filterReject` method
  // https://github.com/tc39/proposal-array-filtering

  $$1U({
    target: 'Array',
    proto: true
  }, {
    filterReject: function filterReject(callbackfn
    /* , thisArg */
    ) {
      return $filterReject$2(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
  });
  addToUnscopables$6('filterReject');

  var bind$f = functionBindContext;
  var IndexedObject$1 = indexedObject;
  var toObject$7 = toObject$u;
  var toLength$5 = toLength$z; // `Array.prototype.{ findLast, findLastIndex }` methods implementation

  var createMethod$1 = function createMethod(TYPE) {
    var IS_FIND_LAST_INDEX = TYPE == 1;
    return function ($this, callbackfn, that) {
      var O = toObject$7($this);
      var self = IndexedObject$1(O);
      var boundFunction = bind$f(callbackfn, that, 3);
      var index = toLength$5(self.length);
      var value, result;

      while (index-- > 0) {
        value = self[index];
        result = boundFunction(value, index, O);
        if (result) switch (TYPE) {
          case 0:
            return value;
          // findLast

          case 1:
            return index;
          // findLastIndex
        }
      }

      return IS_FIND_LAST_INDEX ? -1 : undefined;
    };
  };

  var arrayIterationFromLast = {
    // `Array.prototype.findLast` method
    // https://github.com/tc39/proposal-array-find-from-last
    findLast: createMethod$1(0),
    // `Array.prototype.findLastIndex` method
    // https://github.com/tc39/proposal-array-find-from-last
    findLastIndex: createMethod$1(1)
  };

  var $$1T = _export;
  var $findLast$1 = arrayIterationFromLast.findLast;
  var addToUnscopables$5 = addToUnscopables$d; // `Array.prototype.findLast` method
  // https://github.com/tc39/proposal-array-find-from-last

  $$1T({
    target: 'Array',
    proto: true
  }, {
    findLast: function findLast(callbackfn
    /* , that = undefined */
    ) {
      return $findLast$1(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
  });
  addToUnscopables$5('findLast');

  var $$1S = _export;
  var $findLastIndex$1 = arrayIterationFromLast.findLastIndex;
  var addToUnscopables$4 = addToUnscopables$d; // `Array.prototype.findLastIndex` method
  // https://github.com/tc39/proposal-array-find-from-last

  $$1S({
    target: 'Array',
    proto: true
  }, {
    findLastIndex: function findLastIndex(callbackfn
    /* , that = undefined */
    ) {
      return $findLastIndex$1(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
  });
  addToUnscopables$4('findLastIndex');

  var bind$e = functionBindContext;
  var IndexedObject = indexedObject;
  var toObject$6 = toObject$u;
  var toLength$4 = toLength$z;
  var toPropertyKey = toPropertyKey$9;
  var objectCreate = objectCreate$1;
  var arrayFromConstructorAndList = arrayFromConstructorAndList$2;
  var push$3 = [].push;

  var arrayGroupBy = function arrayGroupBy($this, callbackfn, that, specificConstructor) {
    var O = toObject$6($this);
    var self = IndexedObject(O);
    var boundFunction = bind$e(callbackfn, that, 3);
    var target = objectCreate(null);
    var length = toLength$4(self.length);
    var index = 0;
    var Constructor, key, value;

    for (; length > index; index++) {
      value = self[index];
      key = toPropertyKey(boundFunction(value, index, O)); // in some IE10 builds, `hasOwnProperty` returns incorrect result on integer keys
      // but since it's a `null` prototype object, we can safely use `in`

      if (key in target) push$3.call(target[key], value);else target[key] = [value];
    }

    if (specificConstructor) {
      Constructor = specificConstructor(O);

      if (Constructor !== Array) {
        for (key in target) {
          target[key] = arrayFromConstructorAndList(Constructor, target[key]);
        }
      }
    }

    return target;
  };

  var $$1R = _export;
  var $groupBy$1 = arrayGroupBy;
  var arraySpeciesConstructor = arraySpeciesConstructor$2;
  var addToUnscopables$3 = addToUnscopables$d; // `Array.prototype.groupBy` method
  // https://github.com/tc39/proposal-array-grouping

  $$1R({
    target: 'Array',
    proto: true
  }, {
    groupBy: function groupBy(callbackfn
    /* , thisArg */
    ) {
      var thisArg = arguments.length > 1 ? arguments[1] : undefined;
      return $groupBy$1(this, callbackfn, thisArg, arraySpeciesConstructor);
    }
  });
  addToUnscopables$3('groupBy');

  var $$1Q = _export;
  var isArray = isArray$7; // eslint-disable-next-line es/no-object-isfrozen -- safe

  var isFrozen = Object.isFrozen;

  var isFrozenStringArray = function isFrozenStringArray(array, allowUndefined) {
    if (!isFrozen || !isArray(array) || !isFrozen(array)) return false;
    var index = 0;
    var length = array.length;
    var element;

    while (index < length) {
      element = array[index++];

      if (!(typeof element === 'string' || allowUndefined && typeof element === 'undefined')) {
        return false;
      }
    }

    return length !== 0;
  }; // `Array.isTemplateObject` method
  // https://github.com/tc39/proposal-array-is-template-object


  $$1Q({
    target: 'Array',
    stat: true
  }, {
    isTemplateObject: function isTemplateObject(value) {
      if (!isFrozenStringArray(value, true)) return false;
      var raw = value.raw;
      if (raw.length !== value.length || !isFrozenStringArray(raw, false)) return false;
      return true;
    }
  });

  var DESCRIPTORS$4 = descriptors;
  var addToUnscopables$2 = addToUnscopables$d;
  var toObject$5 = toObject$u;
  var toLength$3 = toLength$z;
  var defineProperty$2 = objectDefineProperty.f; // `Array.prototype.lastIndex` getter
  // https://github.com/keithamus/proposal-array-last

  if (DESCRIPTORS$4 && !('lastIndex' in [])) {
    defineProperty$2(Array.prototype, 'lastIndex', {
      configurable: true,
      get: function lastIndex() {
        var O = toObject$5(this);
        var len = toLength$3(O.length);
        return len == 0 ? 0 : len - 1;
      }
    });
    addToUnscopables$2('lastIndex');
  }

  var DESCRIPTORS$3 = descriptors;
  var addToUnscopables$1 = addToUnscopables$d;
  var toObject$4 = toObject$u;
  var toLength$2 = toLength$z;
  var defineProperty$1 = objectDefineProperty.f; // `Array.prototype.lastIndex` accessor
  // https://github.com/keithamus/proposal-array-last

  if (DESCRIPTORS$3 && !('lastItem' in [])) {
    defineProperty$1(Array.prototype, 'lastItem', {
      configurable: true,
      get: function lastItem() {
        var O = toObject$4(this);
        var len = toLength$2(O.length);
        return len == 0 ? undefined : O[len - 1];
      },
      set: function lastItem(value) {
        var O = toObject$4(this);
        var len = toLength$2(O.length);
        return O[len == 0 ? 0 : len - 1] = value;
      }
    });
    addToUnscopables$1('lastItem');
  }

  var toLength$1 = toLength$z;
  var toObject$3 = toObject$u;
  var getBuiltIn$g = getBuiltIn$u;
  var arraySpeciesCreate = arraySpeciesCreate$6;
  var push$2 = [].push; // `Array.prototype.uniqueBy` method
  // https://github.com/tc39/proposal-array-unique

  var arrayUniqueBy$1 = function uniqueBy(resolver) {
    var that = toObject$3(this);
    var length = toLength$1(that.length);
    var result = arraySpeciesCreate(that, 0);
    var Map = getBuiltIn$g('Map');
    var map = new Map();
    var resolverFunction, index, item, key;
    if (typeof resolver == 'function') resolverFunction = resolver;else if (resolver == null) resolverFunction = function resolverFunction(value) {
      return value;
    };else throw new TypeError('Incorrect resolver!');

    for (index = 0; index < length; index++) {
      item = that[index];
      key = resolverFunction(item);
      if (!map.has(key)) map.set(key, item);
    }

    map.forEach(function (value) {
      push$2.call(result, value);
    });
    return result;
  };

  var $$1P = _export;
  var addToUnscopables = addToUnscopables$d;
  var uniqueBy = arrayUniqueBy$1; // `Array.prototype.uniqueBy` method
  // https://github.com/tc39/proposal-array-unique

  $$1P({
    target: 'Array',
    proto: true
  }, {
    uniqueBy: uniqueBy
  });
  addToUnscopables('uniqueBy');

  var global$9 = global$K;
  var shared$1 = sharedStore;
  var getPrototypeOf$3 = objectGetPrototypeOf$1;
  var has$4 = has$n;
  var createNonEnumerableProperty$7 = createNonEnumerableProperty$m;
  var wellKnownSymbol$9 = wellKnownSymbol$E;
  var USE_FUNCTION_CONSTRUCTOR = 'USE_FUNCTION_CONSTRUCTOR';
  var ASYNC_ITERATOR$1 = wellKnownSymbol$9('asyncIterator');
  var AsyncIterator$1 = global$9.AsyncIterator;
  var PassedAsyncIteratorPrototype = shared$1.AsyncIteratorPrototype;
  var AsyncIteratorPrototype$1, prototype;

  {
    if (PassedAsyncIteratorPrototype) {
      AsyncIteratorPrototype$1 = PassedAsyncIteratorPrototype;
    } else if (typeof AsyncIterator$1 == 'function') {
      AsyncIteratorPrototype$1 = AsyncIterator$1.prototype;
    } else if (shared$1[USE_FUNCTION_CONSTRUCTOR] || global$9[USE_FUNCTION_CONSTRUCTOR]) {
      try {
        // eslint-disable-next-line no-new-func -- we have no alternatives without usage of modern syntax
        prototype = getPrototypeOf$3(getPrototypeOf$3(getPrototypeOf$3(Function('return async function*(){}()')())));
        if (getPrototypeOf$3(prototype) === Object.prototype) AsyncIteratorPrototype$1 = prototype;
      } catch (error) {
        /* empty */
      }
    }
  }

  if (!AsyncIteratorPrototype$1) AsyncIteratorPrototype$1 = {};

  if (!has$4(AsyncIteratorPrototype$1, ASYNC_ITERATOR$1)) {
    createNonEnumerableProperty$7(AsyncIteratorPrototype$1, ASYNC_ITERATOR$1, function () {
      return this;
    });
  }

  var asyncIteratorPrototype = AsyncIteratorPrototype$1;

  var $$1O = _export;
  var anInstance$4 = anInstance$b;
  var createNonEnumerableProperty$6 = createNonEnumerableProperty$m;
  var has$3 = has$n;
  var wellKnownSymbol$8 = wellKnownSymbol$E;
  var AsyncIteratorPrototype = asyncIteratorPrototype;
  var IS_PURE$C = isPure;
  var TO_STRING_TAG$4 = wellKnownSymbol$8('toStringTag');

  var AsyncIteratorConstructor = function AsyncIterator() {
    anInstance$4(this, AsyncIteratorConstructor);
  };

  AsyncIteratorConstructor.prototype = AsyncIteratorPrototype;

  if (!has$3(AsyncIteratorPrototype, TO_STRING_TAG$4)) {
    createNonEnumerableProperty$6(AsyncIteratorPrototype, TO_STRING_TAG$4, 'AsyncIterator');
  }

  if (!has$3(AsyncIteratorPrototype, 'constructor') || AsyncIteratorPrototype.constructor === Object) {
    createNonEnumerableProperty$6(AsyncIteratorPrototype, 'constructor', AsyncIteratorConstructor);
  }

  $$1O({
    global: true,
    forced: IS_PURE$C
  }, {
    AsyncIterator: AsyncIteratorConstructor
  });

  var path$3 = path$5;
  var aFunction$B = aFunction$S;
  var anObject$12 = anObject$1z;
  var create$4 = objectCreate$1;
  var createNonEnumerableProperty$5 = createNonEnumerableProperty$m;
  var redefineAll$3 = redefineAll$9;
  var wellKnownSymbol$7 = wellKnownSymbol$E;
  var InternalStateModule$9 = internalState;
  var getBuiltIn$f = getBuiltIn$u;
  var Promise$3 = getBuiltIn$f('Promise');
  var setInternalState$9 = InternalStateModule$9.set;
  var getInternalState$7 = InternalStateModule$9.get;
  var TO_STRING_TAG$3 = wellKnownSymbol$7('toStringTag');

  var $return$1 = function $return(value) {
    var iterator = getInternalState$7(this).iterator;
    var $$return = iterator['return'];
    return $$return === undefined ? Promise$3.resolve({
      done: true,
      value: value
    }) : anObject$12($$return.call(iterator, value));
  };

  var $throw$1 = function $throw(value) {
    var iterator = getInternalState$7(this).iterator;
    var $$throw = iterator['throw'];
    return $$throw === undefined ? Promise$3.reject(value) : $$throw.call(iterator, value);
  };

  var asyncIteratorCreateProxy = function asyncIteratorCreateProxy(nextHandler, IS_ITERATOR) {
    var AsyncIteratorProxy = function AsyncIterator(state) {
      state.next = aFunction$B(state.iterator.next);
      state.done = false;
      setInternalState$9(this, state);
    };

    AsyncIteratorProxy.prototype = redefineAll$3(create$4(path$3.AsyncIterator.prototype), {
      next: function next(arg) {
        var state = getInternalState$7(this);
        if (state.done) return Promise$3.resolve({
          done: true,
          value: undefined
        });

        try {
          return Promise$3.resolve(anObject$12(nextHandler.call(state, arg, Promise$3)));
        } catch (error) {
          return Promise$3.reject(error);
        }
      },
      'return': $return$1,
      'throw': $throw$1
    });

    if (!IS_ITERATOR) {
      createNonEnumerableProperty$5(AsyncIteratorProxy.prototype, TO_STRING_TAG$3, 'Generator');
    }

    return AsyncIteratorProxy;
  };

  var $$1N = _export;
  var anObject$11 = anObject$1z;
  var createAsyncIteratorProxy$6 = asyncIteratorCreateProxy;
  var AsyncIteratorProxy$6 = createAsyncIteratorProxy$6(function (arg, Promise) {
    var state = this;
    var iterator = state.iterator;
    return Promise.resolve(anObject$11(state.next.call(iterator, arg))).then(function (step) {
      if (anObject$11(step).done) {
        state.done = true;
        return {
          done: true,
          value: undefined
        };
      }

      return {
        done: false,
        value: [state.index++, step.value]
      };
    });
  });
  $$1N({
    target: 'AsyncIterator',
    proto: true,
    real: true
  }, {
    asIndexedPairs: function asIndexedPairs() {
      return new AsyncIteratorProxy$6({
        iterator: anObject$11(this),
        index: 0
      });
    }
  });

  var $$1M = _export;
  var anObject$10 = anObject$1z;
  var toPositiveInteger$3 = toPositiveInteger$5;
  var createAsyncIteratorProxy$5 = asyncIteratorCreateProxy;
  var AsyncIteratorProxy$5 = createAsyncIteratorProxy$5(function (arg, Promise) {
    var state = this;
    return new Promise(function (resolve, reject) {
      var loop = function loop() {
        try {
          Promise.resolve(anObject$10(state.next.call(state.iterator, state.remaining ? undefined : arg))).then(function (step) {
            try {
              if (anObject$10(step).done) {
                state.done = true;
                resolve({
                  done: true,
                  value: undefined
                });
              } else if (state.remaining) {
                state.remaining--;
                loop();
              } else resolve({
                done: false,
                value: step.value
              });
            } catch (err) {
              reject(err);
            }
          }, reject);
        } catch (error) {
          reject(error);
        }
      };

      loop();
    });
  });
  $$1M({
    target: 'AsyncIterator',
    proto: true,
    real: true
  }, {
    drop: function drop(limit) {
      return new AsyncIteratorProxy$5({
        iterator: anObject$10(this),
        remaining: toPositiveInteger$3(limit)
      });
    }
  });

  var aFunction$A = aFunction$S;
  var anObject$$ = anObject$1z;
  var getBuiltIn$e = getBuiltIn$u;
  var Promise$2 = getBuiltIn$e('Promise');
  var push$1 = [].push;

  var createMethod = function createMethod(TYPE) {
    var IS_TO_ARRAY = TYPE == 0;
    var IS_FOR_EACH = TYPE == 1;
    var IS_EVERY = TYPE == 2;
    var IS_SOME = TYPE == 3;
    return function (iterator, fn) {
      anObject$$(iterator);
      var next = aFunction$A(iterator.next);
      var array = IS_TO_ARRAY ? [] : undefined;
      if (!IS_TO_ARRAY) aFunction$A(fn);
      return new Promise$2(function (resolve, reject) {
        var closeIteration = function closeIteration(method, argument) {
          try {
            var returnMethod = iterator['return'];

            if (returnMethod !== undefined) {
              return Promise$2.resolve(returnMethod.call(iterator)).then(function () {
                method(argument);
              }, function (error) {
                reject(error);
              });
            }
          } catch (error2) {
            return reject(error2);
          }

          method(argument);
        };

        var onError = function onError(error) {
          closeIteration(reject, error);
        };

        var loop = function loop() {
          try {
            Promise$2.resolve(anObject$$(next.call(iterator))).then(function (step) {
              try {
                if (anObject$$(step).done) {
                  resolve(IS_TO_ARRAY ? array : IS_SOME ? false : IS_EVERY || undefined);
                } else {
                  var value = step.value;

                  if (IS_TO_ARRAY) {
                    push$1.call(array, value);
                    loop();
                  } else {
                    Promise$2.resolve(fn(value)).then(function (result) {
                      if (IS_FOR_EACH) {
                        loop();
                      } else if (IS_EVERY) {
                        result ? loop() : closeIteration(resolve, false);
                      } else {
                        result ? closeIteration(resolve, IS_SOME || value) : loop();
                      }
                    }, onError);
                  }
                }
              } catch (error) {
                onError(error);
              }
            }, onError);
          } catch (error2) {
            onError(error2);
          }
        };

        loop();
      });
    };
  };

  var asyncIteratorIteration = {
    toArray: createMethod(0),
    forEach: createMethod(1),
    every: createMethod(2),
    some: createMethod(3),
    find: createMethod(4)
  };

  var $$1L = _export;
  var $every = asyncIteratorIteration.every;
  $$1L({
    target: 'AsyncIterator',
    proto: true,
    real: true
  }, {
    every: function every(fn) {
      return $every(this, fn);
    }
  });

  var $$1K = _export;
  var aFunction$z = aFunction$S;
  var anObject$_ = anObject$1z;
  var createAsyncIteratorProxy$4 = asyncIteratorCreateProxy;
  var AsyncIteratorProxy$4 = createAsyncIteratorProxy$4(function (arg, Promise) {
    var state = this;
    var filterer = state.filterer;
    return new Promise(function (resolve, reject) {
      var loop = function loop() {
        try {
          Promise.resolve(anObject$_(state.next.call(state.iterator, arg))).then(function (step) {
            try {
              if (anObject$_(step).done) {
                state.done = true;
                resolve({
                  done: true,
                  value: undefined
                });
              } else {
                var value = step.value;
                Promise.resolve(filterer(value)).then(function (selected) {
                  selected ? resolve({
                    done: false,
                    value: value
                  }) : loop();
                }, reject);
              }
            } catch (err) {
              reject(err);
            }
          }, reject);
        } catch (error) {
          reject(error);
        }
      };

      loop();
    });
  });
  $$1K({
    target: 'AsyncIterator',
    proto: true,
    real: true
  }, {
    filter: function filter(filterer) {
      return new AsyncIteratorProxy$4({
        iterator: anObject$_(this),
        filterer: aFunction$z(filterer)
      });
    }
  });

  var $$1J = _export;
  var $find = asyncIteratorIteration.find;
  $$1J({
    target: 'AsyncIterator',
    proto: true,
    real: true
  }, {
    find: function find(fn) {
      return $find(this, fn);
    }
  });

  var getIteratorMethod$4 = getIteratorMethod$8;
  var wellKnownSymbol$6 = wellKnownSymbol$E;
  var ASYNC_ITERATOR = wellKnownSymbol$6('asyncIterator');

  var getAsyncIteratorMethod$2 = function getAsyncIteratorMethod(it) {
    var method = it[ASYNC_ITERATOR];
    return method === undefined ? getIteratorMethod$4(it) : method;
  };

  var $$1I = _export;
  var aFunction$y = aFunction$S;
  var anObject$Z = anObject$1z;
  var createAsyncIteratorProxy$3 = asyncIteratorCreateProxy;
  var getAsyncIteratorMethod$1 = getAsyncIteratorMethod$2;
  var AsyncIteratorProxy$3 = createAsyncIteratorProxy$3(function (arg, Promise) {
    var state = this;
    var mapper = state.mapper;
    var innerIterator, iteratorMethod;
    return new Promise(function (resolve, reject) {
      var outerLoop = function outerLoop() {
        try {
          Promise.resolve(anObject$Z(state.next.call(state.iterator, arg))).then(function (step) {
            try {
              if (anObject$Z(step).done) {
                state.done = true;
                resolve({
                  done: true,
                  value: undefined
                });
              } else {
                Promise.resolve(mapper(step.value)).then(function (mapped) {
                  try {
                    iteratorMethod = getAsyncIteratorMethod$1(mapped);

                    if (iteratorMethod !== undefined) {
                      state.innerIterator = innerIterator = anObject$Z(iteratorMethod.call(mapped));
                      state.innerNext = aFunction$y(innerIterator.next);
                      return innerLoop();
                    }

                    reject(TypeError('.flatMap callback should return an iterable object'));
                  } catch (error2) {
                    reject(error2);
                  }
                }, reject);
              }
            } catch (error1) {
              reject(error1);
            }
          }, reject);
        } catch (error) {
          reject(error);
        }
      };

      var innerLoop = function innerLoop() {
        if (innerIterator = state.innerIterator) {
          try {
            Promise.resolve(anObject$Z(state.innerNext.call(innerIterator))).then(function (result) {
              try {
                if (anObject$Z(result).done) {
                  state.innerIterator = state.innerNext = null;
                  outerLoop();
                } else resolve({
                  done: false,
                  value: result.value
                });
              } catch (error1) {
                reject(error1);
              }
            }, reject);
          } catch (error) {
            reject(error);
          }
        } else outerLoop();
      };

      innerLoop();
    });
  });
  $$1I({
    target: 'AsyncIterator',
    proto: true,
    real: true
  }, {
    flatMap: function flatMap(mapper) {
      return new AsyncIteratorProxy$3({
        iterator: anObject$Z(this),
        mapper: aFunction$y(mapper),
        innerIterator: null,
        innerNext: null
      });
    }
  });

  var $$1H = _export;
  var $forEach$1 = asyncIteratorIteration.forEach;
  $$1H({
    target: 'AsyncIterator',
    proto: true,
    real: true
  }, {
    forEach: function forEach(fn) {
      return $forEach$1(this, fn);
    }
  });

  var $$1G = _export;
  var path$2 = path$5;
  var aFunction$x = aFunction$S;
  var anObject$Y = anObject$1z;
  var toObject$2 = toObject$u;
  var createAsyncIteratorProxy$2 = asyncIteratorCreateProxy;
  var getAsyncIteratorMethod = getAsyncIteratorMethod$2;
  var AsyncIterator = path$2.AsyncIterator;
  var AsyncIteratorProxy$2 = createAsyncIteratorProxy$2(function (arg) {
    return anObject$Y(this.next.call(this.iterator, arg));
  }, true);
  $$1G({
    target: 'AsyncIterator',
    stat: true
  }, {
    from: function from(O) {
      var object = toObject$2(O);
      var usingIterator = getAsyncIteratorMethod(object);
      var iterator;

      if (usingIterator != null) {
        iterator = aFunction$x(usingIterator).call(object);
        if (iterator instanceof AsyncIterator) return iterator;
      } else {
        iterator = object;
      }

      return new AsyncIteratorProxy$2({
        iterator: iterator
      });
    }
  });

  var $$1F = _export;
  var aFunction$w = aFunction$S;
  var anObject$X = anObject$1z;
  var createAsyncIteratorProxy$1 = asyncIteratorCreateProxy;
  var AsyncIteratorProxy$1 = createAsyncIteratorProxy$1(function (arg, Promise) {
    var state = this;
    var mapper = state.mapper;
    return Promise.resolve(anObject$X(state.next.call(state.iterator, arg))).then(function (step) {
      if (anObject$X(step).done) {
        state.done = true;
        return {
          done: true,
          value: undefined
        };
      }

      return Promise.resolve(mapper(step.value)).then(function (value) {
        return {
          done: false,
          value: value
        };
      });
    });
  });
  $$1F({
    target: 'AsyncIterator',
    proto: true,
    real: true
  }, {
    map: function map(mapper) {
      return new AsyncIteratorProxy$1({
        iterator: anObject$X(this),
        mapper: aFunction$w(mapper)
      });
    }
  });

  var $$1E = _export;
  var aFunction$v = aFunction$S;
  var anObject$W = anObject$1z;
  var getBuiltIn$d = getBuiltIn$u;
  var Promise$1 = getBuiltIn$d('Promise');
  $$1E({
    target: 'AsyncIterator',
    proto: true,
    real: true
  }, {
    reduce: function reduce(reducer
    /* , initialValue */
    ) {
      var iterator = anObject$W(this);
      var next = aFunction$v(iterator.next);
      var noInitial = arguments.length < 2;
      var accumulator = noInitial ? undefined : arguments[1];
      aFunction$v(reducer);
      return new Promise$1(function (resolve, reject) {
        var loop = function loop() {
          try {
            Promise$1.resolve(anObject$W(next.call(iterator))).then(function (step) {
              try {
                if (anObject$W(step).done) {
                  noInitial ? reject(TypeError('Reduce of empty iterator with no initial value')) : resolve(accumulator);
                } else {
                  var value = step.value;

                  if (noInitial) {
                    noInitial = false;
                    accumulator = value;
                    loop();
                  } else {
                    Promise$1.resolve(reducer(accumulator, value)).then(function (result) {
                      accumulator = result;
                      loop();
                    }, reject);
                  }
                }
              } catch (err) {
                reject(err);
              }
            }, reject);
          } catch (error) {
            reject(error);
          }
        };

        loop();
      });
    }
  });

  var $$1D = _export;
  var $some = asyncIteratorIteration.some;
  $$1D({
    target: 'AsyncIterator',
    proto: true,
    real: true
  }, {
    some: function some(fn) {
      return $some(this, fn);
    }
  });

  var $$1C = _export;
  var anObject$V = anObject$1z;
  var toPositiveInteger$2 = toPositiveInteger$5;
  var createAsyncIteratorProxy = asyncIteratorCreateProxy;
  var AsyncIteratorProxy = createAsyncIteratorProxy(function (arg, Promise) {
    var iterator = this.iterator;
    var returnMethod, result;

    if (!this.remaining--) {
      result = {
        done: true,
        value: undefined
      };
      this.done = true;
      returnMethod = iterator['return'];

      if (returnMethod !== undefined) {
        return Promise.resolve(returnMethod.call(iterator)).then(function () {
          return result;
        });
      }

      return result;
    }

    return this.next.call(iterator, arg);
  });
  $$1C({
    target: 'AsyncIterator',
    proto: true,
    real: true
  }, {
    take: function take(limit) {
      return new AsyncIteratorProxy({
        iterator: anObject$V(this),
        remaining: toPositiveInteger$2(limit)
      });
    }
  });

  var $$1B = _export;
  var $toArray = asyncIteratorIteration.toArray;
  $$1B({
    target: 'AsyncIterator',
    proto: true,
    real: true
  }, {
    toArray: function toArray() {
      return $toArray(this);
    }
  });

  var InternalStateModule$8 = internalState;
  var createIteratorConstructor$4 = createIteratorConstructor$7;
  var isObject$3 = isObject$w;
  var defineProperties$1 = objectDefineProperties;
  var DESCRIPTORS$2 = descriptors;
  var INCORRECT_RANGE = 'Incorrect Number.range arguments';
  var NUMERIC_RANGE_ITERATOR = 'NumericRangeIterator';
  var setInternalState$8 = InternalStateModule$8.set;
  var getInternalState$6 = InternalStateModule$8.getterFor(NUMERIC_RANGE_ITERATOR);
  var $RangeIterator = createIteratorConstructor$4(function NumericRangeIterator(start, end, option, type, zero, one) {
    if (typeof start != type || end !== Infinity && end !== -Infinity && typeof end != type) {
      throw new TypeError(INCORRECT_RANGE);
    }

    if (start === Infinity || start === -Infinity) {
      throw new RangeError(INCORRECT_RANGE);
    }

    var ifIncrease = end > start;
    var inclusiveEnd = false;
    var step;

    if (option === undefined) {
      step = undefined;
    } else if (isObject$3(option)) {
      step = option.step;
      inclusiveEnd = !!option.inclusive;
    } else if (typeof option == type) {
      step = option;
    } else {
      throw new TypeError(INCORRECT_RANGE);
    }

    if (step == null) {
      step = ifIncrease ? one : -one;
    }

    if (typeof step != type) {
      throw new TypeError(INCORRECT_RANGE);
    }

    if (step === Infinity || step === -Infinity || step === zero && start !== end) {
      throw new RangeError(INCORRECT_RANGE);
    } // eslint-disable-next-line no-self-compare -- NaN check


    var hitsEnd = start != start || end != end || step != step || end > start !== step > zero;
    setInternalState$8(this, {
      type: NUMERIC_RANGE_ITERATOR,
      start: start,
      end: end,
      step: step,
      inclusiveEnd: inclusiveEnd,
      hitsEnd: hitsEnd,
      currentCount: zero,
      zero: zero
    });

    if (!DESCRIPTORS$2) {
      this.start = start;
      this.end = end;
      this.step = step;
      this.inclusive = inclusiveEnd;
    }
  }, NUMERIC_RANGE_ITERATOR, function next() {
    var state = getInternalState$6(this);
    if (state.hitsEnd) return {
      value: undefined,
      done: true
    };
    var start = state.start;
    var end = state.end;
    var step = state.step;
    var currentYieldingValue = start + step * state.currentCount++;
    if (currentYieldingValue === end) state.hitsEnd = true;
    var inclusiveEnd = state.inclusiveEnd;
    var endCondition;

    if (end > start) {
      endCondition = inclusiveEnd ? currentYieldingValue > end : currentYieldingValue >= end;
    } else {
      endCondition = inclusiveEnd ? end > currentYieldingValue : end >= currentYieldingValue;
    }

    if (endCondition) {
      return {
        value: undefined,
        done: state.hitsEnd = true
      };
    }

    return {
      value: currentYieldingValue,
      done: false
    };
  });

  var getter = function getter(fn) {
    return {
      get: fn,
      set: function set() {
        /* empty */
      },
      configurable: true,
      enumerable: false
    };
  };

  if (DESCRIPTORS$2) {
    defineProperties$1($RangeIterator.prototype, {
      start: getter(function () {
        return getInternalState$6(this).start;
      }),
      end: getter(function () {
        return getInternalState$6(this).end;
      }),
      inclusive: getter(function () {
        return getInternalState$6(this).inclusiveEnd;
      }),
      step: getter(function () {
        return getInternalState$6(this).step;
      })
    });
  }

  var numericRangeIterator = $RangeIterator;

  /* eslint-disable es/no-bigint -- safe */


  var $$1A = _export;
  var NumericRangeIterator$1 = numericRangeIterator; // `BigInt.range` method
  // https://github.com/tc39/proposal-Number.range

  if (typeof BigInt == 'function') {
    $$1A({
      target: 'BigInt',
      stat: true
    }, {
      range: function range(start, end, option) {
        return new NumericRangeIterator$1(start, end, option, 'bigint', BigInt(0), BigInt(1));
      }
    });
  }

  var Map$2 = es_map;
  var WeakMap$1 = es_weakMap.exports;
  var create$3 = objectCreate$1;
  var isObject$2 = isObject$w;

  var Node = function Node() {
    // keys
    this.object = null;
    this.symbol = null; // child nodes

    this.primitives = null;
    this.objectsByIndex = create$3(null);
  };

  Node.prototype.get = function (key, initializer) {
    return this[key] || (this[key] = initializer());
  };

  Node.prototype.next = function (i, it, IS_OBJECT) {
    var store = IS_OBJECT ? this.objectsByIndex[i] || (this.objectsByIndex[i] = new WeakMap$1()) : this.primitives || (this.primitives = new Map$2());
    var entry = store.get(it);
    if (!entry) store.set(it, entry = new Node());
    return entry;
  };

  var root = new Node();

  var compositeKey = function compositeKey() {
    var active = root;
    var length = arguments.length;
    var i, it; // for prevent leaking, start from objects

    for (i = 0; i < length; i++) {
      if (isObject$2(it = arguments[i])) active = active.next(i, it, true);
    }

    if (this === Object && active === root) throw TypeError('Composite keys must contain a non-primitive component');

    for (i = 0; i < length; i++) {
      if (!isObject$2(it = arguments[i])) active = active.next(i, it, false);
    }

    return active;
  };

  var $$1z = _export;
  var getCompositeKeyNode$1 = compositeKey;
  var getBuiltIn$c = getBuiltIn$u;
  var create$2 = objectCreate$1;

  var initializer = function initializer() {
    var freeze = getBuiltIn$c('Object', 'freeze');
    return freeze ? freeze(create$2(null)) : create$2(null);
  }; // https://github.com/tc39/proposal-richer-keys/tree/master/compositeKey


  $$1z({
    global: true
  }, {
    compositeKey: function compositeKey() {
      return getCompositeKeyNode$1.apply(Object, arguments).get('object', initializer);
    }
  });

  var $$1y = _export;
  var getCompositeKeyNode = compositeKey;
  var getBuiltIn$b = getBuiltIn$u; // https://github.com/tc39/proposal-richer-keys/tree/master/compositeKey

  $$1y({
    global: true
  }, {
    compositeSymbol: function compositeSymbol() {
      if (arguments.length === 1 && typeof arguments[0] === 'string') return getBuiltIn$b('Symbol')['for'](arguments[0]);
      return getCompositeKeyNode.apply(null, arguments).get('symbol', getBuiltIn$b('Symbol'));
    }
  });

  var $$1x = _export;
  var global$8 = global$K;
  var anInstance$3 = anInstance$b;
  var createNonEnumerableProperty$4 = createNonEnumerableProperty$m;
  var fails$2 = fails$K;
  var has$2 = has$n;
  var wellKnownSymbol$5 = wellKnownSymbol$E;
  var IteratorPrototype = iteratorsCore.IteratorPrototype;
  wellKnownSymbol$5('iterator');
  var TO_STRING_TAG$2 = wellKnownSymbol$5('toStringTag');
  var NativeIterator = global$8.Iterator; // FF56- have non-standard global helper `Iterator`

  var FORCED$3 = typeof NativeIterator != 'function' || NativeIterator.prototype !== IteratorPrototype // FF44- non-standard `Iterator` passes previous tests
  || !fails$2(function () {
    NativeIterator({});
  });

  var IteratorConstructor = function Iterator() {
    anInstance$3(this, IteratorConstructor);
  };

  if (!has$2(IteratorPrototype, TO_STRING_TAG$2)) {
    createNonEnumerableProperty$4(IteratorPrototype, TO_STRING_TAG$2, 'Iterator');
  }

  if (FORCED$3 || !has$2(IteratorPrototype, 'constructor') || IteratorPrototype.constructor === Object) {
    createNonEnumerableProperty$4(IteratorPrototype, 'constructor', IteratorConstructor);
  }

  IteratorConstructor.prototype = IteratorPrototype;
  $$1x({
    global: true,
    forced: FORCED$3
  }, {
    Iterator: IteratorConstructor
  });

  var path$1 = path$5;
  var aFunction$u = aFunction$S;
  var anObject$U = anObject$1z;
  var create$1 = objectCreate$1;
  var createNonEnumerableProperty$3 = createNonEnumerableProperty$m;
  var redefineAll$2 = redefineAll$9;
  var wellKnownSymbol$4 = wellKnownSymbol$E;
  var InternalStateModule$7 = internalState;
  var setInternalState$7 = InternalStateModule$7.set;
  var getInternalState$5 = InternalStateModule$7.get;
  var TO_STRING_TAG$1 = wellKnownSymbol$4('toStringTag');

  var $return = function $return(value) {
    var iterator = getInternalState$5(this).iterator;
    var $$return = iterator['return'];
    return $$return === undefined ? {
      done: true,
      value: value
    } : anObject$U($$return.call(iterator, value));
  };

  var $throw = function $throw(value) {
    var iterator = getInternalState$5(this).iterator;
    var $$throw = iterator['throw'];
    if ($$throw === undefined) throw value;
    return $$throw.call(iterator, value);
  };

  var iteratorCreateProxy = function iteratorCreateProxy(nextHandler, IS_ITERATOR) {
    var IteratorProxy = function Iterator(state) {
      state.next = aFunction$u(state.iterator.next);
      state.done = false;
      setInternalState$7(this, state);
    };

    IteratorProxy.prototype = redefineAll$2(create$1(path$1.Iterator.prototype), {
      next: function next() {
        var state = getInternalState$5(this);
        var result = state.done ? undefined : nextHandler.apply(state, arguments);
        return {
          done: state.done,
          value: result
        };
      },
      'return': $return,
      'throw': $throw
    });

    if (!IS_ITERATOR) {
      createNonEnumerableProperty$3(IteratorProxy.prototype, TO_STRING_TAG$1, 'Generator');
    }

    return IteratorProxy;
  };

  var $$1w = _export;
  var anObject$T = anObject$1z;
  var createIteratorProxy$6 = iteratorCreateProxy;
  var IteratorProxy$6 = createIteratorProxy$6(function (arg) {
    var result = anObject$T(this.next.call(this.iterator, arg));
    var done = this.done = !!result.done;
    if (!done) return [this.index++, result.value];
  });
  $$1w({
    target: 'Iterator',
    proto: true,
    real: true
  }, {
    asIndexedPairs: function asIndexedPairs() {
      return new IteratorProxy$6({
        iterator: anObject$T(this),
        index: 0
      });
    }
  });

  var $$1v = _export;
  var anObject$S = anObject$1z;
  var toPositiveInteger$1 = toPositiveInteger$5;
  var createIteratorProxy$5 = iteratorCreateProxy;
  var IteratorProxy$5 = createIteratorProxy$5(function (arg) {
    var iterator = this.iterator;
    var next = this.next;
    var result, done;

    while (this.remaining) {
      this.remaining--;
      result = anObject$S(next.call(iterator));
      done = this.done = !!result.done;
      if (done) return;
    }

    result = anObject$S(next.call(iterator, arg));
    done = this.done = !!result.done;
    if (!done) return result.value;
  });
  $$1v({
    target: 'Iterator',
    proto: true,
    real: true
  }, {
    drop: function drop(limit) {
      return new IteratorProxy$5({
        iterator: anObject$S(this),
        remaining: toPositiveInteger$1(limit)
      });
    }
  });

  var $$1u = _export;
  var iterate$z = iterate$I;
  var aFunction$t = aFunction$S;
  var anObject$R = anObject$1z;
  $$1u({
    target: 'Iterator',
    proto: true,
    real: true
  }, {
    every: function every(fn) {
      anObject$R(this);
      aFunction$t(fn);
      return !iterate$z(this, function (value, stop) {
        if (!fn(value)) return stop();
      }, {
        IS_ITERATOR: true,
        INTERRUPTED: true
      }).stopped;
    }
  });

  var $$1t = _export;
  var aFunction$s = aFunction$S;
  var anObject$Q = anObject$1z;
  var createIteratorProxy$4 = iteratorCreateProxy;
  var callWithSafeIterationClosing$1 = callWithSafeIterationClosing$3;
  var IteratorProxy$4 = createIteratorProxy$4(function (arg) {
    var iterator = this.iterator;
    var filterer = this.filterer;
    var next = this.next;
    var result, done, value;

    while (true) {
      result = anObject$Q(next.call(iterator, arg));
      done = this.done = !!result.done;
      if (done) return;
      value = result.value;
      if (callWithSafeIterationClosing$1(iterator, filterer, value)) return value;
    }
  });
  $$1t({
    target: 'Iterator',
    proto: true,
    real: true
  }, {
    filter: function filter(filterer) {
      return new IteratorProxy$4({
        iterator: anObject$Q(this),
        filterer: aFunction$s(filterer)
      });
    }
  });

  var $$1s = _export;
  var iterate$y = iterate$I;
  var aFunction$r = aFunction$S;
  var anObject$P = anObject$1z;
  $$1s({
    target: 'Iterator',
    proto: true,
    real: true
  }, {
    find: function find(fn) {
      anObject$P(this);
      aFunction$r(fn);
      return iterate$y(this, function (value, stop) {
        if (fn(value)) return stop(value);
      }, {
        IS_ITERATOR: true,
        INTERRUPTED: true
      }).result;
    }
  });

  var $$1r = _export;
  var aFunction$q = aFunction$S;
  var anObject$O = anObject$1z;
  var getIteratorMethod$3 = getIteratorMethod$8;
  var createIteratorProxy$3 = iteratorCreateProxy;
  var iteratorClose$1 = iteratorClose$4;
  var IteratorProxy$3 = createIteratorProxy$3(function (arg) {
    var iterator = this.iterator;
    var mapper = this.mapper;
    var result, mapped, iteratorMethod, innerIterator;

    while (true) {
      try {
        if (innerIterator = this.innerIterator) {
          result = anObject$O(this.innerNext.call(innerIterator));
          if (!result.done) return result.value;
          this.innerIterator = this.innerNext = null;
        }

        result = anObject$O(this.next.call(iterator, arg));
        if (this.done = !!result.done) return;
        mapped = mapper(result.value);
        iteratorMethod = getIteratorMethod$3(mapped);

        if (iteratorMethod === undefined) {
          throw TypeError('.flatMap callback should return an iterable object');
        }

        this.innerIterator = innerIterator = anObject$O(iteratorMethod.call(mapped));
        this.innerNext = aFunction$q(innerIterator.next);
      } catch (error) {
        iteratorClose$1(iterator);
        throw error;
      }
    }
  });
  $$1r({
    target: 'Iterator',
    proto: true,
    real: true
  }, {
    flatMap: function flatMap(mapper) {
      return new IteratorProxy$3({
        iterator: anObject$O(this),
        mapper: aFunction$q(mapper),
        innerIterator: null,
        innerNext: null
      });
    }
  });

  var $$1q = _export;
  var iterate$x = iterate$I;
  var anObject$N = anObject$1z;
  $$1q({
    target: 'Iterator',
    proto: true,
    real: true
  }, {
    forEach: function forEach(fn) {
      iterate$x(anObject$N(this), fn, {
        IS_ITERATOR: true
      });
    }
  });

  var $$1p = _export;
  var path = path$5;
  var aFunction$p = aFunction$S;
  var anObject$M = anObject$1z;
  var toObject$1 = toObject$u;
  var createIteratorProxy$2 = iteratorCreateProxy;
  var getIteratorMethod$2 = getIteratorMethod$8;
  var Iterator = path.Iterator;
  var IteratorProxy$2 = createIteratorProxy$2(function (arg) {
    var result = anObject$M(this.next.call(this.iterator, arg));
    var done = this.done = !!result.done;
    if (!done) return result.value;
  }, true);
  $$1p({
    target: 'Iterator',
    stat: true
  }, {
    from: function from(O) {
      var object = toObject$1(O);
      var usingIterator = getIteratorMethod$2(object);
      var iterator;

      if (usingIterator != null) {
        iterator = aFunction$p(usingIterator).call(object);
        if (iterator instanceof Iterator) return iterator;
      } else {
        iterator = object;
      }

      return new IteratorProxy$2({
        iterator: iterator
      });
    }
  });

  var $$1o = _export;
  var aFunction$o = aFunction$S;
  var anObject$L = anObject$1z;
  var createIteratorProxy$1 = iteratorCreateProxy;
  var callWithSafeIterationClosing = callWithSafeIterationClosing$3;
  var IteratorProxy$1 = createIteratorProxy$1(function (arg) {
    var iterator = this.iterator;
    var result = anObject$L(this.next.call(iterator, arg));
    var done = this.done = !!result.done;
    if (!done) return callWithSafeIterationClosing(iterator, this.mapper, result.value);
  });
  $$1o({
    target: 'Iterator',
    proto: true,
    real: true
  }, {
    map: function map(mapper) {
      return new IteratorProxy$1({
        iterator: anObject$L(this),
        mapper: aFunction$o(mapper)
      });
    }
  });

  var $$1n = _export;
  var iterate$w = iterate$I;
  var aFunction$n = aFunction$S;
  var anObject$K = anObject$1z;
  $$1n({
    target: 'Iterator',
    proto: true,
    real: true
  }, {
    reduce: function reduce(reducer
    /* , initialValue */
    ) {
      anObject$K(this);
      aFunction$n(reducer);
      var noInitial = arguments.length < 2;
      var accumulator = noInitial ? undefined : arguments[1];
      iterate$w(this, function (value) {
        if (noInitial) {
          noInitial = false;
          accumulator = value;
        } else {
          accumulator = reducer(accumulator, value);
        }
      }, {
        IS_ITERATOR: true
      });
      if (noInitial) throw TypeError('Reduce of empty iterator with no initial value');
      return accumulator;
    }
  });

  var $$1m = _export;
  var iterate$v = iterate$I;
  var aFunction$m = aFunction$S;
  var anObject$J = anObject$1z;
  $$1m({
    target: 'Iterator',
    proto: true,
    real: true
  }, {
    some: function some(fn) {
      anObject$J(this);
      aFunction$m(fn);
      return iterate$v(this, function (value, stop) {
        if (fn(value)) return stop();
      }, {
        IS_ITERATOR: true,
        INTERRUPTED: true
      }).stopped;
    }
  });

  var $$1l = _export;
  var anObject$I = anObject$1z;
  var toPositiveInteger = toPositiveInteger$5;
  var createIteratorProxy = iteratorCreateProxy;
  var iteratorClose = iteratorClose$4;
  var IteratorProxy = createIteratorProxy(function (arg) {
    var iterator = this.iterator;

    if (!this.remaining--) {
      this.done = true;
      return iteratorClose(iterator);
    }

    var result = anObject$I(this.next.call(iterator, arg));
    var done = this.done = !!result.done;
    if (!done) return result.value;
  });
  $$1l({
    target: 'Iterator',
    proto: true,
    real: true
  }, {
    take: function take(limit) {
      return new IteratorProxy({
        iterator: anObject$I(this),
        remaining: toPositiveInteger(limit)
      });
    }
  });

  var $$1k = _export;
  var iterate$u = iterate$I;
  var anObject$H = anObject$1z;
  var push = [].push;
  $$1k({
    target: 'Iterator',
    proto: true,
    real: true
  }, {
    toArray: function toArray() {
      var result = [];
      iterate$u(anObject$H(this), push, {
        that: result,
        IS_ITERATOR: true
      });
      return result;
    }
  });

  var anObject$G = anObject$1z;
  var aFunction$l = aFunction$S; // https://github.com/tc39/collection-methods

  var collectionDeleteAll$4 = function collectionDeleteAll() {
    var collection = anObject$G(this);
    var remover = aFunction$l(collection['delete']);
    var allDeleted = true;
    var wasDeleted;

    for (var k = 0, len = arguments.length; k < len; k++) {
      wasDeleted = remover.call(collection, arguments[k]);
      allDeleted = allDeleted && wasDeleted;
    }

    return !!allDeleted;
  };

  var $$1j = _export;
  var IS_PURE$B = isPure;
  var collectionDeleteAll$3 = collectionDeleteAll$4; // `Map.prototype.deleteAll` method
  // https://github.com/tc39/proposal-collection-methods

  $$1j({
    target: 'Map',
    proto: true,
    real: true,
    forced: IS_PURE$B
  }, {
    deleteAll: function deleteAll() {
      return collectionDeleteAll$3.apply(this, arguments);
    }
  });

  var anObject$F = anObject$1z; // `Map.prototype.emplace` method
  // https://github.com/thumbsupep/proposal-upsert

  var mapEmplace = function emplace(key, handler) {
    var map = anObject$F(this);
    var value = map.has(key) && 'update' in handler ? handler.update(map.get(key), key, map) : handler.insert(key, map);
    map.set(key, value);
    return value;
  };

  var $$1i = _export;
  var IS_PURE$A = isPure;
  var $emplace$1 = mapEmplace; // `Map.prototype.emplace` method
  // https://github.com/thumbsupep/proposal-upsert

  $$1i({
    target: 'Map',
    proto: true,
    real: true,
    forced: IS_PURE$A
  }, {
    emplace: $emplace$1
  });

  var getMapIterator$a = function getMapIterator(it) {
    // eslint-disable-next-line es/no-map -- safe
    return Map.prototype.entries.call(it);
  };

  var $$1h = _export;
  var IS_PURE$z = isPure;
  var anObject$E = anObject$1z;
  var bind$d = functionBindContext;
  var getMapIterator$9 = getMapIterator$a;
  var iterate$t = iterate$I; // `Map.prototype.every` method
  // https://github.com/tc39/proposal-collection-methods

  $$1h({
    target: 'Map',
    proto: true,
    real: true,
    forced: IS_PURE$z
  }, {
    every: function every(callbackfn
    /* , thisArg */
    ) {
      var map = anObject$E(this);
      var iterator = getMapIterator$9(map);
      var boundFunction = bind$d(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
      return !iterate$t(iterator, function (key, value, stop) {
        if (!boundFunction(value, key, map)) return stop();
      }, {
        AS_ENTRIES: true,
        IS_ITERATOR: true,
        INTERRUPTED: true
      }).stopped;
    }
  });

  var $$1g = _export;
  var IS_PURE$y = isPure;
  var getBuiltIn$a = getBuiltIn$u;
  var anObject$D = anObject$1z;
  var aFunction$k = aFunction$S;
  var bind$c = functionBindContext;
  var speciesConstructor$8 = speciesConstructor$f;
  var getMapIterator$8 = getMapIterator$a;
  var iterate$s = iterate$I; // `Map.prototype.filter` method
  // https://github.com/tc39/proposal-collection-methods

  $$1g({
    target: 'Map',
    proto: true,
    real: true,
    forced: IS_PURE$y
  }, {
    filter: function filter(callbackfn
    /* , thisArg */
    ) {
      var map = anObject$D(this);
      var iterator = getMapIterator$8(map);
      var boundFunction = bind$c(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
      var newMap = new (speciesConstructor$8(map, getBuiltIn$a('Map')))();
      var setter = aFunction$k(newMap.set);
      iterate$s(iterator, function (key, value) {
        if (boundFunction(value, key, map)) setter.call(newMap, key, value);
      }, {
        AS_ENTRIES: true,
        IS_ITERATOR: true
      });
      return newMap;
    }
  });

  var $$1f = _export;
  var IS_PURE$x = isPure;
  var anObject$C = anObject$1z;
  var bind$b = functionBindContext;
  var getMapIterator$7 = getMapIterator$a;
  var iterate$r = iterate$I; // `Map.prototype.find` method
  // https://github.com/tc39/proposal-collection-methods

  $$1f({
    target: 'Map',
    proto: true,
    real: true,
    forced: IS_PURE$x
  }, {
    find: function find(callbackfn
    /* , thisArg */
    ) {
      var map = anObject$C(this);
      var iterator = getMapIterator$7(map);
      var boundFunction = bind$b(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
      return iterate$r(iterator, function (key, value, stop) {
        if (boundFunction(value, key, map)) return stop(value);
      }, {
        AS_ENTRIES: true,
        IS_ITERATOR: true,
        INTERRUPTED: true
      }).result;
    }
  });

  var $$1e = _export;
  var IS_PURE$w = isPure;
  var anObject$B = anObject$1z;
  var bind$a = functionBindContext;
  var getMapIterator$6 = getMapIterator$a;
  var iterate$q = iterate$I; // `Map.prototype.findKey` method
  // https://github.com/tc39/proposal-collection-methods

  $$1e({
    target: 'Map',
    proto: true,
    real: true,
    forced: IS_PURE$w
  }, {
    findKey: function findKey(callbackfn
    /* , thisArg */
    ) {
      var map = anObject$B(this);
      var iterator = getMapIterator$6(map);
      var boundFunction = bind$a(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
      return iterate$q(iterator, function (key, value, stop) {
        if (boundFunction(value, key, map)) return stop(key);
      }, {
        AS_ENTRIES: true,
        IS_ITERATOR: true,
        INTERRUPTED: true
      }).result;
    }
  });

  var aFunction$j = aFunction$S;
  var bind$9 = functionBindContext;
  var iterate$p = iterate$I;

  var collectionFrom = function from(source
  /* , mapFn, thisArg */
  ) {
    var length = arguments.length;
    var mapFn = length > 1 ? arguments[1] : undefined;
    var mapping, array, n, boundFunction;
    aFunction$j(this);
    mapping = mapFn !== undefined;
    if (mapping) aFunction$j(mapFn);
    if (source == undefined) return new this();
    array = [];

    if (mapping) {
      n = 0;
      boundFunction = bind$9(mapFn, length > 2 ? arguments[2] : undefined, 2);
      iterate$p(source, function (nextItem) {
        array.push(boundFunction(nextItem, n++));
      });
    } else {
      iterate$p(source, array.push, {
        that: array
      });
    }

    return new this(array);
  };

  var $$1d = _export;
  var from$4 = collectionFrom; // `Map.from` method
  // https://tc39.github.io/proposal-setmap-offrom/#sec-map.from

  $$1d({
    target: 'Map',
    stat: true
  }, {
    from: from$4
  });

  var $$1c = _export;
  var iterate$o = iterate$I;
  var aFunction$i = aFunction$S; // `Map.groupBy` method
  // https://github.com/tc39/proposal-collection-methods

  $$1c({
    target: 'Map',
    stat: true
  }, {
    groupBy: function groupBy(iterable, keyDerivative) {
      var newMap = new this();
      aFunction$i(keyDerivative);
      var has = aFunction$i(newMap.has);
      var get = aFunction$i(newMap.get);
      var set = aFunction$i(newMap.set);
      iterate$o(iterable, function (element) {
        var derivedKey = keyDerivative(element);
        if (!has.call(newMap, derivedKey)) set.call(newMap, derivedKey, [element]);else get.call(newMap, derivedKey).push(element);
      });
      return newMap;
    }
  });

  // https://tc39.es/ecma262/#sec-samevaluezero

  var sameValueZero$1 = function sameValueZero(x, y) {
    // eslint-disable-next-line no-self-compare -- NaN check
    return x === y || x != x && y != y;
  };

  var $$1b = _export;
  var IS_PURE$v = isPure;
  var anObject$A = anObject$1z;
  var getMapIterator$5 = getMapIterator$a;
  var sameValueZero = sameValueZero$1;
  var iterate$n = iterate$I; // `Map.prototype.includes` method
  // https://github.com/tc39/proposal-collection-methods

  $$1b({
    target: 'Map',
    proto: true,
    real: true,
    forced: IS_PURE$v
  }, {
    includes: function includes(searchElement) {
      return iterate$n(getMapIterator$5(anObject$A(this)), function (key, value, stop) {
        if (sameValueZero(value, searchElement)) return stop();
      }, {
        AS_ENTRIES: true,
        IS_ITERATOR: true,
        INTERRUPTED: true
      }).stopped;
    }
  });

  var $$1a = _export;
  var iterate$m = iterate$I;
  var aFunction$h = aFunction$S; // `Map.keyBy` method
  // https://github.com/tc39/proposal-collection-methods

  $$1a({
    target: 'Map',
    stat: true
  }, {
    keyBy: function keyBy(iterable, keyDerivative) {
      var newMap = new this();
      aFunction$h(keyDerivative);
      var setter = aFunction$h(newMap.set);
      iterate$m(iterable, function (element) {
        setter.call(newMap, keyDerivative(element), element);
      });
      return newMap;
    }
  });

  var $$19 = _export;
  var IS_PURE$u = isPure;
  var anObject$z = anObject$1z;
  var getMapIterator$4 = getMapIterator$a;
  var iterate$l = iterate$I; // `Map.prototype.includes` method
  // https://github.com/tc39/proposal-collection-methods

  $$19({
    target: 'Map',
    proto: true,
    real: true,
    forced: IS_PURE$u
  }, {
    keyOf: function keyOf(searchElement) {
      return iterate$l(getMapIterator$4(anObject$z(this)), function (key, value, stop) {
        if (value === searchElement) return stop(key);
      }, {
        AS_ENTRIES: true,
        IS_ITERATOR: true,
        INTERRUPTED: true
      }).result;
    }
  });

  var $$18 = _export;
  var IS_PURE$t = isPure;
  var getBuiltIn$9 = getBuiltIn$u;
  var anObject$y = anObject$1z;
  var aFunction$g = aFunction$S;
  var bind$8 = functionBindContext;
  var speciesConstructor$7 = speciesConstructor$f;
  var getMapIterator$3 = getMapIterator$a;
  var iterate$k = iterate$I; // `Map.prototype.mapKeys` method
  // https://github.com/tc39/proposal-collection-methods

  $$18({
    target: 'Map',
    proto: true,
    real: true,
    forced: IS_PURE$t
  }, {
    mapKeys: function mapKeys(callbackfn
    /* , thisArg */
    ) {
      var map = anObject$y(this);
      var iterator = getMapIterator$3(map);
      var boundFunction = bind$8(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
      var newMap = new (speciesConstructor$7(map, getBuiltIn$9('Map')))();
      var setter = aFunction$g(newMap.set);
      iterate$k(iterator, function (key, value) {
        setter.call(newMap, boundFunction(value, key, map), value);
      }, {
        AS_ENTRIES: true,
        IS_ITERATOR: true
      });
      return newMap;
    }
  });

  var $$17 = _export;
  var IS_PURE$s = isPure;
  var getBuiltIn$8 = getBuiltIn$u;
  var anObject$x = anObject$1z;
  var aFunction$f = aFunction$S;
  var bind$7 = functionBindContext;
  var speciesConstructor$6 = speciesConstructor$f;
  var getMapIterator$2 = getMapIterator$a;
  var iterate$j = iterate$I; // `Map.prototype.mapValues` method
  // https://github.com/tc39/proposal-collection-methods

  $$17({
    target: 'Map',
    proto: true,
    real: true,
    forced: IS_PURE$s
  }, {
    mapValues: function mapValues(callbackfn
    /* , thisArg */
    ) {
      var map = anObject$x(this);
      var iterator = getMapIterator$2(map);
      var boundFunction = bind$7(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
      var newMap = new (speciesConstructor$6(map, getBuiltIn$8('Map')))();
      var setter = aFunction$f(newMap.set);
      iterate$j(iterator, function (key, value) {
        setter.call(newMap, key, boundFunction(value, key, map));
      }, {
        AS_ENTRIES: true,
        IS_ITERATOR: true
      });
      return newMap;
    }
  });

  var $$16 = _export;
  var IS_PURE$r = isPure;
  var anObject$w = anObject$1z;
  var aFunction$e = aFunction$S;
  var iterate$i = iterate$I; // `Map.prototype.merge` method
  // https://github.com/tc39/proposal-collection-methods

  $$16({
    target: 'Map',
    proto: true,
    real: true,
    forced: IS_PURE$r
  }, {
    // eslint-disable-next-line no-unused-vars -- required for `.length`
    merge: function merge(iterable
    /* ...iterbles */
    ) {
      var map = anObject$w(this);
      var setter = aFunction$e(map.set);
      var argumentsLength = arguments.length;
      var i = 0;

      while (i < argumentsLength) {
        iterate$i(arguments[i++], setter, {
          that: map,
          AS_ENTRIES: true
        });
      }

      return map;
    }
  });

  var collectionOf = function of() {
    var length = arguments.length;
    var A = new Array(length);

    while (length--) {
      A[length] = arguments[length];
    }

    return new this(A);
  };

  var $$15 = _export;
  var of$3 = collectionOf; // `Map.of` method
  // https://tc39.github.io/proposal-setmap-offrom/#sec-map.of

  $$15({
    target: 'Map',
    stat: true
  }, {
    of: of$3
  });

  var $$14 = _export;
  var IS_PURE$q = isPure;
  var anObject$v = anObject$1z;
  var aFunction$d = aFunction$S;
  var getMapIterator$1 = getMapIterator$a;
  var iterate$h = iterate$I; // `Map.prototype.reduce` method
  // https://github.com/tc39/proposal-collection-methods

  $$14({
    target: 'Map',
    proto: true,
    real: true,
    forced: IS_PURE$q
  }, {
    reduce: function reduce(callbackfn
    /* , initialValue */
    ) {
      var map = anObject$v(this);
      var iterator = getMapIterator$1(map);
      var noInitial = arguments.length < 2;
      var accumulator = noInitial ? undefined : arguments[1];
      aFunction$d(callbackfn);
      iterate$h(iterator, function (key, value) {
        if (noInitial) {
          noInitial = false;
          accumulator = value;
        } else {
          accumulator = callbackfn(accumulator, value, key, map);
        }
      }, {
        AS_ENTRIES: true,
        IS_ITERATOR: true
      });
      if (noInitial) throw TypeError('Reduce of empty map with no initial value');
      return accumulator;
    }
  });

  var $$13 = _export;
  var IS_PURE$p = isPure;
  var anObject$u = anObject$1z;
  var bind$6 = functionBindContext;
  var getMapIterator = getMapIterator$a;
  var iterate$g = iterate$I; // `Set.prototype.some` method
  // https://github.com/tc39/proposal-collection-methods

  $$13({
    target: 'Map',
    proto: true,
    real: true,
    forced: IS_PURE$p
  }, {
    some: function some(callbackfn
    /* , thisArg */
    ) {
      var map = anObject$u(this);
      var iterator = getMapIterator(map);
      var boundFunction = bind$6(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
      return iterate$g(iterator, function (key, value, stop) {
        if (boundFunction(value, key, map)) return stop();
      }, {
        AS_ENTRIES: true,
        IS_ITERATOR: true,
        INTERRUPTED: true
      }).stopped;
    }
  });

  var $$12 = _export;
  var IS_PURE$o = isPure;
  var anObject$t = anObject$1z;
  var aFunction$c = aFunction$S; // `Set.prototype.update` method
  // https://github.com/tc39/proposal-collection-methods

  $$12({
    target: 'Map',
    proto: true,
    real: true,
    forced: IS_PURE$o
  }, {
    update: function update(key, callback
    /* , thunk */
    ) {
      var map = anObject$t(this);
      var length = arguments.length;
      aFunction$c(callback);
      var isPresentInMap = map.has(key);

      if (!isPresentInMap && length < 3) {
        throw TypeError('Updating absent value');
      }

      var value = isPresentInMap ? map.get(key) : aFunction$c(length > 2 ? arguments[2] : undefined)(key, map);
      map.set(key, callback(value, key, map));
      return map;
    }
  });

  var anObject$s = anObject$1z; // `Map.prototype.upsert` method
  // https://github.com/thumbsupep/proposal-upsert

  var mapUpsert = function upsert(key, updateFn
  /* , insertFn */
  ) {
    var map = anObject$s(this);
    var insertFn = arguments.length > 2 ? arguments[2] : undefined;
    var value;

    if (typeof updateFn != 'function' && typeof insertFn != 'function') {
      throw TypeError('At least one callback required');
    }

    if (map.has(key)) {
      value = map.get(key);

      if (typeof updateFn == 'function') {
        value = updateFn(value);
        map.set(key, value);
      }
    } else if (typeof insertFn == 'function') {
      value = insertFn();
      map.set(key, value);
    }

    return value;
  };

  var $$11 = _export;
  var IS_PURE$n = isPure;
  var $upsert$2 = mapUpsert; // `Map.prototype.updateOrInsert` method (replaced by `Map.prototype.emplace`)
  // https://github.com/thumbsupep/proposal-upsert

  $$11({
    target: 'Map',
    proto: true,
    real: true,
    forced: IS_PURE$n
  }, {
    updateOrInsert: $upsert$2
  });

  var $$10 = _export;
  var IS_PURE$m = isPure;
  var $upsert$1 = mapUpsert; // `Map.prototype.upsert` method (replaced by `Map.prototype.emplace`)
  // https://github.com/thumbsupep/proposal-upsert

  $$10({
    target: 'Map',
    proto: true,
    real: true,
    forced: IS_PURE$m
  }, {
    upsert: $upsert$1
  });

  var $$$ = _export;
  var min = Math.min;
  var max = Math.max; // `Math.clamp` method
  // https://rwaldron.github.io/proposal-math-extensions/

  $$$({
    target: 'Math',
    stat: true
  }, {
    clamp: function clamp(x, lower, upper) {
      return min(upper, max(lower, x));
    }
  });

  var $$_ = _export; // `Math.DEG_PER_RAD` constant
  // https://rwaldron.github.io/proposal-math-extensions/

  $$_({
    target: 'Math',
    stat: true
  }, {
    DEG_PER_RAD: Math.PI / 180
  });

  var $$Z = _export;
  var RAD_PER_DEG = 180 / Math.PI; // `Math.degrees` method
  // https://rwaldron.github.io/proposal-math-extensions/

  $$Z({
    target: 'Math',
    stat: true
  }, {
    degrees: function degrees(radians) {
      return radians * RAD_PER_DEG;
    }
  });

  // https://rwaldron.github.io/proposal-math-extensions/

  var mathScale = Math.scale || function scale(x, inLow, inHigh, outLow, outHigh) {
    if (arguments.length === 0
    /* eslint-disable no-self-compare -- NaN check */
    || x != x || inLow != inLow || inHigh != inHigh || outLow != outLow || outHigh != outHigh
    /* eslint-enable no-self-compare -- NaN check */
    ) return NaN;
    if (x === Infinity || x === -Infinity) return x;
    return (x - inLow) * (outHigh - outLow) / (inHigh - inLow) + outLow;
  };

  // https://tc39.es/ecma262/#sec-math.sign
  // eslint-disable-next-line es/no-math-sign -- safe

  var mathSign = Math.sign || function sign(x) {
    // eslint-disable-next-line no-self-compare -- NaN check
    return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
  };

  var sign = mathSign;
  var abs = Math.abs;
  var pow$1 = Math.pow;
  var EPSILON = pow$1(2, -52);
  var EPSILON32 = pow$1(2, -23);
  var MAX32 = pow$1(2, 127) * (2 - EPSILON32);
  var MIN32 = pow$1(2, -126);

  var roundTiesToEven = function roundTiesToEven(n) {
    return n + 1 / EPSILON - 1 / EPSILON;
  }; // `Math.fround` method implementation
  // https://tc39.es/ecma262/#sec-math.fround
  // eslint-disable-next-line es/no-math-fround -- safe


  var mathFround = Math.fround || function fround(x) {
    var $abs = abs(x);
    var $sign = sign(x);
    var a, result;
    if ($abs < MIN32) return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;
    a = (1 + EPSILON32 / EPSILON) * $abs;
    result = a - (a - $abs); // eslint-disable-next-line no-self-compare -- NaN check

    if (result > MAX32 || result != result) return $sign * Infinity;
    return $sign * result;
  };

  var $$Y = _export;
  var scale$1 = mathScale;
  var fround = mathFround; // `Math.fscale` method
  // https://rwaldron.github.io/proposal-math-extensions/

  $$Y({
    target: 'Math',
    stat: true
  }, {
    fscale: function fscale(x, inLow, inHigh, outLow, outHigh) {
      return fround(scale$1(x, inLow, inHigh, outLow, outHigh));
    }
  });

  var $$X = _export; // `Math.iaddh` method
  // https://gist.github.com/BrendanEich/4294d5c212a6d2254703
  // TODO: Remove from `core-js@4`

  $$X({
    target: 'Math',
    stat: true
  }, {
    iaddh: function iaddh(x0, x1, y0, y1) {
      var $x0 = x0 >>> 0;
      var $x1 = x1 >>> 0;
      var $y0 = y0 >>> 0;
      return $x1 + (y1 >>> 0) + (($x0 & $y0 | ($x0 | $y0) & ~($x0 + $y0 >>> 0)) >>> 31) | 0;
    }
  });

  var $$W = _export; // `Math.imulh` method
  // https://gist.github.com/BrendanEich/4294d5c212a6d2254703
  // TODO: Remove from `core-js@4`

  $$W({
    target: 'Math',
    stat: true
  }, {
    imulh: function imulh(u, v) {
      var UINT16 = 0xFFFF;
      var $u = +u;
      var $v = +v;
      var u0 = $u & UINT16;
      var v0 = $v & UINT16;
      var u1 = $u >> 16;
      var v1 = $v >> 16;
      var t = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
      return u1 * v1 + (t >> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >> 16);
    }
  });

  var $$V = _export; // `Math.isubh` method
  // https://gist.github.com/BrendanEich/4294d5c212a6d2254703
  // TODO: Remove from `core-js@4`

  $$V({
    target: 'Math',
    stat: true
  }, {
    isubh: function isubh(x0, x1, y0, y1) {
      var $x0 = x0 >>> 0;
      var $x1 = x1 >>> 0;
      var $y0 = y0 >>> 0;
      return $x1 - (y1 >>> 0) - ((~$x0 & $y0 | ~($x0 ^ $y0) & $x0 - $y0 >>> 0) >>> 31) | 0;
    }
  });

  var $$U = _export; // `Math.RAD_PER_DEG` constant
  // https://rwaldron.github.io/proposal-math-extensions/

  $$U({
    target: 'Math',
    stat: true
  }, {
    RAD_PER_DEG: 180 / Math.PI
  });

  var $$T = _export;
  var DEG_PER_RAD = Math.PI / 180; // `Math.radians` method
  // https://rwaldron.github.io/proposal-math-extensions/

  $$T({
    target: 'Math',
    stat: true
  }, {
    radians: function radians(degrees) {
      return degrees * DEG_PER_RAD;
    }
  });

  var $$S = _export;
  var scale = mathScale; // `Math.scale` method
  // https://rwaldron.github.io/proposal-math-extensions/

  $$S({
    target: 'Math',
    stat: true
  }, {
    scale: scale
  });

  var global$7 = global$K;
  var globalIsFinite = global$7.isFinite; // `Number.isFinite` method
  // https://tc39.es/ecma262/#sec-number.isfinite
  // eslint-disable-next-line es/no-number-isfinite -- safe

  var numberIsFinite$1 = Number.isFinite || function isFinite(it) {
    return typeof it == 'number' && globalIsFinite(it);
  };

  var $$R = _export;
  var anObject$r = anObject$1z;
  var numberIsFinite = numberIsFinite$1;
  var createIteratorConstructor$3 = createIteratorConstructor$7;
  var InternalStateModule$6 = internalState;
  var SEEDED_RANDOM = 'Seeded Random';
  var SEEDED_RANDOM_GENERATOR = SEEDED_RANDOM + ' Generator';
  var setInternalState$6 = InternalStateModule$6.set;
  var getInternalState$4 = InternalStateModule$6.getterFor(SEEDED_RANDOM_GENERATOR);
  var SEED_TYPE_ERROR = 'Math.seededPRNG() argument should have a "seed" field with a finite value.';
  var $SeededRandomGenerator = createIteratorConstructor$3(function SeededRandomGenerator(seed) {
    setInternalState$6(this, {
      type: SEEDED_RANDOM_GENERATOR,
      seed: seed % 2147483647
    });
  }, SEEDED_RANDOM, function next() {
    var state = getInternalState$4(this);
    var seed = state.seed = (state.seed * 1103515245 + 12345) % 2147483647;
    return {
      value: (seed & 1073741823) / 1073741823,
      done: false
    };
  }); // `Math.seededPRNG` method
  // https://github.com/tc39/proposal-seeded-random
  // based on https://github.com/tc39/proposal-seeded-random/blob/78b8258835b57fc2100d076151ab506bc3202ae6/demo.html

  $$R({
    target: 'Math',
    stat: true,
    forced: true
  }, {
    seededPRNG: function seededPRNG(it) {
      var seed = anObject$r(it).seed;
      if (!numberIsFinite(seed)) throw TypeError(SEED_TYPE_ERROR);
      return new $SeededRandomGenerator(seed);
    }
  });

  var $$Q = _export; // `Math.signbit` method
  // https://github.com/tc39/proposal-Math.signbit

  $$Q({
    target: 'Math',
    stat: true
  }, {
    signbit: function signbit(x) {
      return (x = +x) == x && x == 0 ? 1 / x == -Infinity : x < 0;
    }
  });

  var $$P = _export; // `Math.umulh` method
  // https://gist.github.com/BrendanEich/4294d5c212a6d2254703
  // TODO: Remove from `core-js@4`

  $$P({
    target: 'Math',
    stat: true
  }, {
    umulh: function umulh(u, v) {
      var UINT16 = 0xFFFF;
      var $u = +u;
      var $v = +v;
      var u0 = $u & UINT16;
      var v0 = $v & UINT16;
      var u1 = $u >>> 16;
      var v1 = $v >>> 16;
      var t = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
      return u1 * v1 + (t >>> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >>> 16);
    }
  });

  var global$6 = global$K;
  var toString$2 = toString$n;
  var trim = stringTrim.trim;
  var whitespaces = whitespaces$4;
  var $parseInt = global$6.parseInt;
  var hex = /^[+-]?0[Xx]/;
  var FORCED$2 = $parseInt(whitespaces + '08') !== 8 || $parseInt(whitespaces + '0x16') !== 22; // `parseInt` method
  // https://tc39.es/ecma262/#sec-parseint-string-radix

  var numberParseInt = FORCED$2 ? function parseInt(string, radix) {
    var S = trim(toString$2(string));
    return $parseInt(S, radix >>> 0 || (hex.test(S) ? 16 : 10));
  } : $parseInt;

  var $$O = _export;
  var toInteger$1 = toInteger$f;
  var parseInt$1 = numberParseInt;
  var INVALID_NUMBER_REPRESENTATION = 'Invalid number representation';
  var INVALID_RADIX = 'Invalid radix';
  var valid = /^[\da-z]+$/; // `Number.fromString` method
  // https://github.com/tc39/proposal-number-fromstring

  $$O({
    target: 'Number',
    stat: true
  }, {
    fromString: function fromString(string, radix) {
      var sign = 1;
      var R, mathNum;
      if (typeof string != 'string') throw TypeError(INVALID_NUMBER_REPRESENTATION);
      if (!string.length) throw SyntaxError(INVALID_NUMBER_REPRESENTATION);

      if (string.charAt(0) == '-') {
        sign = -1;
        string = string.slice(1);
        if (!string.length) throw SyntaxError(INVALID_NUMBER_REPRESENTATION);
      }

      R = radix === undefined ? 10 : toInteger$1(radix);
      if (R < 2 || R > 36) throw RangeError(INVALID_RADIX);

      if (!valid.test(string) || (mathNum = parseInt$1(string, R)).toString(R) !== string) {
        throw SyntaxError(INVALID_NUMBER_REPRESENTATION);
      }

      return sign * mathNum;
    }
  });

  var $$N = _export;
  var NumericRangeIterator = numericRangeIterator; // `Number.range` method
  // https://github.com/tc39/proposal-Number.range

  $$N({
    target: 'Number',
    stat: true
  }, {
    range: function range(start, end, option) {
      return new NumericRangeIterator(start, end, option, 'number', 0, 1);
    }
  });

  var $$M = _export;
  var hasOwn$1 = has$n; // `Object.hasOwn` method
  // https://github.com/tc39/proposal-accessible-object-hasownproperty

  $$M({
    target: 'Object',
    stat: true
  }, {
    hasOwn: hasOwn$1
  });

  var InternalStateModule$5 = internalState;
  var createIteratorConstructor$2 = createIteratorConstructor$7;
  var has$1 = has$n;
  var objectKeys = objectKeys$5;
  var toObject = toObject$u;
  var OBJECT_ITERATOR = 'Object Iterator';
  var setInternalState$5 = InternalStateModule$5.set;
  var getInternalState$3 = InternalStateModule$5.getterFor(OBJECT_ITERATOR);
  var objectIterator = createIteratorConstructor$2(function ObjectIterator(source, mode) {
    var object = toObject(source);
    setInternalState$5(this, {
      type: OBJECT_ITERATOR,
      mode: mode,
      object: object,
      keys: objectKeys(object),
      index: 0
    });
  }, 'Object', function next() {
    var state = getInternalState$3(this);
    var keys = state.keys;

    while (true) {
      if (keys === null || state.index >= keys.length) {
        state.object = state.keys = null;
        return {
          value: undefined,
          done: true
        };
      }

      var key = keys[state.index++];
      var object = state.object;
      if (!has$1(object, key)) continue;

      switch (state.mode) {
        case 'keys':
          return {
            value: key,
            done: false
          };

        case 'values':
          return {
            value: object[key],
            done: false
          };
      }
      /* entries */


      return {
        value: [key, object[key]],
        done: false
      };
    }
  });

  var $$L = _export;
  var ObjectIterator$2 = objectIterator; // `Object.iterateEntries` method
  // https://github.com/tc39/proposal-object-iteration

  $$L({
    target: 'Object',
    stat: true
  }, {
    iterateEntries: function iterateEntries(object) {
      return new ObjectIterator$2(object, 'entries');
    }
  });

  var $$K = _export;
  var ObjectIterator$1 = objectIterator; // `Object.iterateKeys` method
  // https://github.com/tc39/proposal-object-iteration

  $$K({
    target: 'Object',
    stat: true
  }, {
    iterateKeys: function iterateKeys(object) {
      return new ObjectIterator$1(object, 'keys');
    }
  });

  var $$J = _export;
  var ObjectIterator = objectIterator; // `Object.iterateValues` method
  // https://github.com/tc39/proposal-object-iteration

  $$J({
    target: 'Object',
    stat: true
  }, {
    iterateValues: function iterateValues(object) {
      return new ObjectIterator(object, 'values');
    }
  });

  var anObject$q = anObject$1z;
  var getIteratorMethod$1 = getIteratorMethod$8;

  var getIterator$3 = function getIterator(it) {
    var iteratorMethod = getIteratorMethod$1(it);

    if (typeof iteratorMethod != 'function') {
      throw TypeError(String(it) + ' is not iterable');
    }

    return anObject$q(iteratorMethod.call(it));
  };

  var $$I = _export;
  var DESCRIPTORS$1 = descriptors;
  var setSpecies = setSpecies$7;
  var aFunction$b = aFunction$S;
  var anObject$p = anObject$1z;
  var isObject$1 = isObject$w;
  var anInstance$2 = anInstance$b;
  var defineProperty = objectDefineProperty.f;
  var createNonEnumerableProperty$2 = createNonEnumerableProperty$m;
  var redefineAll$1 = redefineAll$9;
  var getIterator$2 = getIterator$3;
  var iterate$f = iterate$I;
  var hostReportErrors = hostReportErrors$2;
  var wellKnownSymbol$3 = wellKnownSymbol$E;
  var InternalStateModule$4 = internalState;
  var OBSERVABLE = wellKnownSymbol$3('observable');
  var getInternalState$2 = InternalStateModule$4.get;
  var setInternalState$4 = InternalStateModule$4.set;

  var getMethod = function getMethod(fn) {
    return fn == null ? undefined : aFunction$b(fn);
  };

  var cleanupSubscription = function cleanupSubscription(subscriptionState) {
    var cleanup = subscriptionState.cleanup;

    if (cleanup) {
      subscriptionState.cleanup = undefined;

      try {
        cleanup();
      } catch (error) {
        hostReportErrors(error);
      }
    }
  };

  var subscriptionClosed = function subscriptionClosed(subscriptionState) {
    return subscriptionState.observer === undefined;
  };

  var close = function close(subscriptionState) {
    var subscription = subscriptionState.facade;

    if (!DESCRIPTORS$1) {
      subscription.closed = true;
      var subscriptionObserver = subscriptionState.subscriptionObserver;
      if (subscriptionObserver) subscriptionObserver.closed = true;
    }

    subscriptionState.observer = undefined;
  };

  var Subscription = function Subscription(observer, subscriber) {
    var subscriptionState = setInternalState$4(this, {
      cleanup: undefined,
      observer: anObject$p(observer),
      subscriptionObserver: undefined
    });
    var start;
    if (!DESCRIPTORS$1) this.closed = false;

    try {
      if (start = getMethod(observer.start)) start.call(observer, this);
    } catch (error) {
      hostReportErrors(error);
    }

    if (subscriptionClosed(subscriptionState)) return;
    var subscriptionObserver = subscriptionState.subscriptionObserver = new SubscriptionObserver(this);

    try {
      var cleanup = subscriber(subscriptionObserver);
      var subscription = cleanup;
      if (cleanup != null) subscriptionState.cleanup = typeof cleanup.unsubscribe === 'function' ? function () {
        subscription.unsubscribe();
      } : aFunction$b(cleanup);
    } catch (error) {
      subscriptionObserver.error(error);
      return;
    }

    if (subscriptionClosed(subscriptionState)) cleanupSubscription(subscriptionState);
  };

  Subscription.prototype = redefineAll$1({}, {
    unsubscribe: function unsubscribe() {
      var subscriptionState = getInternalState$2(this);

      if (!subscriptionClosed(subscriptionState)) {
        close(subscriptionState);
        cleanupSubscription(subscriptionState);
      }
    }
  });
  if (DESCRIPTORS$1) defineProperty(Subscription.prototype, 'closed', {
    configurable: true,
    get: function get() {
      return subscriptionClosed(getInternalState$2(this));
    }
  });

  var SubscriptionObserver = function SubscriptionObserver(subscription) {
    setInternalState$4(this, {
      subscription: subscription
    });
    if (!DESCRIPTORS$1) this.closed = false;
  };

  SubscriptionObserver.prototype = redefineAll$1({}, {
    next: function next(value) {
      var subscriptionState = getInternalState$2(getInternalState$2(this).subscription);

      if (!subscriptionClosed(subscriptionState)) {
        var observer = subscriptionState.observer;

        try {
          var nextMethod = getMethod(observer.next);
          if (nextMethod) nextMethod.call(observer, value);
        } catch (error) {
          hostReportErrors(error);
        }
      }
    },
    error: function error(value) {
      var subscriptionState = getInternalState$2(getInternalState$2(this).subscription);

      if (!subscriptionClosed(subscriptionState)) {
        var observer = subscriptionState.observer;
        close(subscriptionState);

        try {
          var errorMethod = getMethod(observer.error);
          if (errorMethod) errorMethod.call(observer, value);else hostReportErrors(value);
        } catch (err) {
          hostReportErrors(err);
        }

        cleanupSubscription(subscriptionState);
      }
    },
    complete: function complete() {
      var subscriptionState = getInternalState$2(getInternalState$2(this).subscription);

      if (!subscriptionClosed(subscriptionState)) {
        var observer = subscriptionState.observer;
        close(subscriptionState);

        try {
          var completeMethod = getMethod(observer.complete);
          if (completeMethod) completeMethod.call(observer);
        } catch (error) {
          hostReportErrors(error);
        }

        cleanupSubscription(subscriptionState);
      }
    }
  });
  if (DESCRIPTORS$1) defineProperty(SubscriptionObserver.prototype, 'closed', {
    configurable: true,
    get: function get() {
      return subscriptionClosed(getInternalState$2(getInternalState$2(this).subscription));
    }
  });

  var $Observable = function Observable(subscriber) {
    anInstance$2(this, $Observable, 'Observable');
    setInternalState$4(this, {
      subscriber: aFunction$b(subscriber)
    });
  };

  redefineAll$1($Observable.prototype, {
    subscribe: function subscribe(observer) {
      var length = arguments.length;
      return new Subscription(typeof observer === 'function' ? {
        next: observer,
        error: length > 1 ? arguments[1] : undefined,
        complete: length > 2 ? arguments[2] : undefined
      } : isObject$1(observer) ? observer : {}, getInternalState$2(this).subscriber);
    }
  });
  redefineAll$1($Observable, {
    from: function from(x) {
      var C = typeof this === 'function' ? this : $Observable;
      var observableMethod = getMethod(anObject$p(x)[OBSERVABLE]);

      if (observableMethod) {
        var observable = anObject$p(observableMethod.call(x));
        return observable.constructor === C ? observable : new C(function (observer) {
          return observable.subscribe(observer);
        });
      }

      var iterator = getIterator$2(x);
      return new C(function (observer) {
        iterate$f(iterator, function (it, stop) {
          observer.next(it);
          if (observer.closed) return stop();
        }, {
          IS_ITERATOR: true,
          INTERRUPTED: true
        });
        observer.complete();
      });
    },
    of: function of() {
      var C = typeof this === 'function' ? this : $Observable;
      var length = arguments.length;
      var items = new Array(length);
      var index = 0;

      while (index < length) {
        items[index] = arguments[index++];
      }

      return new C(function (observer) {
        for (var i = 0; i < length; i++) {
          observer.next(items[i]);
          if (observer.closed) return;
        }

        observer.complete();
      });
    }
  });
  createNonEnumerableProperty$2($Observable.prototype, OBSERVABLE, function () {
    return this;
  });
  $$I({
    global: true
  }, {
    Observable: $Observable
  });
  setSpecies('Observable');

  var $$H = _export;
  var newPromiseCapabilityModule = newPromiseCapability$2;
  var perform = perform$4; // `Promise.try` method
  // https://github.com/tc39/proposal-promise-try

  $$H({
    target: 'Promise',
    stat: true
  }, {
    'try': function _try(callbackfn) {
      var promiseCapability = newPromiseCapabilityModule.f(this);
      var result = perform(callbackfn);
      (result.error ? promiseCapability.reject : promiseCapability.resolve)(result.value);
      return promiseCapability.promise;
    }
  });

  var Map$1 = es_map;
  var WeakMap = es_weakMap.exports;
  var shared = shared$7.exports;
  var metadata = shared('metadata');
  var store$1 = metadata.store || (metadata.store = new WeakMap());

  var getOrCreateMetadataMap$1 = function getOrCreateMetadataMap(target, targetKey, create) {
    var targetMetadata = store$1.get(target);

    if (!targetMetadata) {
      if (!create) return;
      store$1.set(target, targetMetadata = new Map$1());
    }

    var keyMetadata = targetMetadata.get(targetKey);

    if (!keyMetadata) {
      if (!create) return;
      targetMetadata.set(targetKey, keyMetadata = new Map$1());
    }

    return keyMetadata;
  };

  var ordinaryHasOwnMetadata$3 = function ordinaryHasOwnMetadata(MetadataKey, O, P) {
    var metadataMap = getOrCreateMetadataMap$1(O, P, false);
    return metadataMap === undefined ? false : metadataMap.has(MetadataKey);
  };

  var ordinaryGetOwnMetadata$2 = function ordinaryGetOwnMetadata(MetadataKey, O, P) {
    var metadataMap = getOrCreateMetadataMap$1(O, P, false);
    return metadataMap === undefined ? undefined : metadataMap.get(MetadataKey);
  };

  var ordinaryDefineOwnMetadata$2 = function ordinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P) {
    getOrCreateMetadataMap$1(O, P, true).set(MetadataKey, MetadataValue);
  };

  var ordinaryOwnMetadataKeys$2 = function ordinaryOwnMetadataKeys(target, targetKey) {
    var metadataMap = getOrCreateMetadataMap$1(target, targetKey, false);
    var keys = [];
    if (metadataMap) metadataMap.forEach(function (_, key) {
      keys.push(key);
    });
    return keys;
  };

  var toMetadataKey$9 = function toMetadataKey(it) {
    return it === undefined || typeof it == 'symbol' ? it : String(it);
  };

  var reflectMetadata = {
    store: store$1,
    getMap: getOrCreateMetadataMap$1,
    has: ordinaryHasOwnMetadata$3,
    get: ordinaryGetOwnMetadata$2,
    set: ordinaryDefineOwnMetadata$2,
    keys: ordinaryOwnMetadataKeys$2,
    toKey: toMetadataKey$9
  };

  var $$G = _export;
  var ReflectMetadataModule$8 = reflectMetadata;
  var anObject$o = anObject$1z;
  var toMetadataKey$8 = ReflectMetadataModule$8.toKey;
  var ordinaryDefineOwnMetadata$1 = ReflectMetadataModule$8.set; // `Reflect.defineMetadata` method
  // https://github.com/rbuckton/reflect-metadata

  $$G({
    target: 'Reflect',
    stat: true
  }, {
    defineMetadata: function defineMetadata(metadataKey, metadataValue, target
    /* , targetKey */
    ) {
      var targetKey = arguments.length < 4 ? undefined : toMetadataKey$8(arguments[3]);
      ordinaryDefineOwnMetadata$1(metadataKey, metadataValue, anObject$o(target), targetKey);
    }
  });

  var $$F = _export;
  var ReflectMetadataModule$7 = reflectMetadata;
  var anObject$n = anObject$1z;
  var toMetadataKey$7 = ReflectMetadataModule$7.toKey;
  var getOrCreateMetadataMap = ReflectMetadataModule$7.getMap;
  var store = ReflectMetadataModule$7.store; // `Reflect.deleteMetadata` method
  // https://github.com/rbuckton/reflect-metadata

  $$F({
    target: 'Reflect',
    stat: true
  }, {
    deleteMetadata: function deleteMetadata(metadataKey, target
    /* , targetKey */
    ) {
      var targetKey = arguments.length < 3 ? undefined : toMetadataKey$7(arguments[2]);
      var metadataMap = getOrCreateMetadataMap(anObject$n(target), targetKey, false);
      if (metadataMap === undefined || !metadataMap['delete'](metadataKey)) return false;
      if (metadataMap.size) return true;
      var targetMetadata = store.get(target);
      targetMetadata['delete'](targetKey);
      return !!targetMetadata.size || store['delete'](target);
    }
  });

  var $$E = _export;
  var ReflectMetadataModule$6 = reflectMetadata;
  var anObject$m = anObject$1z;
  var getPrototypeOf$2 = objectGetPrototypeOf$1;
  var ordinaryHasOwnMetadata$2 = ReflectMetadataModule$6.has;
  var ordinaryGetOwnMetadata$1 = ReflectMetadataModule$6.get;
  var toMetadataKey$6 = ReflectMetadataModule$6.toKey;

  var ordinaryGetMetadata = function ordinaryGetMetadata(MetadataKey, O, P) {
    var hasOwn = ordinaryHasOwnMetadata$2(MetadataKey, O, P);
    if (hasOwn) return ordinaryGetOwnMetadata$1(MetadataKey, O, P);
    var parent = getPrototypeOf$2(O);
    return parent !== null ? ordinaryGetMetadata(MetadataKey, parent, P) : undefined;
  }; // `Reflect.getMetadata` method
  // https://github.com/rbuckton/reflect-metadata


  $$E({
    target: 'Reflect',
    stat: true
  }, {
    getMetadata: function getMetadata(metadataKey, target
    /* , targetKey */
    ) {
      var targetKey = arguments.length < 3 ? undefined : toMetadataKey$6(arguments[2]);
      return ordinaryGetMetadata(metadataKey, anObject$m(target), targetKey);
    }
  });

  var $$D = _export; // TODO: in core-js@4, move /modules/ dependencies to public entries for better optimization by tools like `preset-env`

  var Set$1 = es_set;
  var ReflectMetadataModule$5 = reflectMetadata;
  var anObject$l = anObject$1z;
  var getPrototypeOf$1 = objectGetPrototypeOf$1;
  var iterate$e = iterate$I;
  var ordinaryOwnMetadataKeys$1 = ReflectMetadataModule$5.keys;
  var toMetadataKey$5 = ReflectMetadataModule$5.toKey;

  var from$3 = function from(iter) {
    var result = [];
    iterate$e(iter, result.push, {
      that: result
    });
    return result;
  };

  var ordinaryMetadataKeys = function ordinaryMetadataKeys(O, P) {
    var oKeys = ordinaryOwnMetadataKeys$1(O, P);
    var parent = getPrototypeOf$1(O);
    if (parent === null) return oKeys;
    var pKeys = ordinaryMetadataKeys(parent, P);
    return pKeys.length ? oKeys.length ? from$3(new Set$1(oKeys.concat(pKeys))) : pKeys : oKeys;
  }; // `Reflect.getMetadataKeys` method
  // https://github.com/rbuckton/reflect-metadata


  $$D({
    target: 'Reflect',
    stat: true
  }, {
    getMetadataKeys: function getMetadataKeys(target
    /* , targetKey */
    ) {
      var targetKey = arguments.length < 2 ? undefined : toMetadataKey$5(arguments[1]);
      return ordinaryMetadataKeys(anObject$l(target), targetKey);
    }
  });

  var $$C = _export;
  var ReflectMetadataModule$4 = reflectMetadata;
  var anObject$k = anObject$1z;
  var ordinaryGetOwnMetadata = ReflectMetadataModule$4.get;
  var toMetadataKey$4 = ReflectMetadataModule$4.toKey; // `Reflect.getOwnMetadata` method
  // https://github.com/rbuckton/reflect-metadata

  $$C({
    target: 'Reflect',
    stat: true
  }, {
    getOwnMetadata: function getOwnMetadata(metadataKey, target
    /* , targetKey */
    ) {
      var targetKey = arguments.length < 3 ? undefined : toMetadataKey$4(arguments[2]);
      return ordinaryGetOwnMetadata(metadataKey, anObject$k(target), targetKey);
    }
  });

  var $$B = _export;
  var ReflectMetadataModule$3 = reflectMetadata;
  var anObject$j = anObject$1z;
  var ordinaryOwnMetadataKeys = ReflectMetadataModule$3.keys;
  var toMetadataKey$3 = ReflectMetadataModule$3.toKey; // `Reflect.getOwnMetadataKeys` method
  // https://github.com/rbuckton/reflect-metadata

  $$B({
    target: 'Reflect',
    stat: true
  }, {
    getOwnMetadataKeys: function getOwnMetadataKeys(target
    /* , targetKey */
    ) {
      var targetKey = arguments.length < 2 ? undefined : toMetadataKey$3(arguments[1]);
      return ordinaryOwnMetadataKeys(anObject$j(target), targetKey);
    }
  });

  var $$A = _export;
  var ReflectMetadataModule$2 = reflectMetadata;
  var anObject$i = anObject$1z;
  var getPrototypeOf = objectGetPrototypeOf$1;
  var ordinaryHasOwnMetadata$1 = ReflectMetadataModule$2.has;
  var toMetadataKey$2 = ReflectMetadataModule$2.toKey;

  var ordinaryHasMetadata = function ordinaryHasMetadata(MetadataKey, O, P) {
    var hasOwn = ordinaryHasOwnMetadata$1(MetadataKey, O, P);
    if (hasOwn) return true;
    var parent = getPrototypeOf(O);
    return parent !== null ? ordinaryHasMetadata(MetadataKey, parent, P) : false;
  }; // `Reflect.hasMetadata` method
  // https://github.com/rbuckton/reflect-metadata


  $$A({
    target: 'Reflect',
    stat: true
  }, {
    hasMetadata: function hasMetadata(metadataKey, target
    /* , targetKey */
    ) {
      var targetKey = arguments.length < 3 ? undefined : toMetadataKey$2(arguments[2]);
      return ordinaryHasMetadata(metadataKey, anObject$i(target), targetKey);
    }
  });

  var $$z = _export;
  var ReflectMetadataModule$1 = reflectMetadata;
  var anObject$h = anObject$1z;
  var ordinaryHasOwnMetadata = ReflectMetadataModule$1.has;
  var toMetadataKey$1 = ReflectMetadataModule$1.toKey; // `Reflect.hasOwnMetadata` method
  // https://github.com/rbuckton/reflect-metadata

  $$z({
    target: 'Reflect',
    stat: true
  }, {
    hasOwnMetadata: function hasOwnMetadata(metadataKey, target
    /* , targetKey */
    ) {
      var targetKey = arguments.length < 3 ? undefined : toMetadataKey$1(arguments[2]);
      return ordinaryHasOwnMetadata(metadataKey, anObject$h(target), targetKey);
    }
  });

  var $$y = _export;
  var ReflectMetadataModule = reflectMetadata;
  var anObject$g = anObject$1z;
  var toMetadataKey = ReflectMetadataModule.toKey;
  var ordinaryDefineOwnMetadata = ReflectMetadataModule.set; // `Reflect.metadata` method
  // https://github.com/rbuckton/reflect-metadata

  $$y({
    target: 'Reflect',
    stat: true
  }, {
    metadata: function metadata(metadataKey, metadataValue) {
      return function decorator(target, key) {
        ordinaryDefineOwnMetadata(metadataKey, metadataValue, anObject$g(target), toMetadataKey(key));
      };
    }
  });

  var anObject$f = anObject$1z;
  var aFunction$a = aFunction$S; // https://github.com/tc39/collection-methods

  var collectionAddAll$2 = function collectionAddAll() {
    var set = anObject$f(this);
    var adder = aFunction$a(set.add);

    for (var k = 0, len = arguments.length; k < len; k++) {
      adder.call(set, arguments[k]);
    }

    return set;
  };

  var $$x = _export;
  var IS_PURE$l = isPure;
  var collectionAddAll$1 = collectionAddAll$2; // `Set.prototype.addAll` method
  // https://github.com/tc39/proposal-collection-methods

  $$x({
    target: 'Set',
    proto: true,
    real: true,
    forced: IS_PURE$l
  }, {
    addAll: function addAll() {
      return collectionAddAll$1.apply(this, arguments);
    }
  });

  var $$w = _export;
  var IS_PURE$k = isPure;
  var collectionDeleteAll$2 = collectionDeleteAll$4; // `Set.prototype.deleteAll` method
  // https://github.com/tc39/proposal-collection-methods

  $$w({
    target: 'Set',
    proto: true,
    real: true,
    forced: IS_PURE$k
  }, {
    deleteAll: function deleteAll() {
      return collectionDeleteAll$2.apply(this, arguments);
    }
  });

  var $$v = _export;
  var IS_PURE$j = isPure;
  var getBuiltIn$7 = getBuiltIn$u;
  var anObject$e = anObject$1z;
  var aFunction$9 = aFunction$S;
  var speciesConstructor$5 = speciesConstructor$f;
  var iterate$d = iterate$I; // `Set.prototype.difference` method
  // https://github.com/tc39/proposal-set-methods

  $$v({
    target: 'Set',
    proto: true,
    real: true,
    forced: IS_PURE$j
  }, {
    difference: function difference(iterable) {
      var set = anObject$e(this);
      var newSet = new (speciesConstructor$5(set, getBuiltIn$7('Set')))(set);
      var remover = aFunction$9(newSet['delete']);
      iterate$d(iterable, function (value) {
        remover.call(newSet, value);
      });
      return newSet;
    }
  });

  var getSetIterator$7 = function getSetIterator(it) {
    // eslint-disable-next-line es/no-set -- safe
    return Set.prototype.values.call(it);
  };

  var $$u = _export;
  var IS_PURE$i = isPure;
  var anObject$d = anObject$1z;
  var bind$5 = functionBindContext;
  var getSetIterator$6 = getSetIterator$7;
  var iterate$c = iterate$I; // `Set.prototype.every` method
  // https://github.com/tc39/proposal-collection-methods

  $$u({
    target: 'Set',
    proto: true,
    real: true,
    forced: IS_PURE$i
  }, {
    every: function every(callbackfn
    /* , thisArg */
    ) {
      var set = anObject$d(this);
      var iterator = getSetIterator$6(set);
      var boundFunction = bind$5(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
      return !iterate$c(iterator, function (value, stop) {
        if (!boundFunction(value, value, set)) return stop();
      }, {
        IS_ITERATOR: true,
        INTERRUPTED: true
      }).stopped;
    }
  });

  var $$t = _export;
  var IS_PURE$h = isPure;
  var getBuiltIn$6 = getBuiltIn$u;
  var anObject$c = anObject$1z;
  var aFunction$8 = aFunction$S;
  var bind$4 = functionBindContext;
  var speciesConstructor$4 = speciesConstructor$f;
  var getSetIterator$5 = getSetIterator$7;
  var iterate$b = iterate$I; // `Set.prototype.filter` method
  // https://github.com/tc39/proposal-collection-methods

  $$t({
    target: 'Set',
    proto: true,
    real: true,
    forced: IS_PURE$h
  }, {
    filter: function filter(callbackfn
    /* , thisArg */
    ) {
      var set = anObject$c(this);
      var iterator = getSetIterator$5(set);
      var boundFunction = bind$4(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
      var newSet = new (speciesConstructor$4(set, getBuiltIn$6('Set')))();
      var adder = aFunction$8(newSet.add);
      iterate$b(iterator, function (value) {
        if (boundFunction(value, value, set)) adder.call(newSet, value);
      }, {
        IS_ITERATOR: true
      });
      return newSet;
    }
  });

  var $$s = _export;
  var IS_PURE$g = isPure;
  var anObject$b = anObject$1z;
  var bind$3 = functionBindContext;
  var getSetIterator$4 = getSetIterator$7;
  var iterate$a = iterate$I; // `Set.prototype.find` method
  // https://github.com/tc39/proposal-collection-methods

  $$s({
    target: 'Set',
    proto: true,
    real: true,
    forced: IS_PURE$g
  }, {
    find: function find(callbackfn
    /* , thisArg */
    ) {
      var set = anObject$b(this);
      var iterator = getSetIterator$4(set);
      var boundFunction = bind$3(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
      return iterate$a(iterator, function (value, stop) {
        if (boundFunction(value, value, set)) return stop(value);
      }, {
        IS_ITERATOR: true,
        INTERRUPTED: true
      }).result;
    }
  });

  var $$r = _export;
  var from$2 = collectionFrom; // `Set.from` method
  // https://tc39.github.io/proposal-setmap-offrom/#sec-set.from

  $$r({
    target: 'Set',
    stat: true
  }, {
    from: from$2
  });

  var $$q = _export;
  var IS_PURE$f = isPure;
  var getBuiltIn$5 = getBuiltIn$u;
  var anObject$a = anObject$1z;
  var aFunction$7 = aFunction$S;
  var speciesConstructor$3 = speciesConstructor$f;
  var iterate$9 = iterate$I; // `Set.prototype.intersection` method
  // https://github.com/tc39/proposal-set-methods

  $$q({
    target: 'Set',
    proto: true,
    real: true,
    forced: IS_PURE$f
  }, {
    intersection: function intersection(iterable) {
      var set = anObject$a(this);
      var newSet = new (speciesConstructor$3(set, getBuiltIn$5('Set')))();
      var hasCheck = aFunction$7(set.has);
      var adder = aFunction$7(newSet.add);
      iterate$9(iterable, function (value) {
        if (hasCheck.call(set, value)) adder.call(newSet, value);
      });
      return newSet;
    }
  });

  var $$p = _export;
  var IS_PURE$e = isPure;
  var anObject$9 = anObject$1z;
  var aFunction$6 = aFunction$S;
  var iterate$8 = iterate$I; // `Set.prototype.isDisjointFrom` method
  // https://tc39.github.io/proposal-set-methods/#Set.prototype.isDisjointFrom

  $$p({
    target: 'Set',
    proto: true,
    real: true,
    forced: IS_PURE$e
  }, {
    isDisjointFrom: function isDisjointFrom(iterable) {
      var set = anObject$9(this);
      var hasCheck = aFunction$6(set.has);
      return !iterate$8(iterable, function (value, stop) {
        if (hasCheck.call(set, value) === true) return stop();
      }, {
        INTERRUPTED: true
      }).stopped;
    }
  });

  var $$o = _export;
  var IS_PURE$d = isPure;
  var getBuiltIn$4 = getBuiltIn$u;
  var anObject$8 = anObject$1z;
  var aFunction$5 = aFunction$S;
  var getIterator$1 = getIterator$3;
  var iterate$7 = iterate$I; // `Set.prototype.isSubsetOf` method
  // https://tc39.github.io/proposal-set-methods/#Set.prototype.isSubsetOf

  $$o({
    target: 'Set',
    proto: true,
    real: true,
    forced: IS_PURE$d
  }, {
    isSubsetOf: function isSubsetOf(iterable) {
      var iterator = getIterator$1(this);
      var otherSet = anObject$8(iterable);
      var hasCheck = otherSet.has;

      if (typeof hasCheck != 'function') {
        otherSet = new (getBuiltIn$4('Set'))(iterable);
        hasCheck = aFunction$5(otherSet.has);
      }

      return !iterate$7(iterator, function (value, stop) {
        if (hasCheck.call(otherSet, value) === false) return stop();
      }, {
        IS_ITERATOR: true,
        INTERRUPTED: true
      }).stopped;
    }
  });

  var $$n = _export;
  var IS_PURE$c = isPure;
  var anObject$7 = anObject$1z;
  var aFunction$4 = aFunction$S;
  var iterate$6 = iterate$I; // `Set.prototype.isSupersetOf` method
  // https://tc39.github.io/proposal-set-methods/#Set.prototype.isSupersetOf

  $$n({
    target: 'Set',
    proto: true,
    real: true,
    forced: IS_PURE$c
  }, {
    isSupersetOf: function isSupersetOf(iterable) {
      var set = anObject$7(this);
      var hasCheck = aFunction$4(set.has);
      return !iterate$6(iterable, function (value, stop) {
        if (hasCheck.call(set, value) === false) return stop();
      }, {
        INTERRUPTED: true
      }).stopped;
    }
  });

  var $$m = _export;
  var IS_PURE$b = isPure;
  var anObject$6 = anObject$1z;
  var getSetIterator$3 = getSetIterator$7;
  var iterate$5 = iterate$I; // `Set.prototype.join` method
  // https://github.com/tc39/proposal-collection-methods

  $$m({
    target: 'Set',
    proto: true,
    real: true,
    forced: IS_PURE$b
  }, {
    join: function join(separator) {
      var set = anObject$6(this);
      var iterator = getSetIterator$3(set);
      var sep = separator === undefined ? ',' : String(separator);
      var result = [];
      iterate$5(iterator, result.push, {
        that: result,
        IS_ITERATOR: true
      });
      return result.join(sep);
    }
  });

  var $$l = _export;
  var IS_PURE$a = isPure;
  var getBuiltIn$3 = getBuiltIn$u;
  var anObject$5 = anObject$1z;
  var aFunction$3 = aFunction$S;
  var bind$2 = functionBindContext;
  var speciesConstructor$2 = speciesConstructor$f;
  var getSetIterator$2 = getSetIterator$7;
  var iterate$4 = iterate$I; // `Set.prototype.map` method
  // https://github.com/tc39/proposal-collection-methods

  $$l({
    target: 'Set',
    proto: true,
    real: true,
    forced: IS_PURE$a
  }, {
    map: function map(callbackfn
    /* , thisArg */
    ) {
      var set = anObject$5(this);
      var iterator = getSetIterator$2(set);
      var boundFunction = bind$2(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
      var newSet = new (speciesConstructor$2(set, getBuiltIn$3('Set')))();
      var adder = aFunction$3(newSet.add);
      iterate$4(iterator, function (value) {
        adder.call(newSet, boundFunction(value, value, set));
      }, {
        IS_ITERATOR: true
      });
      return newSet;
    }
  });

  var $$k = _export;
  var of$2 = collectionOf; // `Set.of` method
  // https://tc39.github.io/proposal-setmap-offrom/#sec-set.of

  $$k({
    target: 'Set',
    stat: true
  }, {
    of: of$2
  });

  var $$j = _export;
  var IS_PURE$9 = isPure;
  var anObject$4 = anObject$1z;
  var aFunction$2 = aFunction$S;
  var getSetIterator$1 = getSetIterator$7;
  var iterate$3 = iterate$I; // `Set.prototype.reduce` method
  // https://github.com/tc39/proposal-collection-methods

  $$j({
    target: 'Set',
    proto: true,
    real: true,
    forced: IS_PURE$9
  }, {
    reduce: function reduce(callbackfn
    /* , initialValue */
    ) {
      var set = anObject$4(this);
      var iterator = getSetIterator$1(set);
      var noInitial = arguments.length < 2;
      var accumulator = noInitial ? undefined : arguments[1];
      aFunction$2(callbackfn);
      iterate$3(iterator, function (value) {
        if (noInitial) {
          noInitial = false;
          accumulator = value;
        } else {
          accumulator = callbackfn(accumulator, value, value, set);
        }
      }, {
        IS_ITERATOR: true
      });
      if (noInitial) throw TypeError('Reduce of empty set with no initial value');
      return accumulator;
    }
  });

  var $$i = _export;
  var IS_PURE$8 = isPure;
  var anObject$3 = anObject$1z;
  var bind$1 = functionBindContext;
  var getSetIterator = getSetIterator$7;
  var iterate$2 = iterate$I; // `Set.prototype.some` method
  // https://github.com/tc39/proposal-collection-methods

  $$i({
    target: 'Set',
    proto: true,
    real: true,
    forced: IS_PURE$8
  }, {
    some: function some(callbackfn
    /* , thisArg */
    ) {
      var set = anObject$3(this);
      var iterator = getSetIterator(set);
      var boundFunction = bind$1(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
      return iterate$2(iterator, function (value, stop) {
        if (boundFunction(value, value, set)) return stop();
      }, {
        IS_ITERATOR: true,
        INTERRUPTED: true
      }).stopped;
    }
  });

  var $$h = _export;
  var IS_PURE$7 = isPure;
  var getBuiltIn$2 = getBuiltIn$u;
  var anObject$2 = anObject$1z;
  var aFunction$1 = aFunction$S;
  var speciesConstructor$1 = speciesConstructor$f;
  var iterate$1 = iterate$I; // `Set.prototype.symmetricDifference` method
  // https://github.com/tc39/proposal-set-methods

  $$h({
    target: 'Set',
    proto: true,
    real: true,
    forced: IS_PURE$7
  }, {
    symmetricDifference: function symmetricDifference(iterable) {
      var set = anObject$2(this);
      var newSet = new (speciesConstructor$1(set, getBuiltIn$2('Set')))(set);
      var remover = aFunction$1(newSet['delete']);
      var adder = aFunction$1(newSet.add);
      iterate$1(iterable, function (value) {
        remover.call(newSet, value) || adder.call(newSet, value);
      });
      return newSet;
    }
  });

  var $$g = _export;
  var IS_PURE$6 = isPure;
  var getBuiltIn$1 = getBuiltIn$u;
  var anObject$1 = anObject$1z;
  var aFunction = aFunction$S;
  var speciesConstructor = speciesConstructor$f;
  var iterate = iterate$I; // `Set.prototype.union` method
  // https://github.com/tc39/proposal-set-methods

  $$g({
    target: 'Set',
    proto: true,
    real: true,
    forced: IS_PURE$6
  }, {
    union: function union(iterable) {
      var set = anObject$1(this);
      var newSet = new (speciesConstructor(set, getBuiltIn$1('Set')))(set);
      iterate(iterable, aFunction(newSet.add), {
        that: newSet
      });
      return newSet;
    }
  });

  var $$f = _export;
  var charAt$2 = stringMultibyte.charAt;
  var fails$1 = fails$K;
  var FORCED$1 = fails$1(function () {
    return '𠮷'.at(0) !== '𠮷';
  }); // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at

  $$f({
    target: 'String',
    proto: true,
    forced: FORCED$1
  }, {
    at: function at(pos) {
      return charAt$2(this, pos);
    }
  });

  var $$e = _export;
  var createIteratorConstructor$1 = createIteratorConstructor$7;
  var requireObjectCoercible = requireObjectCoercible$g;
  var toString$1 = toString$n;
  var InternalStateModule$3 = internalState;
  var StringMultibyteModule = stringMultibyte;
  var codeAt$1 = StringMultibyteModule.codeAt;
  var charAt$1 = StringMultibyteModule.charAt;
  var STRING_ITERATOR$1 = 'String Iterator';
  var setInternalState$3 = InternalStateModule$3.set;
  var getInternalState$1 = InternalStateModule$3.getterFor(STRING_ITERATOR$1); // TODO: unify with String#@@iterator

  var $StringIterator = createIteratorConstructor$1(function StringIterator(string) {
    setInternalState$3(this, {
      type: STRING_ITERATOR$1,
      string: string,
      index: 0
    });
  }, 'String', function next() {
    var state = getInternalState$1(this);
    var string = state.string;
    var index = state.index;
    var point;
    if (index >= string.length) return {
      value: undefined,
      done: true
    };
    point = charAt$1(string, index);
    state.index += point.length;
    return {
      value: {
        codePoint: codeAt$1(point, 0),
        position: index
      },
      done: false
    };
  }); // `String.prototype.codePoints` method
  // https://github.com/tc39/proposal-string-prototype-codepoints

  $$e({
    target: 'String',
    proto: true
  }, {
    codePoints: function codePoints() {
      return new $StringIterator(toString$1(requireObjectCoercible(this)));
    }
  });

  var defineWellKnownSymbol$6 = defineWellKnownSymbol$j; // `Symbol.asyncDispose` well-known symbol
  // https://github.com/tc39/proposal-using-statement

  defineWellKnownSymbol$6('asyncDispose');

  var defineWellKnownSymbol$5 = defineWellKnownSymbol$j; // `Symbol.dispose` well-known symbol
  // https://github.com/tc39/proposal-using-statement

  defineWellKnownSymbol$5('dispose');

  var defineWellKnownSymbol$4 = defineWellKnownSymbol$j; // `Symbol.matcher` well-known symbol
  // https://github.com/tc39/proposal-pattern-matching

  defineWellKnownSymbol$4('matcher');

  var defineWellKnownSymbol$3 = defineWellKnownSymbol$j; // `Symbol.metadata` well-known symbol
  // https://github.com/tc39/proposal-decorators

  defineWellKnownSymbol$3('metadata');

  var defineWellKnownSymbol$2 = defineWellKnownSymbol$j; // `Symbol.observable` well-known symbol
  // https://github.com/tc39/proposal-observable

  defineWellKnownSymbol$2('observable');

  var defineWellKnownSymbol$1 = defineWellKnownSymbol$j; // `Symbol.patternMatch` well-known symbol
  // https://github.com/tc39/proposal-pattern-matching

  defineWellKnownSymbol$1('patternMatch');

  var defineWellKnownSymbol = defineWellKnownSymbol$j;
  defineWellKnownSymbol('replaceAll');

  var ArrayBufferViewCore$6 = arrayBufferViewCore;
  var toLength = toLength$z;
  var toInteger = toInteger$f;
  var aTypedArray$6 = ArrayBufferViewCore$6.aTypedArray;
  var exportTypedArrayMethod$6 = ArrayBufferViewCore$6.exportTypedArrayMethod; // `%TypedArray%.prototype.at` method
  // https://github.com/tc39/proposal-relative-indexing-method

  exportTypedArrayMethod$6('at', function at(index) {
    var O = aTypedArray$6(this);
    var len = toLength(O.length);
    var relativeIndex = toInteger(index);
    var k = relativeIndex >= 0 ? relativeIndex : len + relativeIndex;
    return k < 0 || k >= len ? undefined : O[k];
  });

  var ArrayBufferViewCore$5 = arrayBufferViewCore;
  var $filterReject$1 = arrayIteration.filterReject;
  var fromSpeciesAndList$2 = typedArrayFromSpeciesAndList;
  var aTypedArray$5 = ArrayBufferViewCore$5.aTypedArray;
  var exportTypedArrayMethod$5 = ArrayBufferViewCore$5.exportTypedArrayMethod; // `%TypedArray%.prototype.filterOut` method
  // https://github.com/tc39/proposal-array-filtering

  exportTypedArrayMethod$5('filterOut', function filterOut(callbackfn
  /* , thisArg */
  ) {
    var list = $filterReject$1(aTypedArray$5(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    return fromSpeciesAndList$2(this, list);
  });

  var ArrayBufferViewCore$4 = arrayBufferViewCore;
  var $filterReject = arrayIteration.filterReject;
  var fromSpeciesAndList$1 = typedArrayFromSpeciesAndList;
  var aTypedArray$4 = ArrayBufferViewCore$4.aTypedArray;
  var exportTypedArrayMethod$4 = ArrayBufferViewCore$4.exportTypedArrayMethod; // `%TypedArray%.prototype.filterReject` method
  // https://github.com/tc39/proposal-array-filtering

  exportTypedArrayMethod$4('filterReject', function filterReject(callbackfn
  /* , thisArg */
  ) {
    var list = $filterReject(aTypedArray$4(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    return fromSpeciesAndList$1(this, list);
  });

  var ArrayBufferViewCore$3 = arrayBufferViewCore;
  var $findLast = arrayIterationFromLast.findLast;
  var aTypedArray$3 = ArrayBufferViewCore$3.aTypedArray;
  var exportTypedArrayMethod$3 = ArrayBufferViewCore$3.exportTypedArrayMethod; // `%TypedArray%.prototype.findLast` method
  // https://github.com/tc39/proposal-array-find-from-last

  exportTypedArrayMethod$3('findLast', function findLast(predicate
  /* , thisArg */
  ) {
    return $findLast(aTypedArray$3(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
  });

  var ArrayBufferViewCore$2 = arrayBufferViewCore;
  var $findLastIndex = arrayIterationFromLast.findLastIndex;
  var aTypedArray$2 = ArrayBufferViewCore$2.aTypedArray;
  var exportTypedArrayMethod$2 = ArrayBufferViewCore$2.exportTypedArrayMethod; // `%TypedArray%.prototype.findLastIndex` method
  // https://github.com/tc39/proposal-array-find-from-last

  exportTypedArrayMethod$2('findLastIndex', function findLastIndex(predicate
  /* , thisArg */
  ) {
    return $findLastIndex(aTypedArray$2(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
  });

  var ArrayBufferViewCore$1 = arrayBufferViewCore;
  var $groupBy = arrayGroupBy;
  var typedArraySpeciesConstructor = typedArraySpeciesConstructor$4;
  var aTypedArray$1 = ArrayBufferViewCore$1.aTypedArray;
  var exportTypedArrayMethod$1 = ArrayBufferViewCore$1.exportTypedArrayMethod; // `%TypedArray%.prototype.groupBy` method
  // https://github.com/tc39/proposal-array-grouping

  exportTypedArrayMethod$1('groupBy', function groupBy(callbackfn
  /* , thisArg */
  ) {
    var thisArg = arguments.length > 1 ? arguments[1] : undefined;
    return $groupBy(aTypedArray$1(this), callbackfn, thisArg, typedArraySpeciesConstructor);
  });

  var ArrayBufferViewCore = arrayBufferViewCore;
  var arrayUniqueBy = arrayUniqueBy$1;
  var fromSpeciesAndList = typedArrayFromSpeciesAndList;
  var aTypedArray = ArrayBufferViewCore.aTypedArray;
  var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod; // `%TypedArray%.prototype.uniqueBy` method
  // https://github.com/tc39/proposal-array-unique

  exportTypedArrayMethod('uniqueBy', function uniqueBy(resolver) {
    return fromSpeciesAndList(this, arrayUniqueBy.call(aTypedArray(this), resolver));
  });

  var $$d = _export;
  var IS_PURE$5 = isPure;
  var collectionDeleteAll$1 = collectionDeleteAll$4; // `WeakMap.prototype.deleteAll` method
  // https://github.com/tc39/proposal-collection-methods

  $$d({
    target: 'WeakMap',
    proto: true,
    real: true,
    forced: IS_PURE$5
  }, {
    deleteAll: function deleteAll() {
      return collectionDeleteAll$1.apply(this, arguments);
    }
  });

  var $$c = _export;
  var from$1 = collectionFrom; // `WeakMap.from` method
  // https://tc39.github.io/proposal-setmap-offrom/#sec-weakmap.from

  $$c({
    target: 'WeakMap',
    stat: true
  }, {
    from: from$1
  });

  var $$b = _export;
  var of$1 = collectionOf; // `WeakMap.of` method
  // https://tc39.github.io/proposal-setmap-offrom/#sec-weakmap.of

  $$b({
    target: 'WeakMap',
    stat: true
  }, {
    of: of$1
  });

  var $$a = _export;
  var IS_PURE$4 = isPure;
  var $emplace = mapEmplace; // `WeakMap.prototype.emplace` method
  // https://github.com/tc39/proposal-upsert

  $$a({
    target: 'WeakMap',
    proto: true,
    real: true,
    forced: IS_PURE$4
  }, {
    emplace: $emplace
  });

  var $$9 = _export;
  var IS_PURE$3 = isPure;
  var $upsert = mapUpsert; // `WeakMap.prototype.upsert` method (replaced by `WeakMap.prototype.emplace`)
  // https://github.com/tc39/proposal-upsert

  $$9({
    target: 'WeakMap',
    proto: true,
    real: true,
    forced: IS_PURE$3
  }, {
    upsert: $upsert
  });

  var $$8 = _export;
  var IS_PURE$2 = isPure;
  var collectionAddAll = collectionAddAll$2; // `WeakSet.prototype.addAll` method
  // https://github.com/tc39/proposal-collection-methods

  $$8({
    target: 'WeakSet',
    proto: true,
    real: true,
    forced: IS_PURE$2
  }, {
    addAll: function addAll() {
      return collectionAddAll.apply(this, arguments);
    }
  });

  var $$7 = _export;
  var IS_PURE$1 = isPure;
  var collectionDeleteAll = collectionDeleteAll$4; // `WeakSet.prototype.deleteAll` method
  // https://github.com/tc39/proposal-collection-methods

  $$7({
    target: 'WeakSet',
    proto: true,
    real: true,
    forced: IS_PURE$1
  }, {
    deleteAll: function deleteAll() {
      return collectionDeleteAll.apply(this, arguments);
    }
  });

  var $$6 = _export;
  var from = collectionFrom; // `WeakSet.from` method
  // https://tc39.github.io/proposal-setmap-offrom/#sec-weakset.from

  $$6({
    target: 'WeakSet',
    stat: true
  }, {
    from: from
  });

  var $$5 = _export;
  var of = collectionOf; // `WeakSet.of` method
  // https://tc39.github.io/proposal-setmap-offrom/#sec-weakset.of

  $$5({
    target: 'WeakSet',
    stat: true
  }, {
    of: of
  });

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

  var $forEach = arrayIteration.forEach;
  var arrayMethodIsStrict = arrayMethodIsStrict$6;
  var STRICT_METHOD = arrayMethodIsStrict('forEach'); // `Array.prototype.forEach` method implementation
  // https://tc39.es/ecma262/#sec-array.prototype.foreach

  var arrayForEach = !STRICT_METHOD ? function forEach(callbackfn
  /* , thisArg */
  ) {
    return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined); // eslint-disable-next-line es/no-array-prototype-foreach -- safe
  } : [].forEach;

  var global$5 = global$K;
  var DOMIterables$1 = domIterables;
  var forEach = arrayForEach;
  var createNonEnumerableProperty$1 = createNonEnumerableProperty$m;

  for (var COLLECTION_NAME$1 in DOMIterables$1) {
    var Collection$1 = global$5[COLLECTION_NAME$1];
    var CollectionPrototype$1 = Collection$1 && Collection$1.prototype; // some Chrome versions have non-configurable methods on DOMTokenList

    if (CollectionPrototype$1 && CollectionPrototype$1.forEach !== forEach) try {
      createNonEnumerableProperty$1(CollectionPrototype$1, 'forEach', forEach);
    } catch (error) {
      CollectionPrototype$1.forEach = forEach;
    }
  }

  var global$4 = global$K;
  var DOMIterables = domIterables;
  var ArrayIteratorMethods = es_array_iterator;
  var createNonEnumerableProperty = createNonEnumerableProperty$m;
  var wellKnownSymbol$2 = wellKnownSymbol$E;
  var ITERATOR$2 = wellKnownSymbol$2('iterator');
  var TO_STRING_TAG = wellKnownSymbol$2('toStringTag');
  var ArrayValues = ArrayIteratorMethods.values;

  for (var COLLECTION_NAME in DOMIterables) {
    var Collection = global$4[COLLECTION_NAME];
    var CollectionPrototype = Collection && Collection.prototype;

    if (CollectionPrototype) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype[ITERATOR$2] !== ArrayValues) try {
        createNonEnumerableProperty(CollectionPrototype, ITERATOR$2, ArrayValues);
      } catch (error) {
        CollectionPrototype[ITERATOR$2] = ArrayValues;
      }

      if (!CollectionPrototype[TO_STRING_TAG]) {
        createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
      }

      if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {
        // some Chrome versions have non-configurable methods on DOMTokenList
        if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
          createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
        } catch (error) {
          CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
        }
      }
    }
  }

  var $$4 = _export;
  var global$3 = global$K;
  var task = task$2;
  var FORCED = !global$3.setImmediate || !global$3.clearImmediate; // http://w3c.github.io/setImmediate/

  $$4({
    global: true,
    bind: true,
    enumerable: true,
    forced: FORCED
  }, {
    // `setImmediate` method
    // http://w3c.github.io/setImmediate/#si-setImmediate
    setImmediate: task.set,
    // `clearImmediate` method
    // http://w3c.github.io/setImmediate/#si-clearImmediate
    clearImmediate: task.clear
  });

  var $$3 = _export;
  var global$2 = global$K;
  var microtask = microtask$2;
  var IS_NODE = engineIsNode;
  var process = global$2.process; // `queueMicrotask` method
  // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-queuemicrotask

  $$3({
    global: true,
    enumerable: true,
    noTargetGet: true
  }, {
    queueMicrotask: function queueMicrotask(fn) {
      var domain = IS_NODE && process.domain;
      microtask(domain ? domain.bind(fn) : fn);
    }
  });

  var charAt = stringMultibyte.charAt;
  var toString = toString$n;
  var InternalStateModule$2 = internalState;
  var defineIterator = defineIterator$3;
  var STRING_ITERATOR = 'String Iterator';
  var setInternalState$2 = InternalStateModule$2.set;
  var getInternalState = InternalStateModule$2.getterFor(STRING_ITERATOR); // `String.prototype[@@iterator]` method
  // https://tc39.es/ecma262/#sec-string.prototype-@@iterator

  defineIterator(String, 'String', function (iterated) {
    setInternalState$2(this, {
      type: STRING_ITERATOR,
      string: toString(iterated),
      index: 0
    }); // `%StringIteratorPrototype%.next` method
    // https://tc39.es/ecma262/#sec-%stringiteratorprototype%.next
  }, function next() {
    var state = getInternalState(this);
    var string = state.string;
    var index = state.index;
    var point;
    if (index >= string.length) return {
      value: undefined,
      done: true
    };
    point = charAt(string, index);
    state.index += point.length;
    return {
      value: point,
      done: false
    };
  });

  var fails = fails$K;
  var wellKnownSymbol$1 = wellKnownSymbol$E;
  var IS_PURE = isPure;
  var ITERATOR$1 = wellKnownSymbol$1('iterator');
  var nativeUrl = !fails(function () {
    var url = new URL('b?a=1&b=2&c=3', 'http://a');
    var searchParams = url.searchParams;
    var result = '';
    url.pathname = 'c%20d';
    searchParams.forEach(function (value, key) {
      searchParams['delete']('b');
      result += key + value;
    });
    return IS_PURE && !url.toJSON || !searchParams.sort || url.href !== 'http://a/c%20d?a=1&c=3' || searchParams.get('c') !== '3' || String(new URLSearchParams('?a=1')) !== 'a=1' || !searchParams[ITERATOR$1] // throws in Edge
    || new URL('https://a@b').username !== 'a' || new URLSearchParams(new URLSearchParams('a=b')).get('a') !== 'b' // not punycoded in Edge
    || new URL('http://тест').host !== 'xn--e1aybc' // not escaped in Chrome 62-
    || new URL('http://a#б').hash !== '#%D0%B1' // fails in Chrome 66-
    || result !== 'a1c3' // throws in Safari
    || new URL('http://x', undefined).host !== 'x';
  });

  var maxInt = 2147483647; // aka. 0x7FFFFFFF or 2^31-1

  var base = 36;
  var tMin = 1;
  var tMax = 26;
  var skew = 38;
  var damp = 700;
  var initialBias = 72;
  var initialN = 128; // 0x80

  var delimiter = '-'; // '\x2D'

  var regexNonASCII = /[^\0-\u007E]/; // non-ASCII chars

  var regexSeparators = /[.\u3002\uFF0E\uFF61]/g; // RFC 3490 separators

  var OVERFLOW_ERROR = 'Overflow: input needs wider integers to process';
  var baseMinusTMin = base - tMin;
  var floor$1 = Math.floor;
  var stringFromCharCode = String.fromCharCode;
  /**
   * Creates an array containing the numeric code points of each Unicode
   * character in the string. While JavaScript uses UCS-2 internally,
   * this function will convert a pair of surrogate halves (each of which
   * UCS-2 exposes as separate characters) into a single code point,
   * matching UTF-16.
   */

  var ucs2decode = function ucs2decode(string) {
    var output = [];
    var counter = 0;
    var length = string.length;

    while (counter < length) {
      var value = string.charCodeAt(counter++);

      if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
        // It's a high surrogate, and there is a next character.
        var extra = string.charCodeAt(counter++);

        if ((extra & 0xFC00) == 0xDC00) {
          // Low surrogate.
          output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
        } else {
          // It's an unmatched surrogate; only append this code unit, in case the
          // next code unit is the high surrogate of a surrogate pair.
          output.push(value);
          counter--;
        }
      } else {
        output.push(value);
      }
    }

    return output;
  };
  /**
   * Converts a digit/integer into a basic code point.
   */


  var digitToBasic = function digitToBasic(digit) {
    //  0..25 map to ASCII a..z or A..Z
    // 26..35 map to ASCII 0..9
    return digit + 22 + 75 * (digit < 26);
  };
  /**
   * Bias adaptation function as per section 3.4 of RFC 3492.
   * https://tools.ietf.org/html/rfc3492#section-3.4
   */


  var adapt = function adapt(delta, numPoints, firstTime) {
    var k = 0;
    delta = firstTime ? floor$1(delta / damp) : delta >> 1;
    delta += floor$1(delta / numPoints);

    for (; delta > baseMinusTMin * tMax >> 1; k += base) {
      delta = floor$1(delta / baseMinusTMin);
    }

    return floor$1(k + (baseMinusTMin + 1) * delta / (delta + skew));
  };
  /**
   * Converts a string of Unicode symbols (e.g. a domain name label) to a
   * Punycode string of ASCII-only symbols.
   */
  // eslint-disable-next-line max-statements -- TODO


  var encode = function encode(input) {
    var output = []; // Convert the input in UCS-2 to an array of Unicode code points.

    input = ucs2decode(input); // Cache the length.

    var inputLength = input.length; // Initialize the state.

    var n = initialN;
    var delta = 0;
    var bias = initialBias;
    var i, currentValue; // Handle the basic code points.

    for (i = 0; i < input.length; i++) {
      currentValue = input[i];

      if (currentValue < 0x80) {
        output.push(stringFromCharCode(currentValue));
      }
    }

    var basicLength = output.length; // number of basic code points.

    var handledCPCount = basicLength; // number of code points that have been handled;
    // Finish the basic string with a delimiter unless it's empty.

    if (basicLength) {
      output.push(delimiter);
    } // Main encoding loop:


    while (handledCPCount < inputLength) {
      // All non-basic code points < n have been handled already. Find the next larger one:
      var m = maxInt;

      for (i = 0; i < input.length; i++) {
        currentValue = input[i];

        if (currentValue >= n && currentValue < m) {
          m = currentValue;
        }
      } // Increase `delta` enough to advance the decoder's <n,i> state to <m,0>, but guard against overflow.


      var handledCPCountPlusOne = handledCPCount + 1;

      if (m - n > floor$1((maxInt - delta) / handledCPCountPlusOne)) {
        throw RangeError(OVERFLOW_ERROR);
      }

      delta += (m - n) * handledCPCountPlusOne;
      n = m;

      for (i = 0; i < input.length; i++) {
        currentValue = input[i];

        if (currentValue < n && ++delta > maxInt) {
          throw RangeError(OVERFLOW_ERROR);
        }

        if (currentValue == n) {
          // Represent delta as a generalized variable-length integer.
          var q = delta;

          for (var k = base;; k += base) {
            var t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;
            if (q < t) break;
            var qMinusT = q - t;
            var baseMinusT = base - t;
            output.push(stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT)));
            q = floor$1(qMinusT / baseMinusT);
          }

          output.push(stringFromCharCode(digitToBasic(q)));
          bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
          delta = 0;
          ++handledCPCount;
        }
      }

      ++delta;
      ++n;
    }

    return output.join('');
  };

  var stringPunycodeToAscii = function stringPunycodeToAscii(input) {
    var encoded = [];
    var labels = input.toLowerCase().replace(regexSeparators, '\u002E').split('.');
    var i, label;

    for (i = 0; i < labels.length; i++) {
      label = labels[i];
      encoded.push(regexNonASCII.test(label) ? 'xn--' + encode(label) : label);
    }

    return encoded.join('.');
  };

  var $$2 = _export;
  var getBuiltIn = getBuiltIn$u;
  var USE_NATIVE_URL$1 = nativeUrl;
  var redefine$1 = redefine$e.exports;
  var redefineAll = redefineAll$9;
  var setToStringTag$1 = setToStringTag$b;
  var createIteratorConstructor = createIteratorConstructor$7;
  var InternalStateModule$1 = internalState;
  var anInstance$1 = anInstance$b;
  var hasOwn = has$n;
  var bind = functionBindContext;
  var classof = classof$a;
  var anObject = anObject$1z;
  var isObject = isObject$w;
  var $toString$1 = toString$n;
  var create = objectCreate$1;
  var createPropertyDescriptor = createPropertyDescriptor$9;
  var getIterator = getIterator$3;
  var getIteratorMethod = getIteratorMethod$8;
  var wellKnownSymbol = wellKnownSymbol$E;
  var nativeFetch = getBuiltIn('fetch');
  var NativeRequest = getBuiltIn('Request');
  var RequestPrototype = NativeRequest && NativeRequest.prototype;
  var Headers = getBuiltIn('Headers');
  var ITERATOR = wellKnownSymbol('iterator');
  var URL_SEARCH_PARAMS = 'URLSearchParams';
  var URL_SEARCH_PARAMS_ITERATOR = URL_SEARCH_PARAMS + 'Iterator';
  var setInternalState$1 = InternalStateModule$1.set;
  var getInternalParamsState = InternalStateModule$1.getterFor(URL_SEARCH_PARAMS);
  var getInternalIteratorState = InternalStateModule$1.getterFor(URL_SEARCH_PARAMS_ITERATOR);
  var plus = /\+/g;
  var sequences = Array(4);

  var percentSequence = function percentSequence(bytes) {
    return sequences[bytes - 1] || (sequences[bytes - 1] = RegExp('((?:%[\\da-f]{2}){' + bytes + '})', 'gi'));
  };

  var percentDecode = function percentDecode(sequence) {
    try {
      return decodeURIComponent(sequence);
    } catch (error) {
      return sequence;
    }
  };

  var deserialize = function deserialize(it) {
    var result = it.replace(plus, ' ');
    var bytes = 4;

    try {
      return decodeURIComponent(result);
    } catch (error) {
      while (bytes) {
        result = result.replace(percentSequence(bytes--), percentDecode);
      }

      return result;
    }
  };

  var find = /[!'()~]|%20/g;
  var replace = {
    '!': '%21',
    "'": '%27',
    '(': '%28',
    ')': '%29',
    '~': '%7E',
    '%20': '+'
  };

  var replacer = function replacer(match) {
    return replace[match];
  };

  var serialize = function serialize(it) {
    return encodeURIComponent(it).replace(find, replacer);
  };

  var parseSearchParams = function parseSearchParams(result, query) {
    if (query) {
      var attributes = query.split('&');
      var index = 0;
      var attribute, entry;

      while (index < attributes.length) {
        attribute = attributes[index++];

        if (attribute.length) {
          entry = attribute.split('=');
          result.push({
            key: deserialize(entry.shift()),
            value: deserialize(entry.join('='))
          });
        }
      }
    }
  };

  var updateSearchParams = function updateSearchParams(query) {
    this.entries.length = 0;
    parseSearchParams(this.entries, query);
  };

  var validateArgumentsLength = function validateArgumentsLength(passed, required) {
    if (passed < required) throw TypeError('Not enough arguments');
  };

  var URLSearchParamsIterator = createIteratorConstructor(function Iterator(params, kind) {
    setInternalState$1(this, {
      type: URL_SEARCH_PARAMS_ITERATOR,
      iterator: getIterator(getInternalParamsState(params).entries),
      kind: kind
    });
  }, 'Iterator', function next() {
    var state = getInternalIteratorState(this);
    var kind = state.kind;
    var step = state.iterator.next();
    var entry = step.value;

    if (!step.done) {
      step.value = kind === 'keys' ? entry.key : kind === 'values' ? entry.value : [entry.key, entry.value];
    }

    return step;
  }); // `URLSearchParams` constructor
  // https://url.spec.whatwg.org/#interface-urlsearchparams

  var URLSearchParamsConstructor = function URLSearchParams() {
    anInstance$1(this, URLSearchParamsConstructor, URL_SEARCH_PARAMS);
    var init = arguments.length > 0 ? arguments[0] : undefined;
    var that = this;
    var entries = [];
    var iteratorMethod, iterator, next, step, entryIterator, entryNext, first, second, key;
    setInternalState$1(that, {
      type: URL_SEARCH_PARAMS,
      entries: entries,
      updateURL: function updateURL() {
        /* empty */
      },
      updateSearchParams: updateSearchParams
    });

    if (init !== undefined) {
      if (isObject(init)) {
        iteratorMethod = getIteratorMethod(init);

        if (typeof iteratorMethod === 'function') {
          iterator = iteratorMethod.call(init);
          next = iterator.next;

          while (!(step = next.call(iterator)).done) {
            entryIterator = getIterator(anObject(step.value));
            entryNext = entryIterator.next;
            if ((first = entryNext.call(entryIterator)).done || (second = entryNext.call(entryIterator)).done || !entryNext.call(entryIterator).done) throw TypeError('Expected sequence with length 2');
            entries.push({
              key: $toString$1(first.value),
              value: $toString$1(second.value)
            });
          }
        } else for (key in init) {
          if (hasOwn(init, key)) entries.push({
            key: key,
            value: $toString$1(init[key])
          });
        }
      } else {
        parseSearchParams(entries, typeof init === 'string' ? init.charAt(0) === '?' ? init.slice(1) : init : $toString$1(init));
      }
    }
  };

  var URLSearchParamsPrototype = URLSearchParamsConstructor.prototype;
  redefineAll(URLSearchParamsPrototype, {
    // `URLSearchParams.prototype.append` method
    // https://url.spec.whatwg.org/#dom-urlsearchparams-append
    append: function append(name, value) {
      validateArgumentsLength(arguments.length, 2);
      var state = getInternalParamsState(this);
      state.entries.push({
        key: $toString$1(name),
        value: $toString$1(value)
      });
      state.updateURL();
    },
    // `URLSearchParams.prototype.delete` method
    // https://url.spec.whatwg.org/#dom-urlsearchparams-delete
    'delete': function _delete(name) {
      validateArgumentsLength(arguments.length, 1);
      var state = getInternalParamsState(this);
      var entries = state.entries;
      var key = $toString$1(name);
      var index = 0;

      while (index < entries.length) {
        if (entries[index].key === key) entries.splice(index, 1);else index++;
      }

      state.updateURL();
    },
    // `URLSearchParams.prototype.get` method
    // https://url.spec.whatwg.org/#dom-urlsearchparams-get
    get: function get(name) {
      validateArgumentsLength(arguments.length, 1);
      var entries = getInternalParamsState(this).entries;
      var key = $toString$1(name);
      var index = 0;

      for (; index < entries.length; index++) {
        if (entries[index].key === key) return entries[index].value;
      }

      return null;
    },
    // `URLSearchParams.prototype.getAll` method
    // https://url.spec.whatwg.org/#dom-urlsearchparams-getall
    getAll: function getAll(name) {
      validateArgumentsLength(arguments.length, 1);
      var entries = getInternalParamsState(this).entries;
      var key = $toString$1(name);
      var result = [];
      var index = 0;

      for (; index < entries.length; index++) {
        if (entries[index].key === key) result.push(entries[index].value);
      }

      return result;
    },
    // `URLSearchParams.prototype.has` method
    // https://url.spec.whatwg.org/#dom-urlsearchparams-has
    has: function has(name) {
      validateArgumentsLength(arguments.length, 1);
      var entries = getInternalParamsState(this).entries;
      var key = $toString$1(name);
      var index = 0;

      while (index < entries.length) {
        if (entries[index++].key === key) return true;
      }

      return false;
    },
    // `URLSearchParams.prototype.set` method
    // https://url.spec.whatwg.org/#dom-urlsearchparams-set
    set: function set(name, value) {
      validateArgumentsLength(arguments.length, 1);
      var state = getInternalParamsState(this);
      var entries = state.entries;
      var found = false;
      var key = $toString$1(name);
      var val = $toString$1(value);
      var index = 0;
      var entry;

      for (; index < entries.length; index++) {
        entry = entries[index];

        if (entry.key === key) {
          if (found) entries.splice(index--, 1);else {
            found = true;
            entry.value = val;
          }
        }
      }

      if (!found) entries.push({
        key: key,
        value: val
      });
      state.updateURL();
    },
    // `URLSearchParams.prototype.sort` method
    // https://url.spec.whatwg.org/#dom-urlsearchparams-sort
    sort: function sort() {
      var state = getInternalParamsState(this);
      var entries = state.entries; // Array#sort is not stable in some engines

      var slice = entries.slice();
      var entry, entriesIndex, sliceIndex;
      entries.length = 0;

      for (sliceIndex = 0; sliceIndex < slice.length; sliceIndex++) {
        entry = slice[sliceIndex];

        for (entriesIndex = 0; entriesIndex < sliceIndex; entriesIndex++) {
          if (entries[entriesIndex].key > entry.key) {
            entries.splice(entriesIndex, 0, entry);
            break;
          }
        }

        if (entriesIndex === sliceIndex) entries.push(entry);
      }

      state.updateURL();
    },
    // `URLSearchParams.prototype.forEach` method
    forEach: function forEach(callback
    /* , thisArg */
    ) {
      var entries = getInternalParamsState(this).entries;
      var boundFunction = bind(callback, arguments.length > 1 ? arguments[1] : undefined, 3);
      var index = 0;
      var entry;

      while (index < entries.length) {
        entry = entries[index++];
        boundFunction(entry.value, entry.key, this);
      }
    },
    // `URLSearchParams.prototype.keys` method
    keys: function keys() {
      return new URLSearchParamsIterator(this, 'keys');
    },
    // `URLSearchParams.prototype.values` method
    values: function values() {
      return new URLSearchParamsIterator(this, 'values');
    },
    // `URLSearchParams.prototype.entries` method
    entries: function entries() {
      return new URLSearchParamsIterator(this, 'entries');
    }
  }, {
    enumerable: true
  }); // `URLSearchParams.prototype[@@iterator]` method

  redefine$1(URLSearchParamsPrototype, ITERATOR, URLSearchParamsPrototype.entries); // `URLSearchParams.prototype.toString` method
  // https://url.spec.whatwg.org/#urlsearchparams-stringification-behavior

  redefine$1(URLSearchParamsPrototype, 'toString', function toString() {
    var entries = getInternalParamsState(this).entries;
    var result = [];
    var index = 0;
    var entry;

    while (index < entries.length) {
      entry = entries[index++];
      result.push(serialize(entry.key) + '=' + serialize(entry.value));
    }

    return result.join('&');
  }, {
    enumerable: true
  });
  setToStringTag$1(URLSearchParamsConstructor, URL_SEARCH_PARAMS);
  $$2({
    global: true,
    forced: !USE_NATIVE_URL$1
  }, {
    URLSearchParams: URLSearchParamsConstructor
  }); // Wrap `fetch` and `Request` for correct work with polyfilled `URLSearchParams`

  if (!USE_NATIVE_URL$1 && typeof Headers == 'function') {
    var wrapRequestOptions = function wrapRequestOptions(init) {
      if (isObject(init)) {
        var body = init.body;
        var headers;

        if (classof(body) === URL_SEARCH_PARAMS) {
          headers = init.headers ? new Headers(init.headers) : new Headers();

          if (!headers.has('content-type')) {
            headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
          }

          return create(init, {
            body: createPropertyDescriptor(0, String(body)),
            headers: createPropertyDescriptor(0, headers)
          });
        }
      }

      return init;
    };

    if (typeof nativeFetch == 'function') {
      $$2({
        global: true,
        enumerable: true,
        forced: true
      }, {
        fetch: function fetch(input
        /* , init */
        ) {
          return nativeFetch(input, arguments.length > 1 ? wrapRequestOptions(arguments[1]) : {});
        }
      });
    }

    if (typeof NativeRequest == 'function') {
      var RequestConstructor = function Request(input
      /* , init */
      ) {
        anInstance$1(this, RequestConstructor, 'Request');
        return new NativeRequest(input, arguments.length > 1 ? wrapRequestOptions(arguments[1]) : {});
      };

      RequestPrototype.constructor = RequestConstructor;
      RequestConstructor.prototype = RequestPrototype;
      $$2({
        global: true,
        forced: true
      }, {
        Request: RequestConstructor
      });
    }
  }

  var web_urlSearchParams = {
    URLSearchParams: URLSearchParamsConstructor,
    getState: getInternalParamsState
  };

  var $$1 = _export;
  var DESCRIPTORS = descriptors;
  var USE_NATIVE_URL = nativeUrl;
  var global$1 = global$K;
  var defineProperties = objectDefineProperties;
  var redefine = redefine$e.exports;
  var anInstance = anInstance$b;
  var has = has$n;
  var assign = objectAssign;
  var arrayFrom = arrayFrom$1;
  var codeAt = stringMultibyte.codeAt;
  var toASCII = stringPunycodeToAscii;
  var $toString = toString$n;
  var setToStringTag = setToStringTag$b;
  var URLSearchParamsModule = web_urlSearchParams;
  var InternalStateModule = internalState;
  var NativeURL = global$1.URL;
  var URLSearchParams$1 = URLSearchParamsModule.URLSearchParams;
  var getInternalSearchParamsState = URLSearchParamsModule.getState;
  var setInternalState = InternalStateModule.set;
  var getInternalURLState = InternalStateModule.getterFor('URL');
  var floor = Math.floor;
  var pow = Math.pow;
  var INVALID_AUTHORITY = 'Invalid authority';
  var INVALID_SCHEME = 'Invalid scheme';
  var INVALID_HOST = 'Invalid host';
  var INVALID_PORT = 'Invalid port';
  var ALPHA = /[A-Za-z]/; // eslint-disable-next-line regexp/no-obscure-range -- safe

  var ALPHANUMERIC = /[\d+-.A-Za-z]/;
  var DIGIT = /\d/;
  var HEX_START = /^0x/i;
  var OCT = /^[0-7]+$/;
  var DEC = /^\d+$/;
  var HEX = /^[\dA-Fa-f]+$/;
  /* eslint-disable no-control-regex -- safe */

  var FORBIDDEN_HOST_CODE_POINT = /[\0\t\n\r #%/:<>?@[\\\]^|]/;
  var FORBIDDEN_HOST_CODE_POINT_EXCLUDING_PERCENT = /[\0\t\n\r #/:<>?@[\\\]^|]/;
  var LEADING_AND_TRAILING_C0_CONTROL_OR_SPACE = /^[\u0000-\u0020]+|[\u0000-\u0020]+$/g;
  var TAB_AND_NEW_LINE = /[\t\n\r]/g;
  /* eslint-enable no-control-regex -- safe */

  var EOF;

  var parseHost = function parseHost(url, input) {
    var result, codePoints, index;

    if (input.charAt(0) == '[') {
      if (input.charAt(input.length - 1) != ']') return INVALID_HOST;
      result = parseIPv6(input.slice(1, -1));
      if (!result) return INVALID_HOST;
      url.host = result; // opaque host
    } else if (!isSpecial(url)) {
      if (FORBIDDEN_HOST_CODE_POINT_EXCLUDING_PERCENT.test(input)) return INVALID_HOST;
      result = '';
      codePoints = arrayFrom(input);

      for (index = 0; index < codePoints.length; index++) {
        result += percentEncode(codePoints[index], C0ControlPercentEncodeSet);
      }

      url.host = result;
    } else {
      input = toASCII(input);
      if (FORBIDDEN_HOST_CODE_POINT.test(input)) return INVALID_HOST;
      result = parseIPv4(input);
      if (result === null) return INVALID_HOST;
      url.host = result;
    }
  };

  var parseIPv4 = function parseIPv4(input) {
    var parts = input.split('.');
    var partsLength, numbers, index, part, radix, number, ipv4;

    if (parts.length && parts[parts.length - 1] == '') {
      parts.pop();
    }

    partsLength = parts.length;
    if (partsLength > 4) return input;
    numbers = [];

    for (index = 0; index < partsLength; index++) {
      part = parts[index];
      if (part == '') return input;
      radix = 10;

      if (part.length > 1 && part.charAt(0) == '0') {
        radix = HEX_START.test(part) ? 16 : 8;
        part = part.slice(radix == 8 ? 1 : 2);
      }

      if (part === '') {
        number = 0;
      } else {
        if (!(radix == 10 ? DEC : radix == 8 ? OCT : HEX).test(part)) return input;
        number = parseInt(part, radix);
      }

      numbers.push(number);
    }

    for (index = 0; index < partsLength; index++) {
      number = numbers[index];

      if (index == partsLength - 1) {
        if (number >= pow(256, 5 - partsLength)) return null;
      } else if (number > 255) return null;
    }

    ipv4 = numbers.pop();

    for (index = 0; index < numbers.length; index++) {
      ipv4 += numbers[index] * pow(256, 3 - index);
    }

    return ipv4;
  }; // eslint-disable-next-line max-statements -- TODO


  var parseIPv6 = function parseIPv6(input) {
    var address = [0, 0, 0, 0, 0, 0, 0, 0];
    var pieceIndex = 0;
    var compress = null;
    var pointer = 0;
    var value, length, numbersSeen, ipv4Piece, number, swaps, swap;

    var char = function char() {
      return input.charAt(pointer);
    };

    if (char() == ':') {
      if (input.charAt(1) != ':') return;
      pointer += 2;
      pieceIndex++;
      compress = pieceIndex;
    }

    while (char()) {
      if (pieceIndex == 8) return;

      if (char() == ':') {
        if (compress !== null) return;
        pointer++;
        pieceIndex++;
        compress = pieceIndex;
        continue;
      }

      value = length = 0;

      while (length < 4 && HEX.test(char())) {
        value = value * 16 + parseInt(char(), 16);
        pointer++;
        length++;
      }

      if (char() == '.') {
        if (length == 0) return;
        pointer -= length;
        if (pieceIndex > 6) return;
        numbersSeen = 0;

        while (char()) {
          ipv4Piece = null;

          if (numbersSeen > 0) {
            if (char() == '.' && numbersSeen < 4) pointer++;else return;
          }

          if (!DIGIT.test(char())) return;

          while (DIGIT.test(char())) {
            number = parseInt(char(), 10);
            if (ipv4Piece === null) ipv4Piece = number;else if (ipv4Piece == 0) return;else ipv4Piece = ipv4Piece * 10 + number;
            if (ipv4Piece > 255) return;
            pointer++;
          }

          address[pieceIndex] = address[pieceIndex] * 256 + ipv4Piece;
          numbersSeen++;
          if (numbersSeen == 2 || numbersSeen == 4) pieceIndex++;
        }

        if (numbersSeen != 4) return;
        break;
      } else if (char() == ':') {
        pointer++;
        if (!char()) return;
      } else if (char()) return;

      address[pieceIndex++] = value;
    }

    if (compress !== null) {
      swaps = pieceIndex - compress;
      pieceIndex = 7;

      while (pieceIndex != 0 && swaps > 0) {
        swap = address[pieceIndex];
        address[pieceIndex--] = address[compress + swaps - 1];
        address[compress + --swaps] = swap;
      }
    } else if (pieceIndex != 8) return;

    return address;
  };

  var findLongestZeroSequence = function findLongestZeroSequence(ipv6) {
    var maxIndex = null;
    var maxLength = 1;
    var currStart = null;
    var currLength = 0;
    var index = 0;

    for (; index < 8; index++) {
      if (ipv6[index] !== 0) {
        if (currLength > maxLength) {
          maxIndex = currStart;
          maxLength = currLength;
        }

        currStart = null;
        currLength = 0;
      } else {
        if (currStart === null) currStart = index;
        ++currLength;
      }
    }

    if (currLength > maxLength) {
      maxIndex = currStart;
      maxLength = currLength;
    }

    return maxIndex;
  };

  var serializeHost = function serializeHost(host) {
    var result, index, compress, ignore0; // ipv4

    if (typeof host == 'number') {
      result = [];

      for (index = 0; index < 4; index++) {
        result.unshift(host % 256);
        host = floor(host / 256);
      }

      return result.join('.'); // ipv6
    } else if (typeof host == 'object') {
      result = '';
      compress = findLongestZeroSequence(host);

      for (index = 0; index < 8; index++) {
        if (ignore0 && host[index] === 0) continue;
        if (ignore0) ignore0 = false;

        if (compress === index) {
          result += index ? ':' : '::';
          ignore0 = true;
        } else {
          result += host[index].toString(16);
          if (index < 7) result += ':';
        }
      }

      return '[' + result + ']';
    }

    return host;
  };

  var C0ControlPercentEncodeSet = {};
  var fragmentPercentEncodeSet = assign({}, C0ControlPercentEncodeSet, {
    ' ': 1,
    '"': 1,
    '<': 1,
    '>': 1,
    '`': 1
  });
  var pathPercentEncodeSet = assign({}, fragmentPercentEncodeSet, {
    '#': 1,
    '?': 1,
    '{': 1,
    '}': 1
  });
  var userinfoPercentEncodeSet = assign({}, pathPercentEncodeSet, {
    '/': 1,
    ':': 1,
    ';': 1,
    '=': 1,
    '@': 1,
    '[': 1,
    '\\': 1,
    ']': 1,
    '^': 1,
    '|': 1
  });

  var percentEncode = function percentEncode(char, set) {
    var code = codeAt(char, 0);
    return code > 0x20 && code < 0x7F && !has(set, char) ? char : encodeURIComponent(char);
  };

  var specialSchemes = {
    ftp: 21,
    file: null,
    http: 80,
    https: 443,
    ws: 80,
    wss: 443
  };

  var isSpecial = function isSpecial(url) {
    return has(specialSchemes, url.scheme);
  };

  var includesCredentials = function includesCredentials(url) {
    return url.username != '' || url.password != '';
  };

  var cannotHaveUsernamePasswordPort = function cannotHaveUsernamePasswordPort(url) {
    return !url.host || url.cannotBeABaseURL || url.scheme == 'file';
  };

  var isWindowsDriveLetter = function isWindowsDriveLetter(string, normalized) {
    var second;
    return string.length == 2 && ALPHA.test(string.charAt(0)) && ((second = string.charAt(1)) == ':' || !normalized && second == '|');
  };

  var startsWithWindowsDriveLetter = function startsWithWindowsDriveLetter(string) {
    var third;
    return string.length > 1 && isWindowsDriveLetter(string.slice(0, 2)) && (string.length == 2 || (third = string.charAt(2)) === '/' || third === '\\' || third === '?' || third === '#');
  };

  var shortenURLsPath = function shortenURLsPath(url) {
    var path = url.path;
    var pathSize = path.length;

    if (pathSize && (url.scheme != 'file' || pathSize != 1 || !isWindowsDriveLetter(path[0], true))) {
      path.pop();
    }
  };

  var isSingleDot = function isSingleDot(segment) {
    return segment === '.' || segment.toLowerCase() === '%2e';
  };

  var isDoubleDot = function isDoubleDot(segment) {
    segment = segment.toLowerCase();
    return segment === '..' || segment === '%2e.' || segment === '.%2e' || segment === '%2e%2e';
  }; // States:


  var SCHEME_START = {};
  var SCHEME = {};
  var NO_SCHEME = {};
  var SPECIAL_RELATIVE_OR_AUTHORITY = {};
  var PATH_OR_AUTHORITY = {};
  var RELATIVE = {};
  var RELATIVE_SLASH = {};
  var SPECIAL_AUTHORITY_SLASHES = {};
  var SPECIAL_AUTHORITY_IGNORE_SLASHES = {};
  var AUTHORITY = {};
  var HOST = {};
  var HOSTNAME = {};
  var PORT = {};
  var FILE = {};
  var FILE_SLASH = {};
  var FILE_HOST = {};
  var PATH_START = {};
  var PATH = {};
  var CANNOT_BE_A_BASE_URL_PATH = {};
  var QUERY = {};
  var FRAGMENT = {}; // eslint-disable-next-line max-statements -- TODO

  var parseURL = function parseURL(url, input, stateOverride, base) {
    var state = stateOverride || SCHEME_START;
    var pointer = 0;
    var buffer = '';
    var seenAt = false;
    var seenBracket = false;
    var seenPasswordToken = false;
    var codePoints, char, bufferCodePoints, failure;

    if (!stateOverride) {
      url.scheme = '';
      url.username = '';
      url.password = '';
      url.host = null;
      url.port = null;
      url.path = [];
      url.query = null;
      url.fragment = null;
      url.cannotBeABaseURL = false;
      input = input.replace(LEADING_AND_TRAILING_C0_CONTROL_OR_SPACE, '');
    }

    input = input.replace(TAB_AND_NEW_LINE, '');
    codePoints = arrayFrom(input);

    while (pointer <= codePoints.length) {
      char = codePoints[pointer];

      switch (state) {
        case SCHEME_START:
          if (char && ALPHA.test(char)) {
            buffer += char.toLowerCase();
            state = SCHEME;
          } else if (!stateOverride) {
            state = NO_SCHEME;
            continue;
          } else return INVALID_SCHEME;

          break;

        case SCHEME:
          if (char && (ALPHANUMERIC.test(char) || char == '+' || char == '-' || char == '.')) {
            buffer += char.toLowerCase();
          } else if (char == ':') {
            if (stateOverride && (isSpecial(url) != has(specialSchemes, buffer) || buffer == 'file' && (includesCredentials(url) || url.port !== null) || url.scheme == 'file' && !url.host)) return;
            url.scheme = buffer;

            if (stateOverride) {
              if (isSpecial(url) && specialSchemes[url.scheme] == url.port) url.port = null;
              return;
            }

            buffer = '';

            if (url.scheme == 'file') {
              state = FILE;
            } else if (isSpecial(url) && base && base.scheme == url.scheme) {
              state = SPECIAL_RELATIVE_OR_AUTHORITY;
            } else if (isSpecial(url)) {
              state = SPECIAL_AUTHORITY_SLASHES;
            } else if (codePoints[pointer + 1] == '/') {
              state = PATH_OR_AUTHORITY;
              pointer++;
            } else {
              url.cannotBeABaseURL = true;
              url.path.push('');
              state = CANNOT_BE_A_BASE_URL_PATH;
            }
          } else if (!stateOverride) {
            buffer = '';
            state = NO_SCHEME;
            pointer = 0;
            continue;
          } else return INVALID_SCHEME;

          break;

        case NO_SCHEME:
          if (!base || base.cannotBeABaseURL && char != '#') return INVALID_SCHEME;

          if (base.cannotBeABaseURL && char == '#') {
            url.scheme = base.scheme;
            url.path = base.path.slice();
            url.query = base.query;
            url.fragment = '';
            url.cannotBeABaseURL = true;
            state = FRAGMENT;
            break;
          }

          state = base.scheme == 'file' ? FILE : RELATIVE;
          continue;

        case SPECIAL_RELATIVE_OR_AUTHORITY:
          if (char == '/' && codePoints[pointer + 1] == '/') {
            state = SPECIAL_AUTHORITY_IGNORE_SLASHES;
            pointer++;
          } else {
            state = RELATIVE;
            continue;
          }

          break;

        case PATH_OR_AUTHORITY:
          if (char == '/') {
            state = AUTHORITY;
            break;
          } else {
            state = PATH;
            continue;
          }

        case RELATIVE:
          url.scheme = base.scheme;

          if (char == EOF) {
            url.username = base.username;
            url.password = base.password;
            url.host = base.host;
            url.port = base.port;
            url.path = base.path.slice();
            url.query = base.query;
          } else if (char == '/' || char == '\\' && isSpecial(url)) {
            state = RELATIVE_SLASH;
          } else if (char == '?') {
            url.username = base.username;
            url.password = base.password;
            url.host = base.host;
            url.port = base.port;
            url.path = base.path.slice();
            url.query = '';
            state = QUERY;
          } else if (char == '#') {
            url.username = base.username;
            url.password = base.password;
            url.host = base.host;
            url.port = base.port;
            url.path = base.path.slice();
            url.query = base.query;
            url.fragment = '';
            state = FRAGMENT;
          } else {
            url.username = base.username;
            url.password = base.password;
            url.host = base.host;
            url.port = base.port;
            url.path = base.path.slice();
            url.path.pop();
            state = PATH;
            continue;
          }

          break;

        case RELATIVE_SLASH:
          if (isSpecial(url) && (char == '/' || char == '\\')) {
            state = SPECIAL_AUTHORITY_IGNORE_SLASHES;
          } else if (char == '/') {
            state = AUTHORITY;
          } else {
            url.username = base.username;
            url.password = base.password;
            url.host = base.host;
            url.port = base.port;
            state = PATH;
            continue;
          }

          break;

        case SPECIAL_AUTHORITY_SLASHES:
          state = SPECIAL_AUTHORITY_IGNORE_SLASHES;
          if (char != '/' || buffer.charAt(pointer + 1) != '/') continue;
          pointer++;
          break;

        case SPECIAL_AUTHORITY_IGNORE_SLASHES:
          if (char != '/' && char != '\\') {
            state = AUTHORITY;
            continue;
          }

          break;

        case AUTHORITY:
          if (char == '@') {
            if (seenAt) buffer = '%40' + buffer;
            seenAt = true;
            bufferCodePoints = arrayFrom(buffer);

            for (var i = 0; i < bufferCodePoints.length; i++) {
              var codePoint = bufferCodePoints[i];

              if (codePoint == ':' && !seenPasswordToken) {
                seenPasswordToken = true;
                continue;
              }

              var encodedCodePoints = percentEncode(codePoint, userinfoPercentEncodeSet);
              if (seenPasswordToken) url.password += encodedCodePoints;else url.username += encodedCodePoints;
            }

            buffer = '';
          } else if (char == EOF || char == '/' || char == '?' || char == '#' || char == '\\' && isSpecial(url)) {
            if (seenAt && buffer == '') return INVALID_AUTHORITY;
            pointer -= arrayFrom(buffer).length + 1;
            buffer = '';
            state = HOST;
          } else buffer += char;

          break;

        case HOST:
        case HOSTNAME:
          if (stateOverride && url.scheme == 'file') {
            state = FILE_HOST;
            continue;
          } else if (char == ':' && !seenBracket) {
            if (buffer == '') return INVALID_HOST;
            failure = parseHost(url, buffer);
            if (failure) return failure;
            buffer = '';
            state = PORT;
            if (stateOverride == HOSTNAME) return;
          } else if (char == EOF || char == '/' || char == '?' || char == '#' || char == '\\' && isSpecial(url)) {
            if (isSpecial(url) && buffer == '') return INVALID_HOST;
            if (stateOverride && buffer == '' && (includesCredentials(url) || url.port !== null)) return;
            failure = parseHost(url, buffer);
            if (failure) return failure;
            buffer = '';
            state = PATH_START;
            if (stateOverride) return;
            continue;
          } else {
            if (char == '[') seenBracket = true;else if (char == ']') seenBracket = false;
            buffer += char;
          }

          break;

        case PORT:
          if (DIGIT.test(char)) {
            buffer += char;
          } else if (char == EOF || char == '/' || char == '?' || char == '#' || char == '\\' && isSpecial(url) || stateOverride) {
            if (buffer != '') {
              var port = parseInt(buffer, 10);
              if (port > 0xFFFF) return INVALID_PORT;
              url.port = isSpecial(url) && port === specialSchemes[url.scheme] ? null : port;
              buffer = '';
            }

            if (stateOverride) return;
            state = PATH_START;
            continue;
          } else return INVALID_PORT;

          break;

        case FILE:
          url.scheme = 'file';
          if (char == '/' || char == '\\') state = FILE_SLASH;else if (base && base.scheme == 'file') {
            if (char == EOF) {
              url.host = base.host;
              url.path = base.path.slice();
              url.query = base.query;
            } else if (char == '?') {
              url.host = base.host;
              url.path = base.path.slice();
              url.query = '';
              state = QUERY;
            } else if (char == '#') {
              url.host = base.host;
              url.path = base.path.slice();
              url.query = base.query;
              url.fragment = '';
              state = FRAGMENT;
            } else {
              if (!startsWithWindowsDriveLetter(codePoints.slice(pointer).join(''))) {
                url.host = base.host;
                url.path = base.path.slice();
                shortenURLsPath(url);
              }

              state = PATH;
              continue;
            }
          } else {
            state = PATH;
            continue;
          }
          break;

        case FILE_SLASH:
          if (char == '/' || char == '\\') {
            state = FILE_HOST;
            break;
          }

          if (base && base.scheme == 'file' && !startsWithWindowsDriveLetter(codePoints.slice(pointer).join(''))) {
            if (isWindowsDriveLetter(base.path[0], true)) url.path.push(base.path[0]);else url.host = base.host;
          }

          state = PATH;
          continue;

        case FILE_HOST:
          if (char == EOF || char == '/' || char == '\\' || char == '?' || char == '#') {
            if (!stateOverride && isWindowsDriveLetter(buffer)) {
              state = PATH;
            } else if (buffer == '') {
              url.host = '';
              if (stateOverride) return;
              state = PATH_START;
            } else {
              failure = parseHost(url, buffer);
              if (failure) return failure;
              if (url.host == 'localhost') url.host = '';
              if (stateOverride) return;
              buffer = '';
              state = PATH_START;
            }

            continue;
          } else buffer += char;

          break;

        case PATH_START:
          if (isSpecial(url)) {
            state = PATH;
            if (char != '/' && char != '\\') continue;
          } else if (!stateOverride && char == '?') {
            url.query = '';
            state = QUERY;
          } else if (!stateOverride && char == '#') {
            url.fragment = '';
            state = FRAGMENT;
          } else if (char != EOF) {
            state = PATH;
            if (char != '/') continue;
          }

          break;

        case PATH:
          if (char == EOF || char == '/' || char == '\\' && isSpecial(url) || !stateOverride && (char == '?' || char == '#')) {
            if (isDoubleDot(buffer)) {
              shortenURLsPath(url);

              if (char != '/' && !(char == '\\' && isSpecial(url))) {
                url.path.push('');
              }
            } else if (isSingleDot(buffer)) {
              if (char != '/' && !(char == '\\' && isSpecial(url))) {
                url.path.push('');
              }
            } else {
              if (url.scheme == 'file' && !url.path.length && isWindowsDriveLetter(buffer)) {
                if (url.host) url.host = '';
                buffer = buffer.charAt(0) + ':'; // normalize windows drive letter
              }

              url.path.push(buffer);
            }

            buffer = '';

            if (url.scheme == 'file' && (char == EOF || char == '?' || char == '#')) {
              while (url.path.length > 1 && url.path[0] === '') {
                url.path.shift();
              }
            }

            if (char == '?') {
              url.query = '';
              state = QUERY;
            } else if (char == '#') {
              url.fragment = '';
              state = FRAGMENT;
            }
          } else {
            buffer += percentEncode(char, pathPercentEncodeSet);
          }

          break;

        case CANNOT_BE_A_BASE_URL_PATH:
          if (char == '?') {
            url.query = '';
            state = QUERY;
          } else if (char == '#') {
            url.fragment = '';
            state = FRAGMENT;
          } else if (char != EOF) {
            url.path[0] += percentEncode(char, C0ControlPercentEncodeSet);
          }

          break;

        case QUERY:
          if (!stateOverride && char == '#') {
            url.fragment = '';
            state = FRAGMENT;
          } else if (char != EOF) {
            if (char == "'" && isSpecial(url)) url.query += '%27';else if (char == '#') url.query += '%23';else url.query += percentEncode(char, C0ControlPercentEncodeSet);
          }

          break;

        case FRAGMENT:
          if (char != EOF) url.fragment += percentEncode(char, fragmentPercentEncodeSet);
          break;
      }

      pointer++;
    }
  }; // `URL` constructor
  // https://url.spec.whatwg.org/#url-class


  var URLConstructor = function URL(url
  /* , base */
  ) {
    var that = anInstance(this, URLConstructor, 'URL');
    var base = arguments.length > 1 ? arguments[1] : undefined;
    var urlString = $toString(url);
    var state = setInternalState(that, {
      type: 'URL'
    });
    var baseState, failure;

    if (base !== undefined) {
      if (base instanceof URLConstructor) baseState = getInternalURLState(base);else {
        failure = parseURL(baseState = {}, $toString(base));
        if (failure) throw TypeError(failure);
      }
    }

    failure = parseURL(state, urlString, null, baseState);
    if (failure) throw TypeError(failure);
    var searchParams = state.searchParams = new URLSearchParams$1();
    var searchParamsState = getInternalSearchParamsState(searchParams);
    searchParamsState.updateSearchParams(state.query);

    searchParamsState.updateURL = function () {
      state.query = String(searchParams) || null;
    };

    if (!DESCRIPTORS) {
      that.href = serializeURL.call(that);
      that.origin = getOrigin.call(that);
      that.protocol = getProtocol.call(that);
      that.username = getUsername.call(that);
      that.password = getPassword.call(that);
      that.host = getHost.call(that);
      that.hostname = getHostname.call(that);
      that.port = getPort.call(that);
      that.pathname = getPathname.call(that);
      that.search = getSearch.call(that);
      that.searchParams = getSearchParams.call(that);
      that.hash = getHash.call(that);
    }
  };

  var URLPrototype = URLConstructor.prototype;

  var serializeURL = function serializeURL() {
    var url = getInternalURLState(this);
    var scheme = url.scheme;
    var username = url.username;
    var password = url.password;
    var host = url.host;
    var port = url.port;
    var path = url.path;
    var query = url.query;
    var fragment = url.fragment;
    var output = scheme + ':';

    if (host !== null) {
      output += '//';

      if (includesCredentials(url)) {
        output += username + (password ? ':' + password : '') + '@';
      }

      output += serializeHost(host);
      if (port !== null) output += ':' + port;
    } else if (scheme == 'file') output += '//';

    output += url.cannotBeABaseURL ? path[0] : path.length ? '/' + path.join('/') : '';
    if (query !== null) output += '?' + query;
    if (fragment !== null) output += '#' + fragment;
    return output;
  };

  var getOrigin = function getOrigin() {
    var url = getInternalURLState(this);
    var scheme = url.scheme;
    var port = url.port;
    if (scheme == 'blob') try {
      return new URLConstructor(scheme.path[0]).origin;
    } catch (error) {
      return 'null';
    }
    if (scheme == 'file' || !isSpecial(url)) return 'null';
    return scheme + '://' + serializeHost(url.host) + (port !== null ? ':' + port : '');
  };

  var getProtocol = function getProtocol() {
    return getInternalURLState(this).scheme + ':';
  };

  var getUsername = function getUsername() {
    return getInternalURLState(this).username;
  };

  var getPassword = function getPassword() {
    return getInternalURLState(this).password;
  };

  var getHost = function getHost() {
    var url = getInternalURLState(this);
    var host = url.host;
    var port = url.port;
    return host === null ? '' : port === null ? serializeHost(host) : serializeHost(host) + ':' + port;
  };

  var getHostname = function getHostname() {
    var host = getInternalURLState(this).host;
    return host === null ? '' : serializeHost(host);
  };

  var getPort = function getPort() {
    var port = getInternalURLState(this).port;
    return port === null ? '' : String(port);
  };

  var getPathname = function getPathname() {
    var url = getInternalURLState(this);
    var path = url.path;
    return url.cannotBeABaseURL ? path[0] : path.length ? '/' + path.join('/') : '';
  };

  var getSearch = function getSearch() {
    var query = getInternalURLState(this).query;
    return query ? '?' + query : '';
  };

  var getSearchParams = function getSearchParams() {
    return getInternalURLState(this).searchParams;
  };

  var getHash = function getHash() {
    var fragment = getInternalURLState(this).fragment;
    return fragment ? '#' + fragment : '';
  };

  var accessorDescriptor = function accessorDescriptor(getter, setter) {
    return {
      get: getter,
      set: setter,
      configurable: true,
      enumerable: true
    };
  };

  if (DESCRIPTORS) {
    defineProperties(URLPrototype, {
      // `URL.prototype.href` accessors pair
      // https://url.spec.whatwg.org/#dom-url-href
      href: accessorDescriptor(serializeURL, function (href) {
        var url = getInternalURLState(this);
        var urlString = $toString(href);
        var failure = parseURL(url, urlString);
        if (failure) throw TypeError(failure);
        getInternalSearchParamsState(url.searchParams).updateSearchParams(url.query);
      }),
      // `URL.prototype.origin` getter
      // https://url.spec.whatwg.org/#dom-url-origin
      origin: accessorDescriptor(getOrigin),
      // `URL.prototype.protocol` accessors pair
      // https://url.spec.whatwg.org/#dom-url-protocol
      protocol: accessorDescriptor(getProtocol, function (protocol) {
        var url = getInternalURLState(this);
        parseURL(url, $toString(protocol) + ':', SCHEME_START);
      }),
      // `URL.prototype.username` accessors pair
      // https://url.spec.whatwg.org/#dom-url-username
      username: accessorDescriptor(getUsername, function (username) {
        var url = getInternalURLState(this);
        var codePoints = arrayFrom($toString(username));
        if (cannotHaveUsernamePasswordPort(url)) return;
        url.username = '';

        for (var i = 0; i < codePoints.length; i++) {
          url.username += percentEncode(codePoints[i], userinfoPercentEncodeSet);
        }
      }),
      // `URL.prototype.password` accessors pair
      // https://url.spec.whatwg.org/#dom-url-password
      password: accessorDescriptor(getPassword, function (password) {
        var url = getInternalURLState(this);
        var codePoints = arrayFrom($toString(password));
        if (cannotHaveUsernamePasswordPort(url)) return;
        url.password = '';

        for (var i = 0; i < codePoints.length; i++) {
          url.password += percentEncode(codePoints[i], userinfoPercentEncodeSet);
        }
      }),
      // `URL.prototype.host` accessors pair
      // https://url.spec.whatwg.org/#dom-url-host
      host: accessorDescriptor(getHost, function (host) {
        var url = getInternalURLState(this);
        if (url.cannotBeABaseURL) return;
        parseURL(url, $toString(host), HOST);
      }),
      // `URL.prototype.hostname` accessors pair
      // https://url.spec.whatwg.org/#dom-url-hostname
      hostname: accessorDescriptor(getHostname, function (hostname) {
        var url = getInternalURLState(this);
        if (url.cannotBeABaseURL) return;
        parseURL(url, $toString(hostname), HOSTNAME);
      }),
      // `URL.prototype.port` accessors pair
      // https://url.spec.whatwg.org/#dom-url-port
      port: accessorDescriptor(getPort, function (port) {
        var url = getInternalURLState(this);
        if (cannotHaveUsernamePasswordPort(url)) return;
        port = $toString(port);
        if (port == '') url.port = null;else parseURL(url, port, PORT);
      }),
      // `URL.prototype.pathname` accessors pair
      // https://url.spec.whatwg.org/#dom-url-pathname
      pathname: accessorDescriptor(getPathname, function (pathname) {
        var url = getInternalURLState(this);
        if (url.cannotBeABaseURL) return;
        url.path = [];
        parseURL(url, $toString(pathname), PATH_START);
      }),
      // `URL.prototype.search` accessors pair
      // https://url.spec.whatwg.org/#dom-url-search
      search: accessorDescriptor(getSearch, function (search) {
        var url = getInternalURLState(this);
        search = $toString(search);

        if (search == '') {
          url.query = null;
        } else {
          if ('?' == search.charAt(0)) search = search.slice(1);
          url.query = '';
          parseURL(url, search, QUERY);
        }

        getInternalSearchParamsState(url.searchParams).updateSearchParams(url.query);
      }),
      // `URL.prototype.searchParams` getter
      // https://url.spec.whatwg.org/#dom-url-searchparams
      searchParams: accessorDescriptor(getSearchParams),
      // `URL.prototype.hash` accessors pair
      // https://url.spec.whatwg.org/#dom-url-hash
      hash: accessorDescriptor(getHash, function (hash) {
        var url = getInternalURLState(this);
        hash = $toString(hash);

        if (hash == '') {
          url.fragment = null;
          return;
        }

        if ('#' == hash.charAt(0)) hash = hash.slice(1);
        url.fragment = '';
        parseURL(url, hash, FRAGMENT);
      })
    });
  } // `URL.prototype.toJSON` method
  // https://url.spec.whatwg.org/#dom-url-tojson


  redefine(URLPrototype, 'toJSON', function toJSON() {
    return serializeURL.call(this);
  }, {
    enumerable: true
  }); // `URL.prototype.toString` method
  // https://url.spec.whatwg.org/#URL-stringification-behavior

  redefine(URLPrototype, 'toString', function toString() {
    return serializeURL.call(this);
  }, {
    enumerable: true
  });

  if (NativeURL) {
    var nativeCreateObjectURL = NativeURL.createObjectURL;
    var nativeRevokeObjectURL = NativeURL.revokeObjectURL; // `URL.createObjectURL` method
    // https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL
    // eslint-disable-next-line no-unused-vars -- required for `.length`

    if (nativeCreateObjectURL) redefine(URLConstructor, 'createObjectURL', function createObjectURL(blob) {
      return nativeCreateObjectURL.apply(NativeURL, arguments);
    }); // `URL.revokeObjectURL` method
    // https://developer.mozilla.org/en-US/docs/Web/API/URL/revokeObjectURL
    // eslint-disable-next-line no-unused-vars -- required for `.length`

    if (nativeRevokeObjectURL) redefine(URLConstructor, 'revokeObjectURL', function revokeObjectURL(url) {
      return nativeRevokeObjectURL.apply(NativeURL, arguments);
    });
  }

  setToStringTag(URLConstructor, 'URL');
  $$1({
    global: true,
    forced: !USE_NATIVE_URL,
    sham: !DESCRIPTORS
  }, {
    URL: URLConstructor
  });

  var $ = _export; // `URL.prototype.toJSON` method
  // https://url.spec.whatwg.org/#dom-url-tojson

  $({
    target: 'URL',
    proto: true,
    enumerable: true
  }, {
    toJSON: function toJSON() {
      return URL.prototype.toString.call(this);
    }
  });

  var runtime = {exports: {}};

  /**
   * Copyright (c) 2014-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  (function (module) {
    var runtime = function (exports) {

      var Op = Object.prototype;
      var hasOwn = Op.hasOwnProperty;
      var undefined$1; // More compressible than void 0.

      var $Symbol = typeof Symbol === "function" ? Symbol : {};
      var iteratorSymbol = $Symbol.iterator || "@@iterator";
      var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
      var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

      function define(obj, key, value) {
        Object.defineProperty(obj, key, {
          value: value,
          enumerable: true,
          configurable: true,
          writable: true
        });
        return obj[key];
      }

      try {
        // IE 8 has a broken Object.defineProperty that only works on DOM objects.
        define({}, "");
      } catch (err) {
        define = function define(obj, key, value) {
          return obj[key] = value;
        };
      }

      function wrap(innerFn, outerFn, self, tryLocsList) {
        // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
        var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
        var generator = Object.create(protoGenerator.prototype);
        var context = new Context(tryLocsList || []); // The ._invoke method unifies the implementations of the .next,
        // .throw, and .return methods.

        generator._invoke = makeInvokeMethod(innerFn, self, context);
        return generator;
      }

      exports.wrap = wrap; // Try/catch helper to minimize deoptimizations. Returns a completion
      // record like context.tryEntries[i].completion. This interface could
      // have been (and was previously) designed to take a closure to be
      // invoked without arguments, but in all the cases we care about we
      // already have an existing method we want to call, so there's no need
      // to create a new function object. We can even get away with assuming
      // the method takes exactly one argument, since that happens to be true
      // in every case, so we don't have to touch the arguments object. The
      // only additional allocation required is the completion record, which
      // has a stable shape and so hopefully should be cheap to allocate.

      function tryCatch(fn, obj, arg) {
        try {
          return {
            type: "normal",
            arg: fn.call(obj, arg)
          };
        } catch (err) {
          return {
            type: "throw",
            arg: err
          };
        }
      }

      var GenStateSuspendedStart = "suspendedStart";
      var GenStateSuspendedYield = "suspendedYield";
      var GenStateExecuting = "executing";
      var GenStateCompleted = "completed"; // Returning this object from the innerFn has the same effect as
      // breaking out of the dispatch switch statement.

      var ContinueSentinel = {}; // Dummy constructor functions that we use as the .constructor and
      // .constructor.prototype properties for functions that return Generator
      // objects. For full spec compliance, you may wish to configure your
      // minifier not to mangle the names of these two functions.

      function Generator() {}

      function GeneratorFunction() {}

      function GeneratorFunctionPrototype() {} // This is a polyfill for %IteratorPrototype% for environments that
      // don't natively support it.


      var IteratorPrototype = {};
      define(IteratorPrototype, iteratorSymbol, function () {
        return this;
      });
      var getProto = Object.getPrototypeOf;
      var NativeIteratorPrototype = getProto && getProto(getProto(values([])));

      if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
        // This environment has a native %IteratorPrototype%; use it instead
        // of the polyfill.
        IteratorPrototype = NativeIteratorPrototype;
      }

      var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
      GeneratorFunction.prototype = GeneratorFunctionPrototype;
      define(Gp, "constructor", GeneratorFunctionPrototype);
      define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
      GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"); // Helper for defining the .next, .throw, and .return methods of the
      // Iterator interface in terms of a single ._invoke method.

      function defineIteratorMethods(prototype) {
        ["next", "throw", "return"].forEach(function (method) {
          define(prototype, method, function (arg) {
            return this._invoke(method, arg);
          });
        });
      }

      exports.isGeneratorFunction = function (genFun) {
        var ctor = typeof genFun === "function" && genFun.constructor;
        return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
      };

      exports.mark = function (genFun) {
        if (Object.setPrototypeOf) {
          Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
        } else {
          genFun.__proto__ = GeneratorFunctionPrototype;
          define(genFun, toStringTagSymbol, "GeneratorFunction");
        }

        genFun.prototype = Object.create(Gp);
        return genFun;
      }; // Within the body of any async function, `await x` is transformed to
      // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
      // `hasOwn.call(value, "__await")` to determine if the yielded value is
      // meant to be awaited.


      exports.awrap = function (arg) {
        return {
          __await: arg
        };
      };

      function AsyncIterator(generator, PromiseImpl) {
        function invoke(method, arg, resolve, reject) {
          var record = tryCatch(generator[method], generator, arg);

          if (record.type === "throw") {
            reject(record.arg);
          } else {
            var result = record.arg;
            var value = result.value;

            if (value && typeof value === "object" && hasOwn.call(value, "__await")) {
              return PromiseImpl.resolve(value.__await).then(function (value) {
                invoke("next", value, resolve, reject);
              }, function (err) {
                invoke("throw", err, resolve, reject);
              });
            }

            return PromiseImpl.resolve(value).then(function (unwrapped) {
              // When a yielded Promise is resolved, its final value becomes
              // the .value of the Promise<{value,done}> result for the
              // current iteration.
              result.value = unwrapped;
              resolve(result);
            }, function (error) {
              // If a rejected Promise was yielded, throw the rejection back
              // into the async generator function so it can be handled there.
              return invoke("throw", error, resolve, reject);
            });
          }
        }

        var previousPromise;

        function enqueue(method, arg) {
          function callInvokeWithMethodAndArg() {
            return new PromiseImpl(function (resolve, reject) {
              invoke(method, arg, resolve, reject);
            });
          }

          return previousPromise = // If enqueue has been called before, then we want to wait until
          // all previous Promises have been resolved before calling invoke,
          // so that results are always delivered in the correct order. If
          // enqueue has not been called before, then it is important to
          // call invoke immediately, without waiting on a callback to fire,
          // so that the async generator function has the opportunity to do
          // any necessary setup in a predictable way. This predictability
          // is why the Promise constructor synchronously invokes its
          // executor callback, and why async functions synchronously
          // execute code before the first await. Since we implement simple
          // async functions in terms of async generators, it is especially
          // important to get this right, even though it requires care.
          previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
        } // Define the unified helper method that is used to implement .next,
        // .throw, and .return (see defineIteratorMethods).


        this._invoke = enqueue;
      }

      defineIteratorMethods(AsyncIterator.prototype);
      define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
        return this;
      });
      exports.AsyncIterator = AsyncIterator; // Note that simple async functions are implemented on top of
      // AsyncIterator objects; they just return a Promise for the value of
      // the final result produced by the iterator.

      exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
        if (PromiseImpl === void 0) PromiseImpl = Promise;
        var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
        return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
        : iter.next().then(function (result) {
          return result.done ? result.value : iter.next();
        });
      };

      function makeInvokeMethod(innerFn, self, context) {
        var state = GenStateSuspendedStart;
        return function invoke(method, arg) {
          if (state === GenStateExecuting) {
            throw new Error("Generator is already running");
          }

          if (state === GenStateCompleted) {
            if (method === "throw") {
              throw arg;
            } // Be forgiving, per 25.3.3.3.3 of the spec:
            // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume


            return doneResult();
          }

          context.method = method;
          context.arg = arg;

          while (true) {
            var delegate = context.delegate;

            if (delegate) {
              var delegateResult = maybeInvokeDelegate(delegate, context);

              if (delegateResult) {
                if (delegateResult === ContinueSentinel) continue;
                return delegateResult;
              }
            }

            if (context.method === "next") {
              // Setting context._sent for legacy support of Babel's
              // function.sent implementation.
              context.sent = context._sent = context.arg;
            } else if (context.method === "throw") {
              if (state === GenStateSuspendedStart) {
                state = GenStateCompleted;
                throw context.arg;
              }

              context.dispatchException(context.arg);
            } else if (context.method === "return") {
              context.abrupt("return", context.arg);
            }

            state = GenStateExecuting;
            var record = tryCatch(innerFn, self, context);

            if (record.type === "normal") {
              // If an exception is thrown from innerFn, we leave state ===
              // GenStateExecuting and loop back for another invocation.
              state = context.done ? GenStateCompleted : GenStateSuspendedYield;

              if (record.arg === ContinueSentinel) {
                continue;
              }

              return {
                value: record.arg,
                done: context.done
              };
            } else if (record.type === "throw") {
              state = GenStateCompleted; // Dispatch the exception by looping back around to the
              // context.dispatchException(context.arg) call above.

              context.method = "throw";
              context.arg = record.arg;
            }
          }
        };
      } // Call delegate.iterator[context.method](context.arg) and handle the
      // result, either by returning a { value, done } result from the
      // delegate iterator, or by modifying context.method and context.arg,
      // setting context.delegate to null, and returning the ContinueSentinel.


      function maybeInvokeDelegate(delegate, context) {
        var method = delegate.iterator[context.method];

        if (method === undefined$1) {
          // A .throw or .return when the delegate iterator has no .throw
          // method always terminates the yield* loop.
          context.delegate = null;

          if (context.method === "throw") {
            // Note: ["return"] must be used for ES3 parsing compatibility.
            if (delegate.iterator["return"]) {
              // If the delegate iterator has a return method, give it a
              // chance to clean up.
              context.method = "return";
              context.arg = undefined$1;
              maybeInvokeDelegate(delegate, context);

              if (context.method === "throw") {
                // If maybeInvokeDelegate(context) changed context.method from
                // "return" to "throw", let that override the TypeError below.
                return ContinueSentinel;
              }
            }

            context.method = "throw";
            context.arg = new TypeError("The iterator does not provide a 'throw' method");
          }

          return ContinueSentinel;
        }

        var record = tryCatch(method, delegate.iterator, context.arg);

        if (record.type === "throw") {
          context.method = "throw";
          context.arg = record.arg;
          context.delegate = null;
          return ContinueSentinel;
        }

        var info = record.arg;

        if (!info) {
          context.method = "throw";
          context.arg = new TypeError("iterator result is not an object");
          context.delegate = null;
          return ContinueSentinel;
        }

        if (info.done) {
          // Assign the result of the finished delegate to the temporary
          // variable specified by delegate.resultName (see delegateYield).
          context[delegate.resultName] = info.value; // Resume execution at the desired location (see delegateYield).

          context.next = delegate.nextLoc; // If context.method was "throw" but the delegate handled the
          // exception, let the outer generator proceed normally. If
          // context.method was "next", forget context.arg since it has been
          // "consumed" by the delegate iterator. If context.method was
          // "return", allow the original .return call to continue in the
          // outer generator.

          if (context.method !== "return") {
            context.method = "next";
            context.arg = undefined$1;
          }
        } else {
          // Re-yield the result returned by the delegate method.
          return info;
        } // The delegate iterator is finished, so forget it and continue with
        // the outer generator.


        context.delegate = null;
        return ContinueSentinel;
      } // Define Generator.prototype.{next,throw,return} in terms of the
      // unified ._invoke helper method.


      defineIteratorMethods(Gp);
      define(Gp, toStringTagSymbol, "Generator"); // A Generator should always return itself as the iterator object when the
      // @@iterator function is called on it. Some browsers' implementations of the
      // iterator prototype chain incorrectly implement this, causing the Generator
      // object to not be returned from this call. This ensures that doesn't happen.
      // See https://github.com/facebook/regenerator/issues/274 for more details.

      define(Gp, iteratorSymbol, function () {
        return this;
      });
      define(Gp, "toString", function () {
        return "[object Generator]";
      });

      function pushTryEntry(locs) {
        var entry = {
          tryLoc: locs[0]
        };

        if (1 in locs) {
          entry.catchLoc = locs[1];
        }

        if (2 in locs) {
          entry.finallyLoc = locs[2];
          entry.afterLoc = locs[3];
        }

        this.tryEntries.push(entry);
      }

      function resetTryEntry(entry) {
        var record = entry.completion || {};
        record.type = "normal";
        delete record.arg;
        entry.completion = record;
      }

      function Context(tryLocsList) {
        // The root entry object (effectively a try statement without a catch
        // or a finally block) gives us a place to store values thrown from
        // locations where there is no enclosing try statement.
        this.tryEntries = [{
          tryLoc: "root"
        }];
        tryLocsList.forEach(pushTryEntry, this);
        this.reset(true);
      }

      exports.keys = function (object) {
        var keys = [];

        for (var key in object) {
          keys.push(key);
        }

        keys.reverse(); // Rather than returning an object with a next method, we keep
        // things simple and return the next function itself.

        return function next() {
          while (keys.length) {
            var key = keys.pop();

            if (key in object) {
              next.value = key;
              next.done = false;
              return next;
            }
          } // To avoid creating an additional object, we just hang the .value
          // and .done properties off the next function object itself. This
          // also ensures that the minifier will not anonymize the function.


          next.done = true;
          return next;
        };
      };

      function values(iterable) {
        if (iterable) {
          var iteratorMethod = iterable[iteratorSymbol];

          if (iteratorMethod) {
            return iteratorMethod.call(iterable);
          }

          if (typeof iterable.next === "function") {
            return iterable;
          }

          if (!isNaN(iterable.length)) {
            var i = -1,
                next = function next() {
              while (++i < iterable.length) {
                if (hasOwn.call(iterable, i)) {
                  next.value = iterable[i];
                  next.done = false;
                  return next;
                }
              }

              next.value = undefined$1;
              next.done = true;
              return next;
            };

            return next.next = next;
          }
        } // Return an iterator with no values.


        return {
          next: doneResult
        };
      }

      exports.values = values;

      function doneResult() {
        return {
          value: undefined$1,
          done: true
        };
      }

      Context.prototype = {
        constructor: Context,
        reset: function reset(skipTempReset) {
          this.prev = 0;
          this.next = 0; // Resetting context._sent for legacy support of Babel's
          // function.sent implementation.

          this.sent = this._sent = undefined$1;
          this.done = false;
          this.delegate = null;
          this.method = "next";
          this.arg = undefined$1;
          this.tryEntries.forEach(resetTryEntry);

          if (!skipTempReset) {
            for (var name in this) {
              // Not sure about the optimal order of these conditions:
              if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
                this[name] = undefined$1;
              }
            }
          }
        },
        stop: function stop() {
          this.done = true;
          var rootEntry = this.tryEntries[0];
          var rootRecord = rootEntry.completion;

          if (rootRecord.type === "throw") {
            throw rootRecord.arg;
          }

          return this.rval;
        },
        dispatchException: function dispatchException(exception) {
          if (this.done) {
            throw exception;
          }

          var context = this;

          function handle(loc, caught) {
            record.type = "throw";
            record.arg = exception;
            context.next = loc;

            if (caught) {
              // If the dispatched exception was caught by a catch block,
              // then let that catch block handle the exception normally.
              context.method = "next";
              context.arg = undefined$1;
            }

            return !!caught;
          }

          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i];
            var record = entry.completion;

            if (entry.tryLoc === "root") {
              // Exception thrown outside of any try block that could handle
              // it, so set the completion value of the entire function to
              // throw the exception.
              return handle("end");
            }

            if (entry.tryLoc <= this.prev) {
              var hasCatch = hasOwn.call(entry, "catchLoc");
              var hasFinally = hasOwn.call(entry, "finallyLoc");

              if (hasCatch && hasFinally) {
                if (this.prev < entry.catchLoc) {
                  return handle(entry.catchLoc, true);
                } else if (this.prev < entry.finallyLoc) {
                  return handle(entry.finallyLoc);
                }
              } else if (hasCatch) {
                if (this.prev < entry.catchLoc) {
                  return handle(entry.catchLoc, true);
                }
              } else if (hasFinally) {
                if (this.prev < entry.finallyLoc) {
                  return handle(entry.finallyLoc);
                }
              } else {
                throw new Error("try statement without catch or finally");
              }
            }
          }
        },
        abrupt: function abrupt(type, arg) {
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i];

            if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
              var finallyEntry = entry;
              break;
            }
          }

          if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
            // Ignore the finally entry if control is not jumping to a
            // location outside the try/catch block.
            finallyEntry = null;
          }

          var record = finallyEntry ? finallyEntry.completion : {};
          record.type = type;
          record.arg = arg;

          if (finallyEntry) {
            this.method = "next";
            this.next = finallyEntry.finallyLoc;
            return ContinueSentinel;
          }

          return this.complete(record);
        },
        complete: function complete(record, afterLoc) {
          if (record.type === "throw") {
            throw record.arg;
          }

          if (record.type === "break" || record.type === "continue") {
            this.next = record.arg;
          } else if (record.type === "return") {
            this.rval = this.arg = record.arg;
            this.method = "return";
            this.next = "end";
          } else if (record.type === "normal" && afterLoc) {
            this.next = afterLoc;
          }

          return ContinueSentinel;
        },
        finish: function finish(finallyLoc) {
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i];

            if (entry.finallyLoc === finallyLoc) {
              this.complete(entry.completion, entry.afterLoc);
              resetTryEntry(entry);
              return ContinueSentinel;
            }
          }
        },
        "catch": function _catch(tryLoc) {
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i];

            if (entry.tryLoc === tryLoc) {
              var record = entry.completion;

              if (record.type === "throw") {
                var thrown = record.arg;
                resetTryEntry(entry);
              }

              return thrown;
            }
          } // The context.catch method must only be called with a location
          // argument that corresponds to a known catch block.


          throw new Error("illegal catch attempt");
        },
        delegateYield: function delegateYield(iterable, resultName, nextLoc) {
          this.delegate = {
            iterator: values(iterable),
            resultName: resultName,
            nextLoc: nextLoc
          };

          if (this.method === "next") {
            // Deliberately forget the last sent value so that we don't
            // accidentally pass it on to the delegate.
            this.arg = undefined$1;
          }

          return ContinueSentinel;
        }
      }; // Regardless of whether this script is executing as a CommonJS module
      // or not, return the runtime object so that we can declare the variable
      // regeneratorRuntime in the outer scope, which allows this module to be
      // injected easily by `bin/regenerator --include-runtime script.js`.

      return exports;
    }( // If this script is executing as a CommonJS module, use module.exports
    // as the regeneratorRuntime namespace. Otherwise create a new empty
    // object. Either way, the resulting object will be used to initialize
    // the regeneratorRuntime variable at the top of this file.
    module.exports );

    try {
      regeneratorRuntime = runtime;
    } catch (accidentalStrictMode) {
      // This module should not be running in strict mode, so the above
      // assignment should always work unless something is misconfigured. Just
      // in case runtime.js accidentally runs in strict mode, in modern engines
      // we can explicitly access globalThis. In older engines we can escape
      // strict mode using a global Function call. This could conceivably fail
      // if a Content Security Policy forbids using Function, but in that case
      // the proper solution is to fix the accidental strict mode problem. If
      // you've misconfigured your bundler to force strict mode and applied a
      // CSP to forbid Function, and you're not willing to fix either of those
      // problems, please detail your unique predicament in a GitHub issue.
      if (typeof globalThis === "object") {
        globalThis.regeneratorRuntime = runtime;
      } else {
        Function("r", "regeneratorRuntime = r")(runtime);
      }
    }
  })(runtime);

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
