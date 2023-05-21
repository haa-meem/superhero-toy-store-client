import { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';

const Toy = () => {
    //Website name changing in every route
    useEffect(() => {
        document.title = 'SuperHero Toy Store | View Details'
    }, []);
    const toy = useLoaderData();
    return (
        <div className="card w-full bg-base-100 shadow-xl mx-auto border border-base-300 rounded-lg overflow-hidden">
            <figure className="px-10 pt-10">
                <img src={toy.picture} alt={toy.toy_name} className="rounded-xl h-96" />
            </figure>
            <div className="card-body items-center text-center p-6">
                <h2 className="card-title">{toy.toy_name}</h2>
                <p><b>Seller Name:</b> {toy.seller_name}</p>
                <p><b>Seller Email:</b> {toy.seller_email}</p>
                <p><b>Price:</b> {toy.price}</p>
                <p><b>Rating:</b> {Array(Math.round(toy.rating)).fill(<span className="text-yellow-500">&#9733;</span>)} {toy.rating}</p>
                <p><b>Available Quantity:</b> {toy.available_quantity}</p>
                <p className="break-words"><b>Detail Description:</b> {toy.detail_description}</p>
            </div>
        </div>
    );
};

export default Toy;