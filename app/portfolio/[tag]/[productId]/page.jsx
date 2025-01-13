'use client'; 
import { useProduct } from "@/utils/ProductContext";
import { useEffect, useState } from "react"; 
import ProductDetails from "@/components/Product/ProductDetails";
import { fetchProductsById } from "@/utils/shopify";
import React from "react";

export default function ProductPage({ params }) { 
    const unwrappedParams = React.use(params);
    const { productId } = unwrappedParams || {};
    const { productData, setProductData } = useProduct();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (productId && !productData) {
            const fetchProducts = async () => {
                try {
                    setLoading(true); 
                    const data = await fetchProductsById(productId);
                    setProductData(data); 
                } catch (error) {
                    console.error('Error fetching products:', error); 
                } finally {
                    setLoading(false);
                }
            }
            fetchProducts();
        }
    }, [productId, productData, setProductData]); 
   

    if (loading) return <p>Loading...</p>;
    if (!productData) return <p>Product not found...</p>;

    return (
        <>
      
            <ProductDetails productData={productData} />
        </>
    )
}