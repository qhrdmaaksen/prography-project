import { Form } from "react-router-dom";
import classes from "./TodoForm.module.css";

const TodoForm = () => {
  return (
    <Form method="post" action="/todos">
      <div>
        <input id="title" type="text" name="title" required minLength={1} />
      </div>
      <button className={classes.todoInputBTN}>추가</button>
    </Form>
  );
};
export default TodoForm;
