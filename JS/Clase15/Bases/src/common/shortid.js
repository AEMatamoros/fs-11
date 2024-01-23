const shortid = require("shortid");
let code = shortid.generate();

// let usuarios = [{ id: shortid.generate(), nombre: "X" }];
// console.log(usuarios);

// Named Export
// module.exports = {
//   code,
// };

// Default export
module.exports = code;
