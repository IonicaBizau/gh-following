# gh-following [![Support this project][donate-now]][paypal-donations]

Fetches the users you follow but they don't follow you and the users that follow you but you don't.

## Installation

```sh
$ npm i --save gh-following
```

## Example

```js
const ghFollowing = require("gh-following");

ghFollowing("ionicabizau", (err, data) => {
    if (err) { return console.error(err); }
    console.log("You follow them, but they don't follow you");
    console.log(data[0].map(c => c.login));
    // => [...]

    console.log("They follow you, but you don't follow them");
    console.log(data[1].map(c => c.login));
    // => [...]
});
```

## Documentation

### `ghFollowing(username, token, callback)`

#### Params
- **String** `username`: The GitHub username.
- **String** `token`: An optional token.
- **Function** `callback`: The callback function.

#### Return
- **gh.js** The `gh.js` instance.

## How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:

## License

[MIT][license] © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2013#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
