import React from "react";
import MovieCard from "./Components/MovieCard";
import NavBar from "./Components/NavBar";
import { data } from "./data";
function App() {
  return (
    <div className="App">
      <h1>Movie App</h1>
      <NavBar />
    <div className="main">
      <div className="tabs">
        <div className="tab">Movies</div>
        <div className="tab">favourites</div>
      </div>
      <div className="list">
        {
          data.map((movie)=>(
            <MovieCard movie={movie}/>
          ))
        }
      </div>
    </div>
    </div>
  );
}

export default App;
