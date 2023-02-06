import React, { useState, useEffect } from "react";
import axios from "axios";
import Dreams from "../assets/Dreams.svg";
import cloudzz from "../assets/cloudzz.png";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "./Dreams.css";

function DreamsPage() {
  const [dreams, setDreams] = useState([]);
  const [filter, setFilter] = useState({ genre: "", mood: "" });

  useEffect(() => {
    const fetchDreams = async () => {
      const result = await axios.get("http://localhost:5000/api/dreams");
      setDreams(result.data);
    };

    fetchDreams();
  }, []);

  const handleFilterChange = (e) => {
    setFilter({ ...filter, [e.target.name]: e.target.value });
  };

  return (
    <>
      <NavBar />
      <div className="start-box">
        <img className="clouds" alt="Clouds" src={cloudzz} />

        <img className="logo-dream" alt="DreamSpace logo" src={Dreams} />
        <img className="clouds" alt="Clouds" src={cloudzz} />
      </div>
      <div className="dreams-container">
        <h1>My Dreams</h1>
        <div className="filter-container">
          <label>
            Genre:
            <select
              name="genre"
              value={filter.genre}
              onChange={handleFilterChange}
            >
              <option value="">All</option>
              <option value="Action">Action</option>
              <option value="Comedy">Comedy</option>
              <option value="Drama">Drama</option>
              <option value="Horror">Horror</option>
            </select>
          </label>
          <label>
            Mood:
            <select
              name="mood"
              value={filter.mood}
              onChange={handleFilterChange}
            >
              <option value="">All</option>
              <option value="Happy">Happy</option>
              <option value="Sad">Sad</option>
              <option value="Scary">Scary</option>
              <option value="Surreal">Surreal</option>
            </select>
          </label>
        </div>
        <div className="dreams-list">
          {dreams
            .filter(
              (dream) =>
                (filter.genre === "" || dream.genre === filter.genre) &&
                (filter.mood === "" || dream.mood === filter.mood)
            )
            .map((dream) => (
              // eslint-disable-next-line no-underscore-dangle
              <div key={dream._id} className="dream-card">
                <p>Date: {dream.date}</p>
                <p>Mood: {dream.mood}</p>
                <p>Genre: {dream.genre}</p>

                <p>Description: {dream.story}</p>
              </div>
            ))}
        </div>
        <Footer />
      </div>
    </>
  );
}

export default DreamsPage;
