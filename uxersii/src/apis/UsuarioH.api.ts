import axios from 'axios'

const usuarioH = axios.create({
    baseURL: "http://127.0.0.1:8000/uxersiiPruebas/api/v1/login/"
})

export const getUsuario = (id: number) => usuarioH.get(`/${id}`)
