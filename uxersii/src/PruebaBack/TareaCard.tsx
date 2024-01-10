import {useNavigate} from 'react-router-dom'


interface Tarea {
    titulo: string;
    descripcion: string;
    id: number;
    // Agrega cualquier otra propiedad necesaria
  }
  
  interface TareaCardProps {
    tarea: Tarea;
  }
  

export function TareaCard({ tarea }: TareaCardProps) {
    
    const navigate = useNavigate()

    return (
        <div style={{ background: "#e3232338" }} onClick={() => {navigate(`/pruebasBack/${tarea.id}`)}}>
        <h1 style={{ fontSize: '20px',  fontWeight: 'bold' }}>{tarea.titulo}</h1>
        <p>{tarea.descripcion}</p>
        <p>---------------</p>
      </div>
    );
}

