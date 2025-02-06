import React from 'react'

function QueryCard({username , content, date}) {
  return (
    <div className="p-4 bg-white rounded shadow-md">
    <h3 className="text-lg font-semibold">{username}</h3>
    <p className="text-gray-500">{content}</p>
    <p className='text-gray-300'>{date}</p>
  </div>
  )
}


export default QueryCard