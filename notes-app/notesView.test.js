/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const NotesView = require('./notesView');

describe(NotesView, () => {
  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync('./index.html');
  });

  it('displays nothing when no notes added', () => {
    const notesView = new NotesView();

    expect(document.querySelectorAll('div .note').length).toBe(0);
  })  
})
