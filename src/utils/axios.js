import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://trendyolcase-69b85-default-rtdb.firebaseio.com/'
});

export default instance;