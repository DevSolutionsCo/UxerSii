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
    baseURL: "https://781hhnms-8000.usw3.devtunnels.ms/uxersiiPruebas/api/v1/signUp/"
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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error("Error al crear usuario:", error);

    if (error.response && error.response.data && typeof error.response.data.detail === 'string') {
      throw new Error(error.response.data.detail);
    }

    throw error;
  }
};

// urlGenerator.ts

export function generateUrl(): string {


  const baseUrl = `https://781hhnms-8000.usw3.devtunnels.ms/uxersiiPruebas/api/v1/`;

  return `${baseUrl}`;
}

