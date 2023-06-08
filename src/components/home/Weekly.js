import React, { useEffect, useState } from 'react'
import './Weekly.css'
import { useDispatch, useSelector } from 'react-redux'
import { showData } from './posts/reduxPost/action'
import { settask } from './reduxWeekly/action'


const Weekly = () => {
  const [selectedDays, setSelectedDays] = useState([]);
    const numDays=useSelector((state)=>state.daysreducer.days);
    const cardData =useSelector((state)=>state.posts.data)
  const dispatch=useDispatch();
  
  
     useEffect(()=>{
        dispatch(settask(cardData));
     },[]);
  const handleDayClick = (day) => {
    const filteredCards = cardData.filter((card) => {
      const cardDate = new Date(card.posted_on);
      const cardDay = cardDate.toLocaleDateString('en-US', { weekday: 'long' });
      return cardDay === day;
    });
    dispatch(showData(filteredCards));
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