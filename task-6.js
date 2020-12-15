let total = 0;

while (true) {
  let userInput = prompt('Please enter a number: ');
  if (userInput === null) {
    break;
  }
  userInput = Number(userInput);
  if (Number.isNaN(userInput) === true) {
    alert('This is not a number, try again');
    continue;
  }
  total += userInput;
}

console.log('Total sum is ', total);


