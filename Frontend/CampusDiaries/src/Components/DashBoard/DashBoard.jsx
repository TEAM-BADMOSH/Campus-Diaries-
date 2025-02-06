import React from 'react'
import { useState } from 'react';
import QueryCard from '../QueryCard/QueryCard';

function DashBoard() {
  const [userQueries, setUserQueries] = useState([
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
      }
    ]
    );
    return (
      <div className="flex h-screen">
        <div className="flex-1 flex flex-col p-6 space-y-6 bg-gray-100">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-gray-800">Your Queries</h2>
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-500">Total Queries: {userQueries.length}</span>
            </div>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {userQueries.length > 0 ? (
              userQueries.map((query, index) => (
                <QueryCard 
                  username={query.username}
                  content={query.query}
                  date={query.date}
                />
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-gray-500 text-lg">No queries found. Start by creating a new query!</p>
              </div>
            )}
          </div>
        </div>
      </div>
    );
}

export default DashBoard