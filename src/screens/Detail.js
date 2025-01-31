//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions,Image } from 'react-native';
import HeaderDetail from '../containers/HeaderDetail'
// create a component

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

class Detail extends Component {
    render() {
        const articulo=this.props.navigation.getParam('data');
        console.log(articulo.id)
        if(!articulo){
            return null
        }
        return (
            <View style={styles.container}>
                <ScrollView >
                    <HeaderDetail
                        image={articulo.imagen}
                        navigation={this.props.navigation}
                        title={articulo.titulo}
                        categoria={articulo.categoria}
                        />
                    
                    <View style={{}}>
                        <Text style={styles.text}>{articulo.titulo}</Text>
                    </View>

                </ScrollView>
            </View>
           
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:"#000"
    },
    text:{
        color:"#fff"
    }
});

//make this component available to the app
export default Detail;
