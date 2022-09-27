export interface News {
    exhaustive: Exhaustive;
    exhaustiveNbHits: boolean;
    exhaustiveTypo: boolean;
    hits: Hit[];
    hitsPerPage: number;
    nbHits: number;
    nbPages: number;
    page: number;
    params: string;
    processingTimeMS: number;
    processingTimingsMS: ProcessingTimingsMS;
    query: eQuery;
}

export interface Exhaustive {
    nbHits: boolean;
    typo: boolean;
}

export interface Hit {
    _highlightResult: HighlightResult;
    _tags: string[];
    author: string;
    comment_text: string;
    created_at: Date;
    created_at_i: number;
    num_comments: null;
    objectID: string;
    parent_id: number;
    points: null;
    story_id: number;
    story_text: null;
    story_title: string;
    story_url: string;
    title: null;
    url: null;
}

export interface HighlightResult {
    author: Author;
    comment_text: Author;
    story_title: Author;
    story_url: Author;
}

export interface Author {
    fullyHighlighted?: boolean;
    matchLevel: eMatchLevel;
    matchedWords: eQuery[];
    value: string;
}

export enum eMatchLevel {
    full = 'full',
    none = 'none',
}

export enum eQuery {
    angular = 'angular',
    react = 'reactjs',
    vue = 'vuejs',
}

export interface ProcessingTimingsMS {
    afterFetch: AfterFetch;
    fetch: Fetch;
    total: number;
}

export interface AfterFetch {
    format: Format;
    total: number;
}

export interface Format {
    highlighting: number;
    total: number;
}

export interface Fetch {
    total: number;
}

export interface IGetParams {
    query: eQuery,
    page: number
}
