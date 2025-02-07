import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  UserCircleIcon,
  ChartBarIcon,
  QuestionMarkCircleIcon,
  ArrowLeftOnRectangleIcon,
} from "@heroicons/react/24/outline";

import { useAuth } from "../AuthContex/AuthContex";

const Sidebar = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const handleLogout = async () => {
    try {
      const response = await fetch("http://localhost:8000/logout", {
        method: "POST",
        credentials: "include", // Ensures session cookie is sent
      });

      if (response.ok) {
        console.log("Logged out successfully");
        navigate("/login"); // Redirect to login
      } else {
        console.error("Logout failed");
      }
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };
  return (
    <div className="fixed left-0 top-0 h-screen w-64 bg-gray-800 p-4 text-white shadow-lg">
      {/* User Profile Section */}
      <div className="mb-8 flex items-center gap-3 border-b border-gray-700 pb-6">
        <UserCircleIcon className="h-10 w-10 text-gray-400" />
        <div>
          <h2 className="text-lg font-semibold">{user.name}</h2>
          <p className="text-sm text-gray-400">{user.username}</p>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="space-y-2">
        <NavLink
          to="/home/dashboard"
          className={({ isActive }) =>
            `flex items-center gap-3 rounded-lg p-3 transition-colors hover:bg-gray-700 ${
              isActive ? "bg-gray-900" : ""
            }`
          }
        >
          <ChartBarIcon className="h-6 w-6" />
          <span>Dashboard</span>
        </NavLink>

        <NavLink
          to="/home/query"
          className={({ isActive }) =>
            `flex items-center gap-3 rounded-lg p-3 transition-colors hover:bg-gray-700 ${
              isActive ? "bg-gray-900" : ""
            }`
          }
        >
          <QuestionMarkCircleIcon className="h-6 w-6" />
          <span>Query</span>
        </NavLink>
      </nav>

      {/* Logout Section */}
      <div className="absolute bottom-4 left-0 right-0 border-t border-gray-700 p-4">
        <button
          onClick={handleLogout}
          className="flex w-full items-center gap-3 rounded-lg p-3 transition-colors hover:bg-gray-700"
        >
          <ArrowLeftOnRectangleIcon className="h-6 w-6" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
