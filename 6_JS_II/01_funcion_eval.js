function ejecutarJavascript(){
  var inputJS = document.getElementById("codJS");
  var veces = document.getElementById("rep").value;
 
  eval("for(var i_95 = 0; i_95 <" + veces + "; i_95++) {" 
  + inputJS.value
  +"}");

}

