var arrayDiv = document.getElementsByClassName("circulo"); /* coge todos las clases que tienen la palabra 'círculo' */

for (var i = 0; i < arrayDiv.length; i++) {


  arrayDiv[i].style.webkitAnimationPlayState = "paused"; /* con esto hemos pausado el primer círculo */

}

var divMarco = document.getElementsByClassName("marco")[0];

var boton = divMarco.appendChild(document.createElement("input"));

boton.setAttribute("type", "button");

boton.setAttribute("value", "¡Anímate!");

function cuandoSePulsa() {
  for (var i = 0; i < arrayDiv.length; i++) {

    arrayDiv[i].style.webkitAnimationPlayState = "running";/* para los tres círculos */

  }
}
//Hacemos que cuando se pulse el botón se anímen los círculos
boton.setAttribute("onclick","cuandoSePulsa();");