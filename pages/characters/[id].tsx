import { GetServerSideProps , NextPage } from 'next'
import { ParsedUrlQuery } from 'querystring'

import { getCharacterPictures } from "./../../data/characters";
import { Pictures, Picture } from "./../../data/_interfaces/character/Pictures";

interface Props {
    data: Picture[],
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

    const res:Pictures = await getCharacterPictures(Number(id));
    if (!res || res.pictures.length === 0) {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            data: res.pictures,
            id: Number(id),
        },
    };
}

export default Index;