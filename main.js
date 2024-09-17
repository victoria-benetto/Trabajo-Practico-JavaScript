//1. Introducción a JavaScript
//Ejercicio 2
var a= 5;
var b= 10;
var c= a+b;
console.log("La suma de a y b es:",c);

//Ejercicio 3
var nombre = prompt("¿Cuál es tu nombre?");
console.log("Hola, " + nombre + "!");

//2. Operadores lógicos y condicionales
//Ejercicio 1
var a2= 6;
var b2= 14;
var c2;

if (a2 > b2) {
  c2 = a2;
  console.log("El mayor es: " + c2);
} else if (b2 > a2) {
  c2 = b2;
  console.log("El mayor es: " + c2);
} else {
  console.log("Ambos números son iguales.");
}

//Ejercicio 2
var numeroIngresado = prompt("Ingresa un número y te diré si es par o impar");

numeroIngresado = parseInt(numeroIngresado);

if (numeroIngresado % 2 === 0) {
  console.log("El número " + numeroIngresado + " es par");
} else {
  console.log("El número " + numeroIngresado + " es impar");
}


//3. Operadores de asignación y bucles
//Ejercicio 1
var numero = 10;

while (numero >= 0) {
  console.log(numero);
  numero--; 
}

//Ejercicio 2
var numero2; 

do {
  numero2 = prompt("Ingresa un número mayor a 100:");
  numero2 = parseInt(numero2);

} while (numero2 <= 100 || isNaN(numero2)); 
console.log("Ingresaste un número mayor a 100: " + numero2);

//4. Funciones de JavaScript
//Ejercicio 1
function esPar(numero3) {
    return numero3 % 2 === 0;
  }
  console.log("El número 4 es par:", esPar(4));  
  console.log("El número 7 es par:", esPar(7));  
  console.log("El número 10 es par:", esPar(10)); 
  console.log("El número 15 es par:", esPar(15)); 

  //Ejercicio 2
function convertirCelsiusAFahrenheit(celsius) {
    var fahrenheit = celsius * 1.8 + 32;
    console.log(celsius + "°C son equivalentes a " + fahrenheit + "°F");
  }
  convertirCelsiusAFahrenheit(30);   

//5. Objetos en JavaScript
//Ejercicio 1  
var persona = {
    nombreP: "Ana",
    edadP: 30,
    ciudadP: "Madrid",
    
    cambiarCiudad: function(nuevaCiudad) {
      this.ciudadP = nuevaCiudad;
    }
  };
  persona.cambiarCiudad("Barcelona");
  
  console.log(persona);
  
//Ejercicio 2
var libro = {
    titulo: "El Quijote",
    autor: "Miguel de Cervantes",
    año: 1605,
  
    esAntiguo: function() {
      var añoActual = new Date().getFullYear(); 
      var antiguedad = añoActual - this.año; 
      
      if (antiguedad > 10) {
        console.log("El libro \"" + this.titulo + "\" es antiguo.");
      } else {
        console.log("El libro \"" + this.titulo + "\" es reciente.");
      }
    }
  };
  libro.esAntiguo();
  
  //6. Arrays
  //Ejercicio 1
var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var numerosMultiplicados = [];

for (var i = 0; i < numeros.length; i++) {
  numerosMultiplicados.push(numeros[i] * 2);
}

console.log("Números originales:", numeros);
console.log("Números multiplicados por 2:", numerosMultiplicados);

//Ejercicio 2
var pares = [];
for (var i = 1; pares.length < 10; i++) {
  if (i % 2 === 0) {
    pares.push(i);
  }
}
console.log("Primeros 10 números pares:", pares);

//7. Introducción al DOM
//Ejercicio 1
document.addEventListener('DOMContentLoaded', function() {
    var boton = document.getElementById('cambiarColorBtn');
    boton.addEventListener('click', function() {
      var elementosP = document.getElementsByTagName('p');
      for (var i = 0; i < elementosP.length; i++) {
        elementosP[i].style.color = 'blue';
      }
    });
  });

//Ejercicio 2
document.addEventListener('DOMContentLoaded', function() {
    var boton1 = document.getElementById('mostrarAlerta');
    boton1.addEventListener('click', function() {
      var valorCampo = document.getElementById('campoTexto').value;
      alert('Has ingresado: ' + valorCampo);
    });
  });
  
//8. Eventos en DOM
//Ejercicio 1
document.addEventListener('DOMContentLoaded', function() {
    var listaItems = document.querySelectorAll('#miLista li');
    listaItems.forEach(function(item) {
      item.addEventListener('click', function() {
        console.log(item.textContent);
      });
    });
  });
  
//Ejercicio 2
document.addEventListener('DOMContentLoaded', function() {
    var campoTexto2 = document.getElementById('campoTexto2');
    var deshabilitarBtn = document.getElementById('deshabilitarBtn');
    var habilitarBtn = document.getElementById('habilitarBtn');
  
    deshabilitarBtn.addEventListener('click', function() {
      campoTexto2.disabled = true; 
    });
  

    habilitarBtn.addEventListener('click', function() {
      campoTexto2.disabled = false; 
    });
  });

//9. LocalStorage
//Ejercicio 1
document.addEventListener('DOMContentLoaded', function() {
    var formulario = document.getElementById('miFormulario');
    var correoInput = document.getElementById('correo');
    var mensajeDiv = document.getElementById('mensaje');
  
    function mostrarCorreo() {
      var correo = localStorage.getItem('correo');
      if (correo) {
        mensajeDiv.innerHTML = `
          Correo guardado: <strong>${correo}</strong>
          <button id="eliminarBtn">Eliminar Correo</button>
        `;
        document.getElementById('eliminarBtn').addEventListener('click', function() {
          localStorage.removeItem('correo');
          mensajeDiv.innerHTML = ''; 
        });
      }
    }
    mostrarCorreo();
    formulario.addEventListener('submit', function(event) {
      event.preventDefault(); 
      var correo = correoInput.value;
      localStorage.setItem('correo', correo); 
      mostrarCorreo(); 
      correoInput.value = ''; 
    });
  });
  
  