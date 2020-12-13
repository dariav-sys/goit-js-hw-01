const credits = 20000;
const pricePerDroid = 3000;

let totalPrice = 1;
let userInput = '';

do {
  let userInput = prompt('How many droids would you like to purchase?');

  if (userInput === null) {
    console.log('Отменено пользователем!');
    break;
  }
  userInput = Number(userInput);
  totalPrice = userInput * pricePerDroid;
  if (credits < totalPrice) {
    console.log('Недостаточно средств на счету!');
    break;
  } else {
    console.log(
      `Вы купили ${userInput} дроидов, на счету осталось ${
        credits - totalPrice
      } кредитов.`,
    );
    break;
  }
} while (true);
