import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../AuthContex/AuthContex";

const ReplySection = ({ queryId }) => {
  const navigate = useNavigate(); // For navigation
  const { user } = useAuth(); // Get logged-in user
  const [replies, setReplies] = useState([]);
  const [newReply, setNewReply] = useState("");

  // Fetch replies when component mounts
  useEffect(() => {
    if (!queryId) return; // Prevents fetching if queryId is undefined

    fetch(`http://localhost:8000/reply/getRepliesByQueryId/${queryId}`, {
      method: "GET",
      credentials: "include",
    })
      .then((response) => response.json())
      .then((data) => setReplies(data))
      .catch((error) => console.error("Error fetching replies:", error));
  }, [queryId]); //  Runs only when queryId changes

  console.log(replies, queryId);

  // Function to submit a reply
  const handleReplySubmit = async () => {
    if (!newReply.trim()) return;

    const replyData = {
      queryId, //  Make sure this is passed correctly
      username: user.username, // Use logged-in user
      replyContent: newReply,
    };

    try {
      const response = await fetch("http://localhost:8000/reply/addReply", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(replyData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      //  Check if response has content before calling .json()
      const data =
        response.headers.get("content-length") > 0
          ? await response.json()
          : null;

      if (data) {
        console.log("Reply added:", data);
        setReplies([...replies, data]); //  Update the UI with the new reply
      } else {
        console.log("Reply submitted successfully but no data returned.");
      }

      setNewReply(""); //  Clear the input field after submission
    } catch (error) {
      console.error("Error submitting reply:", error);
    }
  };

  return (
    <div className="flex flex-col h-screen p-6 bg-gray-100">
      {/* Back Button */}
      <button
        onClick={() => navigate(0)}
        className="mb-4 px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition"
      >
        ← Back
      </button>

      <h2 className="text-2xl font-bold text-gray-800 mb-4">Replies</h2>

      {/* Reply List */}
      <div className="space-y-4">
        {replies.length > 0 ? (
          replies.map((reply, index) => (
            <div key={index} className="p-4 bg-white rounded shadow-md">
              <h3 className="font-semibold text-lg">{reply.username}</h3>
              <p className="text-gray-500">{reply.replyContent}</p>
              <p className="text-gray-400 text-sm">
                {new Date(reply.replyTime).toLocaleString()}
              </p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No replies yet.</p>
        )}
      </div>

      {/* Reply Input */}
      <form onSubmit={handleReplySubmit} className="mt-6">
        <textarea
          value={newReply}
          onChange={(e) => setNewReply(e.target.value)}
          placeholder="Write your reply..."
          className="w-full p-3 border rounded-lg"
          required
        />
        <button
          type="submit"
          className="mt-2 px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition"
        >
          Submit Reply
        </button>
      </form>
    </div>
  );
};

export default ReplySection;
