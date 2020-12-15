let credits = 23580;
const pricePerDroid = 3000;
let totalPrice = 1;

let userInput = prompt('Сколько дроидов вы желаете приобрести?');



if (userInput === null) {
  console.log('Отменено пользователем!');
} else if (!isNaN(userInput)) {
  let droidNum = parseInt(userInput);
  totalPrice = droidNum * pricePerDroid;
  if (credits < totalPrice) {
    console.log('Недостаточно средств на счету!');
  } else {
    credits -= totalPrice;
    console.log(
      `Вы купили ${droidNum} дроидов, на счету осталось ${credits} кредитов.`,
    );
  }
} else {
  console.log('Неверный ввод!');
}


