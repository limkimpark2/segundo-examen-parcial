function cargarDatos() {
    var productosJson = [
        {
            id: 1,
            nombre: "Producto #1",
            descripcion:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            precio: 325.5,
            categoria: "Categoria #1",
            imagen: "https://thumb.pccomponentes.com/w-140-140/articles/35/350230/1523-pccom-bronze-intel-core-i5-10400-8gb-1tb-480ssd.jpg",
        },
        {
            id: 2,
            nombre: "Producto #2",
            descripcion:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            precio: 325.5,
            categoria: "Categoria #2",
            imagen: "https://thumb.pccomponentes.com/w-140-140/articles/35/350230/1523-pccom-bronze-intel-core-i5-10400-8gb-1tb-480ssd.jpg",
        },
        {
            id: 3,
            nombre: "Producto #3",
            descripcion:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            precio: 325.5,
            categoria: "Categoria #3",
            imagen: "https://thumb.pccomponentes.com/w-140-140/articles/35/350230/1523-pccom-bronze-intel-core-i5-10400-8gb-1tb-480ssd.jpg",
        },
        {
            id: 4,
            nombre: "Producto #4",
            descripcion:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            precio: 325.5,
            categoria: "Categoria #4",
            imagen: "https://thumb.pccomponentes.com/w-140-140/articles/35/350230/1523-pccom-bronze-intel-core-i5-10400-8gb-1tb-480ssd.jpg",
        },
        {
            id: 5,
            nombre: "Producto #5",
            descripcion:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            precio: 325.5,
            categoria: "Categoria #4",
            imagen: "https://thumb.pccomponentes.com/w-140-140/articles/35/350230/1523-pccom-bronze-intel-core-i5-10400-8gb-1tb-480ssd.jpg",
        },
    ];

    localStorage.setItem("productos", JSON.stringify(productosJson));
}

function tarjetaProducto(id, nombre, descripcion, imagen, precio) {
    var plantillaHTMLProductos = /*html*/ `
        <div class="col-12 col-sm-6 col-md-4 col-xl-3 my-2">
            <div class="card">
                <img
                    src="${imagen}"
                    class="card-img-top"
                    alt="${nombre}"
                />
                <div class="card-body">
                    <h5 class="card-title">
                        ${nombre} - 
                        <span class="badge rounded-pill bg-danger">
                            BS.- ${precio}
                        </span>
                    </h5>
                    <p class="card-text">
                        ${descripcion}
                    </p>
                    <button onClick="agregarACarrito(${id})" class="btn btn-primary">
                        Agregar al carrito
                        <i class="bi bi-cart-plus"></i>
                    </button>
                </div>
            </div>
        </div>`;

    return plantillaHTMLProductos;
}

function pintarProductos(params) {
    var contenedorTarjetas = document.getElementById("contenedor-tarjetas");
    var productos = JSON.parse(localStorage.getItem("productos"));
    for (let index = 0; index < productos.length; index++) {
        var producto = productos[index];
        var tarjeta = tarjetaProducto(
            producto.id,
            producto.nombre,
            producto.descripcion,
            producto.imagen,
            producto.precio
        );

        contenedorTarjetas.innerHTML += tarjeta;
    }
}

function agregarACarrito(idProducto) {
    var productos = JSON.parse(localStorage.getItem("productos"));

    var productoSeleccionado = productos.find(function (producto) {
        return producto.id == idProducto;
    });

    var miCarrito;

    var miCarritoDesdeLocalStorage = localStorage.getItem("micarrito");

    if (miCarritoDesdeLocalStorage == null) {
        miCarrito = [];
    } else {
        miCarrito = JSON.parse(miCarritoDesdeLocalStorage);
    }

    productoEnCarrito = miCarrito.find(function (producto) {
        return producto.id == productoSeleccionado.id;
    });

    if (productoEnCarrito) {
        productoEnCarrito["cantidad"] = productoEnCarrito["cantidad"] + 1;
    } else {
        productoSeleccionado["cantidad"] = 1;
        miCarrito.push(productoSeleccionado);
    }

    localStorage.setItem("micarrito", JSON.stringify(miCarrito));

    actualizarContadorCarrito();
}

function actualizarContadorCarrito() {
    var contadorCarrito = document.getElementById("contador-carrito");

    var miCarrito = JSON.parse(localStorage.getItem("micarrito"));

    var contadorItems = 0;

    if (miCarrito) {
        for (let index = 0; index < miCarrito.length; index++) {
            var item = miCarrito[index];

            contadorItems = contadorItems + item.cantidad;
        }
    }

    contadorCarrito.textContent = contadorItems;
}

function abrirCarrito() {
    var modal = new bootstrap.Modal(document.getElementById("modal-comprar"));

    modal.show();

    pintarProductosAComprar();
}

function pintarProductosAComprar() {
    var miCarrito = JSON.parse(localStorage.getItem("micarrito"));

    var miLista = /*html*/ `
    <table class='table'>
        <thead>
            <tr>
                <th>Producto</th>
                <th>Precio</th>    
                <th>Cantidad</th>    
                <th>Subtotal</th>
                <th>Acciones</th>
            </tr>
        </thead>
        <tbody>`;

    var total = 0;
    for (let index = 0; index < miCarrito.length; index++) {
        const producto = miCarrito[index];
        total += producto["cantidad"] * producto["precio"];
        miLista += /*html*/ `
            <tr>
                <td>${producto["nombre"]}</td>
                <td>${producto["precio"]}</td>    
                <td>${producto["cantidad"]}</td>    
                <td>${producto["cantidad"] * producto["precio"]}</td>    
                <td>
                    <button onClick="eliminarDeCarrito(${producto["id"]})"
                    style="border: 1px solid red; border-radius: 50%; width: 30px; height: 30px; color: red;">&times;</button>
                </td>    
            </tr>`;
    }

    if (total == 0) {
        miLista += /*html*/ `
        <tr>
            <td colspan="5">No hay productos en el carrito</td>
        </tr>`;
    }

    miLista += /*html*/ `
            <tr>
                <td colspan="3">Total</td>
                <td>${total}</td>
                <td></td>
            </tr>
        </tbody>
    </table>`;

    document.getElementById("lista-a-comprar").innerHTML = miLista;
}

function eliminarDeCarrito(idProducto) {
    var miCarrito = JSON.parse(localStorage.getItem("micarrito"));

    var indiceDeProductoAEliminar = miCarrito.findIndex(function (producto) {
        return producto.id == idProducto;
    });

    if (indiceDeProductoAEliminar != -1) {
        miCarrito.splice(indiceDeProductoAEliminar, 1);

        localStorage.setItem("micarrito", JSON.stringify(miCarrito));

        pintarProductosAComprar();
        actualizarContadorCarrito();
    }
}

window.onload = function () {
    cargarDatos();
    pintarProductos();
    actualizarContadorCarrito();
};
