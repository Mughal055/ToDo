import { View, Text, StyleSheet } from 'react-native';
import React, { useContext } from 'react';
import { themeContext } from './appContext/AppContext'; // apne path ke hisaab se adjust karo
import { SafeAreaView } from 'react-native-safe-area-context';

const Favourites = () => {
  const { theme } = useContext(themeContext);

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[styles.text, { color: theme.text }]}>Favourites</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 16,
  },
});

export default Favourites;