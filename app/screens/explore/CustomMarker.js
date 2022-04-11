import {View, Image} from 'react-native';
import React from 'react';

const CustomMarker = ({isChecked}) => {
  return (
    <Image
      style={{width: 35, height: 55}}
      source={
        isChecked
          ? require('../../images/location-pin.png')
          : require('../../images/14.png')
      }
    />
  );
};
export default CustomMarker;
