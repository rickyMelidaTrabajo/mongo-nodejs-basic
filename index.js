const express = require('express');
const fileUpload = require('express-fileupload');

const mongoosse = require('mongoose');
const Schema = mongoosse.Schema;

const app = express();

app.use(fileUpload());

app.listen(3700, ()=>{
  console.log('Servidor corriendo');
});

mongoosse.connect("mongodb://localhost/ejemplo_mongo_node");

let userSchemaJSON = {
  datos:Array [
    {
      email: String, 
      password: String
    }
  ]
};

let user_schema = new Schema(userSchemaJSON);

let User = mongoosse.model('User', user_schema);

app.post('/home', (req, res)=>{
  let datos = req.body;

  let user = new User({
    datos: req.body.datos[
      {
        email: req.body.email, 
        password: req.body.password
      }
    ]
  });

  user.save((err, data)=>{
    if(!err) {
      res.send('Datos guardados')
    }else {
      res.send('Hay algun error');
    }
  })
  //console.log(datos);
});