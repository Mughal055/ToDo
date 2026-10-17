import React, { useState, useContext } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { themeContext } from '../appContext/AppContext'; // apna path check kar lena

const TodoItem = ({ title, onDelete }) => {
  const { btn } = useContext(themeContext);
  const [isChecked, setIsChecked] = useState(false);

  return (
    <View
      style={[
        {
          borderColor: '#969090',
          borderWidth: 2,
          borderRadius: 10,
          padding: 10,
          marginTop: 15,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        },
        btn && { backgroundColor: '#1a1a1a', borderColor: '#444' },
      ]}
    >
      <TouchableOpacity
        style={styles.checkboxContainer}
        onPress={() => setIsChecked(!isChecked)}
        activeOpacity={0.7}
      >
        <View
          style={[
            styles.checkboxBox,
            btn && { borderColor: '#fff' },
            isChecked && styles.checkboxChecked,
          ]}
        >
          {isChecked && <Text style={styles.tickMark}>✓</Text>}
        </View>
        <Text
          style={[
            styles.textStyle,
            btn && { color: '#fff' },
            isChecked && { textDecorationLine: 'line-through', color: '#888' },
          ]}
        >
          {title}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={onDelete} activeOpacity={0.7}>
        <Ionicons name="close-outline" size={22} color={btn ? '#fff' : '#0e0d0d'} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  checkboxBox: {
    width: 20,
    height: 20,
    borderColor: '#423f3f',
    borderWidth: 2,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  checkboxChecked: {
    backgroundColor: '#423f3f',
  },
  tickMark: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  textStyle: {
    fontSize: 16,
    color: '#333',
  },
});

export default TodoItem;