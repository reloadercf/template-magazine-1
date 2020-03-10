import React, {useEffect,useState} from 'react';
import {
    StyleSheet,
    View,
    Text,
    ImageBackground,
    Picker,
    AsyncStorage,
  } from 'react-native';
  import {useDispatch,useSelector} from 'react-redux'
  import fondoZona from '../assets/fondoZona.png';
  import {Button, Input} from 'react-native-elements';
  import Icon from 'react-native-vector-icons/FontAwesome';
  import {Colors, Typography, Spacing, Buttons} from '../styles/index';
  import PickerBox from 'react-native-picker-box';
  import { actionGetConfig } from '../../store/actions/ConfigActions';

const HomeScreem = (props) => {

const [value, changeValue] =useState()

const regiones = useSelector(state => state.ReducerConfig.regiones);
const dispatch = useDispatch();

useEffect(() => {
    dispatch(actionGetConfig(1));
  }, []);

  signInAsync = async itemValue => {
    //await AsyncStorage.setItem('zona', itemValue);
    props.navigation.navigate('Revista');
  };

  console.log(regiones)
  console.log(props)
return(
   <ImageBackground source={fondoZona} style={styles.imageBackground}>
        <View style={styles.container}>
          <View>
            <Text style={Typography.bodyText}>
              Selecciona la zona donde quieres encontrar las oportunidades
            </Text>
          </View>
          <View style={styles.section}>
          
                <Picker
                    itemStyle={{color:"#fff", backgroundColor:"#000"}}
                    selectedValue={value}
                    style={{width: 200, backgroundColor:"#00", color:"#fff",borderBottomWidth:2, borderBottomColor:"#fff" }}
                    onValueChange={(itemValue, itemIndex) =>{  console.log(itemValue)
                        changeValue(itemValue)}
                      
                    }>
                    {regiones?
                      regiones.map((item,key)=>(
                        <Picker.Item key={key} label={item.label} value={item.value} />
                      ))
                    :null}
                    
                </Picker>
            <Button
              buttonStyle={Buttons.base}
              onPress={() => {
                signInAsync(value);
              }}
              //type="outline"
              icon={
                <Icon
                  name="arrow-right"
                  size={Typography.iconsize}
                  color="white"
                  style={{marginRight: Spacing.small}}
                />
              }
              title="Continuar"
            />
          </View>
        </View>
      </ImageBackground>
);
}


const styles = StyleSheet.create({
    imageBackground: {
      width: '100%',
      height: '100%',
    },
    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'space-around',
      alignItems: 'stretch',
    },
    section: {
      ...Typography.section,
    },
  });
  
export default HomeScreem;
