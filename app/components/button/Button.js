import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'

const Button = () => {
  return (
    <>
    <TouchableOpacity style={styles.Button}
    >
      <Text>SmartSite#</Text>
    </TouchableOpacity>
      
    </>
  )
}

export default Button

const styles = StyleSheet.create({
  Button:{
    padding:10,

  }
})