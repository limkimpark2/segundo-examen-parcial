var botonIngresar = document.getElementById("ingresar");
var botonConvertir = document.getElementById("convertir");

function iniciarSesion(evento) {
    var input = document.getElementById("input_nombre");
    var nombre = input.value;
    if (nombre == "") {
        alert("Ingrese su usuario");
    } else {
        var mensaje = document.getElementById("mensaje");
        mensaje.textContent = "Bienvenid@ " + nombre;
        input.value = "";
    }
}

function convertirMoneda(evento) {
    var inputBolivianos = document.getElementById("input_bolivianos");
    var inputMonedaConvertida = document.getElementById("input_mc");
    var selectMonedaConvertida = document.getElementById("select_mc");

    var bolivianos = inputBolivianos.value; // 4.5, 89.32
    var monedaConvertida = selectMonedaConvertida.value; // EU, USD

    if (bolivianos == "") {
        alert("Ingresa la cantidad de bolivianos a convertir");
    } else {
        if (monedaConvertida == "USD") {
            inputMonedaConvertida.value = bolivianos / 6.96;
        }

        if (monedaConvertida == "EU") {
            inputMonedaConvertida.value = bolivianos / 6.81;
        }
    }
}

botonIngresar.addEventListener("click", iniciarSesion);
botonConvertir.addEventListener("click", convertirMoneda);
