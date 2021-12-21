import { GetServerSideProps, NextPage } from 'next'
import { ParsedUrlQuery } from 'querystring';
import { NextSeo } from 'next-seo';

import { getCharacterById } from "../../_data/characters";
import { Character } from "../../_data/_interfaces/character/ById";

import { CharacterDetails } from "../../components/Character";
import { Hero } from '../../components/Hero';

interface Props {
    data: Character,
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
            <NextSeo
                title={`${props.data.name || props.data.name_kanji}`}
                description={`${props.data.about}`}
            />
            <Hero title={props.data.name || props.data.name_kanji} 
                  description={
                    (props.data.about).replace("[Written by MAL Rewrite]", "")
                                         .replace(/(\(Source:.*?\))/gi, "")
                  }                   
                  image={props.data.image_url}/>

            <div>
                <CharacterDetails data={props.data}/>
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

    const res: Character = await getCharacterById(Number(id));
    if (!res) {
        return {
            notFound: true,
        }
    }

    // const news:News = await getNews(res.mal_id);

    return {
        props: {
            data: res,
            id: Number(id),
        },
    };
}

export default Index;