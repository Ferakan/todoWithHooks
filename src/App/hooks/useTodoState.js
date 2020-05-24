import useLocalStorageState from './useLocalStorageState';
import uuid from "uuid/v4";

export default initialTodos => {
  
  const [todos, setTodos] = useLocalStorageState("todos", initialTodos);

  return {
    todos,
    addTodo: newTodoText => {
      setTodos([...todos, {id: uuid(), task: newTodoText, completed: false}]);
    },
    removeTodo: todoId => {
      const updatedTodo = todos.filter(todo => todo.id !== todoId);
      setTodos(updatedTodo);
    },
    toggleCompletion: todoId => {
      const todoCompleted = todos.map(todo => 
        todo.id === todoId ? {...todo, completed: !todo.completed} : todo
      );
      setTodos(todoCompleted);
    },
    editTodo: (todoId, newTask) => {
      const updateTodo = todos.map(todo => 
        todo.id === todoId ? {...todo, task: newTask} : todo 
      );
      setTodos(updateTodo);
    }
  };
};