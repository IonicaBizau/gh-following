var USERNAME = "username";

var FOLLOWERS_URL = "https://api.github.com/users/" + USERNAME + "/followers";
var FOLLOWING_URL = "https://api.github.com/users/" + USERNAME + "/following";

$.getJSON(FOLLOWERS_URL, function (data) {
    var followers = data;
    $.getJSON(FOLLOWING_URL, function (data) {
        var following = data;
        
        /* You follow them, but they don't follow you. */
        for (var i = 0; i < following.length; ++i) {
            
            var add = true;
            
            for (var j = 0; j < followers.length; ++j) {
                if (following[i].id === followers[j].id) {
                    add = false;
                    break;
                }
            }
            
            if (add) {
                $(".youfollow").append($("<pre>").text(JSON.stringify(following[i], null, 4)));
            }
        }
        
        /* You follow them, but they don't follow you. */
        for (var i = 0; i < followers.length; ++i) {
            
            var add = true;
            
            for (var j = 0; j < following.length; ++j) {
                if (following[j].id === followers[i].id) {
                    add = false;
                    break;
                }
            }
            
            if (add) {
                $(".theyfollow").append($("<pre>").text(JSON.stringify(followers[i], null, 4)));
            }
        }
    });
});
