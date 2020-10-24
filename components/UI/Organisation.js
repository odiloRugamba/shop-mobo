import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform
} from 'react-native';

import Card from '../UI/Card';

const Organisation = props => {
  let TouchableCmp = TouchableOpacity;

  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }
console.log(props);
  return (
    <Card style={styles.product}>
      <View style={styles.touchable}>
        <TouchableCmp onPress={props.onOrganisationSelect} useForeground>
          <View style={styles.content}>
            <View style={styles.imageContainer}>
              <Image style={styles.image} source={require('../../assets/logo.png')} />
            </View>
            <View style={styles.details}>
              <Text style={styles.title} numberOfLines={1}>{props.name}</Text>
            </View>
          </View>
        </TouchableCmp>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  product: {
    height: 120,
    marginTop: 5,
    marginLeft: 0,
    marginRight: 0,
    elevation: 0,
    borderRadius: 1,
  },
  touchable: {
    borderRadius: 3,
    overflow: 'hidden'
  },
  content: {
    flexDirection: 'row'
  },
  imageContainer: {
    width: '40%',
    height: '100%',
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  details: {
    alignItems: 'center',
    height: '96%',
    width: "60%",
    flexDirection: 'row',
    padding: 5,
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 18,
  },
 
});

export default Organisation;
