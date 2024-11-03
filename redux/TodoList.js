import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  Button, 
  FlatList, 
  StyleSheet,
  TouchableOpacity 
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { 
  addTodo, 
  toggleTodo, 
  deleteTodo,
  startEditing,
  updateTodo 
} from './todoSlice';
import { atom, useRecoilState } from 'recoil';

const filterState = atom({
  key: 'filterState',
  default: 'all'
});

export default function TodoList() {
  const [text, setText] = useState('');
  const [editText, setEditText] = useState('');
  const [filter, setFilter] = useRecoilState(filterState);
  
  const todos = useSelector(state => state.todos.items);
  const loading = useSelector(state => state.todos.loading);
  const editingId = useSelector(state => state.todos.editingId);
  const dispatch = useDispatch();

  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  const handleStartEdit = (todo) => {
    dispatch(startEditing(todo.id));
    setEditText(todo.text);
  };

  const handleUpdate = (id) => {
    if (editText.trim()) {
      dispatch(updateTodo({ id, text: editText.trim() }));
      setEditText('');
    }
  };

  const renderTodoItem = ({ item }) => {
    if (editingId === item.id) {
      return (
        <View style={styles.todoItem}>
          <TextInput
            style={styles.editInput}
            value={editText}
            onChangeText={setEditText}
            autoFocus
          />
          <View style={styles.editButtons}>
            <TouchableOpacity 
              style={styles.editButton}
              onPress={() => handleUpdate(item.id)}
            >
              <Text style={styles.buttonText}>✓</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[styles.editButton, styles.cancelButton]}
              onPress={() => dispatch(startEditing(null))}
            >
              <Text style={styles.buttonText}>✕</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }

    return (
      <View style={styles.todoItem}>
        <TouchableOpacity 
          style={styles.checkbox}
          onPress={() => dispatch(toggleTodo(item.id))}
        >
          <Text>{item.completed ? '☑' : '☐'}</Text>
        </TouchableOpacity>
        <Text 
          style={[
            styles.todoText, 
            item.completed && styles.completed
          ]}
          onPress={() => handleStartEdit(item)}
        >
          {item.text}
        </Text>
        <TouchableOpacity 
          style={styles.deleteButton}
          onPress={() => dispatch(deleteTodo(item.id))}
        >
          <Text style={styles.buttonText}>🗑</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={text}
          onChangeText={setText}
          placeholder="Add todo"
        />
        <Button 
          title={loading ? "Adding..." : "Add"}
          onPress={() => {
            if (text.trim()) {
              dispatch(addTodo(text.trim()));
              setText('');
            }
          }}
          disabled={loading}
        />
      </View>
      
      <View style={styles.filters}>
        <Button title="All" onPress={() => setFilter('all')} />
        <Button title="Active" onPress={() => setFilter('active')} />
        <Button title="Completed" onPress={() => setFilter('completed')} />
      </View>

      <FlatList
        data={filteredTodos}
        renderItem={renderTodoItem}
        keyExtractor={item => item.id.toString()}
        style={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 40,
    backgroundColor: '#f5f5f5',
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    marginRight: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  filters: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  list: {
    flex: 1,
  },
  todoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#fff',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 2,
  },
  checkbox: {
    marginRight: 10,
  },
  todoText: {
    flex: 1,
    fontSize: 16,
  },
  completed: {
    textDecorationLine: 'line-through',
    color: '#888',
  },
  editInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 8,
    marginRight: 10,
    borderRadius: 5,
  },
  editButtons: {
    flexDirection: 'row',
  },
  editButton: {
    padding: 8,
    marginHorizontal: 2,
    backgroundColor: '#4CAF50',
    borderRadius: 5,
  },
  cancelButton: {
    backgroundColor: '#f44336',
  },
  deleteButton: {
    padding: 8,
    backgroundColor: '#ff5252',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
  },
});