const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Tarea = sequelize.define('Tarea', {
  titulo: { type: DataTypes.STRING, allowNull: false },
  descripcion: { type: DataTypes.TEXT, allowNull: true },
  completada: { type: DataTypes.BOOLEAN, defaultValue: false },
  fecha_creacion: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  fecha_vencimiento: { type: DataTypes.DATE, allowNull: true },
  prioridad: { type: DataTypes.ENUM('baja', 'media', 'alta'), defaultValue: 'media' },
  asignado_a: { type: DataTypes.STRING, allowNull: true },
  categoria: { type: DataTypes.STRING, allowNull: true },
  etiquetas: { type: DataTypes.ARRAY(DataTypes.STRING), allowNull: true },
});

module.exports = Tarea;
