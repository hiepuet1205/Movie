import React from 'react'

import MovieCard from '../Movies/MovieCard'

import classes from './Movies.module.css'

const Movies = props => {
    const movies = props.movies

    return (
        <div className={classes.all_movie}>
            {movies.map(movie => <MovieCard movie={movie} />)}
        </div>
    )
}

export default Movies