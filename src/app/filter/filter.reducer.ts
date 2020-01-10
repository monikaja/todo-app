import * as fromFilter from './filter.action';

const initialState: fromFilter.validFilters = 'ALL';

export function filterReducer(state = initialState,
                              action: fromFilter.actions): fromFilter.validFilters {
  switch (action.type) {
    case fromFilter.SET_FILTER:{
      return action.filter;
    }
    default:
      return state;
  }
}
