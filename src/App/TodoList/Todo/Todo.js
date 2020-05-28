import React, {useContext, memo} from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import CheckBox from '@material-ui/core/CheckBox';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

import TodoEdit from './TodoEdit/TodoEdit';
import useToggleState from '../../hooks/useToggleState';

import { DispatchContext } from '../../context/todos.context';

function Todo (props) {
  const dispatch = useContext(DispatchContext);
  const [isEditing, toggle] = useToggleState(false);
  return (
    <div>
      <ListItem style={{height: "64px"}} >
        { isEditing ? (
          <TodoEdit 
            id={props.id}
            task={props.task}
            toggleEdit={toggle}
          />
          ) : (
            <>
              <CheckBox 
                checked={props.completed} 
                onClick={() => dispatch({type: "TOGGLE_TODO", id: props.id })} 
              />
              <ListItemText 
                style={{ textDecoration: props.completed ? "line-through" : "none" }}
              >
                {props.task}
              </ListItemText>
              <ListItemSecondaryAction>
                <IconButton aria-label="Delete" onClick={() => dispatch({type: "REMOVE_TODO", id: props.id})} >
                  <DeleteIcon />
                </IconButton>
                <IconButton aria-label="Edit"  onClick={toggle} >
                  <EditIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </>
          )
        }
      </ListItem>
    </div>
  );
}

export default memo(Todo);

