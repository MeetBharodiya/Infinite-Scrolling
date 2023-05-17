import React from 'react'
import PostCard from '../PostCard/PostCard';

const Postscomponent = ({postInfo}) => {
  return (
    <div className="wrapper">
      <div className="container">
        <h1>List of POSTS</h1>
        <div className="grid grid-three-column">
          {postInfo?.map((curVal, id) => {
            return <PostCard key={id} myData={curVal} />;
          })}
        </div>
      </div>
    </div>
  )
}

export default Postscomponent