import React, { useEffect, useState } from "react";
import QueryCard from "../QueryCard/QueryCard";
import ReplySection from "../ReplyPage/ReplySection";
import TopBar from "../TopBar/TopBar";

export default function QueryPage() {
  const [queryData, setQueryData] = useState([]);
  const [selectedQueryId, setSelectedQueryId] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/query/getAllQueries", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    })
      .then((response) => response.json())
      .then((data) => setQueryData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  return (
    <div className="flex h-screen">
      {/* Query List */}
      <div className="flex-1 flex flex-col p-6 space-y-6 bg-gray-100">
        <TopBar />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {queryData.length > 0 ? (
            queryData.map((item, i) => (
              <QueryCard
                key={i}
                username={item.username}
                content={item.queryContent}
                date={item.queryTime}
                onClick={() => setSelectedQueryId(item.queryId)} // Open reply section
                showDeleteButton={false}
              />
            ))
          ) : (
            <p className="text-center col-span-full">Loading...</p>
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
