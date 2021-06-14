import HttpService from './httpService';

export const fetchEvents = () => {

  const http = new HttpService();

  const url = 'events';

  return http.getData(url);

};

export const fetchLatestEvents = () => {

  const http = new HttpService();

  const url = 'events/latestEvents';

  return http.getData(url);

};

export const fetchSingleEvent = (slug) => {

    const http = new HttpService();

    const url = 'events/' + slug;
  
    return http.getData(url);

}

export const fetchPaginatedEvents = (page) => {

    const http = new HttpService();

    const url = page ? 'events/?page='+page : 'events';
  
    return http.getData(url);

}
