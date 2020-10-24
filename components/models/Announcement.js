import React from 'react';
import {Button, Text, View,StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
import { AntDesign } from '@expo/vector-icons';
import Colors from '../../constants/Colors';




const AnouncementModel = (props) => {

  const { show, hide,prop, organisation } = props
  const titles = [
      {
          id: '1',
          title: "Principle of college of science and tech"
      },
      {
          id: '2',
          title: "CP of class 2020"
      }
  ]

  let titlesList = ""
  titlesList = 
        <FlatList 
            data={titles} 
            keyExtractor={(item)=>item.id} 
            renderItem={(itemData)=>{ 
                    return (
                        <TouchableOpacity 
                            style={styles.titleContainer}
                            onPress={
                                ()=>{
                                    hide()
                                    prop.navigation.navigate('CreateAnnouncement')
                            }}
                        >
                            <Text style={styles.title}>{itemData.item.title}</Text>
                        </TouchableOpacity>
                    )
                }
            }
        /> 

        return (
            <View style={styles.container}>
                <Modal 
                    animationIn= 'slideInUp'
                    animationInTiming={800}
                    animationOutTiming={100}
                    animationOut= 'slideOutDown'
                    isVisible={show}>
                        <View style={styles.container}>
                        <View style={styles.modalView}>
                            <View style={styles.modalHeader}>
                                <Text style={styles.modalTitle}>Send announcement as...</Text>
                                <TouchableOpacity onPress={hide} style={styles.btn} >
                                    <AntDesign name="close" size={24} color="white" />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.modalFooter}>
                            <View>
                                {titlesList}
                            </View>
                            </View>
                        </View>
                        </View>
                </Modal>
              </View>
          );
};
const styles = StyleSheet.create({
    container: {
            flex: 1,
            justifyContent: 'flex-end'
        },
    modalView: {
        width: '100%',
        maxHeight: '80%',
        backgroundColor: "white",
        borderRadius: 5,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.5,
        shadowRadius: 3.84,
        elevation: 5,
        backgroundColor: Colors.primary,
        overflow: "hidden"
    },
    modalHeader: {
        width: '100%',
        height: '10%',
        flexDirection: 'row',
        padding: 10,
    },
    modalTitle: {
        fontSize: 20,
        width: '90%',
        color: 'white'
    },
    btn: {
        width: '10%',
        color: 'white'
    },
    modalFooter: {
        width: '99.5%',
        height: '89.7%',
        backgroundColor: 'white'
    },
    titleContainer: {
        padding: 20,
        borderBottomColor: Colors.accent,
        borderBottomWidth: 0.2
    },
    title: {
        fontSize: 16,
        color: Colors.black
    },
    

})

export default AnouncementModel;
