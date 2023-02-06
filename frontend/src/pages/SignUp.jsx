import React from "react";
import "./SignUp.css";
import { Link, useNavigate } from "react-router-dom";
import instanceAxios from "../services/axios";
// eslint-disable-next-line import/no-unresolved
import Dreams from "../assets/dreams.svg";
import cloudzz from "../assets/cloudzz.png";
import Footer from "../components/Footer";

export default function Signin() {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password } = e.target.elements;
    instanceAxios
      .post("/auth/register", {
        name: name.value,
        email: email.value,
        password: password.value,
      })
      .then((res) => {
        console.warn(res.data);
        navigate("/");
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <div className="start-box">
        <img className="clouds" alt="Clouds" src={cloudzz} />

        <img className="logo-dream" alt="DreamSpace logo" src={Dreams} />
        <img className="clouds" alt="Clouds" src={cloudzz} />
      </div>
      <form className="create-box" onSubmit={handleSubmit}>
        <h2 className="title-signup">Créer un compte</h2>

        <input
          id="name"
          name="name"
          type="text"
          placeholder="Enter your name"
          required
        />
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Enter your email"
          required
        />
        <input
          id="password"
          type="password"
          name="password"
          placeholder="Enter your password"
          required
        />
        <button type="submit">✨ Create my DreamSpace ✨</button>
      </form>
      <div className="yes">
        <p>Vous avez déjà un compte ? </p>
        <Link to="/">
          <button className="start-button" type="button">
            Connectez-vous
          </button>
        </Link>{" "}
      </div>
      <Footer />
    </div>
  );
}
