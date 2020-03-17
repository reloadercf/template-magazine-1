import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
//import Icon from 'react-native-vector-icons/MaterialIcons';
import { Typography } from '../styles';

const TituloArticulo = (props) => (
  <Text style={styles.titulo}>{props.texto}</Text>
);

const styles=StyleSheet.create({
  titulo:{
      color:"#fff",
      //marginLeft:5,
      letterSpacing:1,
      ...Typography.SubtitleHeader

  }
})

export default TituloArticulo;
