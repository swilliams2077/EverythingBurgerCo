var express = require("express")
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000

app.use(express.urlencoded({ extended: true}));
app.use(express.json());



//TABLE RESERVATIONS
var reservedTables = [
    {
        name: "Test Joe",
        phoneNumber: "9007004000",
        customerEmail: "testerhoe@email.com",
        customerId: 0
    }

];

var waitingList = [

];

//Routes
//=========================================================================

//HOME PAGE
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

//USER RESERVATION PAGE
app.get("/add/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "/add/reserve.html"));
});

//CURRENT RESERVATIONS AND WAITING LIST
app.get("/add/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "add/tables.html"))
});

// Displays all characters
app.get("/api/:reservedTables", function(req, res) {
    return res.json(reservedTables);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });