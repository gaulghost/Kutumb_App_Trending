import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import starredstarImage from '../assets/images/starredStar.png';
import forkImage from '../assets/images/fork1.png';

const starredstarImageUri = Image.resolveAssetSource(starredstarImage).uri
const forkImageUri = Image.resolveAssetSource(forkImage).uri

const UserCard = (props) => {
    const [isNotHidden, setIsNotHidden] = useState(false);

    return (
        <TouchableOpacity key={props.key} style = {styles.container} onPress={() => setIsNotHidden(!isNotHidden)}>
            <View style = {styles.ImageContainer}>
                <Image source={{uri: props.avatar}} style = {styles.UserImage}/>
            </View>
            <View style = {styles.UserData}>
                <Text style = {styles.RepoAuthor}>{props.author}</Text>
                <Text style = {styles.RepoName}>{props.reponame}</Text>
            {
                isNotHidden ? (
                    <View>
                        <Text style = {styles.RepoDesc}>{props.description}</Text>
                        <View style = {styles.RepoSubDetails}>
                            <View style = {circleStyles(props).icon}></View>
                            <Text style = {styles.GitText}>{props.language}</Text>
                            <Image source={{uri: starredstarImageUri}} style = {styles.GitImage}/>
                            <Text style = {styles.GitText}>{props.stars}</Text>
                            <Image source={{uri: forkImageUri}} style = {styles.GitImage}/>
                            <Text style = {styles.GitText}>{props.forks}</Text>
                        </View>
                    </View>
                ) : null
            }
            </View>
        </TouchableOpacity>
    );
}

const circleStyles = (props) => StyleSheet.create({
    icon : {
        height: 15,
        width: 15,
        borderRadius: 50,
        backgroundColor: props.iconColor
    }
});

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#F5F5F5',
        marginTop: 2,
        flex: 1,
        flexDirection: 'row',
        paddingBottom: 10,
        paddingTop: 10
    },
    // Image Container & Image Styling
    ImageContainer: {
        marginLeft: 15,
        width: 50,
        height: 50,
        borderRadius: 50,
        borderWidth: 0.2 ,
        borderColor: '#606060',
        overflow: 'hidden',
        alignItems: 'center'
    },
    UserImage: {
        height: 50,
        width: 50
    },
    // Basic User Data
    UserData: {
        paddingLeft: 15,
        paddingRight: 20
    },
    RepoAuthor: {
        padding: 5,
        fontSize: 10,
        color: '#000000'
    },
    RepoName:{
        padding: 5,
        fontSize: 15,
        color: '#606060',
        fontWeight: '500'
    },
    //  More Information
    RepoDesc: {
        padding: 5,
        fontSize: 15,
        color: '#606060',
        paddingBottom: 10,
        width: Dimensions.get('window').width - 100
    },
    RepoSubDetails: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 5,
        width: 240
    },
    GitImage : {
        height: 15,
        width: 15
    },
    GitText : {
        fontSize: 10,
        color: '#606060',
        fontWeight: '500'
    }
});

export default UserCard ;
