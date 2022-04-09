
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';

import CheckBoxComponet from '../../components/checkBox';
import SelectAll from './SelectAll';
import { useSelector,connect } from 'react-redux'
import { getlist,select_all,is_selected } from '../../actions/selectList';




const data = [
 
  
  {id: 0, txt: 'Data Center', isChecked: false},
  {id: 1, txt: 'Office', isChecked: false},
  {id:2, txt: 'Branch', isChecked: false},
  {id: 3, txt: 'ATM', isChecked: false},
  {id: 4, txt: '3rd Party', isChecked: false},
  {id: 5, txt: 'Other', isChecked: false},
 
];




const SiteType = ({getlist,select_all,is_selected}) => {
 
  const list=useSelector((state)=>state)

  

  const [checked1, setChecked] = React.useState(false);
 
  const setState = () => {
    setChecked(true);
  };
  const handleChangeAll = () => {
    select_all(data)
    
  };
  const handleChange = id => {
   
     is_selected(id)

  };

  

  React.useEffect(() => {
    getlist(data)
   
  }, []);
  
  return (
    <>
     <ScrollView showsVerticalScrollIndicator={false}>
      <SelectAll
        setState={setState}
        handleChangeAll={handleChangeAll}
        checked={list.selectList.checked}
      />
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
       <View style={{height:200}}></View>
       </ScrollView>
    </>
  );
};

export default connect(null,{getlist,select_all,is_selected})(SiteType);

const styles = StyleSheet.create({});
