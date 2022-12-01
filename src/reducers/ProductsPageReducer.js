import { ACTIONS } from '../actions/actions';

export const iState = {
  isLoading: false,
  products: [],
  isError: null,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.FETCH_START: {
      return { ...state, isLoading: true };
    }
    case ACTIONS.FETCH_SUCCESS: {
      return { ...state, isLoading: false, products: action.payload };
    }
    case ACTIONS.FETCH_ERROR: {
      return { ...state, isLoading: false, isError: action.payload };
    }
    case 'default':
      return state;
  }
};
