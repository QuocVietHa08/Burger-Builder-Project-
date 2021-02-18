import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://burger-builder-c4156.firebaseio.com/',
});

export default instance;
