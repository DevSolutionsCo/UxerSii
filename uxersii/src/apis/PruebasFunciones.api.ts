import axios from 'axios'

export const getAll = () => {
    return axios.get('http://127.0.0.1:8000/uxersiiPruebas/api/v1/uxerSiitoBack/')
}