const userInput = prompt('Пожалуйста, введите пароль: ');
const ADMIN_PASSWORD = 'jqueryismyjam';
let message;

if (userInput === null) {
  message = 'Отменено пользователем!';
} else if (userInput === ADMIN_PASSWORD) {
  message = 'Добро пожаловать!';
} else if (!userInput) {
  message = 'Пустая строка, попытайтесь еще раз';
} else {
  message = 'Доступ запрещен, неверный пароль!';
} 


alert(message);
