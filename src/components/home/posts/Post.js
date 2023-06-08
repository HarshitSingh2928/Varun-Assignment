import React from 'react'
import PostCard from './PostCard'
import './Post.css'
import Weekly from '../Weekly'
import { useDispatch, useSelector } from 'react-redux'
const Post = () => {
  const filteredData = useSelector((state) => state.posts.filteredData);

  const renderFilteredDays = () => {
    if (filteredData.length === 0) {
      return null; // Return null if filteredData is empty
    }

    const uniqueDays = Array.from(
      new Set(filteredData.map((card) => new Date(card.posted_on).toLocaleDateString('en-US', { weekday: 'long' })))
    );

    return uniqueDays.map((day, index) => (
      <div key={index} className="filtered-day">
        {day}
      </div>
    ));
  };
  return (
    <div className='header'>
      <h3>Posts</h3>
       <p>{renderFilteredDays()}</p>
       <div className='post'>
      <div>
        <div>
        
        <PostCard/>
        </div>
    
    <Weekly/>
    </div>
    </div>
    </div>
  )
}

export default Post