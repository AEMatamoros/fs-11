const { response } = require('express');
const bcryptjs = require('bcryptjs');
const userModel = require('../models/auth-model');
const { generateJWT } = require('../helpers/jwt');


const crearUsuario = async (req, res = response, next) => {

  try {
    
    const { name, email, password } = req.body

    let usuario = await userModel.findOne({email})
    if(usuario){
        return res.status(400).json({
            ok:false,
            msg:'Este correo ya ha sido registrado'
        })
    }

    const user = userModel()
    user.name = name
    user.email = email
    user.password = password
    //Encriptar contraseña
    const salt = bcryptjs.genSaltSync();
    user.password = bcryptjs.hashSync( password, salt );

    let createdUser = await user.save()

    //Generar JWT
    const token = await generateJWT( createdUser.id, createdUser.name )

    res.status(201).json({
        ok:'true',
        msg:'User created',
        id:createdUser['_id'],
        name:createdUser['name'],
        token: token
    })

    next()

  } catch (error) {

    res.status(400).json({
      ok: 'false',
      msg: 'Ha ocurrido un error',
    })

  }

}

const loginUsuario = async (req, res = response, next) => {

  const { email, password } = req.body

  try {
    let usuario = await userModel.findOne({email})

    if(!usuario){
        res.status(400).json({
            ok:false,
            msg:'Credenciales de acceso incorrectas'
        })
    }
    
    //Confirmar password
    const validPassword = bcryptjs.compareSync(password, usuario.password)
    if(!validPassword){
        return res.status(400).json({
            ok:false,
            msg:'Contraseña incorrecta'
        })
    }

    //Generar Token
    const token = await generateJWT( usuario.id, usuario.name )

    res.status(201).json({
        ok:'true',
        msg:'Logged in',
        id:usuario['_id'],
        name:usuario['name'],
        token: token
    })

  } catch (error) {
    res.status(400).json({
        ok: 'false',
        msg: 'Ha ocurrido un error',
      })
  }


  next()
}

const revalidarToken = async (req, res = response, next) => {

    const uid = req.uid;
    const name = req.name;
    
    const token = await generateJWT( uid, name );

    res.status(200).json({
        ok:true,
        msg:'Token renovado',
        uid:uid,
        name:name,
        token:token
    })

  next()

}

module.exports = { crearUsuario, loginUsuario, revalidarToken }
