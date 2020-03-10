import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  AsyncStorage,
  ActivityIndicator,
  ScrollView,
  Dimensions,
  Image
} from 'react-native';
import {connect} from 'react-redux'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Colors, Typography} from '../styles/index';
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { getArticulosCategoria } from '../../store/actions/ArticuloActions';
import mxopportunity from '../assets/mxopportunity.png'
import HeaderDefault from '../components/HeaderDefault';

const articles=[
  {
      id:1,
      imagen:"https://images.pexels.com/photos/1565982/pexels-photo-1565982.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      titulo:"Articulo 1"
  },
  {
    id:2,
    imagen:"https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    titulo:"Articulo 2"
  },
  {
    id:3,
    imagen:"https://images.pexels.com/photos/675951/pexels-photo-675951.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    titulo:"Articulo 3"  
  },
  {
    id:4,
    imagen:"https://images.pexels.com/photos/675951/pexels-photo-675951.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    titulo:"Articulo 3"  
  },
  {
    id:5,
    imagen:"https://images.pexels.com/photos/675951/pexels-photo-675951.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    titulo:"Articulo 3"  
  },
  {
    id:6,
    imagen:"https://images.pexels.com/photos/675951/pexels-photo-675951.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    titulo:"Articulo 3"  
  },
  {
    id:7,
    imagen:"https://images.pexels.com/photos/675951/pexels-photo-675951.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    titulo:"Articulo 3"  
  },
  {
    id:8,
    imagen:"https://images.pexels.com/photos/675951/pexels-photo-675951.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    titulo:"Articulo 3"  
  },
  
 
]

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

class Categoria extends Component {

  constructor(props) {
    super(props);
    this.state = {isLoading: false};
  }

    componentDidMount(){
      this.props.getArtiCategoria(this.props.navigation.getParam('idCategoria', 1))
    }

  componentDidUpdate(prevProps) {
    const newID = this.props.navigation.getParam('idCategoria', 1);
    console.log("new" + newID)
    const prevID = prevProps.navigation.getParam('idCategoria', 1);
    console.log("prev"+prevID)
    if (newID !== prevID) {
         console.log(this.props.navigation.getParam('idCategoria', 1));
        this.props.getArtiCategoria(this.props.navigation.getParam('idCategoria', 1))
        this.props.navigation.closeDrawer();
    }
  }

  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Home');
  };


  render() {
    const {articulosCategoria}=this.props
    //console.log(this.props.navigation.getParam('idCategoria', 0));
    console.log(articulosCategoria)

    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, padding: 40}}>
          <ActivityIndicator />
        </View>
      );
    }

    return (
        <View style={{backgroundColor:"#0E0E0E"}}>
         
        {/* <SafeAreaView
          forceInset={{ top: 'always' }}
          style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}
        >
          <TouchableOpacity
            style={{ alignItems: 'flex-start', margin: 16 }}
            onPress={() => {
              this.props.navigation.openDrawer();
              setTimeout(() => {
                this.props.navigation.closeDrawer();
              }, 2000)
            }}>
            <FontAwesome5 name="bars" size={24} color="#fff" />
          </TouchableOpacity>
          <Image source={mxopportunity} style={{
            width: DEVICE_WIDTH / 2, height: "100%", resizeMode: 'contain', alignItems: "center"
          }} />

          <TouchableOpacity
            style={{ alignItems: 'flex-end', margin: 16 }}
            onPress={() => {
              this.props.navigation.openDrawer();
              setTimeout(() => {
                this.props.navigation.closeDrawer();
              }, 2000)
            }}>
            <FontAwesome5 name="bars" size={24} color="#fff" />
          </TouchableOpacity>
        </SafeAreaView>  */}
        <HeaderDefault navigation={this.props.navigation}/>

        <ScrollView  contentContainerStyle={styles.scrollview} >
           <View style={{width:DEVICE_WIDTH}}>
               <Text>sasdad</Text>
           </View>
                {
                    articulosCategoria && articulosCategoria.length > 0 ?
                    articulosCategoria.map(articulo => (
                        <TouchableOpacity key={articulo.id} 
                            onPress={()=>{this.props.navigation.navigate('Detail',{
                                articulo:articulo
                            })}} 
                            >
                            <View  style={{ width: DEVICE_WIDTH / 2, height: DEVICE_HEIGHT / 4, marginBottom: 5 }} >
                                <Image source={{ uri: articulo.imagen }} style={{
                                    width: "95%", height: "100%", resizeMode: 'contain'
                                }} />
                                <View style={{ position: "absolute", width: "90%", top: "70%" }}>
                                    <Text style={styles.text}>{articulo.titulo}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                            
                        ))
                        :
                        null
                }
                
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 10,
  },
  scrollview:{
    display:"flex",
    flexDirection:"row",
    flexWrap:"wrap",
    justifyContent:"center",
   },
   text:{
    backgroundColor:Colors.black,
    color:'#fff',
    fontSize:12
    //...Typography.headerText,
}
   
});

const mapStateToProps = (state) => {
    return {
        articulosCategoria: state.articulos.articulosCategoria
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getArtiCategoria: (idCategoria) => {
            dispatch(getArticulosCategoria(idCategoria))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Categoria)