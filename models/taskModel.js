const mongoose = require('mongoose');

// Definición del esquema de la tarea
const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'El título de la tarea es obligatorio'],
      trim: true,
    },
    description: {
      type: String,
      required: [true, 'La descripción de la tarea es obligatoria'],
    },
    status: {
      type: String,
      enum: ['pendiente', 'en progreso', 'completada'],
      default: 'pendiente',
    },
  },
  {
    timestamps: true, // Esto añadirá los campos createdAt y updatedAt automáticamente
  }
);

// Modelo de la tarea
const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
