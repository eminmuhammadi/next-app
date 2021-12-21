import Image from "next/image";
import Link from "next/link";

import { urlUpdater } from "../../_helpers/url";
import { Character, Characters } from '../../_data/_interfaces/manga/Characters';

import style from "./Characters.module.css"
import fetcher from './../../_helpers/fetcher';
import useSWR from "swr";

interface CharactersProps {
    data: Character[],
}

const Characters = (props: CharactersProps): JSX.Element => {
    if (props.data.length === 0) {
        return (
            <></>
        );
    }

    return (
        <div className="container mx-auto text-center">
            <h3 className="text-3xl pb-4">Characters</h3>
            {
                props.data.map((character: Character, index: number) => {
                    return (
                        <Link href={`/characters/${character.mal_id}`}
                            key={index}>
                            <a className={`${style.link}`}>
                                <div className={`dark:bg-gray-900 dark:hover:bg-gray-800 dark:border-gray-800 ${style.frame}`}>
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
                            </a>
                        </Link>
                    );
                })
            }
        </div>
    )
}

interface CharactersCsrProps {
    id: number
}

const CharactersCSR = (props: CharactersCsrProps): JSX.Element => {
    const fetch = (url: string) => fetcher.get<Characters>(url);
    const { data } = useSWR(`/manga/${props.id}/characters`, fetch);
    
    if (!data) {
        return(
            <div>
                <p className="text-center pt-5">
                    Loading...
                </p>
            </div>
        )
    }

    return <Characters data={data.characters} />
}

export {
    Characters,
    CharactersCSR
}