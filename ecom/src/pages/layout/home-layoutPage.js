import { Outlet } from "react-router-dom";
import CustomComponent from "../../components";
const HomeLayout = () => {
  return (
    <>
      <CustomComponent.MenuComponent />
      <Outlet />
      <CustomComponent.HomePageFooterComponent />
    </>
  );
}
export default HomeLayout