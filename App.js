import React,  { Component, useEffect } from 'react';
import {Platform} from 'react-native'
import store from './store/store'
import {Provider} from 'react-redux'
import RutasAutenticadas from './src/screens/RutasAutenticadas';
import SplashScreen from 'react-native-splash-screen'



const App=()=>{
  
  useEffect(()=>{
    SplashScreen.hide()
  },[])

  return (
    <Provider store={store}>
      <RutasAutenticadas />
    </Provider>
  );
}

export default App
