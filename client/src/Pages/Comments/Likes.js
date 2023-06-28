import React, { useContext, useEffect, useState } from "react";
import './Like.css';

import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
const Likes = ({ answer }) => {
  const [likesCount, setLikesCount] = useState(0);
  const [dislikesCount, setDislikesCount] = useState(0);

  useEffect(() => {
    if (answer && answer.answer_id) {
      const storedLikesCount = localStorage.getItem(`likesCount_${answer.answer_id}`);
      setLikesCount(storedLikesCount ? parseInt(storedLikesCount) : 0);

      const storedDislikesCount = localStorage.getItem(`dislikesCount_${answer.answer_id}`);
      setDislikesCount(storedDislikesCount ? parseInt(storedDislikesCount) : 0);
    }
  }, [answer]);
  const handleLikeClick = () => {
    setLikesCount(prevLikesCount => prevLikesCount + 1);
  };

  const handleDislikeClick = () => {
    setDislikesCount(prevDislikesCount => prevDislikesCount + 1);
  };

  return (
    <div className="likes__container">
      <button className="likesBtn mx-2" onClick={handleLikeClick} title="Click here to like">
        <ThumbUpIcon />
      </button>
      <span>{likesCount}</span>
      <button className="likesBtn mx-2" onClick={handleDislikeClick} title="Click here to dislike">
        <ThumbDownIcon />
      </button>
      <span>{dislikesCount}</span>
    </div>
  );
};

export default Likes;