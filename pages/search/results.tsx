import { GetServerSideProps, NextPage } from 'next'
import Link from 'next/link'
import { NextSeo } from 'next-seo';

import { SearchList } from '../../components/List'

import { getSearchResults } from '../../_data/search'
import { Search, Result, SearchTypes } from '../../_data/_interfaces/search/Search'

interface Props {
    data: Result[],
    last_page: number,
    page: number,
    q: string,
    type: SearchTypes
}

/**
 * 
 * @param param0 
 * @returns 
 */
const Index: NextPage<Props> = (props) => {
    return (
        <div className="container mx-auto">
            <NextSeo
                title={`Results`}
                noindex={true}
                nofollow={true}
                description={`Listing ${props.data.length} ${props.type} results for ${props.q}, page ${props.page} of ${props.last_page}`}
            />
            
            <h3 className="container mx-auto text-3xl pt-10 pb-2">
                Results
            </h3>

            <p className="dark:text-slate-400 container mx-auto py-3 text-xs">
                Listing {props.data.length} {props.type} results for &quot;<span className="font-semibold">{props.q}&quot;</span>, page {props.page} of {props.last_page}
            </p>

            <SearchList data={props.data}
                type={props.type}
                page={props.page} />

            <div className="grid justify-items-center text-base pb-8">
                <div className="flex">
                    {/* Previous */}
                    {
                        props.page > 1 && (
                            <Link href={`/search/results?q=${props.q}&type=${props.type}&page=${props.page - 1}`}>
                                <a className="dark:text-slate-300 dark:hover:bg-gray-800 px-5 py-2 rounded-lg mx-4 hover:bg-gray-50"
                                    href={`/search/results?q=${props.q}&type=${props.type}&page=${props.page - 1}`}>
                                    Previous
                                </a>
                            </Link>
                        )
                    }

                    {/* Next */}
                    {
                        props.last_page > props.page && (
                            <Link href={`/search/results?q=${props.q}&type=${props.type}&page=${props.page + 1}`}>
                                <a className="dark:border-gray-800 dark:text-slate-300 dark:hover:bg-gray-800 font-semibold shadow-sm border px-10 py-2 rounded-lg mx-4 hover:bg-gray-50"
                                    href={`/search/results?q=${props.q}&type=${props.type}&page=${props.page + 1}`}>
                                    Next
                                </a>
                            </Link>
                        )
                    }
                </div>
            </div>
        </div>
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
    const q: string = (ctx.query.q)?.toString() || '';
    const type: SearchTypes = (ctx.query.type)?.toString() as SearchTypes || 'anime';


    if (!q || page < 1 || q.length < 3 || type.length < 5) {
        return {
            notFound: true,
        }
    }

    const res: Search = await getSearchResults(q, type, page);

    return {
        props: {
            data: res.results || [] as Result[],
            last_page: res.last_page || 0,
            page,
            q,
            type
        },
    };
}

export default Index;