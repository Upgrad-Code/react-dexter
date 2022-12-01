import React, { useReducer, useEffect } from 'react';
import { reducer, iState } from '../../reducers/ProductsPageReducer';
import { ACTIONS } from '../../actions/actions';
import { PRODUCTS_API_URL } from '../../helpers/config';
import { getJSON } from '../../helpers/helperFns';

const ProductsPage = () => {
  const [state, dispatch] = useReducer(reducer, iState);
  console.log(state.products);

  useEffect(() => {
    (async () => {
      try {
        dispatch({
          type: ACTIONS.FETCH_START,
        });
        const data = await getJSON(PRODUCTS_API_URL);
        const products = [...data.products];
        dispatch({
          type: ACTIONS.FETCH_SUCCESS,
          payload: products,
        });
      } catch (err) {
        dispatch({
          type: ACTIONS.FETCH_ERROR,
          payload: err,
        });
      }
    })();
    return () => {
      console.log('Component will unMount...');
    };
  }, []);

  return null;
};

export default ProductsPage;
