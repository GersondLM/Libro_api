const express = require('express');
const app = express();
const sequelize = require('./config/database');
const tareasRoutes = require('./routes/tareas');

app.use(express.json());
app.use('/api/tareas', tareasRoutes);

sequelize.sync().then(() => {
  app.listen(3000, () => console.log('Servidor en http://localhost:3000'));
}).catch(error => console.log('Error al sincronizar con la base de datos:', error));
