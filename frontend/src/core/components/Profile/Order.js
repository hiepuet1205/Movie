import React, {useState, useEffect} from 'react'
import { getOrder } from '../../helper/orderHelper'

import OrderCard from './OrderCard'

import classes from './Order.module.css'

const Order = () => {
    const [orders, setOrders] = useState()

    const loadedOrder = () => {
        getOrder()
        .then(data => {
            setOrders(data.orders)
        })
        .catch((error) => {console.error(error)})
    }

    useEffect(() => {
        loadedOrder()
    }, [])

    return (
        <div className={classes.account_purchase_order} id='order'>
            <h2 className={classes.heading}>Order</h2>
            <div className={classes.account_purchase_order_details}>
                {orders && orders.map(order => <OrderCard movie_id={order.movie_id} quantity={order.quantity} order_id={order.id}/>)}
            </div>
        </div>
    )
}

export default Order