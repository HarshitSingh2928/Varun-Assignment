import React from 'react';
import { useSelector } from 'react-redux';

const CardDetails = ({id}) => {
    const cards = useSelector((state) => state.posts.data);
    const card = cards.find((card) => card.id === id);
  return (
    <div>
      <h2>Card Details</h2>
      <h4>{card.text}</h4>
      <p>Posted on: {card.posted_on}</p>
     
    </div>
  );
};

export default CardDetails;
