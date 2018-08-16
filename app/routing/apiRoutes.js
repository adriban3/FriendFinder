var path = require("path");
var friends = require("../data/friends");

module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        res.json(friends)
    })

    app.post("/api/friends", function(req, res) {
        var newFriend = req.body;
        var userScore = newFriend.scores;
        var diff = 0;
        var diffSum = 0;
        var diffSumArr = [];

        for (var i = 0; i < friends.length; i++) {
            for (var i = 0; i < userScore.length; i++) {
                diff = friends[i].scores[j] - userScore[j];
                diffSum += Math.abs(diff);
            }
            diffSumArr.push(diffsum);
            diffSum = 0;
        }

        newFriendSum = Math.max(diffSumArr);
        newFriendInd = diffSumArr.findIndex(newFriendSum);
        newFriendObj = friends[newFriendInd];
        matchName = newFriendObj.name;
        matchImg = newFriendObj.photo;
        friends.push(newFriend);
        res.json({matchName: matchName, matchImg: matchImg})
    })
}