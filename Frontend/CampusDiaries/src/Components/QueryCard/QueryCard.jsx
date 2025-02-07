import React from 'react'
import { Trash2 } from 'lucide-react'
import { formatDate } from '../utils/dateFormatter'
function QueryCard({username , content, date,showDeleteButton , onDelete}) {
  return (
    <div className="p-4 bg-white rounded shadow-md relative">
      <div className="flex justify-between items-start">
        <h3 className="text-lg font-semibold">{username}</h3>
        {showDeleteButton && (<button onClick={onDelete} className="text-red-500 hover:text-700 transition-colors">
          <Trash2 size={20} />
          </button>)}
      </div>
    <p className="text-gray-500">{content}</p>
    <p className='text-gray-300'>{formatDate(date)}</p>
  </div>
  )
}


export default QueryCard