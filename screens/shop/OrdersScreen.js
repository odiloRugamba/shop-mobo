import React from 'react';
import {
  View,
  Text,
  Platform,
  StyleSheet,
  FlatList
} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../../components/UI/HeaderButton';
import FloatingBtn from '../../components/UI/FloatingButton';
import { Colors } from 'react-native/Libraries/NewAppScreen';
const OrdersScreen = props => {
const anouncements = [
  {
    id: '1',
    title: 'CP odilo',
    announcement: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.',
    date: '2030/4/30 4h30'
  },
  {
    id: '2',
    title: 'CP odilo',
    announcement: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.',
    date: '2030/4/30 4h30'
  },
  {
    id: '3',
    title: 'CP odilo',
    announcement: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.',
    date: '2030/4/30 4h30'
  }
]
  return (
    <View style={{flex: 1}}>
      <FlatList
        data={anouncements}
        keyExtractor={item => item.id}
        renderItem={itemData => (
          <View style={styles.announcementContainer}>
           <View><Text style={styles.announcement}>{itemData.item.announcement}</Text></View>
            <View styles={styles.information}>
              <View><Text style={styles.title} numberOfLines={1}>{itemData.item.title}</Text></View>
              <View><Text style={styles.date} numberOfLines={1} Color={Colors.black}>{itemData.item.date}</Text></View>
            </View>
          </View>
        )}
      />
      <FloatingBtn></FloatingBtn>
    </View>
  );
};

OrdersScreen.navigationOptions = navData => {
  return {
    headerTitle: 'My announcements',
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName={Platform.OS === 'android' ? 'md-home' : 'ios-home'}
          onPress={() => {
            navData.navigation.navigate("Home")
          }}
        />
      </HeaderButtons>
    ),
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Cart"
          iconName={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'}
          onPress={() => {
            navData.navigation.navigate('Cart');
          }}
        />
      </HeaderButtons>
    )
  };
};

const styles = StyleSheet.create({
  announcementContainer: {
    backgroundColor: 'white',
    marginBottom: 1,
    padding: 20,
    flexDirection: 'column',
    flex: 1,
  },
  announcement: {
    fontFamily: 'open-sans-bold',
    fontSize: 15
  },
  information: {
    backgroundColor: 'red',
    flex: 1,
    flexDirection: 'row'
  },
  title: {
    width: "60%",
    color: Colors.black
  },
  date: {
    width: "30%",
    fontSize: 10,
    color: Colors.black
  }
});

export default OrdersScreen;
