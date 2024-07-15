import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [timezones, setTimezones] = useState([]);

  useEffect(() => {
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
