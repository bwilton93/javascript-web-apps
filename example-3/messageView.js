class MessageView {
  constructor() {
    this.buttonEl = document.querySelector('#show-message-button');

    this.buttonEl.addEventListener('click', () => {
       this.displayMessage();
    });

    this.mainContainerEl = document.querySelector('#main-container');
  }

  displayMessage() {
    console.log('Thanks for clicking me!');
    const newDiv = document.createElement('div');
    newDiv.id = 'message';
    newDiv.textContent = 'This message displayed by JavaScript';
    this.mainContainerEl.append(newDiv);
  }
}

module.exports = MessageView;