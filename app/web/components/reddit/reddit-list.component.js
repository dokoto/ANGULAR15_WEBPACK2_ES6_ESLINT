import controller from './reddit-list.controller';

export const RedditListComponent = {
  bindings: {
    subreddits: '<'
  },
  controller,
  template: `
        <ul class='reddit-list'>
            <reddit-item ng-repeat="subreddit in $ctrl.subreddits" picture="subreddit">
            </reddit-item>
        </ul>
        `
};
