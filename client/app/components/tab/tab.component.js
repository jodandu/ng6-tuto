import template from './tab.html';
import controller from './tab.controller';
import './tab.styl';

let tabComponent = {
  restrict: 'E',
  bindings: {
    label: '@'
  },
  require: {
    tabs: '^^tabs'
  },
  template,
  controller,
  transclude: true
};
export default tabComponent;
