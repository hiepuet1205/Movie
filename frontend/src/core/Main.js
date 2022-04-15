import React from 'react'
import { useState, useEffect } from 'react' 
import { getMovies } from './helper/coreApiCalls'

import Base from './Base'
import Home from './components/Home/Home'
import Movies from './components/Movies/Movies'
import ComingSoon from './components/ComingSoon/ComingSoon'
import Newsletter from './components/Newsletter/Newsletter'

const Main = () => {
    const [movies, setMovies] = useState([])
    const [error, setError] = useState()

    const loadedMovies = () => {
        getMovies()
        .then(data => {
            if(data.error){
                setError(data.error)
                console.error(error)
            }else{
                setMovies(data)
                if(typeof window.localStorage !== 'undefined'){
                    for(var key in data){
                        localStorage.setItem('movies/' + data[key].id, JSON.stringify(data[key]))
                    }
                }
            }
        })
    }

    useEffect(() => {
        loadedMovies()
    }, [])

    return (
        <Base movies={movies}>
            <Home movies={movies}/>
            <Movies movies={movies}/>
            <ComingSoon movies={movies}/>
            <Newsletter/>
        </Base>
    )
}

export default Main