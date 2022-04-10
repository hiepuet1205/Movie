import React, {useState, useEffect} from 'react'

import { addItemToCart, removeItemFromCart } from '../../helper/cartHelper'

const CartCard = props => {
    const movie = props.movie

    const [quantity, setQuantity] = useState()

    const addMovieHandler = () => {
        addItemToCart(movie, () => {
            setQuantity(prevState => prevState + 1)
        })
    }

    const removeMovieHandler = () => {
        if(quantity > 0){
            removeItemFromCart(movie.id, () => {
                setQuantity(prevState => prevState - 1)
            })
        }
    }

    useEffect(() => {
        setQuantity(movie.quantity)
    }, [])

    if(quantity > 0){
        return (
            <div>
                <h4>{movie.originalTitle}</h4>
                <p>({movie.price}) vnd</p>
                <p>x{quantity}</p>
                <span>
                    <button onClick={addMovieHandler}>+</button>
                    <button onClick={removeMovieHandler}>-</button>
                </span>
            </div>
        )
    }else{
        return <></>
    }
}

export default CartCard