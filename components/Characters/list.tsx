import Image from "next/image";
import Link from "next/link";

import { urlUpdater } from "../../_helpers/url";
import { Character } from '../../_data/_interfaces/manga/Characters';

import style from "./Characters.module.css"

interface CharactersProps {
    data: Character[],
    title: string
}

const CharactersList = (props: CharactersProps): JSX.Element => {
    if (props.data.length === 0) {
        return (
            <></>
        );
    }

    return (
        <div>
            <h3 className="text-3xl pb-4">{ props.title }</h3>
            {
                props.data.map((character: Character, index: number) => {
                    return (
                        <div key={index}
                            className={`my-2 dark:bg-gray-900 dark:hover:bg-gray-800 dark:border-gray-800 ${style.frame}`}>
                            <div className="h-8 mt-2">
                                <Image className={`${style.avatar}`}
                                    src={`${urlUpdater(character.image_url || '')}`}
                                    height={36}
                                    width={36}
                                    quality={60}
                                    alt={`${character.name}`} />
                            </div>
                            <div className={`dark:font-normal ${style.character}`}>
                                <span className={`${style.name}`}>
                                    {character.name}
                                </span>
                                <span className={`${style.role}`}>
                                    {character.role}
                                </span>
                            </div>
                        </div>
                    );
                })
            }
        </div>
    )
}

export {
    CharactersList
}