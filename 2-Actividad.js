/*

VARIABLES
FUNCIONES
OBJETOS
ARRAYS
MÉTODOS DE BÚSQUEDA Y FILTRADO EN ARRAYS

*/


//OBJETOS Acá estarán los DATOS PERSONALES. o donde se realizará el envió del producto

const personal = {
    nombre: "",
    apellido: "",
    edad: 0,
    casada: Boolean,
    mascota: Boolean,
    direccion: {
        localidad: "",
        calle: "",
        altura: "",
    }
}


//AGREGAR O ACTUALIZAR CRUD

personal.nombre = prompt("Tú nombre es: ")
personal.edad = Number(prompt("Genial. " + personal.nombre + " ¿Cual es tu edad?: "))
personal.direccion.localidad = prompt("Tú Localidad es: ")
personal.direccion.calle = prompt("Calle: ")
personal.direccion.altura = prompt("Altura: ")



//Acá estarán los Arrays. Los catalogs, equipos a vender.

const celulares = [ //CELULARES CARGADOS
    { id: 1, marca: "Iphone", modelo: "Xs Max", precio: 700 },
    { id: 2, marca: "Iphone", modelo: "8 Plus", precio: 350 },
    { id: 3, marca: "Samsung", modelo: "Galaxy S4", precio: 150 },
    { id: 4, marca: "Xiaomi", modelo: "Redmi Note 8", precio: 50 }
]


// FILTER (Filtra los OBJETOS del Array, mediante un precio en especificio)
let filtroiphone = celulares.filter((x) => x.marca == "Iphone")
let filtrosamsung = celulares.filter((x) => x.marca == "Samsung")
let filtroxiaomi = celulares.filter((x) => x.marca == "Xiaomi")


const catalogos = document.querySelector(".catalogo") //Definimos el .div


for (x of celulares) {
    let contenedor = document.createElement("div")
    contenedor.innerHTML = `
    <h5> Modelo: ${x.marca}</h5>
    <p>Precio: U$D ${x.precio}</p>
    <p></p>
    

<button class="btn btn-warning">Comprar</button>
`
    document.body.appendChild(contenedor)
}



let comprar = prompt(`
Bienvenido a la tienda de Celulares

1- Ver el catalogo
2- Filtrar/buscar Modelos
3- Salir
`)

if (comprar == 1) {
    VCompra = prompt(`
    Modelo: 1, marca: "Iphone", modelo: "Xs Max", precio: 700 
    Modelo: 2, marca: "Iphone", modelo: "8 Plus", precio: 350 
    Modelo: 3, marca: "Samsung", modelo: "Galaxy S4", precio: 150 
    Modelo: 4, marca: "Xiaomi", modelo: "Redmi Note 8", precio: 50
    `)

} else if (comprar == 2) {
    Modelo = prompt(`Indicá el modelo: Iphone, Samsung o Xiaomi`)
    if (Modelo == "Iphone") {
        console.log(filtroiphone)

    } else if (Modelo == "Samsung") {
        console.log(filtrosamsung)

    } else if (Modelo == "Xiaomi") {
        console.log(filtroxiaomi)

    } else {
        console.log("No ingresaste ningun campo")
    }

} else {
    console.log("No ingresaste ningun valor valido. ")
}


function recordar() {
    console.log(`Genial ${personal.nombre}!. El equipo será enviado en
La localidad de ${personal.direccion.localidad} La calle, ${personal.direccion.calle}. El 
número: ${personal.direccion.altura}. Muchas gracias!`)
}

recordar(personal, recordar)
