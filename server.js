var express = require("express")
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

//Routes
//=========================================================================

//HOME PAGE
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

//USER RESERVATION PAGE
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "makeres.html"));
});

//CURRENT RESERVATIONS AND WAITING LIST
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "reservelist.html"))
})

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });