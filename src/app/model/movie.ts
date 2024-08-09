export interface Movie {
    id: number;
    backdrop_path: string,
    genere_ids: number[],
    release_date: string,
    title: string,
    vote_average: number,
    vote_count: number,
    overview: string,
    popularity: number,
    poster_path: string,
    original_language: string,
    original_title: string,
}
export interface MoviesDTO {
    page: number,
    results: Movie[],
    total_pages: number,
    total_result: number,
}