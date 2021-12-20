import ow from 'ow';
import { URL } from 'url';

import { Filters, Search, SearchTypes } from './_interfaces/search/Search';

import fetcher from '../_helpers/fetcher';

/**
 * 
 * @param query 
 * @param type 
 * @param page 
 * @param filters 
 * @returns 
 */
const getSearchResults = async (query: string, type: SearchTypes, page: number = 1, filters?: Filters) => {
    ow(page, ow.number.positive);
    ow(query, ow.string.minLength(3));
  
    const url = new URL(`/v3/search/${type}?q=${query}&page=${page}`, process.env.API_URL);

    if (filters) {
      if (filters.end_date) {
        // eslint-disable-next-line no-param-reassign
        filters.end_date = new Date(filters.end_date).toISOString();
      }
  
      if (filters.genre) {
        ow(filters.genre, ow.number.lessThanOrEqual(44));
        ow(filters.genre, ow.number.greaterThanOrEqual(1));
      }
  
      if (filters.limit) {
        ow(filters.limit, ow.number.positive);
      }
  
      if (filters.score) {
        ow(filters.score, ow.number.positive);
      }
  
      if (filters.start_date) {
        // eslint-disable-next-line no-param-reassign
        filters.start_date = new Date(filters.start_date).toISOString();
      }
  
      Object.entries(filters).forEach(([key, value]) => {
        url.searchParams.append(key, value);
      });
    }
  
    const result = await fetcher.get<Search>(url.href);
  
    return result as Search;
};

export {
    getSearchResults
}

