import { createContext, useEffect, useState } from "react";
import firebase from "../firebasesetup";

const dfcontx = createContext();

const appcontext = (props) => {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  function signUp(provider) {
    console.log("reached");
    return firebase.auth().signInWithPopup(provider);
  }

  function signOut() {
    return firebase.auth().signOut();
  }

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      setCurrentUser(user);
      // console.log(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signOut,
    signUp
  };
  return (
    <dfcontx.Provider value={value}>
      {!loading && props.children}
    </dfcontx.Provider>
  );
};

export { dfcontx };
export default appcontext;
