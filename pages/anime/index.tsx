import { GetServerSideProps, NextPage } from 'next'

import getTopData from "./../../data/top"
import { Top } from "./../../data/_interfaces/top/Top"


interface Props {
    data: Top[],
    page: number,
}

/**
 * 
 * @param param0 
 * @returns 
 */
const Index: NextPage<Props> = ({ data, page }) => {
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
    const page: number = Number(ctx.query.page) || 1;

    const res = await getTopData('anime', page);
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