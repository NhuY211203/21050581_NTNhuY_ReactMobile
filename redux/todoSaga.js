import { put, takeEvery, delay, all } from 'redux-saga/effects';
import { setLoading } from './todoSlice';

function* handleAddTodo(action) {
  try {
    yield put(setLoading(true));
    yield delay(1000); // Simulate API call
    yield put(setLoading(false));
  } catch (error) {
    console.error('Error in handleAddTodo:', error);
    yield put(setLoading(false));
  }
}

function* watchAddTodo() {
  yield takeEvery('todos/addTodo', handleAddTodo);
}

export default function* rootSaga() {
  yield all([
    watchAddTodo(),
  ]);
}
