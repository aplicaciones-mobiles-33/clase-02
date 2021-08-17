console.log("Imprimir mensajes en consola");

//alert("Imprimir mensaje en una ventana");

var x = 0;
var name = "Luz";

var ciertoFalso = true;

var myArray = ["Luz", "Fernando", "Leo", "Melissa"];

var body = document.getElementsByTagName("body");

var row = document.getElementsByClassName("row");

//console.log(x + " " + name);

ciertoFalso = false;

function imprimirMensaje(){
    for(var i = 0; i <  row.length; i++) {
        row[i].classList.add("row-" +i);
        console.log(row[i]);
    }
}