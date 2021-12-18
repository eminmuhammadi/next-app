import ow from 'ow';

import { AnimeById } from './_interfaces/anime/ById';
import { CharactersStaff } from './_interfaces/anime/CharactersStaff';
import { MoreInfo } from './_interfaces/anime/MoreInfo';
import { News } from './_interfaces/anime/News';
import { Pictures } from './_interfaces/anime/Pictures';
import { Recommendations } from './_interfaces/anime/Recommendations';
import { Stats } from './_interfaces/anime/Stats';
import { Videos } from './_interfaces/anime/Videos';

import fetcher from '../_helpers/fetcher';

/**
 * 
 * @param id 
 * @returns 
 */
const getAnimeByID = async (id: number) => {
    ow(id, ow.number.positive);

    const result = await fetcher.get<AnimeById>(`/anime/${id}`);
    return result as AnimeById;
};

/**
 * 
 * @param id 
 * @returns 
 */
const getCharacters = async (id: number) => {
    ow(id, ow.number.positive);

    const result = await fetcher.get<CharactersStaff>(`/anime/${id}/characters_staff`);
    return result as CharactersStaff;
};

/**
 * 
 * @param id 
 * @returns 
 */
const getMoreInfo = async (id: number) => {
    ow(id, ow.number.positive);

    const result = await fetcher.get<MoreInfo>(`/anime/${id}/moreinfo`);
    return result as MoreInfo;
}

/**
 * 
 * @param id 
 * @returns 
 */
const getNews = async (id: number) => {
    ow(id, ow.number.positive);

    const result = await fetcher.get<News>(`/anime/${id}/news`);
    return result as News;
}

/**
 * 
 * @param id 
 * @returns 
 */
const getStats = async (id: number) => {
    ow(id, ow.number.positive);

    const result = await fetcher.get<Stats>(`/anime/${id}/stats`);
    return result as Stats;
}

/**
 * 
 * @param id 
 * @returns 
 */
const getPictures = async (id: number) => {
    ow(id, ow.number.positive);

    const result = await fetcher.get<Pictures>(`/anime/${id}/pictures`);
    return result as Pictures;
}

/**
 * 
 * @param id 
 * @returns 
 */
const getRecommendations = async (id: number) => {
    ow(id, ow.number.positive);

    const result = await fetcher.get<Recommendations>(`/anime/${id}/recommendations`);
    return result as Recommendations;
}

/**
 * 
 * @param id 
 * @returns 
 */
const getVideos = async (id: number) => {
    ow(id, ow.number.positive);

    const result = await fetcher.get<Videos>(`/anime/${id}/videos`);
    return result as Videos;
}

export {
    getAnimeByID,
    getCharacters,
    getMoreInfo,
    getNews,
    getStats,
    getPictures,
    getRecommendations,
    getVideos,
}