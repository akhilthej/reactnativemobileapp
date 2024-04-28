// NavMobile.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../shared/components/screens/HomeScreen';
import ContactUsScreen from '../shared/components/screens/ContactUsScreen';
import ServicesScreen from '../shared/components/screens/ServicesScreen';
import ExploreScreen from '../shared/components/screens/ExploreScreen';
import Profile from '../shared/components/screens/Profile';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const MobileTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{
      headerShown:false,
      tabBarActiveTintColor: 'black', 
      tabBarInactiveTintColor: 'gray',}}>
     
     <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />

<Tab.Screen
        name="Contact Us"
        component={ContactUsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="call" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Services"
        component={ServicesScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="clipboard" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={ExploreScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={size} color={color} />
          ),
        }}
      />

    </Tab.Navigator>
  );
};

export default MobileTabNavigator;
