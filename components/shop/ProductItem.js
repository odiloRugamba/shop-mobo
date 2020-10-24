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

const ProductItem = props => {
  let TouchableCmp = TouchableOpacity;

  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }

  return (
    <Card style={styles.product}>
      <View style={styles.touchable}>
        <TouchableCmp onPress={props.onSelect} useForeground>
          <View>
            <View style={styles.imageContainer}>
              <Image style={styles.image} source={{ uri: props.image }} />
            </View>
            <View style={styles.details}>
              <Text style={styles.title} numberOfLines={1}>{props.title}</Text>
              <Text style={styles.price} numberOfLines={1}>${props.price.toFixed(2)}</Text>
            </View>
            <View style={styles.actions}>
              {props.children}
            </View>
          </View>
        </TouchableCmp>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  product: {
    height: 240,
    marginTop: 10,
    marginLeft: "3%",
    width: "45%"
  },
  touchable: {
    borderRadius: 3,
    overflow: 'hidden'
  },
  imageContainer: {
    width: '100%',
    height: '60%',
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    overflow: 'hidden'
  },
  image: {
    width: '100%',
    height: '100%'
  },
  details: {
    alignItems: 'center',
    height: '17%',
    flexDirection: 'row',
    padding: 5
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 18,
    marginVertical: 2,
    width: "60%",
  },
  price: {
    fontFamily: 'open-sans',
    fontSize: 14,
    color: '#888',
    width: "40%",
    overflow: "hidden",
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '23%',
    paddingHorizontal: 20
  }
});

export default ProductItem;
