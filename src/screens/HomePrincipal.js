import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  AsyncStorage,
  ScrollView,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {useDispatch,useSelector} from 'react-redux';
import {actionGetArticulosPortadaFalse} from '../../store/actions/ArticuloActions';
import CardArticulo from '../components/CardArticulo';
import Carrousel from '../components/Carrousel';
import ScrollArticulosCategoria from '../components/ScrollArticulosCategoria';
import { Colors,Typography } from '../styles';
import { actionGetConfig } from '../../store/actions/ConfigActions';
import HeaderDefault from '../components/HeaderDefault';
import Slider from '../components/Slider';
import SliderCursos from '../components/SliderCursos';
import TitulosSection from '../components/TitulosSection';
import SubtituloSection from '../components/SubtituloSection';

const HomePrincipal = (props) => {
  const categorias = useSelector(state => state.ReducerConfig.categoriasRevista);
  const articulosPortadaFalse = useSelector(state => state.articulos.articulosPortadaFalse);
  const dispatch = useDispatch();
  
  useEffect(() => {
      dispatch(actionGetArticulosPortadaFalse());
      dispatch(actionGetConfig(1))
    }, []);
  
  _signOutAsync = async () => {
    await AsyncStorage.clear();
    props.navigation.navigate('Home');
  };


  return (
    <View style={{ backgroundColor: "#0E0E0E", flex: 1 }}>

      <ScrollView style={styles.scrollview}>
        <HeaderDefault navigation={props.navigation} />
        <TitulosSection texto="Bienvenido"/> 
        <SubtituloSection texto="Qué quieres aprender hoy?"/>
        <View style={{ height: 250 }}>
          <Carrousel articulos={articulosPortadaFalse} navigation={props.navigation} />
        </View>
        <View>
          <SubtituloSection texto="Los mas visitados"/>
          <Slider data={articulosPortadaFalse} navigation={props.navigation} />
        </View>
        <View>
          <SubtituloSection texto="Cursos Nuevos"/>
          <SliderCursos data={articulosPortadaFalse} navigation={props.navigation} />
        </View>
        <View>
          <SubtituloSection texto="Recomedados para ti"/>
          <Slider data={articulosPortadaFalse} navigation={props.navigation} />
        </View>
        
    

      </ScrollView>


    </View>
  );
      };

const styles = StyleSheet.create({
  text:{
    ...Typography.headerText,
    marginBottom:10,
    marginLeft:20,
    textTransform:"uppercase",
    
  },
  scrollview:{
   marginBottom:"10%"
  }
});


export default HomePrincipal;
