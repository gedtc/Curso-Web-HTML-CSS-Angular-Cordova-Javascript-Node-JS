function ponPrimeraMayus(texto) {
  var primeraLetra = texto.charAt(0).toUpperCase();
  var resto = texto.substring(1).toLowerCase();
  return primeraLetra + resto;
}
/* con tres bucles */
/*
function validar() {
  
  
  if (nombre == "") {
    inputNombre.style.borderColor = "#F04040";
  } else {
    inputNombre.style.borderColor = "#FFFFFF";
    inputNombre.value = ponPrimeraMayus(nombre);
  }
  if (apellido1 == "") {
    inputApellido1.style.borderColor = "#F04040";
  } else {
    inputApellido1.style.borderColor = "#FFFFFF";
    inputApellido1.value = ponPrimeraMayus(apellido1);
  }
  if (apellido2 == "") {
    inputApellido2.style.borderColor = "#F04040";
  } else {
    inputApellido2.style.borderColor = "#FFFFFF";
    inputApellido2.value = ponPrimeraMayus(apellido2);
  }

}
  */

/* con un bucle y dos funciones */
function validar() {
  var inputNombre = document.getElementById("nombre");
  var inputApellido1 = document.getElementById("primer_apellido");
  var inputApellido2 = document.getElementById("segundo_apellido");
  var nombre = inputNombre.value; 
  var apellido1 = inputApellido1.value;
  var apellido2 = inputApellido2.value;
  validarInput(inputNombre, nombre);
  validarInput(inputApellido1, apellido1);
  validarInput(inputApellido2, apellido2);
}

function validarInput(inputTexto, texto) {

  if (texto == "") {
    inputTexto.style.borderColor = "#F04040";
    inputTexto.style.backgroundColor= "red" ;
  } else {
    inputTexto.style.borderColor = "black";
    inputTexto.value = ponPrimeraMayus(texto);
    inputTexto.style.backgroundColor="";
  }
}