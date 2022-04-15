import ReactDOM from 'react-dom';
import {useState, useEffect, memo, useRef} from 'react'
import { isAuthenticated, signout } from '../../../auth/helper/index'
import { useNavigate, Link } from 'react-router-dom'

import classes from './Header.module.css'

const Header = props => {
    const [user, setUser] = useState()
    const [listName, setListName] = useState([])
    const [allName, setAllName] = useState([])
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
    const [searchClasses, setSearchClasses] = useState(`${classes.search_main}`)

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

    const toggleSearch = () => {
        if(searchClasses.includes(`${classes.active}`)){
            setSearchClasses(`${classes.search_main}`)
        }else{
            setSearchClasses(`${classes.search_main} ${classes.active}`)
        }
    }

    const onChangeHandler = event => {
        var search = event.target.value

        setListName(allName.filter(movie => movie.name.includes(search.toLowerCase())))
    }

    const loadListNameMovies = () => {
        const movies = props.movies
        const persons = props.persons

        var list = []

        for(var key in movies){
            list.push({
                name: movies[key].nameVietnamese.toLowerCase(),
                type: 'movie',
                id: movies[key].id
            })
            list.push({
                name: movies[key].originalTitle.toLowerCase(),
                type: 'movie',
                id: movies[key].id
            })
        }

        for(var key in persons){
            list.push({
                name: persons[key].birthName.toLowerCase(),
                type: 'person',
                id: persons[key].id
            })
            list.push({
                name: persons[key].name.toLowerCase(),
                type: 'person',
                id: persons[key].id
            })
        }

        setListName(list)
        setAllName(list)
    }

    useEffect(() =>{
        
        window.addEventListener('scroll', addClassHeader)

        window.onscroll = () => {
            setMenuClasses(`bx bx-menu ${classes.menu_icon}`)
            setNavbarClasses(`${classes.navbar}`)
        }

        loadingUser()
        loadListNameMovies()
    }, [props])

    return (
        <header className={headerClasses}>
            <Link to={'/#'} className={classes.logo}>
                <i className={`${classes.bx} bx bxs-movie`}></i> Movies
            </Link>
            <div className={menuClasses} onClick={menuClickHandler}></div>

            {/* <!-- menu --> */}
            <ul className={navbarClasses}>
                <li><Link to={"/#home"} className={classes.active} onClick={navbarClickHandler}>Home</Link></li>
                <li><Link to={"/allmovies"} onClick={navbarClickHandler}>Movies</Link></li>
                <li><Link to={"/#coming"} onClick={navbarClickHandler}>Coming</Link></li>
                <li><Link to={"/#newsletter"} onClick={navbarClickHandler}>Newsletter</Link></li>
            </ul>

            <div>
                <button className={classes.search} onClick={toggleSearch}>
                    <i className='bx bx-search-alt'></i>
                </button>
                <button className={classes.btn} onClick={accountClickHandler}>{user ? user.name : 'account'}</button>
            </div>

            <ul className={navbarAccountClasses}>
                <li><Link to={"/user/dashbroad"}>My Account</Link></li>
                <li><Link to={"/user/dashbroad/#cart"}>My Cart</Link></li>
                <li><Link to={"/user/dashbroad/#order"}>My Order</Link></li>
                <li><Link to={"/#"} onClick={signOutHandler}>Sign Out</Link></li>
            </ul>

            <div className={searchClasses}>
                <div>
                    <input 
                        type="text"
                        onChange={onChangeHandler}
                    />
                </div>
                <ul>
                    {listName.map(item => {
                        if(item.type === 'movie'){
                            return <li><Link to={'/movie/' + item.id}>{item.name}</Link></li>
                        }
                        if(item.type === 'person'){
                            return <li><Link to={'/profile/' + item.id}>{item.name}</Link></li>
                        }
                    })}
                </ul>
            </div>
        </header>
    )
}

export default memo(Header)