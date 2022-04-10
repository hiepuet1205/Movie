import classes from './Footer.module.css'
import { memo } from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <section className={classes.footer}>
            <Link to="" className={classes.logo}>
                <i className={`${classes.bx} bx bxs-movie`}></i> Movies
            </Link>
            <div className={classes.social}>
                <Link to=""><i className={`${classes.bx} bx bxl-facebook`}></i></Link>
                <Link to=""><i className={`${classes.bx} bx bxl-twitter`}></i></Link>
                <Link to=""><i className={`${classes.bx} bx bxl-instagram`}></i></Link>
                <Link to=""><i className={`${classes.bx} bx bxl-tiktok`}></i></Link>
            </div>
        </section>
    )
}

export default memo(Footer)