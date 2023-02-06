import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

// eslint-disable-next-line react/prop-types
export default function PrivateRoute({ children }) {
  const { isLogin } = useContext(AuthContext);

  if (!isLogin) {
    return <Navigate to="/" />;
  }

  return children;
}
