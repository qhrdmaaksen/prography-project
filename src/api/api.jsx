export const getTodos = async() => {
	const response = await fetch('https://prography-project-default-rtdb.firebaseio.com/todos.json')
	if(!response.ok) {
		throw { message : '데이터를 불러오는데 실패했습니다.', status: 500};
	}
	return response.json();
}

export const saveTodo = async(post) =>{
	if(post.title.trim().length < 1) {
		return { isError: true, message: '제목을 입력해주세요.', status:422};
	}
	const response = await fetch('https://prography-project-default-rtdb.firebaseio.com/todos.json',
			{
				method: 'POST',
				body: JSON.stringify(post),
				headers: {
					'Content-Type': 'application/json'
				}
			})
	if(!response.ok){
		throw {message: '데이터를 저장하는데 실패했습니다.', status: 500};
	}
}