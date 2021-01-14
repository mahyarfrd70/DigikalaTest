import Fetch from '../../helpers/axios';

export const getCategory = () => {
  return Fetch('/category', 'GET');
};
