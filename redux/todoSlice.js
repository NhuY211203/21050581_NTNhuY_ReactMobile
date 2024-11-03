import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: { items: [], loading: false, editingId: null },
  reducers: {
    addTodo: (state, action) => {
      state.items.push({ id: Date.now(), text: action.payload, completed: false });
    },
    toggleTodo: (state, action) => {
      const todo = state.items.find(item => item.id === action.payload);
      if (todo) todo.completed = !todo.completed;
    },
    deleteTodo: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    startEditing: (state, action) => {
      state.editingId = action.payload;
    },
    updateTodo: (state, action) => {
      const { id, text } = action.payload;
      const todo = state.items.find(item => item.id === id);
      if (todo) todo.text = text;
      state.editingId = null;
    }
  }
});

export const { 
  addTodo, 
  toggleTodo, 
  deleteTodo, 
  setLoading,
  startEditing,
  updateTodo 
} = todoSlice.actions;
export default todoSlice.reducer;