import { Author, MangaById } from '../../_data/_interfaces/manga/ById';

import { CharactersCSR } from '../Characters/manga';
import { GalleryCSR } from '../Gallery';
import style from "./Manga.module.css";

interface MangaDetailsProps {
    data: MangaById,
}

const MangaDetails = (props: MangaDetailsProps): JSX.Element => {
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
                        props.data.rank && (
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

                    {/* Volumes details */}
                    {
                        props.data.volumes && (
                            <div className={`dark:hover:bg-gray-800 ${style.detail}`}>
                                <h4 className={`dark:text-slate-200 ${style.detail_title}`}>
                                    Volumes
                                </h4>

                                <data className={`dark:text-slate-400 ${style.detail_data}`}>
                                    <p className="truncate">{props.data.volumes}</p>
                                </data>
                            </div>
                        )
                    }

                    {/* Chapters details */}
                    {
                        props.data.chapters && (
                            <div className={`dark:hover:bg-gray-800 ${style.detail}`}>
                                <h4 className={`dark:text-slate-200 ${style.detail_title}`}>
                                    Chapters
                                </h4>

                                <data className={`dark:text-slate-400 ${style.detail_data}`}>
                                    <p className="truncate">{props.data.chapters}</p>
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
                                    <p className="truncate">{props.data.score}</p>
                                </data>
                            </div>
                        )
                    }

                    {/* Author details */}
                    {
                        props.data.authors[0]?.name && (
                            <div className={`dark:hover:bg-gray-800 ${style.detail}`}>
                                <h4 className={`dark:text-slate-200 ${style.detail_title}`}>
                                    Author
                                </h4>

                                <data className={`dark:text-slate-400 ${style.detail_data}`}>
                                    {
                                        props.data.authors.map((author: Author, index: number) => {
                                            return (
                                                <p className="truncate" key={index}>
                                                    {author.name}
                                                </p>
                                            )
                                        })
                                    }
                                </data>
                            </div>
                        )
                    }

                    {/* Genres details */}
                    {
                        props.data.genres[0]?.name && (
                            <div className={`dark:hover:bg-gray-800 ${style.detail}`}>
                                <h4 className={`dark:text-slate-200 ${style.detail_title}`}>
                                    Genres
                                </h4>

                                <data className={`dark:text-slate-400 ${style.detail_data}`}>
                                    {
                                        props.data.genres.map((genre: Author, index: number) => {
                                            return (
                                                <p className="truncate" key={index}>
                                                    {genre.name}
                                                </p>
                                            )
                                        })
                                    }
                                </data>
                            </div>
                        )
                    }

                    { /* Demographics details */}
                    {
                        props.data.demographics[0]?.name && (
                            <div className={`dark:hover:bg-gray-800 ${style.detail}`}>
                                <h4 className={`dark:text-slate-200 ${style.detail_title}`}>
                                    Ethnicity
                                </h4>

                                <data className={`dark:text-slate-400 ${style.detail_data}`}>
                                    {
                                        props.data.demographics.map((demographics: Author, index: number) => {
                                            return (
                                                <p className="truncate" key={index}>
                                                    {demographics.name}
                                                </p>
                                            )
                                        })
                                    }
                                </data>
                            </div>
                        )
                    }

                    {/* Themes details */}
                    {
                        props.data.themes[0]?.name && (
                            <div className={`dark:hover:bg-gray-800 ${style.detail}`}>
                                <h4 className={`dark:text-slate-200 ${style.detail_title}`}>
                                    Theme
                                </h4>

                                <data className={`dark:text-slate-400 ${style.detail_data}`}>
                                    {
                                        props.data.themes.map((theme: Author, index: number) => {
                                            return (
                                                <p className="truncate" key={index}>
                                                    {theme.name}
                                                </p>
                                            )
                                        })
                                    }
                                </data>
                            </div>
                        )
                    }
                </div>
            </div>

            <div className="col-span-12 md:col-span-8">
                {
                    props.data.background?.length > 0 && (
                        <div className="py-4">
                            <div className="container mx-auto">
                                <h3 className="text-3xl py-6">Synopsis</h3>
        
                                <p className={`dark:text-slate-400 ${style.synopsis}`}>
                                    {
                                        props.data.background.replace("[Written by MAL Rewrite]", "")
                                            .replace(/(\(Source:.*?\))/gi, "")
                                    }
                                </p>
                            </div>
                        </div>
                    )
                }

                <div className="py-4">
                    <CharactersCSR id={props.data.mal_id} />
                </div>
            </div>

            <div className="col-span-12">
                <div className="py-4">
                    <GalleryCSR type="manga" id={props.data.mal_id} />
                </div>
            </div>
        </div>
    );
};

export {
    MangaDetails
}