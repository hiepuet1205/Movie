import classes from './MovieTrailer.module.css'
import { memo } from 'react'

const MovieTrailer = props => {
    const movie = props.movie
    return (
        <div className={classes.movie_trailer}>
            <img src={movie.imageSmall} 
                alt={movie.originalTitle} 
                className={classes.movie_trailer_img} 
            />
            <div className={classes.movie_trailer_video}>
                <video
                    src={movie.videoUrl}
                    controls
                ></video>
            </div>
        </div>
    )
}

export default memo(MovieTrailer)