import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Form.css";
import NavBar from "../components/NavBar";

export default function Form() {
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

    // Package the dream data in an object
    const dreamData = {
      date,
      mood,
      vibe,
      genre,
      story,
    };

    // Send the dream data to the server to be stored.
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
    // Redirect the user to the dream page using the Link component
    return <Link to="/dreams">View Dreams</Link>;
  };

  return (
    <div>
      <NavBar />
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </label>
        <br />
        <label>
          Mood:
          <input
            type="text"
            value={mood}
            onChange={(e) => setMood(e.target.value)}
          />
        </label>
        <br />
        <label>
          Vibe:
          <input
            type="text"
            value={vibe}
            onChange={(e) => setVibe(e.target.value)}
          />
        </label>
        <br />
        <label>
          Genre:
          <input
            type="text"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          />
        </label>
        <br />
        <label>
          Story:
          <textarea value={story} onChange={(e) => setStory(e.target.value)} />
        </label>
        <br />
        {!formSubmitted && <button type="submit">Save Dream</button>}
        {formSubmitted && (
          <div className="modal">
            <div className="modal-content">
              <h3>Dream saved successfully!</h3>
              <Link to="/form">
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
  );
}
