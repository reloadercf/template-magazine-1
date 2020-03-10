import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';


class ZonaLoading extends React.Component {

  componentDidMount() {
    this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    const zona = await AsyncStorage.getItem('zona');

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    this.props.navigation.navigate(zona ? 'Revista' : 'Home');
  };

  // Render any loading content that you like here
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#fff"  />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

const styles= StyleSheet.create({
  container:{
     flex:1,
     justifyContent:"center",
     alignItems:"center"
  }
})
export default ZonaLoading;
