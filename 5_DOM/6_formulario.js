/* 
1 - validar que el usuario introduzca email y contraseña
1.1 - marcar en rojo los campos no rellenados
2 - comproar que sean iguales entre si
2.1 marcar en verde cuando sean iguales
2.2 - en naranja cuando no
3 - cuando esté correcto indicar registrado con exito y el fondo de table en verde
*/


function validar() {

  var inputemail = document.getElementById("email");
  var inputemail2 = document.getElementById("email_rep");
  var inputPass = document.getElementById("password");
  var inputPass2 = document.getElementById("password_rep");
  var email = inputemail.value;
  var email2 = inputemail2.value;
  var pass = inputPass.value;
  var pass2 = inputPass2.value;

  validarInput(inputemail, email);
  validarInput(inputemail2, email2);
  validarInput(inputPass, pass);
  validarInput(inputPass2, pass2);


}

function validarInput(inputTexto, texto) {

  

  if (texto != texto) {
    inputTexto.style.backgroundColor = "orange";

  } else if (texto == "") {
    inputTexto.style.backgroundColor = "red";
  } else {
    inputTexto.style.backgroundColor = "green";

  }

}





/* 2 - comproar que sean iguales entre si
2.1 marcar en verde cuando sean iguales
2.2 - en naranja cuando no */