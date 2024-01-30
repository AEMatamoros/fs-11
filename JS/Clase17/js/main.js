function sayMyName(name) {
  console.log(name);
}

console.log("Log 1");
// let o0 = setTimeout(sayMyName, 1000, "Alexis");
// let o1 = setTimeout(sayMyName, 2000, "Eduardo");
// let o2 = setTimeout(sayMyName, 0, "Alan");
console.log("Log 2");
console.log("Log 3");
console.log("Log 4");
// console.log(o0, o1, o2);

// Detener Temporizador
// clearTimeout(o0, o1, o2);

console.log("Log OP2 1");
// let o3 = setInterval(sayMyName, 1000, "Alexis");
// let o4 = setInterval(sayMyName, 2000, "Eduardo");
// let o5 = setInterval(sayMyName, 4000, "Alan");

// Detener Intervalos
// setTimeout(() => {
//   clearInterval(o3);
//   clearInterval(o4);
//   clearInterval(o5);
// }, 5000);

console.log("Log OP2 2");
console.log("Log OP2 3");
console.log("Log OP2 4");

let counter = 1;
let timer = setInterval(() => {
  console.log(counter);
  counter++;
  if (counter >= 6) {
    clearInterval(timer);
  }
}, 1000);
