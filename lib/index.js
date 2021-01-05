'use strict';

var innet = require('innet');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var innet__default = /*#__PURE__*/_interopDefaultLegacy(innet);

function portal(target, parent, plugins, plugin) {
    innet__default['default'](target.children, target.props.parent, plugins, plugin);
}

module.exports = portal;
