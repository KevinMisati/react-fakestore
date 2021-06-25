import React, { useEffect,  useContext } from 'react'
import { GlobalContext} from "../context/GlobalProvider"

const AllProducts = () => {
    
    const { dispatch } = useContext(GlobalContext)
    

    const fetchData = async () => {
        const response = await fetch("https://fakestoreapi.com/products");
        const responseData = await response.json()
        //dispatch({type: "ADD_PRODUCTS",payload:responseData})
        dispatch(responseData)
}
    
    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div>
            
        </div>
    )
}

export default AllProducts
