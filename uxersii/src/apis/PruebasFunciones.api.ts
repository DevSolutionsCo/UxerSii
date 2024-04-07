import axios from 'axios'

interface Tarea {
    titulo: string;
    descripcion: string;
    id: number;
    // Agrega cualquier otra propiedad necesaria
  }
  
  interface TareaInterface {
    tarea: Tarea;
  }
  

const pruebasAPI = axios.create({
    baseURL: "https://k91n550s-8000.usw3.devtunnels.ms/api/v1/uxerSiitoBack/"
})

export const getAll = () => pruebasAPI.get("/")

export const getSoloUna = (id: number) => pruebasAPI.get(`/${id}`)

export const createPruebas = ({ tarea }: TareaInterface) => pruebasAPI.post("/", tarea)

export const deletePruebas = (id: number) => pruebasAPI.delete(`/${id}`)

export const updatePruebas = (id: number, { tarea }: TareaInterface) => pruebasAPI.put(`/${id}/`, tarea)


