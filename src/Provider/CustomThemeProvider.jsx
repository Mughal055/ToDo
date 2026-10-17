import React, { createContext, useState } from 'react';
import { themeContext } from '../appContext/AppContext';
import { useMMKVBoolean, useMMKVString } from 'react-native-mmkv';

export const colors ={
  light : {
    background: '#fff',
    cardBg: '#c9bdbd',
    text: '#000',
    subText: '#8b8484',
    placeholder: '#666',
    icon: '#000',
  },
  dark : {
    background: '#000',
    cardBg: '#333',
    text: '#fff',
    subText: '#aaa',
    placeholder: '#aaa',
    icon: '#fff',
  }
}

 const CustomThemeProvider = ({ children }) => {
  //for mmkv just use this line
  const [btn, setbtn] = useMMKVBoolean('btn');
  const theme = btn ? colors.dark : colors.light
  return (
    <themeContext.Provider value={{ btn, setbtn, theme }}>
      {children}
    </themeContext.Provider>
  );
};
export default CustomThemeProvider;