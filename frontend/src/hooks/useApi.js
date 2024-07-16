import useSWR from 'swr'
import api from '../services/api'

export const useApi = (url)=>{
    const {data, error} = useSWR(url, async(url)=>{
        const response = await api.get(url)
        //console.log("URL",url)
        return response.data
    })
    return {data, error}
}