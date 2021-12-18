import { GetServerSideProps, NextPage } from 'next'
import { ParsedUrlQuery } from 'querystring';

import { getCharacterPictures } from "../../_data/characters";
import { Pictures, Picture } from "../../_data/_interfaces/character/Pictures";

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

    const res: Pictures = await getCharacterPictures(Number(id));
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