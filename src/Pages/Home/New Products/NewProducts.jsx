import { useEffect, useState } from "react";

const NewProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/alltoys')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const objects = products.slice(9, 15);
    return (
        <div className='my-2'>
             <h1 className='text-center font-bold text-5xl mb-3'>Brand New Products</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {objects.map((item, index) => (
                    <div key={index} className="flex justify-center">
                        <div className="card bg-base-100 shadow-xl">
                            <figure className="px-4 sm:px-6 pt-6 sm:pt-8">
                                <img src={item.picture} alt={item.toy_name} className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center p-4 sm:p-6">
                                <h2 className="card-title text-xl sm:text-2xl">{item.toy_name}</h2>
                                <p><b>Price:</b> {item.price}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NewProducts;