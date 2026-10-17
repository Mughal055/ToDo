import React, { useState, useContext, useEffect } from 'react';
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
import TodoItem from './component/TodoItem';
import { themeContext } from './appContext/AppContext';
import { deleteNotes, getAllNotes } from '../src/Database/Models'
import { addNotes } from '../src/Database/Models';
import useMovies from './Movies'

const Todo = () => {
  const { theme } = useContext(themeContext);
  const {getData} = useMovies()

  useEffect(() => {
    loadNotes()
  }, [])

  const [data, setData] = useState('');
  const [tasks, setTasks] = useState(['This is my Task']);
  const [Notes, setNotes] = useState([])

  const loadNotes = async () => {
    const data = await getAllNotes()
    setNotes(data)
  }

  const addText = async () => {
    if (data.trim() !== '') {
      await addNotes(data, 'pending')
      setData('');
      await loadNotes()
    }
  };

  const deleteTask = async id => {
    // setNotes(Notes.filter((_, index) => index !== indexToDelete));
    await deleteNotes(id)
    await loadNotes()
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.background }}>
      <View style={{ flex: 1, marginHorizontal: 20, marginVertical: 30 }}>
        <Text
          style={{
            fontSize: 30,
            fontWeight: 'bold',
            marginBottom: 20,
            color: theme.text,
          }}
        >
          Your To Do
        </Text>

        <View
          style={{
            flexDirection: 'row',
            backgroundColor: theme.cardBg,
            borderRadius: 10,
            alignItems: 'center',
            paddingHorizontal: 15,
            justifyContent: 'space-between',
            marginBottom: 10,
          }}
        >
          <TextInput
            placeholder="Add new task"
            placeholderTextColor={theme.placeholder}
            style={{
              flex: 1,
              height: 50,
              fontSize: 16,
              color: theme.text,
            }}
            value={data}
            onChangeText={text => setData(text)}
          />
          <TouchableOpacity onPress={addText} style={{ padding: 5 }}>
            <Ionicons name="add" size={32} color={theme.icon} />
          </TouchableOpacity>
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          {(Notes ?? []).map((task, index) => (
            <TodoItem
              key={task.id}
              title={task.title}
              onDelete={() => deleteTask(task.id)}
            />
          ))}
        </ScrollView>

        <View>
          <Text
            style={{
              fontSize: 20,
              fontWeight: '500',
              color: theme.text,
            }}
          >
            Your todos : {(Notes ?? []).length}
          </Text>
          <Text
            style={{
              fontSize: 15,
              fontWeight: '300',
              color: theme.subText,
            }}
          >
            "Doing what you have the conversation of having in your life."
          </Text>
        </View>
      </View>
    </SafeAreaView>
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

export default Todo;