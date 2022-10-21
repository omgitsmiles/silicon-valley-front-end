import React, { useState, useEffect } from "react";
import ResponsiveAppBar from "./components/Navbar";
import HomePage from "./components/HomePage";
import { Routes, Route } from 'react-router-dom';

function App() {
 const [characters, setCharacters] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/characters")
    .then(r => r.json())
    .then(setCharacters)
  }, [])


  return (
    <div className="App">
      <ResponsiveAppBar />
      <Routes>
        <Route path="/home" element={<HomePage characters={characters}/>}/>
        <Route path="*" element={<h1>Took a wrong turn</h1>}/>
      </Routes>
    </div>
  );
}

export default App;
