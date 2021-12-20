import { GetServerSideProps, NextPage } from 'next'
import { ParsedUrlQuery } from 'querystring';

import { Hero } from '../../components/Hero';

import { AnimeById } from "../../_data/_interfaces/anime/ById"
import { Article, News } from '../../_data/_interfaces/anime/News';

import { AnimeDetails } from '../../components/Anime';
import { News as NewsComponent } from '../../components/News';

import { getAnimeByID, getNews } from "../../_data/anime"

interface Props {
    data: AnimeById,
    articles: Article[],
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
        <div>
            <Hero title={props.data.title_english || props.data.title || props.data.title_japanese} 
                  description={
                    (props.data.synopsis).replace("[Written by MAL Rewrite]", "")
                                         .replace(/(\(Source:.*?\))/gi, "")
                  }                   
                  image={props.data.image_url}/>

            <div>
                <AnimeDetails data={props.data}/>
                <div className="bg-gray-100 dark:bg-gray-900">
                    <NewsComponent data={props.articles}/>
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

    const { id } = ctx.params as IParams;

    const res: AnimeById = await getAnimeByID(Number(id));
    if (!res || res.mal_id === undefined || res.mal_id === null) {
        return {
            notFound: true,
        }
    }

    const news:News = await getNews(res.mal_id);

    return {
        props: {
            data: res,
            articles: news.articles,
            id: Number(id),
        },
    };
}

export default Index;