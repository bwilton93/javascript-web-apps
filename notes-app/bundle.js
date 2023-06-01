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
        constructor(model2) {
          this.model = model2;
          this.mainContainerEl = document.querySelector("#main-container");
          this.buttonEl = document.querySelector("#add-note");
          this.inputEl = document.querySelector("#user-input");
          this.buttonEl.addEventListener("click", () => {
            this.model.addNote(this.inputEl.value);
            this.displayNotes();
          });
        }
        displayNotes() {
          const notesArr = this.model.getNotes();
          console.log(notesArr);
          notesArr.forEach((note) => {
            let newDiv = document.createElement("div");
            newDiv.className = "note";
            newDiv.textContent = note;
            this.mainContainerEl.append(newDiv);
          });
        }
        // clearNotes() {
        //   while (this.mainContainerEl.firstChild) {
        //     this.mainContainerEl.removeChild(this.mainContainerEl.firstChild);
        //   }
        // }
      };
      module.exports = NotesView2;
    }
  });

  // index.js
  var NotesModel = require_notesModel();
  var NotesView = require_notesView();
  console.log("The notes app is running");
  var model = new NotesModel();
  var notesView = new NotesView(model);
})();
