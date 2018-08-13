app.get("/api/friends", function(req, res) {
    return res.json(friendsArr);  //come back to this
});

app.post("/api/friends", function(req, res) {
    //come back here too, push to friendsArr then route user to results page?
    //no resuls page, just show user json
    //also determine match here and show match json
})