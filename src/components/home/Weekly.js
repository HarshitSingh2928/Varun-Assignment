import React, { useEffect } from 'react'
import './Weekly.css'
import { useDispatch, useSelector } from 'react-redux'
import {  showData } from './posts/reduxPost/action'
import { settask } from './reduxWeekly/action'


const Weekly = () => {
  
    const numDays=useSelector((state)=>state.daysreducer.days);
    const cardData =useSelector((state)=>state.posts.data)
    const filteredData = useSelector((state) => state.posts.filteredData);
  const dispatch=useDispatch();
  
  
    
  useEffect(() => {
    dispatch(settask(cardData));
    // dispatch(fetchInitialData());
  }, [cardData, dispatch]);
  const handleDayClick = (day) => {
    console.log(day);
    const filteredCards = cardData.filter((card) => {
      const cardDate = new Date(card.posted_on);
      const cardDay = cardDate.toLocaleDateString('en-US', { weekday: 'long' });
      return cardDay === day;
    });

    const isDaySelected = filteredData.some((card) => {
      const cardDate = new Date(card.posted_on);
      const cardDay = cardDate.toLocaleDateString('en-US', { weekday: 'long' });
      return cardDay === day;
    });
    let updatedCards;

    if (isDaySelected) {
      updatedCards = filteredData.filter((card) => {
        const cardDate = new Date(card.posted_on);
        const cardDay = cardDate.toLocaleDateString('en-US', { weekday: 'long' });
        return cardDay !== day;
      });
    } else {
      updatedCards = [...filteredData, ...filteredCards];
    }
    dispatch(showData(updatedCards));
  
  };
  

  return (
    <div className="weekly">
      <h3>Weekly</h3>
      <div >
        {numDays.map((day) => (
          <div key={day.id} onClick={() => handleDayClick(day.day)}>
            <p>{` ${day.day} `}</p>
            <p>|</p>
            <p>{` ${day.noOfTasks}`}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Weekly