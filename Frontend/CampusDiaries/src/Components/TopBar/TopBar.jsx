import React from "react";


const TopBar = () => (
  <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md">
    <div className="flex items-center space-x-2">
      <input
        type="text"
        placeholder="Search..."
        className="w-80 border p-2 rounded"
      />
      <button className="bg-gray-800 text-white p-2 rounded">Search</button>
      <button className="border p-2 rounded">Add</button>
    </div>
  </div>
);
export default TopBar;
