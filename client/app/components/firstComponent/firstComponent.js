import angular from 'angular';
import uiRouter from 'angular-ui-router';
import firstComponentComponent from './firstComponent.component';

let firstComponentModule = angular.module('firstComponent', [
  uiRouter
])

.component('firstComponent', firstComponentComponent)

.name;

export default firstComponentModule;
