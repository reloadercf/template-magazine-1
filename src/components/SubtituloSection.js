import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Typography } from '../styles';

const SubtituloSection = (props) => (
<View style={styles.container}>
  <Icon name="panorama-fish-eye" size={30} color="#fff" />
  <Text style={styles.titulo}>{props.texto}</Text>
</View>
      
);

const styles=StyleSheet.create({

  container:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"flex-start",
    alignItems:"center",
    marginLeft:20,
  },
  titulo:{
      color:"#fff",
      marginLeft:5,
      letterSpacing:1,
      ...Typography.SubtitleHeader

  }
})

export default SubtituloSection;
