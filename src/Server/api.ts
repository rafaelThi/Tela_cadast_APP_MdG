import axios from 'axios';

const api = axios.create({
    baseURL:'http://192.168.15.103:3333'// link do server'
})
export default api;