// 1. crear las variables o selectores 

const carrito = document.querySelector("#carrito");

console.log(carrito);

const contenedorCarrito = document.querySelector("#lista-carrito tbody")

const vaciarCarritoBtn =  document.querySelector("#vaciar-carrito");

const listaCursos = document.querySelector('#lista-cursos');

const crearPizza = document.querySelector('#pi');


console.log(listaCursos)

// 2. estructura donde vamos a guardar

let articulosCarritos =  [];

// 3. definir los eventos 

cargarEventos();

function cargarEventos (){
    // click al boton de agregar al carrito
    listaCursos.addEventListener('click',agregarCurso);
    // Click al boton pizza personalizada
    crearPizza.addEventListener("click",agregarCurso);

    //eliminar curso del carrito
    carrito.addEventListener( 'click' , eliminarCurso);
    
    //boton para vaciar el carrito

    vaciarCarritoBtn.addEventListener( "click" , ()=>{
        articulosCarritos = [];
        vaciarCarrito();
    });
}

function agregarCurso(e) {
    e.preventDefault();
    //console.log("ingreso a la funcion")

    //console.log(e.target.classList.contains('agregar-carrito'));

    if(e.target.classList.contains('agregar-carrito')) {
        // es un oton de agregar carrito
        //console.log("boton")
        const curso = e.target.parentElement.parentElement;
        //console.log(curso);

        leerDatosCurso(curso);
    }
}


function  leerDatosCurso(curso) {
    //console.log(curso);
    //Definir un objeto
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector("span").textContent,
        cantidad: 1,
        id: curso.querySelector("a").getAttribute("data-id") 
    }
    //console.log(infoCurso);

    if(articulosCarritos.some(curso => curso.id === infoCurso.id )) {
        //caso de que exista o ya haya agregado el curso
        //console.log("Si esta")
        const cursos = articulosCarritos.map(i=>{
            if(i.id === infoCurso.id){
                i.cantidad ++;
                return i;
            }else{
                return i;
            }
        })

        //console.log(cursos);
        articulosCarritos = [...cursos]
    }else{
        //caso base
        // no existe o no se ha agregado el curso
        articulosCarritos = [...articulosCarritos,infoCurso];
    }
    
    //console.log(articulosCarritos);

    carritoHTML();
}

function carritoHTML(){
    vaciarCarrito();
    articulosCarritos.forEach(i=>{
        const row = document.createElement('tr');
        row.innerHTML =`
            <td>
                <img  src="${i.imagen}" width = 100>
            </td>
            <td>
                ${i.titulo}
            </td>
            <td>
                ${i.precio} 
            </td>
            <td>
                ${i.cantidad}
            </td>
            <td>
                <a href="#" class="borrar-curso" data-id="${i.id}">X</a>
            </td>
        `
        contenedorCarrito.appendChild(row);
    })
}

function vaciarCarrito(){
    //eliminar los cursos 
    
    //forma lenta 
    //contenedorCarrito.innerHTML = '';
    
    //forma rapida o formal
    while(contenedorCarrito.firstChild){
        contenedorCarrito.removeChild(contenedorCarrito.firstChild)
    }
}

function eliminarCurso(e){
    //eliminar curso del carrito
    e.preventDefault();

    if (e.target.classList.contains("borrar-curso")){
        const cursoId = e.target.getAttribute("data-id")

        if(articulosCarritos.some(i => i.cantidad >= 1)){
            if(articulosCarritos.some(curso => curso.id === cursoId)) {
                //esta el curso
                const cursos = articulosCarritos.map(i=>{
                    if(i.id === cursoId){
                        if(i.cantidad > 1 ){
                            i.cantidad--;
                            return i;
                        }else{
                            articulosCarritos = articulosCarritos.filter(curso => curso.id != cursoId);
                            return i;
                        }
                    
                }
        })
        carritoHTML();
    }
}}}
