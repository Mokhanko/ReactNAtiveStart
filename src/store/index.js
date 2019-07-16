import { createStore, applyMiddleware, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { fork, all } from 'redux-saga/effects';
import { AsyncStorage } from "react-native";
import createSagaMiddleware from 'redux-saga';
import authReducer from '../../src/modules/auth/reducer';
import watchInput from '../../src/modules/auth/sagas';

const reducers = combineReducers({
  auth: authReducer
});

const sagaMiddleware = createSagaMiddleware();

function* rootSaga() {
  yield all([
    fork(watchInput)
  ])
}

const persistConfig = {
  key: 'primary',
  storage: AsyncStorage
};

const persistedReducer = persistReducer(persistConfig, reducers);

export default () => {
  let store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));
  let persistor = persistStore(store);
  sagaMiddleware.run(rootSaga);
  return { store, persistor }
}