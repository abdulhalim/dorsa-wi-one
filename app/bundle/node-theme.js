/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(1)
	if (Object.keys(__vue_script__).some(function (key) { return key !== "default" && key !== "__esModule" })) {
	  console.warn("[vue-loader] app\\components\\node-theme.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(2)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-557f9234/node-theme.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	'use strict';

	module.exports = {

	    section: {
	        label: 'Theme',
	        priority: 90
	    },

	    props: ['node']

	};

	window.Site.components['node-theme'] = module.exports;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	module.exports = "\n\n<div class=\"uk-form-horizontal\">\n\n    <template v-if=\"node.type === 'page'\">\n        <div class=\"uk-form-row\">\n            <span class=\"uk-form-label\">{{ 'Title' | trans }}</span>\n            <div class=\"uk-form-controls uk-form-controls-text\">\n                <label><input type=\"checkbox\" v-model=\"node.theme.title_hide\"> {{ 'Hide Title' | trans }}</label>\n            </div>\n        </div>\n\n        <div class=\"uk-form-row\">\n            <span class=\"uk-form-label\">{{ 'Title Size' | trans }}</span>\n            <div class=\"uk-form-controls uk-form-controls-text\">\n                <label><input type=\"checkbox\" v-model=\"node.theme.title_large\"> {{ 'Extra large title.' | trans }}</label>\n            </div>\n        </div>\n\n        <div class=\"uk-form-row\">\n            <span class=\"uk-form-label\">{{ 'Alignment' | trans }}</span>\n            <div class=\"uk-form-controls uk-form-controls-text\">\n                <label><input type=\"checkbox\" v-model=\"node.theme.alignment\"> {{ 'Center the title and content.' | trans }}</label>\n            </div>\n        </div>\n    </template>\n\n    <div class=\"uk-form-row\">\n        <label for=\"form-class\" class=\"uk-form-label\">{{ 'HTML Class' | trans }}</label>\n        <div class=\"uk-form-controls\">\n            <input id=\"form-class\" class=\"uk-form-width-large\" type=\"text\" v-model=\"node.theme.html_class\">\n        </div>\n    </div>\n\n    <div class=\"uk-form-row\">\n        <span class=\"uk-form-label\">{{ 'Sidebar' | trans }}</span>\n        <div class=\"uk-form-controls uk-form-controls-text\">\n            <label><input type=\"checkbox\" v-model=\"node.theme.sidebar_first\"> {{ 'Show the sidebar before the content.' | trans }}</label>\n        </div>\n    </div>\n\n    <div class=\"uk-form-row\">\n        <label class=\"uk-form-label\">Hero {{ 'Position' | trans }}</label>\n        <div class=\"uk-form-controls uk-form-controls-text\">\n            <p class=\"uk-form-controls-condensed\">\n                <label><input type=\"checkbox\" v-model=\"node.theme.hero_viewport\"> {{ 'Full viewport height' | trans }}</label>\n            </p>\n            <p class=\"uk-form-controls-condensed\">\n                <label><input type=\"checkbox\" v-model=\"node.theme.hero_contrast\"> {{ 'Invert colors' | trans }}</label>\n            </p>\n            <p class=\"uk-form-controls-condensed\">\n                <label><input type=\"checkbox\" v-model=\"node.theme.navbar_transparent\"> {{ 'Transparent navbar as overlay' | trans }}</label>\n            </p>\n            <p class=\"uk-form-controls-condensed uk-margin-bottom\">\n                <label><input type=\"checkbox\" v-model=\"node.theme.hero_parallax\"> {{ 'Enable parallax effect' | trans }}</label>\n            </p>\n            <p class=\"uk-form-controls-condensed uk-form-width-large\"><input-image :source.sync=\"node.theme.hero_image\"></input-image></p>\n            <p class=\"uk-form-help-block\">{{ 'Select a background image for the hero position.' | trans }}</p>\n        </div>\n    </div>\n\n    <div class=\"uk-form-row\">\n        <label for=\"form-top-style\" class=\"uk-form-label\">Top {{ 'Position' | trans }}</label>\n        <div class=\"uk-form-controls\">\n            <select id=\"form-top-style\" class=\"uk-form-width-large\" v-model=\"node.theme.top_style\">\n                <option value=\"uk-block-default\">{{ 'Default' | trans }}</option>\n                <option value=\"uk-block-muted\">{{ 'Muted' | trans }}</option>\n            </select>\n        </div>\n    </div>\n\n    <div class=\"uk-form-row\">\n        <label for=\"form-main-style\" class=\"uk-form-label\">Main {{ 'Position' | trans }}</label>\n        <div class=\"uk-form-controls\">\n            <select id=\"form-main-style\" class=\"uk-form-width-large\" v-model=\"node.theme.main_style\">\n                <option value=\"uk-block-default\">{{ 'Default' | trans }}</option>\n                <option value=\"uk-block-muted\">{{ 'Muted' | trans }}</option>\n            </select>\n        </div>\n    </div>\n\n    <div class=\"uk-form-row\">\n        <label for=\"form-bottom-style\" class=\"uk-form-label\">Bottom {{ 'Position' | trans }}</label>\n        <div class=\"uk-form-controls\">\n            <select id=\"form-bottom-style\" class=\"uk-form-width-large\" v-model=\"node.theme.bottom_style\">\n                <option value=\"uk-block-default\">{{ 'Default' | trans }}</option>\n                <option value=\"uk-block-muted\">{{ 'Muted' | trans }}</option>\n            </select>\n            <p class=\"uk-form-help-block uk-margin\">{{ 'Note: Position settings only work if you publish a widget in that position.' | trans }}</p>\n        </div>\n    </div>\n\n</div>\n\n";

/***/ })
/******/ ]);