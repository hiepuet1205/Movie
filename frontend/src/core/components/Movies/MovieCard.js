import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { getCategorys } from '../../helper/coreApiCalls'

import classes from './MovieCard.module.css'

const MovieCard = (props) => {
    const movie = props.movie

    const [category, setCategory] = useState()

    const loadedCategory = () => {
        let c

        if(typeof window.localStorage !== 'undefined'){
            c = JSON.parse(localStorage.getItem(movie.category[0]))
        }

        if(!c){
            getCategorys()
            .then(data => {
                if(data.error){
                    console.error(data.error)
                }else{
                    setCategory(data[0])
                    if(typeof window.localStorage !== 'undefined'){
                        for(var key in data){
                            localStorage.setItem('http://localhost:8000/api/category/' + data[key].id + '/', JSON.stringify(data[key]))
                        }
                    }
                }
            })
        }else{
            setCategory(c)
        }
    }

    useEffect(() => {
        loadedCategory()
    }, [])

    return (
        <Link to={'/movie/' + movie.id}>
            <div className={classes.box}>
                <div className={classes.box_img}>
                    <img src={movie.imageSmall} alt="m10"/>
                </div>
                <h3>{movie.originalTitle}</h3>
                <span>{movie.totalTime} min | {category && category.name}</span>
            </div>
        </Link>
    )
}

export default MovieCard