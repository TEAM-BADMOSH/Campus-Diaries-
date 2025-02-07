import React, { useEffect } from "react";
import { useState } from "react";
import QueryCard from "../QueryCard/QueryCard";
import { useAuth } from "../AuthContex/AuthContex";
import ReplySection from "../ReplyPage/ReplySection";

function DashBoard() {
  const [userQueries, setUserQueries] = useState([]);
  const [selectedQueryId, setSelectedQueryId] = useState(null);
  const { user } = useAuth();
  useEffect(() => {
    fetch(`http://localhost:8000/query/getQueriesByUsername/${user.username}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((response) => response.json())
      .then((data) => setUserQueries(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  const handleDeleteQuery = (queryId) => {
    fetch(`http://localhost:8000/query/deleteQuery/${queryId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to delete query");
        }
        return response.json();
      })
      .then(() => {
        // Remove the deleted query from the state
        setUserQueries((prevQueries) =>
          prevQueries.filter((query) => query.queryId !== queryId)
        );
      })
      .catch((error) => console.error("Error deleting query:", error));
  };
  
  return (
    <div className="flex h-screen">
      <div className="flex-1 flex flex-col p-6 space-y-6 bg-gray-100">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-800">Your Queries</h2>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-500">
              Total Queries: {userQueries.length}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {userQueries.length > 0 ? (
            userQueries.map((query, index) => (
              <QueryCard
                username={query.username}
                content={query.queryContent}
                date={query.queryTime}
                showDeleteButton={true}
                onDelete={() => handleDeleteQuery(query.queryId)}
                onClick={() => {
                  setSelectedQueryId(query.queryId)}}
              />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-500 text-lg">
                No queries found. Start by creating a new query!
              </p>
            </div>
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

export default DashBoard;
