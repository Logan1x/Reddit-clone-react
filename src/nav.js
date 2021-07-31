import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { dfcontx } from "./utils/authContext";
import "./styles.css";

const Home = () => {
  const { currentUser, signOut } = useContext(dfcontx);

  const [isActive, setActive] = useState(false);
  const toggleClass = () => {
    setActive(!isActive);
  };

  return (
    <div>
      <nav className="navigation">
        <div className="nav-center">
          <div className="nav-header">
            <div className="nav-brand">
              <Link to="/">Reddit Clone</Link>
            </div>
            <button className="nav-toggle" onClick={toggleClass}>
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <ul className={isActive ? "links show-links" : "links"}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/create">Create Post</Link>
            </li>
            {currentUser ? (
              <li onClick={() => signOut()}>
                <Link> logout </Link>
              </li>
            ) : (
              <li>
                <Link to="/auth">Login</Link>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Home;
