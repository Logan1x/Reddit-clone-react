import React, { useState, useEffect } from "react";
import firebase from "../firebasesetup";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../styles.css";

export default function show_post() {
  const [update, setUpdate] = useState(false);
  const [times, setTimes] = useState([]);

  // to get data from firbase

  useEffect(() => {
    var citiesRef = firebase.firestore().collection("times");

    // Create a query against the collection.
    //   var query = citiesRef.where("uid", "==", uid);

    citiesRef.get().then((snapshot) => {
      const newTimes = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }));

      setTimes(newTimes);
      setUpdate(false);
    });
  }, [update]);

  // to update the upvote

  function upvote(itemId, showVotes) {
    firebase
      .firestore()
      .collection("times")
      .doc(itemId)
      .update({
        votes: showVotes + 1
      })
      .then(() => {
        console.log("votes successfully updated!");
        setUpdate(true);
      })
      .catch((error) => {
        console.error("Error removing document: ", error);
      });
  }

  // to update the downvote

  function downvote(itemId, showVotes) {
    firebase
      .firestore()
      .collection("times")
      .doc(itemId)
      .update({
        votes: showVotes - 1
      })
      .then(() => {
        console.log("votes successfully updated!");
        setUpdate(true);
      })
      .catch((error) => {
        console.error("Error removing document: ", error);
      });
  }

  return (
    <div className="show-post">
      {/* <h1>Reddit Clone</h1> */}

      {/* Button to redict to create post page */}
      <button className="btn-createpost">
        <Link to="/create">Create New Post</Link>
      </button>

      {/* to show posts */}
      {times.map((time) => (
        <div key={time.id} className="reddit-card">
          {/* to show subreddit and username */}
          <div className="post-details">
            <small className="subreddit-name">r/all</small>
            <small className="username">posted by u/{time.user}</small>
          </div>

          {/* to show post and votes */}
          <div className="reddit-inner-card">
            <div className="card-votes">
              <button onClick={() => upvote(time.id, time.votes)}>
                <FaAngleUp />
              </button>
              <p>{time.votes}</p>
              <button onClick={() => downvote(time.id, time.votes)}>
                <FaAngleDown />
              </button>
            </div>
            <div className="card-text">
              <p className="card-title">{time.title}</p>
              <p className="card-content">{time.content}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
