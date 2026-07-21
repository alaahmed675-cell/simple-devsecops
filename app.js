const express = require("express");

const app = express();

app.use(express.json());

let notes = [];

// Home Route
app.get("/", (req, res) => {
  res.send("Welcome to DevSecOps Lab");
});

// Get All Notes
app.get("/notes", (req, res) => {
  res.json(notes);
});

// Add Note
app.post("/notes", (req, res) => {
  const note = {
    id: notes.length,
    text: req.body.text,
  };

  notes.push(note);

  res.status(201).json({
    message: "Note Added Successfully",
    data: note,
  });
});

// Delete Note
app.delete("/notes/:id", (req, res) => {
  const id = Number(req.params.id);

  if (id < 0 || id >= notes.length) {
    return res.status(404).json({
      message: "Note Not Found",
    });
  }

  notes.splice(id, 1);

  res.json({
    message: "Note Deleted Successfully",
  });
});

// Start Server
app.listen(3000, () => {
  console.log("Server Running On Port 3000");
});