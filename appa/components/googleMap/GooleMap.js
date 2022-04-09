import { StyleSheet,Dimensions, Text,Image, View } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MapView, {Marker, PROVIDER_GOOGLE,Callout } from 'react-native-maps';


const CustomMarker = () => {
    return (
      <Image
        style={{width: 35, height: 55}}
        source={require('../../images/14.png')}
      />
    );
  };
const GooleMap = () => {
  return (
    < >
    
     <MapView
          style={{...StyleSheet.absoluteFillObject}}
          provider={PROVIDER_GOOGLE}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
             
            
  
            
            <Marker 
            coordinate={{
              latitude: 37.78825,
              longitude: -122.4324,
            }}
          
            title="Test Title"
            description="This is the test description"
          >
            <CustomMarker/>
          </Marker>
               
          </MapView>
         
    </>
  )
}

export default GooleMap

const styles = StyleSheet.create({
    container:{

    },
    bubble: {
        flexDirection: 'column',
        alignSelf: 'flex-start',
        backgroundColor: '#fff',
        borderRadius: 6,
        borderColor: '#ccc',
        borderWidth: 0.5,
        padding: 15,
        width: 150,
      },
      // Arrow below the bubble
      arrow: {
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        borderTopColor: '#fff',
        borderWidth: 16,
        alignSelf: 'center',
        marginTop: -32,
      },
      arrowBorder: {
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        borderTopColor: '#007a87',
        borderWidth: 16,
        alignSelf: 'center',
        marginTop: -0.5,
        // marginBottom: -15
      },
      // Character name
      name: {
        fontSize: 16,
        marginBottom: 5,
      },
      // Character image
      image: {
        width: "100%",
        height: 80,
      },
      
})