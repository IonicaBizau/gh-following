const GitHub = require("gh.js")
    , sameTime = require("same-time")
    , iterateObject = require("iterate-object")
    ;

/**
 * ghFollowing
 *
 * @name ghFollowing
 * @function
 * @param {String} username The GitHub username.
 * @param {String} token An optional token.
 * @param {Function} callback The callback function.
 * @return {gh.js} The `gh.js` instance.
 */
function ghFollowing(username, token, callback) {

    if (typeof token === "function") {
        callback = token;
        token = null;
    }

    var result = [
            [ /* you follow them, but they don't follow you */ ]
          , [ /* you don't follow them, but they follow you */ ]
        ]
      , gh = new GitHub({ token: token })
      ;

    sameTime([
        done => gh.get(`users/${username}/followers`, { all: true }, done)
      , done => gh.get(`users/${username}/following`, { all: true }, done)
    ], (err, data) => {

        if (err) { return callback(err); }

        var followers = {}
          , following = {}
          ;

        // Get the followers
        data[0].forEach(c => {
            followers[c.login] = c;
        });

        // Filter the following
        data[1].forEach(c => {
            following[c.login] = c;
        });

        // Check the followers and following
        iterateObject(following, (cFollowing, login) => {
            if (followers[login]) { return; }
            result[0].push(cFollowing);
        });

        iterateObject(followers, (cFollower, login) => {
            if (following[login]) { return; }
            result[1].push(cFollower);
        });

        callback(null, result);
    });
}

module.exports = ghFollowing;
