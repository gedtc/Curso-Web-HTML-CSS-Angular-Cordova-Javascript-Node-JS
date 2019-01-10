var listaPersonas = new Array();

function addPersona() {
  var nuevaPersona = new Object();
  nuevaPersona.nombre = document.getElementById("inputNombre").value;
  nuevaPersona.edad = document.getElementById("inputEdad").value;
  nuevaPersona.edad = parseInt(nuevaPersona.edad);
  nuevaPersona.email = document.getElementById("inputEmail").value;



  listaPersonas[listaPersonas.length] = nuevaPersona;
  listarPersonas();
}

function listarPersonas() {
  var divlistado = document.getElementById("divlistado");
  divlistado.innerHTML = "<h2>Lista de personas</h2>";
  for (var i = 0; 1 < listaPersonas.length; i++) {

    var persona = listaPersonas[i];
    divlistado.innerHTML += "<p>Nombre: " + persona.nombre + ", Edad: " + persona.edad + ", &lt;" + persona.email + "&gt;</p>";
  }

}