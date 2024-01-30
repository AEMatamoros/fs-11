let temporizador;
let tiempoInicial;
let ejecutando = false;

function iniciarTemporizador() {
  if (!ejecutando) {
    let fechaFinal = new Date();
    fechaFinal.setFullYear(fechaFinal.getFullYear() + 1);
    fechaFinal.setMonth(0);
    fechaFinal.setDate(1);
    fechaFinal.setHours(0);
    fechaFinal.setMinutes(0);
    fechaFinal.setSeconds(0);
    // console.log(fechaFinal);
    ejecutando = true;
    temporizador = setInterval(actualizarTemp, 1000, fechaFinal);
  }
}

function actualizarTemp(fechaFinal) {
  let tiempoActual = Date.now();
  let tiempoRestante = fechaFinal - tiempoActual;

  if (tiempoRestante <= 0) {
    clearInterval(temporizador);
    ejecutando = false;
    document.getElementById("temporizador").textContent = "Feliz A;o Nuevo!!!!";
  } else {
    let seg = Math.floor(tiempoRestante / 1000) % 60;
    let mins = Math.floor(tiempoRestante / (1000 * 60)) % 60;
    let horas = Math.floor(tiempoRestante / (1000 * 60 * 60)) % 24;
    let dias = Math.floor(tiempoRestante / (1000 * 60 * 60 * 24)) % 365;

    document.getElementById("temporizador").textContent = `${
      dias < 10 ? "0" + dias : dias
    } ${horas < 10 ? "0" + horas : horas}:${mins < 10 ? "0" + mins : mins}:${
      seg < 10 ? "0" + seg : seg
    }`;
  }
}

iniciarTemporizador();
