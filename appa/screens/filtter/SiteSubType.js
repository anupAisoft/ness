// import {StyleSheet, Text, View,TouchableOpacity,ScrollView} from 'react-native';
// import React from 'react';

// import CheckBoxComponet from '../../components/checkBox';
// import SelectAll from './SelectAll';
// import { getlist } from '../../actions/selectList';
// import { useSelector, useDispatch,connect } from 'react-redux'


// const data = [
 
//   {id: 0, txt: 'DC-AT&T', isChecked: false},
//   {id: 1, txt: 'DC-JMP', isChecked: false},
//   {id: 2, txt: 'DC-Core', isChecked: false},
//   {id: 3, txt: 'DC-FAMC', isChecked: false},
//   {id: 4, txt: 'DC-Equinix', isChecked: false},
//   {id: 5, txt: 'Data Center', isChecked: false},
//   {id: 6, txt: 'Contact Center', isChecked: false},
//   {id: 7, txt: 'Contact Center', isChecked: false},
//   {id: 8, txt: 'Office Large', isChecked: false},
//   {id: 9, txt: 'Office Medium', isChecked: false},
//   {id: 10, txt: 'Office Small', isChecked: false},
//   {id: 12, txt: 'Trading Floor', isChecked: false},
//   {id: 13, txt: 'Branch', isChecked: false},
//   {id: 14, txt: 'InvestorsBank', isChecked: false},
//   {id: 15, txt: 'HSBC', isChecked: false},
//   {id: 16, txt: 'Willamette', isChecked: false},
//   {id: 18, txt: 'JMP', isChecked: false},
//   {id: 19, txt: 'ATM Branded', isChecked: false},
//   {id: 20, txt: 'ATm Owned', isChecked: false},
//   {id: 21, txt: '3rd Party', isChecked: false},
//   {id: 22, txt: 'Other', isChecked: false},
// ];

// const SiteSubType = ({getlist}) => {
//   const list=useSelector((state)=>state)

//   const [checked, setChecked] = React.useState(false);
//   const [item, setItem] = React.useState(data);
//   const setState=()=>{
//     setChecked(!checked)
//   }
//   const handleChangeAll = () => {
//     if (checked) {
//       let temp = item.map(item => {
//         return {...item, isChecked: false};
//       });

//       setItem(temp);
//     } else {
//       let temp = item.map(item => {
//         return {...item, isChecked: true};
//       });

//       setItem(temp);
//     }
//   };
//   const handleChange = id => {
  
//     let temp = item.map(item => {
//       if (id === item.id) {
//         return {...item, isChecked: !item.isChecked};
//       }
//       return item;
//     });

//     setItem(temp);
  
//   };

//   let selected = item.filter(item => item.isChecked);
  
//   React.useEffect(()=>{
//     getlist(data)
//     if (selected && selected.length>0) {
//       setChecked(true)
//     }else{
//       setChecked(false)
//     }
    

//   },[item])
//   return (
//     <>
//     <ScrollView showsVerticalScrollIndicator={false}>
//    <SelectAll
//         setState={setState}
//         handleChangeAll={handleChangeAll}
//         checked={checked}
//       />
         
//       {list.selectList.list.map((item, i) => {
//         return (
//             <CheckBoxComponet
//             key={i}
//             handleChange={handleChange}
//             value={item.isChecked}
//             item={item}
//           />
//         );
//       })}
//       <View style={{height:100}}></View>
//       </ScrollView>
//     </>
//   );
// };

// export default connect(null,{getlist})(SiteSubType);

// const styles = StyleSheet.create({});



import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';

import CheckBoxComponet from '../../components/checkBox';
import SelectAll from './SelectAll';
import { useSelector,connect } from 'react-redux'
import { getlist,select_all,is_selected } from '../../actions/selectList';




const data = [
 
  {id: 0, txt: 'DC-AT&T', isChecked: false},
  {id: 1, txt: 'DC-JMP', isChecked: false},
  {id: 2, txt: 'DC-Core', isChecked: false},
  {id: 3, txt: 'DC-FAMC', isChecked: false},
  {id: 4, txt: 'DC-Equinix', isChecked: false},
  {id: 5, txt: 'Data Center', isChecked: false},
 
  {id: 6, txt: 'Contact Center', isChecked: false},
  {id: 7, txt: 'Office Large', isChecked: false},
  {id: 8, txt: 'Office Medium', isChecked: false},
  {id: 9, txt: 'Office Small', isChecked: false},
  {id: 10, txt: 'Trading Floor', isChecked: false},
  {id: 11, txt: 'Branch', isChecked: false},
  {id: 13, txt: 'InvestorsBank', isChecked: false},
  {id: 14, txt: 'HSBC', isChecked: false},
  {id: 15, txt: 'Willamette', isChecked: false},
  {id: 16, txt: 'JMP', isChecked: false},
  {id: 17, txt: 'ATM Branded', isChecked: false},
  {id: 19, txt: 'ATm Owned', isChecked: false},
  {id: 20, txt: '3rd Party', isChecked: false},
  {id: 21, txt: 'Other', isChecked: false},
];




const SiteSubType = ({getlist,select_all,is_selected}) => {
 
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

export default connect(null,{getlist,select_all,is_selected})(SiteSubType);

const styles = StyleSheet.create({});
