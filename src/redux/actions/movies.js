export const GET_POPULAR_MOVIES = 'movies/getPopularMovies';
export const TOGGLE_FETCHING = 'movies/setFetching';
export const FETCH_MOVIE_BY_ID = 'movies/fetchMovieById'
export const QUERY_MOVIE = 'movies/queryMovies';
export const CHANGE_CURRENT_PAGE = 'movies/changeCurrentPage';

export function toggleFetching() {
  return {
    type: TOGGLE_FETCHING
  }
}

export function getPopular() {
  return async function (dispatch) {
    dispatch(toggleFetching());

    let response = await fetch(
      'https://api.themoviedb.org/3/movie/popular?api_key=dd77f5c2e862ca4ea0ba79b12638cdc4'
    );

    if (response.ok) {
      let data = await response.json();
      dispatch({type: GET_POPULAR_MOVIES, payload: data.results});
    }

    dispatch(toggleFetching());
  }
}

export function fetchMovieById({id}) {
  return async function (dispatch) {
    dispatch(toggleFetching());
    let fetchedMovieData = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=dd77f5c2e862ca4ea0ba79b12638cdc4`
    ).then(response => response.json());
    dispatch(toggleFetching());
    dispatch({type: FETCH_MOVIE_BY_ID, payload: fetchedMovieData});
  }
}

export function queryMovies(query, page=1) {
  return async function (dispatch) {
    let result = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=dd77f5c2e862ca4ea0ba79b12638cdc4&query=${query}&page=${page}`
    ).then(response => response.json());
    dispatch({type: QUERY_MOVIE, payload: result});
  }
}

export function changePage(page) {
  return {
    type: CHANGE_CURRENT_PAGE,
    payload: page
  }
}
