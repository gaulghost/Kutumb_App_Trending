import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import ContentLoader, { Facebook, Rect, Circle } from 'react-content-loader/native'

const MyLoader1 = () => (
    <ContentLoader viewBox="0 0 400 70" foregroundColor='#999999' backgroundColor='#e1e1e1'>
      <Circle cx="30" cy="30" r="30" />
      <Rect x="80" y="17" rx="4" ry="4" width="200" height="13" />
      <Rect x="80" y="40" rx="3" ry="3" width="300" height="10" />
    </ContentLoader>
  )

const UserShimmerCard = (props) => {
    return (
        <View style = {styles.container}>
            <MyLoader1/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f6f7f8',
        padding: 20,
        height: 110
    }
});

export default UserShimmerCard ;
