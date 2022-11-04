import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import Home, {
  action as newTodoAction,
  loader as newTodoLoader,
} from "./pages/Home";
import Error from "./pages/Error";

function App() {
  // 라우터 공급자에 보낼 라우터 생성/페이지 경로 설정
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/todos"
        element={<RootLayout />}
        errorElement={<Error />}
      >
        <Route
          index
          element={<Home />}
          action={newTodoAction}
          loader={newTodoLoader}
        />
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
