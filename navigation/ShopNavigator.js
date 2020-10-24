import React from 'react';
import {
  createAppContainer,
  createSwitchNavigator,
} from 'react-navigation';
import {
  createDrawerNavigator,
  DrawerItems
} from 'react-navigation-drawer';
import {
  createStackNavigator,
} from 'react-navigation-stack';


import {
  createBottomTabNavigator
} from 'react-navigation-tabs';

import { Platform, SafeAreaView, Button, View } from 'react-native';
import { Ionicons, Feather, AntDesign } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';

import ProductsOverviewScreen from '../screens/shop/ProductsOverviewScreen';
import ProductDetailScreen from '../screens/shop/ProductDetailScreen';
import CartScreen from '../screens/shop/CartScreen';
import OrdersScreen from '../screens/shop/OrdersScreen';
import UserProductsScreen from '../screens/user/UserProductsScreen';
import EditProductScreen from '../screens/user/EditProductScreen';
import AuthScreen from '../screens/user/AuthScreen';
import StartupScreen from '../screens/StartupScreen';
import Colors from '../constants/Colors';
import * as authActions from '../store/actions/auth';

const defaultNavOptions = { 
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
  },
  headerTitleStyle: {
    fontFamily: 'open-sans-bold'
  },
  headerBackTitleStyle: {
    fontFamily: 'open-sans'
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
};

const ProductsNavigator = createStackNavigator(
  {
    ProductsOverview: ProductsOverviewScreen,
    ProductDetail: ProductDetailScreen,
    Cart: CartScreen
  },
  {
    navigationOptions: {
      drawerIcon: drawerConfig => (
        <Ionicons
          name={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'}
          size={23}
          color={drawerConfig.tintColor}
        />
      )
    },
    defaultNavigationOptions: defaultNavOptions
  }
);

const OrdersNavigator = createStackNavigator(
  {
    Orders: OrdersScreen
  },
  {
    navigationOptions: {
      drawerIcon: drawerConfig => (
        <Ionicons
          name={Platform.OS === 'android' ? 'md-list' : 'ios-list'}
          size={23}
          color={drawerConfig.tintColor}
        />
      )
    },
    defaultNavigationOptions: defaultNavOptions
  }
);

const AdminNavigator = createStackNavigator(
  {
    UserProducts: UserProductsScreen,
    EditProduct: EditProductScreen
  },
  {
    navigationOptions: {
      drawerIcon: drawerConfig => (
        <Ionicons
          name={Platform.OS === 'android' ? 'md-create' : 'ios-create'}
          size={23}
          color={drawerConfig.tintColor}
        />
      )
    },
    defaultNavigationOptions: defaultNavOptions
  }
);


const shopNav = createBottomTabNavigator({
  Products: {
    screen: ProductsNavigator,
    navigationOptions: {
      tabBarIcon: tabInfo => (
        <Ionicons
          name='ios-menu'
          size={25}
          color={tabInfo.tintColor}
        />
      )
    }
  },
  Search: {
    screen: OrdersNavigator,
    navigationOptions: {
      tabBarIcon: tabInfo => (
        <AntDesign
          name='search1'
          size={25}
          color={tabInfo.tintColor}
        />
      )
    }
  },
  Orders: {
    screen: OrdersNavigator,
    navigationOptions: {
      tabBarIcon: tabInfo => (
        <Ionicons
          name='ios-cart'
          size={25}
          color={tabInfo.tintColor}
        />
      )
    }
  },
  Account: {
    screen: AdminNavigator,
    navigationOptions: {
      tabBarIcon: tabInfo => (
        <Feather
          name='user'
          size={25}
          color={tabInfo.tintColor}
        />
      )
    }
  }
},{
  tabBarOptions: {
    activeTintColor: Colors.accent
  }
})
const ShopNavigator = createDrawerNavigator(
  {
    shopNav
  },
  {
    contentOptions: {
      activeTintColor: Colors.primary
    },
    contentComponent: props => {
      const dispatch = useDispatch();
      return (
        <View style={{ flex: 1, paddingTop: 20 }}>
          <SafeAreaView forceInset={{ top: 'always', horizontal: 'never' }}>
            <DrawerItems {...props} />
            <Button
              title="Logout"
              color={Colors.primary}
              onPress={() => {
                dispatch(authActions.logout());
                // props.navigation.navigate('Auth');
              }}
            />
          </SafeAreaView>
        </View>
      );
    }
  }
);

const AuthNavigator = createStackNavigator(
  {
    Auth: AuthScreen
  },
  {
    defaultNavigationOptions: defaultNavOptions,
    headerMode: 'none',
  }
);

const MainNavigator = createSwitchNavigator({
  Startup: StartupScreen,
  Auth: AuthNavigator,
  Shop: ShopNavigator
});

export default createAppContainer(MainNavigator);
