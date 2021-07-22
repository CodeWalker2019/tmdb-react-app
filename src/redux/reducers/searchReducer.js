import {SET_SEARCH_VALUE, SHOW_SEARCH_BAR} from "../actions/search";

const initialState = {
  showSearchBar: false,
  searchValue: '',
};

export default function searchReducer(state = initialState, action) {
 switch (action.type) {
   case SET_SEARCH_VALUE:
     return {...state, searchValue: action.payload}

   case SHOW_SEARCH_BAR:
     if (state.showSearchBar === true) return state;
     return {...state, showSearchBar: true};

   default:
     return state;
 }
}
