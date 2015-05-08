'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

'use strict';

var someClass = (function () {
  function someClass(name, age) {
    _classCallCheck(this, someClass);

    this.name = name;
    this.age = age;
  }

  _createClass(someClass, [{
    key: 'sayName',
    value: function sayName() {
      console.log(this.name);
    }
  }, {
    key: 'sayAge',
    value: function sayAge() {
      console.log(this.age);
    }
  }]);

  return someClass;
})();

exports['default'] = someClass;
;
module.exports = exports['default'];