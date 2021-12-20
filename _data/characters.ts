import ow from 'ow';

import { Pictures } from './_interfaces/character/Pictures';
import { Character } from './_interfaces/character/ById';

import fetcher from '../_helpers/fetcher';

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

/**
 * 
 * @param id 
 * @returns 
 */
const getCharacterById = async (id: number) => {
    ow(id, ow.number.positive);

    const result = await fetcher.get<Character>(`/character/${id}`);
    return result as Character;
}

export {
    getCharacterPictures,
    getCharacterById,
}