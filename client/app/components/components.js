import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import Tabs from './tabs/tabs';
import Tab from './tab/tab';

let componentModule = angular.module('app.components', [
  Home,
  About,
  Tabs,
  Tab
])

.name;

export default componentModule;
