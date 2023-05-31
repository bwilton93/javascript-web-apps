(() => {
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // messageView.js
  var require_messageView = __commonJS({
    "messageView.js"(exports, module) {
      var MessageView2 = class {
        constructor() {
          this.buttonEl = document.querySelector("#show-message-button");
          this.buttonEl.addEventListener("click", () => {
            this.displayMessage();
          });
          this.mainContainerEl = document.querySelector("#main-container");
        }
        displayMessage() {
          console.log("Thanks for clicking me!");
          const newDiv = document.createElement("div");
          newDiv.id = "message";
          newDiv.textContent = "This message displayed by JavaScript";
          this.mainContainerEl.append(newDiv);
        }
      };
      module.exports = MessageView2;
    }
  });

  // index.js
  var MessageView = require_messageView();
  var view = new MessageView();
})();
