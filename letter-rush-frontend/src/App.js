import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState([{}])
  const [word, setWord] = useState("")

  function handleSubmit(e) {
    e.preventDefault();
    console.log('Word: ', word);
  }

  function getData() {
    axios({
      method: "GET",
      url:"/profile",
    })
    .then((response) => {
      const res =response.data
      setProfileData(({
        profile_name: res.name,
        about_me: res.about}))
    }).catch((error) => {
      if (error.response) {
        console.log(error.response)
        console.log(error.response.status)
        console.log(error.response.headers)
        }
    })}

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Word: 
          <input type='text' value={word} onChange={(e) => setWord(e.target.value)} />
        </label>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default App;

function getData() {
    axios({
      method: "GET",
      url:"/profile",
    })
    .then((response) => {
      const res =response.data
      setProfileData(({
        profile_name: res.name,
        about_me: res.about}))
    }).catch((error) => {
      if (error.response) {
        console.log(error.response)
        console.log(error.response.status)
        console.log(error.response.headers)
        }
    })}