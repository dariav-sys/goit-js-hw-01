let credits = 23580;
const pricePerDroid = 3000;
let totalPrice = 1;

let userInput = prompt('Сколько дроидов вы желаете приобрести?');
let droidNum = parseFloat(userInput);

if (userInput === null) {
  console.log('Отменено пользователем!');
} else if (Number.isInteger(droidNum)) {  
  totalPrice = userInput * pricePerDroid;
    if (credits < totalPrice) {
      console.log('Недостаточно средств на счету!');
    } else {
      credits -= totalPrice;
      console.log(
        `Вы купили ${droidNum} дроидов, на счету осталось ${credits} кредитов.`,
      );
    }
} else {
   console.log('Неверный ввод!')
}
