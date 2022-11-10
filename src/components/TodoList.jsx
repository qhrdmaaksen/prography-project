import TodoItem from "./TodoItem";
import classes from './TodoList.module.css';

const TodoList = (props) => {
  return (
    <section className = {classes.container}>
      <ul>
        {props.todos.map((todo) => (
          <TodoItem key={todo.id} id={todo.id} title={todo.title} />
        ))}
      </ul>
    </section>
  );
};
export default TodoList;
