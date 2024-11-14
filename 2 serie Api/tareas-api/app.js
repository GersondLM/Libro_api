// tareas-api/app.js
const express = require('express');
const app = express();
const tareasRoutes = require('./routes/tareas');
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use('/api/tareas', tareasRoutes);

module.exports = app;
