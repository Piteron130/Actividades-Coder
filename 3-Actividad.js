const boton = document.querySelector("#boton")

boton.addEventListener("click", () => { //Declaramos función botón al click

    let contenedor = document.createElement("div")
    contenedor.innerHTML = `

    <div class="container">


        <h1>Datos personales</h1>

        <form action="">
            <label class="form-label">Nombre</label>
            <input type="text" class="form-control" id="name" placeholder="name">
            <label class="form-label">Apellido</label>
            <input type="text" class="form-control" id="apellido" placeholder="name">


            <button type="submit" class="btn btn-success" id="boton">Send</button>
        </form>

        
        <div>
    `
    document.body.appendChild(contenedor) //Este campo agregará un DIV. de formulario Boostrap

    //Declaramos variables para cargar los datos del boostrap
    const formulario = document.querySelector("form")
    const nombre = document.querySelector("#name")
    const apellido = document.querySelector("#apellido")

    formulario.addEventListener("submit", validarFormulario)

    function validarFormulario(e) { //Aquí validamos el submit
        e.preventDefault()


        //  Crear un objeto con los datos
        const datos = {
            nombre: nombre.value,
            apellido: apellido.value
        }

        // Convertir a JSON y guardar en localStorage
        const datosJSON = JSON.stringify(datos);
        localStorage.setItem('Personal', datosJSON);

        // 7. Mostrar en consola para verificar
        console.log(datos);

        contenedor.remove(); //Borrar contenedor, es decir el innerHTML completo
    }
})