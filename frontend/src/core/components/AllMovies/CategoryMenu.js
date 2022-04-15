import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom';

import { getCategorys } from '../../helper/coreApiCalls'

import classes from './Menu.module.css'

const CategoryMenu = props => {
    const [categorys, setCategorys] = useState()

    const loadedCategorys = () => {
        getCategorys()
        .then(data => {
            if(data.error){
                console.error(data.error)
            }else{
                setCategorys(data)
                if(typeof window.localStorage !== 'undefined'){
                    for(var key in data){
                        localStorage.setItem('http://localhost:8000/api/category/' + data[key].id + '/', JSON.stringify(data[key]))
                    }
                }
            }
        })
    }

    useEffect(() => {
        loadedCategorys()
    }, [])

    const menuClickHandler = (event) => {
        const elementActive = document.querySelector(`.${classes.activeCategory}`)
        const active = ReactDOM.findDOMNode(elementActive);
        const elementClicked = ReactDOM.findDOMNode(event.target)
        active.className = ''
        elementClicked.className = `${classes.activeCategory}`
        props.onClickCategory(event.target.getAttribute('value'))
    }

    return (
        <div className={classes.menu_box}>
            <h2 className={classes.heading}>Category</h2>
            <ul>
                <li className={classes.activeCategory} value='All' onClick={menuClickHandler}>All</li>
                {categorys && categorys.map(category => <li value={category.id} onClick={menuClickHandler}>{category.name}</li>)}
            </ul>
        </div>
    )
}

export default CategoryMenu