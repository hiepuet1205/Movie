import classes from './Newsletter.module.css'
import { memo } from 'react'

const Newsletter = () => {
    return (
        <section className={classes.newsletter} id="newsletter">
            <h2>Subscribe To Get <br/>Newsletter</h2>
            <form action="">
                <input type="email" className={classes.email} placeholder="Enter your email address" required/>
                <input type="submit" value="Subscribe" className={classes.btn}/>
            </form>
        </section>
    )
}

export default memo(Newsletter)