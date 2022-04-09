import React, {useState} from 'react';
// import CheckBox from '@react-native-community/checkbox';
import {StyleSheet, Text, View} from 'react-native';
import {Checkbox} from 'react-native-paper';
import { useTheme } from 'react-native-paper';


const CheckBoxComponet = ({item,handleChange}) => {
  const  colors  = "#1b5a90"
  // console.log(item);

  const [checked, setChecked] = React.useState(false);
  return (
    <View style={styles.container}>
      <Checkbox
        status={item.isChecked ? 'checked' : 'unchecked'}
        onPress={() => {
          setChecked(!checked);
          handleChange(item.id)
        }}
       color="#1b5a90"
    
      />
      <Text>{item.txt}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  checkbox: {
    alignSelf: 'center',
  },
  container:{
      flexDirection:'row',
     alignItems:'center'
  }
});

export default CheckBoxComponet;
