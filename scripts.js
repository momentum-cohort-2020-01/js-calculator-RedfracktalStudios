alert('Hello');

const allButtons = document.querySelectorAll('button')
const displayBox = document.querySelector('input')

window.addEventListener('load', () => {
  displayBox.focus();
});

for (let aButton of allButtons) {

  aButton.addEventListener('click', function () {
    if (aButton.innerText === '=') {
      displayBox.value = math.evaluate(displayBox.value);
      displayBox.focus();
    }
    else if (aButton.innerText === 'C') {
      displayBox.value = '';
      displayBox.focus();
    }
    else {
      displayBox.value += aButton.innerText;
      displayBox.focus();
    }
  })
};

document.addEventListener('keydown', function (event) {
  if (event.code === 'Enter') {
    document.activeElement.setAttribute('style', 'transition, 0.2s ease-in-out; position: absolute; margin-top: 23.5px; width: 98.5px; height: 98.5px; box-shadow: insert 0 -3px 0 0 $lbs;');
    try {
      displayBox.value = individualButton.innerText;
      displayBox.focus()
    }
    catch{
      while (displayBox.value === '=') {
        displayBox.value = math.evaluate(displayBox.focus())
      }
    }
  }
});  
