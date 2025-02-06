import React, { useEffect, useState } from "react";
import { Search, Settings, User } from "lucide-react";

const Sidebar = () => (
  <div className="w-64 bg-gray-900 text-white p-4 flex flex-col gap-4">
    <h2 className="text-xl font-bold">Dashboard</h2>
    <nav className="flex flex-col gap-2">
      {["Home", "Profile", "Settings"].map((item) => (
        <a key={item} href="#" className="p-2 rounded hover:bg-gray-700">
          {item}
        </a>
      ))}
    </nav>
  </div>
);

const TopBar = () => (
  <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md">
    <div className="flex items-center space-x-2">
      <Search className="text-gray-500 cursor-pointer" />
      <input type="text" placeholder="Search..." className="w-80 border p-2 rounded" />
      <button className="bg-blue-500 text-white p-2 rounded">Search</button>
      <button className="border p-2 rounded">Add</button>
    </div>
  </div>
);

const QueryCard = ({ title, content }) => (
  <div className="p-4 bg-white rounded shadow-md">
    <h3 className="text-lg font-semibold">{title}</h3>
    <p className="text-gray-500">{content}</p>
  </div>
);

export default function Querypage() {
  const [data, setData] = useState([
    {
      "username": "Aaditya",
      "query": "How do I recover my lost password?"
    },
    {
      "username": "Sahil",
      "query": "What's the best way to prepare for an interview?"
    },
    {
      "username": "Sanyam",
      "query": "Can you recommend any good productivity apps?"
    },
    {
      "username": "Akash",
      "query": "What are some good exercises for building core strength?"
    },
    {
      "username": "Pawan",
      "query": "How can I improve my time management skills?"
    },
    {
      "username": "Amber",
      "query": "Where can I find budget-friendly travel destinations?"
    },
    {
      "username": "Chandan",
      "query": "What are the latest trends in web design?"
    },
    {
      "username": "hexwiz",
      "query": "How do I fix my internet connection issues?"
    },
    {
      "username": "evil sahil",
      "query": "Can you recommend a good book for learning Python?"
    },
    {
      "username": "Akash kumar chand",
      "query": "What’s the difference between vegan and vegetarian diets?"
    }
  ]
  );

//   useEffect(() => {
//     fetch("https://api.example.com/queries") // Replace with actual API URL
//       .then((response) => response.json())
//       .then((data) => setData(data))
//       .catch((error) => console.error("Error fetching data:", error));
//   }, []);

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col p-6 space-y-6 bg-gray-100">
        <TopBar />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {data.length > 0 ? (
            data.map((item, i) => <QueryCard key={i} title={item.username} content={item.query} />)
          ) : (
            <p className="text-center col-span-full">Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
}
