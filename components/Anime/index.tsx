import { AnimeById, Genre } from "../../_data/_interfaces/anime/ById"

import { CharactersStaffCSR } from '../Characters/anime';
import { GalleryCSR } from '../Gallery'; 
import { EpisodesCSR } from '../Episodes';

import dayjs from 'dayjs';
import style from "./Anime.module.css";

interface AnimeDetailsProps {
    data: AnimeById,
}

const AnimeDetails = (props: AnimeDetailsProps): JSX.Element => {
    return (
        <div className="container mx-auto grid grid-cols-12 gap-1">
            <div className="leading-relaxed col-span-12 md:col-span-4">
                <div className={`dark:bg-gray-900 ${style.details_frame}`}>
                    {/* Popularity details */}
                    {
                        props.data.popularity && (
                            <div className={`dark:hover:bg-gray-800 ${style.detail}`}>
                                <h4 className={`dark:text-slate-200 ${style.detail_title}`}>
                                    Popularity
                                </h4>

                                <data className={`dark:text-slate-400 ${style.detail_data}`}>
                                    <p className="truncate">#{props.data.popularity}</p>
                                </data>
                            </div>
                        )
                    }

                    {/* Title details */}
                    {
                        props.data.title_english && (
                            <div className={`dark:hover:bg-gray-800 ${style.detail}`}>
                                <h4 className={`dark:text-slate-200 ${style.detail_title}`}>
                                    Title
                                </h4>

                                <data className={`dark:text-slate-400 ${style.detail_data}`}>
                                    <p className="truncate">
                                        {props.data.title_english}
                                    </p>
                                    <p className="truncate">
                                        {props.data.title_japanese}
                                    </p>
                                    {
                                        props.data.title_synonyms.map((synonym: string, index: number) => {
                                            return (
                                                <p className="truncate" key={index}>
                                                    {synonym}
                                                </p>
                                            )
                                        })
                                    }
                                </data>
                            </div>
                        )
                    }

                    {/* Source details */}
                    {
                        props.data.source && (
                            <div className={`dark:hover:bg-gray-800 ${style.detail}`}>
                                <h4 className={`dark:text-slate-200 ${style.detail_title}`}>
                                    Source
                                </h4>

                                <data className={`dark:text-slate-400 ${style.detail_data}`}>
                                    <p className="truncate">{props.data.source}</p>
                                </data>
                            </div>
                        )
                    }

                    {/* Premiered details */}
                    {
                        props.data.premiered && (
                            <div className={`dark:hover:bg-gray-800 ${style.detail}`}>
                                <h4 className={`dark:text-slate-200 ${style.detail_title}`}>
                                    Premiered
                                </h4>

                                <data className={`dark:text-slate-400 ${style.detail_data}`}>
                                    <p className="truncate">{props.data.premiered}</p>
                                </data>
                            </div>
                        )
                    }

                    {/* Rating details */}
                    {
                        props.data.rating && (
                            <div className={`dark:hover:bg-gray-800 ${style.detail}`}>
                                <h4 className={`dark:text-slate-200 ${style.detail_title}`}>
                                    Rating
                                </h4>

                                <data className={`dark:text-slate-400 ${style.detail_data}`}>
                                    <p className="truncate">{props.data.rating}</p>
                                </data>
                            </div>
                        )
                    }

                    {/* Score details */}
                    {
                        props.data.score && (
                            <div className={`dark:hover:bg-gray-800 ${style.detail}`}>
                                <h4 className={`dark:text-slate-200 ${style.detail_title}`}>
                                    Score
                                </h4>

                                <data className={`dark:text-slate-400 ${style.detail_data}`}>
                                    {props.data.score}
                                </data>
                            </div>
                        )
                    }

                    {/* Genre details */}
                    {
                        props.data.genres[0]?.name && (
                            <div className={`dark:hover:bg-gray-800 ${style.detail}`}>
                                <h4 className={`dark:text-slate-200 ${style.detail_title}`}>
                                    Genre
                                </h4>

                                <data className={`dark:text-slate-400 ${style.detail_data}`}>
                                    {props.data.genres.map((genre: Genre, index: number) => {
                                        return (
                                            <p className="truncate" key={index}>
                                                {genre.name}
                                            </p>
                                        )
                                    })}
                                </data>
                            </div>
                        )
                    }

                    {/* Duration details */}
                    {
                        props.data.duration && (
                            <div className={`dark:hover:bg-gray-800 ${style.detail}`}>
                                <h4 className={`dark:text-slate-200 ${style.detail_title}`}>
                                    Duration
                                </h4>

                                <data className={`dark:text-slate-400 ${style.detail_data}`}>
                                    <p className="truncate">{ props.data.duration }</p>
                                </data>
                            </div>
                        )
                    }

                    {/* Rank details */}
                    {
                        props.data.rank && (
                            <div className={`dark:hover:bg-gray-800 ${style.detail}`}>
                                <h4 className={`dark:text-slate-200 ${style.detail_title}`}>
                                    Rank
                                </h4>

                                <data className={`dark:text-slate-400 ${style.detail_data}`}>
                                    <p className="truncate">#{props.data.rank}</p>
                                </data>
                            </div>
                        )
                    }

                    {/* Licensor details */}
                    {
                        props.data.licensors[0]?.name && (
                            <div className={`dark:hover:bg-gray-800 ${style.detail}`}>
                                <h4 className={`dark:text-slate-200 ${style.detail_title}`}>
                                    Licensor
                                </h4>

                                <data className={`dark:text-slate-400 ${style.detail_data}`}>
                                    {props.data.licensors.map((licensor: Genre, index: number) => {
                                        return (
                                            <p className="truncate" key={index}>
                                                {licensor.name}
                                            </p>
                                        )
                                    })}
                                </data>
                            </div>
                        )
                    }

                    {/* Studio details */}
                    {
                        props.data.studios[0]?.name && (
                            <div className={`dark:hover:bg-gray-800 ${style.detail}`}>
                                <h4 className={`dark:text-slate-200 ${style.detail_title}`}>
                                    Studio
                                </h4>

                                <data className={`dark:text-slate-400 ${style.detail_data}`}>
                                    {props.data.studios.map((studio: Genre, index: number) => {
                                        return (
                                            <p className="truncate" key={index}>
                                                {studio.name}
                                            </p>
                                        )
                                    })}
                                </data>
                            </div>
                        )
                    }

                    {/* Aired details */}
                    {
                        props.data.aired.from && (
                            <div className={`dark:hover:bg-gray-800 ${style.detail}`}>
                                <h4 className={`dark:text-slate-200 ${style.detail_title}`}>
                                    Aired
                                </h4>

                                <data className={`dark:text-slate-400 ${style.detail_data}`}>
                                    <span>{dayjs(props.data.aired.from).isValid() ? dayjs(props.data.aired.from).format('MMM YYYY') : '∞'}</span>
                                    <span className="px-2">-</span>
                                    <span>{dayjs(props.data.aired.to).isValid() ? dayjs(props.data.aired.to).format('MMM YYYY') : '∞'}</span>
                                </data>
                            </div>
                        )
                    }
                </div>
            </div>
            
            <div className="col-span-12 md:col-span-8">
                <div className="py-4">
                    <EpisodesCSR id={props.data.mal_id}
                        description={props.data.background || props.data.synopsis} />
                </div>

                <div className="py-4">
                    <CharactersStaffCSR id={props.data.mal_id} />
                </div>
            </div>

            <div className="col-span-12">
                <div className="py-4">
                    <GalleryCSR type="anime" id={props.data.mal_id}/>
                </div>
            </div>
        </div>
    );
};

export {
    AnimeDetails
}