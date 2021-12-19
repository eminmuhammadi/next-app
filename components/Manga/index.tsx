import { Character } from '../../_data/_interfaces/manga/Characters';

import { Characters } from '../Characters/manga';

import style from "./Manga.module.css";

interface MangaDetailsProps {
    characters: Character[],
}

const MangaDetails = (props: MangaDetailsProps): JSX.Element => {
    return (
        <div className="container mx-auto">
            <Characters data={props.characters || []} />
        </div>
    );
};

export {
    MangaDetails
}