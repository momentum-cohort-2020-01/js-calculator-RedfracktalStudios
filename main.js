// const arrayOfNums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
// const arrayOfOps = ['+', '-', '*', '/', '(', ')', '%']
// This hard-coded method is made unneccessary by the else statement. Further, this method allows room for uncaught type errors.
const allButtons = document.querySelectorAll('button')
const displayBox = document.querySelector('input')

window.addEventListener('load', () => {
    displayBox.focus();
    // On load, a blinking cursor is placed within the input box.
});

for (let individualButton of allButtons) {
    // You can't compare an array to a string. This loop isolates a given value within an array.

    individualButton.addEventListener('click', function () {
        // if ((individualButton.innerText in arrayOfNums) || (individualButton.innerText in arrayOfOps))  {
        if (individualButton.innerText === '=') {
            displayBox.value = math.evaluate(displayBox.value);
            // If text within button is =, evaluation is triggered with the math.js library. 
            // This method is safer than the built-in JS eval() method.

            displayBox.focus();
            // The blinking cursor returns after every action.
        }

        else if (individualButton.innerText === 'C') {
            displayBox.value = '';
            // If text within button is C, input box text is replaced with an empty string.
            // There's probably a better way to do this - a built-in method, maybe?

            displayBox.focus();
        }

        else {
            displayBox.value += individualButton.innerText;
            // If text within button is not = or C, display text as is to the input box.

            displayBox.focus();
        }
    })
};

// Refactored after realising keyCode was depreciated
document.addEventListener('keydown', function (event) {
    if (event.code === "Enter") {
        document.activeElement.setAttribute("style", "transition: 0.2s ease-in-out; position: absolute; margin-top: 23.5px; width: 98.5px; height: 98.5px; box-shadow: inset 0 -3px 0 0 $lbs;");
        try {
            displayBox.value = individualButton.innerText;
            displayBox.focus()
        }
        catch {
            while (displayBox.value === '=') {
                displayBox.value = math.evaluate(displayBox.value);
                displayBox.focus()
            }
        }
    }
});