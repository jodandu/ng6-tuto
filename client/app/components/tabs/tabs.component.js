import template from './tabs.html';
import controller from './tabs.controller';
import './tabs.styl';

let tabsComponent = {
  restrict: 'E',
  bindings: {},
  require: {},
  template,
  controller,
  transclude: true
};

export default tabsComponent;
