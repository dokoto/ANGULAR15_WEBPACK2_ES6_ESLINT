import RedditItemController from './reddit-item.controller';

export const RedditItemComponent = {
  bindings: {
    picture: '<'
  },
  controller: RedditItemController,
  template: () => {
    return `
          <li class="reddit-item" data-item={{$ctrl.picture.id}} ng-click="$ctrl.onClick();">
            <a href={{$ctrl.picture.original}} className='source-ref'>
                <img
                className='image'
                alt={{$ctrl.picture.description}}
                src={{$ctrl.picture.thumb}}
                width={{$ctrl.resolveSize();}}
                />
            </a>
          </li>`;
  }
};
