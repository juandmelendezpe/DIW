function mensajeRecibido() {
    alert('formulario enviado correctamente');
}

window.onload = function () {
    document.getElementById('btnEnviar').addEventListener('click', mensajeRecibido);
}