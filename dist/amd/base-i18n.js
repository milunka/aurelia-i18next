define(['exports', './i18n', 'aurelia-event-aggregator'], function (exports, _i18n, _aureliaEventAggregator) {
  'use strict';

  var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var BaseI18N = (function () {
    function BaseI18N(i18n, element, ea) {
      var _this = this;

      _classCallCheck(this, BaseI18N);

      this.i18n = i18n;
      this.element = element;

      ea.subscribe('i18n:locale:changed', function (payload) {
        _this.i18n.updateTranslations(_this.element);
      });
    }

    _createClass(BaseI18N, [{
      key: 'attached',
      value: function attached() {
        this.i18n.updateTranslations(this.element);
      }
    }], [{
      key: 'inject',
      value: [_i18n.I18N, Element, _aureliaEventAggregator.EventAggregator],
      enumerable: true
    }]);

    return BaseI18N;
  })();

  exports.BaseI18N = BaseI18N;
});