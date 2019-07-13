import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import {AsyncStorage} from "react-native";

const initialState = {
  name: ''
};

const CHANGE_NAME = 'CHANGE_NAME';

export const changeName = name => ({
  type: "CHANGE_NAME",
  name
});

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_NAME:
      return Object.assign({}, state, {
        user_name: action.name
      });
    default:
      return state;
  }
};

const persistConfig = {
  key: 'primary',
  storage: AsyncStorage
};

const persistedReducer = persistReducer(persistConfig, authReducer);

export default () => {
  let store = createStore(persistedReducer);
  let persistor = persistStore(store);
  return { store, persistor }
}