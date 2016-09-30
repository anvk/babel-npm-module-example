'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DEFAULT_OCCUPATION = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _person = require('./person');

var _person2 = _interopRequireDefault(_person);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* global console */

var DEFAULT_OCCUPATION = exports.DEFAULT_OCCUPATION = 'JavaScript Developer';

var Developer = function (_Person) {
  _inherits(Developer, _Person);

  function Developer(name, age) {
    var occupation = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : DEFAULT_OCCUPATION;

    _classCallCheck(this, Developer);

    var _this = _possibleConstructorReturn(this, (Developer.__proto__ || Object.getPrototypeOf(Developer)).call(this, name, age));

    _this.occupation = occupation;
    return _this;
  }

  _createClass(Developer, [{
    key: 'sayWhoAmI',
    value: function sayWhoAmI() {
      console.log(this.getWhoAmI());
    }
  }, {
    key: 'getWhoAmI',
    value: function getWhoAmI() {
      return this.name + ' ' + this.occupation;
    }
  }]);

  return Developer;
}(_person2.default);

exports.default = Developer;