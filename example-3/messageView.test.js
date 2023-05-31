/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const MessageView = require('./messageView');

describe('MessageView', () => {
  it('clicks the button', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const view = new MessageView();

    const buttonEl = document.querySelector('#show-message-button');
    const inputEl = document.querySelector('#message-input');
    inputEl.value = 'Some text';

    buttonEl.click();
    result = document.querySelector('#message')
    expect(result).not.toBeNull();
    expect(result.textContent).toBe('Some text');
  });
  
  it('clicks the button and returns a different message', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');
  
    const view = new MessageView();
  
    const buttonEl = document.querySelector('#show-message-button');
    const inputEl = document.querySelector('#message-input');
    inputEl.value = 'Some other text';
  
    buttonEl.click();
    result = document.querySelector('#message')
    expect(result).not.toBeNull();
    expect(result.textContent).toBe('Some other text');
  })

  it('removes message from page', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const view = new MessageView();

    const buttonEl = document.querySelector('#show-message-button');
    buttonEl.click();
    const hideMessageButton = document.querySelector('#hide-message-button');
    hideMessageButton.click();

    expect(document.querySelector('#message')).toBeNull();
  })
});