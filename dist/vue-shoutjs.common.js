module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "069b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var alphabet = __webpack_require__("41fa");
var build = __webpack_require__("3df9");
var isValid = __webpack_require__("dd14");

// if you are using cluster or multiple servers use this to make each instance
// has a unique value for worker
// Note: I don't know if this is automatically set when using third
// party cluster solutions such as pm2.
var clusterWorkerId = __webpack_require__("9fc2") || 0;

/**
 * Set the seed.
 * Highly recommended if you don't want people to try to figure out your id schema.
 * exposed as shortid.seed(int)
 * @param seed Integer value to seed the random alphabet.  ALWAYS USE THE SAME SEED or you might get overlaps.
 */
function seed(seedValue) {
    alphabet.seed(seedValue);
    return module.exports;
}

/**
 * Set the cluster worker or machine id
 * exposed as shortid.worker(int)
 * @param workerId worker must be positive integer.  Number less than 16 is recommended.
 * returns shortid module so it can be chained.
 */
function worker(workerId) {
    clusterWorkerId = workerId;
    return module.exports;
}

/**
 *
 * sets new characters to use in the alphabet
 * returns the shuffled alphabet
 */
function characters(newCharacters) {
    if (newCharacters !== undefined) {
        alphabet.characters(newCharacters);
    }

    return alphabet.shuffled();
}

/**
 * Generate unique id
 * Returns string id
 */
function generate() {
  return build(clusterWorkerId);
}

// Export all other functions as properties of the generate function
module.exports = generate;
module.exports.generate = generate;
module.exports.seed = seed;
module.exports.worker = worker;
module.exports.characters = characters;
module.exports.isValid = isValid;


/***/ }),

/***/ "091d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var crypto = typeof window === 'object' && (window.crypto || window.msCrypto); // IE 11 uses window.msCrypto

var randomByte;

if (!crypto || !crypto.getRandomValues) {
    randomByte = function(size) {
        var bytes = [];
        for (var i = 0; i < size; i++) {
            bytes.push(Math.floor(Math.random() * 256));
        }
        return bytes;
    };
} else {
    randomByte = function(size) {
        return crypto.getRandomValues(new Uint8Array(size));
    };
}

module.exports = randomByte;


/***/ }),

/***/ "2350":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "2c25":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Shouter_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cdb1");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Shouter_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Shouter_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Shouter_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "3df9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var generate = __webpack_require__("bd92");
var alphabet = __webpack_require__("41fa");

// Ignore all milliseconds before a certain time to reduce the size of the date entropy without sacrificing uniqueness.
// This number should be updated every year or so to keep the generated id short.
// To regenerate `new Date() - 0` and bump the version. Always bump the version!
var REDUCE_TIME = 1459707606518;

// don't change unless we change the algos or REDUCE_TIME
// must be an integer and less than 16
var version = 6;

// Counter is used when shortid is called multiple times in one second.
var counter;

// Remember the last time shortid was called in case counter is needed.
var previousSeconds;

/**
 * Generate unique id
 * Returns string id
 */
function build(clusterWorkerId) {
    var str = '';

    var seconds = Math.floor((Date.now() - REDUCE_TIME) * 0.001);

    if (seconds === previousSeconds) {
        counter++;
    } else {
        counter = 0;
        previousSeconds = seconds;
    }

    str = str + generate(version);
    str = str + generate(clusterWorkerId);
    if (counter > 0) {
        str = str + generate(counter);
    }
    str = str + generate(seconds);
    return str;
}

module.exports = build;


/***/ }),

/***/ "41fa":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var randomFromSeed = __webpack_require__("7eac");

var ORIGINAL = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-';
var alphabet;
var previousSeed;

var shuffled;

function reset() {
    shuffled = false;
}

function setCharacters(_alphabet_) {
    if (!_alphabet_) {
        if (alphabet !== ORIGINAL) {
            alphabet = ORIGINAL;
            reset();
        }
        return;
    }

    if (_alphabet_ === alphabet) {
        return;
    }

    if (_alphabet_.length !== ORIGINAL.length) {
        throw new Error('Custom alphabet for shortid must be ' + ORIGINAL.length + ' unique characters. You submitted ' + _alphabet_.length + ' characters: ' + _alphabet_);
    }

    var unique = _alphabet_.split('').filter(function(item, ind, arr){
       return ind !== arr.lastIndexOf(item);
    });

    if (unique.length) {
        throw new Error('Custom alphabet for shortid must be ' + ORIGINAL.length + ' unique characters. These characters were not unique: ' + unique.join(', '));
    }

    alphabet = _alphabet_;
    reset();
}

function characters(_alphabet_) {
    setCharacters(_alphabet_);
    return alphabet;
}

function setSeed(seed) {
    randomFromSeed.seed(seed);
    if (previousSeed !== seed) {
        reset();
        previousSeed = seed;
    }
}

function shuffle() {
    if (!alphabet) {
        setCharacters(ORIGINAL);
    }

    var sourceArray = alphabet.split('');
    var targetArray = [];
    var r = randomFromSeed.nextValue();
    var characterIndex;

    while (sourceArray.length > 0) {
        r = randomFromSeed.nextValue();
        characterIndex = Math.floor(r * sourceArray.length);
        targetArray.push(sourceArray.splice(characterIndex, 1)[0]);
    }
    return targetArray.join('');
}

function getShuffled() {
    if (shuffled) {
        return shuffled;
    }
    shuffled = shuffle();
    return shuffled;
}

/**
 * lookup shuffled letter
 * @param index
 * @returns {string}
 */
function lookup(index) {
    var alphabetShuffled = getShuffled();
    return alphabetShuffled[index];
}

function get () {
  return alphabet || ORIGINAL;
}

module.exports = {
    get: get,
    characters: characters,
    seed: setSeed,
    lookup: lookup,
    shuffled: getShuffled
};


/***/ }),

/***/ "499e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesClient.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addStylesClient; });
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ "7a7f":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("2350")(false);
// imports


// module
exports.push([module.i, ".vue-shout-group{display:block;position:fixed;z-index:5000}.vue-shout-wrapper{display:block;overflow:hidden;width:100%;margin:0;padding:0}.vue-shout-title{font-weight:600}.vue-shout-template{background:#fff}.vue-shout,.vue-shout-template{display:block;-webkit-box-sizing:border-box;box-sizing:border-box;text-align:left}.vue-shout{font-size:12px;padding:10px;margin:0 5px 5px;color:#fff;background:#44a4fc;border-left:5px solid #187fe7}.vue-shout.warn{background:#ffb648;border-left-color:#f48a06}.vue-shout.error{background:#e54d42;border-left-color:#b82e24}.vue-shout.success{background:#68cd86;border-left-color:#42a85f}", ""]);

// exports


/***/ }),

/***/ "7eac":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Found this seed-based random generator somewhere
// Based on The Central Randomizer 1.3 (C) 1997 by Paul Houle (houle@msc.cornell.edu)

var seed = 1;

/**
 * return a random number based on a seed
 * @param seed
 * @returns {number}
 */
function getNextValue() {
    seed = (seed * 9301 + 49297) % 233280;
    return seed/(233280.0);
}

function setSeed(_seed_) {
    seed = _seed_;
}

module.exports = {
    nextValue: getNextValue,
    seed: setSeed
};


/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),

/***/ "8dee":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = __webpack_require__("069b");


/***/ }),

/***/ "9fc2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = 0;


/***/ }),

/***/ "bd92":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var alphabet = __webpack_require__("41fa");
var random = __webpack_require__("091d");
var format = __webpack_require__("c903");

function generate(number) {
    var loopCounter = 0;
    var done;

    var str = '';

    while (!done) {
        str = str + format(random, alphabet.get(), 1);
        done = number < (Math.pow(16, loopCounter + 1 ) );
        loopCounter++;
    }
    return str;
}

module.exports = generate;


/***/ }),

/***/ "c903":
/***/ (function(module, exports) {

/**
 * Secure random string generator with custom alphabet.
 *
 * Alphabet must contain 256 symbols or less. Otherwise, the generator
 * will not be secure.
 *
 * @param {generator} random The random bytes generator.
 * @param {string} alphabet Symbols to be used in new random string.
 * @param {size} size The number of symbols in new random string.
 *
 * @return {string} Random string.
 *
 * @example
 * const format = require('nanoid/format')
 *
 * function random (size) {
 *   const result = []
 *   for (let i = 0; i < size; i++) {
 *     result.push(randomByte())
 *   }
 *   return result
 * }
 *
 * format(random, "abcdef", 5) //=> "fbaef"
 *
 * @name format
 * @function
 */
module.exports = function (random, alphabet, size) {
  var mask = (2 << Math.log(alphabet.length - 1) / Math.LN2) - 1
  var step = Math.ceil(1.6 * mask * size / alphabet.length)

  var id = ''
  while (true) {
    var bytes = random(step)
    for (var i = 0; i < step; i++) {
      var byte = bytes[i] & mask
      if (alphabet[byte]) {
        id += alphabet[byte]
        if (id.length === size) return id
      }
    }
  }
}

/**
 * @callback generator
 * @param {number} bytes The number of bytes to generate.
 * @return {number[]} Random bytes.
 */


/***/ }),

/***/ "cdb1":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("7a7f");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("2c104df8", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "dd14":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var alphabet = __webpack_require__("41fa");

function isShortId(id) {
    if (!id || typeof id !== 'string' || id.length < 6 ) {
        return false;
    }

    var nonAlphabetic = new RegExp('[^' +
      alphabet.get().replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&') +
    ']');
    return !nonAlphabetic.test(id);
}

module.exports = isShortId;


/***/ }),

/***/ "f6fd":
/***/ (function(module, exports) {

// document.currentScript polyfill by Adam Miller

// MIT license

(function(document){
  var currentScript = "currentScript",
      scripts = document.getElementsByTagName('script'); // Live NodeList collection

  // If browser needs currentScript polyfill, add get currentScript() to the document object
  if (!(currentScript in document)) {
    Object.defineProperty(document, currentScript, {
      get: function(){

        // IE 6-10 supports script readyState
        // IE 10+ support stack trace
        try { throw new Error(); }
        catch (err) {

          // Find the second match for the "at" string to get file src url from stack.
          // Specifically works with the format of stack traces in IE.
          var i, res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];

          // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
          for(i in scripts){
            if(scripts[i].src == res || scripts[i].readyState == "interactive"){
              return scripts[i];
            }
          }

          // If no match, return null
          return null;
        }
      }
    });
  }
})(document);


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __webpack_require__("f6fd")
  }

  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2b11e2a0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Shouter.vue?vue&type=template&id=a23131e8&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vue-shout-group",style:(_vm.styles)},[_c('velocity',{on:{"enter":_vm.enter,"leave":_vm.leave,"after-leave":_vm.clean}},_vm._l((_vm.active),function(item){return _c('div',{key:item.id,staticClass:"vue-shout-wrapper",attrs:{"data-id":item.id}},[_vm._t("body",[_c('div',{class:_vm.notifyClass(item),on:{"click":function($event){return _vm.destroyIfNecessary(item)}}},[(item.title)?_c('div',{staticClass:"vue-shout-title",domProps:{"innerHTML":_vm._s(item.title)}}):_vm._e(),_c('div',{staticClass:"vue-shout-content",domProps:{"innerHTML":_vm._s(item.text)}})])],{"item":item,"close":function () { return _vm.destroy(item); }})],2)}),0)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/Shouter.vue?vue&type=template&id=a23131e8&

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");
var external_commonjs_vue_commonjs2_vue_root_Vue_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_vue_commonjs2_vue_root_Vue_);

// CONCATENATED MODULE: ./src/eventBus.js

var eventBus = new external_commonjs_vue_commonjs2_vue_root_Vue_default.a();
// CONCATENATED MODULE: ./src/js/util.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var directions = {
  x: ['left', 'center', 'right'],
  y: ['top', 'bottom']
};
var floatRegexp = '[-+]?[0-9]*.?[0-9]+';
var types = [{
  name: 'px',
  regexp: new RegExp("^".concat(floatRegexp, "px$"))
}, {
  name: '%',
  regexp: new RegExp("^".concat(floatRegexp, "%$"))
},
/**
 * Fallback optopn
 * If no suffix specified, assigning "px"
 */
{
  name: 'px',
  regexp: new RegExp("^".concat(floatRegexp, "$"))
}];

var getType = function getType(value) {
  if (value === 'auto') {
    return {
      type: value,
      value: 0
    };
  }

  for (var i = 0; i < types.length; i++) {
    var type = types[i];

    if (type.regexp.test(value)) {
      return {
        type: type.name,
        value: parseFloat(value)
      };
    }
  }

  return {
    type: '',
    value: value
  };
};

var split = function split(value) {
  if (typeof value !== 'string') {
    return [];
  }

  return value.split(/\s+/gi).filter(function (v) {
    return v;
  });
};

var listToDirection = function listToDirection(value) {
  if (typeof value === 'string') {
    value = split(value);
  }

  var x = null;
  var y = null;
  value.forEach(function (v) {
    if (directions.y.includes(v)) {
      y = v;
    }

    if (directions.x.includes(v)) {
      x = v;
    }
  });
  return {
    x: x,
    y: y
  };
};
var parseNumericValue = function parseNumericValue(value) {
  switch (_typeof(value)) {
    case 'number':
      return {
        type: 'px',
        value: value
      };

    case 'string':
      return getType(value);

    default:
      return {
        type: '',
        value: value
      };
  }
};
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2b11e2a0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Velocity.vue?vue&type=template&id=aa2eebae&
var Velocityvue_type_template_id_aa2eebae_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition-group',{attrs:{"css":false},on:{"enter":_vm.enter,"leave":_vm.leave,"after-leave":_vm.afterLeave}},[_vm._t("default")],2)}
var Velocityvue_type_template_id_aa2eebae_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Velocity.vue?vue&type=template&id=aa2eebae&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Velocity.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Velocityvue_type_script_lang_js_ = ({
  name: 'VelocityGroup',
  methods: {
    enter: function enter(el, complete) {
      this.$emit('enter', {
        el: el,
        complete: complete
      });
    },
    leave: function leave(el, complete) {
      this.$emit('leave', {
        el: el,
        complete: complete
      });
    },
    afterLeave: function afterLeave() {
      this.$emit('afterLeave');
    }
  }
});
// CONCATENATED MODULE: ./src/components/Velocity.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Velocityvue_type_script_lang_js_ = (Velocityvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/components/Velocity.vue





/* normalize component */

var component = normalizeComponent(
  components_Velocityvue_type_script_lang_js_,
  Velocityvue_type_template_id_aa2eebae_render,
  Velocityvue_type_template_id_aa2eebae_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Velocity = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Shouter.vue?vue&type=script&lang=js&
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




var STATE = {
  IDLE: 0,
  DESTROYED: 2
};
/* harmony default export */ var Shoutervue_type_script_lang_js_ = ({
  name: 'Shout',
  components: {
    Velocity: Velocity
  },
  props: {
    group: {
      type: String,
      default: function _default() {
        return main.defaults.group;
      }
    },
    width: {
      type: [Number, String],
      default: function _default() {
        return main.defaults.width;
      }
    },
    reverse: {
      type: Boolean,
      default: function _default() {
        return main.defaults.reverse;
      }
    },
    position: {
      type: [String, Array],
      default: function _default() {
        return main.defaults.position;
      }
    },
    classes: {
      type: String,
      default: function _default() {
        return main.defaults.classes;
      }
    },
    animation: {
      type: Object,
      default: function _default() {
        return main.defaults.velocityAnimation;
      }
    },
    speed: {
      type: Number,
      default: function _default() {
        return main.defaults.speed;
      }
    },
    duration: {
      type: Number,
      default: function _default() {
        return main.defaults.duration;
      }
    },
    delay: {
      type: Number,
      default: function _default() {
        return main.defaults.delay;
      }
    },
    max: {
      type: Number,
      default: function _default() {
        return main.defaults.max;
      }
    },
    ignoreDuplicates: {
      type: Boolean,
      default: function _default() {
        return main.defaults.ignoreDuplicates;
      }
    },
    closeOnClick: {
      type: Boolean,
      default: function _default() {
        return main.defaults.closeOnClick;
      }
    },
    sync: {
      type: Boolean,
      default: function _default() {
        return main.defaults.sync;
      }
    },
    queue: {
      type: [String, Boolean],
      default: function _default() {
        return main.defaults.queue;
      }
    }
  },
  data: function data() {
    return {
      list: [],
      velocity: main.defaults.velocity
    };
  },
  computed: {
    actualWidth: function actualWidth() {
      return parseNumericValue(this.width);
    },
    styles: function styles() {
      var _listToDirection = listToDirection(this.position),
          x = _listToDirection.x,
          y = _listToDirection.y;

      var width = this.actualWidth.value;
      var suffix = this.actualWidth.type;

      var styles = _defineProperty({
        width: width + suffix
      }, y, '0px');

      if (x === 'center') {
        styles.left = "calc(50% - ".concat(width / 2).concat(suffix, ")");
      } else {
        styles[x] = '0px';
      }

      return styles;
    },
    active: function active() {
      return this.list.filter(function (v) {
        return v.state !== STATE.DESTROYED;
      });
    },
    botToTop: function botToTop() {
      return this.styles.hasOwnProperty('bottom');
    }
  },
  mounted: function mounted() {
    eventBus.$on('shout:show', this.shout);
    eventBus.$on('shout:destroy:id', this.destroyById);
    eventBus.$on('shout:destroy:all', this.destroyAll);
  },
  beforeDestroy: function beforeDestroy() {
    eventBus.$off('shout:show', this.shout);
    eventBus.$off('shout:destroy:id', this.destroyById);
    eventBus.$off('shout:destroy:all', this.destroyAll);
  },
  methods: {
    destroyIfNecessary: function destroyIfNecessary(item) {
      if (this.closeOnClick) {
        this.destroy(item);
      }
    },
    shout: function shout(event) {
      var _this = this;

      event.group = event.group || '';

      if (this.group !== event.group) {
        return;
      }

      if (event.clean || event.clear) {
        this.destroyAll();
        return;
      }

      var duration = typeof event.duration === 'number' ? event.duration : this.duration;
      var speed = typeof event.speed === 'number' ? event.speed : this.speed;
      var title = event.title,
          text = event.text,
          type = event.type,
          data = event.data,
          id = event.id;
      var item = {
        id: id,
        title: title,
        text: text,
        type: type,
        state: STATE.IDLE,
        speed: speed,
        length: duration + 2 * speed,
        data: data
      };

      if (duration >= 0) {
        item.timer = setTimeout(function () {
          _this.destroy(item);
        }, item.length);
      }

      var direction = this.reverse ? !this.botToTop : this.botToTop;
      var indexToDestroy = -1;
      var isDuplicate = Boolean(this.active.find(function (shoutItem) {
        return shoutItem.title === event.title && shoutItem.text === event.text;
      }));
      var canAdd = this.ignoreDuplicates ? !isDuplicate : true;
      if (!canAdd) return;

      if (direction) {
        this.list.push(item);

        if (this.active.length > this.max) {
          indexToDestroy = 0;
        }
      } else {
        this.list.unshift(item);

        if (this.active.length > this.max) {
          indexToDestroy = this.active.length - 1;
        }
      }

      if (indexToDestroy !== -1) {
        this.destroy(this.active[indexToDestroy]);
      }
    },
    notifyClass: function notifyClass(item) {
      return ['vue-shout-template', this.classes, item.type];
    },
    destroy: function destroy(item) {
      clearTimeout(item.timer);
      item.state = STATE.DESTROYED;
    },
    destroyById: function destroyById(id) {
      var item = this.items.find(function (v) {
        return v.id === id;
      });

      if (item) {
        this.destroy(item);
      }
    },
    destroyAll: function destroyAll() {
      this.active.forEach(this.destroy);
    },
    getAnimation: function getAnimation(index, el) {
      var animation = this.animation[index];
      return typeof animation === 'function' ? animation.call(this, el) : animation;
    },
    enter: function enter(_ref) {
      var el = _ref.el,
          complete = _ref.complete;
      var animation = this.getAnimation('enter', el);
      this.velocity(el, animation, {
        queue: this.queue,
        sync: this.sync,
        duration: this.speed,
        complete: complete
      });
    },
    leave: function leave(_ref2) {
      var el = _ref2.el,
          complete = _ref2.complete;
      var animation = this.getAnimation('leave', el);
      this.velocity(el, animation, {
        queue: this.queue,
        sync: this.sync,
        duration: this.speed,
        complete: complete
      });
    }
  }
});
// CONCATENATED MODULE: ./src/Shouter.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_Shoutervue_type_script_lang_js_ = (Shoutervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/Shouter.vue?vue&type=style&index=0&lang=css&
var Shoutervue_type_style_index_0_lang_css_ = __webpack_require__("2c25");

// CONCATENATED MODULE: ./src/Shouter.vue






/* normalize component */

var Shouter_component = normalizeComponent(
  src_Shoutervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Shouter = (Shouter_component.exports);
// EXTERNAL MODULE: ./node_modules/shortid/index.js
var shortid = __webpack_require__("8dee");

// CONCATENATED MODULE: ./src/js/shouted.js
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var shouted_Shout =
/*#__PURE__*/
function () {
  function Shout(options) {
    _classCallCheck(this, Shout);

    this.options = options;
  }

  _createClass(Shout, [{
    key: "isHidden",
    value: function isHidden() {
      if ('hidden' in document) {
        return document.hidden;
      }

      return document.visibilityState === 'hidden';
    }
  }, {
    key: "show",
    value: function show() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      if (!this.options.triggerOnHidden && this.isHidden()) return;

      if (typeof options.text !== 'string') {
        throw new Error('options.text is a required string');
      }

      options.id = options.id || shortid["generate"]();
      options = Object.assign({}, this.options, options);
      eventBus.$emit('shout:show', options);
    }
  }, {
    key: "destroyId",
    value: function destroyId(id) {
      if (!this.options.triggerOnHidden && this.isHidden()) return;

      if (typeof id === 'undefined') {
        throw new Error('id is a required string');
      }

      eventBus.$emit('shout:destroy:id', {
        id: id
      });
    }
  }, {
    key: "destroyAll",
    value: function destroyAll() {
      if (!this.options.triggerOnHidden && this.isHidden()) return;
      eventBus.$emit('shout:destroy:all');
    }
  }]);

  return Shout;
}();

/* harmony default export */ var shouted = (shouted_Shout);
// CONCATENATED MODULE: ./src/js/default.js
/* harmony default export */ var js_default = ({
  width: 300,
  group: 'shout',
  reverse: false,
  position: ['top', 'right'],
  classes: 'vue-shout',
  speed: 300,
  duration: 3000,
  delay: 0,
  max: Infinity,
  ignoreDuplicates: false,
  closeOnClick: true,
  triggerOnHidden: false,
  sync: false,
  queue: false,
  velocityAnimation: {
    enter: function enter(el) {
      var height = el.clientHeight;
      return {
        height: [height, 0],
        opacity: [1, 0]
      };
    },
    leave: {
      height: 0,
      opacity: [0, 1]
    }
  }
});
// CONCATENATED MODULE: ./src/main.js



var ShoutJs = {
  install: function install(Vue, options) {
    if (typeof options.velocity === 'undefined') {
      throw new Error('Missing velocity-animate module. please add to options');
    }

    this.defaults = Object.assign({}, js_default, options);
    var shout = new shouted(this.defaults);
    Vue.component('vue-shout', Shouter); // eslint-disable-next-line no-param-reassign, no-multi-assign

    Vue.shout = Vue.prototype.$shout = shout;
  }
}; // register plugin if it is used via cdn or directly as a script tag

if (typeof window !== 'undefined' && window.Vue) {
  window.ShoutJs = ShoutJs;
}

/* harmony default export */ var main = (ShoutJs);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (main);



/***/ })

/******/ })["default"];