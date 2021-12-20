import { Character as ICharacter } from "./../manga/Characters";

export interface Character {
    request_hash: string;
    request_cached: boolean;
    request_cache_expiry: number;
    mal_id: number;
    url: string;
    name: string;
    name_kanji: string;
    nicknames: string[];
    about: string;
    member_favorites: number;
    image_url: string;
    animeography: ICharacter[];
    mangaography: ICharacter[];
    voice_actors: ICharacter[];
}