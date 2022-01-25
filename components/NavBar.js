import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const NavBar = () => {
    return (
        <View style = {styles.container}>
            <Text style = {styles.sectionTitle}>Trending</Text>
            <View></View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#F5F5F5'
    },
    sectionTitle:{
        textAlign: 'center',
        fontWeight: 'bold',
        padding: 20,
        fontSize: 20,
        color: '#000'
    }
});

export default NavBar ;
