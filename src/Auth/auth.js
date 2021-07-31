import "../styles.css";
import firebase from "../firebasesetup";
import { useState, useEffect, useContext } from "react";
import { FaTwitter, FaGoogle, FaGithub } from "react-icons/fa";
import { dfcontx } from "../utils/authContext";

export default function Auth() {
  const { currentUser, signUp, signOut } = useContext(dfcontx);

  async function handleSubmit(provider) {
    var provider = new provider();
    await signUp(provider).catch((err) => console.log(JSON.stringify(err)));
    // router.push("/account")
  }

  return (
    <div className="App">
      {currentUser ? (
        <div className="signin">
          <div className="signin-content">
            <div className="signin-btns">
              <button onClick={() => signOut()}>logout</button>
            </div>
          </div>
        </div>
      ) : (
        <div className="signin">
          <div className="signin-content">
            <p>Please sign in using one of the below options</p>
            <div className="signin-btns">
              <button
                onClick={() => handleSubmit(firebase.auth.GithubAuthProvider)}
              >
                Sign In With Github <FaGithub />
              </button>
              <button
                onClick={() => handleSubmit(firebase.auth.GoogleAuthProvider)}
              >
                Sign In Using Google <FaGoogle />
              </button>
              <button
                onClick={() => handleSubmit(firebase.auth.TwitterAuthProvider)}
              >
                Sign In Using Twitter <FaTwitter />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
