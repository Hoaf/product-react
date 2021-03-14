/* eslint-disable linebreak-style */
import { createActions, handleActions } from 'redux-actions';

const defaultState = { error: null, data: null, isLoading: false };

export const { fetchProductStart, fetchProductSuccess, fetchProductFail } = createActions({
  FETCH_PRODUCT_START:     id => ({ id }),
  FETCH_PRODUCT_SUCCESS:   product => ({ product }),
  FETCH_PRODUCT_FAIL:      error => ({ error }),
});

export const reducer = handleActions(
  {
    [fetchProductStart]: state => ({ ...state, error: null, isLoading: true }),
    [fetchProductSuccess]: (state, { payload: { product } }) => ({
      error: null,
      isLoading: false,
      data: product,
    }),
    [fetchProductFail]: (state, { payload: { error } }) => ({ error, isLoading: false, data: [] }),
  },
  defaultState,
);
