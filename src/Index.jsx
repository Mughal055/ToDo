import { View, Text } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Todo from './Home';
import Settings from './Settings'
import BottomTab from './BottomTab';
import Movies from './Movies';

const Index = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Movies" component={Movies} />
      {/* <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="Todo" component={Todo} /> */}

    </Stack.Navigator>
  );
};

export default Index;
