import ow from 'ow';

import { Season, Seasons } from './_interfaces/season/Season';
import { SeasonArchive } from './_interfaces/season/SeasonArchive';

import fetcher from '../_helpers/fetcher';

/**
 * 
 * @returns 
 */
const getListOfSeasons = async () => {
    const result = await fetcher.get<SeasonArchive>('/season/archive');

    return result as SeasonArchive;
}

/**
 * 
 * @param year 
 * @param season 
 * @returns 
 */
const getAnimeByYearAndSeason = async (year: number, season: Seasons) => {
    ow(year, ow.number.integer.positive);
    ow(season, ow.string.oneOf(['summer', 'spring', 'fall', 'winter']));

    const result = await fetcher.get<Season>(`/season/${year}/${season}`);

    return result as Season;
}

export {
    getListOfSeasons,
    getAnimeByYearAndSeason
}