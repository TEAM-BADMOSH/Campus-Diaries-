import { Outlet } from "react-router-dom";
import Sidebar from "./Components/SideBar/Sidebar";

const Home = () => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 ml-64 p-4">
        <Outlet />
      </main>
    </div>
  );
};

export default Home;
