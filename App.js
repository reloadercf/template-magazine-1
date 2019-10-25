import React,  { Component } from 'react';
import store from './store/store'
import {Provider} from 'react-redux'
import Rutas from './components/Rutas'



export default class App extends Component {
  render() {
    return (
    <Provider store={store}>
      <Rutas />
    </Provider>
  );
}
}

