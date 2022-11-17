export const sendTodoData = (todo) => {
	return async (dispatch) => {
		console.log("sendRequest 호출 :::");
		console.log(todo.item.title);
		// 전송 요청
		const response = await fetch(
				"https://prography-project-default-rtdb.firebaseio.com/todos.json",
				{
					method: "POST",
					body: JSON.stringify({
						title: todo.item.title,
					}),
				}
		);
		console.log(response);
		if (!response.ok) {
			throw new Error("todo data 전송 중 오류 발생");
		} else {
			return response.json();
		}
	}
}