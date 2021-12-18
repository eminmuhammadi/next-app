import { GetServerSideProps, NextPage } from 'next'
import { ParsedUrlQuery } from 'querystring';

import { Seasons, Anime } from '../../../_data/_interfaces/season/Season';
import { getAnimeByYearAndSeason } from '../../../_data/season';

interface Props {
    data: Anime[],
    id: number,
}

interface IParams extends ParsedUrlQuery {
    year: string
    season: string
}

/**
 * 
 * @param param0 
 * @returns 
 */
const Index: NextPage<Props> = (props) => {
    return (
        <></>
    )
}

/**
 * 
 * @param ctx 
 * @returns 
 */
export const getServerSideProps: GetServerSideProps = async (ctx) => {
    if (process.env.NODE_ENV !== 'development') {
        ctx.res.setHeader(
            'Cache-Control',
            'public, s-maxage=10, stale-while-revalidate=59'
        );
    }

    const { year, season } = ctx.params as IParams;
    if (!year || 
        !season || 
        !['winter', 'spring', 'summer', 'fall'].includes(season) || 
        !/^\d{4}$/.test(year) || 
        Number(year) < 1900 || 
        Number(year) > 2100) {
        return {
            notFound: true,
        }
    }

    const res = await getAnimeByYearAndSeason(Number(year), season as Seasons);
    if(!res.anime || res.anime.length === 0) {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            data: res.anime,
            year,
            season
        },
    };
}

export default Index;