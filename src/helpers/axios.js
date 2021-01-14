import axios from 'axios';
import defaultOptions from './options.js';

export default function Fetch(
  url,
  method = 'get',
  params,
  headers,
  otherOptions,
) {
  let options = {
    method,
    baseURL: defaultOptions.baseURL,
    headers: {
      ...defaultOptions.defaultHeaders,
      ...headers,
    },
    ...otherOptions,
  };
  if (method === 'GET' || method === 'get') {
    options = {
      ...options,
      params,
    };
  } else {
    options = {
      ...options,
      data: params,
    };
  }
  return axios({url, ...options})
    .then((res) => res.data)
    .catch((err) => err);
}
