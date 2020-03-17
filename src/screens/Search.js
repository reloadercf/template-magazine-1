import React,{useState} from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import HeaderDefault from '../components/HeaderDefault';
import SliderCategorias from '../containers/SliderCategorias';
import SearchInput from '../components/SearchInput'
import TitulosSection from '../components/TitulosSection';
import SubtituloSection from '../components/SubtituloSection';
import Slider from '../components/Slider';
import SliderVertical from '../containers/SliderVertical';
import {useDispatch,useSelector} from 'react-redux';

const Search = (props) => {

        const articulosPortadaFalse = useSelector(state => state.articulos.articulosPortadaFalse);

        const [data, setData] = useState([]);
        const SearchFunction = value => {
          fetch('https://api.coinmarketcap.com/v1/ticker/?limit=10')
            .then(res => res.json())
            .then(res => setData(res))
            .catch(error => console.log(error));
        };
 
  
    return (
        <View style={styles.containerPrincipal}>
        <HeaderDefault navigation={props.navigation} />
        {/* <TitulosSection texto="El que busca encuentra"/>  */}
        <View style={styles.containerFilter}>   
            <View style={styles.containerFilterInput}>
            <SearchInput onChange={SearchFunction} /> 
            </View>
            <SliderCategorias/>
        </View>
        <ScrollView style={styles.scrollview}>
        <View>
          <SubtituloSection texto="Resultados"/>
          <SliderVertical data={articulosPortadaFalse} navigation={props.navigation}/>
        </View>
        </ScrollView>
      </View>
    )
}

const styles = StyleSheet.create({
    containerPrincipal:{
        backgroundColor: "#0E0E0E", 
        flex: 1 
    },
    containerFilter:{
        marginVertical:10,
        backgroundColor:"#393939", 
        paddingVertical:10
    },
    containerFilterInput:{
        marginVertical:10
    },
    scrollview:{
     marginBottom:"10%"
    }
  });


export default Search;
