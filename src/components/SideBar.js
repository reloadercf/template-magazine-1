import React, { Component } from 'react';
import {View,StyleSheet, ScrollView, ImageBackground, Dimensions, Text} from 'react-native'
import { NavigationActions} from 'react-navigation';
import {connect} from 'react-redux'
import mexico from '../assets/mexico.png'
import { actionGetConfig } from '../../store/actions/ConfigActions';



class SideBar extends Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.getConfigInicial(1)
    }

    navigateToScreen(routeName, params) {
        return () => { this.props.navigation.dispatch(NavigationActions.navigate({ routeName, params })) };
    }

  render() {
      let {categorias}=this.props
        console.log(categorias)
       if(categorias==null){
            return (<Text>....</Text>)
       }

      return (
          <ScrollView style={styles.container}>
              <ImageBackground source={mexico} style={{ width: undefined, height: Dimensions.get("window").height, padding: 10, paddingTop: 48 }}>
                  <View style={styles.container}>
                      <Text
                          style={{ fontSize: 20, lineHeight: 20, textAlign: 'left', marginLeft: 20, marginBottom: 30, fontWeight: 'bold' }}
                          onPress={this.navigateToScreen('Principal')}>
                          Novedad
                      </Text>
                      {categorias.map(x => (
                          <Text
                              key={x.id}
                              style={{ fontSize: 20, lineHeight: 20, textAlign: 'left', marginLeft: 20, marginBottom: 30, fontWeight: 'bold' }}
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