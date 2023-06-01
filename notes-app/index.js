const NotesModel = require('./notesModel');
const NotesView = require('./notesView');

console.log("The notes app is running");

const model = new NotesModel();
const notesView = new NotesView(model);

model.addNote('This is a test note');
notesView.displayNotes();
