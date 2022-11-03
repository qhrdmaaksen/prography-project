import logo from './logo.svg';
import './App.css';
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom';
import MainNavigation from "./components/MainNavigation";
import WelcomePage from "./components/WelcomePage";
import RootLayout from "./pages/RootLayout";

function App() {
  // 라우터 공급자에 보낼 라우터 생성/페이지 경로 설정
  const router = createBrowserRouter(createRoutesFromElements(
      <Route path="/" element={<RootLayout/>}>
        <Route index element={<WelcomePage/>}/>
      </Route>
  ))

  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
