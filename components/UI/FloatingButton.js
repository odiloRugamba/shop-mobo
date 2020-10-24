import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import Colors from '../../constants/Colors';


const NewTweetButton = (props) => {

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.button}
      onPress={props.showModel}
    ><Entypo name="new-message" size={24} color="white" />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    button: {
      backgroundColor: Colors.primary,
      position: 'absolute',
      bottom: 40,
      right: 20,
      width: 60,
      height: 60,
      borderRadius: 50,
      alignItems: 'center',
      justifyContent: 'center',
    }
  });
export default NewTweetButton;
