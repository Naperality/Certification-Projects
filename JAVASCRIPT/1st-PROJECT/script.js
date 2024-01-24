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
  let resultMsg = `
        <strong>${originalInput}</strong> 
        ${lowerCaseStr === [...lowerCaseStr].reverse().join('') ? 'is' : 'is not'} a palindrome.
    `;

  const tag = document.createElement('p');
  tag.className = 'user-input';
  tag.innerHTML = resultMsg;
  resultDiv.appendChild(tag);

  // Show the result.
  resultDiv.classList.remove('hidden');
};

//event listener for button
checkPalindromeBtn.addEventListener('click', () => {
  checkForPalindrome(userInput.value);
  userInput.value = '';
});

//if entering key is perssed instead of button
userInput.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    checkForPalindrome(userInput.value);
    userInput.value = '';
  }
});
