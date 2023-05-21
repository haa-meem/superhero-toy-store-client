import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";

const MyToys = () => {
    //Website name changing in every route
    useEffect(() => {
        document.title = 'SuperHero Toy Store | My Toys'
    }, []);

    const initialToys = useLoaderData();
    const [toys, setToys] = useState(initialToys);

    const handleUpdateToy = (_id) => {
        console.log(_id);
    };

    const handleDeleteToy = (_id) => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://superhero-toy-store-server.vercel.app/atoy/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            const remainingToys = toys.filter(toy => toy._id !== _id);
                            setToys(remainingToys);
                            Swal.fire(
                                'Deleted!',
                                'Your Toy has been deleted.',
                                'success'
                            );

                        }
                    });
            }
        });
    };

    return (
        <div className="bg-[#F4F3F0] p-4 sm:p-8">
            <h2 className="text-3xl font-extrabold mb-8">My Toys</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-300">
                    <thead>
                        <tr>
                            <th className="px-2 py-2 border">Picture</th>
                            <th className="px-4 py-2 border">Name</th>
                            <th className="px-4 py-2 border">Seller Name</th>
                            <th className="px-4 py-2 border">Seller Email</th>
                            <th className="px-4 py-2 border">Sub-category</th>
                            <th className="px-4 py-2 border">Price</th>
                            <th className="px-4 py-2 border">Rating</th>
                            <th className="px-4 py-2 border">Quantity</th>
                            <th className="px-4 py-2 border">Description</th>
                            <th className="px-4 py-2 border">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {toys.map((toy) => (
                            <tr key={toy._id}>
                                <td className="px-2 py-2 border text-center">
                                    <img src={toy.pictureUrl} alt={toy.pictureUrl} className="rounded-xl lg:h-fit lg:w-fit mx-auto" />
                                </td>
                                <td className="px-4 py-2 border text-center">{toy.name}</td>
                                <td className="px-4 py-2 border text-center">{toy.sellerName}</td>
                                <td className="px-4 py-2 border text-center">{toy.sellerEmail}</td>
                                <td className="px-4 py-2 border text-center">{toy.subCategory}</td>
                                <td className="px-4 py-2 border text-center">{toy.price}</td>
                                <td className="px-4 py-2 border text-center">{toy.rating}</td>
                                <td className="px-4 py-2 border text-center">{toy.quantity}</td>
                                <td className="px-4 py-2 border text-center">{toy.description}</td>
                                <td className="px-4 py-2 border text-center">
                                    <Link to={`/mytoys/${toy._id}`}>
                                        <button
                                            className="bg-blue-500 text-white px-2 py-1 rounded mr-2 mb-2"
                                            onClick={() => handleUpdateToy(toy._id)}
                                        >
                                            Update
                                        </button>
                                    </Link>
                                    <button
                                        className="bg-red-500 text-white px-2 py-1 rounded"
                                        onClick={() => handleDeleteToy(toy._id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyToys;
