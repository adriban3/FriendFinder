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
            for (var j = 0; j < userScore.length; j++) {
                diff = friends[i].scores[j] - userScore[j];
                diffSum += Math.abs(diff);
            }
            diffSumArr.push(diffSum);
            diffSum = 0;
        }
        
        newFriendSum = Math.min(...diffSumArr);
        newFriendInd = diffSumArr.indexOf(newFriendSum);
        newFriendObj = friends[newFriendInd];
        matchName = newFriendObj.name;
        matchImg = newFriendObj.photo;
        friends.push(newFriend);
        res.json({matchName: matchName, matchImg: matchImg})
    })
}