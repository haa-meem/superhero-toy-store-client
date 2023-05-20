import { FaStar } from 'react-icons/fa';
import { useLoaderData, useParams } from 'react-router-dom';

const Toy = () => {
    const { _id, picture, toy_name, seller_name, seller_email, price, rating, available_quantity, detail_description } = useParams();
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
                <div className="card-actions mt-4">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Toy;