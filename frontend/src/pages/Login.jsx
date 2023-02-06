import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import instanceAxios from "../services/axios";
import { AuthContext } from "../context/AuthContext";
// eslint-disable-next-line import/no-unresolved
import Dreams from "../assets/dreams.svg";

export default function Login() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();

    const { email, password } = event.target.elements;
    instanceAxios
      .post("/auth/login", {
        email: email.value,
        password: password.value,
      })
      .then((res) => {
        login(res.data.token);
        navigate("/home");
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <div className="start-box">
        <img className="logo-dream" alt="DreamSpace logo" src={Dreams} />
        <h2 className="title-signup"> Connectez-vous à votre compte</h2>
      </div>
      <form className="log-in" onSubmit={handleSubmit}>
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
        <button type="submit">✨ Enter ✨</button>
      </form>
      <div className="pas-compte">
        <p>
          Pas de compte ?
          <Link to="/signup" className="link">
            Créez-en un
          </Link>
        </p>
      </div>
    </div>
  );
}
