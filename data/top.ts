import ow from 'ow';

import fetcher from './../helpers/fetcher';
import { Result, SubTypes, Types, Top } from './_interfaces/top/Top';

/**
 * 
 * @param type 
 * @param page 
 * @param subType 
 * @returns 
 */
const getTopData =  async (type: Types = 'anime', page: number = 1, subType?: SubTypes) => {
    ow(page, ow.number.positive);

    if (subType) {
        const result = await fetcher.get<Result>(`top/${type}/${page}/${subType}`);
    
        return result.top as Top[];
    }

    const { top } = await fetcher.get<Result>(`top/${type}/${page}`);

    return top as Top[];
}

export default getTopData;