import React from 'react'

const PostCard = ({myData}) => {
    const { title, body, id } = myData;
  return (
    <div className="card">
      <div className="card-info">
        <p className="card-id">{id}</p>
        <p>{body}</p>
        <h2>{title}</h2>
      </div>
    </div>
  )
}

export default PostCard