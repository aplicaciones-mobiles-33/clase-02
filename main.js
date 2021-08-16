console.log("Imprimir en consola");

//alert("Imprime mensaje en una ventana")

var x = 3;
var name = "Francisco";
var ciertoFalso = true;
var myArray = ["Luz", "Francisco", "Gonzalez"];

var body = document.getElementsByTagName("body");

var row = document.getElementsByClassName("row");

function imprimirMensaje() {
    for (let i = 0; i < row.length; i++) {
        row[i].classList.add("row-" + i);
        console.log(row[i]);
    }
}