import axios from 'axios';

const end = axios.create({
  baseURL: 'http://localhost:3000'
});

export default end;
