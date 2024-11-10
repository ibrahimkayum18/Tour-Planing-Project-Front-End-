import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

Main.propTypes = {};

export default Main;
