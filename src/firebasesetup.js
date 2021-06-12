import firebase from "firebase";

import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
	apiKey: "AIzaSyCjnji8f1BYeQia5wEPVguPunNHR5_UGgc",
	authDomain: "react-reddit-1bf2a.firebaseapp.com",
	projectId: "react-reddit-1bf2a",
	storageBucket: "react-reddit-1bf2a.appspot.com",
	messagingSenderId: "442262223029",
	appId: "1:442262223029:web:0fe30c98355506d742a6fc",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
