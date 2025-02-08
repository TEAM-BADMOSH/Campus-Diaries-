import React, { useEffect, useState } from "react";
import QueryCard from "../QueryCard/QueryCard";
import ReplySection from "../ReplyPage/ReplySection";
import { useAuth } from "../AuthContex/AuthContex";

export default function QueryPage() {
  const [queryData, setQueryData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedQueryId, setSelectedQueryId] = useState(null);
  const [queryContent, setQueryContent] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const { user } = useAuth();

  useEffect(() => {
    fetch("http://localhost:8000/query/getAllQueries", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    })
      .then((response) => response.json())
      .then((data) => {
        setQueryData(data);
        setFilteredData(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

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
      setFilteredData(data);
      setIsSearching(true);
    } catch (error) {
      console.error("Search error:", error);
      alert("Error fetching search results.");
    }
  };

  const handleBack = () => {
    setFilteredData(queryData);
    setIsSearching(false);
    setQueryContent("");
  };

  const handleAddQuery = async () => {
    if (!queryContent.trim()) {
      alert("Query content cannot be empty!");
      return;
    }

    if (isSearching) {
      handleSearch();
      return;
    }

    const newQuery = {
      username: user.username,
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
      setQueryContent("");

      fetch("http://localhost:8000/query/getAllQueries", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      })
        .then((response) => response.json())
        .then((data) => {
          setQueryData(data);
          setFilteredData(data);
        })
        .catch((error) => console.error("Error fetching data:", error));
    } catch (error) {
      console.error("Error adding query:", error);
      alert("Failed to add query. Please try again.");
    }
  };

  return (
    <div className="flex h-screen">
      <div className="flex-1 flex flex-col p-6 space-y-6 bg-gray-100">
        {/* Search and Add Query */}
        <div className="flex items-center space-x-2 mb-4">
          <input
            type="text"
            placeholder="Enter query or search..."
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
          <button
            onClick={handleAddQuery}
            className="border-2 border-black text-gray p-2 rounded"
          >
            Add Query
          </button>
          {isSearching && (
            <button
              onClick={handleBack}
              className="bg-red-500 text-white p-2 rounded"
            >
              Back
            </button>
          )}
        </div>

        {/* Query List */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {filteredData.length > 0 ? (
            filteredData.map((item, i) => (
              <QueryCard
                key={i}
                username={item.username}
                content={item.queryContent}
                date={item.queryTime}
                onClick={() => setSelectedQueryId(item.queryId)}
                showDeleteButton={false}
              />
            ))
          ) : (
            <p className="text-center col-span-full">No results found.</p>
          )}
        </div>
      </div>

      {/* Reply Section */}
      {selectedQueryId && (
        <div className="w-1/3 p-4 bg-white border-l">
          <ReplySection queryId={selectedQueryId} />
        </div>
      )}
    </div>
  );
}
