import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity, Button } from 'react-native';

const LanguageBar = (props) => {
    return(
        <View key={props.key} style={styles(props).LanguageContainer}>
            <Text style = {styles(props).textDetail}>{props.language}</Text>
        </View>
    );
}

const styles = (props) => StyleSheet.create({
    LanguageContainer: {
        width: Dimensions.get('window').width,
        height: 25,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: props.color,
        opacity: 1
    },
    textDetail: {
        fontSize: 12,
        color: '#fff',
        fontWeight: '500'
    }
})

export default LanguageBar;