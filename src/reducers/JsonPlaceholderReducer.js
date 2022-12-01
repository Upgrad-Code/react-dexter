import { ACTIONS } from '../actions/actions';

export const iState = {
  isLoading: false,
  data: [],
  isError: null,
  pram: 'posts',
};

export const JsonPlaceholderReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.FETCH_START:
      return null;
    case ACTIONS.FETCH_SUCCESS:
      return null;
    case ACTIONS.FETCH_ERROR:
      return null;
    case 'default':
      return state;
  }
};
