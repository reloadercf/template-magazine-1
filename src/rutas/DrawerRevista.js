import React from 'react'
import {createDrawerNavigator} from 'react-navigation-drawer'
import { createStackNavigator } from 'react-navigation-stack';
import HeaderDefault from '../components/HeaderDefault'
import SideBar from '../components/SideBar';
import Detail from '../screens/Detail'

const categorias=[ {key:"1", nombre:'FUTBOL'} ]
const Categoria =({navigation})=> <HeaderDefault navigation={navigation} />

const StackCategoria = createStackNavigator({
    Categoria: {
        screen: Categoria,
    },
    Detail: {
        screen: Detail
    }
    },
    {
        headerMode:'none',
        mode:'modal',
        initialRouteName: 'Categoria',
    });


const DrawerRevista = createDrawerNavigator(
{
  StackCategoria
},
{
  contentComponent:props => <SideBar {...props}/>
}
);

export default DrawerRevista;