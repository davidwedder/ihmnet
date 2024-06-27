import api from '../services/api'

const ApiCards = (url) => {
   const response = api.get(url)
   return response.data
}

export default ApiCards