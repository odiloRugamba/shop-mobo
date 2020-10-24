import React from 'react';
import { View, Text, FlatList, Button, Platform, Alert, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Organisation from '../../components/UI/Organisation';
import Invitation from '../../components/UI/Invitation';
import Colors from '../../constants/Colors';
import * as productsActions from '../../store/actions/products';
import { LinearGradient } from 'expo-linear-gradient';

const UserProductsScreen = props => {
  const userProducts = useSelector(state => state.products.userProducts);
  const dispatch = useDispatch();

  const editProductHandler = id => {
    props.navigation.navigate('EditProduct', { productId: id });
  };
  const invitationSelectHandler = id => {
    props.navigation.navigate('JoinByInvitation', { invitation: id });
  }
  const deleteHandler = id => {
    Alert.alert('Are you sure?', 'Do you really want to delete this item?', [
      { text: 'No', style: 'default' },
      {
        text: 'Yes',
        style: 'destructive',
        onPress: () => {
          dispatch(productsActions.deleteProduct(id));
        }
      }
    ]);
  };
  const organisations = [
    {
      id: '1',
      logo: '../../assets/splash.png',
      name: 'University Of Rwanda'
    },
    {
      id: '2',
      logo: '../../assets/splash.png',
      name: 'Arsenal'
    }
  ];
  const invitations = [
    {
      id: '1',
      title: 'Student',
      branch: {
        type: 'School',
        name: 'School of science and technology'
      },
      invitedBy: {
        title: 'Class representative',
        firstName: 'Odilo'
      },
      organisation: 'Arsenal',
      logo: '../../assets/splash.png',
    },
    {
      id: '2',
      title: 'Boss',
      branch: {
        type: 'Department',
        name: 'CSE'
      },
      invitedBy: {
        title: 'CP',
        firstName: 'Odilo'
      },
      organisation: 'UR',
      logo: '../../assets/splash.png',
    },
   
  ]
  if (organisations.length === 0) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>List Of organisations and Invitations</Text>
        <Button 
        title="Click"
        onPress={
          () => {
            props.navigation.navigate("SingleOrganisationNavigator")
          }
        }>
          
        </Button>
      </View>
    );
  }

  return (
   <View>
      <LinearGradient colors={['#ffedff', '#ffe3ff']} style={styles.gradient}>
    <FlatList
      style={{marginTop: 40}}
      data={organisations}
      keyExtractor={item => item.id}
      renderItem={itemData => (
        <Organisation
          image={itemData.item.logo}
          onOrganisationSelect={() => {
            props.navigation.navigate('SingleOrganisation', { organisationId: itemData.item.id });
          }}
          name={itemData.item.name}
        >
        </Organisation>
      )}
    />
    </LinearGradient>
    <FlatList
      style={{marginTop: 40}}
      data={invitations}
      keyExtractor={item => item.id}
      renderItem={itemData => (
        <Invitation
          invitation={itemData.item}
          onInvitationSelect = {() => {
            invitationSelectHandler(itemData.item.id)
          }}
        >
        </Invitation>
      )}
    />
   </View>
  );
};

const styles = StyleSheet.create({

  gradient: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },

});

export default UserProductsScreen;
