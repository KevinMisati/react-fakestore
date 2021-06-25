import React, { createContext,useReducer } from 'react';

const initialState = []
   
    

const reducer = (action, state) => {
    if (action.type === "ADD_PRODUCTS") {
        return state = action.payload
        
    }
    else {
        return state;
    }
}


export const GlobalContext = createContext([])

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    
    return (
        <GlobalContext.Provider value={{
            products:state,
            dispatch,
           
        }}> 

        {children}
    </GlobalContext.Provider >
    )
}