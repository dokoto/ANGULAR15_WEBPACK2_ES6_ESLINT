import angular from 'angular';
import uiRouter from 'angular-ui-router';

import common from './common/common';
import components from './components/components';
import { AppComponent } from './app.component';
import './app_style.scss';

const root = angular
  .module('ppReddit', [uiRouter, common, components])
  .component('prApp', AppComponent);

document.addEventListener('DOMContentLoaded', () =>
  angular.bootstrap(document, ['ppReddit'])
);

export default root;
