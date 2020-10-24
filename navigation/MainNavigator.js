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
import { Ionicons, MaterialIcons, Feather, AntDesign } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';

import ProductsOverviewScreen from '../screens/shop/ProductsOverviewScreen';
import ProductDetailScreen from '../screens/shop/ProductDetailScreen';
import CartScreen from '../screens/shop/CartScreen';
import OrdersScreen from '../screens/shop/OrdersScreen';
import UserProductsScreen from '../screens/user/UserProductsScreen';
import EditProductScreen from '../screens/user/EditProductScreen';
import WelcomeScreen from '../screens/user/WelcomeScreen';
import SigninScreen from '../screens/user/SigninScreen';
import SignupScreen from '../screens/user/SignupScreen';
import AccountScreen from '../screens/user/AccountScreen'
import StartupScreen from '../screens/StartupScreen';

import JoinByInvitationScreen from '../screens/user/JoinByInvitationScreen'
import CreateAnnouncementScreen from '../screens/user/CreateAnnouncementScreen'
import OrganisationsScreen from '../screens/user/OrganisationsScreen'

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
    CreateAnnouncement: CreateAnnouncementScreen,
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



const SingleOrganisationNav = createBottomTabNavigator({
  Anouncements: {
    screen: ProductsNavigator,
    navigationOptions: {
      tabBarIcon: tabInfo => (
        <AntDesign 
          name="message1" 
          size={24} 
          color={tabInfo.tintColor}
        />
      )
    }
  },
  Mine: {
    screen: OrdersNavigator,
    navigationOptions: {
      tabBarIcon: tabInfo => (
        <MaterialIcons 
          name="done-all" 
          size={25} 
          color={tabInfo.tintColor} 
        />
        
      )
    }
  },
  Manage: {
    screen: AccountScreen,
    navigationOptions: {
      tabBarIcon: tabInfo => (
        <Feather
          name='settings'
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

const OrganisationsNavigator = createStackNavigator(
  {
    OrganisationsHomeNavigator: {
      screen: OrganisationsScreen,
    },
    JoinByInvitation: JoinByInvitationScreen
  },
  {
    headerMode: 'none',
    defaultNavigationOptions: defaultNavOptions
  }
);

const HomeNavigator = createBottomTabNavigator({
  Organisations: {
    screen: OrganisationsNavigator,
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
  Account: {
    screen: AccountScreen,
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


const AuthNavigator = createStackNavigator(
  {
    Welcome: WelcomeScreen,
    Signup: SignupScreen,
    Signin: SigninScreen,

  },
  {
    defaultNavigationOptions: defaultNavOptions,
    headerMode: 'none',
  }
);

const MainNavigator = createSwitchNavigator({
  Startup: StartupScreen,
  Auth: AuthNavigator,
  Home: HomeNavigator,
  SingleOrganisation: SingleOrganisationNav
});

export default createAppContainer(MainNavigator);
