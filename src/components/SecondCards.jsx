import React, { useState, useEffect } from 'react';

function SecondCards() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('http://www.omdbapi.com/?apikey=c1156d9a&s=Saw')
      .then(response => response.json())
      .then(data => {
        if (data.Search) {
          setMovies(data.Search);
        }
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1 style={{color:"whitesmoke", textAlign:'center'}}>Saw Movies</h1>
      <div style={{ display: 'flex', color:"whitesmoke"}}>
        {movies.map(movie => (
          <div key={movie.imdbID} style={{ width: '200px', margin: '10px', padding: '10px' }}>
            <img src={movie.Poster} alt={movie.Title} style={{ maxWidth: '100%' }} />
            <h3>{movie.Title}</h3>
            <p>Year: {movie.Year}</p>
            <p>Type: {movie.Type}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SecondCards;