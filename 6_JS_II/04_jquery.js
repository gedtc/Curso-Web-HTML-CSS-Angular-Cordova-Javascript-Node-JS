var listaPersonas = new Array();

jQuery(document).ready(

  function addPersona() {
    var nuevaPersona = new Object();
    nuevaPersona.nombre = $("#inputNombre").val();
    nuevaPersona.apellidos = $("#inputApellidos").val();
    nuevaPersona.edad = document.getElementById("inputEdad").value;
    nuevaPersona.edad = parseInt(nuevaPersona.edad);
    nuevaPersona.email = document.getElementById("inputEmail").value;



    listaPersonas[listaPersonas.length] = nuevaPersona;
    listarPersonas();
  }
);

function listarPersonas() {

  $("#divlistado").html("<h2>Lista de personas</h2>");

  for (var i = 0; 1 < listaPersonas.length; i++) {

    var persona = listaPersonas[i];

    $("#divlistado").html(

      $("#divlistado").html() = "<p>Nombre: " + persona.nombre +", Apellidos: "+persona.apellidos+ ", Edad: " + persona.edad + ", &lt;" + persona.email + "&gt;</p>"
    )

  }

}