const userSchema = require("../schema/user.schema");
const bcrypt = require("bcrypt");
const login = async (req, res, next) => {
  try {
    const { mail, password } = req.body;
    const foundedUser = await userSchema.findOne({ mail });
    //Error devuielve un arreglo de objetos y no solo una instancia del objeto buscado
    // const foundedUserError = await userSchema.find({ mail });

    if (!foundedUser) {
      res.status(400).json({
        ok: false,
        message: "Credenciales Incorrectas",
      });
      return;
    }
    const validPassword = bcrypt.compareSync(password, foundedUser.password);
    if (!validPassword) {
      res.status(400).json({
        ok: false,
        message: "Credenciales Incorrectas",
      });
      return;
    }
    //Crear Token  de acceso
    res.status(201).json({
      title: "Success",
      msg: "User created",
      result: { foundedUser },
    });
  } catch (error) {
    next(error);
  }
};

const register = async (req, res, next) => {
  try {
    const { username, mail, password } = req.body;
    const foundedUser = await userSchema.findOne({ mail });

    if (foundedUser) {
      res.status(400).json({
        ok: false,
        message: "Este correo ya esta registrado",
      });
      return;
    }
    const salt = bcrypt.genSaltSync();
    const createdUser = await userSchema({
      username,
      mail,
      password: bcrypt.hashSync(password, salt),
    }).save();

    //Crear Token  de acceso
    res.status(201).json({
      title: "Success",
      msg: "User created",
      result: { ...createdUser.toObject() },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  login,
  register,
};
