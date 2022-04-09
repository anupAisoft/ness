import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Atms from '../atms';
import Images from '../image';
import Notes from '../notes';
import { View,ScrollView} from 'react-native';
import React from 'react';
import Circuits from '../circuits';
import Design from '../designs';

const Tab = createMaterialTopTabNavigator();

const Profile=()=> {
  return (
    <Tab.Navigator
    tabBarPosition= "top"
    backBehavior= "none"
    initialRouteName= {Circuits}

    removeClippedSubviews= {false}
    animationEnabled= {true}

    upperCaseLabel= "false"
      screenOptions={{
        tabBarLabelStyle: { textTransform:'lowercase' },
        tabBarActiveTintColor: '#1b5a90',
        tabBarInactiveTintColor:'#757575',
        tabBarLabelStyle: { fontSize: 13, fontWeight:'700' },
        tabBarStyle: { backgroundColor: '#f5f5f5' },
        tabBarScrollEnabled: true,
        tabBarItemStyle:{width:90},
        lazy:true,

        swipeEnabled:true,
        disableSwipe:false,
        tabBarIndicatorStyle:{
            width:70,
           marginLeft:12,
          backgroundColor:'#1b5a90',
          height:2.5,

      }

      }}
    >

      <Tab.Screen
        name="Circuits"
        component={Circuits}

        options={{ tabBarLabel: 'Circuits',    labelStyle: { textTransform: 'none' }
        }}
      />
      <Tab.Screen
        name="Atms"
        component={Atms}

        options={{ tabBarLabel: 'Atms', }}
      />
      <Tab.Screen
        name="Notes"
        component={Notes}
        options={{ tabBarLabel: 'Notes' }}
      />
      <Tab.Screen
        name="Images"
        component={Images}
        options={{ tabBarLabel: 'Images' }}
      />
      <Tab.Screen
        name="Design"
        component={Design}
        options={{ tabBarLabel: 'Design' }}
      />

    </Tab.Navigator>
  );
}
export default Profile

// import {
//   StyleSheet,
//   Text,
//   View,
//   FlatList,
//   TouchableOpacity,
//   SafeAreaView,
//   Dimensions,
//   Animated
// } from 'react-native';
// import React, {useState,useRef} from 'react';
// import Notes from '../notes';
// import Circuits from '../circuits';


// const {width,height}=Dimensions.get('screen')
// const Profile = () => {
//     const myRef = useRef(null);
//     const myRef1 = useRef(null);
//   const [data, setData] = useState([
//     {id: 0, name: 'Circuits', isActive: true},
//     {id: 1, name: 'Devices', isActive: false},
//     {id: 2, name: 'Atms', isActive: false},
//     {id: 3, name: 'Notes', isActive: false},
//     {id: 4, name: 'Images', isActive: false},
//     {id: 5, name: 'Design', isActive: false},
//   ]);
//   const [data1, setData1] = useState([
//     {id: 0, name: <Notes/>, isActive: true},
//     {id: 1, name:  <Circuits/>, isActive: false},
//     {id: 2, name:  <Notes/>, isActive: false},
//     {id: 3, name:  <Notes/>, isActive: false},
//     {id: 4, name:  <Notes/>, isActive: false},
//     {id: 5, name:  <Notes/>, isActive: false},
//   ]);
//   const actiText = id => {
//     myRef.current.scrollToIndex({
//                     animated: true,
//                      index: id,
//                      viewPosition: 0.5
//             });
//     myRef1.current.scrollToIndex({
//                     animated: true,
//                      index: id,
//                      viewPosition: 0.5
//             });
//     let listData = data.map(item => {
//       let itm = {...item, isActive: false};
//       return itm;
//     });

//     listData[id].isActive = true;
//     setData(listData);
//   };

//   return (
//     <SafeAreaView>
//       <View
//         style={{
//           ...styles.shadowBox,
         
//         }}>
//         <FlatList
//         ref={myRef}
//           data={data}
//           horizontal
//           keyExtractor={(item, index) => item.id.toString()}
//           showsHorizontalScrollIndicator={false}
//           renderItem={({item}) => {
//             return (
//               <TouchableOpacity onPress={() => actiText(item.id)}>
//                 <View style={styles.topBar}>
//                   <Text
//                     style={{
//                       fontSize: 15,
//                       color: item.isActive ? '#1b5a90' : '#757575',
//                       fontWeight: '700',
//                     }}>
//                     {item.name}
//                   </Text>
//                   <View
//                     style={{
//                       width: '60%',
//                       height: 3,
//                       backgroundColor: item.isActive
//                         ? '#1b5a90'
//                         : 'transparent',
//                       position: 'absolute',
//                       bottom: 0,
//                       marginLeft: -30,
//                       left: '50%',
//                     }}></View>
//                 </View>
//               </TouchableOpacity>
//             );
//           }}
//         />
//       </View>
//       <Animated.FlatList
//         ref={myRef1}
//        horizontal
      
//        pagingEnabled={true}
//        keyExtractor={(item, index) => item.id.toString()}
//        showsHorizontalScrollIndicator={false} data={data1}
//        renderItem={({item})=>{
//            return(
//               <>
//               {item.name}
//               </>
//            )
//        }}
//         />
//     </SafeAreaView>
//   );
// };

// export default Profile;

// const styles = StyleSheet.create({
//   topBar: {
//     justifyContent: 'center',
//     alignItems: 'center',
//     position: 'relative',
//     width: 100,
//     height: '100%',
//   },
//   shadowBox: {
//     height: 50,
//     backgroundColor: 'white',
//     justifyContent: 'center',
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 2,
//       height: 6,
//     },
//     shadowOpacity: 0.32,
//     shadowRadius: 5.46,
//     elevation: 9,
//   },
// });
