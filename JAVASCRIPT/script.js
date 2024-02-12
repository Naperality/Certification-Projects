//declare const elements in html
const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const results = document.getElementById("results-div");

//funciton for getting values and validations
const show = (input) => {
    let originalInput = input;
    let optional = originalInput.split('').join('');
    let line = '';
    
};

//function for delete
const clear = () => results.innerText = "";

//event listeners for buttons and enter key
//event listener for check button
checkBtn.addEventListener('click', () => {
    show(userInput.value);
    userInput.value = '';
});

//if entering key is pressed instead of check button
userInput.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    show(userInput.value);
    userInput.value = '';
  }
});

//event listener for clear button
clearBtn.addEventListener('click', () => {
    clear();
});

/*
// If country code is provided, verify it's 1
        if (phoneNumber.startsWith("1-")) {
            line = `Valid US number: ${originalInput}`;
            results.innerText = line;
        } else if (!phoneNumber.startsWith("(")) {
            // If country code is not provided, check if area code is included
            line = `Valid US number: ${originalInput}`;
            results.innerText = line;
        }
*/