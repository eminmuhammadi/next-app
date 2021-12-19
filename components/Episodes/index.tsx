import { Episode } from '../../_data/_interfaces/anime/Videos';

import style from "./Episodes.module.css"

interface EpisodesProps {
    data: Episode[]
}

const Episodes = (props: EpisodesProps): JSX.Element => {
    if (props.data.length === 0) {
        return (
            <></>
        );
    }

    return (
        <div className="container mx-auto">
            <h3 className="text-3xl pb-4">Episodes</h3>

            <div className="flex overflow-x-scroll pb-4">
            {
                props.data.map((episode, index) => {
                    return (
                        <div key={index} 
                             className="dark:bg-black dark:border-gray-800 dark:hover:bg-gray-900 ml-2 bg-gray-50 inline-block text-sm px-4 py-2 rounded border hover:shadow-lg">
                            <a href={episode.url}
                                target='_blank' 
                                rel='noopener noreferrer'
                                className="w-48">
                                <span className="dark:text-gray-50 block text-sm w-48 truncate text-black">
                                    { episode.title }
                                </span>
                                <span className="block text-xs text-slate-400 truncate">
                                    { episode.episode }
                                </span>
                            </a>
                        </div>
                    );
                })
            }
            </div>
        </div>
    )
}

export {
    Episodes
}