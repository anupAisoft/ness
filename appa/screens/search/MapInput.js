import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { LocationKey } from '../../key';

function MapInput(props){
        return (

            // <GooglePlacesAutocomplete
            //     placeholder='Search Address'
            //     minLength={2} // minimum length of text to search
            //     autoFocus={true}
            //     returnKeyType={'search'} // Can be left out for default return key 
            //     listViewDisplayed={false}    // true/false/undefined
            //     fetchDetails={true}
            //     onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
            //        // props.notifyChange(details.geometry.location);
            //        console.log("first")
            //     }}
            //     query={{
            //         key: 'AIzaSyAn9wVgUpu0h_LAHr0LPrzcKQjQ9uVczT8',
            //         language: 'en'
            //     }}
            //     nearbyPlacesAPI='GooglePlacesSearch'
            //     debounce={300}
            // />
            <GooglePlacesAutocomplete
    fetchDetails={true}
    placeholder="Search Location"
    onPress={(data, details = null) => {
      // 'details' is provided when fetchDetails = true
      const address = data.description.split(',');
     
      // console.log(details.geometry.location.lat);
      //  console.log(details.geometry.location.lng);
      const lat=details.geometry.location.lat
      const lng=details.geometry.location.lng
   
    //   setLatLng({lat,lng})
    //   navigation.goBack()

    }}
    query={{
      key: `${LocationKey}`,
      language: 'en',
    }}
  />
        );
}
export default MapInput;
