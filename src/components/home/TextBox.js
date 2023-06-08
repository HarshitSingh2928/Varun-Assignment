import React, { useState } from "react";
import "./TextBox.css";
import { useDispatch } from "react-redux";
import { addData } from "./posts/reduxPost/action";
import { addDay } from "./reduxWeekly/action";
const TextBox = () => {
  const dispatch = useDispatch();
  const [postText, setPostText] = useState("");
  const handleOnClick = (e) => {
    e.preventDefault();

    const newPost = {
      text: postText,
      id: Date.now(),
      posted_on: new Date().toDateString(),
    };
    dispatch(addData(newPost.text, newPost.id, newPost.posted_on));

    const currentDayIndex = new Date().getDay();

    dispatch(addDay(currentDayIndex));
    setPostText("");
  };
  return (
    <div className="textbox">
      <form onSubmit={handleOnClick}>
        <input
          type="text"
          placeholder="Write Something...."
          value={postText}
          onChange={(e) => setPostText(e.target.value)}
        />
        <button type="submit">Post</button>
      </form>
    </div>
  );
};

export default TextBox;
