import axios from "axios";
import { AxiosError } from 'axios';

const api = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL
  })

async function doPost(url: string, data: any, token:string){
    let auth = false;
    try{
        const response = await api.post(url, data, {
            headers: { Authorization: `Bearer ${token}` }
        })

        if(response.status >= 200 && response.status < 300){
            auth = true
            return {...response.data, auth}
        }

        return {auth}
    } catch(err) {
        const axiosError = err as AxiosError
        console.log(`Erro ao fazer a requisição: ${err}`)
        if(axiosError.response?.status === 401){ 
            auth = false
        }
    }
}

export { doPost, api }
