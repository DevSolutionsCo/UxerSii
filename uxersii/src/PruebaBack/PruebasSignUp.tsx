import {useForm} from 'react-hook-form'
import {useEffect} from 'react'
import {SubmitHandler} from 'react-hook-form';
import {useNavigate, useParams} from 'react-router-dom'

import { createUsuario, deleteUsuario, updateUsuario, getUsuario } from '../apis/PruebasSignUp.api'


interface Usuario {
  nombre_hog: string;
  apellido_mat: string;
  apellido_pat: string;
  correo_hog: string;
  contra_hog: string;
  desc_hog: string;
  genero: string;
  nombUserH: string;
  id_hog: number;
  // Agrega cualquier otra propiedad necesaria
}

interface UsuarioInterface {
  usuario: Usuario;
}

export function PruebasSignUp() {
  const { register, handleSubmit, formState: { errors }, setValue  } = useForm<UsuarioInterface>();

  const navigate = useNavigate()
  const params = useParams()
  console.log(params)

  const onSubmit: SubmitHandler<UsuarioInterface> = async (data) => {
    if(params.id){
      console.log("Actualizando")
      await updateUsuario(Number(params.id), data)
    }else{
      await createUsuario(data);
      
    }
    navigate('/pruebaSignUp');
  };

  useEffect(() => {
      async function cargarSoloUna(){
        if(params.id){
          const res = await getUsuario(Number(params.id))
          console.log(res)
          setValue('usuario.nombre_hog', res.data.nombre_hog)
          setValue('usuario.apellido_mat', res.data.apellido_mat)
          setValue('usuario.apellido_pat', res.data.apellido_pat)
          setValue('usuario.contra_hog', res.data.contra_hog)
          setValue('usuario.correo_hog', res.data.correo_hog)
          setValue('usuario.desc_hog', res.data.desc_hog)
          setValue('usuario.genero', res.data.genero)
          setValue('usuario.nombUserH', res.data.nombUserH)
          
        }
    }
    cargarSoloUna()
  }, [params.id, setValue])

  return (
    <>
      <div>Pruebitas del Form</div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input type="text" placeholder="Nombre_hog" {...register("usuario.nombre_hog", { required: true })} />
          {errors.usuario?.nombre_hog && <span>Este campo es necesario</span>}
          
          <input type="text" placeholder="Apellido_mat" {...register("usuario.apellido_mat", { required: true })} />
          {errors.usuario?.apellido_mat && <span>Este campo es necesario</span>}

          <input type="text" placeholder="Apellido_pat" {...register("usuario.apellido_pat", { required: true })} />
          {errors.usuario?.apellido_pat && <span>Este campo es necesario</span>}

          <input type="text" placeholder="Contra_hog" {...register("usuario.contra_hog", { required: true })} />
          {errors.usuario?.contra_hog && <span>Este campo es necesario</span>}

          <input type="text" placeholder="Correo_hog" {...register("usuario.correo_hog", { required: true })} />
          {errors.usuario?.correo_hog && <span>Este campo es necesario</span>}

          <input type="text" placeholder="Genero" {...register("usuario.genero", { required: true })} />
          {errors.usuario?.genero && <span>Este campo es necesario</span>}

          <input type="text" placeholder="NombUserH" {...register("usuario.nombUserH", { required: true })} />
          {errors.usuario?.nombUserH && <span>Este campo es necesario</span>}

          <textarea rows={3} placeholder="Desc_hog" {...register("usuario.desc_hog", { required: true })}></textarea>
          {errors.usuario?.desc_hog && <span>Este campo es necesario</span>}

          <button type="submit">Guardar</button>
        </form>

        {
          params.id && (
            <button style={{ backgroundColor: 'red', color: 'white', fontSize: '20px', borderRadius: '5px'}}
            onClick={async () => {
              const respuesta = window.confirm("Estas seguro?");
              if(respuesta){
                await deleteUsuario(Number(params.id));
                navigate("/pruebasBack");
              }
            }}>Borrar</button>  
          )
        }
        

      </div>
    </>
  );
}
