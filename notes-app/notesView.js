class NotesView {
  // have a constructor
  // the model should be dependency-injected into it.
  constructor(model) {
    this.model = model;
    this.mainContainerEl = document.querySelector('#main-container');
    this.buttonEl = document.querySelector('#add-note');
    this.inputEl = document.querySelector('#user-input');

    this.buttonEl.addEventListener('click', () => {
      this.model.addNote(this.inputEl.value);
      // this.inputEl.value = "";
      // this.clearNotes();
      this.displayNotes();
   });
  }
  
  displayNotes() {
    document.querySelectorAll('.note').forEach(element => {
      element.remove();
    });

    const notesArr = this.model.getNotes();
    notesArr.forEach(note => {
      const noteEl = document.createElement('div');
      noteEl.className = 'note';
      noteEl.textContent = note;
      this.mainContainerEl.append(noteEl);
    });
  }
}

module.exports = NotesView;
