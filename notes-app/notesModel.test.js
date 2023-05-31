const NotesModel = require('./notesModel');

describe(NotesModel, () => {
  it('initialises with an empty array', () => {
    const model = new NotesModel();
    expect(model.getNotes()).toEqual([]);
  })

  it('can add and return a single item to the list', () => {
    const model = new NotesModel();
    model.addNote('Buy milk');
    expect(model.getNotes()).toEqual(['Buy milk']);
  })

  it('can add multiple items to the list', () => {
    const model = new NotesModel();
    model.addNote('Buy milk');
    model.addNote('Go to the gym');
    expect(model.getNotes()).toEqual(['Buy milk', 'Go to the gym']);
  })

  it('the list can be rest to an empty state', () => {
    const model = new NotesModel();
    model.addNote('Buy milk');
    expect(model.getNotes()).toEqual(['Buy milk']);
    model.reset();
    expect(model.getNotes()).toEqual([]);
  })
})
