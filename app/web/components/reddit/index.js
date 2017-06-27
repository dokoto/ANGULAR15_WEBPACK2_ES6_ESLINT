import angular from 'angular';

import { RedditListComponent } from './reddit-list.component';
import { RedditItemComponent } from './reddit-item.component';
import RedditService from './reddit.service';
import './reddit_style.scss';

const reddit = angular
  .module('reddit', [])
  .service('RedditService', RedditService)
  .component('redditList', RedditListComponent)
  .component('redditItem', RedditItemComponent)
  .config(($stateProvider, $urlRouterProvider) => {
    $stateProvider.state('subreddits', {
      url: '/',
      component: 'redditList',
      resolve: {
        subreddits: RedditService =>
          RedditService.getSubreddit('Pizza').then(items => items)
      }
    });
    $urlRouterProvider.otherwise('/');
  }).name;

export default reddit;
