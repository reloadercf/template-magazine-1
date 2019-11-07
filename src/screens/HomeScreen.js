import React from 'react';
import { StyleSheet, View, Text, ImageBackground, Picker,AsyncStorage } from 'react-native';
import fondoZona from '../assets/fondoZona.png'
import { Button, Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Colors,Typography, Spacing, Buttons} from '../styles/index'
import PickerBox from 'react-native-picker-box';


class HomeScreen extends React.Component {
  constructor(props){
    super(props)
    this.state={
      data: [
        {label: 'MEXICO', value: 'mexico'},
        {label: 'ESPAÑA', value: 'españa'},
      ],
      selectedValue: null
    }
  }

  _signInAsync = async (itemValue) => {
    await AsyncStorage.setItem('zona', itemValue);
    this.props.navigation.navigate('Revista');
  };



  render() {
    console.log(this.props)
    return (
      <ImageBackground source={fondoZona} style={styles.imageBackground}>
        <View style={styles.container}>
          <View >
            <Text style={Typography.bodyText}>Selecciona la zona donde quieres encontrar las oportunidades</Text>
          </View>
          <View style={styles.section}>
            <View style={Typography.contentRowCenter}>
              <Icon
                name='globe'
                size={Typography.iconsize}
                color='white'
              />
             <Text style={Typography.bodyText} onPress={() => this.myref.openPicker()}>{this.state.selectedValue==null? "Zona": this.state.selectedValue}</Text>

            </View>
            <PickerBox
              ref={ref => this.myref = ref}
              data={this.state.data}
              itemTextColor={"#000"}
              separatorColor={"#000"}
              onValueChange={value => this.setState({ selectedValue: value })}
              selectedValue={this.state.selectedValue}
            />
            
            <Button
              buttonStyle={Buttons.base}
              onPress={() => {
                this._signInAsync(this.state.selectedValue)
              }}
              //type="outline"
              icon={
                <Icon
                  name="arrow-right"
                  size={Typography.iconsize}
                  color="white"
                  style={{marginRight:Spacing.small}}
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

