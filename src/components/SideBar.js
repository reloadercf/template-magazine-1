import React, { Component } from 'react';
import {View,StyleSheet, ScrollView, ImageBackground, Image, Dimensions,FlatList, Text,TouchableWithoutFeedback} from 'react-native'
import { NavigationActions, DrawerItems} from 'react-navigation';
import mexico from '../assets/mexico.png'


const categorias=[ {id:"1", nombre:'futbol'} ,{id:"2", nombre:'Musica'},{id:"3", nombre:'Medicina'}]
export default class SideBar extends Component {
    constructor(props){
        super(props)
    }

    navigateToScreen(routeName, params) {
        return () => { this.props.navigation.dispatch(NavigationActions.navigate({ routeName, params })) };
    }

  render() {
  
       if(categorias==null){
            return (<Text>....</Text>)
       }

      return (
          <ScrollView style={styles.container}>
              <ImageBackground source={mexico} style={{ width: undefined, height: Dimensions.get("window").height, padding: 10, paddingTop: 48 }}>
                  <View style={styles.container}>
                      {categorias.map(x => (
                          <Text
                              key={x.id}
                              style={{ fontSize: 20, lineHeight: 20, textAlign: 'left', marginLeft: 20, marginBottom: 30, fontWeight: 'bold' }}
                              onPress={this.navigateToScreen('Categoria', { idCategoria: x.id })}
                          >
                              {x.nombre}
                          </Text>
                      ))}
                  </View>
              </ImageBackground>
          </ScrollView>
      )
 
  }
}

const styles=StyleSheet.create({
    container:{
        flex:1
    }
 })
