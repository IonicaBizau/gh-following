const ghFollowing = require("../lib");

ghFollowing("ionicabizau", (err, data) => {
    if (err) { return console.error(err); }
    console.log("You follow them, but they don't follow you");
    console.log(data[0].map(c => c.login));
    // => [...]

    console.log("They follow you, but you don't follow them");
    console.log(data[1].map(c => c.login));
    // => [...]
});
