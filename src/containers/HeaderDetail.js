import React from 'react';
import {View, StyleSheet, Image, Platform,Text} from 'react-native';
// import {
//   widthPercentageToDP as wp,
//   heightPercentageToDP as hp,
// } from 'react-native-responsive-screen';
import {Appbar} from 'react-native-paper';
import SubtituloSection from '../components/SubtituloSection';
import TituloArticulo from '../components/TituloArticulo';
//import TextSection from '../components/titleSection';

const HeaderDetail = props => {
  const _goBack = () => props.navigation.goBack();
  const _handleSearch = () => console.log('Searching');

  return (
    <Appbar.Header dark={true} style={styles.HeaderStyle}>
      <View style={styles.ViewActions}>
        <Appbar.BackAction onPress={_goBack} color="#fff" size={25} />
        <Appbar.Action
          icon="send"
          color="#fff"
          onPress={_handleSearch}
          size={25}
        />
      </View>
      <Image style={styles.ImageHeader} source={{ uri: props.image }} />
      <View style={styles.StyleButtonTitle}>
        <TituloArticulo texto={props.title}/>
      </View>
      {/* <View style={styles.StyleButtonTitle}>
        <SubtituloSection texto={props.categoria.nombre_categoria}/>
      </View> */}
    </Appbar.Header>
  );
};

export const styles = StyleSheet.create({
  HeaderStyle: {
    width: '100%',
    height: 300,
    backgroundColor: 'transparent',
  },
  ImageHeader: {
    width: '100%',
    height: 300,
    position: 'absolute',
  },
  ViewActions: {
    width: '100%',
    paddingVertical: '3%',
    position: 'absolute',
    top: 0,
    zIndex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ViewCombo: {
    position: 'absolute',
    //top: hp('36%'),
    width: '100%',
    //backgroundColor: '#000',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  StyleButtonTitle: {
    width:"90%",
    backgroundColor:"#000",
    ...Platform.select({
      ios: {
        marginTop: '40%',
      },
      android: {
        marginTop: '40%',
      },
     
    }),
   
  },
});

export default HeaderDetail;
