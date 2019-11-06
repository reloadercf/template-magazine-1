import React from 'react'
import {View,StyleSheet, ScrollView, ImageBackground, Image, Dimensions,FlatList, Text,TouchableWithoutFeedback} from 'react-native'
import {DrawerNavigatorItems} from 'react-navigation-drawer'
import mexico from '../assets/mexico.png'


const categorias=[ {key:"1", nombre:'futbol'} ,{key:"2", nombre:'Musica'},{key:"3", nombre:'Medicina'}]

export default SideBar= props =>{
 

   function Item({ item}) {
    return (
        <TouchableWithoutFeedback  onPress={()=>{props.navigation.navigate('Detail', { id: id });}}>
            <View style={styles.item}>
                <Text style={styles.title}>{item.nombre}</Text>
             </View>
        </TouchableWithoutFeedback>
    
    );
  }
  
//   _onTextPress(id) {
//     this.props.navigation.navigate('Details', { id: id });
//   }
    return(
        <ScrollView style={styles.container}>
        <ImageBackground source={mexico} style={{width:undefined, height:Dimensions.get("window").height, padding:10, paddingTop:48}}>
            <View style={styles.container}>
                {/* <DrawerNavigatorItems {...props}/> */}
                    <FlatList
                        data={categorias}
                        renderItem={({ item }) => <Item item={item} />}
                        keyExtractor={item => item.id}
                    />
            </View>
        </ImageBackground>
    </ScrollView>
    )
    
    }

const styles=StyleSheet.create({
   container:{
       flex:1
   }
})