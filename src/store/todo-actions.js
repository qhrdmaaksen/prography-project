export const sendTodoData = (todo) => {
	const sendRequest = async () => {
		console.log("sendRequest 호출 :::");
		// 전송 요청
		const response = await fetch(
				"https://prography-project-default-rtdb.firebaseio.com/todos.json",
				{
					method: "POST",
					body: JSON.stringify({
						title: todo.title,
					}),
				}
		);
		if (!response.ok) {
			throw new Error("todo data 전송 중 오류 발생");
		} else {
			return response.json();
		}
	}
}
