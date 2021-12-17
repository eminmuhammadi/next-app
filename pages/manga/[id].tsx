import { GetServerSideProps , NextPage } from 'next'
import { ParsedUrlQuery } from 'querystring'

import { getMangaByID } from "../../data/manga"
import { MangaById } from "./../../data/_interfaces/manga/ById"

interface Props {
    data: MangaById,
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

    const res:MangaById = await getMangaByID(Number(id));
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