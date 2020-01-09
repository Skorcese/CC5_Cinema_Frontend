import axios from 'axios';

const end = axios.create({
  baseURL: 'https://mini-kino.herokuapp.com',
  timeout: 3000,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json'
  }
});

export default end;
