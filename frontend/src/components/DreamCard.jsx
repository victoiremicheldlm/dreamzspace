import React, { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "http://localhost:5000/api/dreams";

export default function DreamsList() {
  const [dreams, setDreams] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(API_URL);
        setDreams(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Recorded Dreams</h1>
      {dreams.map((dream) => (
        // eslint-disable-next-line no-underscore-dangle
        <div key={dream._id}>
          <h2>{dream.date}</h2>
          <p>Mood: {dream.mood}</p>
          <p>Vibe: {dream.vibe}</p>
          <p>Genre: {dream.genre}</p>
          <p>Story: {dream.story}</p>
        </div>
      ))}
    </div>
  );
}
