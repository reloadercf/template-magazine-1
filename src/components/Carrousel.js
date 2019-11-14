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


const articles=[
    {
      id:1,
      titulo:"Descubre como la indecision destruye el logro de los deseos de hombre",
      imagen:"https://images.pexels.com/photos/373912/pexels-photo-373912.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
    },
    {
      id:2,
      titulo:"hola munod",
      imagen:"https://images.pexels.com/photos/374870/pexels-photo-374870.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
    },
    {
      id:3,
      titulo:"hola munod",
      imagen:"https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    }
  ]
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
                    prev.selectedIndex===articles.length-1
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
      }, 3000);
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

    return (
        <View style={styles.container}>
            <ScrollView
                horizontal
                pagingEnabled
                onMomentumScrollEnd={this.setSelectedIndex}
                ref={this.scrollRef}
            >
                {articles.map((articulo, key) => (
                    <View key={key} style={styles.carrousel}>
                        <Image source={{ uri: articulo.imagen }} style={{
                            width: DEVICE_WIDTH, height: "100%", resizeMode: 'contain'
                        }} />

                        <Text style={styles.titulo}>{articulo.titulo}</Text>
                    </View>
                ))}
            </ScrollView>
            <View style={styles.circleDiv}>
                {
                    articles.map((article, i) => <View key={article.id} style={[styles.whiteCircle, { opacity: i === selectedIndex ? 0.5 : 1 }]} />)
                }
            </View>
        </View>
    );
  }
}



const styles = StyleSheet.create({
  
    carrousel:{
      width:DEVICE_WIDTH,
      position:"relative", 
 
    },
    titulo:{
      position:"absolute",
      top:"65%",
      backgroundColor:"#000",
      padding:5,
      ...Typography.headerText
 
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