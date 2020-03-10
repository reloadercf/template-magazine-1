import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  AsyncStorage,
  ActivityIndicator,
  ScrollView,
  FlatList,
  Image
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {useDispatch,useSelector} from 'react-redux';
import {actionGetArticulosPortadaFalse} from '../../store/actions/ArticuloActions';
import CardArticulo from '../components/CardArticulo';
import Carrousel from '../components/Carrousel';
import ScrollArticulosCateria from '../components/ScrollArticulosCategoria';
import { Colors,Typography } from '../styles';
import { actionGetConfig } from '../../store/actions/ConfigActions';
import HeaderDefault from '../components/HeaderDefault';

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
    <View style={{backgroundColor:"#0E0E0E", flex:1}}>
   
      <ScrollView  style={styles.scrollview}>
      <HeaderDefault navigation={props.navigation}/>
        <View style={{ height: 300 }}>
          <Carrousel articulos={articulosPortadaFalse}  navigation={props.navigation}/>
          <ScrollView  horizontal={true}>
            {
                    articulosPortadaFalse && articulosPortadaFalse.length > 0 ?
                    articulosPortadaFalse.map(articulo => (
                            <CardArticulo articulo={articulo}/>
                        ))
                        :
                        null
                }
            </ScrollView>
        </View>
        {categorias && categorias.length > 0 ?
          categorias.map((categoria) => (
            <View key={categoria.id} style={{ height: 300 }}>
              <Text style={styles.text}>{categoria.nombre_categoria}</Text>
              <ScrollArticulosCateria categoria={categoria} />
            </View>
          ))
          : null
        }
    
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
