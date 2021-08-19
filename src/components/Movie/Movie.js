import axios from "axios";
import React, {useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { movieLength, movieDirector } from "./MovieFunctions";
import Navbar from "../Navbar/Navbar";
import "./styles/Movie.css";
const Movie = () => {
  const [overviewTrailer, setOverviewTrailer] = useState(true);
  const [active, setActive] = useState("active");
  const [active2, setActive2] = useState("");
  const [movie, setMovie] = useState({});
  const [crew, setCrew] = useState({});
  const [trailerUrl, setTrailerUrl] = useState('');
  const [showMovie, setShowMovie] = useState(false);
  const params = useParams();
  const setOverview = () => {
    setOverviewTrailer(true);
    setActive("active");
    setActive2("");
  };
  const setTrailer = () => {
    setOverviewTrailer(false);
    setActive2("active");
    setActive("");
  };
  useEffect(() => {
    const APIKey = "c6e79d5ff2e278a41f6e542761573cc5";
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${params.movieId}?api_key=${APIKey}&language=en-US`
      )
      .then((res) => {
        setMovie({
          name: res.data.title,
          rating: res.data.vote_average,
          release: res.data.release_date,
          poster: res.data.poster_path,
          length: movieLength(res.data.runtime),
          description: res.data.overview,
          genres: res.data.genres
        });
        return axios.get(`https://api.themoviedb.org/3/movie/${params.movieId}/credits?api_key=${APIKey}&language=en-US`)
      }).then(res => {
        let cast = res.data.cast.slice(0, 3);
        cast = cast.map((item) => {return item.name})
        let director = movieDirector(res.data.crew);
        if(director === undefined) director = {name: 'Unknown'}
        setCrew({cast: cast.join(', '), director: director})
        return axios.get(`http://api.themoviedb.org/3/movie/${params.movieId}/videos?api_key=${APIKey}`)
      }).then(res => {
        let trailerMovie = res.data.results;
        trailerMovie = trailerMovie.find((item) => {
          return item.type === "Trailer";
        });
        if (trailerMovie){
          setTrailerUrl(trailerMovie.key);
          }
          setShowMovie(true)
      });
  }, [params, setMovie]);

  return (
    <div className="movie-container">
      <Navbar />
      {showMovie ? (
        <div className="movie-wrapper">
          <div className="movie-image">
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster}`} alt="Movie poster" />
          </div>
          <div className="movie-info">
            <div className="movie-title-rating">
              <div className="movie-title">
                <h1>{movie.name}</h1>
              </div>
              <div className="rating">
                <h2>{movie.rating}</h2>
                <div className="clip-star"></div>
              </div>
            </div>
            <div className="movie-release-length">
              <h1>{movie.release.substring(0, 4)}</h1>
              <h1>{movie.length}</h1>
            </div>
            <div className="overview-trailer">
              <h1 onClick={setOverview} className={active}>
                OVERVIEW
              </h1>
              <h1 onClick={setTrailer} className={active2}>
                TRAILER
              </h1>
            </div>
            {overviewTrailer ? (
              <>
                <div className="movie-description">
                  <h1>
                    {movie.description}
                  </h1>
                </div>
                <div>
                  <div className="movie-starring">
                    <h1>Starring</h1>
                    <h2>{crew.cast}</h2>
                  </div>
                  <div className="movie-starring">
                    <h1>Created by</h1>
                    <h2>{crew.director.name}</h2>
                  </div>
                  <div className="movie-starring">
                    <h1>Genre</h1>
                    <div className="genres">
                      {movie.genres.map((item) => {
                        return <h2 key={item.id}>{item.name}</h2>
                      })}
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <div className="movie-trailer">
                <iframe
                  width="560"
                  height="300"
                  src={`https://www.youtube.com/embed/${trailerUrl}`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allow="fullscreen"
                ></iframe>
              </div>
            )}
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
export default Movie;
