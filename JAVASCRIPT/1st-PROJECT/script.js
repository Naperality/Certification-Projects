// 
// const textInput = document.getElementById('text-input');
// const checkBtn = document.getElementById('check-btn');
// const result = document.getElementById('result');
// let line = "";

// //assigning value from text
// let text = textInput.ariaValueText
// //check palindrom
// checkBtn.onclick = ()=>{
//     console.log();
//  };

// function palindrome(){
//     const regex = /[^A-Za-z0-9]/g;
//     const textLower = text.toLowerCase().replace(regex,'');
//     const reverseText = textLower.split('').reverse().join('');
//     console.log(textLower);
//     return textLower;
// }*/
//getting data and declaring const
const userInput = document.getElementById('text-input');
const checkPalindromeBtn = document.getElementById('check-btn');
const resultDiv = document.getElementById('result');

//function for palindrome
const checkForPalindrome = input => {
  const originalInput = input; // Store for later output

  if (input === '') {
    alert('Please input a value');
    return;
  }

  // Remove the previous result
  resultDiv.replaceChildren();

  const lowerCaseStr = input.replace(/[^A-Za-z0-9]/gi, '').toLowerCase();
  let resultMsg = `<strong>${originalInput}</strong> ${
    lowerCaseStr === [...lowerCaseStr].reverse().join('') ? 'is' : 'is not'
  } a palindrome.`;

  const pTag = document.createElement('p');
  pTag.className = 'user-input';
  pTag.innerHTML = resultMsg;
  resultDiv.appendChild(pTag);

  // Show the result.
  resultDiv.classList.remove('hidden');
};

checkPalindromeBtn.addEventListener('click', () => {
  checkForPalindrome(userInput.value);
  userInput.value = '';
});

userInput.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    checkForPalindrome(userInput.value);
    userInput.value = '';
  }
});
