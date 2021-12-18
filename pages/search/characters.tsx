import { GetServerSideProps , NextPage } from 'next'

import { getSearchResults } from '../../_data/search'
import { Search, Result } from '../../_data/_interfaces/search/Search'

interface Props {
    data: Result[],
    last_page: number,
    page: number,
    query: string,
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
export const getServerSideProps: GetServerSideProps  = async (ctx) => {
    if (process.env.NODE_ENV !== 'development') {
        ctx.res.setHeader(
            'Cache-Control',
            'public, s-maxage=10, stale-while-revalidate=59'
        );
    }

    const page:number = Number(ctx.query.page) || 1;
    const query:string = (ctx.query.query)?.toString() || '';

    if (!query || page < 1 || query.length < 3) {
        return {
            notFound: true,
        }
    }

    const res:Search = await getSearchResults(query, 'character', page);

    return {
        props: {
            data: res.results,
            last_page: res.last_page,
            page,
            query,
        },
    };
}

export default Index;