/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const NotesView = require('./notesView');
const NotesModel = require('./notesModel');

describe(NotesView, () => {
  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync('./index.html');
  });
  
  it('displays nothing when no notes added', () => {
    const model = new NotesModel();
    const notesView = new NotesView(model);
    notesView.displayNotes();
    expect(document.querySelectorAll('div .note').length).toBe(0);
  })
  
  it('displays one note when a note has been added', () => {
    const model = new NotesModel();
    const notesView = new NotesView(model);
    model.addNote('Note 1');
    notesView.displayNotes();
    expect(document.querySelectorAll('div .note').length).toBe(1);
  })
  
  it('displays two notes when two notes have been added', () => {
    const model = new NotesModel();
    const notesView = new NotesView(model);
    model.addNote('Note 1');
    model.addNote('Note 2');
    notesView.displayNotes();
    expect(document.querySelectorAll('div .note').length).toBe(2);
  })
})
