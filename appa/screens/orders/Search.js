import React, {useEffect, useState} from 'react';
import {
    Text,
  View,
  StyleSheet,
  TextInput,
  Image,
  ActivityIndicator,
  TouchableOpacity
} from 'react-native';
// import Voice from '@react-native-voice/voice';
import Voice from '@react-native-community/voice';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';

import { LogBox } from 'react-native';
LogBox.ignoreLogs(['new NativeEventEmitter']);
const Search = ({hideModal,modalVisible}) => {



    const onSpeechStartHandler = (e) => {
        console.log("start handler==>>>", e)
      }
      const onSpeechEndHandler = (e) => {
      //  setLoading(false)
        console.log("stop handler", e)
      }
    
      const onSpeechResultsHandler = (e) => {
        let text = e.value[0]
       // setResult(text)
        console.log("speech result handler", e)
      }
    
      const startRecording = async () => {
        //setLoading(true)
        try {
          await Voice.start('en-Us')
        } catch (error) {
          console.log("error raised", error)
        }
      }
 useEffect(() => {
    //alert('yyyy')
    Voice.onSpeechStart = onSpeechStartHandler;
    Voice.onSpeechEnd = onSpeechEndHandler;
    Voice.onSpeechResults = onSpeechResultsHandler;

    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    };
 }, [])
 


  return (
    <>
      
          <View style={styles.search}>
            <View style={styles.searchLeft}>
              <Image
                source={require('../../images/logo.png')}
                style={{width: 30, height: 30}}
              />
            </View>
            <View style={styles.searchMiddele}>
              <TextInput
                style={{fontSize: 17, fontWeight: '700'}}
                placeholder="Search Here"
                placeholderStyle={{fontWeight: 'bold'}}
              />
            </View>
            <View style={styles.searchRight}>
                <View style={{width:'50%', height:'100%',justifyContent:'center', alignItems:'center'}}>
                    {!modalVisible?( <TouchableOpacity onPress={startRecording}>
              <FontAwesome name="microphone" size={24} color="black" />
              </TouchableOpacity>):(  <Entypo name="cross" size={24} color="black" />)}
               
                </View>
                <View style={{width:'50%', height:'100%',justifyContent:'center', alignItems:'center'}}>
                <Image
                source={require('../../images/dalasi.png')}
                style={{width: 30, height: 30,borderRadius:15}}
              />
                </View>
            </View>
          </View>
          
          
         
    </>
  );
};

export default Search;

const styles = StyleSheet.create({
  searchRight: {width: '25%', height: '100%', borderRadius: 25, flexDirection:'row'},
  searchMiddele: {width: '60%', height: '100%'},
  searchLeft: {
    width: '15%',
    height: '100%',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  search: {
    flexDirection: 'row',
    width: '95%',
    position: 'absolute',
    height: 50,
    backgroundColor: 'white',
    alignSelf: 'center',
    top: 15,
    zIndex: 1000,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },

 
  searchBox: {
    // position: 'absolute',
    // marginTop: Platform.OS === 'ios' ? 40 : 20,
    flexDirection: 'row',
    backgroundColor: '#fff',
    width: '92%',
    alignSelf: 'center',
    borderRadius: 5,
    padding: 12,
    shadowColor: '#ccc',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,
  },
 
});
