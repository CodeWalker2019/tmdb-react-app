import {
  CHANGE_CURRENT_PAGE,
  FETCH_MOVIE_BY_ID,
  GET_POPULAR_MOVIES,
  QUERY_MOVIE,
  TOGGLE_FETCHING
} from "../actions/movies";

const initialState = {
  isFetching: false,
  mostPopularMovies: [],
  fetchedMovie: null,
  queryResultMovies: {total_pages: 0},
  currentPage: 1
};

export default function moviesReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_CURRENT_PAGE:
      return {...state, currentPage: action.payload}

    case QUERY_MOVIE:
      return {...state, queryResultMovies: action.payload};

    case FETCH_MOVIE_BY_ID:
      return {...state, fetchedMovie: action.payload};

    case GET_POPULAR_MOVIES:
      return {...state, mostPopularMovies: action.payload};

    case TOGGLE_FETCHING:
      return {...state, isFetching: !state.isFetching};

    default:
      return state;
  }
}
