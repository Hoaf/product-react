import { take, put, call } from 'redux-saga/effects';
import axios from 'axios';
import {
  fetchProductsStart,
  fetchProductsSuccess,
  fetchProductsFail,
} from '../reducers/products';

export function* fetchProducts() {
  const url = 'https://192.168.1.6:8081/api/products';
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
