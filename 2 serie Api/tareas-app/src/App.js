import React, { useState } from 'react';
import './App.css';

function App() {
  const [books, setBooks] = useState([]);
  const [formData, setFormData] = useState({
    codigoLibro: '',
    codigoUsuario: '',
    fechaSalida: '',
    fechaMaxima: '',
    fechaDevolucion: ''
  });
  const [editIndex, setEditIndex] = useState(null);

  // Maneja el cambio en los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Agregar o editar un libro
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editIndex === null) {
      setBooks([...books, formData]);  // Agregar libro
    } else {
      const updatedBooks = books.map((book, index) =>
        index === editIndex ? formData : book
      );
      setBooks(updatedBooks);
      setEditIndex(null);
    }
    setFormData({ codigoLibro: '', codigoUsuario: '', fechaSalida: '', fechaMaxima: '', fechaDevolucion: '' });
  };

  // Configura el formulario para editar
  const handleEdit = (index) => {
    setFormData(books[index]);
    setEditIndex(index);
  };

  // Elimina un libro
  const handleDelete = (index) => {
    const updatedBooks = books.filter((_, i) => i !== index);
    setBooks(updatedBooks);
  };

  return (
    <div className="App">
      <h2>Crear Nuevo Libro</h2>
      <form onSubmit={handleSubmit}>
        <label>Código del Libro:</label>
        <input
          type="text"
          name="codigoLibro"
          value={formData.codigoLibro}
          onChange={handleChange}
          required
        />
        <label>Código del Usuario:</label>
        <input
          type="text"
          name="codigoUsuario"
          value={formData.codigoUsuario}
          onChange={handleChange}
          required
        />
        <label>Fecha de Salida:</label>
        <input
          type="date"
          name="fechaSalida"
          value={formData.fechaSalida}
          onChange={handleChange}
          required
        />
        <label>Fecha Máxima para Devolver:</label>
        <input
          type="date"
          name="fechaMaxima"
          value={formData.fechaMaxima}
          onChange={handleChange}
          required
        />
        <label>Fecha de Devolución (opcional):</label>
        <input
          type="date"
          name="fechaDevolucion"
          value={formData.fechaDevolucion}
          onChange={handleChange}
        />
        <button type="submit">{editIndex === null ? 'Agregar' : 'Actualizar'} Libro</button>
      </form>

      <h2>Lista de Libros</h2>
      <table>
        <thead>
          <tr>
            <th>Código del Libro</th>
            <th>Código del Usuario</th>
            <th>Fecha de Salida</th>
            <th>Fecha Máxima para Devolver</th>
            <th>Fecha de Devolución</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => (
            <tr key={index}>
              <td>{book.codigoLibro}</td>
              <td>{book.codigoUsuario}</td>
              <td>{book.fechaSalida}</td>
              <td>{book.fechaMaxima}</td>
              <td>{book.fechaDevolucion}</td>
              <td className="action-buttons">
                <button
                  className="edit-btn"
                  onClick={() => handleEdit(index)}
                >
                  Editar
                </button>
                <button
                  className="delete-btn"
                  onClick={() => handleDelete(index)}
                >
                  Borrar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
