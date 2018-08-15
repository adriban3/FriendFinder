var friends = require("../data/friends");
var path = require("path");

module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        res.json(friends);  //come back to this
    });

    app.post("/api/friends", function(req, res) {

        var resp = req.body;

        var userScore = resp.scores;

        var matchCheck;

        var valMC;

        var diff = [];

        for (var i = 0; i < friends.length; i++) {

            var sum = 0;
            matchCheck = friends[i].scores

            for (var j = 0; i < userScore.length; i++) {

                valMC = matchCheck[j];
                sum += Math.abs(valMC - userScore[j]);

            }

            diff.push(sum);

        }

        var matchInd = Math.max(diff);
        var match = friends[matchInd];

        friends.push(resp);

        res.json({matchName: match.name, matchImg: match.photo});
        //come back here too, push to friendsArr then route user to results page?
        //no resuls page, just show user json
        //also determine match here and show match json
    })
}