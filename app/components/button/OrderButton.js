import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'

const OrderButton = ({title,bgColor,textColor,colorChange}) => {
  return (
    <TouchableOpacity onPress={colorChange} style={{...styles.conatiner,backgroundColor:bgColor}}>
      <Text style={{...styles.title,color:textColor}} >{title}</Text>
    </TouchableOpacity>
  )
}

export default OrderButton

const styles = StyleSheet.create({
    conatiner:{
        width:'50%',
        paddingVertical:15,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:''  
    },

    title:{
        fontSize:15
    }
})