import React,  { Component } from 'react';
import store from './store/store'
import {Provider} from 'react-redux'
import RutasNoAutenticadas from './src/screens/noautenticados/RutasNoAutenticadas';



export default class App extends Component {
  render() {
    return (
    <Provider store={store}>
      <RutasNoAutenticadas />
    </Provider>
  );
}
}

