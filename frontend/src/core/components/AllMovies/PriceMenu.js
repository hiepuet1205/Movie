import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom';

import classes from './Menu.module.css'

const PriceMenu = props => {
    const [priceList, setPriceList] = useState([])

    const menuClickHandler = (event) => {
        const elementActive = document.querySelector(`.${classes.activePrice}`)
        const active = ReactDOM.findDOMNode(elementActive);
        const elementClicked = ReactDOM.findDOMNode(event.target)
        active.className = ''
        elementClicked.className = `${classes.activePrice}`
        props.onClickPrice(event.target.getAttribute('value'))
    }

    useEffect(() => {
        var list = []

        for(var i = 1; i <= props.maxPrice/100 + 1; i++) {
            list.push(i*100)
        }

        setPriceList(list)
    }, [props])

    return (
        <div className={classes.menu_box}>
            <h2 className={classes.heading}>Price</h2>
            <ul>
                <li onClick={menuClickHandler} value='All' className={classes.activePrice}>All</li>
                {priceList.map(price => <li onClick={menuClickHandler} value={price}>{`< ${price}`}</li>)}
            </ul>
        </div>
    )
}

export default PriceMenu