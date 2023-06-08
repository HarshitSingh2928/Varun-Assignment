import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './PostCard.css'
import { delDay,  } from '../reduxWeekly/action';
import {  fetchUpdatedData } from './reduxPost/action';
import { Link } from 'react-router-dom';
const PostCard = () => {
  const dispatch = useDispatch();
    const filteredCards = useSelector((state) => state.posts.filteredData);
    const cards = useSelector((state) => state.posts.data);
    
    const handleDelete = (cardId,id) => {
      dispatch(delDay(cardId));
      const updatedCards = cards.filter((card) => card.id !== id);
      dispatch(fetchUpdatedData(updatedCards))
    };
    const renderCards = filteredCards.length > 0 ? filteredCards : cards;

  return (
    <div className="postcard">
    {

renderCards.map((card) => (
      <div key={card.id} className="card">
        <Link to={`/card/${card.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
          <h4>{card.text}</h4>
          <div>
            <p>Posted on: {card.posted_on}</p>
          </div>
        </Link>
        <button onClick={() => handleDelete(card.posted_on, card.id)}>Delete</button>
      </div>
    ))}
  </div>
);
}

export default PostCard