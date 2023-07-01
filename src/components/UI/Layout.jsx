/*Layout component 를 사용하는 모든 컴포넌트에 네비게이션 출력토록할 컴포넌트*/
import classes from "./Layout.module.css";
import MainNavigation from "./MainNavigation";

export const Layout = (props) => {
  return (
    <div>
      <MainNavigation />
      <div className={classes.container}>
        <main>
          <div className={classes.mainTitle}>
            <span>Todos</span>
          </div>
          <div className={classes.mainCard}>{props.children}</div>
        </main>
      </div>
    </div>
  );
};
