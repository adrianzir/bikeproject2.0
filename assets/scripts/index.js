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

const packPremiun = {  //Objeto      <-------------------
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
    constructor(nombre, email, edad, genero) {
        this.nombre = nombre;
        this.email = email;
        this.edad = edad;
        this.genero = genero;
        this.welcome = 'Gracias por registrarte en nuestro website, bienvenid@ ' + this.nombre;
    }
} 
const user1 = new Users("adrian","adrianironside@gmail.com", 21 ,true);
const user2 = new Users("gabriela","magaa2508@gmail.com", 25, false);
const user3 = new Users("carlos", "cezduk@yahoo.com", 48, true);
const user4 = new Users("doja", "catdoja@hotmail.com", 31, false);
 
const register = () =>{
    let nombre = prompt("ingresa tu nombre");
    let mail = prompt("ingresa tu email");
    let age = parseInt(prompt("ingresa tu edad"));
    let gender = confirm("si eres hombre click aceptar y si eres mujer click cancelar");

    const user5 = new Users(nombre,mail,age,gender);
    console.log(user5);
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

let productName = prompt("ingresa tu producto");
let productPrice = parseInt(prompt("ingresa el precio"));
let productqty = parseInt(prompt("ingresa la cantidad que deseas agregar"));

let product1 = new AddToCart("guantes mtb", 10.999, 1);

const agregar = new AddToCart(productName, productPrice, productqty);
const envion = carrito.push(agregar, product1);
console.log(carrito)