import { GetServerSideProps, NextPage } from 'next'
import { ParsedUrlQuery } from 'querystring';

import { getAnimeByID } from "../../_data/anime"
import { AnimeById } from "../../_data/_interfaces/anime/ById"

interface Props {
    data: AnimeById,
    id: number,
}

interface IParams extends ParsedUrlQuery {
    id: string
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

    const { id } = ctx.params as IParams;

    const res: AnimeById = await getAnimeByID(Number(id));
    if (!res || res.mal_id === undefined || res.mal_id === null) {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            data: res,
            id: Number(id),
        },
    };
}

export default Index;