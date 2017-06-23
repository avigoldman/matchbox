'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactIconBase = require('react-icon-base');

var _reactIconBase2 = _interopRequireDefault(_reactIconBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MdDateRange = function MdDateRange(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm31.6 33.4v-18.4h-23.2v18.4h23.2z m0-26.8c1.8 0 3.4 1.6 3.4 3.4v23.4c0 1.8-1.6 3.2-3.4 3.2h-23.2c-1.9 0-3.4-1.4-3.4-3.2v-23.4c0-1.8 1.5-3.4 3.4-3.4h1.6v-3.2h3.4v3.2h13.2v-3.2h3.4v3.2h1.6z m-3.2 11.8v3.2h-3.4v-3.2h3.4z m-6.8 0v3.2h-3.2v-3.2h3.2z m-6.6 0v3.2h-3.4v-3.2h3.4z' })
        )
    );
};

exports.default = MdDateRange;
module.exports = exports['default'];