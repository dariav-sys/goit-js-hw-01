let userInput = prompt('Enter country name: ').toLowerCase();

let deliveryPrice;
let country;
let isDefined = false;

switch (userInput) {
  case 'china':
    isDefined = true;
    deliveryPrice = 200;
    country = 'China';
    break;

  case 'chile':
    isDefined = true;
    deliveryPrice = 250;
    country = 'Chile';
    break;

  case 'australia':
    isDefined = true;
    deliveryPrice = 170;
    country = 'Australia';
    break;

  case 'india':
    isDefined = true;
    deliveryPrice = 80;
    country = 'India';
    break;

  case 'jamaica':
    isDefined = true;
    deliveryPrice = 120;
    country = 'Jamaica';
    break;

  default:
    alert('Invalid country name');
}

if (isDefined === true) {
  console.log(`Доставка в ${country} будет стоить ${deliveryPrice} кредитов`);
}
