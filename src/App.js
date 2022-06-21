import './App.css';
import { useEffect, useState } from 'react';
// import your Lists here
import ShowsList from './ShowsList.js';
import StarsList from './StarsList.js';
//import fetch utils 
import { getShows, getStars } from './services/fetch-utils.js';


function App() {
  //set state 
  const [shows, setShows] = useState([]);
  const [stars, setStars] = useState([]);

  //fetch functions 
  async function fetchShowsData() {
    const data = await getShows();
    setShows(data);
  }

  //useEffect 
  useEffect(() => {
    fetchShowsData();
  }, []);

  //return HTML element
  return (
    <div className="App">
      <h1>Reality Tv Shows</h1>
      <ShowsList shows={shows}/>
      <h2>Reality TV Stars</h2>
      <StarsList stars={stars}/>
      
    </div>
  );
}

export default App;
