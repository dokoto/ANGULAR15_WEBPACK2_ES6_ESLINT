export default class RedditItemController {
  onClick() {
    const tt = this.data;
    console.log(`User click in li ${tt}`);
  }

  resolveSize() {
    return screen.width;
  }
}
