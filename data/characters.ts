import ow from 'ow';

import { Pictures } from './_interfaces/character/Pictures';

import fetcher from '../helpers/fetcher';

/**
 * 
 * @param id 
 * @returns 
 */
const getCharacterPictures = async (id: number) => {
    ow(id, ow.number.positive);

    const result = await fetcher.get<Pictures>(`/character/${id}/pictures`);
    return result as Pictures;
};

export {
    getCharacterPictures,
}