import angular from 'angular';
import uiRouter from 'angular-ui-router';
import tabComponent from './tab.component';

let tabModule = angular.module('tab', [
  uiRouter
])

.component('tab', tabComponent)

.name;

export default tabModule;
