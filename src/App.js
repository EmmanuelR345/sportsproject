/* Import hooks from the react library */
import React, { useEffect, useState } from 'react';
/* Import styling from App.css */
import './App.css';
/* import axios for HTTP requests in order to get data from api */
import axios from 'axios';

/* */
/* */
/* */


function App() {
  /* 
  timezones variable is initialized to empty array and function, setTimezones
  updates the state, usestate initializes the state to empty array.
  */
  const [timezones, setTimezones] = useState([]);

  /* runs the hook function  */
  useEffect(() => {
    /* represents an asynchronous function that fetches data from api */
    const fetchData = async () => {
      try {
        const timezonesResponse = await axios.get('https://v3.football.api-sports.io/timezone', {
          headers: {
            'x-rapidapi-host': 'v3.football.api-sports.io',
            'x-rapidapi-key': process.env.REACT_APP_API_FOOTBALL_KEY,
          },
        });

        setTimezones(timezonesResponse.data.response);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    /* This div serves as the main container with a class name for styling */
    <div className="App">
      <header className="App-header">
        <p>Hello world</p>
        <div>
          <h2>Timezones</h2>
          <ul className="timezone-list">
            {timezones.map((timezone, index) => (
              <li key={index} className="timezone-item">{timezone}</li>
            ))}
          </ul>
        </div>
      </header>
    </div>
  );
}

export default App;
