/* //ejercicio1
var num=prompt("ingresa un numero")

for (let i = 0; i <= num; i++) {
    console.log(i);
    
}
//ejericio2
do {
   var respuesta= prompt("¿De que color es el caballo blanco de napoleón?")
} while (respuesta!="blanco");

//ejercicio3

var promediomate=prompt("ingrese promedio matemática");    
var promediofisica=prompt("ingrese promedio física");
var promediociencias=prompt("ingrese promedio ciencias");    


function promedio(promedioramos) {
var promedioramos=[promediomate,promediofisica, promediociencias];
    var promtotal=(parseFloat(promedioramos[0])+parseFloat(promedioramos[1])+parseFloat(promedioramos[2]))/parseFloat(promedioramos.length);
    if ( Math.round(promtotal)===promtotal) {
        alert("su promedio final es: "+ promtotal); 
        console.log(promtotal)
    } else {
        console.log(promtotal)
        promtotal=Math.round(promtotal)
        alert("su promedio final es: "+ promtotal); 
    }
    
};
promedio()
 */
//ejercicio 4
alert("INGRESE A CONTINUACIÓN 3 FRUTAS");
var fruta1=prompt("ingrese la  primera fruta")
var fruta2=prompt("ingrese la  segunda fruta")
var fruta3=prompt("ingrese la  tercera fruta")



function filtrofrutas(frutas) {
    var frutas=[fruta1,fruta2,fruta3];  

    var frutafinal= frutas.filter(fruta=>fruta!="manzana")
    
    console.log(frutafinal);
};

filtrofrutas()

//ejercicio5

