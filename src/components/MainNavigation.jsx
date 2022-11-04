import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <div className={classes.container}>
      <header className={classes.header}>
        <nav>
          <ul>
            <li className={classes.navHomeName}>
              프로그라피 프론트 김민우
            </li>
            <li className={classes.navTodo}>
              <NavLink to="/todos">Todo</NavLink>
            </li>
            <li>
              <NavLink to="/movie">영화</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};
export default MainNavigation;
