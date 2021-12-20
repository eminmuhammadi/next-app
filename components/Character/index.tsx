import style from "./Character.module.css";

import { Character } from "./../../_data/_interfaces/character/ById";
import { GalleryCSR } from "../Gallery";
import { CharactersList } from "../Characters/list";

interface CharacterDetailsProps {
    data: Character
}

const CharacterDetails = (props: CharacterDetailsProps): JSX.Element => {
    return (
        <div className="container mx-auto grid grid-cols-12 gap-1">
            <div className="leading-relaxed col-span-12 md:col-span-4">
                <div className={`dark:bg-gray-900 ${style.details_frame}`}>
                    {/* Name details */}
                    {
                        props.data.name && (
                            <div className={`dark:hover:bg-gray-800 ${style.detail}`}>
                                <h4 className={`dark:text-slate-200 ${style.detail_title}`}>
                                    Name
                                </h4>

                                <data className={`dark:text-slate-400 ${style.detail_data}`}>
                                    <p className="truncate">
                                        {props.data.name}
                                    </p>
                                    <p className="truncate">
                                        {props.data.name_kanji}
                                    </p>
                                </data>
                            </div>
                        )
                    }

                    {/* Nickname details */}
                    {
                        props.data.nicknames[0] && (
                            <div className={`dark:hover:bg-gray-800 ${style.detail}`}>
                                <h4 className={`dark:text-slate-200 ${style.detail_title}`}>
                                    Nick
                                </h4>

                                <data className={`dark:text-slate-400 ${style.detail_data}`}>
                                    {
                                        props.data.nicknames.map((nickname: string, index: number) => {
                                            return (
                                                <p key={index} className="truncate">
                                                    {nickname}
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
                <div className="container mx-auto py-4">
                    <CharactersList data={props.data.animeography}
                                    title="Animeography"/>
                </div>

                <div className="container mx-auto py-">
                    <CharactersList data={props.data.mangaography}
                                   title="Mangaography"/>
                </div>

                <div className="container mx-auto py-4">
                    <CharactersList data={props.data.voice_actors}
                                   title="Voice Actors"/>
                </div>
            </div>

            <div className="col-span-12">
                <div className="py-4">
                    <GalleryCSR type="character" id={props.data.mal_id} />
                </div>
            </div>
        </div>
    );
};

export {
    CharacterDetails
}
