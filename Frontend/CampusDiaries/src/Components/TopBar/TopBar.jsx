import React, { useState } from "react";
import { useAuth } from "../AuthContex/AuthContex";

const TopBar = ({ onQueryAdded }) => {
  const [queryContent, setQueryContent] = useState("");
  const { user } = useAuth();

  const handleAddQuery = async () => {
    if (!queryContent.trim()) {
      alert("Query content cannot be empty!");
      return;
    }

    const newQuery = {
      username: user.username, // Get current logged-in user
      queryContent: queryContent,
    };

    try {
      const response = await fetch("http://localhost:8000/query/createQuery", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(newQuery),
      });

      if (!response.ok) {
        throw new Error("Failed to add query");
      }

      alert("Query added successfully!");
      setQueryContent(""); // Clear input after submission

      // Notify parent to refresh queries
      if (onQueryAdded) {
        onQueryAdded();
      }
    } catch (error) {
      console.error("Error adding query:", error);
      alert("Failed to add query. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md">
      <div className="flex items-center space-x-2">
        <input
          type="text"
          placeholder="Enter your query..."
          className="w-80 border p-2 rounded"
          value={queryContent}
          onChange={(e) => setQueryContent(e.target.value)}
        />
        <button className="bg-gray-800 text-white p-2 rounded">Search</button>
        <button onClick={handleAddQuery} className="border p-2 rounded text-gray-900">
          Add
        </button>
      </div>
    </div>
  );
};

export default TopBar;
