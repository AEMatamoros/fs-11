const mongoose = require('mongoose');
const dbConection = async()=>{
    try {
        await mongoose.connect(process.env.DB_CON,{useNewUrlParser:true, useUnifiedTopology:true});
        console.log('Conected to mongo cluster')
    } catch (error) {
        console.log(error)
    }
}

module.exports = { dbConection }