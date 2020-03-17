import React from 'react';
import { Text, View, ScrollView,StyleSheet } from 'react-native';
import AvatarCategoria from '../components/AvatarCategoria';
const SliderCategorias = (props) => {
    return (
        <ScrollView horizontal={true}>
            <View style={styles.containerCard}>
                <AvatarCategoria />
            </View>
            <View style={styles.containerCard}>
                <AvatarCategoria />
          
            </View>
            <View style={styles.containerCard}>
                <AvatarCategoria />
          
            </View>
            <View style={styles.containerCard}>
                <AvatarCategoria />
          
            </View>
            <View style={styles.containerCard}>
                <AvatarCategoria />
          
            </View>
            <View style={styles.containerCard}>
                <AvatarCategoria />
          
            </View>
            <View style={styles.containerCard}>
                <AvatarCategoria />
            </View>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    containerCard: {
        //marginVertical: 3,
        marginHorizontal: 3,
        width: 70,
    },

});
export default SliderCategorias;
