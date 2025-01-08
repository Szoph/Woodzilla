'use client';
import { createContext, useState, useContext } from 'react';

const ProductContext = createContext();

export const useProduct = () => {
    return useContext(ProductContext);
}; 

export const ProductProvider = ({ children }) => {
    const [productData, setProductData] = useState(null); 

    return (
        <ProductContext.Provider value={{ productData, setProductData }}>
            {children}
        </ProductContext.Provider>
    )
}