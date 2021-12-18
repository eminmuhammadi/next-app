import { GetServerSideProps, NextPage } from 'next'

import getTopData from "../../_data/top"
import { Top } from "../../_data/_interfaces/top/Top"


interface Props {
    data: Top[]
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

    const page: number = Number(ctx.query.page) || 1;

    const res = await getTopData('manga', page);
    if (!res || res.length === 0) {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            data: res,
            page
        },
    };
}

export default Index;