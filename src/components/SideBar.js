import React from 'react'
import {View,StyleSheet, ScrollView, ImageBackground, Image, Dimensions} from 'react-native'
import {DrawerNavigatorItems} from 'react-navigation-drawer'
import mexico from '../assets/mexico.png'

export default SideBar= props =>(
    <ScrollView style={styles.container}>
        <ImageBackground source={mexico} style={{width:undefined, height:Dimensions.get("window").height, padding:10, paddingTop:48}}>
            <View style={styles.container}>
                <DrawerNavigatorItems {...props}/>
            </View>
        </ImageBackground>
    </ScrollView>
)

const styles=StyleSheet.create({
   container:{
       flex:1
   }
})