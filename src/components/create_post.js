import React from "react";
import firebase from "../firebasesetup";
import { useState } from "react";
import "../styles.css";

export default function create_post() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  var user = firebase.auth().currentUser;

  var loggedIn = false;
  var uuid = "";

  if (user) {
    loggedIn = true;
    uuid = user.uid;
  }

  // console.log(user)

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
        user: uuid
      })
      .then(() => {
        setTitle("");
        setContent("");
      });
  }

  return (
    <div>
      {loggedIn ? (
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
            <p>Please Sign-In By Visiting Auth Page.</p>
          </div>
        </section>
      )}
    </div>
  );
}
