let password = 12345 ;
let dato = parseInt(prompt("enter your password please"));


while ( dato != password) {
    alert("la contraseña ingresada es incorrecta, intentalo de nuevo");
    dato = parseInt(prompt("enter your password please")) ;
}

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