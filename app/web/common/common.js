import angular from 'angular';
import { HeaderComponent } from './header.component';
import { FooterComponent } from './footer.component';

const common = angular
  .module('app.common', [])
  .component('prHeader', HeaderComponent)
  .component('prFooter', FooterComponent).name;

export default common;
