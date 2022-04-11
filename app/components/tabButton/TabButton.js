import {StyleSheet, Text, View, Dimensions, Image} from 'react-native';
import React from 'react';
const {width} = Dimensions.get('screen');

const TabButton = ({focused, imagePath, name}) => {
  return (
    <>
      <View
        style={{
          width: width / 4,
          height: '100%',

          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {/* <View
          style={{
            width: '50%',
            height: '50%',

            backgroundColor: focused ? '#1b5a90' : 'white',
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
          }}> */}
        <Image
          style={{
            tintColor: focused ? '#1b5a90' : 'gray',
            resizeMode: 'contain',
            marginVertical: 2,
            width: 20,
            height: 20,
          }}
          source={imagePath}
        />
        {/* </View> */}
        <View
          style={{
            width: '50%',
            height: '50%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 12,
              fontWeight: '800',
              color: focused ? '#1b5a90' : 'gray',
            }}>
            {name}
          </Text>
        </View>
      </View>
    </>
  );
};

export default TabButton;

const styles = StyleSheet.create({});
