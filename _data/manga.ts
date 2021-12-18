import ow from 'ow';

import { MangaById } from './_interfaces/manga/ById';
import { Characters } from './_interfaces/manga/Characters';
import { Episodes } from './_interfaces/anime/Episodes';
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
 const getMangaByID = async (id: number) => {
    ow(id, ow.number.positive);

    const result = await fetcher.get<MangaById>(`/manga/${id}`);
    return result as MangaById;
};

/**
 * 
 * @param id 
 * @returns 
 */
const getCharacters = async (id: number) => {
    ow(id, ow.number.positive);

    const result = await fetcher.get<Characters>(`/manga/${id}/characters`);
    return result as Characters;
};

/**
 * 
 * @param id 
 * @param page 
 * @returns 
 */
const getEpisodes = async (id: number, page: number = 1) => {
    ow(id, ow.number.positive);
    ow(page, ow.number.positive);

    const result = await fetcher.get<Episodes>(`/manga/${id}/episodes/${page}`);
    return result as Episodes;
};

/**
 * 
 * @param id 
 * @returns 
 */
const getMoreInfo = async (id: number) => {
    ow(id, ow.number.positive);

    const result = await fetcher.get<MoreInfo>(`/manga/${id}/moreinfo`);
    return result as MoreInfo;
}

/**
 * 
 * @param id 
 * @returns 
 */
const getNews = async (id: number) => {
    ow(id, ow.number.positive);

    const result = await fetcher.get<News>(`/manga/${id}/news`);
    return result as News;
}

/**
 * 
 * @param id 
 * @returns 
 */
const getStats = async (id: number) => {
    ow(id, ow.number.positive);

    const result = await fetcher.get<Stats>(`/manga/${id}/stats`);
    return result as Stats;
}

/**
 * 
 * @param id 
 * @returns 
 */
const getPictures = async (id: number) => {
    ow(id, ow.number.positive);

    const result = await fetcher.get<Pictures>(`/manga/${id}/pictures`);
    return result as Pictures;
}

/**
 * 
 * @param id 
 * @returns 
 */
const getRecommendations = async (id: number) => {
    ow(id, ow.number.positive);

    const result = await fetcher.get<Recommendations>(`/manga/${id}/recommendations`);
    return result as Recommendations;
}

/**
 * 
 * @param id 
 * @returns 
 */
const getVideos = async (id: number) => {
    ow(id, ow.number.positive);

    const result = await fetcher.get<Videos>(`/manga/${id}/videos`);
    return result as Videos;
}

export {
    getMangaByID,
    getCharacters,
    getEpisodes,
    getMoreInfo,
    getNews,
    getStats,
    getPictures,
    getRecommendations,
    getVideos,
}