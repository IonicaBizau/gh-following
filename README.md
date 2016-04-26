
# gh-following [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![Version](https://img.shields.io/npm/v/gh-following.svg)](https://www.npmjs.com/package/gh-following) [![Downloads](https://img.shields.io/npm/dt/gh-following.svg)](https://www.npmjs.com/package/gh-following) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> Fetches the users you follow but they don't follow you and the users that follow you but you don't.

## :cloud: Installation

```sh
$ npm i --save gh-following
```


## :clipboard: Example



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

## :memo: Documentation


### `ghFollowing(username, token, callback)`

#### Params
- **String** `username`: The GitHub username.
- **String** `token`: An optional token.
- **Function** `callback`: The callback function.

#### Return
- **gh.js** The `gh.js` instance.



## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].


## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2013#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
