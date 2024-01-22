//* 1. Create a list of technologies studied in the Fullstack course using js
// Show how it is done with the help of **map** and **reduce**

const container = document.getElementById('container');
const technologies = ['HTML', 'CSS', 'JavaScript', 'React', 'Node'];

// 1. Create a container for ul tag

// FoorLoop
// let ul = document.createElement('ul');
// 2. Create a cycle for sorting array elements
// let listItems = [];
// for (let index = 0; index < technologies.length; index++) {
//   // 3. Create a li tag
//   let li = document.createElement('li');
//   // 4. Write the text from the array into the li tag
//   li.textContent = technologies[index];
//   // 5. Place li inside of ul
//   listItems.push(li);
// }
// console.log(listItems);
// ul.append(...listItems);

// // // 6. Place ul tag with items on the page
// container.append(ul);

// MAP
// Trabajando con cadenas con fortmato de etiquetas html
// let tagTecnologies = technologies.map(tec => `<li>${tec}</li>`);
// let tagTecnologiesString = tagTecnologies.join(' ');

// let ul = `<ul>${tagTecnologiesString}</ul>;`;

// container.innerHTML = ul;
// MAP con Nodos----> Recomendado
// let ul = document.createElement('ul');
// let nodeTecnologies = technologies.map(tec => {
//   let li = document.createElement('li');
//   li.textContent = tec;
//   return li;
// });

// ul.append(...nodeTecnologies);

// container.append(ul);

// Reduce
// Con Nodos
// let ul = document.createElement('ul');
// let nodeTecnologies = technologies.reduce((acc, next) => {
//   let li = document.createElement('li');
//   li.textContent = next;
//   acc.push(li);
//   return acc;
// }, []);

// ul.append(...nodeTecnologies);

// container.append(ul);

// Con Formato HTML en cadenas
// let ul = document.createElement('ul');
// let tecnologiesTagString = technologies.reduce((acc, next) => {
//   let li = `<li>${next}</li>`;
//   return acc + li;
// }, '');

// container.innerHTML = tecnologiesTagString;

//* 2. Create several buttons based on an array of objects using createElement

const colors = [
  {
    label: 'red',
    color: '#FF0000',
  },
  {
    label: 'green',
    color: '#00FF00',
  },
  {
    label: 'blue',
    color: '#0000FF',
  },
  {
    label: 'yellow',
    color: '#FFFF00',
  },
];

let buttonsList = document.getElementById('buttonsList');
let items = colors.map(obj => {
  let li = document.createElement('li');
  let buttonElement = document.createElement('button');
  buttonElement.style.backgroundColor = obj.color;
  buttonElement.style.cursor = 'pointer';
  buttonElement.style.padding = '10px';
  buttonElement.style.borderRadius = '5px';
  buttonElement.textContent = obj.label;

  li.append(buttonElement);
  return li;
});
buttonsList.append(...items);
