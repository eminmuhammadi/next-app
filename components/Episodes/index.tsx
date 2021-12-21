import { Episode, Videos, Promo } from '../../_data/_interfaces/anime/Videos';

import style from "./Episodes.module.css";

import useSWR from 'swr';
import fetcher from './../../_helpers/fetcher';
import { getIdFromYoutubeURL } from './../../_helpers/url';

interface EpisodesProps {
    data: Episode[],
    description: string,
    promo: Promo[]
}

const Episodes = (props: EpisodesProps): JSX.Element => {
    if (props.data.length === 0) {
        return (
            <></>
        );
    }

    return (
        <div className="container mx-auto">
            <h3 className="text-3xl py-6">Episodes</h3>

            <div className="flex overflow-x-scroll pb-5">
                {
                    props.data.map((episode, index) => {
                        return (
                            <div key={index}
                                className={`dark:bg-black dark:border-gray-800 dark:hover:bg-gray-900 ${style.item}`}>
                                <a href={episode.url}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className="w-48">
                                    <span className={`dark:text-gray-50 ${style.title}`}>
                                        {episode.title}
                                    </span>
                                    <span className={`${style.episode}`}>
                                        {episode.episode}
                                    </span>
                                </a>
                            </div>
                        );
                    })
                }
            </div>

            <h3 className="text-3xl py-6">Trailer</h3>

            <div>
                <div className="grid grid-cols-12 gap-1">
                    <div className="col-span-12">
                        <p className={`dark:text-slate-400 ${style.trailer_synopsis}`}>
                            {
                                props.description.replace("[Written by MAL Rewrite]", "")
                                    .replace(/(\(Source:.*?\))/gi, "")
                            }
                        </p>
                    </div>

                    <div className="col-span-12 flex overflow-x-scroll pt-4 pb-4">
                        {
                            props.promo.map((promo: Promo, index: number) => {
                                return (
                                    <div className="px-2" key={index}>
                                        <iframe
                                            className={`dark:border-gray-700 dark:bg-black ${style.yt_video}`}
                                            src={`https://www.youtube-nocookie.com/embed/${getIdFromYoutubeURL(promo.video_url)}?modestbranding=1&showinfo=0&rel=0&cc_load_policy=1&iv_load_policy=3&disablekb=1`}
                                            frameBorder={0} />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

interface EpisodeCsrProps {
    id: number,
    description: string,
}

const EpisodesCSR = (props: EpisodeCsrProps): JSX.Element => {
    const fetch = (url: string) => fetcher.get<Videos>(url);
    const { data } = useSWR(`${process.env.API_URL}/anime/${props.id}/videos`, fetch);

    if (!data) {
        return(
            <div>
                <p className="text-center pt-5">
                    Loading...
                </p>
            </div>
        )
    }

    return <Episodes data={data.episodes || []}
                description={props.description || ''}
                promo={data.promo || []} />
}

export {
    Episodes,
    EpisodesCSR
}