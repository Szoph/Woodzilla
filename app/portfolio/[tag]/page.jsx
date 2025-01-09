'use client';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation'; 
import { fetchProductsByTag } from '../../../utils/shopify';
import { useProduct } from '../../../utils/ProductContext';
import Link from 'next/link';
import Spinner from '@/components/Etc/Spinner';

export default function PortfolioTag() {
    const { tag } = useParams();
    const [products, setProducts] = useState([]); 
    const [loading, setLoading] = useState(true);
    const { setProductData } = useProduct();


    const handleProductClick = (product) => {
        setProductData(product);
        console.log('Product clicked:', product); 

    }
  

    useEffect(() => {
        if (tag) {
            console.log('Tag found:', tag);
            const fetchProducts = async () => {
               try {
                setLoading(true);
                const data = await fetchProductsByTag(tag); 
                setProducts(data); 
                
               } catch (error) {
                console.error('Error fetching products:', error);
               } finally {
                setLoading(false)
               }
            }; 
            fetchProducts();
        }
    }, [tag]); 

   

    return (
        <div className='p-8 pt-20'>
            <h1 className='text-4xl tracking-widest font-bold capitalize mb-6 text-center pb-10'>{tag.toUpperCase()}</h1>
            {loading ? (
                <div className='flex flex-col gap-4 items-center'>
                <p className='text-xl font-semibold tracking-widest'>Loading products...</p>
                <Spinner />
                </div>
            ) : products.length > 0 ? (
                <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4'>
                    {products.map((product) => (
                        <Link key={product.node.id} href={`/portfolio/${tag}/${product.node.id.split('/').pop()}`} onClick={() => handleProductClick(product.node)}>
                        <div className='p-4'>
                            <img src={product.node.images.edges[0].node.url} alt={product.node.title} className='w-full h-64 object-cover' />
                            <h2 className='pt-8 '>{product.node.title}</h2>
                            
                            
                        </div>
                        </Link>
                    ))}
                </div>
            ) : (
                <p className='text-lg font-semibold tracking-widest text-center'>Uh oh! No products found for "{tag}". Check back later</p>
            )}
        </div>
    )
}