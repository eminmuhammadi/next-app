import { GetServerSideProps, NextPage } from 'next'
import { ParsedUrlQuery } from 'querystring';
import { NextSeo } from 'next-seo';

import { Season } from "../../../_data/_interfaces/season/SeasonArchive";
import { ArchiveList } from '../../../components/List';
interface Props {
    year: number,
    season: Season,
}

interface IParams extends ParsedUrlQuery {
    year: string
    season: string
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
                title={`Archive - ${props.year} ${props.season}`}
                description={`List of all animes on ${props.year} and when thes season is ${props.season}`}
            />

            <h3 className="container mx-auto capitalize text-3xl pt-10 pb-2">
                {props.season} {props.year}
            </h3>

            <ArchiveList year={props.year}
                        season={props.season}
                        type="anime"/>
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

    const { year, season } = ctx.params as IParams;
    if (!year || 
        !season || 
        !['winter', 'spring', 'summer', 'fall'].includes(season) || 
        !/^\d{4}$/.test(year) || 
        Number(year) < 1900 || 
        Number(year) > 2100) {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            year,
            season
        },
    };
}

export default Index;