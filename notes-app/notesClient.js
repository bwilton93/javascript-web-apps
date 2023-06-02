class NotesClient {
  loadNotes() {
    return fetch('http://localhost:3000/notes')
      .then(response => response.json())
  }
}

module.exports = NotesClient;