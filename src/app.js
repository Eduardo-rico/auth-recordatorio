import express from 'express';
import morgan from 'morgan';
const app = express();

app.use(morgan('dev'));

//variables de express
// app.set("nombre", vlor)

//aca van las rutas
app.get('/', (req, res) => {
  console.log('hola');
  res.json({
    autor: 'Eduardo Rioc',
    descripcion: ''
  });
});

export default app;
