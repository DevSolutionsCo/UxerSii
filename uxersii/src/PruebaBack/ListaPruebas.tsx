import React from 'react';  // Importa React si aún no lo has hecho
import { useEffect, useState } from 'react';
import { getAll } from '../apis/PruebasFunciones.api';

interface Tarea {
    titulo: string;
    descripcion: string;
}

export function ListaPruebas() {
    const [tareas, setTareas] = useState<Tarea[]>([]);

    useEffect(() => {
        async function cargarTodo() {
            try {
                const res = await getAll();
                console.log("Datos recibidos:", res.data);
                setTareas(res.data);
            } catch (error) {
                console.error("Error al cargar las tareas:", error);
            }
        }

        cargarTodo();
    }, []);

    return (
        <div>
            {tareas.map((tarea, index) => (
                <div key={index}>
                    <h1>{tarea.titulo}</h1>
                    <p>{tarea.descripcion}</p>
                    <p>---------------</p>
                </div>
            ))}
        </div>
    );
}
