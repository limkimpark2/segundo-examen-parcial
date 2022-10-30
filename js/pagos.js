function listaCompras() {
    var miCarrito = JSON.parse(localStorage.getItem("micarrito"));

    var items = ``;

    var total = 0;
    for (let index = 0; index < miCarrito.length; index++) {
        var producto = miCarrito[index];
        total += producto["cantidad"] * producto["precio"];
        items += /*html*/ `
        <li class="list-group-item d-flex justify-content-between">
            <span>${producto["nombre"]} (${producto["cantidad"]})</span>
            <span>${producto["cantidad"] * producto["precio"]}</span>
        </li>`;
    }

    items += /*html*/ `
        <li class="list-group-item d-flex justify-content-between">
            <span>Total</span>
            <strong>BOB <span id="total">${total}</span></strong>
        </li>
        `;

    document.getElementById("lista").innerHTML = items;
}

function borrarCarrito() {
    localStorage.setItem("micarrito", JSON.stringify([]));
    location.assign("productos.html");
    listaCompras();
}

window.onload = function () {
    listaCompras();
};
