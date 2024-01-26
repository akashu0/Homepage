import  axios  from "axios";

const baseURL = 'https://landing-page-gan4.onrender.com/'
const axiosInstanceUser = axios.create({baseURL})

export default axiosInstanceUser