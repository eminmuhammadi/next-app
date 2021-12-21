import { GetServerSideProps, NextPage } from 'next'
import Link from 'next/link'
import { NextSeo } from 'next-seo'

import { List } from '../../components/List'

import getTopData from "../../_data/top"
import { Top } from "../../_data/_interfaces/top/Top"

interface Props {
    data: Top[],
    page: number
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
                title={`Characters`}
                description={`In fiction, a character is a person or other being in a narrative. The character may be entirely fictional or based on a real-life person, in which case the distinction of a "fictional" versus "real" character may be made. Listing characters page ${props.page}`}
            />

            <h3 className="container mx-auto text-3xl pt-10 pb-2">
                Characters
            </h3>

            <List data={props.data} 
                  type="characters"
                  page={props.page}/>

            <div className="grid justify-items-center text-base pb-8">
                <div className="flex">
                    {
                        props.page > 1 && (
                            <Link href={`/characters?page=${props.page - 1}`}>
                                <a className="dark:text-slate-300 dark:hover:bg-gray-800 px-5 py-2 rounded-lg mx-4 hover:bg-gray-50"
                                    href={`/characters?page=${props.page - 1}`}>
                                    Previous
                                </a>
                            </Link>
                        )
                    }
                    <Link href={`/characters?page=${props.page + 1}`}>
                        <a className="dark:border-gray-800 dark:text-slate-300 dark:hover:bg-gray-800 font-semibold shadow-sm border px-10 py-2 rounded-lg mx-4 hover:bg-gray-50"
                            href={`/characters?page=${props.page + 1}`}>
                            Next
                        </a>
                    </Link>
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

    const res = await getTopData('characters', page);
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