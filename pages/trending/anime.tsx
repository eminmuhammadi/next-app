import { GetServerSideProps , NextPage } from 'next'

import getTopData from "../../data/top"
import { Top } from "../../data/_interfaces/top/Top"


interface Props {
    data: Top[]
}

/**
 * 
 * @param param0 
 * @returns 
 */
const Index: NextPage<Props> = ({ data }) => {
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
    const { page } = ctx.query;

    const res = await getTopData('anime', Number(page || 1));

    return {
        props: {
            data: res
        },
    };
}

export default Index;