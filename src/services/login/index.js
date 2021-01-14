import Fetch from '../../helpers/axios';

export const loginApi = (body) => {
  return Fetch('/user/auth-token', 'POST', body);
};
