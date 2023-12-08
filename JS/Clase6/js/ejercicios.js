//// Ejemplo 1 - Desestructuración

// Reescribe la función para que acepte un único objeto de parámetros en lugar
// de un conjunto de argumentos independientes.
function calcBMI({ weight, height }) {
  const numericWeight = Number(weight.replace(",", "."));
  const numericHeight = Number(height.replace(",", "."));
  return Number((numericWeight / numericHeight ** 2).toFixed(1));
}

console.log(
  calcBMI({
    weight: "88,3",
    height: "1.75",
  })
);
console.log(
  calcBMI({
    weight: "68,3",
    height: "1.65",
  })
);
console.log(
  calcBMI({
    weight: "118,3",
    height: "1.95",
  })
);

//// Ejemplo 2 - Desestructuración

// Reescribe la función para que acepte un único objeto de parámetros en lugar
// de un conjunto de argumentos independientes.
function printContactsInfo({ names, phones }) {
  const nameList = names.split(",");
  const phoneList = phones.split(",");
  for (let i = 0; i < nameList.length; i += 1) {
    console.log(`${nameList[i]}: ${phoneList[i]} `);
  }
}

printContactsInfo({
  names: "Jacob,William,Solomon,Artemis",
  phones: "89001234567,89001112233,890055566377,890055566300",
});

//// Ejemplo 3 - Desestructuración profunda

// Reescribe la función para que acepte un único objeto de parámetros en lugar
// de un conjunto de argumentos independientes.
function getBotReport({ companyName, bots: { defence, repair } }) {
  return `${companyName} has ${defence + repair} bots in stock`;
}
// old
// getBotReport(companyName, repair, defence)
// new
console.log(
  getBotReport({
    companyName: "Cyberdyne Systems",
    bots: {
      repair: 150,
      defence: 50,
    },
  })
);

//// Ejemplo 5 - Operación spread

// Completa la función `createContact(partialContact)` para que devuelva un nuevo
// objeto de contacto con las propiedades añadidas `id` y `createdAt` así como `list` con
// el valor "default" si `partialContact` no tiene dicha propiedad.

function generateId() {
  return "_" + Math.random().toString(36).substr(2, 9);
}

// console.log(generateId());
// console.log(new Date());

function createContact(partialObject) {
  return { ...partialObject, id: generateId(), createtAt: new Date() };
}

console.log(
  createContact({
    name: "Mango",
    email: "mango@mail.com",
    list: "friends",
  })
);

//// Ejemplo 6 - Operación rest

// Escribe la función `transformUsername(user)` para que devuelva un nuevo objeto
// con la propiedad`fullName`, en lugar de `firstName` y`lastName`.
function transformUsername({ firstName, lastName, ...rest }) {
  return {
    ...rest,
    fullName: `${firstName} ${lastName}`,
  };
}

console.log(
  transformUsername({
    id: 1,
    firstName: "Jacob",
    lastName: "Mercer",
    email: "j.mercer@mail.com",
    friendCount: 40,
  })
);
