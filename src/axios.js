import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://tinder-backend-lukas.herokuapp.com/'
});

export default instance;