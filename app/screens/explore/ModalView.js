
import React from 'react'
import {
    Text,
  View,
  StyleSheet,

  ActivityIndicator,
 
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Modal,Portal} from 'react-native-paper';
const ModalView = ({modalVisible}) => {
  return (
      <Portal>
    <Modal
    visible={modalVisible}
    
    contentContainerStyle={styles.containerStyle}>
    <Text style={{marginBottom: 20, fontSize: 25, color: '#1b5a90'}}>
      Text
    </Text>
    <Text style={{marginBottom: 20}}>
      {' '}
      <FontAwesome name="microphone" size={40} color="#1b5a90" />
    </Text>
    <Text>
      <ActivityIndicator size="large" color="#1b5a90" />
    </Text>
  </Modal> 
  </Portal>

  )
}

export default ModalView

const styles = StyleSheet.create({
    containerStyle: {
        backgroundColor: 'white',
        padding: 20,
        width: 300,
        height: 250,
        alignSelf: 'center',
        borderRadius: 15,
        alignItems: 'center',
      }
     
})