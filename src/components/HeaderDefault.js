import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView,TouchableOpacity,AsyncStorage, ActivityIndicator } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import styled from 'styled-components/native'
import {Colors} from '../styles/index'
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const StyledView = styled.View`
    flex:1;
`
class HeaderDefault extends Component {

     constructor(props) {
        super(props);  
        this.state = { isLoading: false };
      }  


      componentDidMount() {
        //this.fetchAll(this.props.navigation.getParam('id', 0));
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
        console.log(this.props.navigation.getParam('idCategoria',0))
    
       if (this.state.isLoading) {
        return (
          <View style={{ flex: 1, padding: 40 }}>
            <ActivityIndicator />
          </View>
        );
      }

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
