import './App.css';
import { useEffect, useState } from 'react';
// import your Lists here
import ShowsList from './ShowsList.js';
import StarsList from './StarsList.js';
import HostsList from './HostsList.js';
//import fetch utils 
import { getShows, getStars, getHosts } from './services/fetch-utils.js';


function App() {
  //set state 
  const [shows, setShows] = useState([]);
  const [stars, setStars] = useState([]);
  const [hosts, setHosts] = useState([]);
  //fetch functions 
  async function fetchShowsData() {
    const data = await getShows();
    setShows(data);
  }

  async function fetchStarsData(){
    const data = await getStars();
    setStars(data);
  }

  async function fetchHostsData(){
    const data = await getHosts();
    setHosts(data);
  }
  //useEffect 
  useEffect(() => {
    fetchShowsData();
  }, []);

  useEffect(() => {
    fetchStarsData();
  }, []);

  useEffect(() => {
    fetchHostsData();
  }, []);

  //return HTML element
  return (
    <div className="App">
      <h1>Reality Tv Shows</h1>
      <ShowsList shows={shows}/>
      <h1>Reality TV Stars</h1>
      <StarsList stars={stars}/>
      <h1>Reality TV Hosts</h1>
      <HostsList hosts={hosts}/>
    </div>
  );
}

export default App;
