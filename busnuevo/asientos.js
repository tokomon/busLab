
var todos = [];

//////  todos son click
var celdas = document.getElementsByTagName('td');
for (var i = 0; i < celdas.length; i++) {
    celdas[i].addEventListener('click',redirect,false);
}

function redirect(event){
document.getElementById("div").innerHTML=(event.target.textContent);
}
/////




function Persona(nombre, apellido, dni) {
	this.nombre = nombre; 
	this.apellido = apellido;
	this.dni = dni; 
}

var persona = new Persona(nombre, apellido, dni);
todos.push(persona);
// reservar.innerHTML = todos;

function sera() {

var nombre = document.getElementById('nombre').value;
var apellido =  document.getElementById("apellido").value;
var dni = document.getElementById("dni").value;
var reservar = document.getElementById("reservar");
var div = document.getElementById("div");
div.innerHTML+="Nombre: " + nombre + "<br>" + "Apellido: " + apellido + "<br>" + "DNI: " + dni + "<br>" ;
alert("sale");

}

var buscarDNI = document.getElementById("buscarDNI");

function buscar()
{
for (var i = 0;  i < todos.length; i++) {
	
if(buscarDNI == todos[i].dni) {
	alert("sale");
}
}
}


var lista = document.getElementById("listar");


