import HttpService from './httpService';

export const fetchCategories = (payload) => {

  const http = new HttpService();

  const url = 'categories';

  return http.getData(url);

};
