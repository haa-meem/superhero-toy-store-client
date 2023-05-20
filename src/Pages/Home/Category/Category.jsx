import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Category = () => {
    const [activeTab, setActiveTab] = useState(1);

    const handleTabClick = (tabIndex) => {
        setActiveTab(tabIndex);
    };

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/alltoys')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    const firstThreeObjects = categories.slice(0, 3);
    const secondThreeObjects = categories.slice(3, 6);
    const thirdThreeObjects = categories.slice(6, 9);
    
    return (
        <div className="w-full">
            <h1 className='text-center font-bold text-5xl mb-4'>Shop by Category</h1>
            <div className="tabs tabs-boxed flex justify-center">
                <a
                    className={`tab ${activeTab === 1 ? 'tab-active' : ''}`}
                    onClick={() => handleTabClick(1)}
                >
                    Action Figures
                </a>
                <a
                    className={`tab ${activeTab === 2 ? 'tab-active' : ''}`}
                    onClick={() => handleTabClick(2)}
                >
                    Vehicles & Playsets
                </a>
                <a
                    className={`tab ${activeTab === 3 ? 'tab-active' : ''}`}
                    onClick={() => handleTabClick(3)}
                >
                    Role-Play & Costumes
                </a>
            </div>
            <div className="tab-content my-4 mx-2">
                {activeTab === 1 &&
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {firstThreeObjects.map((item, index) => (
                            <div key={index} className="flex justify-center">
                                <div className="card bg-base-100 shadow-xl">
                                    <figure className="px-4 sm:px-6 pt-6 sm:pt-8">
                                        <img src={item.picture} alt={item.toy_name} className="rounded-xl" />
                                    </figure>
                                    <div className="card-body items-center text-center p-4 sm:p-6">
                                        <h2 className="card-title text-xl sm:text-2xl">{item.toy_name}</h2>
                                        <p><b>Price:</b> {item.price}</p>
                                        <p><b>Rating:</b> {Array(Math.round(item.rating)).fill(<span className="text-yellow-500">&#9733;</span>)} {item.rating}</p>
                                        <div className="card-actions mt-4">
                                            <Link to={`/alltoys/${item._id}`}>
                                                <button className="bg-orange-400 hover:bg-green-500 text-gray-800 font-bold py-2 px-4 rounded">
                                                    View Details
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                }
                {activeTab === 2 &&
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {secondThreeObjects.map((item, index) => (
                            <div key={index} className="flex justify-center">
                                <div className="card bg-base-100 shadow-xl">
                                    <figure className="px-4 sm:px-6 pt-6 sm:pt-8">
                                        <img src={item.picture} alt={item.toy_name} className="rounded-xl" />
                                    </figure>
                                    <div className="card-body items-center text-center p-4 sm:p-6">
                                        <h2 className="card-title text-xl sm:text-2xl">{item.toy_name}</h2>
                                        <p><b>Price:</b> {item.price}</p>
                                        <p><b>Rating:</b> {Array(Math.round(item.rating)).fill(<span className="text-yellow-500">&#9733;</span>)} {item.rating}</p>
                                        <div className="card-actions mt-4">
                                            <Link to={`/alltoys/${item._id}`}>
                                                <button className="bg-orange-400 hover:bg-green-500 text-gray-800 font-bold py-2 px-4 rounded">
                                                    View Details
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                }
                {activeTab === 3 &&
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {thirdThreeObjects.map((item, index) => (
                            <div key={index} className="flex justify-center">
                                <div className="card bg-base-100 shadow-xl">
                                    <figure className="px-4 sm:px-6 pt-6 sm:pt-8">
                                        <img src={item.picture} alt={item.toy_name} className="rounded-xl" />
                                    </figure>
                                    <div className="card-body items-center text-center p-4 sm:p-6">
                                        <h2 className="card-title text-xl sm:text-2xl">{item.toy_name}</h2>
                                        <p><b>Price:</b> {item.price}</p>
                                        <p><b>Rating:</b> {Array(Math.round(item.rating)).fill(<span className="text-yellow-500">&#9733;</span>)} {item.rating}</p>
                                        <div className="card-actions mt-4">
                                            <Link to={`/alltoys/${item._id}`}>
                                                <button className="bg-orange-400 hover:bg-green-500 text-gray-800 font-bold py-2 px-4 rounded">
                                                    View Details
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                }
            </div>
        </div>
    );
};

export default Category;