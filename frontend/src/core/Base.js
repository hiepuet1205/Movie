import React, { Fragment, useState, useEffect } from 'react'
import { getMovies, getPersons } from './helper/coreApiCalls'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

const Base = (props) => {
    const [movies, setMovies] = useState([])
    const [persons, setPersons] = useState([])
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

    const loadedPersons = () => {
        getPersons()
        .then(data => {
            if(data.error){
                console.error(data.error)
            }else{
                setPersons(data)
                if(typeof window.localStorage !== 'undefined'){
                    for(var key in data){
                        localStorage.setItem('http://localhost:8000/api/person/' + data[key].id + '/', JSON.stringify(data[key]))
                    }
                }
            }
        })
    }

    useEffect(() => {
        loadedMovies()
        loadedPersons()
    }, [])

    return (
        <Fragment>
            <Header movies={movies} persons={persons}/>
            {props.children}
            <Footer/>
        </Fragment>
    )
}

export default Base