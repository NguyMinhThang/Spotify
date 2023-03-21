import React, { useState } from 'react';
import DetailSongs from './components/DetailSongs';
import ListSongs from './components/ListSongs';
import Navbar from './components/Navbar';
import PlaySong from './components/PlaySong';
import { Songs } from './Context';
import DataSongs from "./Data/songs.json"

import "./App.css";

function App() {
  const [song,setSong]=useState(DataSongs[0])
  const handleSetSong=(idSong)=>{
  const song=DataSongs.find(song=>song.id===idSong)
  if(!song){
    setSong(DataSongs[0])
  }else{
    setSong(song)
  }
  }
  return (
    <div className="App">
      <Songs.Provider value={{DataSongs,song,handleSetSong}}>
        <Navbar/>
      <div className='grid grid-cols-3 bg-slate-700 h-screen-navbar-player overflow-hidden'>
        <DetailSongs/>
        <ListSongs/>
      </div>
        <PlaySong/>
        </Songs.Provider>
    </div>
  );
}

export default App;
