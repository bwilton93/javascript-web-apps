class View {
  constructor() {
    this.mainContainerEl = document.querySelector('#main-container');

    console.log(this.mainContainerEl);
  }

  addParagraph = () => {
    let newPara = document.createElement('p');
    newPara.textContent = 'This paragraph has been dynamically added by JavaScript!';
    this.mainContainerEl.append(newPara);
  }
}

module.exports = View;