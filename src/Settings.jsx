import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useContext } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { themeContext } from './appContext/AppContext';

const Settings = () => {
  const { btn, setbtn, theme } = useContext(themeContext);

  return (
    <SafeAreaView style={[styles.main, { backgroundColor: theme.background }]}>
      <View style={[styles.card, { borderColor: theme.border, backgroundColor: theme.cardBg }]}>
        <Text style={[styles.title, { color: theme.text }]}>Theme</Text>

        <View style={[styles.toggleTrack, btn && styles.bg]}>
          <TouchableOpacity onPress={() => setbtn(!btn)}>
            <View style={[styles.toggleThumb, btn && styles.thumb]} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  card: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 5,
    margin: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  toggleTrack: {
    height: 15,
    width: 35,
    backgroundColor: '#807878',
    borderRadius: 30,
    justifyContent: 'center',
  },
  toggleThumb: {
    height: 20,
    width: 20,
    backgroundColor: '#aca9a9',
    borderRadius: 50,
  },
  bg: {
    backgroundColor: '#32c957',
  },
  thumb: {
    backgroundColor: '#0a7c22',
    alignSelf: 'flex-end',
  },
});

export default Settings;