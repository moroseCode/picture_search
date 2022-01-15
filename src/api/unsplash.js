import axios from 'axios';
import configData from '../config.json';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID ' + configData.UPSLASH_ACCESS_KEY,
  },
});
