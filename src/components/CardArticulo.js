import React from 'react';
import { Text, View, StyleSheet, Image,Dimensions, TouchableOpacity } from 'react-native';
import { Colors,Typography } from '../styles';

const CardArticulo = ({articulo, onClick}) => (
    <TouchableOpacity onPress={onClick}>
        <View style={styles.articulo}>
            <Image source={{ uri: articulo.imagen }} style={styles.image} />
            <Text style={styles.titulo}>{articulo.titulo}
            </Text>
        </View>
    </TouchableOpacity>
);

const styles=StyleSheet.create({
    articulo:{
        borderRadius:10,
    },
    image:{
        width: "100%",
        height:150,
        borderTopRightRadius:10,
        borderTopLeftRadius:10,
        resizeMode:"cover"
    },
    titulo:{
        backgroundColor:"#1E2227",
        borderBottomRightRadius:10,
        borderBottomLeftRadius:10,
        color:'#000',
        padding:5,
        height:50,
        overflow:"hidden",
        ...Typography.tituloArticulo
    }
    
})

export default CardArticulo;
