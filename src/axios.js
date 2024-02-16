import axios from 'axios';
const axiosBase = axios.create({
    // baseURL:'https://evangadi-forum-backend-x8xv.onrender.com'
    baseURL:'http://localhost:3500/api'
})
export default axiosBase