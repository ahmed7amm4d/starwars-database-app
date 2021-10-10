import React, { useState, useEffect } from "react";

import classes from './App.module.css';
import Header from "./components/layout/Header";
import MoviesList from "./components/MoviesList";
import ToggleAddMovie from './components/ToggleAddMovie';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMoviesHandler = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch('https://starwars-http-test-default-rtdb.europe-west1.firebasedatabase.app/movies.json');
      if(!response.ok) {
        throw new Error('Something Went Wrong!');
      }
      const data = await response.json();

      const loadedMovies = [];

      for (const key in data) {
        loadedMovies.push({
          id: key,
          title: data[key].title,
          openingText: data[key].openingText,
          releaseDate: data[key].releaseDate,
          director: data[key].director,
          producer: data[key].producer
        });
      }

      setMovies(loadedMovies);
    }
    catch(error) {
      setError(error.message);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchMoviesHandler();
  }, []);

  const addMovieHandler = async (movie) => {
    await fetch('https://starwars-http-test-default-rtdb.europe-west1.firebasedatabase.app/movies.json', {
      method: 'POST',
      body: JSON.stringify(movie),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    fetchMoviesHandler();
  };

  let content = <p className={classes.warning}>Found No Movies!</p>;

  if(movies.length > 0) {
    content = <MoviesList movies={movies} />;
  }
  if (error) {
    content = <p className={classes.warning}>{error}</p>;
  }
  if (isLoading) {
    content = <p className={classes.warning}>Loading...</p>;
  }

  return (
    <React.Fragment>
      <Header />
      <section className={classes['form-section']}>
        <ToggleAddMovie onAddMovie={addMovieHandler} />
      </section>
      <hr className={classes.hr1} />
      <section className={classes.section}>
        {content}
      </section>
    </React.Fragment>
  );
}

export default App;
