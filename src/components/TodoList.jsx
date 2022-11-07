const DUMMY_TODO_ITEMS = [
  { id: "t1", title: "Finish the course" },
  { id: "t2", title: "Learn all about the course main topic" },
  { id: "t3", title: "Help other students in the course Q&A" },
];

const TodoList = (props) => {
  let todoListContent;
  todoListContent = DUMMY_TODO_ITEMS.map((todo) => (
    <li key={todo.id}>{todo.title}</li>
  ));
  if (todoListContent.length === 0) {
    return <p>현재 목록이 비어있음</p>;
  }
  console.log(`DUMMY_TODO_ITEMS:::`, todoListContent);
  return (
    <div>
      <h1>Todos</h1>
      <ul>{todoListContent}</ul>
    </div>
  );
};
export default TodoList;
