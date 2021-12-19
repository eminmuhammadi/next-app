import { GetServerSideProps, NextPage } from 'next'
import { ParsedUrlQuery } from 'querystring';

import { getMangaByID, getNews, getCharacters } from "../../_data/manga"
import { MangaById } from "../../_data/_interfaces/manga/ById"
import { Article, News } from '../../_data/_interfaces/anime/News';

import { News as NewsComponent } from '../../components/News';
import { Hero } from '../../components/Hero';
import { MangaDetails } from '../../components/Manga';
import { Characters, Character } from './../../_data/_interfaces/manga/Characters';

interface Props {
    data: MangaById,
    articles: Article[],
    characters: Character[],
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
                <MangaDetails characters={props.characters}/>
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

    const res: MangaById = await getMangaByID(Number(id));
    if (!res || res.mal_id === undefined || res.mal_id === null) {
        return {
            notFound: true,
        }
    }

    const news:News = await getNews(res.mal_id);
    const characterStaff:Characters = await getCharacters(res.mal_id);

    return {
        props: {
            data: res,
            articles: news.articles,
            characters: characterStaff.characters,
            id: Number(id),
        },
    };
}

export default Index;