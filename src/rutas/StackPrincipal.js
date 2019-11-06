import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer,createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../screens/HomeScreen';
import DrawerRevista from './DrawerRevista';
import ZonaLoading from '../screens/ZonaLoading';



const StackPrincipal = createSwitchNavigator({
    ZonaLoading:ZonaLoading,
    Home: {
        screen: HomeScreen,
    },
    Revista: {
        screen: DrawerRevista
    }
    },
    {
        headerMode:'none',
        mode:'modal',
        initialRouteName: 'ZonaLoading',
    });

export default createAppContainer(StackPrincipal);