import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Form.css";
import "./Home.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

import cloudzz from "../assets/cloudzz.png";
// eslint-disable-next-line import/no-unresolved
import Dreams from "../assets/dreams.svg";

const moodOptions = ["Joyful", "Sad", "Confused", "Scared", "Angry", "Excited"];
const genreOptions = [
  "Adventure",
  "Action",
  "Comedy",
  "Drama",
  "Fantasy",
  "Mystery",
  "Romance",
  "Sci-Fi",
  "Thriller",
  "Horror",
];
const vibeOptions = ["A Vibe", "Not a Vibe"];

export default function Home() {
  // eslint-disable-next-line no-undef
  const [date, setDate] = useState("");
  const [mood, setMood] = useState("");
  const [vibe, setVibe] = useState("");
  const [genre, setGenre] = useState("");
  const [story, setStory] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [showModal, setShowModal] = useState(false);

  const API_URL = "http://localhost:5000/api/dreams";

  const handleSubmit = async (event) => {
    event.preventDefault();

    const dreamData = {
      date,
      mood,
      vibe,
      genre,
      story,
    };

    try {
      await axios.post(API_URL, dreamData);
      setFormSubmitted(true);
      setShowModal(true);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleViewDreams = () => {
    return <Link to="/dreams">View Dreams</Link>;
  };

  return (
    <>
      <NavBar />
      <div className="start-box">
        <img className="clouds" alt="Clouds" src={cloudzz} />

        <img className="logo-dream" alt="DreamSpace logo" src={Dreams} />
        <img className="clouds" alt="Clouds" src={cloudzz} />
      </div>
      <div className="home-container">
        <div className="form-container">
          <div className="form-header">
            <h1>Record Your Dreams</h1>
          </div>
          <form className="dream-form" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="date">Date</label>
              <input
                type="date"
                id="date"
                value={date}
                onChange={(event) => setDate(event.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="mood">Mood</label>
              <select
                id="mood"
                value={mood}
                onChange={(event) => setMood(event.target.value)}
                required
              >
                <option value="" disabled>
                  Choose a Mood
                </option>
                {moodOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="vibe">Vibe</label>
              <select
                id="vibe"
                value={vibe}
                onChange={(event) => setVibe(event.target.value)}
                required
              >
                <option value="" disabled>
                  Choose a Vibe
                </option>
                {vibeOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="genre">Genre</label>
              <select
                id="genre"
                value={genre}
                onChange={(event) => setGenre(event.target.value)}
                required
              >
                <option value="" disabled>
                  Choose a Genre
                </option>
                {genreOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="story">Story</label>
              <textarea
                id="story"
                value={story}
                onChange={(event) => setStory(event.target.value)}
                required
                rows="5"
              />
            </div>
            {!formSubmitted && <button type="submit">Save Dream</button>}
            {formSubmitted && (
              <div className="modal">
                <div className="modal-content">
                  <h3>Dream saved successfully!</h3>
                  <Link to="/home">
                    <button type="button" onClick={handleCloseModal}>
                      Close
                    </button>
                  </Link>{" "}
                  <Link to="/dreams">
                    <button type="button" onClick={handleViewDreams}>
                      View Dreams
                    </button>
                  </Link>{" "}
                </div>
              </div>
            )}
          </form>
        </div>
        <img src={cloudzz} alt="cloudzz" className="cloudzz" />
      </div>
      <Footer />
    </>
  );
}
