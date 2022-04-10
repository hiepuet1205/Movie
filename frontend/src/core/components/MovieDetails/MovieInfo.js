import { memo } from 'react';
import classes from './MovieInfo.module.css';


const MovieInfo = props => {
    const movie = props.movie

    return (
        <div className={classes.movie_info}>
            <div className={classes.movie_info_details}>
                <h1>{movie.nameVietnamese}</h1>
                <p>Original title: {movie.originalTitle}</p>
                <div className={classes.movie_info_details_time}>
                    <p>{movie.yearRelease}</p>
                    <p>{movie.totalTime} min</p>
                </div>
            </div>
        </div>
    )
}

export default memo(MovieInfo)