import ReactDOM from 'react-dom';
import {useState, useEffect, memo, useRef} from 'react'
import { isAuthenticated, signout } from '../../../auth/helper/index'
import { useNavigate, Link } from 'react-router-dom'

import classes from './Header.module.css'

const Header = () => {
    const [user, setUser] = useState()
    const navigate = useNavigate()

    const loadingUser = () => {
        if(isAuthenticated()){
            setUser(isAuthenticated().user)
        }
    }

    const [menuClasses, setMenuClasses] = useState(`bx bx-menu ${classes.menu_icon}`)
    const [navbarClasses, setNavbarClasses] = useState(`${classes.navbar}`)
    const [headerClasses, setHeaderClasses] = useState('')
    const [navbarAccountClasses, setNavbarAccountClasses] = useState(`${classes.navbar_account}`)

    const menuClickHandler = () => {
        if(menuClasses.includes('bx-menu')){
            setMenuClasses(`bx bx-x ${classes.menu_icon}`)
        }else{
            setMenuClasses(`bx bx-menu ${classes.menu_icon}`)
        }

        if(menuClasses.includes('bx-menu')){
            setNavbarClasses(`${classes.navbar} ${classes.active}`)
        }else{
            setNavbarClasses(`${classes.navbar}`)
        }
    }

    const accountClickHandler = () => {
        if(navbarAccountClasses.includes('navbar_account_active')){
            setNavbarAccountClasses(`${classes.navbar_account}`)
        }else{
            setNavbarAccountClasses(`${classes.navbar_account} ${classes.navbar_account_active}`)
        }
    }

    const signOutHandler = () => {
        signout(() => {
            navigate('/signin')
        })
    }

    const navbarClickHandler = (event) => {
        const elementActive = document.querySelector(`.${classes.active}`)
        const active = ReactDOM.findDOMNode(elementActive);
        const elementClicked = ReactDOM.findDOMNode(event.target)
        active.className = ''
        elementClicked.className = classes.active
    }

    const addClassHeader = () => {
        if(window.scrollY > 0){
            setHeaderClasses(`${classes.shadow}`)
        }else{
            setHeaderClasses('')
        }
    }

    useEffect(() =>{
        
        window.addEventListener('scroll', addClassHeader)

        window.onscroll = () => {
            setMenuClasses(`bx bx-menu ${classes.menu_icon}`)
            setNavbarClasses(`${classes.navbar}`)
        }

        loadingUser()
    }, [])

    return (
        <header className={headerClasses}>
            <Link to={'/#'} className={classes.logo}>
                <i className={`${classes.bx} bx bxs-movie`}></i> Movies
            </Link>
            <div className={menuClasses} onClick={menuClickHandler}></div>

            {/* <!-- menu --> */}
            <ul className={navbarClasses}>
                <li><Link to={"/#home"} className={classes.active} onClick={navbarClickHandler}>Home</Link></li>
                <li><Link to={"/#movies"} onClick={navbarClickHandler}>Movies</Link></li>
                <li><Link to={"/#coming"} onClick={navbarClickHandler}>Coming</Link></li>
                <li><Link to={"/#newsletter"} onClick={navbarClickHandler}>Newsletter</Link></li>
            </ul>
            <button className={classes.btn} onClick={accountClickHandler}>{user ? user.name : 'account'}</button>
            <ul className={navbarAccountClasses}>
                <li><Link to={"/user/dashbroad"}>My Account</Link></li>
                <li><Link to={"/user/dashbroad/#cart"}>My Cart</Link></li>
                <li><Link to={"/user/dashbroad/#order"}>My Order</Link></li>
                <li><Link to={"/#"} onClick={signOutHandler}>Sign Out</Link></li>
            </ul>
        </header>
    )
}

export default memo(Header)