import { useEffect, useState } from "react";

const AllToys = () => {
    const [toys, setToys] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/alltoys')
            .then(res => res.json())
            .then(data => setToys(data))
    }, []);

    //show all section
    const [showAll, setShowAll] = useState(false);
    const visibleToys = showAll ? toys : toys.slice(0, 20);

    const handleShowAll = () => {
        setShowAll(true);
    };
    return (
        <div className="container mx-auto">
            <h1 className="text-5xl font-bold my-4 text-center">All Toys</h1>
            <div className="overflow-x-auto">
                <table className="min-w-full border divide-y divide-gray-200 mb-3 mx-2">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="px-4 py-2 border">Seller</th>
                            <th className="px-4 py-2 border">Toy Name</th>
                            <th className="px-4 py-2 border">Sub-category</th>
                            <th className="px-4 py-2 border">Price</th>
                            <th className="px-4 py-2 border">Available Quantity</th>
                            <th className="px-4 py-2 border">View Details</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {visibleToys.map((toy) => (
                            <tr key={toy._id}>
                                <td className="px-4 py-2 border text-center">{toy.seller_name}</td>
                                <td className="px-4 py-2 border text-center">{toy.toy_name}</td>
                                <td className="px-4 py-2 border text-center">{toy.sub_category}</td>
                                <td className="px-4 py-2 border text-center">{toy.price}</td>
                                <td className="px-4 py-2 border text-center">{toy.available_quantity}</td>
                                <td className="px-4 py-2 border text-center">
                                    <button className="bg-orange-400 hover:bg-green-500 text-gray-800 font-bold py-2 px-4 rounded">
                                        View Details
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {!showAll && (
                <div className="flex justify-center mt-4 mb-3">
                    <button
                        className="bg-blue-500 hover:bg-green-500 text-white font-bold py-2 px-4 rounded"
                        onClick={handleShowAll}
                    >
                        Show All
                    </button>
                </div>
            )}
        </div>
    );
};

export default AllToys;