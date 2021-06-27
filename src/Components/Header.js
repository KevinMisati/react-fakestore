import React from 'react'
import classes from "./Header.module.css"
import CartIcon from "./CartIcon"
import {Link } from "react-router-dom"
const Header = () => {
    return (
        <div className={classes.header}>
            <nav>
                <h1>
                    <Link to="/"> FakeShop</Link>
                   
                    </h1>
                <div className={classes.cart}>
                    <button>
                        <Link to="/cart">
                            <CartIcon />
                            <span>0</span>
                        </Link>
                   
                    </button>
                </div>
               
            </nav>

            
        </div>
    )
}

export default Header
