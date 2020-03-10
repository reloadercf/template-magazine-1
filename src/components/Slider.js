import React, { useEffect,useState } from 'react';
import {StyleSheet, View, Text, Image,Dimensions, ScrollView} from 'react-native';
import { Colors,Typography } from '../styles';
import CardArticulo from './CardArticulo';
import { background } from '../styles/colors';


const Slider = (props) => {
    return (
        <ScrollView horizontal={true}>
            {
                props.data && props.data.length > 0 ?
                    props.data.map(articulo => (
                        <View style={styles.containerCard}>
                            <CardArticulo articulo={articulo} onClick={() =>
                                props.navigation.navigate('Detail', { data: articulo })
                            } />
                        </View>
                    ))
                    :
                    <Text>No data</Text>
            }
        </ScrollView>

        
    );
};
const styles = StyleSheet.create({
    containerCard:{
        marginVertical:15,
        marginHorizontal:15,
        width:150,
       
    },
   
  });
export default  Slider