//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions,Image } from 'react-native';

// create a component

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

class Detail extends Component {
     
    render() {

        const{articulo}=this.props.navigation.state.params
        console.log(articulo)
        if(!articulo){
            return null
        }
        return (
            <ScrollView contentContainerStyle={styles.container}>
                <View  style={{ width: DEVICE_WIDTH, height: DEVICE_HEIGHT/2, marginBottom: 5 }} >
                                <Image source={{ uri: articulo.imagen }} style={{
                                    width:DEVICE_WIDTH, height: "100%", resizeMode: 'contain'
                                }} />
                                
                </View>
                <View style={{}}>
                    <Text style={styles.text}>{articulo.titulo}</Text>
                </View>
                   
            </ScrollView>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        //flex:1,
        display:"flex",
        flexDirection:"column",
        flexWrap:"wrap",
        justifyContent:"center",
        backgroundColor: '#000',
    },
    text:{
        color:"#fff"
    }
});

//make this component available to the app
export default Detail;
