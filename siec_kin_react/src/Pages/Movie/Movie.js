import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { useLocation } from "react-router-dom";
import axios from 'axios';
import { useState, useEffect } from 'react';
import './Movie.css'
import '../../Components/CinemaSelection/CinemaSelection'
import '../../Components/Shows/Shows'
import Shows from '../../Components/Shows/Shows';
import Navigation from '../../Components/navigation/Navigation';
import Footer from '../../Components/footer/Footer';





const Movie = (() => {
    const movieID = useLocation();
    const { movie_ID } = movieID.state;
    const [movie, setMovie] = useState(null);



    useEffect(() => {
        const url = 'http://localhost:8090/api/v1/film/' + movie_ID;
        console.log(url)
        const getMovie = () => {
            axios.get(url).then(
                response => {
                    setMovie(response.data)
                    console.log(response.data)
                }
            ).catch(err => {
                console.log('nie dziala', err)
            })
        }
        getMovie();
    }, []);

    if (!movie) {
        return <div>Movie not found</div>
    }
    return (
        <>
            <Navigation />
            <div className='body-container'>
                <div className='poster-information-container'>
                    <div className='trailer-container'
                        style={{ backgroundImage: `url("${movie.poster_url}")` }}
                    >

                    </div>
                    <div className='information-container'>
                        <div className='poster-container'>
                            <img className='small-poster' src={movie.poster_url}></img>
                            <div className='movie-information'>
                                <h1 className='information-text-title'>Premiera</h1>
                                <p className='information-text'>{movie.release_date}</p>
                            </div>
                            <div className='movie-information'>
                                <h1 className='information-text-title'>Czas Trwania</h1>
                                <p className='information-text'>{movie.duration}</p>
                            </div>
                            <div className='movie-information'>
                                <h1 className='information-text-title'>Reżyseria</h1>
                                <p className='information-text'>{movie.director}</p>
                            </div>
                        </div>
                        <div className='information'>
                            <div>
                                <h2 className='title-text'>{movie.title}</h2>
                            </div>
                            <div className='description-container'>
                                <h3 className='description-text'>{movie.description}</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='movies-show-container'>
                    <Shows
                        filmID={movie.movieId}
                    ></Shows>
                </div>
            </div>
            <Footer />
        </>
    )
})


export default Movie;