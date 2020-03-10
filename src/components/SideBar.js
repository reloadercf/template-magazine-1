import React, { Component } from 'react';
import {View,StyleSheet, ScrollView, ImageBackground, Dimensions, Text} from 'react-native'
import { NavigationActions} from 'react-navigation';
import {connect} from 'react-redux'
import mexico from '../assets/mexico.png'
import { actionGetConfig } from '../../store/actions/ConfigActions';
import ProfilePicture from './ProfilePicture';


class SideBar extends Component {
    navigateToScreen(routeName, params) {
        return () => { this.props.navigation.dispatch(NavigationActions.navigate({ routeName, params })) };
    }
  render() {
      let {categorias}=this.props
       if(categorias==null){
            return (<Text>....</Text>)
       }
      return (
          <ScrollView style={styles.container}>
              <ImageBackground source={mexico} style={{ width: undefined, height: Dimensions.get("window").height}}>
                  <View style={styles.container}>
                      <View style={{marginBottom:20}}>
                        <ProfilePicture/>
                      </View>   
                      <Text
                          style={styles.menuItem}
                          onPress={this.navigateToScreen('Principal')}>
                          Inicio
                      </Text>
                      <Text
                          style={styles.menuItem}
                          onPress={this.navigateToScreen('Principal')}>
                          Buscar
                      </Text>
                      <Text style={[styles.menuItem, styles.textIntereses]}>Tus Intereses</Text>
                      {categorias.map(x => (
                          <Text
                              key={x.id}
                              style={styles.menuItem}
                              onPress={this.navigateToScreen('Categoria', { idCategoria: x.id })}
                          >
                              {x.nombre_categoria}
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
    },
    menuItem:{
        fontSize: 18, 
        lineHeight: 20, 
        textAlign: 'left', 
        marginLeft: 20, 
        marginBottom: 30, 
        fontWeight: '400',
        letterSpacing:2,
        color:"#fff",
    },
    textIntereses:{
        marginLeft: 0, 
        paddingVertical:5,
        backgroundColor:"#1E2227",
        textAlign:"center",
        
        
    }
 })

 const mapStateToProps = (state) => {
     return {
        categorias: state.ReducerConfig.categoriasRevista
     }
 }

 const mapDispatchToProps = (dispatch) => {
     return {
        getConfigInicial: (idRevista) => {
            dispatch(actionGetConfig(idRevista))
        }
     }
 }

 export default connect(mapStateToProps, mapDispatchToProps)(SideBar)




