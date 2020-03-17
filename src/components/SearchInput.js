import React, {Component} from 'react';
import {StyleSheet, Platform} from 'react-native';
import {Searchbar} from 'react-native-paper';
//import {obscuro, violeta1, blanco} from '../assets/colors';

export default class SearchInput extends Component {
  state = {
    firstQuery: '',
  };

  render = () => {
    const {firstQuery} = this.state;
    const {onChange} = this.props;
    console.log(firstQuery);
    return (
      <Searchbar
        style={styles.border}
        placeholder="Búsqueda"
        iconColor={'#fff'}
        inputStyle={styles.input}
        onChangeText={query => {
          this.setState({firstQuery: query});
          onChange(firstQuery);
        }}
        value={firstQuery}
        placeholderTextColor={'#fff'}
        theme={{colors: {text: '#fff'}}}
      />
    );
  };
}

const styles = StyleSheet.create({
  border: {
    width: '90%',
    // ...Platform.select({
    //   ios: {
    //     height: hp('5%'),
    //   },
    //   android: {
    //     height: hp('7%'),
    //   },
    // }),
    backgroundColor: '#000',
    borderWidth: 3,
    borderColor: '#fff',
    borderRadius: 10,
    marginHorizontal: '5%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    color: '#fff',
  },
});
