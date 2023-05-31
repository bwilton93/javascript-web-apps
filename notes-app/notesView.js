class NotesView {
  // have a constructor
  // the model should be dependency-injected into it.
  constructor(model) {
    this.mainContainerEl = document.querySelector('#main-container');
    this.model = model;
  }
  
  displayNotes() {
    // get the list of notes from the model.
    // for each note, create a new div element on the page (with an HTML class "note").
    const notesArr = this.model.getNotes();
    notesArr.forEach(note => {
      let newDiv = document.createElement('div');
      newDiv.className = 'note';
      newDiv.textContent = note;
      this.mainContainerEl.append(newDiv);
    });
  }
}

module.exports = NotesView;
