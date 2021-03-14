/* eslint-disable linebreak-style */
/* eslint-disable object-shorthand */
/* eslint-disable indent */
import { take, put, call } from 'redux-saga/effects';
import axios from 'axios';
import {
    fetchProductStart,
    fetchProductSuccess,
    fetchProductFail,
} from '../reducers/product';

export function* fetchProduct() {
    const url = 'https://shift-management-project.herokuapp.com/api/product';
    // const params = {
    //     id: id.id,
    // };
    try {
        const { data: product } = yield call([axios, 'get'], url, 1);
        yield put(fetchProductSuccess(product));
    } catch (error) {
        yield put(fetchProductFail(error));
    }
}

export function* watchFetchProduct() {
    while (true) {
        // const { payload: { id } } = yield take(fetchProductStart);
        yield take(fetchProductStart);
        yield call(fetchProduct);
    }
}