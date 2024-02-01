import { useEffect, useState } from "react";
import "./Movies.css";
const Movies = () => {
  const [allMovies, setAllMovies] = useState([]);

  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=all")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setAllMovies(data);
      });
  }, []);

  console.log(allMovies);
  return (
    <div className="main">
      {allMovies?.map((movie) => (
        <div className="card" key={movie.show.id}>
          <div className="img">
            <div className="overlay">
             <span>
               {
                movie?.show?.rating?.average ?    `Rating: ${movie.show?.rating?.average}` : <span> Rating: 0 </span>
              } 
              </span>
              <span>
                {movie?.show?.runtime ? (
                  ` || Runtime: ${movie?.show?.runtime}mnt `
                ) : (
                  <span> </span>
                )}
              </span>
            </div>
            <img
              className="image"
              src={movie.show.image?.original}
              alt="image missing"
            />
          </div>
          <p>
            {movie?.show?.name} || <span>{movie?.show?.status}</span>
          </p>
          <span> {movie?.show?.language} </span>
          <h5>{movie?.show?.network?.country?.name}</h5>
        </div>
      ))}
    </div>
  );
};

export default Movies;
