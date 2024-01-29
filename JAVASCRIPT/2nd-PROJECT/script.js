//getting data and declaring const
const userInput = document.getElementById('number');
const convertBtn = document.getElementById('convert-btn');
const output = document.getElementById('output');

//function for converting number to roman numerals
const decimalToRoman = (num) => {
  const romanNumerals = [//making objects for each roman numerals
    { value: 1000, numeral: 'M' },
    { value: 900, numeral: 'CM' },
    { value: 500, numeral: 'D' },
    { value: 400, numeral: 'CD' },
    { value: 100, numeral: 'C' },
    { value: 90, numeral: 'XC' },
    { value: 50, numeral: 'L' },
    { value: 40, numeral: 'XL' },
    { value: 10, numeral: 'X' },
    { value: 9, numeral: 'IX' },
    { value: 5, numeral: 'V' },
    { value: 4, numeral: 'IV' },
    { value: 1, numeral: 'I' }
  ];
  //for result of conversion
  let result = '';
  //loop for changing num to roman numerals
  for (let i = 0; i < romanNumerals.length; i++) {
    while (num >= romanNumerals[i].value) {
      result += romanNumerals[i].numeral;
      num -= romanNumerals[i].value;
    }
  }

  return result;
};

//other function for readability
const readCode = (line)=>{
    output.innerText = line;
    // Show the result.
    output.classList.remove('hidden');
};

//put to show
const show = input => {
  const originalInput = input; // Store for later output
  //checking for invalid inputs
  let line = ``;
  const regex = /[A-Za-z+]/g;
  if (input === '') {
    line = `Please enter a valid number`;
    readCode(line);
    return;
  }else if(input<1){
    line = `Please enter a number greater than or equal to 1`;
    readCode(line);
    return;
  }else if(input>3999){
    line = `Please enter a number less than or equal to 3999`;
    readCode(line);
    return;
  }else if(input.match(regex)){
    alert("Please Enter a Number!")
    return;
  }
  const answer = decimalToRoman(input);
  let resultMsg = `${answer}`;
  readCode(resultMsg);
};

//event listener for button
convertBtn.addEventListener('click', () => {
    show(userInput.value);
  userInput.value = '';
});

//if entering key is pressed instead of button
userInput.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    show(userInput.value);
    userInput.value = '';
  }
});
