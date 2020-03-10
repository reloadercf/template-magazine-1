import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Avatar } from 'react-native-paper';
import { Typography } from '../styles';

const ProfilePicture = ({image, Nombre}) => (
    <View style={styles.container}>
        <Avatar.Image size={100} source={require('../assets/120x120.png')} />
        <Text style={styles.textStyle}>Eduardo Benitez</Text>
    </View>
);

const styles=StyleSheet.create({
    container:{
        backgroundColor:"#1E2227",
        display:"flex",
        justifyContent:"center",
        flexDirection:"column",
        alignItems:"center",
        paddingVertical: 10,
    },
    textStyle:{
        marginVertical:"5%",
        ...Typography.headerText
    }
})

export default ProfilePicture;
