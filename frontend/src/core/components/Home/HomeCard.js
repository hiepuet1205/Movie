import React from 'react'
import { Link } from 'react-router-dom'

import classes from './HomeCard.module.css'

const HomeCard = (props) => {
    return (
        <div className={classes.container}>
            <img src={props.movie.imageBig} alt={props.movie.originalTitle}/>
            <div className={classes.home_text}>
                <span>{props.movie.originalTitle}</span>
                <h1>
                    {props.movie.nameVietnamese}
                </h1>
                <Link to={'/movie/' + props.movie.id} className={classes.btn}>Book Now</Link>
                <Link to={'/movie/' + props.movie.id} className={classes.play}>
                    <i className={`${classes.bx} bx bx-play`}></i>
                </Link>
            </div>
        </div>     
    )
}

export default HomeCard