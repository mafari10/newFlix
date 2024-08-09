import { Movie } from "./movie";
export interface TvShow {
    id: number;
    backdrop_path: string,
    genere_ids: number[],
    name: string,
    vote_average: number,
    vote_count: number,
    overview: string,
    popularity: number,
    poster_path: string,
    original_language: string,
    original_name: string,
    release_date: string,
    first_air_date: string,
};
export interface TvshowDTO {
    page: number,
    results: TvShow[],
    total_pages: number,
    total_result: number,
}

export function mapToMovies(tvshows: TvShow[]): Movie[] {
    return tvshows.map((tvshow: TvShow) => {
        return {
            ...tvshow,
            title: tvshow.name,
            original_title: tvshow.original_name,
        }
    })
}