import React from "react";
import PostCard from "./PostCard";
import "./Post.css";
import Weekly from "../Weekly";
import { useSelector } from "react-redux";
const Post = () => {
  const filteredData = useSelector((state) => state.posts.filteredData);

  const renderFilteredDays = () => {
    if (filteredData.length === 0) {
      return null;
    }

    const uniqueDays = filteredData.reduce((days, card) => {
      const cardDate = new Date(card.posted_on);
      const cardDay = cardDate.toLocaleDateString("en-US", { weekday: "long" });
      if (!days.includes(cardDay)) {
        days.push(cardDay);
      }
      return days;
    }, []);

    return uniqueDays.map((day, index) => (
      <div key={index} className="filtered-day">
        {day}
      </div>
    ));
  };
  return (
    <div className="header">
      <h3>Posts</h3>
      <p>{renderFilteredDays()}</p>
      <div className="post">
        <div>
         
          <PostCard />
        
          
          <Weekly />
        </div>
      </div>
    </div>
  );
};

export default Post;
