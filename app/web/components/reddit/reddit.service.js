import Snoowrap from 'snoowrap';
import Conf from '../../../../.appconf.json';

export default class RedditService {
  constructor() {
    this.connector = new Snoowrap({
      userAgent: Conf.REDDIT.userAgent,
      clientId: Conf.REDDIT.clientId,
      clientSecret: Conf.REDDIT.clientSecret,
      username: Conf.REDDIT.username,
      password: Conf.REDDIT.password
    });
  }

  getSubreddit(subreddit) {
    const count = 0;
    return new Promise((accept, reject) => {
      this.connector.getSubreddit(subreddit).getHot({ count }).then(items => {
        if (!items || !items.length) reject();
        const processItems = items.map(item => {
          if (!item.preview || item.distinguished || item.link_flair_text) return null;
          let thumb = item.preview.images[0].resolutions
            .reverse()
            .filter(image => Math.trunc(screen.width / image.width) === 3);

          if (!thumb || thumb.length === 0) {
            thumb = item.preview.images[0].resolutions;
          }
          thumb = thumb[0];

          try {
            return {
              thumb: thumb.url,
              original: item.url,
              description: item.title,
              id: item.subreddit_id
            };
          } catch (err) {
            console.warn(`${err}`);
            console.warn(`${thumb}`);
            return {
              thumb:
                'https://cdn1.iconfinder.com/data/icons/rounded-flat-country-flag-collection-1/2000/_Unknown.png',
              original:
                'https://cdn1.iconfinder.com/data/icons/rounded-flat-country-flag-collection-1/2000/_Unknown.png',
              description: 'unknow',
              id: 'unknow'
            };
          }
        });
        accept(processItems.filter(item => item !== null));
        // const image = new Image();
        // image.src = items[0].preview.images[0].resolutions[4].url;
      });
    });
  }
}
