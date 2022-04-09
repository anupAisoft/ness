// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
// //AIzaSyDOyxhWdKWUM0PiYg97jx5tk3eB1NniLbU
// const Stats = () => {
//   return (<>
   

//     <GooglePlacesAutocomplete
//     fetchDetails={true}
//     placeholder="Search Location"
//     onPress={(data, details = null) => {
//       // 'details' is provided when fetchDetails = true
//       //const address = data.description.split(',');
     
//       console.log(data, details )
//     }}
//     query={{
//       key: 'AIzaSyAn9wVgUpu0h_LAHr0LPrzcKQjQ9uVczT8',
//       language: 'en',
//     }}
//   />
  
//   <View style={{paddingTop:50, justifyContent:'center'}}>
//     {/* <GooglePlacesAutocomplete
//                         fetchDetails={true}
//                         style={{backgroundColor:"red"}}
//                         placeholder='Search Other Location'
//                         onPress={(data, details = null) => {
                       
//                         const address = data.description.split(",")
//                         // setAddress(data.description)
//                         // setLat( details.geometry.location.lat)
//                         // setLong(details.geometry.location.lng)
//                         console.log(details,data)
                        
//                     }}
//                      query={{
//                      key: 'AIzaSyAn9wVgUpu0h_LAHr0LPrzcKQjQ9uVczT8',
//                     language: 'en',
//                     }}
//                     styles={{
//                         textInputContainer: {
//                             width: "100%",
//                             marginTop:15
//                         },
//                         textInput: {
//                             borderColor:'black',
//                             borderRadius:10,
//                             borderWidth:1,
//                           height: 48,
//                           color: 'black',
//                           fontSize: 16,
//                         },
//                         predefinedPlacesDescription: {
//                           color: 'black',
//                         },
//                       }}
                    
//                      /> */}
//     </View>
//     </>
//   )
// }

// export default Stats

// const styles = StyleSheet.create({})


import React, { useCallback, useRef } from 'react';
import { StyleSheet, TouchableOpacity, View,StatusBar } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomSheet, { BottomSheetRefProps } from './BottomSheet';

export default function Stats() {
  const ref = useRef<BottomSheetRefProps>(null);

  const onPress = useCallback(() => {
    const isActive = ref?.current?.isActive();
    if (isActive) {
      ref?.current?.scrollTo(0);
    } else {
      ref?.current?.scrollTo(-200);
    }
  }, []);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        <StatusBar style="light" />
        <TouchableOpacity style={styles.button} onPress={onPress} />
        <BottomSheet ref={ref}>
          <View style={{ flex: 1, backgroundColor: 'orange' }} />
        </BottomSheet>
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    height: 50,
    borderRadius: 25,
    aspectRatio: 1,
    backgroundColor: 'white',
    opacity: 0.6,
  },
});