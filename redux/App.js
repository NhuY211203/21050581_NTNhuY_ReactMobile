import React from 'react';
import { RecoilRoot } from 'recoil';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import TodoList from './TodoList';
import todoReducer from './todoSlice';
import rootSaga from './todoSaga';

// Tạo saga middleware
const sagaMiddleware = createSagaMiddleware();

// Cấu hình store với middleware
const store = configureStore({
  reducer: {
    todos: todoReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware)
});

// Chạy saga
sagaMiddleware.run(rootSaga);

export default function App() {
  return (
    <Provider store={store}>
      <RecoilRoot>
        <TodoList />
      </RecoilRoot>
    </Provider>
  );
}
