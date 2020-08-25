function init() {
    
    var ejercicio=parseInt(prompt("Ingrese un número entre 1 y 5"));
    switch (ejercicio) {
        case 1:
        //ejercicio1
        var num=prompt("Ingresa un numero")
            if (num<1 ||num>100) {
                alert("Debe ingresar un número entre 1 y 100")
                num=prompt("ingresa un numero")
                for (let i = 0; i <= num; i++) {
                    console.log(i);
                }
            } 
            else {
                for (let i = 0; i <= num; i++) {
                    console.log(i);   
                }  
            }
            document.write(`<h1 style="text-align:center; font-size:50px">Desafío Ciclos y métodos</h1> 
            <p style="text-align:center; font-size:30px"> Revisa la consola</p>`)
        break;
        case 2:
        //ejericio2
        do {
        var respuesta= prompt("¿De qué color es el caballo blanco de napoleón?")
        } while (respuesta.toLowerCase()!="blanco");
        document.write(`<h1 style="text-align:center; font-size:50px">Desafío Ciclos y métodos</h1> 
        <p style="text-align:center; font-size:30px"> Revisa la consola</p>`)
            break;

        case 3:
        //ejercicio3

        var promediomate=prompt("Ingrese promedio matemática");    
        var promediofisica=prompt("Ingrese promedio física");
        var promediociencias=prompt("Ingrese promedio ciencias");    

        function promedio(promedioramos) {
        var promedioramos=[promediomate,promediofisica, promediociencias];
            var promtotal=(parseFloat(promedioramos[0])+parseFloat(promedioramos[1])+parseFloat(promedioramos[2]))/parseFloat(promedioramos.length);
            if ( Math.round(promtotal)===promtotal) {
                alert("Su promedio final es: "+ promtotal); 
                console.log(promtotal)
            } else {
                console.log(promtotal)
                promtotal=Math.round(promtotal)
                alert("Su promedio final es: "+ promtotal); 
            }      
        };
        promedio()
        document.write(`<h1 style="text-align:center; font-size:50px">Desafío Ciclos y métodos</h1> 
        <p style="text-align:center; font-size:30px"> Revisa la consola</p>`)
            break;

        case 4:
        //ejercicio 4
        alert("INGRESE A CONTINUACIÓN 3 FRUTAS");
        var fruta1=prompt("Ingrese la primera fruta")
        var fruta2=prompt("Ingrese la segunda fruta")
        var fruta3=prompt("Ingrese la tercera fruta")
        var frutas=[fruta1,fruta2,fruta3];  

        for (let fruta of frutas){
            if (fruta.toLowerCase()==="manzana") {
                continue;
            }
            console.log(fruta);
        };
        document.write(`<h1 style="text-align:center; font-size:50px">Desafío Ciclos y métodos</h1> 
        <p style="text-align:center; font-size:30px"> Revisa la consola</p>`)
        break;
        
        case 5:
            //ejercicio5
            var nombre=prompt("Ingrese su nombre")        
            var conttotal=0
            for (var i=0;i<nombre.length;i++){
            switch (nombre[i]) {
                case 'a':
                    conttotal++
                    break;
                case 'e':
                    conttotal++
                    break;
                case 'i':
                    conttotal++
                    break;
                case 'o':
                    conttotal++
                    break;
                case 'u':
                    conttotal++
                    break;
                default:
                    break;
            }  
            }
            var consonantes=(nombre.length-conttotal)
            alert(`El nombre ${nombre} posee ${conttotal} vocales y ${consonantes} consonantes`);
            document.write(`<h1 style="text-align:center; font-size:50px">Desafío Ciclos y métodos</h1><p style="text-align:center; font-size:30px"> Revisa la consola</p>`)
            break;
            default:
            alert("debe ingresar un número entre 1 y 5");
            location.reload()        
    }
}


