const userInput = prompt('Пожалуйста, введите пароль: ');
const ADMIN_PASSWORD = 'jqueryismyjam';
let message;

if (!userInput) {
  message = 'Отменено пользователем!';
} else if (userInput === ADMIN_PASSWORD) {
  message = 'Добро пожаловать!';
} else {
  message = 'Доступ запрещен, неверный пароль!';
}

alert(message);
