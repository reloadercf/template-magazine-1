import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../screens/HomeScreen';
import DrawerRevista from './DrawerRevista';



const StackPrincipal = createStackNavigator({
    Home: {
        screen: HomeScreen,
    },
    Revista: {
        screen: DrawerRevista
    }
    },
    {
        headerMode:'none',
        mode:'card',
        initialRouteName: 'Home',
    });

export default createAppContainer(StackPrincipal);