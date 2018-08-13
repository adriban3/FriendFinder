app.get("/", function(req, res) {
    return res.sendFile("../public/home.html");
})

app.get("/survey", function(req, res) {
    return res.sendFile("../public/survey.html");
})