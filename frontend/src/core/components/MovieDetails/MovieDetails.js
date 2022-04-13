import { memo, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getPerson } from '../../helper/coreApiCalls'

import classes from './MovieDetails.module.css';

const MovieDetails = props => {    
    const movie = props.movie

    const [director, setDirector] = useState(null)
    const [stars, setStars] = useState([])
    const [writers, setWriters] = useState([])

    const loadedDirectors = () => {
        let d

        if(typeof window.localStorage !== 'undefined'){
            if(localStorage.getItem(movie.director)){
                d = JSON.parse(localStorage.getItem(movie.director))
                setDirector(d)
            }else{
                d = null
            }
        }

        if(!d){
            getPerson()
            .then(data => {
                if(data.error){
                    console.error(data.error)
                }else{
                    if(typeof window.localStorage !== 'undefined'){
                        for(var key in data){
                            localStorage.setItem('http://localhost:8000/api/person/' + data[key].id + '/', JSON.stringify(data[key]))
                        }
                    }
                    d = JSON.parse(localStorage.getItem(movie.director))
                    setDirector(d)
                }
            })
        }
    }

    const loadedStars = () => {
        setStars([])
        let s = []

        if(typeof window.localStorage !== 'undefined'){
            for (const key in movie.stars) {
                if(localStorage.getItem(movie.stars[key])){
                    s.push(JSON.parse(localStorage.getItem(movie.stars[key])))
                }else{
                    s = []
                    break
                }
            }

            setStars(s)
        }

        if(!s){
            getPerson()
            .then(data => {
                if(data.error){
                    console.error(data.error)
                }else{
                    if(typeof window.localStorage !== 'undefined'){
                        for(var key in data){
                            localStorage.setItem('http://localhost:8000/api/person/' + data[key].id + '/', JSON.stringify(data[key]))
                        }
                    }
                    for (const key in movie.stars) {
                        s.push(JSON.parse(localStorage.getItem(movie.stars[key])))
                    }
                    setStars(s)
                }
            })
        }
    }

    const loadedWriters = () => {
        setWriters([])
        let w = []

        if(typeof window.localStorage !== 'undefined'){
            for (const key in movie.writers) {
                if(localStorage.getItem(movie.writers[key])){
                    w.push(JSON.parse(localStorage.getItem(movie.writers[key])))
                }else{
                    w = []
                    break
                }
            }

            setWriters(w)
        }

        if(!w){
            getPerson()
            .then(data => {
                if(data.error){
                    console.error(data.error)
                }else{
                    if(typeof window.localStorage !== 'undefined'){
                        for(var key in data){
                            localStorage.setItem('http://localhost:8000/api/person/' + data[key].id + '/', JSON.stringify(data[key]))
                        }
                    }
                    for (const key in movie.writers) {
                        w.push(JSON.parse(localStorage.getItem(movie.writers[key])))
                    }
                    setWriters(w)
                }
            })
        }
    }

    useEffect(() => {
        loadedDirectors()
        loadedStars()
        loadedWriters()
    }, [])


    return (
        <div className={classes.movie_details}>
            <div>{props.Description}</div>
            <div>
                <h4>Director</h4>
                {director && <Link to={"/profile/" + director.id}>{director.name}</Link>}
            </div>
            <div>
                <h4>Writers</h4>
                {writers && writers.map((writer) => <Link to={"/profile/" + writer.id}>{writer.name}</Link>)}
            </div>
            <div>
                <h4>Stars</h4>
                {stars && stars.map((star) => <Link to={"/profile/" + star.id}>{star.name}</Link>)}
            </div>
        </div>
    )
}

export default memo(MovieDetails)