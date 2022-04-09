import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Item = () => {
  return (
    <View style={styles.container}>
      <View style={{width:'100%', height:'85%'}}>
      <Text style={{fontWeight:"500",fontSize:15}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad 
        minim veniam, quis nostrud exercitation </Text>
      </View>
      <View style={{width:'100%', height:'15%',alignItems:'flex-end', justifyContent:'center'}}>
        <Text style={{fontSize:15, fontWeight:'600'}}>John</Text>
      </View>
      

    </View>
  )
}

export default Item

const styles = StyleSheet.create({
    container:{
        width:'100%',
       height:"100%",
       padding:5,
        backgroundColor:'white',
        borderRadius:5,
        paddingBottom:7
       
       
    }
})