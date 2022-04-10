import MovieCard from './MovieCard'

import classes from './Movies.module.css';

const Movies = props => {
    const movies = props.movies

    return (
        <section className={classes.movies} id="movies">
            <h2 className={classes.heading}>Movies</h2> 
            <div className={classes.movies_container}>
                {movies.map(movie => 
                    <MovieCard movie={movie}/>
                )}
                {/* TODO: delete */}
                {movies.map(movie => 
                    <MovieCard movie={movie}/>
                )}
                {movies.map(movie => 
                    <MovieCard movie={movie}/>
                )}
                {movies.map(movie => 
                    <MovieCard movie={movie}/>
                )}
                {movies.map(movie => 
                    <MovieCard movie={movie}/>
                )}
            </div>
        </section>
    )
}

export default Movies