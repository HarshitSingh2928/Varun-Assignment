import React from 'react'
import './Feed.css'
import TextBox from './TextBox'
import Post from './posts/Post'
const Feed = () => {
  return (
    <div className='feed'>
    <div className='postBox'>
      
      <h2>Feed</h2>
      <TextBox/>
    </div>
   <Post/>
    </div>
  )
}

export default Feed