import React from 'react'
import { Link } from 'react-router-dom'

import classes from './Notification.module.css'

const Notification = (props) => {
    return (
        <div className={classes.notification}>
            {props.error && <p className={classes.error}>Check all again!</p>}
            {props.success && props.signup && <p className={classes.success}>Sign up successfully!<Link to='/signin'>Login now</Link></p>}
            {props.success && props.book && <p className={classes.success}>Booking successfully!<Link to='/user/dashbroad'>Check Cart Now</Link></p>}
            {props.success && props.placeOrder && <p className={classes.success}>Place Order successfully! Please F5 page to check it</p>}
        </div>
    )
}

export default Notification