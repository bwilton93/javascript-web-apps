const NotesModel = require('./notesModel');
const NotesView = require('./notesView');
const NotesClient = require('./notesClient');

console.log("The notes app is running");

// const client = new NotesClient();
// const model = new NotesModel();
// const view = new NotesView(model, client);

// model.addNote('This is a test note');
// view.displayNotes();


const client = new NotesClient();
const model = new NotesModel();
const view = new NotesView(model, client);

view.displayNotesFromApi();
