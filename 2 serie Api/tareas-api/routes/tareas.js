const express = require('express');
const router = express.Router();
const Tarea = require('../models/Tarea');

// Crear tarea
router.post('/', async (req, res) => {
  try {
    const nuevaTarea = await Tarea.create(req.body);
    res.json(nuevaTarea);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Obtener todas las tareas
router.get('/', async (req, res) => {
  const tareas = await Tarea.findAll();
  res.json(tareas);
});

// Actualizar tarea
router.put('/:id', async (req, res) => {
  try {
    const tarea = await Tarea.findByPk(req.params.id);
    if (!tarea) return res.status(404).json({ error: 'Tarea no encontrada' });
    await tarea.update(req.body);
    res.json(tarea);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Eliminar tarea
router.delete('/:id', async (req, res) => {
  try {
    const tarea = await Tarea.findByPk(req.params.id);
    if (!tarea) return res.status(404).json({ error: 'Tarea no encontrada' });
    await tarea.destroy();
    res.json({ message: 'Tarea eliminada' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
