import React from 'react';
import { StyleSheet, View, Text, ImageBackground, Picker } from 'react-native';
import fondoZona from '../assets/fondoZona.png'
import { Button, Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Colors,Typography, Spacing, Buttons} from '../styles/index'

class HomeScreen extends React.Component {
  constructor(props){
    super(props)
    this.state={
      language:null
    }
  }
  render() {
    console.log(this.props)
    return (
      <ImageBackground source={fondoZona} style={styles.imageBackground}>
        <View style={styles.container}>
          <View >
            <Text style={Typography.bodyText}>Selecciona la zona donde quieres encontrar las oportunidades</Text>
          </View>
          <View style={styles.section}>
            {/* <Input
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
            /> */}
            <View style={Typography.contentRowCenter}>
               <Icon
                  name='globe'
                  size={24}
                  color='white'
                />
                  <Picker
                selectedValue={this.state.language}
                style={{ width: "50%", backgroundColor: "transparent", color: Colors.white, }}
                itemStyle={{ borderBottomColor: Colors.white, backgroundColor: "transparent", borderBottomWidth: 10 }}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({ language: itemValue })
                }
                mode={"dropdown"}>
                <Picker.Item label="Mexico" value="Mexico" />
                <Picker.Item label="España" value="España" />
              </Picker>
              
            </View>
          
          
            <Button
              buttonStyle={Buttons.base}
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
  section:{
     ...Typography.section
  }

  
})


export default HomeScreen  

