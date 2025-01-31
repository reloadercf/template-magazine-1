import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';
import HeaderDefault from '../components/HeaderDefault';
import SideBar from '../components/SideBar';
import Detail from '../screens/Detail';
import HomePrincipal from '../screens/HomePrincipal';
import Categoria from '../screens/Categoria';
import Search from '../screens/Search';

const StackPrincipal = createStackNavigator(
  {
    Home: HomePrincipal,
    Detail: Detail,
    //Search:Search
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    },
  },
);


const StackCategoria = createStackNavigator(
  {
    Categoria: {
      screen: Categoria,
    },
    Principal: {
      screen: HomePrincipal,
    },
    Detail: {
      screen: Detail,
    },
    Search:{
      screen: Search,
    }
  },
  {
    headerMode: 'none',
    mode: 'modal',
    //initialRouteName: 'Categoria',
  },
);

const DrawerRevista = createDrawerNavigator(
  {
    Principal: {screen: StackPrincipal},
    Categoria: {screen: StackCategoria},
  },
  {
    contentComponent: props => <SideBar {...props} />,
  },
);

export default DrawerRevista;
