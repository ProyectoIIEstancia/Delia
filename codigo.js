function filtrado() {

    var select = document.getElementById("buscador");
    var opcionSeleccionada = select.options[select.selectedIndex].text;
    document.getElementById("seleccion").innerHTML = opcionSeleccionada;
}