import { GetServerSideProps, NextPage } from 'next'
import { ParsedUrlQuery } from 'querystring';
import { getIdFromYoutubeURL } from './../../_helpers/url';

import { Hero } from '../../components/Hero';

import { AnimeById } from "../../_data/_interfaces/anime/ById"
import { Article, News } from '../../_data/_interfaces/anime/News';
import { Character, CharactersStaff } from '../../_data/_interfaces/anime/CharactersStaff';
import { Videos, Episode } from '../../_data/_interfaces/anime/Videos';

import { AnimeDetails } from '../../components/Anime';
import { News as NewsComponent } from '../../components/News';

import { getAnimeByID, getCharacters, getNews, getVideos } from "../../_data/anime"

interface Props {
    data: AnimeById,
    articles: Article[],
    characters: Character[],
    episodes: Episode[],
    ytID: string,
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
                <AnimeDetails characters={props.characters}
                              episodes={props.episodes}
                              ytID={props.ytID}/>
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
    const characterStaff:CharactersStaff = await getCharacters(res.mal_id);
    const videos:Videos = await getVideos(res.mal_id);

    return {
        props: {
            data: res,
            articles: news.articles,
            characters: characterStaff.characters,
            episodes: videos.episodes,
            ytID: getIdFromYoutubeURL(videos.promo[0].video_url),
            id: Number(id),
        },
    };
}

export default Index;