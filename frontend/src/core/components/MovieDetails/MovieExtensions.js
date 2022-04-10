import { memo, useState, useEffect, Fragment } from 'react';
import { getCategory } from '../../helper/coreApiCalls'
import { addItemToCart } from '../../helper/cartHelper'

import Notification from '../Notification/Notification'

import classes from './MovieExtensions.module.css';

const MovieExtensions = props => {
    const movie = props.movie

    const [categorys, setCategorys] = useState([])
    const [success, setSuccess] = useState(false)

    const loadedCategory = () => {
        setCategorys([])
        let cs = []

        if(typeof window.localStorage !== 'undefined'){
            for (const key in movie.category) {
                const category_id = movie.category[key].slice(-2,-1)
                cs.push(JSON.parse(localStorage.getItem('categorys/' + category_id)))
            }

            setCategorys(cs)
        }

        if(!cs){
            getCategory()
            .then(data => {
                if(data.error){
                    console.error(data.error)
                }else{
                    setCategorys(data)
                    if(typeof window.localStorage !== 'undefined'){
                        for(var key in data){
                            localStorage.setItem('categorys/' + data[key].id, JSON.stringify(data[key]))
                        }
                    }
                }
            })
        }
    }

    useEffect(() => {
        loadedCategory()
    }, [])

    // TODO: add movie to cart and return notification
    const addMovieToCart = () => {
        addItemToCart(movie, () => {setSuccess(true)})
    }

    return (
        <Fragment>
            <div className={classes.movie_extensions}>
                <div className={classes.movie_extensions_category}>
                    {categorys.map((category) => <button href="#">{category.name}</button>)}
                </div>
                <div className={classes.movie_extensions_book}>
                    <button onClick={addMovieToCart}>Book Now</button>
                </div>
            </div>    
            <Notification success={success} book={true}/>
        </Fragment>
    )
}

export default memo(MovieExtensions)