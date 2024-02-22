const { Router } = require("express");
const { validarJWT } = require("../middlewares/validar-jwt");
const { check, oneOf } = require("express-validator");
const { validarCampos } = require("../middlewares/validar-campos");
const { uuid } = require("uuidv4");

const router = Router();

const {
  crearUsuario,
  loginUsuario,
  revalidarToken,
} = require("../controller/auth");

let tasks = [
  {
    title: "Nueva Tarea ",
    description: "Creada",
    completed: true,
    id: 20,
  },
  {
    title: "Tarea nueva",
    description: "aasdfasdf",
    completed: false,
    id: 23,
  },
  {
    title: "df",
    description: "sdf",
    completed: false,
    id: 24,
  },
  {
    title: "Tarea 2",
    description: "asd",
    completed: false,
    id: 25,
  },
];

router.get("/", (req, res) => {
  let filterTasks = tasks.filter((task) => {
    return task.user === req.uid;
  });
  return res.json(filterTasks);
});

router.post(
  "/",
  [
    check("title", "El nombre es un campo obligatorio").not().isEmpty(),
    check("description", "La descripcion es obligatoria").not().isEmpty(),
    check(
      "completed",
      "El estatus es obligatorio, debe poseer al menos 8 caracteres"
    )
      .not()
      .isEmpty(),
    validarCampos,
  ],

  (req, res) => {
    let user = { ...req.body, id: tasks.length + 1, user: req.uid };
    tasks.push(user);
    res.json(user);
  }
);

router.patch("/:id", (req, res) => {
  tasks = tasks.map((task) => {
    if (task.id == req.params.id) {
      return { ...task, completed: !task.completed };
    } else {
      return task;
    }
  });
  console.log(req.body);
  res.json(tasks.filter((task) => task.id == req.params.id));
});

router.delete("/:id", (req, res) => {
  tasks = tasks.filter((task) => task.id != req.params.id);
  res.json({});
});

router.post("/login", validarJWT, (req, res) => {});

router.get("/renew", validarJWT, (req, res) => {});

module.exports = router;
