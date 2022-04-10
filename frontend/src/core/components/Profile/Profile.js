import React from 'react'

import Info from './Info'
import Order from './Order'
import Cart from './Cart'

import classes from './Profile.module.css'

const Profile = () => {
    return (
        <section className={`${classes.account} ${classes.account_container}`} id="account">
            <Info/>
            <Cart/>
            <Order/>
        </section>
    )
}

export default Profile