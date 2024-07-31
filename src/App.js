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
        const standingsResponse = await axios.get('https://v3.football.api-sports.io/standings', {
          headers: {
            'x-rapidapi-host': 'v3.football.api-sports.io',
            'x-rapidapi-key': process.env.REACT_APP_API_FOOTBALL_KEY,
          },
          params: {
            league: 39, // Premier League ID
            season: 2023, // Current season
          },
        });

        setStandings(standingsResponse.data.response[0].league.standings[0]);
      } catch (error) {
        console.error('Error fetching standings:', error);
      }
    };

    fetchStandings();
  }, []);

  return (
    /* This div serves as the main container with a class name for styling */
    <div className="App">
      <header className="App-header">
        <p>Hello world</p>
        <div>
          <h2>Premier League Standings 2022-23 Season</h2>
          <table className="standings-table">
            <thead>
              <tr>
                <th>Position</th>
                <th>Team</th>
                <th>Points</th>
                <th>Played</th>
                <th>Won</th>
                <th>Drawn</th>
                <th>Lost</th>
                <th>Goals For</th>
                <th>Goals Against</th>
                <th>Goal Difference</th>
              </tr>
            </thead>
            <tbody>
              {standings.map((team, index) => (
                <tr key={index}>
                  <td>{team.rank}</td>
                  <td>{team.team.name}</td>
                  <td>{team.points}</td>
                  <td>{team.all.played}</td>
                  <td>{team.all.win}</td>
                  <td>{team.all.draw}</td>
                  <td>{team.all.lose}</td>
                  <td>{team.all.goals.for}</td>
                  <td>{team.all.goals.against}</td>
                  <td>{team.goalsDiff}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </header>
    </div>
  );
}

export default App;
