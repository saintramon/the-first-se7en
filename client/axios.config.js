import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8080/';
// axios.defaults.withCredentials = true;  <- unsure if needed

export default axios;