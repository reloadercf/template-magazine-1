import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  AsyncStorage,
  ActivityIndicator,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import styled from 'styled-components/native';
import {Colors} from '../styles/index';
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {connect} from 'react-redux';
import {actionGetArticulosPortadaFalse} from '../../store/actions/ArticuloActions';
import Carrousel from '../components/Carrousel';
import { ScrollView } from 'react-native-gesture-handler';



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
      console.log('ID has changed');
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

    return (
      <View style={{display:"flex", flex:1}}>
         <SafeAreaView
          forceInset={{ top: 'always' }}
          style={{ backgroundColor: Colors.black }}>
          <TouchableOpacity
            style={{ alignItems: 'flex-end', margin: 16 }}
            onPress={() => {
              this.props.navigation.openDrawer();
              setTimeout(() => {
                this.props.navigation.closeDrawer();
              }, 2000);
            }}>
            <FontAwesome5 name="bars" size={24} color="#fff" />
          </TouchableOpacity>
        </SafeAreaView>     
      
        <ScrollView style={styles.articulos}>
          <Carrousel articulos={this.props.articulosPortadaFalse} />
              <Text>ASDASD</Text>
              <Text>ASDASD</Text>
              <Text>ASDASD</Text>
              <Text>ASDASD</Text>
              <Text>ASDASD</Text>
              <Text>ASDASD</Text>
              <Text>ASDASD</Text>
              <Text>ASDASD</Text>
              <Text>ASDASD</Text>
              <Text>ASDASD</Text>
              <Text>ASDASD</Text>
              <Text>ASDASD</Text>
              <Text>ASDASD</Text>
              <Text>ASDASD</Text>
              <Text>ASDASD</Text>
              <Text>ASDASD</Text>
              <Text>ASDASD</Text>
              <Text>ASDASD</Text>
              <Text>ASDASD</Text>
              <Text>ASDASD</Text>
              <Text>ASDASD</Text>
              <Text>ASDASD</Text>
              <Text>ASDASD</Text>
              <Text>ASDASD</Text>
              <Text>ASDASD</Text>
              <Text>ASDASD</Text>
              <Text>ASDASD</Text>
              <Text>ASDASD</Text>
              <Text>ASDASD</Text>
              <Text>ASDASD</Text>
              <Text>ASDASD</Text>
              <Text>ASDASD</Text>
              <Text>ASDASD</Text>
              <Text>ASDASD</Text>
              <Text>ASDASD</Text>
              <Text>ASDASD</Text>
              <Text>ASDASD</Text>
              <Text>ASDASD</Text>
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
  articulos:{
    flex:1
  }
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