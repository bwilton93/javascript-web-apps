(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // notesModel.js
  var require_notesModel = __commonJS({
    "notesModel.js"(exports, module) {
      var NotesModel2 = class {
        constructor() {
          this.notes = [];
        }
        getNotes = () => {
          return this.notes;
        };
        addNote = (note) => {
          this.notes.push(note);
        };
        reset = () => {
          this.notes = [];
        };
        setNotes = (notes) => {
          this.notes = notes;
        };
      };
      module.exports = NotesModel2;
    }
  });

  // notesView.js
  var require_notesView = __commonJS({
    "notesView.js"(exports, module) {
      var NotesView2 = class {
        // have a constructor
        // the model should be dependency-injected into it.
        constructor(model2, client2) {
          this.model = model2;
          this.client = client2;
          this.mainContainerEl = document.querySelector("#main-container");
          this.buttonEl = document.querySelector("#add-note");
          this.inputEl = document.querySelector("#user-input");
          this.buttonEl.addEventListener("click", () => {
            this.model.addNote(this.inputEl.value);
            this.inputEl.value = "";
            this.displayNotes();
          });
        }
        displayNotes() {
          document.querySelectorAll(".note").forEach((element) => {
            element.remove();
          });
          const notesArr = this.model.getNotes();
          notesArr.forEach((note) => {
            const noteEl = document.createElement("div");
            noteEl.className = "note";
            noteEl.textContent = note;
            this.mainContainerEl.append(noteEl);
          });
        }
        displayNotesFromApi() {
          return this.client.loadNotes().then((notes) => {
            notes.notes.forEach((note) => {
              this.model.addNote(note);
            });
          }).then(() => this.displayNotes());
        }
      };
      module.exports = NotesView2;
    }
  });

  // notesClient.js
  var require_notesClient = __commonJS({
    "notesClient.js"(exports, module) {
      var NotesClient2 = class {
        loadNotes(url, callback) {
          return fetch("http://localhost:3000/notes").then((response) => response.json()).then((data) => {
            callback(data);
          });
        }
      };
      module.exports = NotesClient2;
    }
  });

  // index.js
  var NotesModel = require_notesModel();
  var NotesView = require_notesView();
  var NotesClient = require_notesClient();
  console.log("The notes app is running");
  var client = new NotesClient();
  var model = new NotesModel();
  var view = new NotesView(model, client);
  view.displayNotesFromApi();
})();
