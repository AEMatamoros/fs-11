// 'Hago un pedido al restaurante'
// let promise1 = new Promise((resolve, reject) => {
//   if (true) {
//     // Resultado si pueden ofrecerme ese platillo
//     resolve("Has recibido tu platillo");
//   } else {
//     //Resultado en caso de que el platillo no este disponible
//     reject("Platillo no disponible");
//   }
// });

//Resolucion de la promesa
// promise1
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((e) => {
//     console.log(e);
//   })
//   .finally(() => {
//     console.log(
//       "Proceso en caso de recibir cualquier resultado de la peticion"
//     );
//   });

//Resolucion de la promesa

// let promise2 = new Promise((resolve, reject) => {
//   if (true) {
//     // Resultado si pueden ofrecerme ese platillo
//     resolve(`{"name":"JUAN","status": "ok"}`);
//   } else {
//     //Resultado en caso de que el platillo no este disponible
//     reject(`{"status": "err"}`);
//   }
// });

// promise2
//   .then((res) => JSON.parse(res))
//   .then((dat) => {
//     console.log(dat);
//   })
//   .catch((e) => {
//     console.log(e);
//   })
//   .finally(() => {
//     console.log(
//       "Proceso en caso de recibir cualquier resultado de la peticion"
//     );
//   });

// let loading = true;
// let promise3 = fetch("https://pokeapi.co/api/v2/pokemon/ditto")
//   .then((res) => {
//     //   console.log(res.json());
//     return res.json();
//   })
//   .then((data) => {
//     //Renderizar contenido
//     console.log(data);
//   })
//   .catch((e) => {
//     console.log(e);
//   })
//   .finally((loading = false));
// console.log(promise3);
// // Generar error no podemos acceder a los datos afuera del then para resolver la promesa
// console.log(data);

// let promise4 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (true) {
//       // Resultado si pueden ofrecerme ese platillo
//       resolve("Respuesta simulada con un delay");
//     } else {
//       //Resultado en caso de que el platillo no este disponible
//       reject("Error al obtener respuesta");
//     }
//   }, 3000);
// });

// promise4.then((res) => {
//   console.log(res);
// });

const resolvePromise = (status) => {
  if (status) {
    return Promise.resolve("Promesa Exitosa");
  }
  return Promise.reject("Ocurrio un error al ejecutar la promesa");
};

// resolvePromise(true)
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((res) => {
//     console.log(res);
//   });

// resolvePromise(false)
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((res) => {
//     console.log(res);
//   });
//Resibe un conjunto de promesas y nos da respeusta cuando todas obtenien su resultado
let promise5 = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (true) {
      // Resultado si pueden ofrecerme ese platillo
      resolve("P5");
    } else {
      //Resultado en caso de que el platillo no este disponible
      reject("Error al obtener respuesta");
    }
  }, 1000);
});

let promise6 = new Promise((resolve, reject) => {
  if (true) {
    // Resultado si pueden ofrecerme ese platillo
    resolve("P6");
  } else {
    //Resultado en caso de que el platillo no este disponible
    reject("Error al obtener respuesta");
  }
});

let promise7 = new Promise((resolve, reject) => {
  if (true) {
    // Resultado si pueden ofrecerme ese platillo
    resolve("P7");
  } else {
    //Resultado en caso de que el platillo no este disponible
    reject("Error al obtener respuesta");
  }
});

Promise.all([promise5, promise6, promise7]).then((res) => {
  console.log(res);
});

Promise.race([promise5, promise6, promise7]).then((res) => {
  console.log(res);
});
