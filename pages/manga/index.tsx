import { GetServerSideProps, NextPage } from 'next'
import Link from 'next/link'
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
            <h3 className="container mx-auto text-3xl pt-10 pb-2">
                Manga
            </h3>
            <List data={props.data} 
                  type="manga"
                  page={props.page}/>
            <div className="grid justify-items-center text-base pb-8">
                <div className="flex">
                    {
                        props.page > 1 && (
                            <Link href={`/manga?page=${props.page - 1}`}>
                                <a className="dark:text-slate-300 dark:hover:bg-gray-800 px-5 py-2 rounded-lg mx-4 hover:bg-gray-50"
                                    href={`/manga?page=${props.page - 1}`}>
                                    Previous
                                </a>
                            </Link>
                        )
                    }
                    <Link href={`/manga?page=${props.page + 1}`}>
                        <a className="dark:border-gray-800 dark:text-slate-300 dark:hover:bg-gray-800 font-semibold shadow-sm border px-10 py-2 rounded-lg mx-4 hover:bg-gray-50"
                            href={`/manga?page=${props.page + 1}`}>
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