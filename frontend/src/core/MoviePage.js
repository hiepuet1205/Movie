import React from 'react'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react'

import Base from './Base'
import MovieDetails from './components/MovieDetails/MovieDetails';
import MovieExtensions from './components/MovieDetails/MovieExtensions';
import MovieInfo from './components/MovieDetails/MovieInfo';
import MovieTrailer from './components/MovieDetails/MovieTrailer';
import LoadingSpinner from './components/Loading/LoadingSpinner';

import classes from './MoviePage.module.css'

const MoviePage = () => {
    const params = useParams()

    const id = params.id

    const [movie, setMovie] = useState()

    const loadedMovie = () => {
        let m

        if(typeof window.localStorage !== 'undefined'){
            m = JSON.parse(localStorage.getItem('movies/' + id))
        }

        setMovie(m)
    }

    useEffect(() => {
        loadedMovie()
    }, [params])

    return (
        <Base>
            {movie ?
                <section className={`${classes.movie} ${classes.movie_container}`} id="movie">
                    <MovieInfo movie={movie}/>
                    <MovieTrailer movie={movie}/>
                    <MovieExtensions movie={movie}/>
                    <MovieDetails movie={movie}/>
                </section> 
                : <LoadingSpinner/>
            }
        </Base>
    )
}

export default MoviePage