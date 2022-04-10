import React, {useState, useEffect} from 'react'
import { getCartFromLocalStorage } from '../../helper/cartHelper'
import { placeOrder } from '../../helper/orderHelper'

import CartCard from './CartCard'
import Notification from '../Notification/Notification'

import classes from './Cart.module.css'

const Cart = () => {
    const [cart, setCart] = useState()
    const [success, setSuccess] = useState(false)

    const loadedCart = () => {
        var c = getCartFromLocalStorage()
        setCart(c)
    }

    useEffect(() => {
        loadedCart()
    }, [])

    const submitHandler = (e) => {
        e.preventDefault()
        var c = getCartFromLocalStorage()
        
        for(var key in c.items){
            const order = {
                movie_id: c.items[key].id,
                quantity: c.items[key].quantity,
            }

            placeOrder(order)
            .then(data => {
                console.log(data)
                setSuccess(true)
            })
            .catch(error => {
                console.log(error)
                setSuccess(false)
            })

            if(!success) break
        }
    }
 
    return (
        <div className={classes.account_cart} id='cart'>
            <h2 className={classes.heading}>Cart</h2>
            <div className={classes.account_cart_details}>
                {cart && cart.items.map(item => <CartCard movie={item}/>)}
            </div>
            <span className={classes.account_cart_confirm}>
                <button onClick={submitHandler}>BUY</button>
            </span>
            <Notification success={success} placeOrder={true}/>
        </div>
    )
}

export default Cart