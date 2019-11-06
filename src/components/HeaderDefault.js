import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView,TouchableOpacity,AsyncStorage } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import styled from 'styled-components/native'
import {Colors} from '../styles/index'
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const StyledView = styled.View`
    flex:1;
`
class HeaderDefault extends Component {

    _signOutAsync = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('Home');
      };


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
                        <FontAwesome5 name="bars" size={24} color="#fff" />
                    </TouchableOpacity>
                </SafeAreaView>
                <View style={styles.container}>
                    <Text>CATEGORIA </Text>
                    <Button
                        icon={
                            <Icon
                                name="arrow-right"
                                size={15}
                                color="white"
                            />
                        }
                        onPress={() => this.props.navigation.navigate('Detail',{
                            itemId: 86,
                            otherParam: 'anything you want here',
                          })}
                        title="navigate"
                    />
                    <Button
                        icon={
                            <Icon
                                name="arrow-right"
                                size={15}
                                color="white"
                            />
                        }
                        onPress={() => this._signOutAsync()}
                        title="clear zona"
                    />

                </View>
            </StyledView>
        ); 
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 10,
    },
});
export default HeaderDefault;
