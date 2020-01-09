import React from 'react';
import TextField from '@material-ui/core/TextField';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import CancelIcon from '@material-ui/icons/Cancel';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

import useInputState from '../../../hooks/useInputState';

function TodoEdit ({id, editTodo, task, toggleEdit}) {
  const [value, handleChange, reset] = useInputState(task);
  return (
    <form 
      onSubmit={(e) => {
        e.preventDefault();
        editTodo(id, value);
        reset();
        toggleEdit();
      }}

      style={{ 
        marginLeft: "1rem",
        width: "50%"
      }}
    >
      <TextField 
        margin="normal"
        value={value}
        onChange={handleChange}
        fullWidth
        autoFocus
      />
      <ListItemSecondaryAction>
        <IconButton aria-label="Confirm" type="submit">
          <CheckCircleIcon />
        </IconButton>
        <IconButton aria-label="Cancel" onClick={toggleEdit} >
          <CancelIcon />
        </IconButton>
      </ListItemSecondaryAction>
 
    </form>
  );
}

export default TodoEdit;

