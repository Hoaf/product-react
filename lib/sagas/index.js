import { all } from 'redux-saga/effects';
import { watchFetchProducts } from './products';

export default function* rootSaga() {
  try {
    yield all([
      watchFetchProducts(),
    ]);
  } catch (err) {
    console.log(err);
  }
}
