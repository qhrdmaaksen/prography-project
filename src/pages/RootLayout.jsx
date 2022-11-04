import MainNavigation from "../components/MainNavigation";
import { Outlet } from "react-router-dom";

// 최상위 레이아웃으로 해당 레이아웃을 사용하는 모든 페이지들은 이 레이아웃을 사용하게 된다.
const RootLayout = () => {
  return (
    <>
      <MainNavigation />
      <Outlet />
    </>
  );
};

export default RootLayout;
