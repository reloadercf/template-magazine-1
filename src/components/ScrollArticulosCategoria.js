import React, { useEffect,useState } from 'react';
import {StyleSheet, View, Text, Image,Dimensions} from 'react-native';
import ViewPager from '@react-native-community/viewpager';
import { Colors,Typography } from '../styles';
import CONSTANTES from '../../store/constantes';


const DEVICE_WIDTH = Dimensions.get('window').width;

const ScrollArticulosCateria = (props) => {
    
    const [articulos, setArticulosCategoria] = useState([]);

    async function fetchData() {
        const res = await fetch(`${CONSTANTES.revista}/articulos/Lista-de-articulos/?idcategoria=${props.categoria.id}`);
        res
          .json()
          .then(res => setArticulosCategoria(res.results))
      }

     useEffect(() => {
        fetchData()
      },[]);

    return (
        <View style={{flex:1, flexDirection:"row", justifyContent:"center"}}>
            <ViewPager style={styles.viewPager} initialPage={0}>
                {
                    articulos && articulos.length > 0 ?
                      articulos.map(articulo => (
                            <View key={articulo.id} style={styles.pagerItem}>
                                <Image source={{ uri: articulo.imagen }} style={{
                                    width: DEVICE_WIDTH, height: "100%", resizeMode: 'contain'
                                }} />
                                <View style={{position:"absolute", width:"80%", top:"70%"}}>
                                    <Text style={styles.text}>{articulo.titulo}</Text>
                                </View>
                            </View>

                        ))
                        :
                        null
                }
            </ViewPager>
        </View>
        
    );
};
const styles = StyleSheet.create({
    viewPager: {
      width:"100%",
      marginBottom:50
    },
    pager:{
        flex:1,
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems: 'center',
    },
    pagerItem:{
        position:"relative",
        justifyContent:"center",
        alignItems:"center",
    },
    text:{
        backgroundColor:Colors.black,
        ...Typography.headerText,
    }
  });
export default  ScrollArticulosCateria