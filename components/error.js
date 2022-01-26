import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity, Button } from 'react-native';
import errorImage from '../assets/images/error.jpg';

const errorImageUri = Image.resolveAssetSource(errorImage).uri

const ErrorCard = (props) => {
    return(
        <View style={styles.ImageContainer}>
            <Image source = {{uri: errorImageUri}} style = {styles.styledImage}></Image>
            <Text style = {styles.textHeading}>Something Went Wrong</Text>
            <Text style = {styles.textDetail}>Sorry, Something went wrong there. Try again</Text>
            <TouchableOpacity onPress={() => {props.api(); props.shimmerset();}} style = {styles.retryButton}><Text style = {styles.buttonText}>RETRY</Text></TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    ImageContainer: {
        justifyContent: "center",
        alignItems: "center",
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        backgroundColor: '#fff'
    },
    styledImage: {
        height: Dimensions.get('window').width - 20,
        width: Dimensions.get('window').width - 20,
    },
    textHeading : {
        paddingTop: 10,
        fontSize: 25,
        color: '#606060',
        fontWeight: '500'
    },
    textDetail: {
        paddingTop: 20,
        fontSize: 15,
        color: '#606060'
    },
    retryButton: {
        width: Dimensions.get('window').width - 20,
        marginTop: 50,
        padding: 10,
        borderWidth: 2,
        borderColor: '#ff4f5a',
        alignItems: 'center'
    },
    buttonText: {
        fontSize: 20,
        color: '#ff4f5a',
        fontWeight: '500'
    }
});

export default ErrorCard ;