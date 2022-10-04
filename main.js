// 1. Formulario de contacto - Local Storage
// Crear un formulario de contacto con los siguientes campos:
// Nombre
// Correo
// Mensaje
// Guardar en Local Storage los datos de contacto rellenados del usuario (solo guarda un usuario)
// Muestra el usuario que has guardado en el DOM
// Pista: usa JSON.parse() y JSON.stringify() para guardar muchos datos usando la misma clave

// Variables para el objeto

const nombreR = document.getElementById("nombre")

const correoR = document.getElementById('correo')

const textoR = document.getElementById('mensaje')

// Variables para la función.

const buttonR = document.getElementById("botoncito")

const malbuttonR = document.getElementById("malbotoncito")

let userPainted = document.createElement("ul");

let arrayPainted = document.createElement("p");

let myArray = [];
//--------------------------------------------------------- Para guardar el usuario en el local storage.
function test(e) {
    e.preventDefault()
    const person = {
    
        nombre: nombreR.value,
        
        correo: correoR.value,
        
        mensaje: textoR.value,
        
    }
    console.log(person)

    localStorage.setItem("user", JSON.stringify(person));

    const user = JSON.parse(localStorage.getItem("user"));
//------------------------------------------------------------------- Para mostrar el usuario.
    userPainted.innerHTML=""
    document.body.appendChild(userPainted);

    let elemento1Lista = document.createElement("li");
    elemento1Lista.textContent = nombreR.value;
    userPainted.appendChild(elemento1Lista);

    let elemento2Lista = document.createElement("li");
    elemento2Lista.textContent = correoR.value;
    userPainted.appendChild(elemento2Lista);

    let elemento3Lista = document.createElement("li");
    elemento3Lista.textContent = textoR.value;
    userPainted.appendChild(elemento3Lista);
//-------------------------------------------------------------------- Para guardar el array en el local storage.
    
    myArray.push(user);

    console.log(myArray)

    localStorage.setItem("all-users", JSON.stringify(myArray));

    let arry = JSON.parse(localStorage.getItem("all-users"));

    // console.log(arry)

//------------------------------------------------------------------- Para mostrar el array.
    // arrayPainted.innerHTML= arry
    // document.body.appendChild(arrayPainted);

    // for(let i = 0; i < myArray.length; i++){   Me da object, no lo he sacado.
    //     arrayPainted.innerHTML= myArray[i];
    //     document.body.appendChild(arrayPainted);
    //   }


}

buttonR.addEventListener('click', test)

//-----------------------------------------------------------------------------------Btn con la función de reiniciar local storage.

function reset(e){
    e.preventDefault();
    localStorage.clear();
}

malbuttonR.addEventListener('click', reset)
