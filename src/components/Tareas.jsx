

// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import StylesTareas from './StylesTareas.css'
import trashIcon from '../assets/multimedia/trash.svg';
import pencilIcon from '../assets/multimedia/pencil-square.svg';

const Tareas = () => {
  const [tareas, setTareas] = useState([]);
  const [nuevaTarea, setNuevaTarea] = useState("");
  const [tareaEditada, setTareaEditada] = useState("");
  const [tareaEditadaIndex, setTareaEditadaIndex] = useState(-1);

  const agregarTarea = (add) => {
    add.preventDefault();
    if (nuevaTarea.trim() !== "") {
      setTareas([...tareas, nuevaTarea]);
      setNuevaTarea("");
    }
  };

  const eliminarTarea = (index) => {
    const nuevasTareas = [...tareas];
    nuevasTareas.splice(index, 1);
    setTareas(nuevasTareas);
  };

  const editarTarea = (index) => {
    setTareaEditada(tareas[index]);
    setTareaEditadaIndex(index);
  };

  const guardarTareaEditada = (add) => {
    add.preventDefault();
    if (tareaEditada.trim() !== "") {
      const nuevasTareas = [...tareas];
      nuevasTareas[tareaEditadaIndex] = tareaEditada;
      setTareas(nuevasTareas);
      setTareaEditada("");
      setTareaEditadaIndex(-1);
    }
  };

  return (
    <div className="containerTask">
      <form onSubmit={agregarTarea}>
        <label style={{ fontSize: "20px" , fontFamily: "monospace" }} htmlFor="">Escribir tarea:</label>
        <input
          type="text"
          value={nuevaTarea}
          onChange={(add) => setNuevaTarea(add.target.value)}
        />
        <button style={{ fontSize: "20px" , fontFamily: "monospace" }} type="submit">Agregar</button>
      </form>
      <div>
        <p style={{ fontSize: "20px" , fontFamily: "monospace" }}>Lista de tareas</p>
        <ul>
          {tareas.map((tarea, index) => (
            <li key={index}>
              {index === tareaEditadaIndex ? (
                <form onSubmit={guardarTareaEditada}>
                  <input
                    type="text"
                    value={tareaEditada}
                    onChange={(add) => setTareaEditada(add.target.value)}
                  />
                  <button type="submit">Guardar</button>
                </form>
              ) : (
                <>
                  {tarea}
                  <button className="editar" onClick={() => editarTarea(index)}><img src={pencilIcon}/></button>
                  <button className="eliminar" onClick={() => eliminarTarea(index)}><img src={trashIcon}/></button>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Tareas;