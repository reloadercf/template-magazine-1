import React from 'react';
import { Text, View, StyleSheet, Image,Dimensions } from 'react-native';
import { Colors,Typography } from '../styles';

// const articulo={
//     id:1,
//     titulo:"Prueba articulo revista",
//     imagen:"https://images.pexels.com/photos/374870/pexels-photo-374870.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
// }
const DEVICE_WIDTH = Dimensions.get('window').width;

const CardArticulo = ({articulo}) => (
    <View style={styles.articulo}>
        <Image source={{ uri: articulo.imagen }} style={{
            width: DEVICE_WIDTH, height: "100%", resizeMode: 'contain'
        }} />
        <Text style={styles.titulo}>{articulo.titulo}</Text>
    </View>
);

const styles=StyleSheet.create({
    articulo:{
        position:"relative",
        width:"50%"
    },
    titulo:{
        position:"absolute",
        top:"65%",
        backgroundColor:"#000",
        padding:5,
        ...Typography.headerText
    }
    
})

export default CardArticulo;
