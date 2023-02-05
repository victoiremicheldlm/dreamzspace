/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from "react";
import "./DreamCard.css";

function DreamCard(props) {
  const { date, mood, vibe, genre, story } = props.dream;

  return (
    <div className="dream-card">
      <h2 className="dream-card-date">{date}</h2>
      <p className="dream-card-mood">Mood: {mood}</p>
      <p className="dream-card-vibe">Vibe: {vibe}</p>
      <p className="dream-card-genre">Genre: {genre}</p>
      <p className="dream-card-story">Story: {story}</p>
    </div>
  );
}

export default DreamCard;
