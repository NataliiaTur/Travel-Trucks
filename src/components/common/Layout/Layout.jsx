import { Outlet } from "react-router-dom";
import Navigation from "../../Navigation/Navigation.jsx";

function Layout() {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
}
export default Layout;

