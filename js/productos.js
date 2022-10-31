function cargarDatos() {
    var productosJson = [
        {
            id: 1,
            nombre: "Cougar Blazer",
            descripcion:
                "Procesador: Ryzen 7 5700x Placa Madre: Asus Rog b550 Memoria Ram: 16gb corsair Tarjeta de Video: gtx 1660 ti Disco m.2 1 tb",
            precio: 7500,
            categoria: "Categoria #1",
            imagen: "./productos/1.jpg",
        },
        {
            id: 2,
            nombre: "ReDragon Elite",
            descripcion:
                "Procesador: Ryzen 7 5700x Placa Madre: Aorus Pro b550 Memoria Ram: 16gb corsair Tarjeta de Video: gtx 1660 ti Disco m.2 1 tb",
            precio: 8500,
            categoria: "Categoria #1",
            imagen: "./productos/2.jpg",
        },
        {
            id: 3,
            nombre: "Cougar Conquer 2 Elite",
            descripcion:
                "Procesador: Ryzen 9 5750x Placa Madre: Aorus Elite x570 Memoria Ram: 64gb corsair Tarjeta de Video: RTX 3080 ti Disco m.2 2 tb",
            precio: 48000,
            categoria: "Categoria #1",
            imagen: "./productos/3.jpg",
        },
        {
            id: 4,
            nombre: "Corsair Atack Pro",
            descripcion:
                "Procesador: Ryzen 5 5600x Placa Madre: Aorus Elite b550 Memoria Ram: 16gb corsair Tarjeta de Video: gtx 1650 Sup Disco m.2 1 tb",
            precio: 7200,
            categoria: "Categoria #1",
            imagen: "./productos/4.jpg",
        },
        {
            id: 5,
            nombre: "Cougar Conquer 2 Pro",
            descripcion:
                "Procesador: Ryzen 7 5700x Placa Madre: Steel b550 Memoria Ram: 32gb corsair Tarjeta de Video: gtx 1660 ti Disco m.2 1 tb",
            precio: 10000,
            categoria: "Categoria #1",
            imagen: "./productos/5.jpg",
        },
        {
            id: 6,
            nombre: "Cougar Conquer 2 Elite",
            descripcion:
                "Procesador: Ryzen 9 5950x Placa Madre: Asus Rog x570 Memoria Ram: 64gb corsair Tarjeta de Video: RTX 3070 ti Disco m.2 1 tb",
            precio: 22000,
            categoria: "Categoria #1",
            imagen: "./productos/6.jpg",
        },
        {
            id: 7,
            nombre: "Antec Titatium",
            descripcion:
                "Procesador: Ryzen 9 7950x Placa Madre: Steel x670 Memoria Ram: 128gb corsair Tarjeta de Video: RTX 3090 ti Disco m.2 2 tb",
            precio: 72000,
            categoria: "Categoria #1",
            imagen: "./productos/7.jpg",
        },
        {
            id: 8,
            nombre: "Cougar Conquer Elite",
            descripcion:
                "Procesador: Ryzen 7 5700x Placa Madre: Asus Rog X570 Memoria Ram: 32gb corsair Tarjeta de Video: RTX 2080 ti Disco m.2 1 tb",
            precio: 22000,
            categoria: "Categoria #1",
            imagen: "./productos/8.jpg",
        },
        {
            id: 9,
            nombre: "Deepcool Elite",
            descripcion:
                "Procesador: Ryzen 7 5700x Placa Madre: Asus Rog b550 Memoria Ram: 32gb corsair Tarjeta de Video: RTX 3070 Disco m.2 1 tb",
            precio: 15500,
            categoria: "Categoria #1",
            imagen: "./productos/9.jpg",
        },
        {
            id: 10,
            nombre: "DeepCool Pro",
            descripcion:
                "Procesador: Ryzen 5 5600x Placa Madre: Asus Rog b550 Memoria Ram: 16gb corsair Tarjeta de Video: RTX 2060 Disco m.2 1 tb",
            precio: 12000,
            categoria: "Categoria #1",
            imagen: "./productos/10.jpg",
        },
        {
            id: 11,
            nombre: "Ryzen 9 7950x",
            descripcion:
                "Procesador AMD Ryzen 9 7950X - 16-Core 4.5 GHz - Socket AM5",
            precio: 5570,
            categoria: "Categoria #1",
            imagen: "./productos/11.jpg",
        },
        {
            id: 12,
            nombre: "Ryzen 7 7700x",
            descripcion:
                "Procesador AMD Ryzen 7 7700X - 8-Core 4.5 GHz - Socket AM5",
            precio: 3480,
            categoria: "Categoria #1",
            imagen: "./productos/12.jpg",
        },
        {
            id: 13,
            nombre: "Ryzen 5 7600x",
            descripcion:
                "Procesador AMD Ryzen 5 7600X - 6-Core 4.7 GHz - Socket AM5",
            precio: 2720,
            categoria: "Categoria #1",
            imagen: "./productos/13.jpg",
        },
        {
            id: 14,
            nombre: "Asus Rog x670e Crosshair Extreme",
            descripcion:
                "Trayendo un legado de grandeza ROG junto con una ráfaga de la última tecnología para ensambles completamente cargados ",
            precio: 6500,
            categoria: "Categoria #1",
            imagen: "./productos/14.jpg",
        },
        {
            id: 15,
            nombre: "Asus Rog x670e Crosshair Hero",
            descripcion:
                "Tarjeta madre AMD X670 ATX con 18 + 2 fases de poder, compatibilidad con DDR5, cinco puertos M.2, puerto de panel frontal",
            precio: 5500,
            categoria: "Categoria #1",
            imagen: "./productos/15.jpg",
        },
        {
            id: 16,
            nombre: "Asus Prime x670",
            descripcion:
                "Placa base ATX para AMD X670 Ryzen™ AM5 con soporte de almacenamiento PCIe 5.0, tres ranuras M.2, DDR5, USB 3.2 Gen 2x2 de tipo C®, compatible con USB4® y Ethernet de 2,5 Gb",
            precio: 3000,
            categoria: "Categoria #1",
            imagen: "./productos/16.jpg",
        },
        {
            id: 17,
            nombre: "Corsair Dominator DDR5 5200MHz",
            descripcion:
                "Kit de memoria DDR5 DRAM DOMINATOR PLATINUM RGB de 32 GB (2x16 GB) a 5200 MHz C38 — Negro",
            precio: 1500,
            categoria: "Categoria #1",
            imagen: "./productos/17.jpg",
        },
        {
            id: 18,
            nombre: "Adata XPG DDR5 5200MHz",
            descripcion:
                "El XPG LANCER DDR5 cuenta con un IC de administración de energía (PMIC) integrado que mejora la estabilidad de la fuente de alimentación. Su voltaje de funcionamiento más bajo también hace que LANCER ",
            precio: 1400,
            categoria: "Categoria #1",
            imagen: "./productos/18.jpg",
        },
        {
            id: 19,
            nombre: "SSD M.2 Samsung Evo 970",
            descripcion:
                "El SSD 970 EVO te ofrece unas velocidades de lectura y escritura sorprendentemente rápidas, una fiabilidad líder en el mercado, así como distintas capacidades de hasta 2 TB*. La última tecnología V-NAND",
            precio: 1100,
            categoria: "Categoria #1",
            imagen: "./productos/19.jpg",
        },
        {
            id: 20,
            nombre: "Fuente Aorus 1200w Platinum",
            descripcion:
                "Digital LCD monitor 80 PLUS Platinum certified Fully modular design 100% Japanese capacitors Compact size design 140mm smart double ball bearing Fan dust removal function Single +12V rail",
            precio: 4000,
            categoria: "Categoria #1",
            imagen: "./productos/20.jpg",
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
