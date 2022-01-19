// accedo al contenedor que alojará los article por cada prod.
const contenedorDeProductDestac = document.querySelector(".contenedorDeProductDestac");
// creo carrito
const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// array de objetos. cada objeto es un producto
const productosDes = [
	{
		id: 1,
		imagen: "./Imagenes/Plantas/Planta-Cherry.jpg",
		alt: "planta rosa",
		nombre: "Cherry",
		tipo: "interior",
		precio: 1300,
		cuotas: "3 cuotas sin interés",
	},
	{
		id: 2,
		imagen: "./Imagenes/Plantas/Planta-LitleMercury.jpg",
		alt: "planta verde y rosa de hojas chicas",
		nombre: "Litle Mercury",
		tipo: "exterior",
		precio: 1200,
		cuotas: "3 cuotas sin interés",
	},
	{
		id: 3,
		imagen: "./Imagenes/Plantas/Planta-Mary.jpg",
		alt: "planta de hojas rojas y chicas",
		nombre: "Mary",
		tipo: "interior",
		precio: 1500,
		cuotas: "3 cuotas sin interés",
	},
	{
		id: 4,
		imagen: "./Imagenes/Macetas/Maceta-Silk.jpg",
		alt: "planta joven rosa",
		nombre: "Silk",
		tipo: "interior",
		precio: 2800,
		cuotas: "3 cuotas sin interés",
	},
    {
		id: 5,
		imagen: "./Imagenes/Macetas/Maceta-Elegante.jpg",
		alt: "planta de flores secas con maceta alargada",
		nombre: "Elegante",
		tipo: "interior",
		precio: 1900,
		cuotas: "3 cuotas sin interés",
	},
    {
		id: 6,
		imagen: "./Imagenes/Macetas/Maceta-Cheeky.jpg",
		alt: "ramo de flores rojos con maceta en forma de circulos",
		nombre: "Cheeky",
		tipo: "interior",
		precio: 1800,
		cuotas: "3 cuotas sin interés",
	},
    {
		id: 7,
		imagen: "./Imagenes/Macetas/Maceta-Holly.jpg",
		alt: "planta de flores chicas con maceta transparente",
		nombre: "Holly",
		tipo: "interior",
		precio: 1900,
		cuotas: "3 cuotas sin interés",
	},
    {
		id: 8,
		imagen: "./Imagenes/Plantas/Exterior/Planta nicole.jpg",
		alt: "planta de hojas verdes largas",
		nombre: "Nicole",
		tipo: "interior",
		precio: 2800,
		cuotas: "3 cuotas sin interés",
	},
    {
		id: 9,
		imagen: "./Imagenes/Plantas/Exterior/Planta victor.jpg",
		alt: "cactus grande verde",
		nombre: "Victor",
		tipo: "interior",
		precio: 2100,
		cuotas: "3 cuotas sin interés",
	},
    {
		id: 10,
		imagen: "./Imagenes/Plantas/Interior/Planta charllote.jpg",
		alt: "planta de hojas violetas y verdes",
		nombre: "Charllote",
		tipo: "interior",
		precio: 2900,
		cuotas: "3 cuotas sin interés",
	},
];

// se ejecuta al cargarse el html. Imprime todos los objetos
// del array "productos"
document.addEventListener("DOMContentLoaded", () => {
	productosDes.forEach((prod) => {
		let article = `
        <article class="pd__columna" id="${prod.id}">
            <img src="${prod.imagen}" alt="${prod.alt}">
            <h4>${prod.nombre}</h4>
            <p><b>$${prod.precio}</p></b>
            <p>${prod.cuotas}</p>
            <button onclick="sumarAlCarrito(event)" >Añadir al carrito</button>
        </article>`;
		// suma cada article al parent, sin reemplazar el contenido previo.
		contenedorDeProductDestac.innerHTML += article;
	});
});

function sumarAlCarrito(event) {
	// accedemos al ID del elemento padre del elemento que disparo el evento
	console.log(event.target.parentElement.id);

	// Metodo find devuelve el primer elemento que coincide con la busqueda
	// buscamos el elemento del array productos que coincida en ID con el
	// id que trajo el evento
	const prodSeleccionado = productosDes.find(
		(p) => p.id === Number(event.target.parentElement.id)
	);
	console.log(prodSeleccionado);
	// guardar prod seleccionado en array carrito
	carrito.push(prodSeleccionado);
	guardarEnLocalStorage(carrito);
}

function guardarEnLocalStorage(array) {
	localStorage.setItem("carrito", JSON.stringify(array));
}
