const router = require('express').Router();
const { readFromFile, readAndAppend } = require('../../helpers/noteUtils');
const { v4: uuidv4 } = require('uuid');

// GET Route for retrieving all the notes
router.get('/', (req, res) => {
  readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

// POST Route for a new note
router.post('/', (req, res) => {
  console.log(req.body);

  const { title, text } = req.body;

  if (req.body) {
    const newNote = {
      title,
      text,
      note_id: uuidv4(),
    };

    readAndAppend(newNote, './db/db.json');
    res.json(`Note added successfully`);
  } else {
    res.error('Error in adding note');
  }
});

// DELETE Route for a specific note
router.delete('/:note_id', (req, res) => {
    const noteId = req.params.note_id;
    readFromFile('./db/db/notes.json')
      .then((data) => JSON.parse(data))
      .then((json) => {
        // Make a new array of all notes except the one with the ID provided in the URL
        const result = json.filter((note) => note.note_id !== noteId);
  
        // Save that array to the filesystem
        writeToFile('./db/db/notes.json', result);
  
        // Respond to the DELETE request
        res.json(`Item ${noteId} has been deleted 🗑️`);
      });
  });

module.exports = router;
