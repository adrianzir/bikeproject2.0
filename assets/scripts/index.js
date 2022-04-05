let question = prompt("te gustaria recibir nuestras notificaciones en tu correo? escribe si/no.");

switch (question){
    case "si":
    prompt("ingresa tu correo electronico, por favor =D");
    break;
    case "no":
    alert("no hay problema, continua navegando en nuestro sitio :)");
    break;
    default:
    alert("responde 'si' o 'no' por favor");
    break;
}

let getDiscount = alert("obten un 15% de descuento en tu primera compra suscribiendote!");
let purchase = parseInt(prompt("ingresa el valor de tu compra"));
let discount = purchase *(15/100) ;


function finalPriceWithDiscount(){
    let totalPrice = purchase - discount;
    alert("El total de tu compra es " + totalPrice + ".");
}

let display = finalPriceWithDiscount();
