import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import firebase from "./firebasesetup";
import "./styles.css";

const Home = () => {
  const [isActive, setActive] = useState(false);
  const [authed, setAuthed] = useState(false);
  const toggleClass = () => {
    setActive(!isActive);
  };

  const logout = () => {
    firebase
      .auth()
      .signOut()
      .then(function () {
				console.log('Sign-out successful')
				setAuthed(false)
      })
      .catch(function (error) {
        console.log('An error happened');
      });
  };
  useEffect(() => {
    var user = firebase.auth().currentUser;

    if (user) {
      console.log("ho gya kam");
      setAuthed(true);
    } else {
      console.log("ni mila");
    }
  }, [authed]);

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
            {authed ? (
              <li onClick={logout}> logout </li>
            ) : (
              <li>
                <Link to="/auth">Login</Link>
              </li>
            )}
            {/* <li>
							<a href="projects.html">projects</a>
						</li>
						<li>
							<a href="contact.html">contact</a>
						</li> */}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Home;
