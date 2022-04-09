import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { Checkbox } from 'react-native-paper'

const SelectAll = ({checked, setState,handleChangeAll}) => {
  return (
    <TouchableOpacity  onPress={() => {
         setState();
         handleChangeAll();
        
      }} style={{flexDirection:'row',alignItems:'center',marginTop:20}}>
   
    <Checkbox
      status={checked ? 'checked' : 'unchecked'}
     
      color="#1b5a90"
    />
    <Text>Select All</Text>
  </TouchableOpacity> 
  )
}

export default SelectAll

const styles = StyleSheet.create({})