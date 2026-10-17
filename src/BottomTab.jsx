import React from 'react';
import Settings from './Settings';
import Favourites from './Favourites';
import Todo from './Home';
import './Movies';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#FF5733',
        tabBarInactiveTintColor: '#888888',
        tabBarLabelStyle: { fontSize: 12, fontWeight: 'bold' },
      }}>
      <Tab.Screen
        name="Home"
        component={Todo}
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <Ionicons name={focused ? 'home' : 'home-outline'} size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <Ionicons name={focused ? 'settings' : 'settings-outline'} size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Favourites"
        component={Favourites}
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <Ionicons name={focused ? 'heart' : 'heart-outline'} size={size} color={color} />
          ),
        }}
      />
      {/* <Tab.Screen
        name="Movies"
        component={Movies}
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <Ionicons name={focused ? 'film' : 'film-outline'} size={size} color={color} />
          ),
        }}
      /> */}
    </Tab.Navigator>
  );
};

export default BottomTab;