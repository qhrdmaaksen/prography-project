import TodoForm from "../components/TodoForm";
import { getTodos, saveTodo } from "../api/api";
import {useActionData, useLoaderData} from "react-router-dom";
import TodoItem from "../components/TodoItem";

const Home = () => {
  const post = useActionData()
  const loadTodos = useLoaderData();
  console.log(loadTodos)

  return (
    <>
      {post && post.isError && <p>{post.message}</p>}
      <h2>Todos</h2>
      <TodoForm />
      <TodoItem todosData={loadTodos} />
    </>
  );
};
export default Home;

export const action = async ({ request }) => {
  const formData = await request.formData();
  console.log('Home action formData',formData)
  const post = {
    id: formData.get("id"),
    title: formData.get("title"),
  };
  try {
    await saveTodo(post);
  } catch (err) {
    if (err.status === 422) {
      return err;
    }
    throw err;
  }
};

export const loader = ({params}) => {
  const todoId = params.id
  return getTodos(todoId);
};
