export const SHOW_SEARCH_BAR = 'searchBar/showSearchBar';
export const SET_SEARCH_VALUE = 'searchBar/setSearchValue';

export function showSearchBar() {
  return {
    type: SHOW_SEARCH_BAR
  }
}

export function setSearchValue(value) {
  return {
    type: SET_SEARCH_VALUE,
    payload: value
  }
}
