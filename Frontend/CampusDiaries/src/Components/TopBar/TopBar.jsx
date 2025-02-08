import React, { useState } from "react";
import { useAuth } from "../AuthContex/AuthContex";

const TopBar = ({ onQueryAdded, onSearchResults }) => {
  const [queryContent, setQueryContent] = useState("");
  const { user } = useAuth();
  const [searchQuery, setSearchQuery] = useState("");

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

  const handleSearch = async () => {
    if (!queryContent.trim()) {
      alert("Please enter text to search!");
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:8000/query/${queryContent}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch search results");
      }

      const data = await response.json();
      setSearchQuery(data);
    } catch (error) {
      console.error("Search error:", error);
      alert("Error fetching search results.");
    }
  };
  console.log(searchQuery);

  return (
    <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md">
      {/* Search Input */}
      <div className="flex items-center space-x-2 mb-4">
        <input
          type="text"
          placeholder="Search queries..."
          className="w-80 border p-2 rounded"
          value={queryContent}
          onChange={(e) => setQueryContent(e.target.value)}
        />
        <button
          onClick={handleSearch}
          className="bg-gray-800 text-white p-2 rounded"
        >
          Search
        </button>
      </div>

      {/* Search Results */}
      <div className="w-full max-w-2xl">
        {searchQuery.length > 0 ? (
          <ul className="bg-gray-100 p-4 rounded-lg shadow-md">
            {searchQuery.map((query) => (
              <li key={query.id} className="border-b py-2">
                <p className="font-semibold">{query.queryContent}</p>
                <p className="text-sm text-gray-500">by {query.username}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500 text-sm mt-2">No search results found.</p>
        )}
      </div>
    </div>
  );
};

export default TopBar;
