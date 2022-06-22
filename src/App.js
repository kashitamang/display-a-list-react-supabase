import './App.css';
import { useEffect, useState } from 'react';
// import your Lists here
import ShowsList from './ShowsList.js';
import StarsList from './StarsList.js';
import HostsList from './HostsList.js';
import GenresList from './GenresList.js';
//import fetch utils 
import { getShows, getStars, getHosts, getGenres } from './services/fetch-utils.js';


function App() {
  //set state 
  const [shows, setShows] = useState([]);
  const [stars, setStars] = useState([]);
  const [hosts, setHosts] = useState([]);
  const [genres, setGenres] = useState([]);
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

  async function fetchGenresData() {
    const data = await getGenres();
    setGenres(data);
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

  useEffect(() => {
    fetchGenresData();
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
      <h1>Reality TV Genres</h1>
      <GenresList genres={genres}/>
    </div>
  );
}

export default App;
