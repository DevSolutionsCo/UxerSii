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
  // Agrega cualquier otra propiedad necesaria
}
  
  interface UsuarioInterface {
    usuario: Usuario;
  }
  
  

const pruebasAPI = axios.create({
    baseURL: "http://127.0.0.1:8000/uxersiiPruebas/api/v1/signUp/"
})

export const getAll = () => pruebasAPI.get("/")

export const getUsuario = (id: number) => pruebasAPI.get(`/${id}`)

//export const createUsuario = ({ usuario }: UsuarioInterface) => pruebasAPI.post("/", usuario)

export const deleteUsuario = (id: number) => pruebasAPI.delete(`/${id}`)

export const updateUsuario = (id: number, { usuario }: UsuarioInterface) => pruebasAPI.put(`/${id}/`, usuario)

export const createUsuario = async ({ usuario }: UsuarioInterface) => {
  try {
    const response = await pruebasAPI.post("/", usuario);
    return response.data;
  } catch (error) {
    console.error("Error al crear usuario:", error);
    throw error;
  }
};
