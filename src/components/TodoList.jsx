import TodoItem from "./TodoItem";
import classes from './TodoList.module.css';

const TodoList = (props) => {
  return (
    <div className = {classes.container}>
      <ul>
        {props.todos.map((todo) => (
          <TodoItem key={todo.id} id={todo.id} title={todo.title} />
        ))}
      </ul>
    </div>
  );
};
export default TodoList;
