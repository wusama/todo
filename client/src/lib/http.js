import axios from 'axios';

var http = axios.create({
  timeout: 60000,
  withCredentials: true,
});

/**
 * send data to api url
 * @param {string} url request URL
 * @param {object} data request data
 */
export const post = (url, data) => {
  return http.post(url, data).then(res => res.data);
};

/**
 * send data to api url
 * @param {string} url request URL
 */
export const get = (url) => {
  return http.get(url).then(res => res.data);
};

/**
 * send data to api url
 * @param {string} url request URL
 */
export const remove = (url) => {
  return http.delete(url).then(res => res.data);
};
