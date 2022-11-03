import {NavLink} from 'react-router-dom';
import classes from './MainNavigation.module.css';

const MainNavigation = () => {
	return (
			<header className={classes.header}>
				<nav>
					<ul>
						<li className={classes.navHomeName}>
							<NavLink to="/">프로그라피 프론트 김민우</NavLink>
						</li>
						<li className={classes.navTodo}>
							<NavLink to="/todo">Todo</NavLink>
						</li>
						<li>
							<NavLink to="/movie">영화</NavLink>
						</li>
					</ul>
				</nav>
			</header>
	)
}
export default MainNavigation;