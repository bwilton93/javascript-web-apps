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
})
