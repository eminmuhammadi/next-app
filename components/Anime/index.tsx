import { Character } from '../../_data/_interfaces/anime/CharactersStaff';
import { Episode } from '../../_data/_interfaces/anime/Videos';

import { Characters } from '../Characters/anime';
import { Episodes } from '../Episodes';

import style from "./Anime.module.css";

interface AnimeDetailsProps {
    characters: Character[],
    episodes: Episode[],
    ytID: string
}

const AnimeDetails = (props: AnimeDetailsProps): JSX.Element => {
    return (
        <div className="container mx-auto">
            <div className="py-4">
                <Episodes data={props.episodes || []} />
            </div>

            <div className="py-4">
                <Characters data={props.characters || []} />
            </div>
        </div>
    );
};

export {
    AnimeDetails
}