// const model = new NotesModel();

// model.getNotes(); // should return []

// model.addNote('Buy milk');
// model.addNote('Go to the gym');

// model.getNotes(); // should now return ['Buy milk', 'Go to the gym']

// model.reset();

// model.getNotes(); // should now return []

const NotesModel = require('./notesModel');

describe(NotesModel, () => {
  it('initialises with an empty array', () => {
    const model = new NotesModel();
    expect(model.getNotes()).toEqual([]);
  })
})
