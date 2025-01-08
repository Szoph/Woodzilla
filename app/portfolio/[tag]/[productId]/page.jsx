import { useProduct } from '../../../../utils/ProductContext'; 

export default function ProductPage() { 
    const { productData } = useProduct();

    if (!productData) {
        return <p>Product not found...</p>;
    }

    return (
        <div className='p-8'>
            <h1>{productData.title}</h1>
            <img src={productData.image.edges[0].node.url} alt={productData.title} />
            <p>{productData.description}</p>
        </div>
    )
}