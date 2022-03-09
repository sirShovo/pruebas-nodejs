//Express basicamente es el servidor
const express = require('express');
const app = express();

//Settings
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);

//Nos permite ver las peticiones desde la consola (util para validar errores)
app.use(express.json());

//Routes
app.use(require('./users.js'));

//Aqui se inicia el servidor
app.listen(app.get('port'), () => {
  console.log(`Server is starting correctly on port ${app.get('port')}`);
});

