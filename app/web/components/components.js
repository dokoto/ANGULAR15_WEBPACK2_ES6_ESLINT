import angular from 'angular';
import reddit from './reddit';

const components = angular.module('app.components', [reddit]).name;

export default components;
