import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://mcburger-svidler-default-rtdb.firebaseio.com/'
});

export default instance;