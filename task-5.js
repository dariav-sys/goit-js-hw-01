let userInput = prompt("Enter country name: ").toLowerCase();

let deliveryPrice;


switch (userInput) {
  
  case "china":
    deliveryPrice = 200;
    break;

  case "chile":
    deliveryPrice = 250;
    break;
    
  case "australia":
    deliveryPrice = 170;
    break;
    
  case "india":
    deliveryPrice = 80;
    break;
    
  case "jamaica":
    deliveryPrice = 120;
    break;

  default:
    "Invalid country name";
}

console.log(deliveryPrice);

