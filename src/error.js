import react from "react";
import { Link } from "react-router-dom";
import "./styles.css";

export default function error() {
  return (
    <div className="error-page">
      <h1>Go <span className="error-heading"><Link to="/">Home</Link></span>, You are drunk.</h1>;
    </div>
  )
}
