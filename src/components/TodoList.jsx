import TodoItem from "./TodoItem";
import classes from './TodoList.module.css';

const TodoList = (props) => {
  return (
    <div className = {classes.container}>
      <ul>
          <TodoItem key={props.id} id={props.id} title={props.title} />
      </ul>
    </div>
  );
};
export default TodoList;
