import React, { useEffect } from "react";
import { useState } from "react";
import QueryCard from "../QueryCard/QueryCard";
import { useAuth } from "../AuthContex/AuthContex";

function DashBoard() {
  const [userQueries, setUserQueries] = useState([]);
  const { user } = useAuth();
  useEffect(() => {
    fetch(`http://localhost:8000/query/getQueriesByUsername/${user.username}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      credentials: "include",
    })
      .then((response) => response.json())
      .then((data) => setUserQueries(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
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
    </div>
  );
}

export default DashBoard;
