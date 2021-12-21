import Image from "next/image";
import Link from "next/link";

import { Top } from "../../_data/_interfaces/top/Top";
import { urlUpdater } from "../../_helpers/url";

import style from "./List.module.css";

import { Result } from './../../_data/_interfaces/search/Search';
import { Anime, Season } from './../../_data/_interfaces/season/Season';
import { Season as SeasonType } from './../../_data/_interfaces/season/SeasonArchive';

import useSWR from "swr";
import fetcher from "../../_helpers/fetcher";
interface ListProps {
    data: Top[],
    type: string,
    page: number
}

const List = (props: ListProps): JSX.Element => {
    if (props.data.length === 0) {
        return (
            <div>
                <p className="text-center pt-5">
                    No results found
                </p>
            </div>
        );
    }
    
    return (
        <div className="grid grid-cols-12 gap-4 py-4">
        {
            props.data.map((item: Top, index: number) => {
                return (
                    <div key={index}
                        className={`dark:hover:bg-gray-800 dark:hover:border-gray-600 ${style.item}`}>
                        <Link href={`/${props.type}/${item.mal_id}`}
                            passHref={true}>
                            <a href={`/${props.type}/${item.mal_id}`}>
                                <div className="text-center"
                                    title={`${item.title} (${item.score})`}>
                                    <Image width={225}
                                        height={337}
                                        objectFit="cover"
                                        objectPosition="center"
                                        className={`aspect-ratio ${style.image}`}
                                        src={urlUpdater(item.image_url || "")}
                                        alt={item.title}/>
                                </div>
                                <p className={`dark:text-slate-300 ${style.title}`}>
                                    {item.title}
                                </p>
                            </a>
                        </Link>
                    </div>
                )
            })
        }
        </div>
    );
};

interface ArchiveListProps {
    year: number,
    season: SeasonType,
    type: string,
}

const ArchiveList = (props: ArchiveListProps): JSX.Element => {
    const fetch = (url: string) => fetcher.get<Season>(url);
    const { data } = useSWR(`${process.env.API_URL}/season/${props.year}/${props.season}`, fetch);

    if (!data) {
        return(
            <div className="text-center pt-5">
                <p>Loading...</p>
            </div>
        )
    }

    if (data.anime.length === 0) {
        return (
            <div>
                <p className="text-center pt-5">
                    No results found
                </p>
            </div>
        );
    }
    
    return (
        <div className="grid grid-cols-12 gap-4 py-4">
        {
            data.anime?.map((item: Anime, index: number) => {
                return (
                    <div key={index}
                        className={`dark:hover:bg-gray-800 dark:hover:border-gray-600 ${style.item}`}>
                        <Link href={`/${props.type}/${item.mal_id}`}
                            passHref={true}>
                            <a href={`/${props.type}/${item.mal_id}`}>
                                <div className="text-center"
                                    title={`${item.title} (${item.score})`}>
                                    <Image width={225}
                                        height={337}
                                        objectFit="cover"
                                        objectPosition="center"
                                        className={`aspect-ratio ${style.image}`}
                                        src={urlUpdater(item.image_url || "")}
                                        alt={item.title}/>
                                </div>
                                <p className={`dark:text-slate-300 ${style.title}`}>
                                    {item.title}
                                </p>
                            </a>
                        </Link>
                    </div>
                )
            })
        }
        </div>
    );
};

interface SearchListProps{
    data: Result[],
    type: string,
    page: number
}

const SearchList = (props: SearchListProps): JSX.Element => {
    if (props.data.length === 0) {
        return (
            <div>
                <p className="text-center pt-5">
                    No results found
                </p>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-12 gap-4 py-4">
        {
            props.data.map((item: Result, index: number) => {
                return (
                    <div key={index}
                        className={`dark:hover:bg-gray-800 dark:hover:border-gray-600 ${style.item}`}>
                        <Link href={`/${props.type}/${item.mal_id}`}
                            passHref={true}>
                            <a href={`/${props.type}/${item.mal_id}`}>
                                <div className="text-center"
                                    title={`${item.title} (${item.score})`}>
                                    <Image width={225}
                                        height={337}
                                        objectFit="cover"
                                        objectPosition="center"
                                        className={`aspect-ratio ${style.image}`}
                                        src={urlUpdater(item.image_url || "")}
                                        alt={item.title}/>
                                </div>
                                <p className={`dark:text-slate-300 ${style.title}`}>
                                    {item.title || item.name}
                                </p>
                            </a>
                        </Link>
                    </div>
                )
            })
        }
        </div>
    );
};

export {
    List,
    SearchList,
    ArchiveList
}