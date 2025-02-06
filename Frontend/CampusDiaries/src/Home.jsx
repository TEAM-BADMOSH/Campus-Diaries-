import { Outlet } from "react-router-dom";
import Sidebar from "./Components/SideBar/Sidebar";

const Home = () => {
    return (
      <div className="flex">
        <Sidebar />
        {/* Main content area with margin */}
        <main className="flex-1 ml-64 p-4"> {/* Match sidebar width */}
          <Outlet />
        </main>
      </div>
    );
  };

export default Home;