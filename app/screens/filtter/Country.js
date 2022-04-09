
import {StyleSheet, Text, View, } from 'react-native';
import React from 'react';

import CheckBoxComponet from '../../components/checkBox';

import { useSelector, useDispatch,connect } from 'react-redux'
import { getlist,select_all,is_selected } from '../../actions/selectList';

const data = [
  {id: 1, txt: 'USA', isChecked: false},
  {id: 2, txt: 'ROW', isChecked: false},
];

const Country = ({getlist,is_selected}) => {
 
  const list=useSelector((state)=>state)
  console.log(list,'list')


  const handleChange = id => {
    
     is_selected(id)

   
  };



  React.useEffect(() => {
    getlist(data)
   
  }, []);
  
  return (
    <>
    
      <View style={{width:'100%',height:1, marginTop:20}}></View>
      { list.selectList.list && list.selectList.list.map((item, i) => {
        return (
          <CheckBoxComponet
          key={i}
            handleChange={handleChange}
            value={item.isChecked}
            item={item}
          />
        );
      })}
    </>
  );
};

export default connect(null,{getlist,is_selected})(Country);

const styles = StyleSheet.create({});
