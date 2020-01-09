import React, {useState, useEffect} from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/ToolBar';
import Grid from '@material-ui/core/Grid';
import uuid from "uuid/v4";

import TodoList from '../TodoList/TodoList';
import TodoForm from '../TodoForm/TodoForm';


function TodoApp () {
  const initialTodos = JSON.parse(window.localStorage.getItem("todos") || "[]");

  const [todos, setTodos] = useState(initialTodos);

  useEffect(() => {
    window.localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = newTodoText => {
    setTodos([...todos, {id: uuid(), task: newTodoText, completed: false}]);
  }

  const removeTodo = todoId => {
    const updatedTodo = todos.filter(todo => todo.id !== todoId);
    setTodos(updatedTodo);
  };

  const toggleCompletion = todoId => {
    const todoCompleted = todos.map(todo => 
      todo.id === todoId ? {...todo, completed: !todo.completed} : todo
    );
    setTodos(todoCompleted);
  };

  const editTodo = (todoId, newTask) => {
    const updateTodo = todos.map(todo => 
      todo.id === todoId ? {...todo, task: newTask} : todo 
    );
    setTodos(updateTodo);
  };

  return (
    <Paper 
      style={{
        padding: 0,
        margin: 0,
        height: "100vh",
        backgroundColor: "#fafafa"
      }}
      elevation={0}
    >
      <AppBar color='primary' position='static' style={{ height: "64px" }} >
        <ToolBar>
          <Typography color='inherit'  > 
            TODO WITH HOOKS
          </Typography>
        </ToolBar>
      </AppBar>
      <Grid container justify="center" style={{marginTop: '1rem'}}>
        <Grid item xs={11} md={8} lg={4} >
          <TodoForm addTodo={addTodo} />
          <TodoList 
            todos={todos} 
            removeTodo={removeTodo}
            toggleCompletion={toggleCompletion}
            editTodo={editTodo} 
          />
        </Grid>
      </Grid>

    </Paper>
  );
}

export default TodoApp;

