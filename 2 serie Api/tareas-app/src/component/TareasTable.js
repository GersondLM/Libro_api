import React, { useEffect, useState } from 'react';

function TareasTable() {
  const [tareas, setTareas] = useState([]);

  // Función para obtener las tareas desde el backend
  const fetchTareas = async () => {
    try {
      const response = await fetch('/api/tareas'); // URL de tu endpoint
      const data = await response.json();
      setTareas(data);
    } catch (error) {
      console.error("Error al obtener las tareas:", error);
    }
  };

  // Llamamos a fetchTareas al montar el componente
  useEffect(() => {
    fetchTareas();
  }, []);

  return (
    <div>
      <h1>Lista de Tareas</h1>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Descripción</th>
            <th>Completada</th>
            <th>Fecha de Creación</th>
            <th>Fecha de Vencimiento</th>
            <th>Prioridad</th>
            <th>Asignado a</th>
            <th>Categoría</th>
            <th>Etiquetas</th>
          </tr>
        </thead>
        <tbody>
          {tareas.map((tarea) => (
            <tr key={tarea.id}>
              <td>{tarea.titulo}</td>
              <td>{tarea.descripcion}</td>
              <td>{tarea.completada ? "Sí" : "No"}</td>
              <td>{tarea.fecha_creacion}</td>
              <td>{tarea.fecha_vencimiento}</td>
              <td>{tarea.prioridad}</td>
              <td>{tarea.asignado_a}</td>
              <td>{tarea.categoria}</td>
              <td>{tarea.etiquetas.join(", ")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TareasTable;
