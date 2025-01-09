'use client';
import { useProduct } from '../../../../utils/ProductContext';
import { useEffect, useState } from 'react'; 
import Link from 'next/link';

export default function ProductPage() { 
    const { productData } = useProduct();
    const [isOpen, setIsOpen] = useState(false);

    const handleClickPic = () => {
        setIsOpen(!isOpen); 
    }

    useEffect(() => {
        console.log(productData);
    }, [productData])


    if (!productData) {
        return <p className='text-center text-lg font-semibold tracking-wider'>Product not found...</p>;
    }




    const isForSale = productData.tags.includes('for-sale'); 


    return (
        <div className='relative w-full h-full'>
        <div className='px-20 py-20 flex lg:flex-row flex-col gap-8'>

            <div className='lg:w-2/3 w-full flex justify-center items-center'>
            <img src={productData.images.edges[0].node.url} alt={productData.title} className='hover:cursor-pointer max-h-screen ' onClick={handleClickPic} />
            </div>
            {isOpen && (
                <div className='absolute top-0 left-0 w-full h-screen p-8 flex justify-center bg-black bg-opacity-70'>
                    <img src={productData.images.edges[0].node.url} alt={productData.title} className=' object-contain' onClick={handleClickPic} />
                </div>
            )}
            

            <div className='lg:w-1/3 w-full flex flex-col gap-4'>
            <h1 className='text-3xl font-bold tracking-widest'>{productData.title.toUpperCase()}</h1>
            
            <p className='font-semibold tracking-wider'>{productData.description}</p>

            

            {isForSale && (
                <div className='flex flex-col gap-4 '>
                    <p className='text-lg font-semibold'>£{productData.priceRange.minVariantPrice.amount}</p>
                    <Link href='/' className=''>
                    <button className='bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-600 font-bold'>BUY NOW</button></Link>
                </div>
            )}
            </div>
            
        </div>
        </div>
    )
}