import { take, put, call } from 'redux-saga/effects';
import axios from 'axios';
import {
  fetchProductsStart,
  fetchProductsSuccess,
  fetchProductsFail,
} from '../reducers/products';

export function* fetchProducts() {
  const url = 'https://shift-management-project.herokuapp.com/api/products';
  try {
    const { data: products } = yield call([axios, 'get'], url);
    yield put(fetchProductsSuccess(products));
  } catch (error) {
    yield put(fetchProductsFail(error));
  }
}

export function* watchFetchProducts() {
  while (true) {
    yield take(fetchProductsStart);
    yield call(fetchProducts);
  }
}
