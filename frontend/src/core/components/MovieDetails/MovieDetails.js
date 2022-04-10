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
        const director_id = movie.director.slice(-2,-1)

        let d

        if(typeof window.localStorage !== 'undefined'){
            d = JSON.parse(localStorage.getItem('persons/' + director_id))
            setDirector(d)
        }

        if(!d){
            getPerson()
            .then(data => {
                if(data.error){
                    console.error(data.error)
                }else{
                    d = data.find(person => person.id === director_id)
                    setDirector(d)
                    if(typeof window.localStorage !== 'undefined'){
                        for(var key in data){
                            localStorage.setItem('persons/' + data[key].id, JSON.stringify(data[key]))
                        }
                    }
                }
            })
        }
    }

    const loadedStars = () => {
        setStars([])
        let s = []

        if(typeof window.localStorage !== 'undefined'){
            for (const key in movie.stars) {
                const star_id = movie.stars[key].slice(-2,-1)
                s.push(JSON.parse(localStorage.getItem('persons/' + star_id)))
            }

            setStars(s)
        }

        if(!s){
            getPerson()
            .then(data => {
                if(data.error){
                    console.error(data.error)
                }else{
                    for (const key in movie.stars) {
                        const star_id = movie.stars[key].slice(-2,-1)
                        s.push(data.find(person => person.id === star_id))
                    }
                    setStars(s)
                    if(typeof window.localStorage !== 'undefined'){
                        for(var key in data){
                            localStorage.setItem('persons/' + data[key].id, JSON.stringify(data[key]))
                        }
                    }
                }
            })
        }
    }

    const loadedWriters = () => {
        setWriters([])
        let w = []

        if(typeof window.localStorage !== 'undefined'){
            for (const key in movie.stars) {
                const writer_id = movie.writers[key].slice(-2,-1)
                w.push(JSON.parse(localStorage.getItem('persons/' + writer_id)))
            }

            setWriters(w)
        }

        if(!w){
            getPerson()
            .then(data => {
                if(data.error){
                    console.error(data.error)
                }else{
                    for (const key in movie.writers) {
                        const writer_id = movie.writers[key].slice(-2,-1)
                        w.push(data.find(person => person.id === writer_id))
                    }
                    setWriters(w)
                    if(typeof window.localStorage !== 'undefined'){
                        for(var key in data){
                            localStorage.setItem('persons/' + data[key].id, JSON.stringify(data[key]))
                        }
                    }
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