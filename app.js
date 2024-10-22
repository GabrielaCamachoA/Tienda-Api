const productosContenedor = document.getElementById("productos");
const producto = document.querySelector("producto");
const modal = document.getElementById("mi-modal");
const imgModal = document.getElementById("imagen_modal");
const tituloModal = document.getElementById("titulo_modal");
const pModal = document.getElementById("p_modal");
const span = document.getElementsByClassName("close")[0];
const precioModal = document.getElementById("precio-modal");
const catModal = document.getElementById("cat-modal");

function crearTarjeta({image,title, description, price,category}) {
    const contenedor = document.createElement("div");
    productosContenedor.appendChild(contenedor);
    contenedor.className = "producto";

    contenedor.addEventListener("click", function(b) {
        modal.classList.add("mostrar");
        tituloModal.innerText = title;
        imgModal.src = image;
        pModal.innerText =  description;
        precioModal.innerText = price;
        catModal.innerText = category;
    })

    const imagen = document.createElement("img");
    imagen.src = image;
    contenedor.appendChild(imagen);
   
    const info = document.createElement("div");
    contenedor.appendChild(info);

    const titulo = document.createElement("h1");
    let titleOffset = ""
    if (String(title).length > 16) titleOffset = "..."
    titulo.innerText = String(title).slice(0,16) + titleOffset;
    info.appendChild(titulo);
}
async function conseguirInformacion () {
    const respuesta = await fetch("https://fakestoreapi.com/products");
    const informacion = await respuesta.json()
    
    informacion.forEach(producto => {
        crearTarjeta(producto)
    });
} // el await hace que la funcion espere unos segundos parea poder extraer la informacion de la API
// la linea 3 hace que la informacion se convierta en un archivo json ( objeto de js)
conseguirInformacion()

span.onclick = function () {
    modal.classList.remove("mostrar");
}