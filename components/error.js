import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity, Button } from 'react-native';
import errorImage from '../assets/images/error.jpg';
import navDots from '../assets/images/navDots.png';

const navDotsImageUri = Image.resolveAssetSource(navDots).uri
const errorImageUri = Image.resolveAssetSource(errorImage).uri

const CustomNavBarList = (props) => {
    return(
        <View style = {styles.redirectButton}>
            <TouchableOpacity onPress={() => props.disableError()}>
                <Text style = {styles.redirectText}>Rediect to Saved Data</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => props.setText(false)}>
                <Text style = {styles.redirectText}>Back</Text>
            </TouchableOpacity>
        </View>
    );
}

const CustomNavBar = (props) => {
    return(
        <TouchableOpacity style = {styles.redirectButton} onPress={() => props.setText(true)}>
            <Image source = {{uri: navDotsImageUri}} style = {styles.redirectImage}></Image>
        </TouchableOpacity>
    );
}

const ErrorCard = (props) => {
    const [textVisible, setTextVisible] = useState(false)
    return(
        <View style={styles.Container}>
            {
                textVisible == true ?
                <CustomNavBarList disableError = {props.disableError} setText = {setTextVisible}/>:
                <CustomNavBar setText = {setTextVisible}/>
            }
            <View style={styles.ImageContainer}>
                <Image source = {{uri: errorImageUri}} style = {styles.styledImage}></Image>
                <Text style = {styles.textHeading}>Something Went Wrong</Text>
                <Text style = {styles.textDetail}>Sorry, Something went wrong there. Try again</Text>
                <TouchableOpacity onPress={() => {props.api(); props.shimmerset();}} style = {styles.retryButton}><Text style = {styles.buttonText}>RETRY</Text></TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    Container: {
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        backgroundColor: '#fff'
    },
    redirectButton: {
        margin: 15,
        marginBottom: 45,
        alignItems: 'flex-end'
    },
    redirectImage: {
        height: 20,
        width: 20,
        opacity: 0.7
    },
    redirectText: {
        fontSize: 12,
        color: '#606060',
        fontWeight: '700',
        textAlign: 'right',
        height: 20
    },
    ImageContainer: {
        justifyContent: "center",
        alignItems: "center"
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