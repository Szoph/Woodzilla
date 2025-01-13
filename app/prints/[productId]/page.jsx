'use client'; 
import { useEffect, useState } from 'react';
import { useProduct } from '../../../utils/ProductContext';
import { fetchProductsById } from '../../../utils/shopify';
import ProductDetails from '@/components/Product/ProductDetails';
import React from 'react'

export default function StoreProductPage({ params }) {
    const unwrappedParams = React.use(params);
    const [loading, setLoading] = useState(false);
    const { productId } = unwrappedParams;
    const { productData, setProductData } = useProduct();

    useEffect(() => {
            if (productId && !productData) {
                console.log('Product found:', productId);
                const fetchProducts = async () => {
                   try {
                    setLoading(true);
                    const data = await fetchProductsById(productId); 
                    setProductData(data); 
                    
                   } catch (error) {
                    console.error('Error fetching products:', error);
                   } finally {
                    setLoading(false)
                   }
                }; 
                fetchProducts();
            }
        }, [productId]);

        if (loading) return <p>Loading...</p>;
        if (!productData) return <p>Product not found...</p>;
        
        
        return <ProductDetails productData={productData} />
}