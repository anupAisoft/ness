
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';

import CheckBoxComponet from '../../components/checkBox';
import SelectAll from './SelectAll';
import { useSelector,connect } from 'react-redux'
import { getlist,select_all,is_selected } from '../../actions/selectList';




const data = [
 
  {id: 0, txt: 'AT&T', isChecked: false},
  {id: 1, txt: 'AT&T Mobility', isChecked: false},
  {id: 2, txt: 'AT&T OneNet', isChecked: false},
  {id: 3, txt: 'Centurylink', isChecked: false},
  {id: 4, txt: 'Comcast', isChecked: false},
  {id: 5, txt: 'Consolidate..', isChecked: false},
  {id: 6, txt: 'Cox', isChecked: false},
  {id: 7, txt: 'Crown Castle', isChecked: false},
  {id: 8, txt: 'DirecTv', isChecked: false},
  {id: 9, txt: 'Frontier', isChecked: false},
  {id: 10, txt: 'Granite', isChecked: false},
  {id: 12, txt: 'Optimum', isChecked: false},
  {id: 13, txt: 'Spectrum', isChecked: false},
  {id: 14, txt: 'TDS Telecom', isChecked: false},
  {id: 15, txt: 'Verizon', isChecked: false},
  {id: 16, txt: 'Verizon Wire', isChecked: false},
  {id: 18, txt: 'VTel', isChecked: false},
  {id: 19, txt: 'Windstream', isChecked: false},

];




const Vendor = ({getlist,select_all,is_selected}) => {
 
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

export default connect(null,{getlist,select_all,is_selected})(Vendor);

const styles = StyleSheet.create({});
