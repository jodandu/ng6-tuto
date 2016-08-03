import angular from 'angular';
import uiRouter from 'angular-ui-router';
import tabsComponent from './tabs.component';

let tabsModule = angular.module('tabs', [
  uiRouter
])

.component('tabs', tabsComponent)

.name;

export default tabsModule;
