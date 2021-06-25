import React,{useContext} from 'react'
import { GlobalContext } from "../context/GlobalProvider"
import SingleProduct from "./SingleProduct"
import classes from "./DispalyProducts.module.css"
const DispalyProducts = () => {
    const { products } = useContext(GlobalContext)
    console.log(products,"paly")
    return (
        <div className={classes["display-products"]}> 
              {products.map((product) => {
                return (
                   <SingleProduct key={product.id} product={product} />
                )
            })} 
        </div>
    )
}

export default DispalyProducts
