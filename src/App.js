import './App.css';
import React from 'react';

function App() {

  // Get user information 
  const onSignIn = () => {
    const googleUser = window.gapi.auth2.getAuthInstance().currentUser.get();
    var userData = googleUser?.getBasicProfile();
    console.log("Console response" ,userData)
  }
  return (
    <div className="g-signin2" data-onsuccess="onSignIn" onClick={onSignIn}></div>
  );

}

export default App;
