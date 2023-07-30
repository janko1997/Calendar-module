import axios from 'axios';

export const instanceApi = axios.create({
  baseURL: 'https://prod-179.westeurope.logic.azure.com:443',
});
