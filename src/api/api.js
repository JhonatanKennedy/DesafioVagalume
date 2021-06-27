import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.elcoma.com.br/api/visits/'
});

export default api;