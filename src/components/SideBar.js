import React, { Component } from 'react';
import {View,StyleSheet, ScrollView, ImageBackground, Dimensions, Text, TouchableOpacity} from 'react-native'
import { NavigationActions} from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Typography } from '../styles';
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
                      <TouchableOpacity style={styles.menuItem}  onPress={this.navigateToScreen('Principal')}>
                          <Icon name="home" size={20} color="#fff" />
                          <Text style={styles.titulo}>Inicio</Text>
                      </TouchableOpacity> 
                      <TouchableOpacity style={styles.menuItem}  onPress={this.navigateToScreen('Search')}>
                          <Icon name="search" size={20} color="#fff" />
                          <Text style={styles.titulo}>Buscar</Text>
                      </TouchableOpacity> 
                     
                      <Text style={[styles.titulo, styles.textIntereses]}>Tus Intereses</Text>
                      {categorias.map(x => (
                          <TouchableOpacity key={x.id} style={styles.menuItem} onPress={this.navigateToScreen('Categoria', { idCategoria: x.id })}>
                              <Icon name="panorama-fish-eye" size={20} color="#fff" />
                              <Text style={styles.titulo}> {x.nombre_categoria}</Text>
                          </TouchableOpacity> 
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
        display:"flex",
        flexDirection:"row",
        justifyContent:"flex-start",
        alignItems:"center",
        marginLeft: 20, 
        marginBottom:10
    },
    titulo:{
        color:"#fff",
        fontWeight: "bold",
        letterSpacing:1,
        marginLeft:5,
        ...Typography.bodyText
  
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




