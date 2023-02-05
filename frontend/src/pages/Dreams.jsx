import React, { useState, useEffect } from "react";
import axios from "axios";
import DreamCard from "../components/DreamCard";
import "./Dreams.css";
import NavBar from "../components/NavBar";
// eslint-disable-next-line import/no-unresolved
import Dreams from "../assets/dreams.svg";

const API_URL = "http://localhost:5000/api/dreams";

function DreamsPage() {
  const [dreams, setDreams] = useState([]);

  useEffect(() => {
    const fetchDreams = async () => {
      try {
        const response = await axios.get(API_URL);
        setDreams(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDreams();
  }, []);

  return (
    <div>
      <NavBar />
      <div className="header-dream">
        <h1>My</h1>
        <img className="logo-dream" alt="DreamSpace logo" src={Dreams} />
      </div>
      {dreams.map((dream) => (
        // eslint-disable-next-line no-underscore-dangle
        <DreamCard key={dream._id} dream={dream} />
      ))}
    </div>
  );
}

export default DreamsPage;
