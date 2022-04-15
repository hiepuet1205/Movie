import React, {useState, Fragment} from 'react'
import { Navigate } from 'react-router-dom'
import { signin, authenticate, isAuthenticated } from '../auth/helper/index'
import { Link } from 'react-router-dom'

import BackGround from '../core/components/BackGround/BackGround'
import Notification from '../core/components/Notification/Notification'

import classes from './Signin.module.css'

const Signin = () => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        error: false,
        success: false,
        loading: false,
        didRedirect: false,
    })

    const { name, email, password, error, success, loading, didRedirect } = values 

    const handleChange = (key) => {
        return (event) => {
            setValues({...values, [key]: event.target.value})
        }
    }

    const redirectToMainPage = () => {
        if(isAuthenticated()){
            return <Navigate to='/'/>
        }
    }

    const submitHandler = (event) => {
        event.preventDefault()

        setValues({
            ...values,
            loading: true,
        })

        setValues({...values, error: false, loading: true})
        signin({ email, password })
        .then(data => {
            if(data.token){
                authenticate(data, () => {
                    setValues({
                        ...values,
                        success: true,
                        loading: false,
                    })
                })
            }else{
                setValues({...values, error: true, loading: false})
            }
        })
        .catch(error => console.log('Error', error))
    }

    return (
        <Fragment>
            {redirectToMainPage()}
            <BackGround/>

            <section className={classes.sign_in}>
                <a href="#" className={classes.logo}>
                    <i className={`bx bxs-movie ${classes.logo_bx}`}></i> Movies
                </a>

                <Notification error={error} success={success} signup={false}/>

                <form>
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
                            <button className={classes.btn} onClick={submitHandler}>Sign in</button>
                        </div>
                    )}
                    {loading && (
                        <div className={classes.form_actions}>
                            <button className={classes.btn} disabled={true} onClick={submitHandler}>Pending...</button>
                        </div>
                    )}
                </form>

                <p className={classes.sign_up}>Don't have an account? <Link to='/signup'>Sign up now!</Link> </p>
            </section>
        </Fragment>
    )

}

export default Signin