import { createActions, handleActions } from 'redux-actions';

const defaultState = { error: null, data: null, isLoading: false };

export const { fetchProductsStart, fetchProductsSuccess, fetchProductsFail } = createActions({
  FETCH_PRODUCTS_START:     start => ({ start }),
  FETCH_PRODUCTS_SUCCESS:   products => ({ products }),
  FETCH_PRODUCTS_FAIL:      error => ({ error }),
});

export const reducer = handleActions(
  {
    [fetchProductsStart]: state => ({ ...state, error: null, isLoading: true }),
    [fetchProductsSuccess]: (state, { payload: { products } }) => ({
      error: null,
      isLoading: false,
      data: products,
    }),
    [fetchProductsFail]: (state, { payload: { error } }) => ({ error, isLoading: false, data: [] }),
  },
  defaultState,
);
