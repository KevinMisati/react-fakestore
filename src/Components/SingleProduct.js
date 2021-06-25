import React from 'react'
import classes from "./SingleProduct.module.css"

const SingleProduct = ({product}) => {
    return (
        <div className={classes["single-product"]}>
           
                <img src={product.image} alt="" />
            
            <div>
                <hr/>
                <h4 className={classes.rating}>
                    <span>⭐</span>
                    <span>⭐</span>
                    <span>⭐</span>
                    <span>⭐</span>
                    <span>⭐</span>
                    <span>⭐</span>
                </h4>
                <h4>{product.title}</h4>
                <h4>KSH {product.price}</h4>
                <button>Add To Cart</button>
            </div>
            
        </div>
    )
}

export default SingleProduct
