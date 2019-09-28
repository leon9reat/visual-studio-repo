var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.json);
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
    return res.send({error: 0, message: "hello benk"})
});

app.listen(3001, function() {
    console.log("running at port 3001")
});

module.exports = app;