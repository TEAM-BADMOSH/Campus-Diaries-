import React, { useEffect, useState } from "react";
import QueryCard from "../QueryCard/QueryCard";
import TopBar from "../TopBar/TopBar";

export default function Querypage() {
  const [queryData, setQueryData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/query/getAllQueries", {
      method: "GET",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      credentials: "include",
    })
      .then((response) => response.json())
      .then((data) => setQueryData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="flex h-screen">
      <div className="flex-1 flex flex-col p-6 space-y-6 bg-gray-100 ">
        {" "}
        <TopBar />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {queryData.length > 0 ? (
            queryData.map((item, i) => (
              <QueryCard
                key={i}
                username={item.username}
                content={item.queryContent}
              />
            ))
          ) : (
            <p className="text-center col-span-full">Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
}
