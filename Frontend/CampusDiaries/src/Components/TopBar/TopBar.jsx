import React from "react";
import { Search } from "lucide-react";

const TopBar = () => (
  <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md">
    <div className="flex items-center space-x-2">
      <Search className="text-gray-500 cursor-pointer" />
      <input
        type="text"
        placeholder="Search..."
        className="w-80 border p-2 rounded"
      />
      <button className="bg-blue-500 text-white p-2 rounded">Search</button>
      <button className="border p-2 rounded">Add</button>
    </div>
  </div>
);
export default TopBar;
