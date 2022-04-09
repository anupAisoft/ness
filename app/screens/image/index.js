import { StyleSheet, Text, Dimensions, View,FlatList,Image } from 'react-native'
import React from 'react'
const{width}=Dimensions.get('screen')
const num=2
const Images = () => {
  const data=[
    {id:0,name:'https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
    {id:1,name:'https://images.pexels.com/photos/2467285/pexels-photo-2467285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
    {id:2,name:'https://images.pexels.com/photos/277667/pexels-photo-277667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
    {id:3,name:'https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
    {id:4,name:'https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
    {id:5,name:'https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
    {id:6,name:'https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
    {id:6,name:'https://images.pexels.com/photos/6964138/pexels-photo-6964138.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
  ]
  return (
   <View style={{paddingHorizontal:5, marginTop:20}}>
      <FlatList 
      numColumns={num}
  
      data={data}
      keyExtractor={(item,i)=>item.id.toString()}
      renderItem={({item})=>{
        return(
         
          <View style={{width:width/2, marginHorizontal:1,marginVertical:2, height:150, backgroundColor:'red'}}>
          <Image style={{width:width/2, height:"100%", resizeMode:"cover"}} 
          source={{uri:item.name}} />
          </View>
     

        )
      }}
      />
     </View>
  )
}

export default Images

const styles = StyleSheet.create({})