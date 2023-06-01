const NotesClient = require('./notesClient');

// This makes `fetch` available to our test
// (it is not by default, as normally `fetch` is only
// available within the browser)
require('jest-fetch-mock').enableMocks()

describe('NotesClient class', () => {
  it('calls fetch and loads notes from the backend', (done) => {
    const client = new NotesClient();
    
    fetch.mockResponseOnce(JSON.stringify({
      notes: ['This is a note']
    }));

    client.loadNotes((returnedDataFromAPI) => {
      expect(returnedDataFromAPI.notes.length).toBe(1);
      expect(returnedDataFromAPI.notes[0]).toBe('This is a note');
      done();
    });
  });
});