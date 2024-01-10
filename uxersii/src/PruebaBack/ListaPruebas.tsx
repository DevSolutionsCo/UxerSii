import { useEffect, useState } from 'react';
import { getAll } from '../apis/PruebasFunciones.api';
import { TareaCard } from './TareaCard'

interface Tarea {
    titulo: string;
    descripcion: string;
    id: number;
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
            {tareas.map((tarea) => (
                <TareaCard key={tarea.id} tarea={tarea}/>
            ))}
        </div>
    );
}
