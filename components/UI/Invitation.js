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
        <TouchableCmp onPress={props.onInvitationSelect} useForeground>
          <View style={styles.content}>
            <View style={styles.imageContainer}>
              <Image style={styles.image} source={require('../../assets/splash-2.png')} />
            </View>
            <View style={styles.details}>
              <Text style={styles.title} numberOfLines={1}>You were invited as {props.invitation.title}</Text>
              <Text style={styles.branch} numberOfLines={2}>In {props.invitation.branch.name} / {props.invitation.organisation} </Text>
              <Text style={styles.inviter} numberOfLines={1}>By {props.invitation.invitedBy.title} {props.invitation.invitedBy.firstName}</Text>
            </View>
          </View>
        </TouchableCmp>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  product: {
    height: 100,
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
    width: '30%',
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
    alignContent: 'space-around',
    height: '96%',
    width: "60%",
    flexDirection: 'column',
    padding: 5,
  },
  title: {
    fontFamily: 'open-sans',
    fontSize: 16,
  },
  branch: {
    fontFamily: 'open-sans',
    fontSize: 14,
  },
  inviter: {
    fontFamily: 'open-sans',
    fontSize: 12,
  },
 
});

export default Organisation;
