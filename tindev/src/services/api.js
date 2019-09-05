import axios from 'axios';

const api = axios.create({
    //no android ele não aponta para o mesmo localhost da maquina
    baseURL: 'http://localhost:3333'
});

export default api;