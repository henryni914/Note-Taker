const storedNotes = require('../db/db');

module.exports = function(app) {

  app.get("/api/notes", function(req, res) {
    // console.log(database);
    res.json(storedNotes);
  });

  app.post("/api/notes", function(req,res){
      storedNotes.push(req.body);
      res.json(storedNotes);
  })
};