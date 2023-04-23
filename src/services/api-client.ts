import axios, { CanceledError } from 'axios';

const apiClient = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

export {
  apiClient,
  CanceledError,
}