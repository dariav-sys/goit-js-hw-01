const userInput = prompt("Пожалуйста, введите пароль: ")
const ADMIN_PASSWORD = 'jqueryismyjam';

while (true) {
  if (userInput === null) {  
    console.log ("Отменено пользователем!");
    break;
  }

  if (userInput=== ADMIN_PASSWORD) { 
    console.log("Добро пожаловать!");
    break;
  }
  console.log("Доступ запрещен, неверный пароль!");
  break;
}




