import React from 'react';
import {StyleSheet, View, Text, Image,Dimensions} from 'react-native';
import ViewPager from '@react-native-community/viewpager';
import { Colors,Typography } from '../styles';


const articles=[
    {
      id:1,
      titulo:"Descubre como la indecision destruye el logro de los deseos de hombre",
      imagen:"https://images.pexels.com/photos/373912/pexels-photo-373912.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
    },
    {
      id:2,
      titulo:"Descubre como la indecision destruye el logro de los deseos de hombre",
      imagen:"https://images.pexels.com/photos/373912/pexels-photo-373912.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
    },
    {
      id:3,
      titulo:"Descubre como la indecision destruye el logro de los deseos de hombre",
      imagen:"https://images.pexels.com/photos/373912/pexels-photo-373912.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
    },
    {
      id:4,
      titulo:"Descubre como la indecision destruye el logro de los deseos de hombre",
      imagen:"https://images.pexels.com/photos/373912/pexels-photo-373912.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
    },
    {
      id:2,
      titulo:"Descubre como la indecision destruye el logro de los deseos de hombre",
      imagen:"https://images.pexels.com/photos/373912/pexels-photo-373912.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
    },
    {
      id:1,
      titulo:"Descubre como la indecision destruye el logro de los deseos de hombre",
      imagen:"https://images.pexels.com/photos/373912/pexels-photo-373912.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
    },
    {
      id:2,
      titulo:"Descubre como la indecision destruye el logro de los deseos de hombre",
      imagen:"https://images.pexels.com/photos/373912/pexels-photo-373912.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
    },
    {
      id:3,
      titulo:"Descubre como la indecision destruye el logro de los deseos de hombre",
      imagen:"https://images.pexels.com/photos/373912/pexels-photo-373912.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
    },
    {
      id:4,
      titulo:"Descubre como la indecision destruye el logro de los deseos de hombre",
      imagen:"https://images.pexels.com/photos/373912/pexels-photo-373912.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
    },
    {
      id:2,
      titulo:"Descubre como la indecision destruye el logro de los deseos de hombre",
      imagen:"https://images.pexels.com/photos/373912/pexels-photo-373912.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
    },
    {
      id:4,
      titulo:"Descubre como la indecision destruye el logro de los deseos de hombre",
      imagen:"https://images.pexels.com/photos/373912/pexels-photo-373912.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
    },
    {
      id:2,
      titulo:"Descubre como la indecision destruye el logro de los deseos de hombre",
      imagen:"https://images.pexels.com/photos/373912/pexels-photo-373912.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
    }
  ]

  const DEVICE_WIDTH = Dimensions.get('window').width;

const ScrollArticulosCateria = (props) => {
    return (
        <View style={{flex:1, flexDirection:"row", justifyContent:"center"}}>
            <ViewPager style={styles.viewPager} initialPage={0}>
                {
                    articles && articles.length > 0 ?
                        articles.map(articulo => (
                            <View style={styles.pagerItem}>
                                <Image source={{ uri: articulo.imagen }} style={{
                                    width: DEVICE_WIDTH, height: "100%", resizeMode: 'contain'
                                }} />
                                <View style={{position:"absolute", width:"80%", top:"70%"}}>
                                    <Text style={styles.text}>{articulo.titulo}</Text>
                                </View>
                               
                            </View>

                        ))
                        :
                        null
                }

            </ViewPager>
     
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

export default ScrollArticulosCateria;