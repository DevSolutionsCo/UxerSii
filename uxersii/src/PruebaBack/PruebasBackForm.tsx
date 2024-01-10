import {useForm} from 'react-hook-form'
import {useEffect} from 'react'
import {SubmitHandler} from 'react-hook-form';
import {useNavigate, useParams} from 'react-router-dom'

import { createPruebas, deletePruebas, updatePruebas, getSoloUna } from '../apis/PruebasFunciones.api'


interface Tarea {
  titulo: string;
  descripcion: string;
  id: number;
  // Agrega cualquier otra propiedad necesaria
}

interface TareaInterface {
  tarea: Tarea;
}

export function PruebasBackForm() {
  const { register, handleSubmit, formState: { errors }, setValue  } = useForm<TareaInterface>();

  const navigate = useNavigate()
  const params = useParams()
  console.log(params)

  const onSubmit: SubmitHandler<TareaInterface> = async (data) => {
    if(params.id){
      console.log("Actualizando")
      await updatePruebas(Number(params.id), data)
    }else{
      await createPruebas(data);
      
    }
    navigate('/pruebasBack');
  };

  useEffect(() => {
      async function cargarSoloUna(){
        if(params.id){
          const res = await getSoloUna(Number(params.id))
          console.log(res)
          setValue('tarea.titulo', res.data.titulo)
          setValue('tarea.descripcion', res.data.descripcion)
        }
    }
    cargarSoloUna()
  }, [params.id, setValue])

  return (
    <>
      <div>Pruebitas del Form</div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input type="text" placeholder="Titulo" {...register("tarea.titulo", { required: true })} />
          {errors.tarea?.titulo && <span>Este campo es necesario</span>}

          <textarea rows={3} placeholder="Descripcion" {...register("tarea.descripcion", { required: true })}></textarea>
          {errors.tarea?.descripcion && <span>Este campo es necesario</span>}

          <button type="submit">Guardar</button>
        </form>

        {
          params.id && (
            <button style={{ backgroundColor: 'red', color: 'white', fontSize: '20px', borderRadius: '5px'}}
            onClick={async () => {
              const respuesta = window.confirm("Estas seguro?");
              if(respuesta){
                await deletePruebas(Number(params.id));
                navigate("/pruebasBack");
              }
            }}>Borrar</button>  
          )
        }
        

      </div>
    </>
  );
}
