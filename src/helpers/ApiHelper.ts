import axios from 'axios';

export const ApiHelper = (() => {
  return axios.create({
    baseURL: 'https://ya-praktikum.tech/api/v2',
    withCredentials: true,
  });
})();
