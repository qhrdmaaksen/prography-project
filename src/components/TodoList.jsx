import TodoItem from "./TodoItem";

const TodoList = (props) => {
  return (
    <section>
      <ul>
        {props.todos.map((todo) => (
          <TodoItem key={todo.id} id={todo.id} title={todo.title} />
        ))}
      </ul>
    </section>
  );
};
export default TodoList;
