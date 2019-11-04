import React from 'react';
import { StyleSheet, View, Text, ImageBackground } from 'react-native';
import fondoZona from '../assets/fondoZona.png'
import { Button, Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

class HomeScreen extends React.Component {
  render() {
    console.log(this.props)
    return (
      <ImageBackground source={fondoZona} style={styles.imageBackground}>
        <View style={styles.container}>
          <View >
            <Text style={{ color: 'white' }}>Selecciona la zona donde quieres encontrar las oportunidades</Text>
          </View>
          <View>
            <Input
              containerStyle={{width:'70%', marginVertical:10}}
              inputContainerStyle={{borderBottomWidth:3, borderBottomColor:'white'}}
              inputStyle={{color:"white"}}
              labelStyle={{color:"white"}}
              placeholder="Zona"
              placeholderTextColor={'white'}
              leftIcon={
                <Icon
                  name='globe'
                  size={24}
                  color='white'
                />
              }
            />
            <Button
              buttonStyle={{backgroundColor:"transparent", borderColor:"white" }}
              onPress={() => this.props.navigation.navigate('Revista')}
              icon={
                <Icon
                  name="arrow-right"
                  size={15}
                  color="white"
                />
              }
              title="Continuar"
            />
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles=StyleSheet.create({
  imageBackground:{
    width: '100%', 
    height: '100%'
  },
  container:{
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'stretch',
  },
  
})


export default HomeScreen  

