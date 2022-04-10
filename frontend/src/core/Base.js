import React, { Fragment } from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

const Base = (props) => {
    return (
        <Fragment>
            <Header/>
            {props.children}
            <Footer/>
        </Fragment>
    )
}

export default Base