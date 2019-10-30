//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView,TouchableOpacity } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


// create a component
class HeaderDefault extends Component {
    render() {
        return (
            <View  style={styles.container}>
                <SafeAreaView forceInset={{ top: 'always' }} style={{flex:1}} >
                    <TouchableOpacity
                        style={{alignItems:"flex-end", margin:16}}
                        onPress={() => {
                            this.props.navigation.openDrawer();
                            setTimeout(() => {
                              this.props.navigation.closeDrawer();
                            }, 2000);
                          }}
                    >
                        <FontAwesome5 name="bars" size={24} color="#161924" />

                    </TouchableOpacity>
                    <View>
                        <Text>{this.props.name} Screen</Text>
                    </View>
                </SafeAreaView>
            </View>
        ); 
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
    },
});

//make this component available to the app
export default HeaderDefault;
