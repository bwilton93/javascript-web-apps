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
          this.mainContainerEl = document.querySelector("#main-container");
          this.hideMessageButton = document.querySelector("#hide-message-button");
          this.buttonEl.addEventListener("click", () => {
            this.displayMessage();
          });
          this.hideMessageButton.addEventListener("click", () => {
            this.hideMessage();
          });
        }
        displayMessage() {
          console.log("Thanks for clicking me!");
          const newDiv = document.createElement("div");
          newDiv.id = "message";
          newDiv.textContent = "This message displayed by JavaScript";
          this.mainContainerEl.append(newDiv);
        }
        hideMessage() {
          const removeDiv = document.querySelector("#message");
          this.mainContainerEl.removeChild(removeDiv);
        }
      };
      module.exports = MessageView2;
    }
  });

  // index.js
  var MessageView = require_messageView();
  var view = new MessageView();
})();
