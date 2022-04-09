import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

import CheckBoxComponet from '../../components/checkBox';
import SelectAll from './SelectAll';
import { useSelector, useDispatch,connect } from 'react-redux'
import { getlist,select_all,is_selected } from '../../actions/selectList';

const data = [
  {id: 1, txt: 'Active', isChecked: false},
  {id: 2, txt: 'Inactive', isChecked: false},
];

const SiteStatus = ({getlist,select_all,is_selected}) => {
 
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
    </>
  );
};

export default connect(null,{getlist,select_all,is_selected})(SiteStatus);

const styles = StyleSheet.create({});
