const path = require('path');

module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/home.html"));
          });

  app.post("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/survey.html"));
      });

};
