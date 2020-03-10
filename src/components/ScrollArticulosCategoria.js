import React, { useEffect,useState } from 'react';
import {StyleSheet, View, Text, Image,Dimensions, ScrollView} from 'react-native';
//import ViewPager from '@react-native-community/viewpager';
import { Colors,Typography } from '../styles';
import CONSTANTES from '../../store/constantes';
import CardArticulo from './CardArticulo';
import {useDispatch,useSelector} from 'react-redux';

const DEVICE_WIDTH = Dimensions.get('window').width;

const ScrollArticulosCategoria = (props) => {
  
    const categorias = useSelector(state => state.ReducerConfig.categoriasRevista);
    const articulosPortadaFalse = useSelector(state => state.articulos.articulosPortadaFalse);
    const dispatch = useDispatch();


     useEffect(() => {
        fetchData()
      },[]);

    
    return (
        <View style={{flex:1, flexDirection:"row", justifyContent:"center"}}>
            <ScrollView  horizontal={true}>
            {
                    articulos && articulos.length > 0 ?
                      articulos.map(articulo => (
                            <CardArticulo articulo={articulo}/>
                        ))
                        :
                        null
                }
            </ScrollView>
        </View>
        
    );
};
const styles = StyleSheet.create({
    viewPager: {
      width:"100%",
      marginBottom:50
    },
    pager:{
        flex:1,
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems: 'center',
    },
    pagerItem:{
        position:"relative",
        justifyContent:"center",
        alignItems:"center",
    },
    text:{
        backgroundColor:Colors.black,
        ...Typography.headerText,
    }
  });
export default  ScrollArticulosCategoria