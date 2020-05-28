import React, {useContext} from 'react';
import TextField from '@material-ui/core/TextField';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import CancelIcon from '@material-ui/icons/Cancel';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

import useInputState from '../../../hooks/useInputState';

import {DispatchContext} from '../../../context/todos.context';

function TodoEdit ({id, task, toggleEdit}) {
  const dispatch = useContext(DispatchContext);
  const [value, handleChange, reset] = useInputState(task);
  return (
    <form 
      onSubmit={(e) => {
        e.preventDefault();
        dispatch({type: "EDIT_TODO", id:id, newTask: value })
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

