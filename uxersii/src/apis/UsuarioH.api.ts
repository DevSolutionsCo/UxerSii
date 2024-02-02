import axios from 'axios'

interface Usuario {
    //nombre_hog: string;
    //apellido_mat: string;
    //apellido_pat: string;
    correo_hog: string;
    contra_hog: string;
    //desc_hog: string;
    //genero: string;
    nombUserH: string;
    id_hog: number;
    fotoH: string;
    // Agrega cualquier otra propiedad necesaria
  }
    
    interface UsuarioInterface {
      usuario: Usuario;
    }

const usuarioH = axios.create({
    baseURL: "http://127.0.0.1:8000/uxersiiPruebas/api/v1/update/"
})

//export const getUsuario = (id: number) => usuarioH.get(`/${id}`)

export const updateUsuario = (nombUserH: string, { usuario }: UsuarioInterface) => usuarioH.put(`/${nombUserH}/`, usuario)

