import React, { Fragment, useState } from 'react'
import { signup } from '../auth/helper/index'
import { Link } from 'react-router-dom'

import BackGround from '../core/components/BackGround/BackGround'
import Notification from '../core/components/Notification/Notification'

import classes from './Signup.module.css'

const Signup = () => {

    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        error: '',
        loading: false,
        success: false,
    })

    const { name, email, password, error, loading, success } = values 

    const handleChange = (key) => {
        return (event) => {
            setValues({...values, [key]: event.target.value})
        }
    }

    const submitHandler = (event) => {
        event.preventDefault()

        setValues({...values, error: false, loading: true})
        signup({ name, email, password })
        .then(data => {
            if(data.email === email){
                setValues({
                    ...values,
                    name: '',
                    email: '',
                    password: '',
                    error: false,
                    success: true,
                    loading: false,
                })
            }else{
                setValues({...values, error: true, success: false, loading: false})
            }
        })
        .catch(error => console.log('Error', error))
    }

    return (
        <Fragment>
            <BackGround/>

            <section className={classes.sign_up}>
                <a href="#" className={classes.logo}>
                    <i className={`bx bxs-movie ${classes.logo_bx}`}></i> Movies
                </a>

                <Notification error={error} success={success} signup={true}/>

                <form>
                    <div className={classes.form_group}>
                        <label htmlFor="name">Name</label>
                        <input
                            name="name"
                            value={name}
                            onChange={handleChange('name')}
                            type="name"
                        /> 
                    </div>
                    <div className={classes.form_group}>
                        <label htmlFor="email">Email</label>
                        <input
                            name="email"
                            value={email}
                            onChange={handleChange('email')}
                            type="email"
                        /> 
                    </div>
                    <div className={classes.form_group}>
                        <label htmlFor="password">Password</label>
                        <input
                            name="password"
                            value={password}
                            onChange={handleChange('password')}
                            type="password"
                        />
                    </div>
                    {!loading && (
                        <div className={classes.form_actions}>
                            <button className={classes.btn} onClick={submitHandler}>Sign up</button>
                        </div>
                    )}
                    {loading && (
                        <div className={classes.form_actions}>
                            <button className={classes.btn} disabled={true} onClick={submitHandler}>Pending...</button>
                        </div>
                    )}
                </form>

                <p className={classes.sign_in}>Have an Account Already? <Link to={'/signin'}>Sign in now</Link> </p>
            </section>
        </Fragment>
    )
}

export default Signup