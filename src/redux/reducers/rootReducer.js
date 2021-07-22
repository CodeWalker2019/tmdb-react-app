import {combineReducers} from "redux";
import searchReducer from "./searchReducer";
import moviesReducer from "./moviesReducer";


export const rootReducer = combineReducers({
  searchForm: searchReducer,
  movies: moviesReducer
})
