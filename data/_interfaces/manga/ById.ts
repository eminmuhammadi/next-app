export interface MangaById {
    readonly mal_id: number;
    readonly url: string;
    readonly title: string;
    readonly title_english: string;
    readonly title_synonyms: string[];
    readonly title_japanese: string;
    readonly status: string;
    readonly image_url: string;
    readonly type: string;
    readonly volumes: number;
    readonly chapters: number;
    readonly publishing: boolean;
    readonly published: Published;
    readonly rank: number;
    readonly score: number;
    readonly scored_by: number;
    readonly popularity: number;
    readonly members: number;
    readonly favorites: number;
    readonly synopsis: string;
    readonly background: string;
    readonly related: Related;
    readonly genres: Author[];
    readonly explicit_genres: any[];
    readonly demographics: Author[];
    readonly themes: Author[];
    readonly authors: Author[];
    readonly serializations: Author[];
    readonly external_links: ExternalLink[];
}

export interface Author {
    readonly mal_id: number;
    readonly type: Type;
    readonly name: string;
    readonly url: string;
}

export enum Type {
    Anime = "anime",
    Manga = "manga",
    People = "people",
}

export interface ExternalLink {
    readonly name: string;
    readonly url: string;
}

export interface Published {
    readonly from: Date;
    readonly to: Date;
    readonly prop: Prop;
    readonly string: string;
}

export interface Prop {
    readonly from: From;
    readonly to: From;
}

export interface From {
    readonly day: number;
    readonly month: number;
    readonly year: number;
}

export interface Related {
    readonly Other: Author[];
    readonly Adaptation: Author[];
    readonly "Spin-off": Author[];
}