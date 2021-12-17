import { GetServerSideProps , NextPage } from 'next'
import { ParsedUrlQuery } from 'querystring'

import { getAnimeByID } from "../../data/anime"
import { AnimeById } from "./../../data/_interfaces/anime/ById"

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
const Index: NextPage<Props> = ({ data, id }) => {
    return (
        <></>
    )
}

/**
 * 
 * @param ctx 
 * @returns 
 */
export const getServerSideProps: GetServerSideProps  = async (ctx) => {
    const { id } = ctx.params as IParams;

    const res:AnimeById = await getAnimeByID(Number(id));
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