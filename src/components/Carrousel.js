import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Dimensions,
  Image,
  Text,
} from 'react-native';
import { Colors,Typography } from '../styles';
import CardCarrousel from './CardCarrousel';

  const DEVICE_WIDTH = Dimensions.get('window').width;
  

export default class Carrousel extends Component {
  scrollRef=React.createRef();
  constructor(props) {
    super(props);
    this.state = {
        selectedIndex:0
    };
  }
  componentDidMount=()=>{
      setInterval(() => {
          this.setState(
            prev=>({
                selectedIndex:
                    prev.selectedIndex===this.props.articulos.length-1
                    ?0
                    :prev.selectedIndex+1
            }),
            ()=>{  
                this.scrollRef.current.scrollTo({
                    animated:true,
                    y:0,
                    x:DEVICE_WIDTH*this.state.selectedIndex
                }) 
            })
      }, 2500);
  }


  setSelectedIndex=event=>{
    //width ofthe viewSize
    const viewSize=event.nativeEvent.layoutMeasurement.width
    //get current position of the ScrollView
    const contentOffset=event.nativeEvent.contentOffset.x;
    const selectedIndex=Math.floor(contentOffset/viewSize)
    this.setState({selectedIndex})
}

  render() {
      const{selectedIndex}=this.state
      const{articulos, navigation}=this.props
    return (
        <View style={styles.container}>
            <ScrollView
                horizontal
                pagingEnabled
                onMomentumScrollEnd={this.setSelectedIndex}
                ref={this.scrollRef}
            >
                {articulos.map((articulo, key) => (
                  <View key={key} style={styles.carrousel}>
                    <CardCarrousel articulo={articulo} onClick={() =>
                      navigation.navigate('Detail', {data: articulo})
                  } />
                  </View>
 
                ))}
            </ScrollView>
            {/* <View style={styles.circleDiv}>
                {
                    articulos.map((article, i) => <View key={i} style={[styles.whiteCircle, { opacity: i === selectedIndex ? 0.5 : 1 }]} />)
                }
            </View> */}
        </View>
    );
  }
}



const styles = StyleSheet.create({
  
    carrousel:{
      width:DEVICE_WIDTH,
      position:"relative",
      display:"flex",
      flexDirection:"row",
      justifyContent:"center",
      alignItems:"center", 
    },
   
   container: {
     height: "100%",
     width: "100%",
   },
    
    circleDiv:{
      width:"100%",
      position:"absolute",
      bottom:15,
      height:10,
      display:"flex",
      flexDirection:"row",
      justifyContent:"center",
      alignItems: 'center',
    },
    
    whiteCircle:{
      width:6,
      height:6,
      borderRadius:3,
      margin:5,
      backgroundColor:"#fff"
    }
   
 });