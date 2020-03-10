import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Typography } from '../styles';

const TitulosSection = (props) => (
        <Text style={styles.titulo}>{props.texto}</Text>
);

const styles=StyleSheet.create({
  titulo:{
      color:"#fff",
      marginLeft:20,
      letterSpacing:2,
      ...Typography.screenHeader

  }
})

export default TitulosSection;
