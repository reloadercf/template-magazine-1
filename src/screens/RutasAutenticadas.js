import React from 'react'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer'
import HomeScreen from './Revista';
import Screen from './Screen';
import HeaderDefault from '../components/HeaderDefault'
import SideBar from '../components/SideBar';


const Screen1 =({navigation})=> <HeaderDefault navigation={navigation} name="Screen 1"/>

const Screen2 =({navigation})=> <HeaderDefault navigation={navigation} name="Screen 2"/>

const Screen3 =({navigation})=> <HeaderDefault navigation={navigation} name="Screen 3"/>

const Screen4 =({navigation})=> <HeaderDefault navigation={navigation} name="Screen 4"/>



const RutasNoAutenticadas = createDrawerNavigator({
  Screen1,
  Screen2,
  Screen3,
  Screen4
}, 
{
  contentComponent:props => <SideBar {...props}/>
}
);

export default createAppContainer(RutasNoAutenticadas);