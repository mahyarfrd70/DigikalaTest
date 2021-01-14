/**
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';
import {AppRegistry} from 'react-native';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import configureStore from './src/redux/store';
import Routes from './src/Routes';
import rootReducer from './src/redux/rootReducers';
import {name as appName} from './app.json';

const store = createStore(rootReducer);

const ReduxWrapperComponent = () => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => ReduxWrapperComponent);
