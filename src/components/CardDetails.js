import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import './CardDetails.css'
const CardDetails = () => {
 
    const cards = useSelector((state) => state.posts.data);
    const { id } = useParams(); 
    const card = cards.find((card) => card.id === parseInt(id));
  return (
    <div className='card-container'>
      <h2>Post</h2>
      <h4>{card.text}</h4>
      <p>Posted on: {card.posted_on}</p>
     
    </div>
  );
};

export default CardDetails;
