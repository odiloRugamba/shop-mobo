import React from 'react';
import { View, Text,Image, Button, ScrollView, Alert, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import Colors from '../../constants/Colors';

const AccountScreen = props => {
 
  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={require('../../assets/blue.jpg')}></Image>
        </View>
        <View style={styles.userData}>
          <Text style={styles.name}>Odilo Rugamba</Text>
          <View style={{marginTop: 50}}><Text style={styles.email}>odilorugamba@gmail.com</Text></View>
        </View>        
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 20,
    paddingTop: 100
  },
  header: {
    flexDirection: 'column',
    alignItems: 'center'
  },
  imageContainer: {
    overflow: "hidden"
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 100
  },
  userData: {
    width: "60%",
    paddingTop: 100,
    flexDirection: "column",
    alignItems: 'center'
  },
  name: {
    fontSize: 25,
    fontFamily: 'open-sans-bold'
  },
  email: {
    fontSize: 14,
    fontFamily: 'open-sans'
  }
})
export default AccountScreen;
