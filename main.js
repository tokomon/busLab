

var todos = [];
var todito = document.getElementById("mos").value;

//////  todos son click
var celdas = document.getElementsByTagName('td');
for (var i = 0; i < celdas.length; i++) {
    celdas[i].addEventListener('click',redirect,false);
}
function redirect(event){
document.getElementById("mos").innerHTML=(event.target.textContent);
}
/////


 var celdas1 = document.getElementsByTagName('td');
for (var i = 0; i < celdas1.length; i++) {
    celdas1[i].addEventListener('click',cambiar_color_over,false);
}
   
function cambiar_color_over(event){ 
   tabla.style.backgroundColor="#66ff33";
      celda.style.backgroundColor="#66ff33";

 }




function Indentidad(nombre,apellido,dni) {
 this.nombre = nombre.toLowerCase();
 this.apellido = apellido.toLowerCase();
 this.dni = dni;
 this.todosID = (todos.length +1);
}





Indentidad.prototype.toHTML = function() {
  var html = '';
  html +=   "<div>"+ "Nombre: " +this.nombre.toUpperCase() + '<br>';
  html += "Apellido: " + this.apellido.toUpperCase() + '<br>';
  html += 'DNI: ' + this.dni + '<br>' + "</div>";
  html += '<br><br>';
  return html;
}

function mergeHTML(){
  var html = '';
  for (i=0; i<todos.length; i++){
    html += todos[i].toHTML();
  }
  return html;
}

//
//función que imprime un producto luego de ingresarlo
function printHTML (html){
  mos.innerHTML = '';
  mos.innerHTML = html;
}

var guarda = document.getElementById("reservar"); //boton reserva
guarda.onclick = function() {
  var nombre = document.getElementById('nombre').value;
var apellido = document.getElementById("apellido").value;
var dni = document.getElementById("DNI").value;

var datos = new Indentidad(nombre,apellido,dni);

todos.push(datos);
printHTML(datos.toHTML());
}

var mostrar= document.getElementById("listar");
mostrar.onclick = function() {
printHTML(mergeHTML());
}


var buscar = document.getElementById("buscar"); //boton buscar
buscar.onclick = function() {
  
var bdni = document.getElementById("dni").value;
for (var i = 0;  i < todos.length; i++) {
  
if(bdni == todos[i].dni) {
printHTML(todos[i].toHTML());
}
}/*
var datos = new Indentidad(nombre,apellido,dni);

todos.push(datos);
printHTML(datos.toHTML());*/
}


//
/*

  function hacer_click() {
      alert("Me haz dado un click");
    }
    function cambio(co) {
      this.color =color.style.backgroundColor="#f34";
    }


*/


/*

function cambiar_color_out(celda){ 
   celda.style.backgroundColor="#dddddd" 
}   
   
<table width=100> 
<tr> 
   <td bgcolor="#dddddd" id="celda1" onclick="cambiar_color_over(this)" onmouseout="cambiar_color_out(this)">Casilla numero1 </td> 
</tr> 
<tr> 
   <td bgcolor="#dddddd" id="celda2" onclick="cambiar_color_over(this)" onmouseout="cambiar_color_out(this)">Casilla numero2</td> 
</tr> 
 
<tr> 
   <td bgcolor="#dddddd" id="celda10" onclick="cambiar_color_over(this)" onmouseout="cambiar_color_out(this)">Casilla numero 10</td> 
</tr> 
</table> 


onmouseout="cambiar_color_out(this)
<div><br>
      <table width="25%" cellpadding="0" cellspacing="10">
        <tr>
          <td><input type="text" name="nombre" id="nombre"> <br></td>
          <td>
            <button id="reservar" type="botton" name="button" >Reservar</button>
          </td>
        </tr>
        <tr>
          <td><input type="text" name="apellido" id="apellido"> </td>
        </tr>
        <tr>
          <td><input type="text" name="dni" id="DNI"> </td>
          <td><button type="submit" id="cancelar">Cancelar</button>
          </td>
        </tr>
      </table><br>

*/
