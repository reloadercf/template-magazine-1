import React from 'react';
import { Text, View, StyleSheet, Image,Dimensions, TouchableOpacity } from 'react-native';
import { Colors,Typography } from '../styles';

const DEVICE_WIDTH = Dimensions.get('window').width;

const CardCarrousel = ({articulo,onClick}) => (
    <TouchableOpacity style={styles.container}  onPress={onClick}>
        <View style={{ width:"100%"}}>
            <Image source={{ uri: articulo.imagen }} style={{
                width:"100%", height: "65%",  
                borderTopRightRadius: 10,
                borderTopLeftRadius:10,
            }} />
            <Text style={styles.titulo}>{articulo.titulo}</Text>
        </View>
    </TouchableOpacity>
);

const styles=StyleSheet.create({
    container:{
        borderTopLeftRadius:10,
        borderTopEndRadius:10,
        position:"relative",
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center", 
        width:"60%",
        height:"90%"
             
    },
    titulo:{
        backgroundColor:"#000",
        padding:5,
        ...Typography.headerText
    }
    
})

export default CardCarrousel;
