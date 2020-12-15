let userInput = prompt('Enter country name: ').toLowerCase();

let deliveryPrice;
let country;

switch (userInput) {
  case 'china':
    deliveryPrice = 200;
    country = 'China';
    break;

  case 'chile':
    deliveryPrice = 250;
    country = 'Chile';
    break;

  case 'australia':
    deliveryPrice = 170;
    country = 'Australia';
    break;

  case 'india':
    deliveryPrice = 80;
    country = 'India';
    break;

  case 'jamaica':
    deliveryPrice = 120;
    country = 'Jamaica';
    break;

  default:
    alert('Invalid country name');
}

if (deliveryPrice) {
  console.log(`Доставка в ${country} будет стоить ${deliveryPrice} кредитов`);
}
