import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView,TouchableOpacity } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import styled from 'styled-components/native'
import {Colors} from '../styles/index'


const StyledView = styled.View`
    flex:1;
`

class HeaderDefault extends Component {
    render() {
        return (
            <StyledView >
                <SafeAreaView forceInset={{ top: 'always' }} style={{flex:1, backgroundColor:Colors.black}} >
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
                </SafeAreaView>
                <View style={styles.container}>
                    <Text>{this.props.name} Screen</Text>
                </View>

            </StyledView>
        ); 
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
export default HeaderDefault;
