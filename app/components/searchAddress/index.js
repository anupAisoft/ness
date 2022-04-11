import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {LocationKey} from '../../key';
import {useSelector, useDispatch, connect} from 'react-redux';
import {SET_LAT_LNG} from '../../actions/action.type';
import {setLatLng} from '../../actions/setLatLang';

const SearchAddress = ({navigation, setLatLng, route}) => {
  const latLng = useSelector(state => state.setLatLang);
  const dispatch = useDispatch();

  return (
    <>
      <GooglePlacesAutocomplete
        fetchDetails={true}
        placeholder="Search Location"
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          const address = data.description.split(',');
          //  console.log('data:', data);
          //  console.log('details', details);
          // console.log(details.geometry.location.lat);
          //  console.log(details.geometry.location.lng);
          const lat = details.geometry.location.lat;
          const lng = details.geometry.location.lng;
          // route.params.onRechange(lat,lng)
          setLatLng({lat, lng});
        }}
        query={{
          key: `${LocationKey}`,
          language: 'en',
        }}
        nearbyPlacesAPI="GooglePlacesSearch"
        debounce={300}
      />
    </>
  );
};

export default connect(null, {setLatLng})(SearchAddress);

const styles = StyleSheet.create({});
