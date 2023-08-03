import React, { useState } from "react";
import { AiTwotoneDelete } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";

function Task({
    id,
    texto,
    completada,
    completarTarea,
    eliminarTarea,
    editarTarea,
}) {
    const [editar, setEditar] = useState(false);
    const [nuevoTexto, setNuevoTexto] = useState(texto);

    const handleEditarClick = () => {
    setEditar(true);
    };

    const handleGuardarClick = () => {
    editarTarea(id, nuevoTexto);
    setEditar(false);
    };

    const handleTextoChange = (event) => {
    setNuevoTexto(event.target.value);
    };

    if (editar) {
    return (
        <div className="tarea-contenedor">
        <input type="text" value={nuevoTexto} onChange={handleTextoChange} />
        <button onClick={handleGuardarClick}>Guardar</button>
        </div>
    );
    }

    return (
    <div
        className={
        completada ? "tarea-contenedor-completada" : "tarea-contenedor"
        }
    >
        <div className="tarea-texto" onClick={() => completarTarea(id)}>
        {texto}
        </div>
    <div
        className="tarea-contenedor-iconos"
        onClick={() => eliminarTarea(id)}
        >
        <AiTwotoneDelete className="tarea-icono" />
    </div>
    <div className="tarea-contenedor-iconos" onClick={handleEditarClick}>
        <AiFillEdit className="tarea-icono" />
    </div>
    </div>
);
}

export default Task;
