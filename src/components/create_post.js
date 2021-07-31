import React, { useState, useContext } from "react";
import { dfcontx } from "../utils/authContext";
import firebase from "../firebasesetup";
import { Link } from "react-router-dom";
import "../styles.css";

export default function create_post() {
  const { currentUser } = useContext(dfcontx);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  var votes = 0; //default votes on the posts

  // upload data on the firebase

  function formsubmit(e) {
    e.preventDefault();
    firebase
      .firestore()
      .collection("times")
      .add({
        title,
        content,
        votes,
        user: currentUser.uid
      })
      .then(() => {
        setTitle("");
        setContent("");
      });
  }

  return (
    <div>
      {currentUser ? (
        <section className="createpost">
          <div className="createpost-content">
            <form onSubmit={formsubmit}>
              <label htmlFor="">Title</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.currentTarget.value)}
                placeholder="Enter Post Title Here"
                required
              />
              <label htmlFor="">Content</label>
              <input
                type="text"
                value={content}
                onChange={(e) => setContent(e.currentTarget.value)}
                placeholder="Enter Details Here"
                required
              />
              <button type="submit">Create Post</button>
            </form>
          </div>
        </section>
      ) : (
        <section className="createpost">
          <div className="createpost-content">
            <p>
              Please Sign-In By Visiting <Link to="/auth"> Auth</Link> Page.
            </p>
          </div>
        </section>
      )}
    </div>
  );
}
