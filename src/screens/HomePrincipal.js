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
  FlatList,
  Image
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {connect} from 'react-redux';
import {actionGetArticulosPortadaFalse} from '../../store/actions/ArticuloActions';
import CardArticulo from '../components/CardArticulo';
import Carrousel from '../components/Carrousel';
import ScrollArticulosCateria from '../components/ScrollArticulosCategoria';
import { Colors,Typography } from '../styles';
import { actionGetConfig } from '../../store/actions/ConfigActions';



class HomePrincipal extends Component {
  constructor(props) {
    super(props);
    this.state = {isLoading: false};
  }

  componentDidMount() {
    this.props.getArticulos()
    this.props.getConfigInicial(1)
  }

  componentDidUpdate(prevProps) {
    const newID = this.props.navigation.getParam('idCategoria', 0);
    const prevID = prevProps.navigation.getParam('idCategoria', -1);
    if (newID !== prevID) {
      //this.fetchAll(newID);
    }
  }

  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Home');
  };

  render() {
    const{categorias, articulosPortadaFalse}=this.props
    console.log(articulosPortadaFalse)
    //console.log(this.props.navigation.getParam('idCategoria', 0));

    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, padding: 40}}>
          <ActivityIndicator />
        </View>
      );
    }

    function Item({ title,imagen }) {
      return (
        <View style={{flex:1}} >
          <Image source={{ uri: imagen }} style={{
              width:"100%", height: 400
            }} /> 
          <Text style={styles.title}>{title}</Text>
        </View>
      );
    }
    return (
      <View style={{backgroundColor:"#0E0E0E"}}>
         <SafeAreaView
          forceInset={{ top: 'always' }}
          >
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
        </SafeAreaView> 
        <ScrollView  style={styles.scrollview}>
          <View style={{ height: 300 }}>
            <Carrousel articulos={articulosPortadaFalse} />
          </View>
          {categorias && categorias.length > 0 ?
            categorias.map((categoria) => (
              <View key={categoria.id} style={{ height: 300 }}>
                <Text style={styles.text}>{categoria.nombre_categoria}</Text>
                <ScrollArticulosCateria categoria={categoria} />
              </View>
            ))
            : null
          }
      
        </ScrollView>
      
  
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    articulosPortadaFalse: state.articulos.articulosPortadaFalse,
    categorias: state.ReducerConfig.categoriasRevista
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getArticulos: () => {
      dispatch(actionGetArticulosPortadaFalse());
    },
    getConfigInicial: (idRevista) => {
      dispatch(actionGetConfig(idRevista))
    }
  };
};


const styles = StyleSheet.create({
  text:{
    ...Typography.headerText,
    marginBottom:10,
    marginLeft:20,
    textTransform:"uppercase",
    
  },
  scrollview:{
   marginBottom:"10%"
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomePrincipal);

