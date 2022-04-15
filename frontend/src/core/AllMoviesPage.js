import React from 'react'
import { useState, useEffect } from 'react'
import { getMovies } from './helper/coreApiCalls'

import Base from './Base'
import Menu from './components/AllMovies/Menu'
import Movies from './components/AllMovies/Movies'

import classes from './AllMoviesPage.module.css'

const AllMoviesPage = () => {
    const [movies, setMovies] = useState([])
    const [error, setError] = useState()
    const [category, setCategory] = useState('All')
    const [price, setPrice] = useState('All')
    const [maxPrice, setMaxPrice] = useState(0)

    const modifyMovies = data => {
        let ms = []

        if(category === 'All' && price === 'All') {
            setMovies(data)
            return
        }

        if(category !== 'All'){
            for(var key in data) {
                if(data[key].category.includes('http://localhost:8000/api/category/' + category + '/')){
                    ms.push(data[key])
                }
            }
        }else{
            ms = data
        }

        if(price !== 'All'){
            ms = ms.filter(movie => movie.price <= parseInt(price, 10))
        }
        setMovies(ms)
    }

    const getMaxPrice = data => {
        var max = 0

        for(var key in data) {
            if(data[key].price > max){
                max = data[key].price
            }
        }

        setMaxPrice(max)
    }

    const loadedMovies = () => {
        getMovies()
        .then(data => {
            if(data.error){
                setError(data.error)
                console.error(error)
            }else{
                modifyMovies(data)
                getMaxPrice(data)
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
    }, [category, price])

    const onClickCategory = (category) => {
        setCategory(category)
    }

    const onClickPrice = (price) => {
        setPrice(price)
    }

    return (
        <Base>
            <section className={classes.movies} id="movies">
                <h2 className={classes.heading}>Movies</h2>
                <div className={classes.main}>
                    <Menu onClickCategory={onClickCategory} onClickPrice={onClickPrice} maxPrice={maxPrice}/>
                    <Movies movies={movies}/>
                </div>
            </section>
        </Base>
    )
}

export default AllMoviesPage