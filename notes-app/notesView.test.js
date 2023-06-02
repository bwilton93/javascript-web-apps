/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const NotesView = require('./notesView');
const NotesModel = require('./notesModel');
const NotesClient = require('./notesClient');
const exp = require('constants');

// require('jest-fetch-mock').enableMocks()

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

  it('displays 69 notes when 69 notes have been added', () => {
    const model = new NotesModel();
    const notesView = new NotesView(model);

    for (let i = 0; i < 69; i++) {
      model.addNote(`Note ${i + 1}`);
    }

    notesView.displayNotes();
    expect(document.querySelectorAll('div .note').length).toBe(69);
  })

  it('displays the correct note when user inputs text and clicks button', () => {
    const model = new NotesModel();
    const notesView = new NotesView(model);

    const buttonEl = document.querySelector('#add-note');
    const inputEl = document.querySelector('#user-input');
    inputEl.value = 'This is a note';
    buttonEl.click();
    let result = document.querySelectorAll('div .note');
    expect(result.length).toBe(1);
    expect(result[0].textContent).toBe('This is a note');
  })

  it('clear the list of previous notes before displaying', () => {
    const model = new NotesModel();
    const view = new NotesView(model);

    model.addNote('one');
    model.addNote('two');

    view.displayNotes();
    view.displayNotes();

    expect(document.querySelectorAll('div .note').length).toBe(2);
  })

  it('Loads the data from the client and populates the model with it', () => {
    // Check mocking_api_calls makers pill.

    const mockClient = {
      loadNotes: jest.fn()
    }

    mockClient.loadNotes.mockResolvedValueOnce({
      notes: ['one', 'two']
    });

    const model = new NotesModel();
    const notesView = new NotesView(model, mockClient);

    return notesView.displayNotesFromApi().then(() => {
      expect(mockClient.loadNotes).toHaveBeenCalledWith();
      expect(model.getNotes()).toEqual(['one','two']);
      expect(document.querySelectorAll('div .note').length).toBe(2);
    });
  })
})
