import './App.css';
import { useEffect, useState } from 'react';
// import your Lists here
import ShowsList from './ShowsList.js';
//import fetch utils 
import { getShows } from './services/fetch-utils.js';


function App() {
  //set state 
  const [shows, setShows] = useState([]);

  //fetch functions 
  async function fetchShowsData() {
    const data = await getShows();
    setShows(data);
  }

  //useEffect 
  useEffect(() => {
    fetchShowsData();
  }, []);

  return (
    <div className="App">
      <h1>Reality Tv Shows</h1>
      <ShowsList shows={shows}/>
    </div>
  );
}

export default App;
