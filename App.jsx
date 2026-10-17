import { View, Text } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomTab from './src/BottomTab';
import CustomThemeProvider from './src/Provider/CustomThemeProvider'
import Index from './src/Index'
const App = () => {

  return (
    <CustomThemeProvider>
      <NavigationContainer>
        
        <BottomTab />

      </NavigationContainer>
    </CustomThemeProvider>
  );
};




export default App;
