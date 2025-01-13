'use client'; 

import { useEffect, useState } from 'react'; 
import { fetchProductsByTag } from '@/utils/shopify';
import Spinner from '../Etc/Spinner';
import Link from 'next/link';
import { useProduct } from '@/utils/ProductContext';

const Store = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { setProductData } = useProduct(); 


    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true); 
                const data = await fetchProductsByTag('for-sale'); 
                setProducts(data); 
            } catch (error) {
                console.error('Error fetching products:', error); 
            } finally {
                setLoading(false);
            }
        }
        fetchProducts();
    }, []);


  return (
    <div className='w-full p-8 pt-20 flex flex-col'>

        <h1 className='text-4xl tracking-widest font-bold text-center mb-10'>PRINTS</h1>

        {loading ? (
            <div className='flex flex-col gap-4 items-center'>
                <p>Loading...</p>
                <Spinner />
                </div>
        ) : products.length > 0 ? ( 
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 flex items-center'>
                {products.map((product) => (
                    <Link href={`/prints/${product.node.id.split('/').pop()}`} onClick={() => setProductData(product.node)} key={product.node.id} className='m-4'>
                        <div className=''>
                            <img src={product.node.images.edges[0].node.url} alt={product.node.title} className='w-full h-64 object-cover' />
                            <h2 className='pt-8 tracking-widest'>{product.node.title}</h2>
                            
                        </div>
                    </Link>
                ))}




            </div>
        ) : (
            <p className='text-lg font-semibold tracking-widest text-center'>No prints available for sale. Please check back later.</p>
        )}


    </div>
  )
}

export default Store