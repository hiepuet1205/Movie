import React, { useState, useEffect, Fragment } from 'react'

import { deleteOrder } from '../../helper/orderHelper'

const OrderCard = props => {
    const movie_id = props.movie_id
    const quantity = props.quantity
    const order_id = props.order_id

    const [movie, setMovie] = useState()
    const [cancel, setCancel] = useState(false)

    const loadedMovie = () => {
        let m

        if(typeof window.localStorage !== 'undefined'){
            m = JSON.parse(localStorage.getItem('movies/' + movie_id))
        }

        setMovie(m)
    }

    const cancelHandler = () => {
        deleteOrder(order_id)
        .then((data) => {
            setCancel(true)
            console.log(data)
        })
        .catch((error) => console.error(error))
    }

    useEffect(() => {
        loadedMovie()
    }, [])

    return (
        <Fragment>
            {!cancel && 
                <div>
                    {movie &&
                        <Fragment>
                            <h4>{movie.originalTitle}</h4>
                            <p>({movie.price}) vnd</p>
                            <p>x{quantity}</p>
                            <button onClick={cancelHandler}>Cancel</button>
                        </Fragment>
                    }
                </div>
            }
        </Fragment>
    )
}

export default OrderCard