const tPequeno = document.querySelector("#pequena");
const tMediano = document.querySelector("#mediana");
const tGrande = document.querySelector("#grande");
const costoPrepa = 0.50;
const costoHarina = 0.03;
const iExtra = 0.10;
const iPeperoni = document.querySelectorAll("input[name='ingrediente']");
var factorTamano = 1;
const pizza = document.querySelector(".input__ingre")
const pizzaTamanos = document.querySelector(".input__tamanos")
const ponerePrecio = document.querySelectorAll(".card")


pizzaTamanos.addEventListener("input" ,e=>{
    calculaPizza (e)
})


pizza.addEventListener("input" ,e=>{
    calculaPizza (e)
})

function calculaPizza (e){
     //console.log("funciona" +  e.target.value)

    var contar = 0

    var desPerso = "Pizza Personalizada " + datosPizza.tamano + ": | ";

    var idPI = datosPizza.tamano

     //Limpia los datos referentes a los ingredientes de la constante datospizza
    for (i = 2;  i <= 10; i++) {
        datosPizza["i" + i] = ""
    }

    var contarId = 0

     //Cuenta los checks  activados y asigna el valor a la constante datospizza
    for (const radioButton of iPeperoni) {
        contarId ++
        if (radioButton.checked) {
            contar += 1
            datosPizza["i" + contar] = radioButton.value;
            desPerso += radioButton.value + " | "
             //console.log(radioButton.value)
            idPI += contarId
        }
    }

    //console.log(idPI);
    //calcula costo de ingredientes extra segun su tamaño
    datosPizza.precioIngrediente =  contar*iExtra*factorTamano*1.5
    //Calcula el precio total de la pizza
    datosPizza.precioTotal = (parseFloat(datosPizza.tamanoPrecio) + parseFloat(datosPizza.precioIngrediente)).toFixed(2)

    //Escribe el precio en la tarjeta
    document.getElementById("precio__total").innerText= "$" + datosPizza.precioTotal

    //Escribe la descripcion de la pizza personalizada
    document.getElementById("persoPizza").innerText = desPerso
    //console.log(Date.now())

    document.getElementById('pi').setAttribute('data-id', idPI);

    //console.log(document.getElementById('pi').getAttribute('data-id'))
}


const datosPizza = {
    tamano:"",
    tamanoPrecio:0,
    i1:"",
    i2:"",
    i3:"",
    i4:"",
    i5:"",
    i6:"",
    i7:"",
    i8:"",
    i9:"",
    precioIngrediente:0,
    precioTotal: 0,
}


function Precio (radio){
    var pequena = (Math.PI * Math.pow(radio,2) * costoHarina) ;
    pequena = (pequena + costoPrepa) * 1.5
    pequena = pequena.toFixed(2)
    return pequena
}

document.getElementById("t1").innerText= "Pequeña (10cm): $ " + Precio (5);

document.getElementById("t2").innerText= "Mediana (14cm): $ " + Precio (7);

document.getElementById("t3").innerText= "Grande (16cm): $ " + Precio (8);

tPequeno.addEventListener("input" ,e=>{
    datosPizza.tamano = e.target.value

    datosPizza.tamanoPrecio = Precio (5)

    factorTamano = 1

    document.getElementById("selecIngre").innerText= "Seleccione ingredientes: (costo por ingrediente: $ " + (factorTamano * iExtra * 1.5).toFixed(2) +")";
    //console.log(datosPizza)
})

tMediano.addEventListener("input" ,e=>{
    datosPizza.tamano = e.target.value

    datosPizza.tamanoPrecio = Precio (7)

    factorTamano = 2

    document.getElementById("selecIngre").innerText= "Seleccione ingredientes: (costo por ingrediente: $ " + (factorTamano * iExtra * 1.5).toFixed(2) +")";
    //console.log(datosPizza)
})

tGrande.addEventListener("input" ,e=>{
    datosPizza.tamano = e.target.value


    datosPizza.tamanoPrecio = Precio (8)

    factorTamano = 4

    document.getElementById("selecIngre").innerText= "Seleccione ingredientes: (costo por ingrediente: $ " + (factorTamano * iExtra * 1.5).toFixed(2) +")";

    //console.log(datosPizza)
})

const listaPrecioPizza = {
    s01:"$4.28",
    s02:"$7.68",
    s03:"$9.80",
    s04: "$4.43",
    s05: "$7.98",
    s06: "$10.40",
    s07: "$4.43",
    s08: "$7.98",
    s09: "$10.40",
    s10: "$4.43",
    s11: "$7.98",
    s12: "$10.40",
    s13: "$4.88",
    s14: "$8.88",
    s15: "$12.20",
}


var contarPizza = 0

for (const w of ponerePrecio) {
    contarPizza ++

    var idCorregido = "s" + ("00" +  contarPizza).slice(-2)

    //console.log(idCorregido);

    document.getElementById(idCorregido).innerText = listaPrecioPizza[(idCorregido)]
}






