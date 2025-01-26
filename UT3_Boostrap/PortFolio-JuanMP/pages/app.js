function mensajeRecibido() {
    alert('formulario enviado correctamente');
}

window.onload = function () {
    document.getElementById('btnEnviar').addEventListener('click', mensajeRecibido);
}
const container = document.getElementById('container-circle');
const prompt = document.getElementById('prompt');

const totalTime = 7500;
const holdTime = totalTime / 5;
const breatheTime = (totalTime / 5) * 2;

const breathAnimation = () => {
  prompt.innerText = 'Primero pienso...!';
  container.className = 'container grow';
  setTimeout(() => {
    prompt.innerText = 'Luego existo...!';
    setTimeout(() => {
      prompt.innerText = 'y Despues actuo ...!';
      container.className = 'container shrink';
    }, holdTime);
  }, breatheTime);
};

breathAnimation();
setInterval(breathAnimation, totalTime);
