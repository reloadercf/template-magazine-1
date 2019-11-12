import React, {Component, useEffect} from 'react';
import {Platform} from 'react-native';
import store from './store/store';
import {Provider} from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
import StackPrincipal from './src/rutas/StackPrincipal';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <StackPrincipal />
    </Provider>
  );
};

export default App;
