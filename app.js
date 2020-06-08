const express = require('express');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const app = express();

app.listen(3000, ()=>{
    console.log('Servidor corriendo en el puerto 3000');
});

/*mongoose.connect("mongodb://localhost:27017/ejemplo_mongo_node");

let userSchemaJSON = {
    email: String,
    password: String
};

let user_schema = new Schema(userSchemaJSON);

let User = mongoose.model('User', user_schema); */

app.post('/datos', (req, res)=>{
    /*let user = new User({email: req.body.email, password: req.body.password});
    
    user.save(()=>{
        res.send('Recibimos y guardamos tus datos');
    })*/

    console.log(req.body);
    res.send('sii')

});