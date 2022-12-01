import { ACTIONS } from '../actions/actions';

export const iState = {
  isLoading: false,
  data: [],
  isError: null,
  pram: 'posts',
};

export const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.FETCH_START:
      return { ...state, isLoading: true };
    case ACTIONS.FETCH_SUCCESS:
      return { ...state, data: action.payload, isLoading: false };
    case ACTIONS.FETCH_ERROR:
      return { ...state, isError: action.payload, isLoading: false };
    case ACTIONS.UPDATE_PRAM:
      return { ...state, pram: action.payload };
    case 'default':
      return state;
  }
};
