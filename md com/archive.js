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

var MdArchive = function MdArchive(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm8.5 8.4h23l-1.6-1.8h-20z m11.5 20.7l9.1-9.1h-5.7v-3.4h-6.8v3.4h-5.7z m14.2-20.3c0.5 0.5 0.8 1.3 0.8 2.1v20.7c0 1.8-1.6 3.4-3.4 3.4h-23.2c-1.8 0-3.4-1.6-3.4-3.4v-20.7c0-0.8 0.3-1.6 0.8-2.1l2.2-2.9c0.5-0.5 1.2-0.9 2-0.9h20c0.8 0 1.5 0.4 2 0.9z' })
        )
    );
};

exports.default = MdArchive;
module.exports = exports['default'];