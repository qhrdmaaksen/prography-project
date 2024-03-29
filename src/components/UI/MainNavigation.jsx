import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";

export const MainNavigation = () => {
  return (
    <div className={classes.container}>
      <header className={classes.header}>
        <nav>
          <ul>
            <li className={classes.navHomeName}>
              <span>프로그라피 프론트 김민우</span>
            </li>
            <li className={classes.navTodo}>
              <NavLink to="/">Todo</NavLink>
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
