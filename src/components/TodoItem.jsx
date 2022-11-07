const TodoItem = (props) => {
	return (
		<li className="todo-item">
			<h3>{props.title}</h3>
			<button>수정</button>
			<button>삭제</button>
		</li>
	)
}
export default TodoItem;