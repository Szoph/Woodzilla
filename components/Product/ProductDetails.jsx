'use client';
import { useEffect, useState } from 'react'; 
import { Modal, Dropdown } from 'flowbite-react'; 
import Link from 'next/link';

const ProductDetails = ({ productData }) => {
 
    const [isOpen, setIsOpen] = useState(false);
    const [selectedVariant, setSelectedVariant] = useState(null);
    const variants = productData.variants.edges; 

    const handleVariantChange = (variantId) => {
        const variant = variants.find((v) => v.node.id === variantId)?.node;
        setSelectedVariant(variant);
    }

    


    if (!productData) {
        return <p className='text-center text-lg font-semibold tracking-wider'>Product not found...</p>;
    }




    const isForSale = productData.tags.includes('for-sale'); 



  return (
    <>
    <Modal dismissible show={isOpen}  onClose={() => setIsOpen(false)} popup>
                <Modal.Header><p className='text-xl font-bold tracking-widest p-4'>{productData.title.toUpperCase()}</p></Modal.Header>
                <Modal.Body className='flex justify-center'>
                    
                    <img src={productData.images.edges[0].node.url} alt={productData.title} className='object-contain' />
                
                </Modal.Body>
            </Modal>
        <div className='lg:p-20 md:p-16 p-8 flex lg:flex-row flex-col gap-8 mb-28'>

            <div className='lg:w-2/3 w-full flex justify-center items-center'>
            <img src={productData.images.edges[0].node.url} alt={productData.title} className='hover:cursor-pointer max-h-screen ' onClick={() => setIsOpen(true)} />
            </div>
            
            
            

            <div className='lg:w-1/3 w-full flex flex-col gap-8'>
            <h1 className='text-3xl font-bold tracking-widest'>{productData.title.toUpperCase()}</h1>
            
            <p className='tracking-wider'>{productData.description}</p>

            

            {isForSale ? (
                <div className='flex flex-col gap-8 '>

                    <div className='tracking-widest font-medium'>
                    <Dropdown label={selectedVariant ? selectedVariant.title : 'Select a size'} inline >
                        {variants.map(({ node }) => (
                            <Dropdown.Item key={node.id} onClick={() => handleVariantChange(node.id)}>
                                {node.title}
                            </Dropdown.Item>
                        ))}
                    </Dropdown>
                        </div>

                    <p className='text-lg font-semibold'>£{selectedVariant?.price.amount ?? ''}</p>
                   
                    <Link href='/' className=' mt-8 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-600 font-bold tracking-widest text-center'>
                    ADD TO CART </Link>
                </div>
            ) : (
                <p className='text-sm tracking-widest mt-8'>Unavailable for purchase :(</p>
            )}
            </div>
            
        </div>
        
        </>
  )
}


export default ProductDetails