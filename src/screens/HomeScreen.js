import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import fondoZona from '../assets/fondoZona.png'
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

class HomeScreen extends React.Component {
  render() {
    console.log(this.props)
    return (
      <ImageBackground source={fondoZona} style={{ width: '100%', height: '100%' }}>

        <View style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'space-around',
          alignItems: 'stretch',
        }}>

          <View style={{ height: 100 }} >
            <Text style={{ color: 'white' }}>Selecciona la zona donde quieres encontrar las oportunidades</Text>
          </View>
          <View style={{ height: 100, backgroundColor: 'skyblue' }} >
            <Button
             onPress={() => this.props.navigation.navigate('Revista')}
              icon={
                <Icon
                  name="arrow-right"
                  size={15}
                  color="white"
                />
              }
              title="Button with icon component"
            />
          </View>
        </View>
      </ImageBackground>
    );
  }
}
export default HomeScreen  