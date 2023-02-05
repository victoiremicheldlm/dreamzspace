import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Form from "./pages/Form";
import Dreams from "./pages/Dreams";
import SignUp from "./pages/SignUp";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form />} />
        <Route path="/dreams" element={<Dreams />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
