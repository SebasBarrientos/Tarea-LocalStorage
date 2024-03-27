// Crear un formulario de contacto con los siguientes campos:
// Nombre
// Correo
// Mensaje

// Crea una función que cuando envíes el formulario muestre por consola los datos de contacto rellenados en un objeto de JS

//variables con el contenido de los inputs
let name = document.getElementById("nombre");
let email = document.getElementById("correo");
let texto = document.getElementById("texto");
//variables de los botones
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
//Variable para mostrar el contenido del local storage
let p = document.querySelector("p");
let keys = Object.keys(localStorage);
console.log(keys);
function data_form(e) {
//   e.preventDefault();
  let name_form = name.value;
  let email_form = email.value;
  let texto_form = texto.value;
  let logg = { Nombre: name_form, Correo: email_form, Mensaje: texto_form };
  let i = localStorage.length + 1;
  localStorage.setItem("User" + [i], JSON.stringify(logg));
  print_user();
}
// Hasta aca el objeto guardado

function print_user() {
  p.innerText = "";
  for (const clave of keys) {
    let obj_localStorage = JSON.parse(localStorage.getItem(clave));
    p.innerHTML += "<p>" + clave + ": " + obj_localStorage.Nombre + "</p>";
  }
}

btn1.addEventListener("click", data_form);
//la funcion a continuacion es un error de querer iterar las claves a traves de el length. Esto provocava que I al dar null me ocupe 1 de las iteraciones y por ende no me mostraba todo el contenido del localStorage
// function print_user() {
//   p.innerText = "";
//   for (let i = 1; i <= localStorage.length; i++) {
//     let contenido_localStorage = JSON.parse(localStorage.getItem("User" + [i]));
//     console.log(i);
//     if (contenido_localStorage == null) {
//         contenido_localStorage = { Nombre: "Usuario_Eliminado" };
//         p.innerHTML += "<p>" + contenido_localStorage.Nombre + "</p>";
//     } else {
//         p.innerHTML += "<p>" + contenido_localStorage.Nombre + "</p>";
//     };
//   }
// }

print_user();
function remover(e) {
  let x = prompt("Dime el numero de usuario que deseas remover");
  localStorage.removeItem("User" + x);
}
btn2.addEventListener("click", remover);

function eliminar_todo(e) {
  localStorage.clear();
}
btn3.addEventListener("click", eliminar_todo);
// for (let i = 1; i <= localStorage.length; i++) {
//   console.log(localStorage.length);
//   let contenido_localStorage = JSON.parse(localStorage.getItem("User" + [i]));
//   arr.push(contenido_localStorage.Nombre + " ");
// }
// console.log(arr);

// // let contenido_localStorage = JSON.parse(localStorage.getItem("User1"))
// for (const usuario of arr) {
//   p.innerText = arr;
// }

// p.innerText = contenido_localStorage.Nombre

// Guardar en Local Storage el objeto consoleado antes (sólo guarda un usuario)

// 2. Extra
// Guardar en Local Storage los datos de contacto enviados de cada usuario (ir guardandolos todos)
// Mostrar los datos de los contactos guardados en el DOM
// Crea un botón para borrar todos los contactos guardados en Local Storage
// Pista: tendrás que ir guardando los datos en un array
