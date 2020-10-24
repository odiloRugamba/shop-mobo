import React from 'react';
import { View, Text, Button, TextInput} from 'react-native';
import { Dropdown } from 'react-native-material-dropdown-v2'


const UserProductsScreen = props => {
  

  const questions = [
    {
      id: '1',
      type: 'open',
      question: 'What is your ...',
      possibleAnswers: ['Me']
    },
    {
      id: '2',
      type: 'closed',
      question: 'Choose your ...',
      possibleAnswers: ['Me', 'and yiou', 'next answer']
    },
    {
      id: '1',
      type: 'open',
      question: 'Wans anoteher question ...',
      possibleAnswers: ['Me']
    },
  ]

  return (
    <View style={{padding: 20, paddingTop: 70}}>
      {questions.map(item=>{
              if(item.type === 'open'){
                  return(
                      <View>
                          <View id={item.id}>
                              <TextInput placeholder={item.question}/>
                          </View>
                      </View>
                  )
              }
              else{
                  const possibleAnswers = item.possibleAnswers.map(val =>{ return  {value: val, key: val} });
                  return(
                      <View>
                          <View id={item.id}>
                              <Dropdown
                                  label={item.question}
                                  data={possibleAnswers}/>
                          </View>
                      </View>
                  )
              }
          })}

          <Button 
          title="Join..."
          onPress={() => {
            props.navigation.navigate("SingleOrganisation")
          }}
          />
  </View>
  );
};

UserProductsScreen.navigationOptions = navData => {
  return {
    headerTitle: 'Feel this for to join this invitation',
  };
};

export default UserProductsScreen;
