import React from 'react';
import {AppRegistry} from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App';
import {name as appName} from './app.json';
import configureStore  from './src/store';

const {store, persistor} = configureStore();

const Start = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App/>
    </PersistGate>
  </Provider>
);

AppRegistry.registerComponent(appName, () => Start);
