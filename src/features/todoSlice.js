import {createSlice } from '@reduxjs/toolkit';


const initialState = {
  todos: [],
  filter: 'all',//all,complete,incomplete
};



export const todoSlice = createSlice({
  name:'todos',
  initialState,
  reducers:{
    addTodo:(state,action) => {
      state.todos.push(action.payload)
    },
    completeTodo:(state,action) => {
      state.todos.map((todo) => (todo.id === action.payload[0].id ? todo.check = !todo.check:console.log('miss')))
    },
    removeTodo: (state,action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload[0].id);
    },
    changeFilter:(state,action) => {
      state.filter = action.payload
    }
  }
});

export const {addTodo,completeTodo,editTodo,removeTodo,changeFilter} = todoSlice.actions 
export default todoSlice.reducer
