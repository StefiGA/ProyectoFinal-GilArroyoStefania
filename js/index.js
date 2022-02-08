$(() => {
	obtenerProductos();
	// si el carrito tiene algo, imprime el contenido
	if (carrito.length) imprimirCarrito();
});
// variable que contendra el array de productos
let productos;

// busco en localStorage el carrito. Si no está (primera vez que usuario usa la pagina), carrito es un array vacio
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const obtenerProductos = () => {
	$.get("/js/productos.json", (respuesta, estado) => {
		if (estado != "success") return Swal.fire("Error obteniendo datos");

		productos = respuesta.products;

		imprimirProductos(true);
	});
};

const imprimirProductos = (animacion) => {
	$(".contenedorDeProductos").empty();
	let delay = 50;
	// compruebo valor de animacion para asignar usando operador ternario
	let fade = animacion ? 800 : 0;

	productos.forEach((prod) => {
		// si el producto ya esta en el carrito, esto devuelve true. Y aplica propiedad "disabled" al boton
		let enCarrito = carrito.some(
			(prodEnCarrito) => prodEnCarrito.id === prod.id
		);
		delay = animacion ? delay + 200 : 0;

		$(".contenedorDeProductos").append(
			$(`<article class="pd__columna wow animate__animated animate__zoomIn">
            <img src="${prod.imagen}" alt="${prod.alt}">
            <h4 class="nombreProductosDestacados">${prod.nombre}</h4>
            <p><b>$${prod.precio}</p></b>
            <p>${prod.cuotas}</p>
            <button id="${prod.id}" class="botonAnañirAlCarrito" onclick="agregarAlCarrito(event)" ${
				enCarrito ? "disabled" : null
			} >${enCarrito ? "En Carrito" : "Añadir al Carrito"}</button>
        </article>`)
				.hide()
				.delay(delay)
				.fadeIn(fade)
		);
	});
};

const agregarAlCarrito = (e) => {
	e.target.textContent = "En Carrito";
	e.target.disabled = true;
	const idSeleccionado = Number(e.target.id);
	const productoFiltrado = productos.find((p) => p.id === idSeleccionado);
	carrito.push(productoFiltrado);
	localStorage.setItem("carrito", JSON.stringify(carrito));
	imprimirCarrito();
};

const imprimirCarrito = () => {
	// reinicio el contenido para evitar copia repetida
	$("#carrito").empty();

	let total = 0;

	carrito.forEach((p) => {
		total += total + Number(p.precio);
		$("#carrito").append(`
		<tr>
		    <td>${p.nombre}</td>
		    <td>$${p.precio}</td>
		    <td><button id="${p.id}" class="eliminar" onclick="eliminarProducto(event)">Eliminar</button></td>
		</tr>
		`);
	});
	$("#carrito").append(`
    <span class="total">Total $${total.toFixed(2)}`);
};

const eliminarProducto = (e) => {
	const id = Number(e.target.id);
	const index = carrito.findIndex((p) => p.id === id);
	carrito.splice(index, 1);

	// reemplazo el carrito de localStorage
	localStorage.setItem("carrito", JSON.stringify(carrito));

	// imprimo el carrito adentro del modal
	imprimirCarrito();

	// esto no esta bueno, pero es necesario para que no queden deshabilitados los botones
	imprimirProductos(false);
};

