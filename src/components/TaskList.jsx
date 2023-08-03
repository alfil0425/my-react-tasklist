import React, { useState, useEffect } from "react";
import Taskform from "./Taskform";
import Task from "./Task";

function Tasklist() {
    const [tareas, setTareas] = useState([]);

    useEffect(() => {
    const storedTareas = JSON.parse(localStorage.getItem("tareas")) || [];
    setTareas(storedTareas);
    }, []);

    useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(tareas));
    }, [tareas]);

    const agregarTarea = (tarea) => {
    if (tarea.texto.trim()) {
        tarea.texto = tarea.texto.trim();
        setTareas([...tareas, tarea]);
    }
    };

    const eliminarTarea = (id) => {
    const tareasActualizadas = tareas.filter((tarea) => tarea.id !== id);
    setTareas(tareasActualizadas);
    };

    const completarTarea = (id) => {
    const tareasActualizadas = tareas.map((tarea) => {
        if (tarea.id === id) {
        tarea.completada = !tarea.completada;
        }
        return tarea;
    });
    setTareas(tareasActualizadas);
    };

    const editarTarea = (id, nuevoTexto) => {
    const tareasActualizadas = tareas.map((tarea) =>
        tarea.id === id ? { ...tarea, texto: nuevoTexto } : tarea
    );
    setTareas(tareasActualizadas);
    };

    return (
    <div>
        <Taskform onSubmit={agregarTarea} />
        <div className="tareas-lista-contenedor">
        {tareas.map((tarea) => (
        <Task
            key={tarea.id}
            id={tarea.id}
            texto={tarea.texto}
            completada={tarea.completada}
            completarTarea={completarTarea}
            eliminarTarea={eliminarTarea}
            editarTarea={editarTarea}
            />
        ))}
        </div>
    </div>
    );
}

export default Tasklist;
