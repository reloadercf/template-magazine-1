import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Avatar } from 'react-native-paper';
const AvatarCategoria = (props) => (
    <View style={styles.container}>
          <Avatar.Icon size={40} icon="folder" />
          <Text style={styles.textCategoria}>#categoria</Text>
    </View>
);


const styles= StyleSheet.create({
    container:{
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center"
    },
    textCategoria:{
        color:'#fff',
        fontSize:12
        
    }
})

export default AvatarCategoria;
