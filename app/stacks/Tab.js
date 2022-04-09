import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TabButton from '../components/tabButton/TabButton';

import tabButtonImage from '../components/imageLink/tabButtonImage';
 import Orders from '../screens/orders';


import Stats from '../screens/stats';
import Saved from '../screens/saved';
import Search from '../screens/search';
import ExploreStack from './ExploreStack';



const Tab = createBottomTabNavigator();
const TabNaV=({navigation})=>{
    
    return(
      <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'gray',
        tabBarShowLabel: false,
        tabBarStyle: {
             position: 'absolute',
            backgroundColor: 'white',
            // borderRadius: 50,
             bottom: 0,
             left:0,
             right:0,
            // marginHorizontal: 16,
            height:50,
            paddingVertical:5

        }
    }}
      >
       <Tab.Screen
                name="ExploreStack" component={ExploreStack}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                          <TabButton
                          name="Explore"
                          imagePath={tabButtonImage.imgExlore} 
                          focused={focused}/>
                        )
                    }
                }}
            />
     <Tab.Screen
                name="Orders" component={Orders}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                          <TabButton name="Orders" 
                           imagePath={tabButtonImage.imgOrder}
                            focused={focused}/>
                        )
                    }
                }}
            /> 
       <Tab.Screen
                name="Stats" component={Stats}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                          <TabButton name="Stats"
                          imagePath={tabButtonImage.imgStats}
                           focused={focused}/>
                        )
                    }
                }}
            />
      <Tab.Screen
                name="Saved" component={Saved}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                          <TabButton name="Saved"
                          imagePath={tabButtonImage.imgSaved}
                           focused={focused}/>
                        )
                    }
                }}
            />
     <Tab.Screen
                name="Search" component={Search}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                          <TabButton name="Search"
                          imagePath={tabButtonImage.imgSearch}
                           focused={focused}/>
                        )
                    }
                }}
            /> 
  </Tab.Navigator>
    )
}
export default TabNaV