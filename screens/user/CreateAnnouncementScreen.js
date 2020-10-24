import React from 'react'
import {
  Text,
  View,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  TextInput,
  Button

} from 'react-native'

import Colors from '../../constants/Colors'
import * as Animatable from 'react-native-animatable';

import TreeView from '../../components/UI/TreeView';




function CreateAnnouncementScreen() {
  const data = [
    {
        id: Math.random(),
        name: 'Child added',
        type: 'branch',
        isChecked: true,
    },
    {
        id: Math.random(),
        name: 'Child added',
        type: 'branch',
        isChecked: true,
    },
    {
        id: Math.random(),
        name: 'Child added',
        type: 'branch',
        isChecked: true,
    }
  ]
  const getData = (node) => {

    const child = {
        id: Math.random(),
        name: 'Child added',
        type: 'branch',
        isChecked: true
      }
    
    node.children = [child];
  }

  return (
      <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
          style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.text_header}>You are sending as Principle of college of science and technology</Text>
            </View>
              <ScrollView style={styles.body}>
                <View style={styles.action}>
                  <TextInput
                    style={styles.textArea}
                    underlineColorAndroid="transparent"
                    placeholder="Type something..."
                    placeholderTextColor="grey"
                    numberOfLines={10}
                    multiline={true}
                    />
                </View>
                <TreeView
                  data={data}
                  onNodePress={({node}) => {
                      getData(node);
                  }
                }
                  renderNode={({ node, level, isExpanded, hasChildrenNodes }) => {
                    return (
                      <View>
                        <Text>{node.name}</Text>
                      </View>
                    )
                  }}
                />
              </ScrollView>
          <Button title="Send" style={{backgroundColor: Colors.primary}}></Button>
    </KeyboardAvoidingView>

  )
}

const styles = StyleSheet.create({

  container: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 15,
  },

  text_header: {
    fontFamily: 'open-sans-bold',
    fontSize: 20,
    color: Colors.black
  },

  action: {
    flexDirection: 'row',
    marginTop: 50,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
    marginBottom: 30,
  },
  textArea: {
    width: '100%',
    height: 120,
    padding: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.accent

  },


})

export default CreateAnnouncementScreen