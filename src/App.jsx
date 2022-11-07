import "./App.css";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Todos from "./pages/Todos";
import Movie from "./pages/Movie";
import MainNavigation from "./components/MainNavigation";

function App() {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Routes>
          <Route path="/" element={<Todos />}></Route>
          <Route path="/movie" element={<Movie />} exact></Route>
        </Routes>
      </main>
    </Router>
  );
}

export default App;
