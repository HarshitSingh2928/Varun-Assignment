import React from 'react'
import PostCard from './PostCard'
import './Post.css'
import Weekly from '../Weekly'
import { useDispatch, useSelector } from 'react-redux'
const Post = () => {
  
  return (
    <div className='post'>
      <h3>Posts</h3>
      <div>
        <div>
        
        <PostCard/>
        </div>
    
    <Weekly/>
    </div>
    </div>
  )
}

export default Post