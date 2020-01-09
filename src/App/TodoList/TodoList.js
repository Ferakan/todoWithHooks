import React from 'react';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';

import Todo from './Todo/Todo';


function TodoList (props) {
  if (props.todos.length) 
    return (
      <Paper>
        <List>
          {props.todos.map((todo, i) => (
            <>
              <Todo 
                task={todo.task}
                id={todo.id} 
                key={todo.id} 
                completed={todo.completed} 
                removeTodo={props.removeTodo}
                toggleCompletion={props.toggleCompletion}
                editTodo={props.editTodo}
              />
              { i < props.todos.length - 1 && <Divider />}
            </>
          ))} 
        </List>
      </Paper>
    );
    return null;
}

export default TodoList;

