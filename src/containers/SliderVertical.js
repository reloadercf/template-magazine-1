import React, { useEffect,useState } from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import { Colors,Typography } from '../styles';
import CardArticulo from '../components/CardArticulo';

const SliderVertical = (props) => {
    return (
        <ScrollView  style={styles.containerScrooll} >
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
    containerScrooll:{
        display:"flex",
        flexDirection:"row",
        flexWrap:"wrap",
       backgroundColor:"#fff",
       width:"100%"
    },
    containerCard:{
        marginVertical:15,
        marginHorizontal:15,
        width:150,
       
    },
   
  });
export default  SliderVertical