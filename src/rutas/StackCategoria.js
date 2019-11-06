import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import HeaderDefault from '../components/HeaderDefault'
import Detail from '../screens/Detail';


const Screen1 =({navigation})=> <HeaderDefault navigation={navigation} name="hola"  />
const DetailArticulo =({navigation})=> <HeaderDefault navigation={navigation} name="detaoial" />

const StackCategoria = createStackNavigator({
    Categoria: {
        screen: Screen1,
    },
    Detail: {
        screen: DetailArticulo
    }
    },
    {
        headerMode:'none',
        mode:'modal',
        initialRouteName: 'Categoria',
    });

export default StackCategoria;