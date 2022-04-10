import React from 'react'
import avatar from '../../../assets/img/avatar.png'

import classes from './Info.module.css'

const Info = () => {
    return (
        <div className={classes.account_info} id='info'>
            <img src={avatar} alt="avatar" className={classes.account_info_img}/>
            <div className={classes.account_info_details}>
                <div>
                    <h4>name</h4>
                    <p>name</p>
                </div>
                <div>
                    <h4>Email</h4>
                    <p>Email address</p>
                </div>
            </div>
        </div>
    )
}

export default Info