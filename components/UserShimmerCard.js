import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
// import Shimmer from 'react-native-shimmer';
// import Shimmer from 'react-shimmer-effect';
// import ContentLoader from 'react-content-loader/native'


const UserShimmerCard = (props) => {
    return (
        <View style = {styles.container}>
            <View style = {styles.circle}>
            </View>
            <View style = {styles.UserData}>
                <Text style = {styles.line}></Text>
                <Text style = {styles.line1}></Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F5F5F5',
        marginTop: 2,
        flex: 1,
        flexDirection: 'row',
        paddingBottom: 10,
        paddingTop: 10,
        height: 70
    },
    circle: {
        marginLeft: 15,
        width: 50,
        height: 50,
        borderRadius: 50,
        borderWidth: 0.2 ,
        borderColor: '#606060',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 5,
        paddingBottom: 5,
        backgroundColor: '#edeef1'
    },
    UserData: {
        paddingLeft: 15,
        paddingRight: 20
    },
    line: {
        borderRadius: 10,
        borderWidth: 0.2,
        borderColor: '#606060',
        width: 100,
        height: 15,
        backgroundColor: '#edeef1'
    },
    line1: {
        marginTop: 15,
        borderRadius: 10,
        borderWidth: 0.2,
        borderColor: '#606060',
        width: 230,
        height: 15,
        color: '#000',
        backgroundColor: '#edeef1'
    },
    shimmer: {
        // backgroundColor: '#f6f7f8'
    }
});

export default UserShimmerCard ;
