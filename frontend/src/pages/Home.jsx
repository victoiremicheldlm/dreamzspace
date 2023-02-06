import React from "react";
import Dreams from "../assets/Dreams.svg";
import NavBar from "../components/NavBar";
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
    </div>
  );
}

export default Home;
