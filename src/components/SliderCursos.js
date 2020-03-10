import React from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import CardCurso from './CardCurso';

const SliderCursos = (props) => {
    return (
        <ScrollView horizontal={true}>
            {
                props.data && props.data.length > 0 ?
                    props.data.map(articulo => (
                        <View style={styles.containerCard}>
                            <CardCurso articulo={articulo} onClick={() =>
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
        width:250,
       
    },
   
  });
export default  SliderCursos