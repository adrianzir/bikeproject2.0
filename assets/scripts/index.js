//let question = prompt("te gustaria recibir nuestras notificaciones en tu correo? escribe si/no.");

//switch (question){
//     case "si":
//     prompt("ingresa tu correo electronico, por favor =D");
//     break;
//     case "no":
//     alert("no hay problema, continua navegando en nuestro sitio :)");
//     break;
//     default:
//     alert("responde 'si' o 'no' por favor");
//     break;
// }

function descuentosVarios() {
let getDiscount = alert("obten un 15% de descuento en tu primera compra sobre $25.000 solo suscribiendote!");
let purchase = parseFloat(prompt("ingresa el valor de tu compra"));
let discount = purchase *(15/100) ;


function finalPriceWithDiscount(){
    let totalPrice = purchase - discount;
    if (purchase > 25000){
        totalPrice= purchase;
        console.log("no se aplica descuento");
    }
    alert("El total de tu compra es " + totalPrice + ".");

}

let display = finalPriceWithDiscount();
}
// -------------------------------------------------------------------------------//

const packPremiun = {  //Objeto   1   <-------------------
    clases : 10,
    descuentos: {
        servicioTecnico: 10,
        repuestos: 15,
        accesorios:12,
        ropa: 10
    },
    cupoTours: "el durazno"
}

class Users {
    constructor(nombre, email, edad) { // construcctor   1   <-------------------//
        this.nombre = nombre;
        this.email = email;
        this.edad = edad;
        this.welcome = 'Gracias por registrarte en nuestro website, bienvenid@ ' + this.nombre;
    }
} 
const user1 = new Users("adrian","adrianironside@gmail.com", 21);
const user2 = new Users("gabriela","magaa2508@gmail.com", 25);
const user3 = new Users("carlos", "cezduk@yahoo.com", 48);
const user4 = new Users("doja", "catdoja@hotmail.com", 31);
 
let nombre = document.querySelector(".name");
let mail = document.querySelector(".mail-input");
let age = document.querySelector(".age");
console.log(nombre.innerText);
console.log(mail.innerText);
console.log(age.innerText);
const register = () =>{
    const user5 = new Users(nombre,mail,age);
    return console.log(user5);
}
/*
========================================= Arrays ===============================================
*/

const carrito = []

class AddToCart {
    constructor(producto, precio , cantidad){
        this.producto= producto;
        this.precio= precio;
        this.cantidad= cantidad;
    }
}


let product1 = new AddToCart("guantes mtb", 10.999, 1); 
carrito.push(product1);                                          // <--- ejemplo

const trigger = () =>{
    let productName = prompt("ingresa tu producto");
    let productPrice = parseInt(prompt("ingresa el precio"));
    let productQty = parseInt(prompt("ingresa la cantidad que deseas agregar"));
    const agregar = new AddToCart(productName, productPrice, productQty);
    const envion = carrito.push(agregar);
    console.log(agregar)
}
 
