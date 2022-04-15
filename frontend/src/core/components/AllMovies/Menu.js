import React from 'react'

import CategoryMenu from './CategoryMenu'
import PriceMenu from './PriceMenu'

import classes from './Menu.module.css'

const Menu = props => {
    return (
        <div className={classes.menu}>
            <CategoryMenu onClickCategory={props.onClickCategory}/>
            <PriceMenu onClickPrice={props.onClickPrice} maxPrice={props.maxPrice}/>
        </div>
    )
}

export default Menu