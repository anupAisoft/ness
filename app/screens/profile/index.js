import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Atms from '../atms';
import Images from '../image';
import Notes from '../notes';
import {View, ScrollView} from 'react-native';
import React from 'react';
import Circuits from '../circuits';
import Design from '../designs';

const Tab = createMaterialTopTabNavigator();

const Profile = () => {
  return (
    <Tab.Navigator
      tabBarPosition="top"
      backBehavior="none"
      initialRouteName={Circuits}
      removeClippedSubviews={false}
      animationEnabled={true}
      upperCaseLabel="false"
      screenOptions={{
        tabBarLabelStyle: {textTransform: 'lowercase'},
        tabBarActiveTintColor: '#1b5a90',
        tabBarInactiveTintColor: '#757575',
        tabBarLabelStyle: {fontSize: 13, fontWeight: '700'},
        tabBarStyle: {backgroundColor: '#f5f5f5'},
        tabBarScrollEnabled: true,
        tabBarItemStyle: {width: 90},
        lazy: true,

        swipeEnabled: true,
        disableSwipe: false,
        tabBarIndicatorStyle: {
          width: 70,
          marginLeft: 12,
          backgroundColor: '#1b5a90',
          height: 2.5,
        },
      }}>
      <Tab.Screen
        name="Circuits"
        component={Circuits}
        options={{tabBarLabel: 'Circuits', labelStyle: {textTransform: 'none'}}}
      />
      <Tab.Screen
        name="Atms"
        component={Atms}
        options={{tabBarLabel: 'Atms'}}
      />
      <Tab.Screen
        name="Notes"
        component={Notes}
        options={{tabBarLabel: 'Notes'}}
      />
      <Tab.Screen
        name="Images"
        component={Images}
        options={{tabBarLabel: 'Images'}}
      />
      <Tab.Screen
        name="Design"
        component={Design}
        options={{tabBarLabel: 'Design'}}
      />
    </Tab.Navigator>
  );
};
export default Profile;
