import React from "react";
import { Trash2, MessageSquare } from "lucide-react";
import { formatDate } from "../utils/dateFormatter";

function QueryCard({
  username,
  content,
  date,
  showDeleteButton,
  onDelete,
  onClick,
}) {
  return (
    <div
      className="p-4 bg-white rounded shadow-md relative cursor-pointer hover:shadow-lg transition"
      onClick={onClick} // Click event to open replies
    >
      <div className="flex justify-between items-start">
        <h3 className="text-lg font-semibold">{username}</h3>
        {showDeleteButton && (
          <button
            onClick={(event) => {
              event.stopPropagation(); //Stops click from affecting the parent
              onDelete(); // Calls the delete function
            }}
            className="text-red-500 hover:text-red-700 transition"
          >
            <Trash2 size={20} />
          </button>
        )}
      </div>
      <p className="text-gray-500">{content}</p>
      <p className="text-gray-300">{formatDate(date)}</p>

      {/* Reply Icon */}
      <div className="mt-2 flex items-center text-blue-500">
        <MessageSquare size={16} />
        <span className="ml-1 text-sm">View Replies</span>
      </div>
    </div>
  );
}

export default QueryCard;
