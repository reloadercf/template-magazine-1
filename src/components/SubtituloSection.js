import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Typography } from '../styles';

const SubtituloSection = (props) => (
        <Text style={styles.titulo}>{props.texto}</Text>
);

const styles=StyleSheet.create({
  titulo:{
      color:"#fff",
      marginLeft:20,
      letterSpacing:1,
      ...Typography.SubtitleHeader

  }
})

export default SubtituloSection;
