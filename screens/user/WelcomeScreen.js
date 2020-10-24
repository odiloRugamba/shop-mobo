import React, { useState, useEffect, useReducer, useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  ScrollView
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Colors from '../../constants/Colors';


const WelcomeScreen = props => {

  return (
    
    <View
      style={styles.screen}
    >
      <LinearGradient colors={['#ffedff', '#ffe3ff']} style={styles.gradient}>
        <View style={{flex: 1, alignItems: 'center'}}>
          <View style={styles.welcomeMessage}>
            <Text style={styles.welcomeText}>Welcome crazy</Text>
          </View> 
          <View style={styles.action}>
            <View>
              <Button 
                onPress={() => {
                  props.navigation.navigate("Signup")
                }}
                title="Create account" />
              <Button 
                onPress={() => {
                  props.navigation.navigate("Signin");
                  console.log("Clicked")
                }}
                title="Sign in" />
            </View> 
          </View>
        </View>  
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  welcomeMessage: {
    height: '60%',
    padding: 100,
  },
  welcomeText: {    
    fontFamily: 'open-sans-bold',
    fontSize: 18,
  },
  action: {
    height: '40%',
    padding: 20,
    flexDirection: 'row',
    justifyContent: "space-between"
  }
});

export default WelcomeScreen;
