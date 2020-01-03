import axios from 'axios';

const end = axios.create({
  baseURL: 'http://localhost:3001'
});

export default end;
