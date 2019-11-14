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
import {Colors} from '../styles/index';
import {connect} from 'react-redux';
import {actionGetArticulosPortadaFalse} from '../../store/actions/ArticuloActions';
import CardArticulo from '../components/CardArticulo';
import Carrousel from '../components/Carrousel';

const articles=[
  {
    id:1,
    titulo:"Descubre como la indecision destruye el logro de los deseos de hombre",
    imagen:"https://images.pexels.com/photos/373912/pexels-photo-373912.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
  },
  {
    id:2,
    titulo:"Descubre como la indecision destruye el logro de los deseos de hombre",
    imagen:"https://images.pexels.com/photos/373912/pexels-photo-373912.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
  },
  {
    id:3,
    titulo:"Descubre como la indecision destruye el logro de los deseos de hombre",
    imagen:"https://images.pexels.com/photos/373912/pexels-photo-373912.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
  },
  {
    id:4,
    titulo:"Descubre como la indecision destruye el logro de los deseos de hombre",
    imagen:"https://images.pexels.com/photos/373912/pexels-photo-373912.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
  },
  {
    id:2,
    titulo:"Descubre como la indecision destruye el logro de los deseos de hombre",
    imagen:"https://images.pexels.com/photos/373912/pexels-photo-373912.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
  },
  {
    id:1,
    titulo:"Descubre como la indecision destruye el logro de los deseos de hombre",
    imagen:"https://images.pexels.com/photos/373912/pexels-photo-373912.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
  },
  {
    id:2,
    titulo:"Descubre como la indecision destruye el logro de los deseos de hombre",
    imagen:"https://images.pexels.com/photos/373912/pexels-photo-373912.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
  },
  {
    id:3,
    titulo:"Descubre como la indecision destruye el logro de los deseos de hombre",
    imagen:"https://images.pexels.com/photos/373912/pexels-photo-373912.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
  },
  {
    id:4,
    titulo:"Descubre como la indecision destruye el logro de los deseos de hombre",
    imagen:"https://images.pexels.com/photos/373912/pexels-photo-373912.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
  },
  {
    id:2,
    titulo:"Descubre como la indecision destruye el logro de los deseos de hombre",
    imagen:"https://images.pexels.com/photos/373912/pexels-photo-373912.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
  },
  {
    id:4,
    titulo:"Descubre como la indecision destruye el logro de los deseos de hombre",
    imagen:"https://images.pexels.com/photos/373912/pexels-photo-373912.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
  },
  {
    id:2,
    titulo:"Descubre como la indecision destruye el logro de los deseos de hombre",
    imagen:"https://images.pexels.com/photos/373912/pexels-photo-373912.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
  }
]

class HomePrincipal extends Component {
  constructor(props) {
    super(props);
    this.state = {isLoading: false};
  }

  componentDidMount() {
    this.props.getArticulos();
    console.log('component did mount ejecutandose');
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
    console.log(this.props.navigation.getParam('idCategoria', 0));
    console.log(this.props.articulosPortadaFalse);
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
      <View style={{ flex:1}}>
         <SafeAreaView
          forceInset={{ top: 'always' }}
          style={{ backgroundColor: Colors.black }}>
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
        <ScrollView >
          <View style={{height:300}}>
             <Carrousel/>
          </View>
        
         <Text>asdasd</Text>
         <FlatList
          data={articles}
          renderItem={({ item }) => (
            <CardArticulo articulo={item}/>
          )}
          keyExtractor={item => item.id}
        />
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    articulosPortadaFalse: state.articulos.articulosPortadaFalse,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getArticulos: () => {
      dispatch(actionGetArticulosPortadaFalse());
    },
  };
};


const styles = StyleSheet.create({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomePrincipal);






   {/*
          <Button
            icon={<Icon name="arrow-right" size={15} color="white" />}
            onPress={() =>
              this.props.navigation.navigate('Detail', {
                itemId: 86,
                otherParam: 'anything you want here',
              })
            }
            title="navigate"
          />
          <Button
            icon={<Icon name="arrow-right" size={15} color="white" />}
            onPress={() => this._signOutAsync()}
            title="clear zona"
          /> */}