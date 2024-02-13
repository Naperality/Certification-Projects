//declare const elements in html
const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const results = document.getElementById("results-div");

//regex to catch
//const format1 = /1\s?\d{3}-\d{3}-\d{4}/;
const format1 = /^([+]?1[\s]?)?((?:[(](?:[2-9]1[02-9]|[2-9][02-8][0-9])[)][\s]?)|(?:(?:[2-9]1[02-9]|[2-9][02-8][0-9])[\s.-]?)){1}([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2}[\s.-]?){1}([0-9]{4}){1}$/;
//dollar - "()" capture , "|" or, "[]" get all, "?" optional
//"?:" non capturing group but can still match 
//const format2 = /1\s?\(\d{3}\)\s?\d{3}-\d{4}/;
//strings- "[e3]" means e and 3 to match, "\s" looks for spaces or line breaks, 
//"^" means beginning of string, "$" means end of string
//const format3 = /[\(?\d{3}[\s-\)]?\d{3}[\s-]?\d{4}]/;


//arrays of  regex
const formatList = [format1];

//funciton for getting values and validations
const isValid = (msg) => formatList.some((regex) => regex.test(msg));

//function for delete
const clear = () => results.innerText = "";

//event listeners for buttons and enter key
//event listener for check button
checkBtn.addEventListener('click', () => {
    if (userInput.value === "") {
    alert("Please provide a phone number");
    return;
  }

  results.textContent = isValid(userInput.value) ? `Valid US number: ${userInput.value}`: `Invalid US number: ${userInput.value}`;
  userInput.value = "";
});

//if entering key is pressed instead of check button
userInput.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    if (userInput.value === "") {
    alert("Please provide a phone number");
    return;
  }

  results.innerText = isValid(userInput.value) ? `Valid US number: ${userInput.value}`: `Invalid US number: ${userInput.value}`;
  userInput.value = "";
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