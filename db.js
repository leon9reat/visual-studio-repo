var mysql = require("mysql");

var conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "cyber123",
    database: "test"
});

conn.connect(function(err) {
    if (err) throw err;
});

// kasi comment
module.exports = conn;