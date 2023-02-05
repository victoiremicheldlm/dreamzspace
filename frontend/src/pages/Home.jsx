import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
// eslint-disable-next-line import/no-unresolved
import Dreams from "../assets/dreams.svg";
import "./Home.css";

function Home() {
  return (
    <div>
      <NavBar />
      <header className="app-header">
        <h1>Welcome to </h1>
        <img className="logo-dream" alt="DreamSpace logo" src={Dreams} />
      </header>
      <section>
        <p className="app-header-about">
          DreamSpace is a website that allows you to remember your dreams. Use
          the form to input the details of your dream and keep track of them in
          your profile.
        </p>
      </section>
      <Link to="/signup">
        <button className="start-button" type="button">
          Acess DreamSpace
        </button>
      </Link>{" "}
    </div>
  );
}

export default Home;
