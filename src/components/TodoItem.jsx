const TodoItem = ({ todosData }) => {
  return (
    <main>
      <h1>Todos</h1>
      <ul>
        {todosData.map((todo) => (
          <li key={todo.id}>
            <h3>{todo.title}</h3>
          </li>
        ))}
      </ul>
      <button>수정</button>
      <button>삭제</button>
    </main>
  );
};
export default TodoItem;
