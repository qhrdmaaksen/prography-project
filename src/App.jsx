import "./App.css";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {Todos, Movie} from "./pages";
import Layout from "./components/UI/Layout";
import {useEffect} from "react";
import {sendTodoData} from "./store/todo-actions";
import {useDispatch, useSelector} from "react-redux";



function App() {




  return (
    <Router>
      <Layout>
        <main>
          <Routes>
            <Route path="/" element={<Todos />}></Route>
            <Route path="/movie" element={<Movie />} exact></Route>
          </Routes>
        </main>
      </Layout>
    </Router>
  );
}

export default App;
