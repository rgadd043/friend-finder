// Dependencies
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const nodemon = require('nodemon');

const app = express();
const PORT = 3000;

// app.use(express.static(process.cwd() + "./app/public"));

//BodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: "application/vnd.api+json"}));

// ================================================================================
// ROUTES
// ================================================================================

// require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.post("/api/friends", function(req, res) {
  var newFriend = req.body;
  console.log(newFriend);
});

app.listen(PORT, function(){
  console.log("App listening on PORT: " + PORT);
})
