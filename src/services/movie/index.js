import axios from 'axios';
import queryString from 'query-string';
import Fetch from '../../helpers/axios';

let source;

export const getMovie = (params) => {
  if (source) {
    source.cancel('canceled');
  }
  source = axios.CancelToken.source();
  const query = queryString.stringify(params);
  let path = `/movie?${query}`;
  return Fetch(
    path,
    'GET',
    null,
    {},
    {
      cancelToken: source.token,
    },
  );
};
