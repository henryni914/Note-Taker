const storedNotes = require('../db/db');

module.exports = function (app) {

  app.get("/api/notes", function (req, res) {
    // console.log(database);
    res.json(storedNotes);
  });

  app.post("/api/notes", function (req, res) {
    storedNotes.push(req.body);
    res.json(storedNotes);
  });

  app.delete("/api/notes/:id", function (req, res) {
    const deleteId = req.params.id;
    storedNotes.forEach(element => {
      if (element.id === deleteId) {
        let indexId = storedNotes.indexOf(element);
        storedNotes.splice(indexId, 1);
        res.json(storedNotes);
      };
    });
  })
};