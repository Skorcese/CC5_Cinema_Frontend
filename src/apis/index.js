import axios from 'axios';

const end = axios.create({
  baseURL: 'http://localhost:3001',
  timeout: 3000,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json'
  }
});

export default end;
