class MessageView {
  constructor() {
    this.buttonEl = document.querySelector('#show-message-button');
    this.mainContainerEl = document.querySelector('#main-container');
    this.hideMessageButton = document.querySelector('#hide-message-button');

    this.buttonEl.addEventListener('click', () => {
       this.displayMessage();
    });

    this.hideMessageButton.addEventListener('click', () => {
      this.hideMessage();
    })
  }

  displayMessage() {
    console.log('Thanks for clicking me!');
    const newDiv = document.createElement('div');
    newDiv.id = 'message';
    newDiv.textContent = document.querySelector('#message-input').value;
    this.mainContainerEl.append(newDiv);
  }

  hideMessage() {
    const removeDiv = document.querySelector('#message');
    this.mainContainerEl.removeChild(removeDiv);
  }
}

module.exports = MessageView;