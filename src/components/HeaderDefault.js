import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  AsyncStorage,
  ActivityIndicator,
  Dimensions,
  Image
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


import mxopportunity from '../assets/mxopportunity.png'


const DEVICE_WIDTH = Dimensions.get('window').width;

class HeaderDefault extends Component {


  constructor(props) {
    super(props);
    this.state = {isLoading: false};
  }
  render() {
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, padding: 40}}>
          <ActivityIndicator />
        </View>
      );
    }

    return (
      <SafeAreaView
        forceInset={{ top: 'always' }}
        style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}
      >
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

        <Image source={mxopportunity} style={{
          width: DEVICE_WIDTH / 2, height: "100%", resizeMode: 'contain', alignItems: "center"
        }} />

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
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 10,
  },
});
export default HeaderDefault;
