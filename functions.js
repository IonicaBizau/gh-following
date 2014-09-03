var USERNAME = "mariwahl";

var FOLLOWERS_URL = "https://api.github.com/users/" + USERNAME + "/followers?per_page=100";
var FOLLOWING_URL = "https://api.github.com/users/" + USERNAME + "/following?per_page=100";

function getAll(url, callback) {
    var all = [];
    function seq(p) {
        $.getJSON(url + "&page=" + p, function (data) {
            if (!data.length) { return callback(all); }
            all = all.concat(data);
            seq(p + 1);
        });
    }
    seq(1);
}

getAll(FOLLOWERS_URL, function (data) {
    var followers = {};
    data.forEach(function (c) {
        followers[c.login] = c;
    });
    getAll(FOLLOWING_URL, function (data) {
        var following = {};
        data.forEach(function (c) {
            following[c.login] = c;
        });
        
        
        for (var login in following) {
            if (followers[login]) { continue; }
            $(".youfollow").append($("<pre>", {
                text: JSON.stringify(following[login], null, 4)
            }));
        }
        
        for (var login in followers) {
            if (following[login]) { continue; }
            $(".theyfollow").append($("<pre>", {
                text: JSON.stringify(followers[login], null, 4)
            }));
        }
    });
});
