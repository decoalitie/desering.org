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

  var toIndexedObject$2 = require('../internals/to-indexed-object');

  var addToUnscopables = require('../internals/add-to-unscopables');

  var Iterators = require('../internals/iterators');

  var InternalStateModule$2 = require('../internals/internal-state');

  var defineIterator = require('../internals/define-iterator');

  var ARRAY_ITERATOR = 'Array Iterator';
  var setInternalState$2 = InternalStateModule$2.set;
  var getInternalState$2 = InternalStateModule$2.getterFor(ARRAY_ITERATOR); // `Array.prototype.entries` method
  // https://tc39.es/ecma262/#sec-array.prototype.entries
  // `Array.prototype.keys` method
  // https://tc39.es/ecma262/#sec-array.prototype.keys
  // `Array.prototype.values` method
  // https://tc39.es/ecma262/#sec-array.prototype.values
  // `Array.prototype[@@iterator]` method
  // https://tc39.es/ecma262/#sec-array.prototype-@@iterator
  // `CreateArrayIterator` internal method
  // https://tc39.es/ecma262/#sec-createarrayiterator

  module.exports = defineIterator(Array, 'Array', function (iterated, kind) {
    setInternalState$2(this, {
      type: ARRAY_ITERATOR,
      target: toIndexedObject$2(iterated),
      // target
      index: 0,
      // next index
      kind: kind // kind

    }); // `%ArrayIteratorPrototype%.next` method
    // https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
  }, function () {
    var state = getInternalState$2(this);
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

  addToUnscopables('keys');
  addToUnscopables('values');
  addToUnscopables('entries');

  var $$e = require('../internals/export');

  var iterate$1 = require('../internals/iterate');

  var createProperty$3 = require('../internals/create-property'); // `Object.fromEntries` method
  // https://github.com/tc39/proposal-object-from-entries


  $$e({
    target: 'Object',
    stat: true
  }, {
    fromEntries: function fromEntries(iterable) {
      var obj = {};
      iterate$1(iterable, function (k, v) {
        createProperty$3(obj, k, v);
      }, {
        AS_ENTRIES: true
      });
      return obj;
    }
  });

  var $$d = require('../internals/export');

  var $map = require('../internals/array-iteration').map;

  var arrayMethodHasSpeciesSupport$4 = require('../internals/array-method-has-species-support');

  var HAS_SPECIES_SUPPORT$3 = arrayMethodHasSpeciesSupport$4('map'); // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  // with adding support of @@species

  $$d({
    target: 'Array',
    proto: true,
    forced: !HAS_SPECIES_SUPPORT$3
  }, {
    map: function map(callbackfn
    /* , thisArg */
    ) {
      return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  var $$c = require('../internals/export');

  var $filter = require('../internals/array-iteration').filter;

  var arrayMethodHasSpeciesSupport$3 = require('../internals/array-method-has-species-support');

  var HAS_SPECIES_SUPPORT$2 = arrayMethodHasSpeciesSupport$3('filter'); // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  // with adding support of @@species

  $$c({
    target: 'Array',
    proto: true,
    forced: !HAS_SPECIES_SUPPORT$2
  }, {
    filter: function filter(callbackfn
    /* , thisArg */
    ) {
      return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  var $$b = require('../internals/export');

  var from = require('../internals/array-from');

  var checkCorrectnessOfIteration$1 = require('../internals/check-correctness-of-iteration');

  var INCORRECT_ITERATION$1 = !checkCorrectnessOfIteration$1(function (iterable) {
    // eslint-disable-next-line es/no-array-from -- required for testing
    Array.from(iterable);
  }); // `Array.from` method
  // https://tc39.es/ecma262/#sec-array.from

  $$b({
    target: 'Array',
    stat: true,
    forced: INCORRECT_ITERATION$1
  }, {
    from: from
  });

  var TO_STRING_TAG_SUPPORT = require('../internals/to-string-tag-support');

  var redefine$5 = require('../internals/redefine');

  var toString$2 = require('../internals/object-to-string'); // `Object.prototype.toString` method
  // https://tc39.es/ecma262/#sec-object.prototype.tostring


  if (!TO_STRING_TAG_SUPPORT) {
    redefine$5(Object.prototype, 'toString', toString$2, {
      unsafe: true
    });
  }

  var global$5 = require('../internals/global');

  var DOMIterables$1 = require('../internals/dom-iterables');

  var ArrayIteratorMethods = require('../modules/es.array.iterator');

  var createNonEnumerableProperty$3 = require('../internals/create-non-enumerable-property');

  var wellKnownSymbol$6 = require('../internals/well-known-symbol');

  var ITERATOR = wellKnownSymbol$6('iterator');
  var TO_STRING_TAG = wellKnownSymbol$6('toStringTag');
  var ArrayValues = ArrayIteratorMethods.values;

  for (var COLLECTION_NAME$1 in DOMIterables$1) {
    var Collection$1 = global$5[COLLECTION_NAME$1];
    var CollectionPrototype$1 = Collection$1 && Collection$1.prototype;

    if (CollectionPrototype$1) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype$1[ITERATOR] !== ArrayValues) try {
        createNonEnumerableProperty$3(CollectionPrototype$1, ITERATOR, ArrayValues);
      } catch (error) {
        CollectionPrototype$1[ITERATOR] = ArrayValues;
      }

      if (!CollectionPrototype$1[TO_STRING_TAG]) {
        createNonEnumerableProperty$3(CollectionPrototype$1, TO_STRING_TAG, COLLECTION_NAME$1);
      }

      if (DOMIterables$1[COLLECTION_NAME$1]) for (var METHOD_NAME in ArrayIteratorMethods) {
        // some Chrome versions have non-configurable methods on DOMTokenList
        if (CollectionPrototype$1[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
          createNonEnumerableProperty$3(CollectionPrototype$1, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
        } catch (error) {
          CollectionPrototype$1[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
        }
      }
    }
  }

  var $$a = require('../internals/export');

  var $entries = require('../internals/object-to-array').entries; // `Object.entries` method
  // https://tc39.es/ecma262/#sec-object.entries


  $$a({
    target: 'Object',
    stat: true
  }, {
    entries: function entries(O) {
      return $entries(O);
    }
  });

  var global$4 = require('../internals/global');

  var DOMIterables = require('../internals/dom-iterables');

  var forEach = require('../internals/array-for-each');

  var createNonEnumerableProperty$2 = require('../internals/create-non-enumerable-property');

  for (var COLLECTION_NAME in DOMIterables) {
    var Collection = global$4[COLLECTION_NAME];
    var CollectionPrototype = Collection && Collection.prototype; // some Chrome versions have non-configurable methods on DOMTokenList

    if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {
      createNonEnumerableProperty$2(CollectionPrototype, 'forEach', forEach);
    } catch (error) {
      CollectionPrototype.forEach = forEach;
    }
  }

  var $$9 = require('../internals/export');

  var fails$6 = require('../internals/fails');

  var isArray$2 = require('../internals/is-array');

  var isObject$4 = require('../internals/is-object');

  var toObject$2 = require('../internals/to-object');

  var toLength$3 = require('../internals/to-length');

  var createProperty$2 = require('../internals/create-property');

  var arraySpeciesCreate$1 = require('../internals/array-species-create');

  var arrayMethodHasSpeciesSupport$2 = require('../internals/array-method-has-species-support');

  var wellKnownSymbol$5 = require('../internals/well-known-symbol');

  var V8_VERSION$1 = require('../internals/engine-v8-version');

  var IS_CONCAT_SPREADABLE = wellKnownSymbol$5('isConcatSpreadable');
  var MAX_SAFE_INTEGER$1 = 0x1FFFFFFFFFFFFF;
  var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded'; // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/679

  var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION$1 >= 51 || !fails$6(function () {
    var array = [];
    array[IS_CONCAT_SPREADABLE] = false;
    return array.concat()[0] !== array;
  });
  var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport$2('concat');

  var isConcatSpreadable = function isConcatSpreadable(O) {
    if (!isObject$4(O)) return false;
    var spreadable = O[IS_CONCAT_SPREADABLE];
    return spreadable !== undefined ? !!spreadable : isArray$2(O);
  };

  var FORCED$2 = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT; // `Array.prototype.concat` method
  // https://tc39.es/ecma262/#sec-array.prototype.concat
  // with adding support of @@isConcatSpreadable and @@species

  $$9({
    target: 'Array',
    proto: true,
    forced: FORCED$2
  }, {
    // eslint-disable-next-line no-unused-vars -- required for `.length`
    concat: function concat(arg) {
      var O = toObject$2(this);
      var A = arraySpeciesCreate$1(O, 0);
      var n = 0;
      var i, k, length, len, E;

      for (i = -1, length = arguments.length; i < length; i++) {
        E = i === -1 ? O : arguments[i];

        if (isConcatSpreadable(E)) {
          len = toLength$3(E.length);
          if (n + len > MAX_SAFE_INTEGER$1) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);

          for (k = 0; k < len; k++, n++) {
            if (k in E) createProperty$2(A, n, E[k]);
          }
        } else {
          if (n >= MAX_SAFE_INTEGER$1) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
          createProperty$2(A, n++, E);
        }
      }

      A.length = n;
      return A;
    }
  });

  var $$8 = require('../internals/export');

  var $reduce = require('../internals/array-reduce').left;

  var arrayMethodIsStrict$1 = require('../internals/array-method-is-strict');

  var CHROME_VERSION = require('../internals/engine-v8-version');

  var IS_NODE$1 = require('../internals/engine-is-node');

  var STRICT_METHOD$1 = arrayMethodIsStrict$1('reduce'); // Chrome 80-82 has a critical bug
  // https://bugs.chromium.org/p/chromium/issues/detail?id=1049982

  var CHROME_BUG = !IS_NODE$1 && CHROME_VERSION > 79 && CHROME_VERSION < 83; // `Array.prototype.reduce` method
  // https://tc39.es/ecma262/#sec-array.prototype.reduce

  $$8({
    target: 'Array',
    proto: true,
    forced: !STRICT_METHOD$1 || CHROME_BUG
  }, {
    reduce: function reduce(callbackfn
    /* , initialValue */
    ) {
      return $reduce(this, callbackfn, arguments.length, arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  var $$7 = require('../internals/export');

  var toAbsoluteIndex$1 = require('../internals/to-absolute-index');

  var toInteger$1 = require('../internals/to-integer');

  var toLength$2 = require('../internals/to-length');

  var toObject$1 = require('../internals/to-object');

  var arraySpeciesCreate = require('../internals/array-species-create');

  var createProperty$1 = require('../internals/create-property');

  var arrayMethodHasSpeciesSupport$1 = require('../internals/array-method-has-species-support');

  var HAS_SPECIES_SUPPORT$1 = arrayMethodHasSpeciesSupport$1('splice');
  var max$2 = Math.max;
  var min$1 = Math.min;
  var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
  var MAXIMUM_ALLOWED_LENGTH_EXCEEDED = 'Maximum allowed length exceeded'; // `Array.prototype.splice` method
  // https://tc39.es/ecma262/#sec-array.prototype.splice
  // with adding support of @@species

  $$7({
    target: 'Array',
    proto: true,
    forced: !HAS_SPECIES_SUPPORT$1
  }, {
    splice: function splice(start, deleteCount
    /* , ...items */
    ) {
      var O = toObject$1(this);
      var len = toLength$2(O.length);
      var actualStart = toAbsoluteIndex$1(start, len);
      var argumentsLength = arguments.length;
      var insertCount, actualDeleteCount, A, k, from, to;

      if (argumentsLength === 0) {
        insertCount = actualDeleteCount = 0;
      } else if (argumentsLength === 1) {
        insertCount = 0;
        actualDeleteCount = len - actualStart;
      } else {
        insertCount = argumentsLength - 2;
        actualDeleteCount = min$1(max$2(toInteger$1(deleteCount), 0), len - actualStart);
      }

      if (len + insertCount - actualDeleteCount > MAX_SAFE_INTEGER) {
        throw TypeError(MAXIMUM_ALLOWED_LENGTH_EXCEEDED);
      }

      A = arraySpeciesCreate(O, actualDeleteCount);

      for (k = 0; k < actualDeleteCount; k++) {
        from = actualStart + k;
        if (from in O) createProperty$1(A, k, O[from]);
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

  var $$6 = require('../internals/export');

  var IS_PURE$2 = require('../internals/is-pure');

  var NativePromise$1 = require('../internals/native-promise-constructor');

  var fails$5 = require('../internals/fails');

  var getBuiltIn$2 = require('../internals/get-built-in');

  var speciesConstructor$1 = require('../internals/species-constructor');

  var promiseResolve$1 = require('../internals/promise-resolve');

  var redefine$4 = require('../internals/redefine'); // Safari bug https://bugs.webkit.org/show_bug.cgi?id=200829


  var NON_GENERIC = !!NativePromise$1 && fails$5(function () {
    NativePromise$1.prototype['finally'].call({
      then: function then() {
        /* empty */
      }
    }, function () {
      /* empty */
    });
  }); // `Promise.prototype.finally` method
  // https://tc39.es/ecma262/#sec-promise.prototype.finally

  $$6({
    target: 'Promise',
    proto: true,
    real: true,
    forced: NON_GENERIC
  }, {
    'finally': function _finally(onFinally) {
      var C = speciesConstructor$1(this, getBuiltIn$2('Promise'));
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

  if (!IS_PURE$2 && typeof NativePromise$1 == 'function') {
    var method = getBuiltIn$2('Promise').prototype['finally'];

    if (NativePromise$1.prototype['finally'] !== method) {
      redefine$4(NativePromise$1.prototype, 'finally', method, {
        unsafe: true
      });
    }
  }

  var $$5 = require('../internals/export');

  var IS_PURE$1 = require('../internals/is-pure');

  var global$3 = require('../internals/global');

  var getBuiltIn$1 = require('../internals/get-built-in');

  var NativePromise = require('../internals/native-promise-constructor');

  var redefine$3 = require('../internals/redefine');

  var redefineAll = require('../internals/redefine-all');

  var setPrototypeOf = require('../internals/object-set-prototype-of');

  var setToStringTag$1 = require('../internals/set-to-string-tag');

  var setSpecies$1 = require('../internals/set-species');

  var isObject$3 = require('../internals/is-object');

  var aFunction = require('../internals/a-function');

  var anInstance = require('../internals/an-instance');

  var inspectSource = require('../internals/inspect-source');

  var iterate = require('../internals/iterate');

  var checkCorrectnessOfIteration = require('../internals/check-correctness-of-iteration');

  var speciesConstructor = require('../internals/species-constructor');

  var task = require('../internals/task').set;

  var microtask = require('../internals/microtask');

  var promiseResolve = require('../internals/promise-resolve');

  var hostReportErrors = require('../internals/host-report-errors');

  var newPromiseCapabilityModule = require('../internals/new-promise-capability');

  var perform = require('../internals/perform');

  var InternalStateModule$1 = require('../internals/internal-state');

  var isForced$1 = require('../internals/is-forced');

  var wellKnownSymbol$4 = require('../internals/well-known-symbol');

  var IS_BROWSER = require('../internals/engine-is-browser');

  var IS_NODE = require('../internals/engine-is-node');

  var V8_VERSION = require('../internals/engine-v8-version');

  var SPECIES$1 = wellKnownSymbol$4('species');
  var PROMISE = 'Promise';
  var getInternalState$1 = InternalStateModule$1.get;
  var setInternalState$1 = InternalStateModule$1.set;
  var getInternalPromiseState = InternalStateModule$1.getterFor(PROMISE);
  var NativePromisePrototype = NativePromise && NativePromise.prototype;
  var PromiseConstructor = NativePromise;
  var PromiseConstructorPrototype = NativePromisePrototype;
  var TypeError$1 = global$3.TypeError;
  var document$1 = global$3.document;
  var process = global$3.process;
  var newPromiseCapability = newPromiseCapabilityModule.f;
  var newGenericPromiseCapability = newPromiseCapability;
  var DISPATCH_EVENT = !!(document$1 && document$1.createEvent && global$3.dispatchEvent);
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
  var FORCED$1 = isForced$1(PROMISE, function () {
    var PROMISE_CONSTRUCTOR_SOURCE = inspectSource(PromiseConstructor);
    var GLOBAL_CORE_JS_PROMISE = PROMISE_CONSTRUCTOR_SOURCE !== String(PromiseConstructor); // V8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
    // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
    // We can't detect it synchronously, so just check versions

    if (!GLOBAL_CORE_JS_PROMISE && V8_VERSION === 66) return true; // We need Promise#finally in the pure version for preventing prototype pollution

    if (IS_PURE$1 && !PromiseConstructorPrototype['finally']) return true; // We can't use @@species feature detection in V8 since it causes
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
  var INCORRECT_ITERATION = FORCED$1 || !checkCorrectnessOfIteration(function (iterable) {
    PromiseConstructor.all(iterable)['catch'](function () {
      /* empty */
    });
  }); // helpers

  var isThenable = function isThenable(it) {
    var then;
    return isObject$3(it) && typeof (then = it.then) == 'function' ? then : false;
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
      global$3.dispatchEvent(event);
    } else event = {
      promise: promise,
      reason: reason
    };

    if (!NATIVE_REJECTION_EVENT && (handler = global$3['on' + name])) handler(event);else if (name === UNHANDLED_REJECTION) hostReportErrors('Unhandled promise rejection', reason);
  };

  var onUnhandled = function onUnhandled(state) {
    task.call(global$3, function () {
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
    task.call(global$3, function () {
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


  if (FORCED$1) {
    // 25.4.3.1 Promise(executor)
    PromiseConstructor = function Promise(executor) {
      anInstance(this, PromiseConstructor, PROMISE);
      aFunction(executor);
      Internal.call(this);
      var state = getInternalState$1(this);

      try {
        executor(bind(internalResolve, state), bind(internalReject, state));
      } catch (error) {
        internalReject(state, error);
      }
    };

    PromiseConstructorPrototype = PromiseConstructor.prototype; // eslint-disable-next-line no-unused-vars -- required for `.length`

    Internal = function Promise(executor) {
      setInternalState$1(this, {
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
      var state = getInternalState$1(promise);
      this.promise = promise;
      this.resolve = bind(internalResolve, state);
      this.reject = bind(internalReject, state);
    };

    newPromiseCapabilityModule.f = newPromiseCapability = function newPromiseCapability(C) {
      return C === PromiseConstructor || C === PromiseWrapper ? new OwnPromiseCapability(C) : newGenericPromiseCapability(C);
    };

    if (!IS_PURE$1 && typeof NativePromise == 'function' && NativePromisePrototype !== Object.prototype) {
      nativeThen = NativePromisePrototype.then;

      if (!SUBCLASSING) {
        // make `Promise#then` return a polyfilled `Promise` for native promise-based APIs
        redefine$3(NativePromisePrototype, 'then', function then(onFulfilled, onRejected) {
          var that = this;
          return new PromiseConstructor(function (resolve, reject) {
            nativeThen.call(that, resolve, reject);
          }).then(onFulfilled, onRejected); // https://github.com/zloirock/core-js/issues/640
        }, {
          unsafe: true
        }); // makes sure that native promise-based APIs `Promise#catch` properly works with patched `Promise#then`

        redefine$3(NativePromisePrototype, 'catch', PromiseConstructorPrototype['catch'], {
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

  $$5({
    global: true,
    wrap: true,
    forced: FORCED$1
  }, {
    Promise: PromiseConstructor
  });
  setToStringTag$1(PromiseConstructor, PROMISE, false, true);
  setSpecies$1(PROMISE);
  PromiseWrapper = getBuiltIn$1(PROMISE); // statics

  $$5({
    target: PROMISE,
    stat: true,
    forced: FORCED$1
  }, {
    // `Promise.reject` method
    // https://tc39.es/ecma262/#sec-promise.reject
    reject: function reject(r) {
      var capability = newPromiseCapability(this);
      capability.reject.call(undefined, r);
      return capability.promise;
    }
  });
  $$5({
    target: PROMISE,
    stat: true,
    forced: IS_PURE$1 || FORCED$1
  }, {
    // `Promise.resolve` method
    // https://tc39.es/ecma262/#sec-promise.resolve
    resolve: function resolve(x) {
      return promiseResolve(IS_PURE$1 && this === PromiseWrapper ? PromiseConstructor : this, x);
    }
  });
  $$5({
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

  var $$4 = require('../internals/export');

  var isObject$2 = require('../internals/is-object');

  var isArray$1 = require('../internals/is-array');

  var toAbsoluteIndex = require('../internals/to-absolute-index');

  var toLength$1 = require('../internals/to-length');

  var toIndexedObject$1 = require('../internals/to-indexed-object');

  var createProperty = require('../internals/create-property');

  var wellKnownSymbol$3 = require('../internals/well-known-symbol');

  var arrayMethodHasSpeciesSupport = require('../internals/array-method-has-species-support');

  var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('slice');
  var SPECIES = wellKnownSymbol$3('species');
  var nativeSlice = [].slice;
  var max$1 = Math.max; // `Array.prototype.slice` method
  // https://tc39.es/ecma262/#sec-array.prototype.slice
  // fallback for not array-like ES3 strings and DOM objects

  $$4({
    target: 'Array',
    proto: true,
    forced: !HAS_SPECIES_SUPPORT
  }, {
    slice: function slice(start, end) {
      var O = toIndexedObject$1(this);
      var length = toLength$1(O.length);
      var k = toAbsoluteIndex(start, length);
      var fin = toAbsoluteIndex(end === undefined ? length : end, length); // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible

      var Constructor, result, n;

      if (isArray$1(O)) {
        Constructor = O.constructor; // cross-realm fallback

        if (typeof Constructor == 'function' && (Constructor === Array || isArray$1(Constructor.prototype))) {
          Constructor = undefined;
        } else if (isObject$2(Constructor)) {
          Constructor = Constructor[SPECIES];
          if (Constructor === null) Constructor = undefined;
        }

        if (Constructor === Array || Constructor === undefined) {
          return nativeSlice.call(O, k, fin);
        }
      }

      result = new (Constructor === undefined ? Array : Constructor)(max$1(fin - k, 0));

      for (n = 0; k < fin; k++, n++) {
        if (k in O) createProperty(result, n, O[k]);
      }

      result.length = n;
      return result;
    }
  });

  var $$3 = require('../internals/export');

  var exec = require('../internals/regexp-exec'); // `RegExp.prototype.exec` method
  // https://tc39.es/ecma262/#sec-regexp.prototype.exec


  $$3({
    target: 'RegExp',
    proto: true,
    forced: /./.exec !== exec
  }, {
    exec: exec
  });

  var DESCRIPTORS$3 = require('../internals/descriptors');

  var objectDefinePropertyModule = require('../internals/object-define-property');

  var regExpFlags = require('../internals/regexp-flags');

  var fails$4 = require('../internals/fails');

  var FORCED = DESCRIPTORS$3 && fails$4(function () {
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    return Object.getOwnPropertyDescriptor(RegExp.prototype, 'flags').get.call({
      dotAll: true,
      sticky: true
    }) !== 'sy';
  }); // `RegExp.prototype.flags` getter
  // https://tc39.es/ecma262/#sec-get-regexp.prototype.flags

  if (FORCED) objectDefinePropertyModule.f(RegExp.prototype, 'flags', {
    configurable: true,
    get: regExpFlags
  });

  var $$2 = require('../internals/export');

  var $indexOf = require('../internals/array-includes').indexOf;

  var arrayMethodIsStrict = require('../internals/array-method-is-strict');

  var nativeIndexOf = [].indexOf;
  var NEGATIVE_ZERO = !!nativeIndexOf && 1 / [1].indexOf(1, -0) < 0;
  var STRICT_METHOD = arrayMethodIsStrict('indexOf'); // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof

  $$2({
    target: 'Array',
    proto: true,
    forced: NEGATIVE_ZERO || !STRICT_METHOD
  }, {
    indexOf: function indexOf(searchElement
    /* , fromIndex = 0 */
    ) {
      return NEGATIVE_ZERO // convert -0 to +0
      ? nativeIndexOf.apply(this, arguments) || 0 : $indexOf(this, searchElement, arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  var fixRegExpWellKnownSymbolLogic = require('../internals/fix-regexp-well-known-symbol-logic');

  var fails$3 = require('../internals/fails');

  var anObject$2 = require('../internals/an-object');

  var toInteger = require('../internals/to-integer');

  var toLength = require('../internals/to-length');

  var toString$1 = require('../internals/to-string');

  var requireObjectCoercible = require('../internals/require-object-coercible');

  var advanceStringIndex = require('../internals/advance-string-index');

  var getSubstitution = require('../internals/get-substitution');

  var regExpExec = require('../internals/regexp-exec-abstract');

  var wellKnownSymbol$2 = require('../internals/well-known-symbol');

  var REPLACE = wellKnownSymbol$2('replace');
  var max = Math.max;
  var min = Math.min;

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

  var REPLACE_SUPPORTS_NAMED_GROUPS = !fails$3(function () {
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

  fixRegExpWellKnownSymbolLogic('replace', function (_, nativeReplace, maybeCallNative) {
    var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';
    return [// `String.prototype.replace` method
    // https://tc39.es/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = requireObjectCoercible(this);
      var replacer = searchValue == undefined ? undefined : searchValue[REPLACE];
      return replacer !== undefined ? replacer.call(searchValue, O, replaceValue) : nativeReplace.call(toString$1(O), searchValue, replaceValue);
    }, // `RegExp.prototype[@@replace]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
    function (string, replaceValue) {
      var rx = anObject$2(this);
      var S = toString$1(string);

      if (typeof replaceValue === 'string' && replaceValue.indexOf(UNSAFE_SUBSTITUTE) === -1 && replaceValue.indexOf('$<') === -1) {
        var res = maybeCallNative(nativeReplace, rx, S, replaceValue);
        if (res.done) return res.value;
      }

      var functionalReplace = typeof replaceValue === 'function';
      if (!functionalReplace) replaceValue = toString$1(replaceValue);
      var global = rx.global;

      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }

      var results = [];

      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;
        results.push(result);
        if (!global) break;
        var matchStr = toString$1(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }

      var accumulatedResult = '';
      var nextSourcePosition = 0;

      for (var i = 0; i < results.length; i++) {
        result = results[i];
        var matched = toString$1(result[0]);
        var position = max(min(toInteger(result.index), S.length), 0);
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
          var replacement = toString$1(replaceValue.apply(undefined, replacerArgs));
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

  var DESCRIPTORS$2 = require('../internals/descriptors');

  var global$2 = require('../internals/global');

  var isForced = require('../internals/is-forced');

  var inheritIfRequired = require('../internals/inherit-if-required');

  var createNonEnumerableProperty$1 = require('../internals/create-non-enumerable-property');

  var defineProperty$1 = require('../internals/object-define-property').f;

  var getOwnPropertyNames = require('../internals/object-get-own-property-names').f;

  var isRegExp = require('../internals/is-regexp');

  var toString = require('../internals/to-string');

  var getFlags = require('../internals/regexp-flags');

  var stickyHelpers = require('../internals/regexp-sticky-helpers');

  var redefine$2 = require('../internals/redefine');

  var fails$2 = require('../internals/fails');

  var has$2 = require('../internals/has');

  var enforceInternalState = require('../internals/internal-state').enforce;

  var setSpecies = require('../internals/set-species');

  var wellKnownSymbol$1 = require('../internals/well-known-symbol');

  var UNSUPPORTED_DOT_ALL = require('../internals/regexp-unsupported-dot-all');

  var UNSUPPORTED_NCG = require('../internals/regexp-unsupported-ncg');

  var MATCH = wellKnownSymbol$1('match');
  var NativeRegExp = global$2.RegExp;
  var RegExpPrototype$1 = NativeRegExp.prototype; // TODO: Use only propper RegExpIdentifierName

  var IS_NCG = /^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/;
  var re1 = /a/g;
  var re2 = /a/g; // "new" should create a new object, old webkit bug

  var CORRECT_NEW = new NativeRegExp(re1) !== re1;
  var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y;
  var BASE_FORCED = DESCRIPTORS$2 && (!CORRECT_NEW || UNSUPPORTED_Y || UNSUPPORTED_DOT_ALL || UNSUPPORTED_NCG || fails$2(function () {
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
          if (groupname === '' || has$2(names, groupname)) {
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

      pattern = pattern === undefined ? '' : toString(pattern);
      flags = flags === undefined ? '' : toString(flags);
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
        createNonEnumerableProperty$1(result, 'source', rawPattern === '' ? '(?:)' : rawPattern);
      } catch (error) {
        /* empty */
      }
      return result;
    };

    var proxy = function proxy(key) {
      key in RegExpWrapper || defineProperty$1(RegExpWrapper, key, {
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
    redefine$2(global$2, 'RegExp', RegExpWrapper);
  } // https://tc39.es/ecma262/#sec-get-regexp-@@species


  setSpecies('RegExp');

  var redefine$1 = require('../internals/redefine');

  var anObject$1 = require('../internals/an-object');

  var $toString$1 = require('../internals/to-string');

  var fails$1 = require('../internals/fails');

  var flags = require('../internals/regexp-flags');

  var TO_STRING = 'toString';
  var RegExpPrototype = RegExp.prototype;
  var nativeToString = RegExpPrototype[TO_STRING];
  var NOT_GENERIC = fails$1(function () {
    return nativeToString.call({
      source: 'a',
      flags: 'b'
    }) != '/a/b';
  }); // FF44- RegExp#toString has a wrong name

  var INCORRECT_NAME = nativeToString.name != TO_STRING; // `RegExp.prototype.toString` method
  // https://tc39.es/ecma262/#sec-regexp.prototype.tostring

  if (NOT_GENERIC || INCORRECT_NAME) {
    redefine$1(RegExp.prototype, TO_STRING, function toString() {
      var R = anObject$1(this);
      var p = $toString$1(R.source);
      var rf = R.flags;
      var f = $toString$1(rf === undefined && R instanceof RegExp && !('flags' in RegExpPrototype) ? flags.call(R) : rf);
      return '/' + p + '/' + f;
    }, {
      unsafe: true
    });
  }

  // `Symbol.prototype.description` getter

  var $$1 = require('../internals/export');

  var DESCRIPTORS$1 = require('../internals/descriptors');

  var global$1 = require('../internals/global');

  var has$1 = require('../internals/has');

  var isObject$1 = require('../internals/is-object');

  var defineProperty = require('../internals/object-define-property').f;

  var copyConstructorProperties = require('../internals/copy-constructor-properties');

  var NativeSymbol = global$1.Symbol;

  if (DESCRIPTORS$1 && typeof NativeSymbol == 'function' && (!('description' in NativeSymbol.prototype) || // Safari 12 bug
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
    defineProperty(symbolPrototype, 'description', {
      configurable: true,
      get: function description() {
        var symbol = isObject$1(this) ? this.valueOf() : this;
        var string = symbolToString.call(symbol);
        if (has$1(EmptyStringDescriptionStore, symbol)) return '';
        var desc = native ? string.slice(7, -1) : string.replace(regexp, '$1');
        return desc === '' ? undefined : desc;
      }
    });
    $$1({
      global: true,
      forced: true
    }, {
      Symbol: SymbolWrapper
    });
  }

  var $ = require('../internals/export');

  var global = require('../internals/global');

  var getBuiltIn = require('../internals/get-built-in');

  var IS_PURE = require('../internals/is-pure');

  var DESCRIPTORS = require('../internals/descriptors');

  var NATIVE_SYMBOL = require('../internals/native-symbol');

  var fails = require('../internals/fails');

  var has = require('../internals/has');

  var isArray = require('../internals/is-array');

  var isObject = require('../internals/is-object');

  var isSymbol = require('../internals/is-symbol');

  var anObject = require('../internals/an-object');

  var toObject = require('../internals/to-object');

  var toIndexedObject = require('../internals/to-indexed-object');

  var toPropertyKey = require('../internals/to-property-key');

  var $toString = require('../internals/to-string');

  var createPropertyDescriptor = require('../internals/create-property-descriptor');

  var nativeObjectCreate = require('../internals/object-create');

  var objectKeys = require('../internals/object-keys');

  var getOwnPropertyNamesModule = require('../internals/object-get-own-property-names');

  var getOwnPropertyNamesExternal = require('../internals/object-get-own-property-names-external');

  var getOwnPropertySymbolsModule = require('../internals/object-get-own-property-symbols');

  var getOwnPropertyDescriptorModule = require('../internals/object-get-own-property-descriptor');

  var definePropertyModule = require('../internals/object-define-property');

  var propertyIsEnumerableModule = require('../internals/object-property-is-enumerable');

  var createNonEnumerableProperty = require('../internals/create-non-enumerable-property');

  var redefine = require('../internals/redefine');

  var shared = require('../internals/shared');

  var sharedKey = require('../internals/shared-key');

  var hiddenKeys = require('../internals/hidden-keys');

  var uid = require('../internals/uid');

  var wellKnownSymbol = require('../internals/well-known-symbol');

  var wrappedWellKnownSymbolModule = require('../internals/well-known-symbol-wrapped');

  var defineWellKnownSymbol = require('../internals/define-well-known-symbol');

  var setToStringTag = require('../internals/set-to-string-tag');

  var InternalStateModule = require('../internals/internal-state');

  var $forEach = require('../internals/array-iteration').forEach;

  var HIDDEN = sharedKey('hidden');
  var SYMBOL = 'Symbol';
  var PROTOTYPE = 'prototype';
  var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');
  var setInternalState = InternalStateModule.set;
  var getInternalState = InternalStateModule.getterFor(SYMBOL);
  var ObjectPrototype = Object[PROTOTYPE];
  var $Symbol = global.Symbol;
  var $stringify = getBuiltIn('JSON', 'stringify');
  var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  var nativeDefineProperty = definePropertyModule.f;
  var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;
  var nativePropertyIsEnumerable = propertyIsEnumerableModule.f;
  var AllSymbols = shared('symbols');
  var ObjectPrototypeSymbols = shared('op-symbols');
  var StringToSymbolRegistry = shared('string-to-symbol-registry');
  var SymbolToStringRegistry = shared('symbol-to-string-registry');
  var WellKnownSymbolsStore = shared('wks');
  var QObject = global.QObject; // Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173

  var USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild; // fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687

  var setSymbolDescriptor = DESCRIPTORS && fails(function () {
    return nativeObjectCreate(nativeDefineProperty({}, 'a', {
      get: function get() {
        return nativeDefineProperty(this, 'a', {
          value: 7
        }).a;
      }
    })).a != 7;
  }) ? function (O, P, Attributes) {
    var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor(ObjectPrototype, P);
    if (ObjectPrototypeDescriptor) delete ObjectPrototype[P];
    nativeDefineProperty(O, P, Attributes);

    if (ObjectPrototypeDescriptor && O !== ObjectPrototype) {
      nativeDefineProperty(ObjectPrototype, P, ObjectPrototypeDescriptor);
    }
  } : nativeDefineProperty;

  var wrap = function wrap(tag, description) {
    var symbol = AllSymbols[tag] = nativeObjectCreate($Symbol[PROTOTYPE]);
    setInternalState(symbol, {
      type: SYMBOL,
      tag: tag,
      description: description
    });
    if (!DESCRIPTORS) symbol.description = description;
    return symbol;
  };

  var $defineProperty = function defineProperty(O, P, Attributes) {
    if (O === ObjectPrototype) $defineProperty(ObjectPrototypeSymbols, P, Attributes);
    anObject(O);
    var key = toPropertyKey(P);
    anObject(Attributes);

    if (has(AllSymbols, key)) {
      if (!Attributes.enumerable) {
        if (!has(O, HIDDEN)) nativeDefineProperty(O, HIDDEN, createPropertyDescriptor(1, {}));
        O[HIDDEN][key] = true;
      } else {
        if (has(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
        Attributes = nativeObjectCreate(Attributes, {
          enumerable: createPropertyDescriptor(0, false)
        });
      }

      return setSymbolDescriptor(O, key, Attributes);
    }

    return nativeDefineProperty(O, key, Attributes);
  };

  var $defineProperties = function defineProperties(O, Properties) {
    anObject(O);
    var properties = toIndexedObject(Properties);
    var keys = objectKeys(properties).concat($getOwnPropertySymbols(properties));
    $forEach(keys, function (key) {
      if (!DESCRIPTORS || $propertyIsEnumerable.call(properties, key)) $defineProperty(O, key, properties[key]);
    });
    return O;
  };

  var $create = function create(O, Properties) {
    return Properties === undefined ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties);
  };

  var $propertyIsEnumerable = function propertyIsEnumerable(V) {
    var P = toPropertyKey(V);
    var enumerable = nativePropertyIsEnumerable.call(this, P);
    if (this === ObjectPrototype && has(AllSymbols, P) && !has(ObjectPrototypeSymbols, P)) return false;
    return enumerable || !has(this, P) || !has(AllSymbols, P) || has(this, HIDDEN) && this[HIDDEN][P] ? enumerable : true;
  };

  var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
    var it = toIndexedObject(O);
    var key = toPropertyKey(P);
    if (it === ObjectPrototype && has(AllSymbols, key) && !has(ObjectPrototypeSymbols, key)) return;
    var descriptor = nativeGetOwnPropertyDescriptor(it, key);

    if (descriptor && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) {
      descriptor.enumerable = true;
    }

    return descriptor;
  };

  var $getOwnPropertyNames = function getOwnPropertyNames(O) {
    var names = nativeGetOwnPropertyNames(toIndexedObject(O));
    var result = [];
    $forEach(names, function (key) {
      if (!has(AllSymbols, key) && !has(hiddenKeys, key)) result.push(key);
    });
    return result;
  };

  var $getOwnPropertySymbols = function getOwnPropertySymbols(O) {
    var IS_OBJECT_PROTOTYPE = O === ObjectPrototype;
    var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject(O));
    var result = [];
    $forEach(names, function (key) {
      if (has(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || has(ObjectPrototype, key))) {
        result.push(AllSymbols[key]);
      }
    });
    return result;
  }; // `Symbol` constructor
  // https://tc39.es/ecma262/#sec-symbol-constructor


  if (!NATIVE_SYMBOL) {
    $Symbol = function Symbol() {
      if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor');
      var description = !arguments.length || arguments[0] === undefined ? undefined : $toString(arguments[0]);
      var tag = uid(description);

      var setter = function setter(value) {
        if (this === ObjectPrototype) setter.call(ObjectPrototypeSymbols, value);
        if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
        setSymbolDescriptor(this, tag, createPropertyDescriptor(1, value));
      };

      if (DESCRIPTORS && USE_SETTER) setSymbolDescriptor(ObjectPrototype, tag, {
        configurable: true,
        set: setter
      });
      return wrap(tag, description);
    };

    redefine($Symbol[PROTOTYPE], 'toString', function toString() {
      return getInternalState(this).tag;
    });
    redefine($Symbol, 'withoutSetter', function (description) {
      return wrap(uid(description), description);
    });
    propertyIsEnumerableModule.f = $propertyIsEnumerable;
    definePropertyModule.f = $defineProperty;
    getOwnPropertyDescriptorModule.f = $getOwnPropertyDescriptor;
    getOwnPropertyNamesModule.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;
    getOwnPropertySymbolsModule.f = $getOwnPropertySymbols;

    wrappedWellKnownSymbolModule.f = function (name) {
      return wrap(wellKnownSymbol(name), name);
    };

    if (DESCRIPTORS) {
      // https://github.com/tc39/proposal-Symbol-description
      nativeDefineProperty($Symbol[PROTOTYPE], 'description', {
        configurable: true,
        get: function description() {
          return getInternalState(this).description;
        }
      });

      if (!IS_PURE) {
        redefine(ObjectPrototype, 'propertyIsEnumerable', $propertyIsEnumerable, {
          unsafe: true
        });
      }
    }
  }

  $({
    global: true,
    wrap: true,
    forced: !NATIVE_SYMBOL,
    sham: !NATIVE_SYMBOL
  }, {
    Symbol: $Symbol
  });
  $forEach(objectKeys(WellKnownSymbolsStore), function (name) {
    defineWellKnownSymbol(name);
  });
  $({
    target: SYMBOL,
    stat: true,
    forced: !NATIVE_SYMBOL
  }, {
    // `Symbol.for` method
    // https://tc39.es/ecma262/#sec-symbol.for
    'for': function _for(key) {
      var string = $toString(key);
      if (has(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
      var symbol = $Symbol(string);
      StringToSymbolRegistry[string] = symbol;
      SymbolToStringRegistry[symbol] = string;
      return symbol;
    },
    // `Symbol.keyFor` method
    // https://tc39.es/ecma262/#sec-symbol.keyfor
    keyFor: function keyFor(sym) {
      if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol');
      if (has(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
    },
    useSetter: function useSetter() {
      USE_SETTER = true;
    },
    useSimple: function useSimple() {
      USE_SETTER = false;
    }
  });
  $({
    target: 'Object',
    stat: true,
    forced: !NATIVE_SYMBOL,
    sham: !DESCRIPTORS
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
  $({
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

  $({
    target: 'Object',
    stat: true,
    forced: fails(function () {
      getOwnPropertySymbolsModule.f(1);
    })
  }, {
    getOwnPropertySymbols: function getOwnPropertySymbols(it) {
      return getOwnPropertySymbolsModule.f(toObject(it));
    }
  }); // `JSON.stringify` method behavior with symbols
  // https://tc39.es/ecma262/#sec-json.stringify

  if ($stringify) {
    var FORCED_JSON_STRINGIFY = !NATIVE_SYMBOL || fails(function () {
      var symbol = $Symbol(); // MS Edge converts symbol values to JSON as {}

      return $stringify([symbol]) != '[null]' // WebKit converts symbol values to JSON as null
      || $stringify({
        a: symbol
      }) != '{}' // V8 throws on boxed symbols
      || $stringify(Object(symbol)) != '{}';
    });
    $({
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
        if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined

        if (!isArray(replacer)) replacer = function replacer(key, value) {
          if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
          if (!isSymbol(value)) return value;
        };
        args[1] = replacer;
        return $stringify.apply(null, args);
      }
    });
  } // `Symbol.prototype[@@toPrimitive]` method
  // https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive


  if (!$Symbol[PROTOTYPE][TO_PRIMITIVE]) {
    createNonEnumerableProperty($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
  } // `Symbol.prototype[@@toStringTag]` property
  // https://tc39.es/ecma262/#sec-symbol.prototype-@@tostringtag


  setToStringTag($Symbol, SYMBOL);
  hiddenKeys[HIDDEN] = true;

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
